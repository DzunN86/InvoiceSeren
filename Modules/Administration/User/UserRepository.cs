using Indotalent.Administration.Entities;
using Indotalent.Settings;
using Microsoft.AspNetCore.DataProtection;
using Microsoft.Extensions.Caching.Memory;
using Microsoft.Extensions.Options;
using Serenity;
using Serenity.Abstractions;
using Serenity.Data;
using Serenity.Extensions.Entities;
using Serenity.Services;
using Serenity.Web.Providers;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Data;
using System.IO;
using System.Security.Cryptography;
using System.Text;
using MyRow = Indotalent.Administration.Entities.UserRow;

namespace Indotalent.Administration.Repositories
{
    public partial class UserRepository : BaseRepository
    {
        protected IUserRetrieveService UserRetrieveService { get; }
        public UserRepository(IRequestContext context, IUserRetrieveService userRetrieveService, IOptions<DemoOption> demoOption)
            : base(context)
        {
            UserRetrieveService = userRetrieveService ?? throw new ArgumentNullException(nameof(userRetrieveService));
            var option = demoOption ?? throw new ArgumentNullException(nameof(demoOption));
            IsPublicDemo = option.Value.IsPublicDemo;
        }

        private static MyRow.RowFields fld { get { return MyRow.Fields; } }
        public static bool IsPublicDemo { get; set; }



        public static void CheckPublicDemo(int? userID)
        {
            if (userID == 1 && IsPublicDemo)
                throw new ValidationException("Sorry, but no changes " +
                    "are allowed in public demo on ADMIN user!");
        }

        public static bool IsValidPhone(string number)
        {
            // please change this to a valid check for mobile phones in your country
            return !number.IsNullOrEmpty() && number.Length > 7 && long.TryParse(number, out long _);
        }

        public SaveResponse Create(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            return new MySaveHandler(Context, UserRetrieveService).Process(uow, request, SaveRequestType.Create);
        }

        public SaveResponse Update(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            return new MySaveHandler(Context, UserRetrieveService).Process(uow, request, SaveRequestType.Update);
        }

        public DeleteResponse Delete(IUnitOfWork uow, DeleteRequest request)
        {
            return new MyDeleteHandler(Context, UserRetrieveService).Process(uow, request);
        }

        public UndeleteResponse Undelete(IUnitOfWork uow, UndeleteRequest request)
        {
            return new MyUndeleteHandler(Context, UserRetrieveService).Process(uow, request);
        }

        public RetrieveResponse<MyRow> Retrieve(IDbConnection connection, RetrieveRequest request)
        {
            return new MyRetrieveHandler(Context, UserRetrieveService).Process(connection, request);
        }

        public ListResponse<MyRow> List(IDbConnection connection, ListRequest request)
        {
            return new MyListHandler(Context, UserRetrieveService).Process(connection, request);
        }

        public static string ValidateDisplayName(string displayName, ITextLocalizer localizer)
        {
            displayName = displayName.TrimToNull();

            if (displayName == null)
                throw DataValidation.RequiredError(fld.DisplayName, localizer);

            return displayName;
        }

        public static string ValidatePassword(string password, ITextLocalizer localizer)
        {
            password = password.TrimToNull();

            if (password == null ||
                password.Length < 5)
                throw new ValidationError("PasswordLength", "Password",
                    string.Format(Texts.Validation.MinRequiredPasswordLength.ToString(localizer), 5));

            return password;
        }

        private class MySaveHandler : SaveRequestHandler<MyRow>
        {
            protected IUserRetrieveService UserRetrieveService { get; }
            public MySaveHandler(IRequestContext context, IUserRetrieveService userRetrieve)
                 : base(context)
            {               
                UserRetrieveService = userRetrieve;
            }

            private string password;

            public static MyRow GetUser(IDbConnection connection, BaseCriteria filter)
            {
                var row = new MyRow();
                if (new SqlQuery().From(row)
                    .Select(
                        fld.UserId,
                        fld.Username,
                        fld.DisplayName,
                        fld.PasswordHash,
                        fld.PasswordSalt,
                        fld.IsActive)
                    .Where(filter)
                    .GetFirst(connection))
                {
                    return row;
                }

                return null;
            }

            protected override void GetEditableFields(HashSet<Field> editable)
            {
                base.GetEditableFields(editable);

                if (!Permissions.HasPermission(PermissionKeys.Security))
                {
                    editable.Remove(fld.Source);
                    editable.Remove(fld.IsActive);
                }
            }

            private static bool IsInvariantLetter(char c)
            {
                return (c >= 'A' && c <= 'Z') ||
                    (c >= 'a' && c <= 'z');
            }

            private static bool IsDigit(char c)
            {
                return (c >= '0' && c <= '9');
            }

