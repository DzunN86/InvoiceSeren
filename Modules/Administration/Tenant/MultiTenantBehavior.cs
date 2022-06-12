using Indotalent.Administration;
using Serenity;
using Serenity.Abstractions;
using Serenity.Data;
using Serenity.Services;
using System;

namespace Indotalent
{
    public class MultiTenantBehavior : IImplicitBehavior,
        ISaveBehavior, IDeleteBehavior,
        IListBehavior, IRetrieveBehavior
    {
        private Int32Field fldTenantId;
        protected IUserRetrieveService UserRetrieveService { get; }
        protected IUserAccessor UserAccessor { get; }
        protected IPermissionService Permissions { get; }
        protected ITextLocalizer Localizer { get; }

        public MultiTenantBehavior(IUserRetrieveService userRetrieveService, IUserAccessor userAccessor, IPermissionService permissions, ITextLocalizer localizer)
        {
            UserRetrieveService = userRetrieveService ?? throw new ArgumentNullException(nameof(userRetrieveService));
            UserAccessor = userAccessor ?? throw new ArgumentNullException(nameof(userAccessor));
            Permissions = permissions ?? throw new ArgumentNullException(nameof(permissions));
            Localizer = localizer ?? throw new ArgumentNullException(nameof(localizer));
        }

        public bool ActivateFor(IRow row)
        {
            var mt = row as IMultiTenantRow;
            if (mt == null)
                return false;

            fldTenantId = mt.TenantIdField;
            return true;
        }

        public void OnPrepareQuery(IRetrieveRequestHandler handler,
            SqlQuery query)
        {
            var username = UserAccessor.User?.Identity?.Name;
            if (UserRetrieveService.ByUsername(username) is UserDefinition user)
            {
                if (!Permissions.HasPermission(PermissionKeys.Tenant))
                    query.Where(fldTenantId == user.TenantId);
            }
        }

        public void OnPrepareQuery(IListRequestHandler handler,
            SqlQuery query)
        {
            var username = UserAccessor.User?.Identity?.Name;
            if (UserRetrieveService.ByUsername(username) is UserDefinition user)
            {
                if (!Permissions.HasPermission(PermissionKeys.Tenant))
                    query.Where(fldTenantId == user.TenantId);
            }
        }

        public void OnSetInternalFields(ISaveRequestHandler handler)
        {
            var username = UserAccessor.User?.Identity?.Name;
            if (UserRetrieveService.ByUsername(username) is UserDefinition user)
            {
                if (handler.IsCreate)
                    fldTenantId[handler.Row] = user.TenantId;
            }
        }

        public void OnValidateRequest(ISaveRequestHandler handler)
        {
            if (handler.IsUpdate)
            {
                if (fldTenantId[handler.Old] != fldTenantId[handler.Row])
                    Permissions.ValidatePermission(PermissionKeys.Tenant, Localizer);
            }
        }

        public void OnValidateRequest(IDeleteRequestHandler handler)
        {
            var username = UserAccessor.User?.Identity?.Name;
            if (UserRetrieveService.ByUsername(username) is UserDefinition user)
            {
                if (fldTenantId[handler.Row] != user.TenantId)
                    Permissions.ValidatePermission(PermissionKeys.Tenant, Localizer);
            }
        }

        public void OnAfterDelete(IDeleteRequestHandler handler) { }
        public void OnAfterExecuteQuery(IRetrieveRequestHandler handler) { }
        public void OnAfterExecuteQuery(IListRequestHandler handler) { }
        public void OnAfterSave(ISaveRequestHandler handler) { }
        public void OnApplyFilters(IListRequestHandler handler, SqlQuery query) { }
        public void OnAudit(IDeleteRequestHandler handler) { }
        public void OnAudit(ISaveRequestHandler handler) { }
        public void OnBeforeDelete(IDeleteRequestHandler handler) { }
        public void OnBeforeExecuteQuery(IRetrieveRequestHandler handler) { }
        public void OnBeforeExecuteQuery(IListRequestHandler handler) { }
        public void OnBeforeSave(ISaveRequestHandler handler) { }
        public void OnPrepareQuery(IDeleteRequestHandler handler, SqlQuery query) { }
        public void OnPrepareQuery(ISaveRequestHandler handler, SqlQuery query) { }
        public void OnReturn(IDeleteRequestHandler handler) { }
        public void OnReturn(IRetrieveRequestHandler handler) { }
        public void OnReturn(IListRequestHandler handler) { }
        public void OnReturn(ISaveRequestHandler handler) { }
        public void OnValidateRequest(IRetrieveRequestHandler handler) { }
        public void OnValidateRequest(IListRequestHandler handler) { }
    }
}