            private static bool IsValidEmailChar(char c)
            {
                return IsInvariantLetter(c) ||
                    IsDigit(c) ||
                    c == '.' ||
                    c == '_' ||
                    c == '@';
            }

            public static bool IsValidUsername(string name)
            {
                if (name == null ||
                    name.Length < 0)
                    return false;

                var c = name[0];
                if (!IsInvariantLetter(c))
                    return false;

                for (var i = 1; i < name.Length - 1; i++)
                {
                    c = name[i];
                    if (!IsValidEmailChar(c))
                        return false;
                }

                return true;
            }

            public static string ValidateUsername(IDbConnection connection, string username, int? existingUserId,
                ITextLocalizer localizer)
            {
                username = username.TrimToNull();

                if (username == null)
                    throw DataValidation.RequiredError(fld.Username, localizer);

                if (!IsValidUsername(username))
                    throw new ValidationError("InvalidUsername", "Username",
                        "Usernames should start with letters, only contain letters and numbers!");

                var existing = GetUser(connection,
                    new Criteria(fld.Username) == username |
                    new Criteria(fld.Username) == username.Replace('I', 'İ'));

                if (existing != null && existingUserId != existing.UserId)
                    throw new ValidationError("UniqueViolation", "Username",
                        "A user with same name exists. Please choose another!");

                return username;
            }

            public static string ValidateEmail(IDbConnection connection, string email, int? existingUserId,
                ITextLocalizer localizer)
            {
                email = email.TrimToNull();

                if (email == null)
                    throw DataValidation.RequiredError(fld.Email, localizer);

                var existing = GetUser(connection,
                    new Criteria(fld.Email) == email);

                if (existing != null && existingUserId != existing.UserId)
                    throw new ValidationError("UniqueViolation", "Email",
                        "A user with same email exists. Please choose another!");

                return email;
            }

            private void ValidateUserQuota()
            {
                var user = (UserDefinition)User.GetUserDefinition(UserRetrieveService);
                var tenant = Connection.ById<TenantRow>(user.TenantId);
                var maxUser = tenant.MaximumUser;
                var tenantUsers = Connection.List<UserRow>(x => x.SelectTableFields().Where(UserRow.Fields.TenantId == user.TenantId));
                var currentUserCount = tenantUsers.Count;

                if (currentUserCount >= maxUser)
                {
                    throw new ValidationException($"Maximum users reached. Current: {currentUserCount} users. , Quota: {maxUser} users.");
                }

            }

            protected override void ValidateRequest()
            {
                base.ValidateRequest();

                if (IsUpdate)
                {
                    CheckPublicDemo(Row.UserId);

                    if (Row.IsAssigned(fld.Password) && !Row.Password.IsEmptyOrNull())
                        password = Row.Password = ValidatePassword(Row.Password, Localizer);

                    if (Row.Username != Old.Username)
                        Row.Username = ValidateUsername(Connection, Row.Username, Old.UserId.Value, Localizer);

                    if (Row.Email != Old.Email)
                        Row.Email = ValidateEmail(Connection, Row.Email, Old.UserId.Value, Localizer);

                    if (Row.DisplayName != Old.DisplayName)
                        Row.DisplayName = ValidateDisplayName(Row.DisplayName, Localizer);

                    var user = (UserDefinition)User.GetUserDefinition(UserRetrieveService);
                    if (Old.TenantId != user.TenantId)
                        Permissions.ValidatePermission(PermissionKeys.Tenant, Localizer);
                }

                if (IsCreate)
                {
                    ValidateUserQuota();

                    Row.Username = ValidateUsername(Connection, Row.Username, null, Localizer);
                    Row.DisplayName = ValidateDisplayName(Row.DisplayName, Localizer);
                    password = ValidatePassword(Row.Password, Localizer);
                    Row.Email = ValidateEmail(Connection, Row.Email, null, Localizer);
                }
            }

            protected override void SetInternalFields()
            {
                base.SetInternalFields();

                if (IsCreate)
                {
                    Row.Source = "site";
                    Row.IsActive = Row.IsActive ?? 1;

                    if (!Permissions.HasPermission(PermissionKeys.Tenant) ||
                        Row.TenantId == null)
                    {
                        var user = (UserDefinition)User.GetUserDefinition(UserRetrieveService);
                        Row.TenantId = user.TenantId;
                    }
                }

                if (IsCreate || !Row.Password.IsEmptyOrNull())
                {
                    string salt = null;
                    Row.PasswordHash = GenerateHash(password, ref salt);
                    Row.PasswordSalt = salt;
                }
            }

            protected override void AfterSave()
            {
                base.AfterSave();

                if (this.IsCreate && Row.IsTenantAdmin.Value && Permissions.HasPermission(PermissionKeys.Tenant))
                {                    
                    MultiTenantHelper.GenerateDefaultTenantAdminPermission(Row.UserId.Value, this.Connection);                    
                }

                Cache.InvalidateOnCommit(UnitOfWork, fld);
            }
        }

        public static string CalculateHash(string password, string salt)
        {
            return SiteMembershipProvider.ComputeSHA512(password + salt);
        }

        public static string GenerateHash(string password, ref string salt)
        {
            salt = salt ?? Serenity.IO.TemporaryFileHelper.RandomFileCode().Substring(0, 5);
            return CalculateHash(password, salt);
        }

        private class MyDeleteHandler : DeleteRequestHandler<MyRow>
        {
            protected IUserRetrieveService UserRetrieveService { get; }
            public MyDeleteHandler(IRequestContext context, IUserRetrieveService userRetrieveService)
                 : base(context)
            {
                UserRetrieveService = userRetrieveService ?? throw new ArgumentNullException(nameof(userRetrieveService));
            }

            protected override void ValidateRequest()
            {
                base.ValidateRequest();

                CheckPublicDemo(Row.UserId);

                var user = (UserDefinition)User.GetUserDefinition(UserRetrieveService);
                if (Row.TenantId != user.TenantId)
                    Permissions.ValidatePermission(PermissionKeys.Tenant, Localizer);

                if (Row.UserId == user.UserId)
                {
                    throw new ValidationException("Self delete is not allowed, please contact your admin.");
                }

                if (Row.IsTenantAdmin == true)
                {
                    if (!Permissions.HasPermission(PermissionKeys.Tenant))
                    {
                        throw new ValidationException("Company admin deletion is not allowed, please contact support.");
                    }
                }

                if (Row.UserId == 1)
                {
                    throw new ValidationException("Root admin deletion is not allowed, please contact your boss.");
                }
            }

            protected override void OnBeforeDelete()
            {
                base.OnBeforeDelete();

                new SqlDelete(UserPreferenceRow.Fields.TableName)
                    .Where(UserPreferenceRow.Fields.UserId == Row.UserId.Value)
                    .Execute(Connection, ExpectedRows.Ignore);

                new SqlDelete(Entities.UserRoleRow.Fields.TableName)
                    .Where(Entities.UserRoleRow.Fields.UserId == Row.UserId.Value)
                    .Execute(Connection, ExpectedRows.Ignore);

                new SqlDelete(Entities.UserPermissionRow.Fields.TableName)
                    .Where(Entities.UserPermissionRow.Fields.UserId == Row.UserId.Value)
                    .Execute(Connection, ExpectedRows.Ignore);
            }
        }

        private class MyUndeleteHandler : UndeleteRequestHandler<MyRow>
        {
            protected IUserRetrieveService UserRetrieveService { get; }
            public MyUndeleteHandler(IRequestContext context, IUserRetrieveService userRetrieveService)
                 : base(context)
            {
                UserRetrieveService = userRetrieveService ?? throw new ArgumentNullException(nameof(userRetrieveService));
            }

            protected override void ValidateRequest()
            {
                base.ValidateRequest();

                var user = (UserDefinition)User.GetUserDefinition(UserRetrieveService);
                if (Row.TenantId != user.TenantId)
                    Permissions.ValidatePermission(PermissionKeys.Tenant, Localizer);
            }
        }

        private class MyRetrieveHandler : RetrieveRequestHandler<MyRow>
        {
            protected IUserRetrieveService UserRetrieveService { get; }
            public MyRetrieveHandler(IRequestContext context, IUserRetrieveService userRetrieveService)
                 : base(context)
            {
                UserRetrieveService = userRetrieveService ?? throw new ArgumentNullException(nameof(userRetrieveService));
            }
            protected override void PrepareQuery(SqlQuery query)
            {
                base.PrepareQuery(query);

                var user = (UserDefinition)User.GetUserDefinition(UserRetrieveService);
                if (!Permissions.HasPermission(PermissionKeys.Tenant))
                    query.Where(fld.TenantId == user.TenantId);
            }
        }

        private class MyListHandler : ListRequestHandler<MyRow>
        {
            protected IUserRetrieveService UserRetrieveService { get; }
            public MyListHandler(IRequestContext context, IUserRetrieveService userRetrieveService)
                 : base(context)
            {
                UserRetrieveService = userRetrieveService ?? throw new ArgumentNullException(nameof(userRetrieveService));
            }
            protected override void ApplyFilters(SqlQuery query)
            {
                base.ApplyFilters(query);

                var user = (UserDefinition)User.GetUserDefinition(UserRetrieveService);
                if (!Permissions.HasPermission(PermissionKeys.Tenant))
                    query.Where(fld.TenantId == user.TenantId);
            }
        }
    }
}
