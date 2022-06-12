/// <reference types="serenity.corelib" />
/// <reference types="jquery" />
/// <reference types="jquery.blockui" />
/// <reference types="jquery.validation" />
/// <reference types="jqueryui" />
/// <reference types="serenity.pro.ui" />
/// <reference types="serenity.pro.extensions" />
/// <reference types="serenity.extensions" />
declare namespace Indotalent.Administration {
    class LanguageColumns {
        static columnsKey: string;
    }
}
declare namespace Indotalent.Administration {
    interface LanguageForm {
        LanguageId: Serenity.StringEditor;
        LanguageName: Serenity.StringEditor;
    }
    class LanguageForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Indotalent.Administration {
    interface LanguageRow {
        Id?: number;
        LanguageId?: string;
        LanguageName?: string;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
    }
    namespace LanguageRow {
        const idProperty = "Id";
        const nameProperty = "LanguageName";
        const localTextPrefix = "Administration.Language";
        const lookupKey = "Administration.Language";
        function getLookup(): Q.Lookup<LanguageRow>;
        const deletePermission = "Administration:Translation";
        const insertPermission = "Administration:Translation";
        const readPermission = "Administration:Translation";
        const updatePermission = "Administration:Translation";
        const enum Fields {
            Id = "Id",
            LanguageId = "LanguageId",
            LanguageName = "LanguageName",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate"
        }
    }
}
declare namespace Indotalent.Administration {
    namespace LanguageService {
        const baseUrl = "Administration/Language";
        function Create(request: Serenity.SaveRequest<LanguageRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<LanguageRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<LanguageRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<LanguageRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Administration/Language/Create",
            Update = "Administration/Language/Update",
            Delete = "Administration/Language/Delete",
            Retrieve = "Administration/Language/Retrieve",
            List = "Administration/Language/List"
        }
    }
}
declare namespace Indotalent.Administration {
    namespace PermissionKeys {
        const Security = "Administration:Security";
        const Translation = "Administration:Translation";
        const Tenant = "Administration:Tenant";
    }
}
declare namespace Indotalent.Administration {
    class RoleColumns {
        static columnsKey: string;
    }
}
declare namespace Indotalent.Administration {
    interface RoleForm {
        RoleName: Serenity.StringEditor;
    }
    class RoleForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Indotalent.Administration {
    interface RolePermissionListRequest extends Serenity.ServiceRequest {
        RoleID?: number;
        Module?: string;
        Submodule?: string;
    }
}
declare namespace Indotalent.Administration {
    interface RolePermissionListResponse extends Serenity.ListResponse<string> {
    }
}
declare namespace Indotalent.Administration {
    interface RolePermissionRow {
        RolePermissionId?: number;
        RoleId?: number;
        PermissionKey?: string;
        RoleRoleName?: string;
    }
    namespace RolePermissionRow {
        const idProperty = "RolePermissionId";
        const nameProperty = "PermissionKey";
        const localTextPrefix = "Administration.RolePermission";
        const deletePermission = "Administration:Security";
        const insertPermission = "Administration:Security";
        const readPermission = "Administration:Security";
        const updatePermission = "Administration:Security";
        const enum Fields {
            RolePermissionId = "RolePermissionId",
            RoleId = "RoleId",
            PermissionKey = "PermissionKey",
            RoleRoleName = "RoleRoleName"
        }
    }
}
declare namespace Indotalent.Administration {
    namespace RolePermissionService {
        const baseUrl = "Administration/RolePermission";
        function Update(request: RolePermissionUpdateRequest, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: RolePermissionListRequest, onSuccess?: (response: RolePermissionListResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Update = "Administration/RolePermission/Update",
            List = "Administration/RolePermission/List"
        }
    }
}
declare namespace Indotalent.Administration {
    interface RolePermissionUpdateRequest extends Serenity.ServiceRequest {
        RoleID?: number;
        Module?: string;
        Submodule?: string;
        Permissions?: string[];
    }
}
declare namespace Indotalent.Administration {
    interface RoleRow {
        RoleId?: number;
        RoleName?: string;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
    }
    namespace RoleRow {
        const idProperty = "RoleId";
        const nameProperty = "RoleName";
        const localTextPrefix = "Administration.Role";
        const lookupKey = "Administration.Role";
        function getLookup(): Q.Lookup<RoleRow>;
        const deletePermission = "Administration:Security";
        const insertPermission = "Administration:Security";
        const readPermission = "Administration:Security";
        const updatePermission = "Administration:Security";
        const enum Fields {
            RoleId = "RoleId",
            RoleName = "RoleName",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate"
        }
    }
}
declare namespace Indotalent.Administration {
    namespace RoleService {
        const baseUrl = "Administration/Role";
        function Create(request: Serenity.SaveRequest<RoleRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<RoleRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<RoleRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<RoleRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Administration/Role/Create",
            Update = "Administration/Role/Update",
            Delete = "Administration/Role/Delete",
            Retrieve = "Administration/Role/Retrieve",
            List = "Administration/Role/List"
        }
    }
}
declare namespace Indotalent.Administration {
    class TenantColumns {
        static columnsKey: string;
    }
}
declare namespace Indotalent.Administration {
    interface TenantForm {
        TenantName: Serenity.StringEditor;
        Description: Serenity.TextAreaEditor;
        Currency: Serenity.StringEditor;
        Street: Serenity.StringEditor;
        City: Serenity.StringEditor;
        State: Serenity.StringEditor;
        ZipCode: Serenity.StringEditor;
        Phone: Serenity.StringEditor;
        Email: Serenity.StringEditor;
        ProductNumberPrefix: Serenity.StringEditor;
        ProductNumberUseDate: Serenity.BooleanEditor;
        ProductNumberLength: Serenity.IntegerEditor;
        CustomerNumberPrefix: Serenity.StringEditor;
        CustomerNumberUseDate: Serenity.BooleanEditor;
        CustomerNumberLength: Serenity.IntegerEditor;
        SalesNumberPrefix: Serenity.StringEditor;
        SalesNumberUseDate: Serenity.BooleanEditor;
        SalesNumberLength: Serenity.IntegerEditor;
        InvoiceNumberPrefix: Serenity.StringEditor;
        InvoiceNumberUseDate: Serenity.BooleanEditor;
        InvoiceNumberLength: Serenity.IntegerEditor;
        InvoicePaymentNumberPrefix: Serenity.StringEditor;
        InvoicePaymentNumberUseDate: Serenity.BooleanEditor;
        InvoicePaymentNumberLength: Serenity.IntegerEditor;
        VendorNumberPrefix: Serenity.StringEditor;
        VendorNumberUseDate: Serenity.BooleanEditor;
        VendorNumberLength: Serenity.IntegerEditor;
        PurchaseNumberPrefix: Serenity.StringEditor;
        PurchaseNumberUseDate: Serenity.BooleanEditor;
        PurchaseNumberLength: Serenity.IntegerEditor;
        BillNumberPrefix: Serenity.StringEditor;
        BillNumberUseDate: Serenity.BooleanEditor;
        BillNumberLength: Serenity.IntegerEditor;
        BillPaymentNumberPrefix: Serenity.StringEditor;
        BillPaymentNumberUseDate: Serenity.BooleanEditor;
        BillPaymentNumberLength: Serenity.IntegerEditor;
        MaximumUser: Serenity.IntegerEditor;
    }
    class TenantForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Indotalent.Administration {
    interface TenantRow {
        TenantId?: number;
        TenantName?: string;
        Description?: string;
        Street?: string;
        City?: string;
        State?: string;
        ZipCode?: string;
        Phone?: string;
        Email?: string;
        Currency?: string;
        MaximumUser?: number;
        ProductNumberPrefix?: string;
        ProductNumberUseDate?: boolean;
        ProductNumberLength?: number;
        CustomerNumberPrefix?: string;
        CustomerNumberUseDate?: boolean;
        CustomerNumberLength?: number;
        SalesNumberPrefix?: string;
        SalesNumberUseDate?: boolean;
        SalesNumberLength?: number;
        InvoiceNumberPrefix?: string;
        InvoiceNumberUseDate?: boolean;
        InvoiceNumberLength?: number;
        InvoicePaymentNumberPrefix?: string;
        InvoicePaymentNumberUseDate?: boolean;
        InvoicePaymentNumberLength?: number;
        VendorNumberPrefix?: string;
        VendorNumberUseDate?: boolean;
        VendorNumberLength?: number;
        PurchaseNumberPrefix?: string;
        PurchaseNumberUseDate?: boolean;
        PurchaseNumberLength?: number;
        BillNumberPrefix?: string;
        BillNumberUseDate?: boolean;
        BillNumberLength?: number;
        BillPaymentNumberPrefix?: string;
        BillPaymentNumberUseDate?: boolean;
        BillPaymentNumberLength?: number;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
    }
    namespace TenantRow {
        const idProperty = "TenantId";
        const nameProperty = "TenantName";
        const localTextPrefix = "Administration.Tenant";
        const lookupKey = "Administration.Tenant";
        function getLookup(): Q.Lookup<TenantRow>;
        const deletePermission = "Administration:Tenant";
        const insertPermission = "Administration:Tenant";
        const readPermission = "Administration:Tenant";
        const updatePermission = "Administration:Tenant";
        const enum Fields {
            TenantId = "TenantId",
            TenantName = "TenantName",
            Description = "Description",
            Street = "Street",
            City = "City",
            State = "State",
            ZipCode = "ZipCode",
            Phone = "Phone",
            Email = "Email",
            Currency = "Currency",
            MaximumUser = "MaximumUser",
            ProductNumberPrefix = "ProductNumberPrefix",
            ProductNumberUseDate = "ProductNumberUseDate",
            ProductNumberLength = "ProductNumberLength",
            CustomerNumberPrefix = "CustomerNumberPrefix",
            CustomerNumberUseDate = "CustomerNumberUseDate",
            CustomerNumberLength = "CustomerNumberLength",
            SalesNumberPrefix = "SalesNumberPrefix",
            SalesNumberUseDate = "SalesNumberUseDate",
            SalesNumberLength = "SalesNumberLength",
            InvoiceNumberPrefix = "InvoiceNumberPrefix",
            InvoiceNumberUseDate = "InvoiceNumberUseDate",
            InvoiceNumberLength = "InvoiceNumberLength",
            InvoicePaymentNumberPrefix = "InvoicePaymentNumberPrefix",
            InvoicePaymentNumberUseDate = "InvoicePaymentNumberUseDate",
            InvoicePaymentNumberLength = "InvoicePaymentNumberLength",
            VendorNumberPrefix = "VendorNumberPrefix",
            VendorNumberUseDate = "VendorNumberUseDate",
            VendorNumberLength = "VendorNumberLength",
            PurchaseNumberPrefix = "PurchaseNumberPrefix",
            PurchaseNumberUseDate = "PurchaseNumberUseDate",
            PurchaseNumberLength = "PurchaseNumberLength",
            BillNumberPrefix = "BillNumberPrefix",
            BillNumberUseDate = "BillNumberUseDate",
            BillNumberLength = "BillNumberLength",
            BillPaymentNumberPrefix = "BillPaymentNumberPrefix",
            BillPaymentNumberUseDate = "BillPaymentNumberUseDate",
            BillPaymentNumberLength = "BillPaymentNumberLength",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate"
        }
    }
}
declare namespace Indotalent.Administration {
    namespace TenantService {
        const baseUrl = "Administration/Tenant";
        function Create(request: Serenity.SaveRequest<TenantRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<TenantRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<TenantRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<TenantRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Administration/Tenant/Create",
            Update = "Administration/Tenant/Update",
            Delete = "Administration/Tenant/Delete",
            Retrieve = "Administration/Tenant/Retrieve",
            List = "Administration/Tenant/List"
        }
    }
}
declare namespace Indotalent.Administration {
    interface TranslationItem {
        Key?: string;
        SourceText?: string;
        TargetText?: string;
        CustomText?: string;
    }
}
declare namespace Indotalent.Administration {
    interface TranslationListRequest extends Serenity.ListRequest {
        SourceLanguageID?: string;
        TargetLanguageID?: string;
    }
}
declare namespace Indotalent.Administration {
    namespace TranslationService {
        const baseUrl = "Administration/Translation";
        function List(request: TranslationListRequest, onSuccess?: (response: Serenity.ListResponse<TranslationItem>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: TranslationUpdateRequest, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            List = "Administration/Translation/List",
            Update = "Administration/Translation/Update"
        }
    }
}
declare namespace Indotalent.Administration {
    interface TranslationUpdateRequest extends Serenity.ServiceRequest {
        TargetLanguageID?: string;
        Translations?: {
            [key: string]: string;
        };
    }
}
declare namespace Indotalent.Administration {
    class UserColumns {
        static columnsKey: string;
    }
}
declare namespace Indotalent.Administration {
    interface UserForm {
        Username: Serenity.StringEditor;
        DisplayName: Serenity.StringEditor;
        Email: Serenity.EmailEditor;
        UserImage: Serenity.ImageUploadEditor;
        Password: Serenity.PasswordEditor;
        PasswordConfirm: Serenity.PasswordEditor;
        Source: Serenity.StringEditor;
    }
    class UserForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Indotalent.Administration {
    interface UserPermissionListRequest extends Serenity.ServiceRequest {
        UserID?: number;
        Module?: string;
        Submodule?: string;
    }
}
declare namespace Indotalent.Administration {
    interface UserPermissionRow {
        UserPermissionId?: number;
        UserId?: number;
        PermissionKey?: string;
        Granted?: boolean;
        Username?: string;
        User?: string;
    }
    namespace UserPermissionRow {
        const idProperty = "UserPermissionId";
        const nameProperty = "PermissionKey";
        const localTextPrefix = "Administration.UserPermission";
        const deletePermission = "Administration:Security";
        const insertPermission = "Administration:Security";
        const readPermission = "Administration:Security";
        const updatePermission = "Administration:Security";
        const enum Fields {
            UserPermissionId = "UserPermissionId",
            UserId = "UserId",
            PermissionKey = "PermissionKey",
            Granted = "Granted",
            Username = "Username",
            User = "User"
        }
    }
}
declare namespace Indotalent.Administration {
    namespace UserPermissionService {
        const baseUrl = "Administration/UserPermission";
        function Update(request: UserPermissionUpdateRequest, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: UserPermissionListRequest, onSuccess?: (response: Serenity.ListResponse<UserPermissionRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function ListRolePermissions(request: UserPermissionListRequest, onSuccess?: (response: Serenity.ListResponse<string>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function ListPermissionKeys(request: Serenity.ServiceRequest, onSuccess?: (response: Serenity.ListResponse<string>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Update = "Administration/UserPermission/Update",
            List = "Administration/UserPermission/List",
            ListRolePermissions = "Administration/UserPermission/ListRolePermissions",
            ListPermissionKeys = "Administration/UserPermission/ListPermissionKeys"
        }
    }
}
declare namespace Indotalent.Administration {
    interface UserPermissionUpdateRequest extends Serenity.ServiceRequest {
        UserID?: number;
        Module?: string;
        Submodule?: string;
        Permissions?: UserPermissionRow[];
    }
}
declare namespace Indotalent.Administration {
    interface UserRoleListRequest extends Serenity.ServiceRequest {
        UserID?: number;
    }
}
declare namespace Indotalent.Administration {
    interface UserRoleListResponse extends Serenity.ListResponse<number> {
    }
}
declare namespace Indotalent.Administration {
    interface UserRoleRow {
        UserRoleId?: number;
        UserId?: number;
        RoleId?: number;
        Username?: string;
        User?: string;
    }
    namespace UserRoleRow {
        const idProperty = "UserRoleId";
        const localTextPrefix = "Administration.UserRole";
        const deletePermission = "Administration:Security";
        const insertPermission = "Administration:Security";
        const readPermission = "Administration:Security";
        const updatePermission = "Administration:Security";
        const enum Fields {
            UserRoleId = "UserRoleId",
            UserId = "UserId",
            RoleId = "RoleId",
            Username = "Username",
            User = "User"
        }
    }
}
declare namespace Indotalent.Administration {
    namespace UserRoleService {
        const baseUrl = "Administration/UserRole";
        function Update(request: UserRoleUpdateRequest, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: UserRoleListRequest, onSuccess?: (response: UserRoleListResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Update = "Administration/UserRole/Update",
            List = "Administration/UserRole/List"
        }
    }
}
declare namespace Indotalent.Administration {
    interface UserRoleUpdateRequest extends Serenity.ServiceRequest {
        UserID?: number;
        Roles?: number[];
    }
}
declare namespace Indotalent.Administration {
    interface UserRow {
        UserId?: number;
        Username?: string;
        Source?: string;
        PasswordHash?: string;
        PasswordSalt?: string;
        DisplayName?: string;
        Email?: string;
        UserImage?: string;
        LastDirectoryUpdate?: string;
        TenantId?: number;
        TenantName?: string;
        IsActive?: number;
        IsTenantAdmin?: boolean;
        Password?: string;
        PasswordConfirm?: string;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
    }
    namespace UserRow {
        const idProperty = "UserId";
        const isActiveProperty = "IsActive";
        const nameProperty = "Username";
        const localTextPrefix = "Administration.User";
        const lookupKey = "Administration.User";
        function getLookup(): Q.Lookup<UserRow>;
        const deletePermission = "Administration:Security";
        const insertPermission = "Administration:Security";
        const readPermission = "Administration:Security";
        const updatePermission = "Administration:Security";
        const enum Fields {
            UserId = "UserId",
            Username = "Username",
            Source = "Source",
            PasswordHash = "PasswordHash",
            PasswordSalt = "PasswordSalt",
            DisplayName = "DisplayName",
            Email = "Email",
            UserImage = "UserImage",
            LastDirectoryUpdate = "LastDirectoryUpdate",
            TenantId = "TenantId",
            TenantName = "TenantName",
            IsActive = "IsActive",
            IsTenantAdmin = "IsTenantAdmin",
            Password = "Password",
            PasswordConfirm = "PasswordConfirm",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate"
        }
    }
}
declare namespace Indotalent.Administration {
    namespace UserService {
        const baseUrl = "Administration/User";
        function Create(request: Serenity.SaveRequest<UserRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<UserRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Undelete(request: Serenity.UndeleteRequest, onSuccess?: (response: Serenity.UndeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<UserRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<UserRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Administration/User/Create",
            Update = "Administration/User/Update",
            Delete = "Administration/User/Delete",
            Undelete = "Administration/User/Undelete",
            Retrieve = "Administration/User/Retrieve",
            List = "Administration/User/List"
        }
    }
}
declare namespace Indotalent {
    interface GetNextNumberRequest extends Serenity.ServiceRequest {
        Prefix?: string;
        Length?: number;
    }
}
declare namespace Indotalent {
    interface GetNextNumberResponse extends Serenity.ServiceResponse {
        Number?: number;
        Serial?: string;
    }
}
declare namespace Indotalent.Membership {
    interface ChangePasswordForm {
        OldPassword: Serenity.PasswordEditor;
        NewPassword: Serenity.PasswordEditor;
        ConfirmPassword: Serenity.PasswordEditor;
    }
    class ChangePasswordForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Indotalent.Membership {
    interface ChangePasswordRequest extends Serenity.ServiceRequest {
        OldPassword?: string;
        NewPassword?: string;
        ConfirmPassword?: string;
    }
}
declare namespace Indotalent.Membership {
    interface ForgotPasswordForm {
        Email: Serenity.EmailAddressEditor;
    }
    class ForgotPasswordForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Indotalent.Membership {
    interface ForgotPasswordRequest extends Serenity.ServiceRequest {
        Email?: string;
    }
}
declare namespace Indotalent.Membership {
    interface LoginForm {
        Username: Serenity.StringEditor;
        Password: Serenity.PasswordEditor;
    }
    class LoginForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Indotalent.Membership {
    interface LoginRequest extends Serenity.ServiceRequest {
        Username?: string;
        Password?: string;
    }
}
declare namespace Indotalent.Membership {
    interface ResetPasswordForm {
        NewPassword: Serenity.PasswordEditor;
        ConfirmPassword: Serenity.PasswordEditor;
    }
    class ResetPasswordForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Indotalent.Membership {
    interface ResetPasswordRequest extends Serenity.ServiceRequest {
        Token?: string;
        NewPassword?: string;
        ConfirmPassword?: string;
    }
}
declare namespace Indotalent.Membership {
    interface SignUpForm {
        DisplayName: Serenity.StringEditor;
        Email: Serenity.EmailAddressEditor;
        ConfirmEmail: Serenity.EmailAddressEditor;
        Password: Serenity.PasswordEditor;
        ConfirmPassword: Serenity.PasswordEditor;
    }
    class SignUpForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Indotalent.Membership {
    interface SignUpRequest extends Serenity.ServiceRequest {
        DisplayName?: string;
        Email?: string;
        Password?: string;
    }
}
declare namespace Indotalent.Merchandise {
    class BrandColumns {
        static columnsKey: string;
    }
}
declare namespace Indotalent.Merchandise {
    interface BrandForm {
        Name: Serenity.StringEditor;
        Description: Serenity.StringEditor;
        InsertDate: Serenity.DateEditor;
        InsertUserId: Serenity.IntegerEditor;
        UpdateDate: Serenity.DateEditor;
        UpdateUserId: Serenity.IntegerEditor;
        TenantId: Serenity.IntegerEditor;
    }
    class BrandForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Indotalent.Merchandise {
    interface BrandRow {
        Id?: number;
        Name?: string;
        Description?: string;
        InsertDate?: string;
        InsertUserId?: number;
        UpdateDate?: string;
        UpdateUserId?: number;
        TenantId?: number;
    }
    namespace BrandRow {
        const idProperty = "Id";
        const nameProperty = "Name";
        const localTextPrefix = "Merchandise.Brand";
        const deletePermission = "Merchandise:Brand";
        const insertPermission = "Merchandise:Brand";
        const readPermission = "Merchandise:Brand";
        const updatePermission = "Merchandise:Brand";
        const enum Fields {
            Id = "Id",
            Name = "Name",
            Description = "Description",
            InsertDate = "InsertDate",
            InsertUserId = "InsertUserId",
            UpdateDate = "UpdateDate",
            UpdateUserId = "UpdateUserId",
            TenantId = "TenantId"
        }
    }
}
declare namespace Indotalent.Merchandise {
    namespace BrandService {
        const baseUrl = "Merchandise/Brand";
        function Create(request: Serenity.SaveRequest<BrandRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<BrandRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<BrandRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<BrandRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Merchandise/Brand/Create",
            Update = "Merchandise/Brand/Update",
            Delete = "Merchandise/Brand/Delete",
            Retrieve = "Merchandise/Brand/Retrieve",
            List = "Merchandise/Brand/List"
        }
    }
}
declare namespace Indotalent.Merchandise {
    class CategoryColumns {
        static columnsKey: string;
    }
}
declare namespace Indotalent.Merchandise {
    interface CategoryForm {
        Name: Serenity.StringEditor;
        Description: Serenity.StringEditor;
        InsertDate: Serenity.DateEditor;
        InsertUserId: Serenity.IntegerEditor;
        UpdateDate: Serenity.DateEditor;
        UpdateUserId: Serenity.IntegerEditor;
        TenantId: Serenity.IntegerEditor;
    }
    class CategoryForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Indotalent.Merchandise {
    interface CategoryRow {
        Id?: number;
        Name?: string;
        Description?: string;
        InsertDate?: string;
        InsertUserId?: number;
        UpdateDate?: string;
        UpdateUserId?: number;
        TenantId?: number;
    }
    namespace CategoryRow {
        const idProperty = "Id";
        const nameProperty = "Name";
        const localTextPrefix = "Merchandise.Category";
        const deletePermission = "Merchandise:Category";
        const insertPermission = "Merchandise:Category";
        const readPermission = "Merchandise:Category";
        const updatePermission = "Merchandise:Category";
        const enum Fields {
            Id = "Id",
            Name = "Name",
            Description = "Description",
            InsertDate = "InsertDate",
            InsertUserId = "InsertUserId",
            UpdateDate = "UpdateDate",
            UpdateUserId = "UpdateUserId",
            TenantId = "TenantId"
        }
    }
}
declare namespace Indotalent.Merchandise {
    namespace CategoryService {
        const baseUrl = "Merchandise/Category";
        function Create(request: Serenity.SaveRequest<CategoryRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<CategoryRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<CategoryRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<CategoryRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Merchandise/Category/Create",
            Update = "Merchandise/Category/Update",
            Delete = "Merchandise/Category/Delete",
            Retrieve = "Merchandise/Category/Retrieve",
            List = "Merchandise/Category/List"
        }
    }
}
declare namespace Indotalent.Merchandise {
    class ColourColumns {
        static columnsKey: string;
    }
}
declare namespace Indotalent.Merchandise {
    interface ColourForm {
        Name: Serenity.StringEditor;
        Description: Serenity.StringEditor;
        InsertDate: Serenity.DateEditor;
        InsertUserId: Serenity.IntegerEditor;
        UpdateDate: Serenity.DateEditor;
        UpdateUserId: Serenity.IntegerEditor;
        TenantId: Serenity.IntegerEditor;
    }
    class ColourForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Indotalent.Merchandise {
    interface ColourRow {
        Id?: number;
        Name?: string;
        Description?: string;
        InsertDate?: string;
        InsertUserId?: number;
        UpdateDate?: string;
        UpdateUserId?: number;
        TenantId?: number;
    }
    namespace ColourRow {
        const idProperty = "Id";
        const nameProperty = "Name";
        const localTextPrefix = "Merchandise.Colour";
        const deletePermission = "Merchandise:Colour";
        const insertPermission = "Merchandise:Colour";
        const readPermission = "Merchandise:Colour";
        const updatePermission = "Merchandise:Colour";
        const enum Fields {
            Id = "Id",
            Name = "Name",
            Description = "Description",
            InsertDate = "InsertDate",
            InsertUserId = "InsertUserId",
            UpdateDate = "UpdateDate",
            UpdateUserId = "UpdateUserId",
            TenantId = "TenantId"
        }
    }
}
declare namespace Indotalent.Merchandise {
    namespace ColourService {
        const baseUrl = "Merchandise/Colour";
        function Create(request: Serenity.SaveRequest<ColourRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<ColourRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ColourRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ColourRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Merchandise/Colour/Create",
            Update = "Merchandise/Colour/Update",
            Delete = "Merchandise/Colour/Delete",
            Retrieve = "Merchandise/Colour/Retrieve",
            List = "Merchandise/Colour/List"
        }
    }
}
declare namespace Indotalent.Merchandise {
    class FlavourColumns {
        static columnsKey: string;
    }
}
declare namespace Indotalent.Merchandise {
    interface FlavourForm {
        Name: Serenity.StringEditor;
        Description: Serenity.StringEditor;
        InsertDate: Serenity.DateEditor;
        InsertUserId: Serenity.IntegerEditor;
        UpdateDate: Serenity.DateEditor;
        UpdateUserId: Serenity.IntegerEditor;
        TenantId: Serenity.IntegerEditor;
    }
    class FlavourForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Indotalent.Merchandise {
    interface FlavourRow {
        Id?: number;
        Name?: string;
        Description?: string;
        InsertDate?: string;
        InsertUserId?: number;
        UpdateDate?: string;
        UpdateUserId?: number;
        TenantId?: number;
    }
    namespace FlavourRow {
        const idProperty = "Id";
        const nameProperty = "Name";
        const localTextPrefix = "Merchandise.Flavour";
        const deletePermission = "Merchandise:Flavour";
        const insertPermission = "Merchandise:Flavour";
        const readPermission = "Merchandise:Flavour";
        const updatePermission = "Merchandise:Flavour";
        const enum Fields {
            Id = "Id",
            Name = "Name",
            Description = "Description",
            InsertDate = "InsertDate",
            InsertUserId = "InsertUserId",
            UpdateDate = "UpdateDate",
            UpdateUserId = "UpdateUserId",
            TenantId = "TenantId"
        }
    }
}
declare namespace Indotalent.Merchandise {
    namespace FlavourService {
        const baseUrl = "Merchandise/Flavour";
        function Create(request: Serenity.SaveRequest<FlavourRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<FlavourRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<FlavourRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<FlavourRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Merchandise/Flavour/Create",
            Update = "Merchandise/Flavour/Update",
            Delete = "Merchandise/Flavour/Delete",
            Retrieve = "Merchandise/Flavour/Retrieve",
            List = "Merchandise/Flavour/List"
        }
    }
}
declare namespace Indotalent.Merchandise {
    class ProductColumns {
        static columnsKey: string;
    }
}
declare namespace Indotalent.Merchandise {
    interface ProductForm {
        Name: Serenity.StringEditor;
        Description: Serenity.StringEditor;
        Picture: Serenity.StringEditor;
        InternalCode: Serenity.StringEditor;
        Barcode: Serenity.StringEditor;
        UomId: Serenity.IntegerEditor;
        BrandId: Serenity.IntegerEditor;
        CategoryId: Serenity.IntegerEditor;
        SizeId: Serenity.IntegerEditor;
        ColourId: Serenity.IntegerEditor;
        FlavourId: Serenity.IntegerEditor;
        PurchasePrice: Serenity.DecimalEditor;
        SalesPrice: Serenity.DecimalEditor;
        PurchaseTaxId: Serenity.IntegerEditor;
        SalesTaxId: Serenity.IntegerEditor;
        InsertDate: Serenity.DateEditor;
        InsertUserId: Serenity.IntegerEditor;
        UpdateDate: Serenity.DateEditor;
        UpdateUserId: Serenity.IntegerEditor;
        TenantId: Serenity.IntegerEditor;
    }
    class ProductForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Indotalent.Merchandise {
    interface ProductRow {
        Id?: number;
        Name?: string;
        Description?: string;
        Picture?: string;
        InternalCode?: string;
        Barcode?: string;
        UomId?: number;
        BrandId?: number;
        CategoryId?: number;
        SizeId?: number;
        ColourId?: number;
        FlavourId?: number;
        PurchasePrice?: number;
        SalesPrice?: number;
        PurchaseTaxId?: number;
        SalesTaxId?: number;
        InsertDate?: string;
        InsertUserId?: number;
        UpdateDate?: string;
        UpdateUserId?: number;
        TenantId?: number;
    }
    namespace ProductRow {
        const idProperty = "Id";
        const nameProperty = "Name";
        const localTextPrefix = "Merchandise.Product";
        const deletePermission = "Merchandise:Product";
        const insertPermission = "Merchandise:Product";
        const readPermission = "Merchandise:Product";
        const updatePermission = "Merchandise:Product";
        const enum Fields {
            Id = "Id",
            Name = "Name",
            Description = "Description",
            Picture = "Picture",
            InternalCode = "InternalCode",
            Barcode = "Barcode",
            UomId = "UomId",
            BrandId = "BrandId",
            CategoryId = "CategoryId",
            SizeId = "SizeId",
            ColourId = "ColourId",
            FlavourId = "FlavourId",
            PurchasePrice = "PurchasePrice",
            SalesPrice = "SalesPrice",
            PurchaseTaxId = "PurchaseTaxId",
            SalesTaxId = "SalesTaxId",
            InsertDate = "InsertDate",
            InsertUserId = "InsertUserId",
            UpdateDate = "UpdateDate",
            UpdateUserId = "UpdateUserId",
            TenantId = "TenantId"
        }
    }
}
declare namespace Indotalent.Merchandise {
    namespace ProductService {
        const baseUrl = "Merchandise/Product";
        function Create(request: Serenity.SaveRequest<ProductRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<ProductRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ProductRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ProductRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Merchandise/Product/Create",
            Update = "Merchandise/Product/Update",
            Delete = "Merchandise/Product/Delete",
            Retrieve = "Merchandise/Product/Retrieve",
            List = "Merchandise/Product/List"
        }
    }
}
declare namespace Indotalent.Merchandise {
    class SizeColumns {
        static columnsKey: string;
    }
}
declare namespace Indotalent.Merchandise {
    interface SizeForm {
        Name: Serenity.StringEditor;
        Description: Serenity.TextAreaEditor;
    }
    class SizeForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Indotalent.Merchandise {
    interface SizeRow {
        Id?: number;
        Name?: string;
        Description?: string;
        TenantId?: number;
        TenantName?: string;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
    }
    namespace SizeRow {
        const idProperty = "Id";
        const nameProperty = "Name";
        const localTextPrefix = "Merchandise.Size";
        const lookupKey = "Merchandise.Size";
        function getLookup(): Q.Lookup<SizeRow>;
        const deletePermission = "Merchandise:Size";
        const insertPermission = "Merchandise:Size";
        const readPermission = "Merchandise:Size";
        const updatePermission = "Merchandise:Size";
        const enum Fields {
            Id = "Id",
            Name = "Name",
            Description = "Description",
            TenantId = "TenantId",
            TenantName = "TenantName",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate"
        }
    }
}
declare namespace Indotalent.Merchandise {
    namespace SizeService {
        const baseUrl = "Merchandise/Size";
        function Create(request: Serenity.SaveRequest<SizeRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<SizeRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<SizeRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<SizeRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Merchandise/Size/Create",
            Update = "Merchandise/Size/Update",
            Delete = "Merchandise/Size/Delete",
            Retrieve = "Merchandise/Size/Retrieve",
            List = "Merchandise/Size/List"
        }
    }
}
declare namespace Indotalent.Merchandise {
    class UomColumns {
        static columnsKey: string;
    }
}
declare namespace Indotalent.Merchandise {
    interface UomForm {
        Name: Serenity.StringEditor;
        Description: Serenity.TextAreaEditor;
    }
    class UomForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Indotalent.Merchandise {
    interface UomRow {
        Id?: number;
        Name?: string;
        Description?: string;
        TenantId?: number;
        TenantName?: string;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
    }
    namespace UomRow {
        const idProperty = "Id";
        const nameProperty = "Name";
        const localTextPrefix = "Merchandise.Uom";
        const lookupKey = "Merchandise.Uom";
        function getLookup(): Q.Lookup<UomRow>;
        const deletePermission = "Merchandise:Uom";
        const insertPermission = "Merchandise:Uom";
        const readPermission = "Merchandise:Uom";
        const updatePermission = "Merchandise:Uom";
        const enum Fields {
            Id = "Id",
            Name = "Name",
            Description = "Description",
            TenantId = "TenantId",
            TenantName = "TenantName",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate"
        }
    }
}
declare namespace Indotalent.Merchandise {
    namespace UomService {
        const baseUrl = "Merchandise/Uom";
        function Create(request: Serenity.SaveRequest<UomRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<UomRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<UomRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<UomRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Merchandise/Uom/Create",
            Update = "Merchandise/Uom/Update",
            Delete = "Merchandise/Uom/Delete",
            Retrieve = "Merchandise/Uom/Retrieve",
            List = "Merchandise/Uom/List"
        }
    }
}
declare namespace Indotalent.Purchase {
    class BillColumns {
        static columnsKey: string;
    }
}
declare namespace Indotalent.Purchase {
    class BillDetailColumns {
        static columnsKey: string;
    }
}
declare namespace Indotalent.Purchase {
    interface BillDetailForm {
        BillId: Serenity.IntegerEditor;
        ProductId: Serenity.IntegerEditor;
        Price: Serenity.DecimalEditor;
        Qty: Serenity.DecimalEditor;
        SubTotal: Serenity.DecimalEditor;
        Discount: Serenity.DecimalEditor;
        BeforeTax: Serenity.DecimalEditor;
        TaxPercentage: Serenity.DecimalEditor;
        TaxAmount: Serenity.DecimalEditor;
        Total: Serenity.DecimalEditor;
        InsertDate: Serenity.DateEditor;
        InsertUserId: Serenity.IntegerEditor;
        UpdateDate: Serenity.DateEditor;
        UpdateUserId: Serenity.IntegerEditor;
        TenantId: Serenity.IntegerEditor;
    }
    class BillDetailForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Indotalent.Purchase {
    interface BillDetailRow {
        Id?: number;
        BillId?: number;
        ProductId?: number;
        Price?: number;
        Qty?: number;
        SubTotal?: number;
        Discount?: number;
        BeforeTax?: number;
        TaxPercentage?: number;
        TaxAmount?: number;
        Total?: number;
        InsertDate?: string;
        InsertUserId?: number;
        UpdateDate?: string;
        UpdateUserId?: number;
        TenantId?: number;
    }
    namespace BillDetailRow {
        const idProperty = "Id";
        const localTextPrefix = "Purchase.BillDetail";
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            Id = "Id",
            BillId = "BillId",
            ProductId = "ProductId",
            Price = "Price",
            Qty = "Qty",
            SubTotal = "SubTotal",
            Discount = "Discount",
            BeforeTax = "BeforeTax",
            TaxPercentage = "TaxPercentage",
            TaxAmount = "TaxAmount",
            Total = "Total",
            InsertDate = "InsertDate",
            InsertUserId = "InsertUserId",
            UpdateDate = "UpdateDate",
            UpdateUserId = "UpdateUserId",
            TenantId = "TenantId"
        }
    }
}
declare namespace Indotalent.Purchase {
    namespace BillDetailService {
        const baseUrl = "Purchase/BillDetail";
        function Create(request: Serenity.SaveRequest<BillDetailRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<BillDetailRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<BillDetailRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<BillDetailRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Purchase/BillDetail/Create",
            Update = "Purchase/BillDetail/Update",
            Delete = "Purchase/BillDetail/Delete",
            Retrieve = "Purchase/BillDetail/Retrieve",
            List = "Purchase/BillDetail/List"
        }
    }
}
declare namespace Indotalent.Purchase {
    interface BillForm {
        Number: Serenity.StringEditor;
        Description: Serenity.StringEditor;
        ExternalReferenceNumber: Serenity.StringEditor;
        ProcurementGroup: Serenity.StringEditor;
        BillDate: Serenity.DateEditor;
        PurchaseOrderId: Serenity.IntegerEditor;
        SubTotal: Serenity.DecimalEditor;
        Discount: Serenity.DecimalEditor;
        BeforeTax: Serenity.DecimalEditor;
        TaxAmount: Serenity.DecimalEditor;
        Total: Serenity.DecimalEditor;
        OtherCharge: Serenity.DecimalEditor;
        InsertDate: Serenity.DateEditor;
        InsertUserId: Serenity.IntegerEditor;
        UpdateDate: Serenity.DateEditor;
        UpdateUserId: Serenity.IntegerEditor;
        TenantId: Serenity.IntegerEditor;
    }
    class BillForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Indotalent.Purchase {
    class BillPaymentColumns {
        static columnsKey: string;
    }
}
declare namespace Indotalent.Purchase {
    interface BillPaymentForm {
        BillId: Serenity.IntegerEditor;
        Number: Serenity.StringEditor;
        Description: Serenity.StringEditor;
        ProcurementGroup: Serenity.StringEditor;
        PaymentDate: Serenity.DateEditor;
        CashBankId: Serenity.IntegerEditor;
        BillAmount: Serenity.DecimalEditor;
        PaymentAmount: Serenity.DecimalEditor;
        InsertDate: Serenity.DateEditor;
        InsertUserId: Serenity.IntegerEditor;
        UpdateDate: Serenity.DateEditor;
        UpdateUserId: Serenity.IntegerEditor;
        TenantId: Serenity.IntegerEditor;
    }
    class BillPaymentForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Indotalent.Purchase {
    interface BillPaymentRow {
        Id?: number;
        BillId?: number;
        Number?: string;
        Description?: string;
        ProcurementGroup?: string;
        PaymentDate?: string;
        CashBankId?: number;
        BillAmount?: number;
        PaymentAmount?: number;
        InsertDate?: string;
        InsertUserId?: number;
        UpdateDate?: string;
        UpdateUserId?: number;
        TenantId?: number;
    }
    namespace BillPaymentRow {
        const idProperty = "Id";
        const nameProperty = "Number";
        const localTextPrefix = "Purchase.BillPayment";
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            Id = "Id",
            BillId = "BillId",
            Number = "Number",
            Description = "Description",
            ProcurementGroup = "ProcurementGroup",
            PaymentDate = "PaymentDate",
            CashBankId = "CashBankId",
            BillAmount = "BillAmount",
            PaymentAmount = "PaymentAmount",
            InsertDate = "InsertDate",
            InsertUserId = "InsertUserId",
            UpdateDate = "UpdateDate",
            UpdateUserId = "UpdateUserId",
            TenantId = "TenantId"
        }
    }
}
declare namespace Indotalent.Purchase {
    namespace BillPaymentService {
        const baseUrl = "Purchase/BillPayment";
        function Create(request: Serenity.SaveRequest<BillPaymentRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<BillPaymentRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<BillPaymentRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<BillPaymentRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Purchase/BillPayment/Create",
            Update = "Purchase/BillPayment/Update",
            Delete = "Purchase/BillPayment/Delete",
            Retrieve = "Purchase/BillPayment/Retrieve",
            List = "Purchase/BillPayment/List"
        }
    }
}
declare namespace Indotalent.Purchase {
    interface BillRow {
        Id?: number;
        Number?: string;
        Description?: string;
        ExternalReferenceNumber?: string;
        ProcurementGroup?: string;
        BillDate?: string;
        PurchaseOrderId?: number;
        SubTotal?: number;
        Discount?: number;
        BeforeTax?: number;
        TaxAmount?: number;
        Total?: number;
        OtherCharge?: number;
        InsertDate?: string;
        InsertUserId?: number;
        UpdateDate?: string;
        UpdateUserId?: number;
        TenantId?: number;
    }
    namespace BillRow {
        const idProperty = "Id";
        const nameProperty = "Number";
        const localTextPrefix = "Purchase.Bill";
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            Id = "Id",
            Number = "Number",
            Description = "Description",
            ExternalReferenceNumber = "ExternalReferenceNumber",
            ProcurementGroup = "ProcurementGroup",
            BillDate = "BillDate",
            PurchaseOrderId = "PurchaseOrderId",
            SubTotal = "SubTotal",
            Discount = "Discount",
            BeforeTax = "BeforeTax",
            TaxAmount = "TaxAmount",
            Total = "Total",
            OtherCharge = "OtherCharge",
            InsertDate = "InsertDate",
            InsertUserId = "InsertUserId",
            UpdateDate = "UpdateDate",
            UpdateUserId = "UpdateUserId",
            TenantId = "TenantId"
        }
    }
}
declare namespace Indotalent.Purchase {
    namespace BillService {
        const baseUrl = "Purchase/Bill";
        function Create(request: Serenity.SaveRequest<BillRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<BillRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<BillRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<BillRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Purchase/Bill/Create",
            Update = "Purchase/Bill/Update",
            Delete = "Purchase/Bill/Delete",
            Retrieve = "Purchase/Bill/Retrieve",
            List = "Purchase/Bill/List"
        }
    }
}
declare namespace Indotalent.Purchase {
    class PurchaseOrderColumns {
        static columnsKey: string;
    }
}
declare namespace Indotalent.Purchase {
    class PurchaseOrderDetailColumns {
        static columnsKey: string;
    }
}
declare namespace Indotalent.Purchase {
    interface PurchaseOrderDetailForm {
        PurchaseOrderId: Serenity.IntegerEditor;
        ProductId: Serenity.IntegerEditor;
        Price: Serenity.DecimalEditor;
        Qty: Serenity.DecimalEditor;
        SubTotal: Serenity.DecimalEditor;
        Discount: Serenity.DecimalEditor;
        BeforeTax: Serenity.DecimalEditor;
        TaxPercentage: Serenity.DecimalEditor;
        TaxAmount: Serenity.DecimalEditor;
        Total: Serenity.DecimalEditor;
        InsertDate: Serenity.DateEditor;
        InsertUserId: Serenity.IntegerEditor;
        UpdateDate: Serenity.DateEditor;
        UpdateUserId: Serenity.IntegerEditor;
        TenantId: Serenity.IntegerEditor;
    }
    class PurchaseOrderDetailForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Indotalent.Purchase {
    interface PurchaseOrderDetailRow {
        Id?: number;
        PurchaseOrderId?: number;
        ProductId?: number;
        Price?: number;
        Qty?: number;
        SubTotal?: number;
        Discount?: number;
        BeforeTax?: number;
        TaxPercentage?: number;
        TaxAmount?: number;
        Total?: number;
        InsertDate?: string;
        InsertUserId?: number;
        UpdateDate?: string;
        UpdateUserId?: number;
        TenantId?: number;
    }
    namespace PurchaseOrderDetailRow {
        const idProperty = "Id";
        const localTextPrefix = "Purchase.PurchaseOrderDetail";
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            Id = "Id",
            PurchaseOrderId = "PurchaseOrderId",
            ProductId = "ProductId",
            Price = "Price",
            Qty = "Qty",
            SubTotal = "SubTotal",
            Discount = "Discount",
            BeforeTax = "BeforeTax",
            TaxPercentage = "TaxPercentage",
            TaxAmount = "TaxAmount",
            Total = "Total",
            InsertDate = "InsertDate",
            InsertUserId = "InsertUserId",
            UpdateDate = "UpdateDate",
            UpdateUserId = "UpdateUserId",
            TenantId = "TenantId"
        }
    }
}
declare namespace Indotalent.Purchase {
    namespace PurchaseOrderDetailService {
        const baseUrl = "Purchase/PurchaseOrderDetail";
        function Create(request: Serenity.SaveRequest<PurchaseOrderDetailRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<PurchaseOrderDetailRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<PurchaseOrderDetailRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<PurchaseOrderDetailRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Purchase/PurchaseOrderDetail/Create",
            Update = "Purchase/PurchaseOrderDetail/Update",
            Delete = "Purchase/PurchaseOrderDetail/Delete",
            Retrieve = "Purchase/PurchaseOrderDetail/Retrieve",
            List = "Purchase/PurchaseOrderDetail/List"
        }
    }
}
declare namespace Indotalent.Purchase {
    interface PurchaseOrderForm {
        Number: Serenity.StringEditor;
        Description: Serenity.StringEditor;
        ProcurementGroup: Serenity.StringEditor;
        OrderDate: Serenity.DateEditor;
        VendorId: Serenity.IntegerEditor;
        SubTotal: Serenity.DecimalEditor;
        Discount: Serenity.DecimalEditor;
        BeforeTax: Serenity.DecimalEditor;
        TaxAmount: Serenity.DecimalEditor;
        Total: Serenity.DecimalEditor;
        OtherCharge: Serenity.DecimalEditor;
        InsertDate: Serenity.DateEditor;
        InsertUserId: Serenity.IntegerEditor;
        UpdateDate: Serenity.DateEditor;
        UpdateUserId: Serenity.IntegerEditor;
        TenantId: Serenity.IntegerEditor;
    }
    class PurchaseOrderForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Indotalent.Purchase {
    interface PurchaseOrderRow {
        Id?: number;
        Number?: string;
        Description?: string;
        ProcurementGroup?: string;
        OrderDate?: string;
        VendorId?: number;
        SubTotal?: number;
        Discount?: number;
        BeforeTax?: number;
        TaxAmount?: number;
        Total?: number;
        OtherCharge?: number;
        InsertDate?: string;
        InsertUserId?: number;
        UpdateDate?: string;
        UpdateUserId?: number;
        TenantId?: number;
    }
    namespace PurchaseOrderRow {
        const idProperty = "Id";
        const nameProperty = "Number";
        const localTextPrefix = "Purchase.PurchaseOrder";
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            Id = "Id",
            Number = "Number",
            Description = "Description",
            ProcurementGroup = "ProcurementGroup",
            OrderDate = "OrderDate",
            VendorId = "VendorId",
            SubTotal = "SubTotal",
            Discount = "Discount",
            BeforeTax = "BeforeTax",
            TaxAmount = "TaxAmount",
            Total = "Total",
            OtherCharge = "OtherCharge",
            InsertDate = "InsertDate",
            InsertUserId = "InsertUserId",
            UpdateDate = "UpdateDate",
            UpdateUserId = "UpdateUserId",
            TenantId = "TenantId"
        }
    }
}
declare namespace Indotalent.Purchase {
    namespace PurchaseOrderService {
        const baseUrl = "Purchase/PurchaseOrder";
        function Create(request: Serenity.SaveRequest<PurchaseOrderRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<PurchaseOrderRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<PurchaseOrderRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<PurchaseOrderRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Purchase/PurchaseOrder/Create",
            Update = "Purchase/PurchaseOrder/Update",
            Delete = "Purchase/PurchaseOrder/Delete",
            Retrieve = "Purchase/PurchaseOrder/Retrieve",
            List = "Purchase/PurchaseOrder/List"
        }
    }
}
declare namespace Indotalent.Purchase {
    class VendorColumns {
        static columnsKey: string;
    }
}
declare namespace Indotalent.Purchase {
    class VendorContactColumns {
        static columnsKey: string;
    }
}
declare namespace Indotalent.Purchase {
    interface VendorContactForm {
        VendorId: Serenity.IntegerEditor;
        Name: Serenity.StringEditor;
        Description: Serenity.StringEditor;
        Street: Serenity.StringEditor;
        City: Serenity.StringEditor;
        State: Serenity.StringEditor;
        ZipCode: Serenity.StringEditor;
        Phone: Serenity.StringEditor;
        Email: Serenity.StringEditor;
        InsertDate: Serenity.DateEditor;
        InsertUserId: Serenity.IntegerEditor;
        UpdateDate: Serenity.DateEditor;
        UpdateUserId: Serenity.IntegerEditor;
        TenantId: Serenity.IntegerEditor;
    }
    class VendorContactForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Indotalent.Purchase {
    interface VendorContactRow {
        Id?: number;
        VendorId?: number;
        Name?: string;
        Description?: string;
        Street?: string;
        City?: string;
        State?: string;
        ZipCode?: string;
        Phone?: string;
        Email?: string;
        InsertDate?: string;
        InsertUserId?: number;
        UpdateDate?: string;
        UpdateUserId?: number;
        TenantId?: number;
    }
    namespace VendorContactRow {
        const idProperty = "Id";
        const nameProperty = "Name";
        const localTextPrefix = "Purchase.VendorContact";
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            Id = "Id",
            VendorId = "VendorId",
            Name = "Name",
            Description = "Description",
            Street = "Street",
            City = "City",
            State = "State",
            ZipCode = "ZipCode",
            Phone = "Phone",
            Email = "Email",
            InsertDate = "InsertDate",
            InsertUserId = "InsertUserId",
            UpdateDate = "UpdateDate",
            UpdateUserId = "UpdateUserId",
            TenantId = "TenantId"
        }
    }
}
declare namespace Indotalent.Purchase {
    namespace VendorContactService {
        const baseUrl = "Purchase/VendorContact";
        function Create(request: Serenity.SaveRequest<VendorContactRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<VendorContactRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<VendorContactRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<VendorContactRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Purchase/VendorContact/Create",
            Update = "Purchase/VendorContact/Update",
            Delete = "Purchase/VendorContact/Delete",
            Retrieve = "Purchase/VendorContact/Retrieve",
            List = "Purchase/VendorContact/List"
        }
    }
}
declare namespace Indotalent.Purchase {
    interface VendorForm {
        Name: Serenity.StringEditor;
        Description: Serenity.StringEditor;
        Street: Serenity.StringEditor;
        City: Serenity.StringEditor;
        State: Serenity.StringEditor;
        ZipCode: Serenity.StringEditor;
        Phone: Serenity.StringEditor;
        Email: Serenity.StringEditor;
        InsertDate: Serenity.DateEditor;
        InsertUserId: Serenity.IntegerEditor;
        UpdateDate: Serenity.DateEditor;
        UpdateUserId: Serenity.IntegerEditor;
        TenantId: Serenity.IntegerEditor;
    }
    class VendorForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Indotalent.Purchase {
    interface VendorRow {
        Id?: number;
        Name?: string;
        Description?: string;
        Street?: string;
        City?: string;
        State?: string;
        ZipCode?: string;
        Phone?: string;
        Email?: string;
        InsertDate?: string;
        InsertUserId?: number;
        UpdateDate?: string;
        UpdateUserId?: number;
        TenantId?: number;
    }
    namespace VendorRow {
        const idProperty = "Id";
        const nameProperty = "Name";
        const localTextPrefix = "Purchase.Vendor";
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            Id = "Id",
            Name = "Name",
            Description = "Description",
            Street = "Street",
            City = "City",
            State = "State",
            ZipCode = "ZipCode",
            Phone = "Phone",
            Email = "Email",
            InsertDate = "InsertDate",
            InsertUserId = "InsertUserId",
            UpdateDate = "UpdateDate",
            UpdateUserId = "UpdateUserId",
            TenantId = "TenantId"
        }
    }
}
declare namespace Indotalent.Purchase {
    namespace VendorService {
        const baseUrl = "Purchase/Vendor";
        function Create(request: Serenity.SaveRequest<VendorRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<VendorRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<VendorRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<VendorRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Purchase/Vendor/Create",
            Update = "Purchase/Vendor/Update",
            Delete = "Purchase/Vendor/Delete",
            Retrieve = "Purchase/Vendor/Retrieve",
            List = "Purchase/Vendor/List"
        }
    }
}
declare namespace Indotalent.Sales {
    class CustomerColumns {
        static columnsKey: string;
    }
}
declare namespace Indotalent.Sales {
    class CustomerContactColumns {
        static columnsKey: string;
    }
}
declare namespace Indotalent.Sales {
    interface CustomerContactForm {
        CustomerId: Serenity.IntegerEditor;
        Name: Serenity.StringEditor;
        Description: Serenity.StringEditor;
        Street: Serenity.StringEditor;
        City: Serenity.StringEditor;
        State: Serenity.StringEditor;
        ZipCode: Serenity.StringEditor;
        Phone: Serenity.StringEditor;
        Email: Serenity.StringEditor;
        InsertDate: Serenity.DateEditor;
        InsertUserId: Serenity.IntegerEditor;
        UpdateDate: Serenity.DateEditor;
        UpdateUserId: Serenity.IntegerEditor;
        TenantId: Serenity.IntegerEditor;
    }
    class CustomerContactForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Indotalent.Sales {
    interface CustomerContactRow {
        Id?: number;
        CustomerId?: number;
        Name?: string;
        Description?: string;
        Street?: string;
        City?: string;
        State?: string;
        ZipCode?: string;
        Phone?: string;
        Email?: string;
        TenantId?: number;
        TenantName?: string;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
    }
    namespace CustomerContactRow {
        const idProperty = "Id";
        const nameProperty = "Name";
        const localTextPrefix = "Sales.CustomerContact";
        const lookupKey = "Sales.CustomerContact";
        function getLookup(): Q.Lookup<CustomerContactRow>;
        const deletePermission = "Sales:Customer";
        const insertPermission = "Sales:Customer";
        const readPermission = "Sales:Customer";
        const updatePermission = "Sales:Customer";
        const enum Fields {
            Id = "Id",
            CustomerId = "CustomerId",
            Name = "Name",
            Description = "Description",
            Street = "Street",
            City = "City",
            State = "State",
            ZipCode = "ZipCode",
            Phone = "Phone",
            Email = "Email",
            TenantId = "TenantId",
            TenantName = "TenantName",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate"
        }
    }
}
declare namespace Indotalent.Sales {
    namespace CustomerContactService {
        const baseUrl = "Sales/CustomerContact";
        function Create(request: Serenity.SaveRequest<CustomerContactRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<CustomerContactRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<CustomerContactRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<CustomerContactRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Sales/CustomerContact/Create",
            Update = "Sales/CustomerContact/Update",
            Delete = "Sales/CustomerContact/Delete",
            Retrieve = "Sales/CustomerContact/Retrieve",
            List = "Sales/CustomerContact/List"
        }
    }
}
declare namespace Indotalent.Sales {
    interface CustomerForm {
        Name: Serenity.StringEditor;
        Description: Serenity.TextAreaEditor;
        Street: Serenity.StringEditor;
        City: Serenity.StringEditor;
        State: Serenity.StringEditor;
        ZipCode: Serenity.StringEditor;
        Phone: Serenity.StringEditor;
        Email: Serenity.StringEditor;
        ContactList: CustomerContactEditor;
    }
    class CustomerForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Indotalent.Sales {
    interface CustomerRow {
        Id?: number;
        Name?: string;
        Description?: string;
        Street?: string;
        City?: string;
        State?: string;
        ZipCode?: string;
        Phone?: string;
        Email?: string;
        TenantId?: number;
        TenantName?: string;
        ContactList?: CustomerContactRow[];
    }
    namespace CustomerRow {
        const idProperty = "Id";
        const nameProperty = "Name";
        const localTextPrefix = "Sales.Customer";
        const deletePermission = "Sales:Customer";
        const insertPermission = "Sales:Customer";
        const readPermission = "Sales:Customer";
        const updatePermission = "Sales:Customer";
        const enum Fields {
            Id = "Id",
            Name = "Name",
            Description = "Description",
            Street = "Street",
            City = "City",
            State = "State",
            ZipCode = "ZipCode",
            Phone = "Phone",
            Email = "Email",
            TenantId = "TenantId",
            TenantName = "TenantName",
            ContactList = "ContactList"
        }
    }
}
declare namespace Indotalent.Sales {
    namespace CustomerService {
        const baseUrl = "Sales/Customer";
        function Create(request: Serenity.SaveRequest<CustomerRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<CustomerRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<CustomerRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<CustomerRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Sales/Customer/Create",
            Update = "Sales/Customer/Update",
            Delete = "Sales/Customer/Delete",
            Retrieve = "Sales/Customer/Retrieve",
            List = "Sales/Customer/List"
        }
    }
}
declare namespace Indotalent.Sales {
    class InvoiceColumns {
        static columnsKey: string;
    }
}
declare namespace Indotalent.Sales {
    class InvoiceDetailColumns {
        static columnsKey: string;
    }
}
declare namespace Indotalent.Sales {
    interface InvoiceDetailForm {
        InvoiceId: Serenity.IntegerEditor;
        ProductId: Serenity.IntegerEditor;
        Price: Serenity.DecimalEditor;
        Qty: Serenity.DecimalEditor;
        SubTotal: Serenity.DecimalEditor;
        Discount: Serenity.DecimalEditor;
        BeforeTax: Serenity.DecimalEditor;
        TaxPercentage: Serenity.DecimalEditor;
        TaxAmount: Serenity.DecimalEditor;
        Total: Serenity.DecimalEditor;
        InsertDate: Serenity.DateEditor;
        InsertUserId: Serenity.IntegerEditor;
        UpdateDate: Serenity.DateEditor;
        UpdateUserId: Serenity.IntegerEditor;
        TenantId: Serenity.IntegerEditor;
    }
    class InvoiceDetailForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Indotalent.Sales {
    interface InvoiceDetailRow {
        Id?: number;
        InvoiceId?: number;
        ProductId?: number;
        Price?: number;
        Qty?: number;
        SubTotal?: number;
        Discount?: number;
        BeforeTax?: number;
        TaxPercentage?: number;
        TaxAmount?: number;
        Total?: number;
        InsertDate?: string;
        InsertUserId?: number;
        UpdateDate?: string;
        UpdateUserId?: number;
        TenantId?: number;
    }
    namespace InvoiceDetailRow {
        const idProperty = "Id";
        const localTextPrefix = "Sales.InvoiceDetail";
        const deletePermission = "Sales:Invoice";
        const insertPermission = "Sales:Invoice";
        const readPermission = "Sales:Invoice";
        const updatePermission = "Sales:Invoice";
        const enum Fields {
            Id = "Id",
            InvoiceId = "InvoiceId",
            ProductId = "ProductId",
            Price = "Price",
            Qty = "Qty",
            SubTotal = "SubTotal",
            Discount = "Discount",
            BeforeTax = "BeforeTax",
            TaxPercentage = "TaxPercentage",
            TaxAmount = "TaxAmount",
            Total = "Total",
            InsertDate = "InsertDate",
            InsertUserId = "InsertUserId",
            UpdateDate = "UpdateDate",
            UpdateUserId = "UpdateUserId",
            TenantId = "TenantId"
        }
    }
}
declare namespace Indotalent.Sales {
    namespace InvoiceDetailService {
        const baseUrl = "Sales/InvoiceDetail";
        function Create(request: Serenity.SaveRequest<InvoiceDetailRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<InvoiceDetailRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<InvoiceDetailRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<InvoiceDetailRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Sales/InvoiceDetail/Create",
            Update = "Sales/InvoiceDetail/Update",
            Delete = "Sales/InvoiceDetail/Delete",
            Retrieve = "Sales/InvoiceDetail/Retrieve",
            List = "Sales/InvoiceDetail/List"
        }
    }
}
declare namespace Indotalent.Sales {
    interface InvoiceForm {
        Number: Serenity.StringEditor;
        Description: Serenity.StringEditor;
        SalesGroup: Serenity.StringEditor;
        InvoiceDate: Serenity.DateEditor;
        SalesOrderId: Serenity.IntegerEditor;
        SubTotal: Serenity.DecimalEditor;
        Discount: Serenity.DecimalEditor;
        BeforeTax: Serenity.DecimalEditor;
        TaxAmount: Serenity.DecimalEditor;
        Total: Serenity.DecimalEditor;
        OtherCharge: Serenity.DecimalEditor;
        InsertDate: Serenity.DateEditor;
        InsertUserId: Serenity.IntegerEditor;
        UpdateDate: Serenity.DateEditor;
        UpdateUserId: Serenity.IntegerEditor;
        TenantId: Serenity.IntegerEditor;
    }
    class InvoiceForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Indotalent.Sales {
    class InvoicePaymentColumns {
        static columnsKey: string;
    }
}
declare namespace Indotalent.Sales {
    interface InvoicePaymentForm {
        InvoiceId: Serenity.IntegerEditor;
        Number: Serenity.StringEditor;
        Description: Serenity.StringEditor;
        SalesGroup: Serenity.StringEditor;
        PaymentDate: Serenity.DateEditor;
        CashBankId: Serenity.IntegerEditor;
        InvoiceAmount: Serenity.DecimalEditor;
        PaymentAmount: Serenity.DecimalEditor;
        InsertDate: Serenity.DateEditor;
        InsertUserId: Serenity.IntegerEditor;
        UpdateDate: Serenity.DateEditor;
        UpdateUserId: Serenity.IntegerEditor;
        TenantId: Serenity.IntegerEditor;
    }
    class InvoicePaymentForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Indotalent.Sales {
    interface InvoicePaymentRow {
        Id?: number;
        InvoiceId?: number;
        Number?: string;
        Description?: string;
        SalesGroup?: string;
        PaymentDate?: string;
        CashBankId?: number;
        InvoiceAmount?: number;
        PaymentAmount?: number;
        InsertDate?: string;
        InsertUserId?: number;
        UpdateDate?: string;
        UpdateUserId?: number;
        TenantId?: number;
    }
    namespace InvoicePaymentRow {
        const idProperty = "Id";
        const nameProperty = "Number";
        const localTextPrefix = "Sales.InvoicePayment";
        const deletePermission = "Sales:Invoice";
        const insertPermission = "Sales:Invoice";
        const readPermission = "Sales:Invoice";
        const updatePermission = "Sales:Invoice";
        const enum Fields {
            Id = "Id",
            InvoiceId = "InvoiceId",
            Number = "Number",
            Description = "Description",
            SalesGroup = "SalesGroup",
            PaymentDate = "PaymentDate",
            CashBankId = "CashBankId",
            InvoiceAmount = "InvoiceAmount",
            PaymentAmount = "PaymentAmount",
            InsertDate = "InsertDate",
            InsertUserId = "InsertUserId",
            UpdateDate = "UpdateDate",
            UpdateUserId = "UpdateUserId",
            TenantId = "TenantId"
        }
    }
}
declare namespace Indotalent.Sales {
    namespace InvoicePaymentService {
        const baseUrl = "Sales/InvoicePayment";
        function Create(request: Serenity.SaveRequest<InvoicePaymentRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<InvoicePaymentRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<InvoicePaymentRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<InvoicePaymentRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Sales/InvoicePayment/Create",
            Update = "Sales/InvoicePayment/Update",
            Delete = "Sales/InvoicePayment/Delete",
            Retrieve = "Sales/InvoicePayment/Retrieve",
            List = "Sales/InvoicePayment/List"
        }
    }
}
declare namespace Indotalent.Sales {
    interface InvoiceRow {
        Id?: number;
        Number?: string;
        Description?: string;
        SalesGroup?: string;
        InvoiceDate?: string;
        SalesOrderId?: number;
        SubTotal?: number;
        Discount?: number;
        BeforeTax?: number;
        TaxAmount?: number;
        Total?: number;
        OtherCharge?: number;
        InsertDate?: string;
        InsertUserId?: number;
        UpdateDate?: string;
        UpdateUserId?: number;
        TenantId?: number;
    }
    namespace InvoiceRow {
        const idProperty = "Id";
        const nameProperty = "Number";
        const localTextPrefix = "Sales.Invoice";
        const deletePermission = "Sales:Invoice";
        const insertPermission = "Sales:Invoice";
        const readPermission = "Sales:Invoice";
        const updatePermission = "Sales:Invoice";
        const enum Fields {
            Id = "Id",
            Number = "Number",
            Description = "Description",
            SalesGroup = "SalesGroup",
            InvoiceDate = "InvoiceDate",
            SalesOrderId = "SalesOrderId",
            SubTotal = "SubTotal",
            Discount = "Discount",
            BeforeTax = "BeforeTax",
            TaxAmount = "TaxAmount",
            Total = "Total",
            OtherCharge = "OtherCharge",
            InsertDate = "InsertDate",
            InsertUserId = "InsertUserId",
            UpdateDate = "UpdateDate",
            UpdateUserId = "UpdateUserId",
            TenantId = "TenantId"
        }
    }
}
declare namespace Indotalent.Sales {
    namespace InvoiceService {
        const baseUrl = "Sales/Invoice";
        function Create(request: Serenity.SaveRequest<InvoiceRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<InvoiceRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<InvoiceRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<InvoiceRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Sales/Invoice/Create",
            Update = "Sales/Invoice/Update",
            Delete = "Sales/Invoice/Delete",
            Retrieve = "Sales/Invoice/Retrieve",
            List = "Sales/Invoice/List"
        }
    }
}
declare namespace Indotalent.Sales {
    class SalesChannelColumns {
        static columnsKey: string;
    }
}
declare namespace Indotalent.Sales {
    interface SalesChannelForm {
        Name: Serenity.StringEditor;
        Description: Serenity.StringEditor;
        InsertDate: Serenity.DateEditor;
        InsertUserId: Serenity.IntegerEditor;
        UpdateDate: Serenity.DateEditor;
        UpdateUserId: Serenity.IntegerEditor;
        TenantId: Serenity.IntegerEditor;
    }
    class SalesChannelForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Indotalent.Sales {
    interface SalesChannelRow {
        Id?: number;
        Name?: string;
        Description?: string;
        InsertDate?: string;
        InsertUserId?: number;
        UpdateDate?: string;
        UpdateUserId?: number;
        TenantId?: number;
    }
    namespace SalesChannelRow {
        const idProperty = "Id";
        const nameProperty = "Name";
        const localTextPrefix = "Sales.SalesChannel";
        const deletePermission = "Sales:SalesChannel";
        const insertPermission = "Sales:SalesChannel";
        const readPermission = "Sales:SalesChannel";
        const updatePermission = "Sales:SalesChannel";
        const enum Fields {
            Id = "Id",
            Name = "Name",
            Description = "Description",
            InsertDate = "InsertDate",
            InsertUserId = "InsertUserId",
            UpdateDate = "UpdateDate",
            UpdateUserId = "UpdateUserId",
            TenantId = "TenantId"
        }
    }
}
declare namespace Indotalent.Sales {
    namespace SalesChannelService {
        const baseUrl = "Sales/SalesChannel";
        function Create(request: Serenity.SaveRequest<SalesChannelRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<SalesChannelRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<SalesChannelRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<SalesChannelRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Sales/SalesChannel/Create",
            Update = "Sales/SalesChannel/Update",
            Delete = "Sales/SalesChannel/Delete",
            Retrieve = "Sales/SalesChannel/Retrieve",
            List = "Sales/SalesChannel/List"
        }
    }
}
declare namespace Indotalent.Sales {
    class SalesOrderColumns {
        static columnsKey: string;
    }
}
declare namespace Indotalent.Sales {
    class SalesOrderDetailColumns {
        static columnsKey: string;
    }
}
declare namespace Indotalent.Sales {
    interface SalesOrderDetailForm {
        SalesOrderId: Serenity.IntegerEditor;
        ProductId: Serenity.IntegerEditor;
        Price: Serenity.DecimalEditor;
        Qty: Serenity.DecimalEditor;
        SubTotal: Serenity.DecimalEditor;
        Discount: Serenity.DecimalEditor;
        BeforeTax: Serenity.DecimalEditor;
        TaxPercentage: Serenity.DecimalEditor;
        TaxAmount: Serenity.DecimalEditor;
        Total: Serenity.DecimalEditor;
        InsertDate: Serenity.DateEditor;
        InsertUserId: Serenity.IntegerEditor;
        UpdateDate: Serenity.DateEditor;
        UpdateUserId: Serenity.IntegerEditor;
        TenantId: Serenity.IntegerEditor;
    }
    class SalesOrderDetailForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Indotalent.Sales {
    interface SalesOrderDetailRow {
        Id?: number;
        SalesOrderId?: number;
        ProductId?: number;
        Price?: number;
        Qty?: number;
        SubTotal?: number;
        Discount?: number;
        BeforeTax?: number;
        TaxPercentage?: number;
        TaxAmount?: number;
        Total?: number;
        InsertDate?: string;
        InsertUserId?: number;
        UpdateDate?: string;
        UpdateUserId?: number;
        TenantId?: number;
    }
    namespace SalesOrderDetailRow {
        const idProperty = "Id";
        const localTextPrefix = "Sales.SalesOrderDetail";
        const deletePermission = "Sales:SalesOrder";
        const insertPermission = "Sales:SalesOrder";
        const readPermission = "Sales:SalesOrder";
        const updatePermission = "Sales:SalesOrder";
        const enum Fields {
            Id = "Id",
            SalesOrderId = "SalesOrderId",
            ProductId = "ProductId",
            Price = "Price",
            Qty = "Qty",
            SubTotal = "SubTotal",
            Discount = "Discount",
            BeforeTax = "BeforeTax",
            TaxPercentage = "TaxPercentage",
            TaxAmount = "TaxAmount",
            Total = "Total",
            InsertDate = "InsertDate",
            InsertUserId = "InsertUserId",
            UpdateDate = "UpdateDate",
            UpdateUserId = "UpdateUserId",
            TenantId = "TenantId"
        }
    }
}
declare namespace Indotalent.Sales {
    namespace SalesOrderDetailService {
        const baseUrl = "Sales/SalesOrderDetail";
        function Create(request: Serenity.SaveRequest<SalesOrderDetailRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<SalesOrderDetailRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<SalesOrderDetailRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<SalesOrderDetailRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Sales/SalesOrderDetail/Create",
            Update = "Sales/SalesOrderDetail/Update",
            Delete = "Sales/SalesOrderDetail/Delete",
            Retrieve = "Sales/SalesOrderDetail/Retrieve",
            List = "Sales/SalesOrderDetail/List"
        }
    }
}
declare namespace Indotalent.Sales {
    interface SalesOrderForm {
        Number: Serenity.StringEditor;
        Description: Serenity.StringEditor;
        SalesGroup: Serenity.StringEditor;
        OrderDate: Serenity.DateEditor;
        CustomerId: Serenity.IntegerEditor;
        SalesChannelId: Serenity.IntegerEditor;
        SubTotal: Serenity.DecimalEditor;
        Discount: Serenity.DecimalEditor;
        BeforeTax: Serenity.DecimalEditor;
        TaxAmount: Serenity.DecimalEditor;
        Total: Serenity.DecimalEditor;
        OtherCharge: Serenity.DecimalEditor;
        InsertDate: Serenity.DateEditor;
        InsertUserId: Serenity.IntegerEditor;
        UpdateDate: Serenity.DateEditor;
        UpdateUserId: Serenity.IntegerEditor;
        TenantId: Serenity.IntegerEditor;
    }
    class SalesOrderForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Indotalent.Sales {
    interface SalesOrderRow {
        Id?: number;
        Number?: string;
        Description?: string;
        SalesGroup?: string;
        OrderDate?: string;
        CustomerId?: number;
        SalesChannelId?: number;
        SubTotal?: number;
        Discount?: number;
        BeforeTax?: number;
        TaxAmount?: number;
        Total?: number;
        OtherCharge?: number;
        InsertDate?: string;
        InsertUserId?: number;
        UpdateDate?: string;
        UpdateUserId?: number;
        TenantId?: number;
    }
    namespace SalesOrderRow {
        const idProperty = "Id";
        const nameProperty = "Number";
        const localTextPrefix = "Sales.SalesOrder";
        const deletePermission = "Sales:SalesOrder";
        const insertPermission = "Sales:SalesOrder";
        const readPermission = "Sales:SalesOrder";
        const updatePermission = "Sales:SalesOrder";
        const enum Fields {
            Id = "Id",
            Number = "Number",
            Description = "Description",
            SalesGroup = "SalesGroup",
            OrderDate = "OrderDate",
            CustomerId = "CustomerId",
            SalesChannelId = "SalesChannelId",
            SubTotal = "SubTotal",
            Discount = "Discount",
            BeforeTax = "BeforeTax",
            TaxAmount = "TaxAmount",
            Total = "Total",
            OtherCharge = "OtherCharge",
            InsertDate = "InsertDate",
            InsertUserId = "InsertUserId",
            UpdateDate = "UpdateDate",
            UpdateUserId = "UpdateUserId",
            TenantId = "TenantId"
        }
    }
}
declare namespace Indotalent.Sales {
    namespace SalesOrderService {
        const baseUrl = "Sales/SalesOrder";
        function Create(request: Serenity.SaveRequest<SalesOrderRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<SalesOrderRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<SalesOrderRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<SalesOrderRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Sales/SalesOrder/Create",
            Update = "Sales/SalesOrder/Update",
            Delete = "Sales/SalesOrder/Delete",
            Retrieve = "Sales/SalesOrder/Retrieve",
            List = "Sales/SalesOrder/List"
        }
    }
}
declare namespace Indotalent {
    interface ScriptUserDefinition {
        Username?: string;
        DisplayName?: string;
        IsAdmin?: boolean;
        Permissions?: {
            [key: string]: boolean;
        };
    }
}
declare namespace Indotalent.Settings {
    class CashBankColumns {
        static columnsKey: string;
    }
}
declare namespace Indotalent.Settings {
    interface CashBankForm {
        Name: Serenity.StringEditor;
        Description: Serenity.StringEditor;
        AccountNumber: Serenity.StringEditor;
        Street: Serenity.StringEditor;
        City: Serenity.StringEditor;
        State: Serenity.StringEditor;
        ZipCode: Serenity.StringEditor;
        Phone: Serenity.StringEditor;
        Email: Serenity.StringEditor;
        InsertDate: Serenity.DateEditor;
        InsertUserId: Serenity.IntegerEditor;
        UpdateDate: Serenity.DateEditor;
        UpdateUserId: Serenity.IntegerEditor;
        TenantId: Serenity.IntegerEditor;
    }
    class CashBankForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Indotalent.Settings {
    interface CashBankRow {
        Id?: number;
        Name?: string;
        Description?: string;
        AccountNumber?: string;
        Street?: string;
        City?: string;
        State?: string;
        ZipCode?: string;
        Phone?: string;
        Email?: string;
        InsertDate?: string;
        InsertUserId?: number;
        UpdateDate?: string;
        UpdateUserId?: number;
        TenantId?: number;
    }
    namespace CashBankRow {
        const idProperty = "Id";
        const nameProperty = "Name";
        const localTextPrefix = "Settings.CashBank";
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            Id = "Id",
            Name = "Name",
            Description = "Description",
            AccountNumber = "AccountNumber",
            Street = "Street",
            City = "City",
            State = "State",
            ZipCode = "ZipCode",
            Phone = "Phone",
            Email = "Email",
            InsertDate = "InsertDate",
            InsertUserId = "InsertUserId",
            UpdateDate = "UpdateDate",
            UpdateUserId = "UpdateUserId",
            TenantId = "TenantId"
        }
    }
}
declare namespace Indotalent.Settings {
    namespace CashBankService {
        const baseUrl = "Settings/CashBank";
        function Create(request: Serenity.SaveRequest<CashBankRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<CashBankRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<CashBankRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<CashBankRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Settings/CashBank/Create",
            Update = "Settings/CashBank/Update",
            Delete = "Settings/CashBank/Delete",
            Retrieve = "Settings/CashBank/Retrieve",
            List = "Settings/CashBank/List"
        }
    }
}
declare namespace Indotalent.Settings {
    class MyCompanyColumns {
        static columnsKey: string;
    }
}
declare namespace Indotalent.Settings {
    interface MyCompanyForm {
        TenantName: Serenity.StringEditor;
        Description: Serenity.StringEditor;
        Currency: Serenity.StringEditor;
        Street: Serenity.StringEditor;
        City: Serenity.StringEditor;
        State: Serenity.StringEditor;
        ZipCode: Serenity.StringEditor;
        Phone: Serenity.StringEditor;
        Email: Serenity.StringEditor;
        ProductNumberPrefix: Serenity.StringEditor;
        ProductNumberUseDate: Serenity.IntegerEditor;
        ProductNumberLength: Serenity.IntegerEditor;
        CustomerNumberPrefix: Serenity.StringEditor;
        CustomerNumberUseDate: Serenity.IntegerEditor;
        CustomerNumberLength: Serenity.IntegerEditor;
        SalesNumberPrefix: Serenity.StringEditor;
        SalesNumberUseDate: Serenity.IntegerEditor;
        SalesNumberLength: Serenity.IntegerEditor;
        InvoiceNumberPrefix: Serenity.StringEditor;
        InvoiceNumberUseDate: Serenity.IntegerEditor;
        InvoiceNumberLength: Serenity.IntegerEditor;
        InvoicePaymentNumberPrefix: Serenity.StringEditor;
        InvoicePaymentNumberUseDate: Serenity.IntegerEditor;
        InvoicePaymentNumberLength: Serenity.IntegerEditor;
        VendorNumberPrefix: Serenity.StringEditor;
        VendorNumberUseDate: Serenity.IntegerEditor;
        VendorNumberLength: Serenity.IntegerEditor;
        PurchaseNumberPrefix: Serenity.StringEditor;
        PurchaseNumberUseDate: Serenity.IntegerEditor;
        PurchaseNumberLength: Serenity.IntegerEditor;
        BillNumberPrefix: Serenity.StringEditor;
        BillNumberUseDate: Serenity.IntegerEditor;
        BillNumberLength: Serenity.IntegerEditor;
        BillPaymentNumberPrefix: Serenity.StringEditor;
        BillPaymentNumberUseDate: Serenity.IntegerEditor;
        BillPaymentNumberLength: Serenity.IntegerEditor;
        MaximumUser: Serenity.IntegerEditor;
        InsertDate: Serenity.DateEditor;
        InsertUserId: Serenity.IntegerEditor;
        UpdateDate: Serenity.DateEditor;
        UpdateUserId: Serenity.IntegerEditor;
    }
    class MyCompanyForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Indotalent.Settings {
    interface MyCompanyRow {
        TenantId?: number;
        TenantName?: string;
        Description?: string;
        Currency?: string;
        Street?: string;
        City?: string;
        State?: string;
        ZipCode?: string;
        Phone?: string;
        Email?: string;
        ProductNumberPrefix?: string;
        ProductNumberUseDate?: number;
        ProductNumberLength?: number;
        CustomerNumberPrefix?: string;
        CustomerNumberUseDate?: number;
        CustomerNumberLength?: number;
        SalesNumberPrefix?: string;
        SalesNumberUseDate?: number;
        SalesNumberLength?: number;
        InvoiceNumberPrefix?: string;
        InvoiceNumberUseDate?: number;
        InvoiceNumberLength?: number;
        InvoicePaymentNumberPrefix?: string;
        InvoicePaymentNumberUseDate?: number;
        InvoicePaymentNumberLength?: number;
        VendorNumberPrefix?: string;
        VendorNumberUseDate?: number;
        VendorNumberLength?: number;
        PurchaseNumberPrefix?: string;
        PurchaseNumberUseDate?: number;
        PurchaseNumberLength?: number;
        BillNumberPrefix?: string;
        BillNumberUseDate?: number;
        BillNumberLength?: number;
        BillPaymentNumberPrefix?: string;
        BillPaymentNumberUseDate?: number;
        BillPaymentNumberLength?: number;
        MaximumUser?: number;
        InsertDate?: string;
        InsertUserId?: number;
        UpdateDate?: string;
        UpdateUserId?: number;
    }
    namespace MyCompanyRow {
        const idProperty = "TenantId";
        const nameProperty = "TenantName";
        const localTextPrefix = "Settings.MyCompany";
        const deletePermission = "Settings:MyCompany";
        const insertPermission = "Settings:MyCompany";
        const readPermission = "Settings:MyCompany";
        const updatePermission = "Settings:MyCompany";
        const enum Fields {
            TenantId = "TenantId",
            TenantName = "TenantName",
            Description = "Description",
            Currency = "Currency",
            Street = "Street",
            City = "City",
            State = "State",
            ZipCode = "ZipCode",
            Phone = "Phone",
            Email = "Email",
            ProductNumberPrefix = "ProductNumberPrefix",
            ProductNumberUseDate = "ProductNumberUseDate",
            ProductNumberLength = "ProductNumberLength",
            CustomerNumberPrefix = "CustomerNumberPrefix",
            CustomerNumberUseDate = "CustomerNumberUseDate",
            CustomerNumberLength = "CustomerNumberLength",
            SalesNumberPrefix = "SalesNumberPrefix",
            SalesNumberUseDate = "SalesNumberUseDate",
            SalesNumberLength = "SalesNumberLength",
            InvoiceNumberPrefix = "InvoiceNumberPrefix",
            InvoiceNumberUseDate = "InvoiceNumberUseDate",
            InvoiceNumberLength = "InvoiceNumberLength",
            InvoicePaymentNumberPrefix = "InvoicePaymentNumberPrefix",
            InvoicePaymentNumberUseDate = "InvoicePaymentNumberUseDate",
            InvoicePaymentNumberLength = "InvoicePaymentNumberLength",
            VendorNumberPrefix = "VendorNumberPrefix",
            VendorNumberUseDate = "VendorNumberUseDate",
            VendorNumberLength = "VendorNumberLength",
            PurchaseNumberPrefix = "PurchaseNumberPrefix",
            PurchaseNumberUseDate = "PurchaseNumberUseDate",
            PurchaseNumberLength = "PurchaseNumberLength",
            BillNumberPrefix = "BillNumberPrefix",
            BillNumberUseDate = "BillNumberUseDate",
            BillNumberLength = "BillNumberLength",
            BillPaymentNumberPrefix = "BillPaymentNumberPrefix",
            BillPaymentNumberUseDate = "BillPaymentNumberUseDate",
            BillPaymentNumberLength = "BillPaymentNumberLength",
            MaximumUser = "MaximumUser",
            InsertDate = "InsertDate",
            InsertUserId = "InsertUserId",
            UpdateDate = "UpdateDate",
            UpdateUserId = "UpdateUserId"
        }
    }
}
declare namespace Indotalent.Settings {
    namespace MyCompanyService {
        const baseUrl = "Settings/MyCompany";
        function Create(request: Serenity.SaveRequest<MyCompanyRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<MyCompanyRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<MyCompanyRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<MyCompanyRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Settings/MyCompany/Create",
            Update = "Settings/MyCompany/Update",
            Delete = "Settings/MyCompany/Delete",
            Retrieve = "Settings/MyCompany/Retrieve",
            List = "Settings/MyCompany/List"
        }
    }
}
declare namespace Indotalent.Settings {
    class PurchaseTaxColumns {
        static columnsKey: string;
    }
}
declare namespace Indotalent.Settings {
    interface PurchaseTaxForm {
        Name: Serenity.StringEditor;
        Description: Serenity.StringEditor;
        TaxRatePercentage: Serenity.DecimalEditor;
        InsertDate: Serenity.DateEditor;
        InsertUserId: Serenity.IntegerEditor;
        UpdateDate: Serenity.DateEditor;
        UpdateUserId: Serenity.IntegerEditor;
        TenantId: Serenity.IntegerEditor;
    }
    class PurchaseTaxForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Indotalent.Settings {
    interface PurchaseTaxRow {
        Id?: number;
        Name?: string;
        Description?: string;
        TaxRatePercentage?: number;
        InsertDate?: string;
        InsertUserId?: number;
        UpdateDate?: string;
        UpdateUserId?: number;
        TenantId?: number;
    }
    namespace PurchaseTaxRow {
        const idProperty = "Id";
        const nameProperty = "Name";
        const localTextPrefix = "Settings.PurchaseTax";
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            Id = "Id",
            Name = "Name",
            Description = "Description",
            TaxRatePercentage = "TaxRatePercentage",
            InsertDate = "InsertDate",
            InsertUserId = "InsertUserId",
            UpdateDate = "UpdateDate",
            UpdateUserId = "UpdateUserId",
            TenantId = "TenantId"
        }
    }
}
declare namespace Indotalent.Settings {
    namespace PurchaseTaxService {
        const baseUrl = "Settings/PurchaseTax";
        function Create(request: Serenity.SaveRequest<PurchaseTaxRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<PurchaseTaxRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<PurchaseTaxRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<PurchaseTaxRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Settings/PurchaseTax/Create",
            Update = "Settings/PurchaseTax/Update",
            Delete = "Settings/PurchaseTax/Delete",
            Retrieve = "Settings/PurchaseTax/Retrieve",
            List = "Settings/PurchaseTax/List"
        }
    }
}
declare namespace Indotalent.Settings {
    class SalesTaxColumns {
        static columnsKey: string;
    }
}
declare namespace Indotalent.Settings {
    interface SalesTaxForm {
        Name: Serenity.StringEditor;
        Description: Serenity.StringEditor;
        TaxRatePercentage: Serenity.DecimalEditor;
        InsertDate: Serenity.DateEditor;
        InsertUserId: Serenity.IntegerEditor;
        UpdateDate: Serenity.DateEditor;
        UpdateUserId: Serenity.IntegerEditor;
        TenantId: Serenity.IntegerEditor;
    }
    class SalesTaxForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Indotalent.Settings {
    interface SalesTaxRow {
        Id?: number;
        Name?: string;
        Description?: string;
        TaxRatePercentage?: number;
        InsertDate?: string;
        InsertUserId?: number;
        UpdateDate?: string;
        UpdateUserId?: number;
        TenantId?: number;
    }
    namespace SalesTaxRow {
        const idProperty = "Id";
        const nameProperty = "Name";
        const localTextPrefix = "Settings.SalesTax";
        const deletePermission = "Sales:SalesOrder";
        const insertPermission = "Sales:SalesOrder";
        const readPermission = "Sales:SalesOrder";
        const updatePermission = "Sales:SalesOrder";
        const enum Fields {
            Id = "Id",
            Name = "Name",
            Description = "Description",
            TaxRatePercentage = "TaxRatePercentage",
            InsertDate = "InsertDate",
            InsertUserId = "InsertUserId",
            UpdateDate = "UpdateDate",
            UpdateUserId = "UpdateUserId",
            TenantId = "TenantId"
        }
    }
}
declare namespace Indotalent.Settings {
    namespace SalesTaxService {
        const baseUrl = "Settings/SalesTax";
        function Create(request: Serenity.SaveRequest<SalesTaxRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<SalesTaxRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<SalesTaxRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<SalesTaxRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Settings/SalesTax/Create",
            Update = "Settings/SalesTax/Update",
            Delete = "Settings/SalesTax/Delete",
            Retrieve = "Settings/SalesTax/Retrieve",
            List = "Settings/SalesTax/List"
        }
    }
}
declare namespace Indotalent.Texts {
}
declare namespace Indotalent.DialogUtils {
    function pendingChangesConfirmation(element: JQuery, hasPendingChanges: () => boolean): void;
}
declare namespace Indotalent.Administration {
    class LanguageDialog extends Serenity.EntityDialog<LanguageRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: LanguageForm;
    }
}
declare namespace Indotalent.Administration {
    class LanguageGrid extends Serenity.EntityGrid<LanguageRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof LanguageDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getDefaultSortBy(): LanguageRow.Fields[];
    }
}
declare namespace Indotalent.Administration {
    class RoleDialog extends Serenity.EntityDialog<RoleRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: RoleForm;
        protected getToolbarButtons(): Serenity.ToolButton[];
        protected updateInterface(): void;
    }
}
declare namespace Indotalent.Administration {
    class RoleGrid extends Serenity.EntityGrid<RoleRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof RoleDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getDefaultSortBy(): RoleRow.Fields[];
    }
}
declare namespace Indotalent.Administration {
    class RolePermissionDialog extends Serenity.TemplatedDialog<RolePermissionDialogOptions> {
        private permissions;
        constructor(opt: RolePermissionDialogOptions);
        protected getDialogOptions(): JQueryUI.DialogOptions;
        protected getTemplate(): string;
    }
    interface RolePermissionDialogOptions {
        roleID?: number;
        title?: string;
    }
}
declare namespace Indotalent.Administration {
    class TenantDialog extends Serenity.EntityDialog<TenantRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: TenantForm;
    }
}
declare namespace Indotalent.Administration {
    class TenantGrid extends Serenity.EntityGrid<TenantRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof TenantDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getButtons(): Serenity.ToolButton[];
    }
}
declare namespace Indotalent.Administration {
    class TranslationGrid extends Serenity.EntityGrid<TranslationItem, any> {
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        private hasChanges;
        private searchText;
        private sourceLanguage;
        private targetLanguage;
        private targetLanguageKey;
        constructor(container: JQuery);
        protected onClick(e: JQueryEventObject, row: number, cell: number): any;
        protected getColumns(): Slick.Column[];
        protected createToolbarExtensions(): void;
        protected saveChanges(language: string): PromiseLike<any>;
        protected onViewSubmit(): boolean;
        protected getButtons(): Serenity.ToolButton[];
        protected createQuickSearchInput(): void;
        protected onViewFilter(item: TranslationItem): boolean;
        protected usePager(): boolean;
    }
}
declare namespace Indotalent.Administration {
    class UserDialog extends Serenity.EntityDialog<UserRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getIsActiveProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: UserForm;
        constructor();
        protected getToolbarButtons(): Serenity.ToolButton[];
        protected updateInterface(): void;
        protected afterLoadEntity(): void;
    }
}
declare namespace Indotalent.Administration {
    class UserGrid extends Serenity.EntityGrid<UserRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof UserDialog;
        protected getIdProperty(): string;
        protected getIsActiveProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getDefaultSortBy(): UserRow.Fields[];
    }
}
declare namespace Indotalent.Authorization {
    let userDefinition: ScriptUserDefinition;
    function hasPermission(permissionKey: string): boolean;
}
declare namespace Indotalent.Administration {
    class PermissionCheckEditor extends Serenity.DataGrid<PermissionCheckItem, PermissionCheckEditorOptions> {
        protected getIdProperty(): string;
        private searchText;
        private byParentKey;
        constructor(container: JQuery, opt: PermissionCheckEditorOptions);
        private getItemGrantRevokeClass;
        private roleOrImplicit;
        private getItemEffectiveClass;
        protected getColumns(): Slick.Column[];
        setItems(items: PermissionCheckItem[]): void;
        protected onViewSubmit(): boolean;
        protected onViewFilter(item: PermissionCheckItem): boolean;
        private matchContains;
        private getDescendants;
        protected onClick(e: any, row: any, cell: any): void;
        private getParentKey;
        protected getButtons(): Serenity.ToolButton[];
        protected createToolbarExtensions(): void;
        private getSortedGroupAndPermissionKeys;
        get value(): UserPermissionRow[];
        set value(value: UserPermissionRow[]);
        private _rolePermissions;
        get rolePermissions(): string[];
        set rolePermissions(value: string[]);
        private _implicitPermissions;
        set implicitPermissions(value: Q.Dictionary<string[]>);
    }
    interface PermissionCheckEditorOptions {
        showRevoke?: boolean;
    }
    interface PermissionCheckItem {
        ParentKey?: string;
        Key?: string;
        Title?: string;
        IsGroup?: boolean;
        GrantRevoke?: boolean;
    }
}
declare namespace Indotalent.Administration {
    class UserPermissionDialog extends Serenity.TemplatedDialog<UserPermissionDialogOptions> {
        private permissions;
        constructor(opt: UserPermissionDialogOptions);
        protected getDialogOptions(): JQueryUI.DialogOptions;
        protected getTemplate(): string;
    }
    interface UserPermissionDialogOptions {
        userID?: number;
        username?: string;
    }
}
declare namespace Indotalent.Administration {
    class RoleCheckEditor extends Serenity.CheckTreeEditor<Serenity.CheckTreeItem<any>, any> {
        private searchText;
        constructor(div: JQuery);
        protected createToolbarExtensions(): void;
        protected getButtons(): any[];
        protected getTreeItems(): Serenity.CheckTreeItem<any>[];
        protected onViewFilter(item: any): boolean;
    }
}
declare namespace Indotalent.Administration {
    class UserRoleDialog extends Serenity.TemplatedDialog<UserRoleDialogOptions> {
        private permissions;
        constructor(opt: UserRoleDialogOptions);
        protected getDialogOptions(): JQueryUI.DialogOptions;
        protected getTemplate(): string;
    }
    interface UserRoleDialogOptions {
        userID: number;
        username: string;
    }
}
declare namespace Indotalent.LanguageList {
    function getValue(): string[][];
}
declare namespace Indotalent.ScriptInitialization {
}
declare namespace Indotalent.Common {
    class SidebarSearch extends Serenity.Widget<any> {
        private menuUL;
        constructor(input: JQuery, menuUL: JQuery);
        protected updateMatchFlags(text: string): void;
    }
}
declare namespace Indotalent.Membership {
    class LoginPanel extends Serenity.PropertyPanel<LoginRequest, any> {
        protected getFormKey(): string;
        constructor(container: JQuery);
        protected redirectToReturnUrl(): void;
        protected getTemplate(): string;
    }
}
declare namespace Indotalent.Membership {
    class ChangePasswordPanel extends Serenity.PropertyPanel<ChangePasswordRequest, any> {
        protected getFormKey(): string;
        private form;
        constructor(container: JQuery);
        getTemplate(): string;
    }
}
declare namespace Indotalent.Membership {
    class ForgotPasswordPanel extends Serenity.PropertyPanel<ForgotPasswordRequest, any> {
        protected getFormKey(): string;
        private form;
        constructor(container: JQuery);
    }
}
declare namespace Indotalent.Membership {
    class ResetPasswordPanel extends Serenity.PropertyPanel<ResetPasswordRequest, any> {
        protected getFormKey(): string;
        private form;
        constructor(container: JQuery);
    }
}
declare namespace Indotalent.Membership {
    class SignUpPanel extends Serenity.PropertyPanel<SignUpRequest, any> {
        protected getFormKey(): string;
        private form;
        constructor(container: JQuery);
    }
}
declare namespace Indotalent.Merchandise {
    class BrandDialog extends Serenity.EntityDialog<BrandRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: BrandForm;
    }
}
declare namespace Indotalent.Merchandise {
    class BrandGrid extends Serenity.EntityGrid<BrandRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof BrandDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace Indotalent.Merchandise {
    class CategoryDialog extends Serenity.EntityDialog<CategoryRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: CategoryForm;
    }
}
declare namespace Indotalent.Merchandise {
    class CategoryGrid extends Serenity.EntityGrid<CategoryRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof CategoryDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace Indotalent.Merchandise {
    class ColourDialog extends Serenity.EntityDialog<ColourRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: ColourForm;
    }
}
declare namespace Indotalent.Merchandise {
    class ColourGrid extends Serenity.EntityGrid<ColourRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof ColourDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace Indotalent.Merchandise {
    class FlavourDialog extends Serenity.EntityDialog<FlavourRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: FlavourForm;
    }
}
declare namespace Indotalent.Merchandise {
    class FlavourGrid extends Serenity.EntityGrid<FlavourRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof FlavourDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace Indotalent.Merchandise {
    class ProductDialog extends Serenity.EntityDialog<ProductRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: ProductForm;
    }
}
declare namespace Indotalent.Merchandise {
    class ProductGrid extends Serenity.EntityGrid<ProductRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof ProductDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace Indotalent.Merchandise {
    class SizeDialog extends Serenity.EntityDialog<SizeRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: SizeForm;
        private loadedState;
        constructor();
        getSaveState(): string;
        loadResponse(data: any): void;
    }
}
declare namespace Indotalent.Merchandise {
    class SizeGrid extends Serenity.EntityGrid<SizeRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof SizeDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getColumns(): Slick.Column[];
        protected getButtons(): Serenity.ToolButton[];
    }
}
declare namespace Indotalent.Merchandise {
    class UomDialog extends Serenity.EntityDialog<UomRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: UomForm;
        private loadedState;
        constructor();
        getSaveState(): string;
        loadResponse(data: any): void;
    }
}
declare namespace Indotalent.Merchandise {
    class UomGrid extends Serenity.EntityGrid<UomRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof UomDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getColumns(): Slick.Column[];
        protected getButtons(): Serenity.ToolButton[];
    }
}
declare namespace Indotalent.Purchase {
    class BillDialog extends Serenity.EntityDialog<BillRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: BillForm;
    }
}
declare namespace Indotalent.Purchase {
    class BillGrid extends Serenity.EntityGrid<BillRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof BillDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace Indotalent.Purchase {
    class BillDetailDialog extends Serenity.EntityDialog<BillDetailRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: BillDetailForm;
    }
}
declare namespace Indotalent.Purchase {
    class BillDetailGrid extends Serenity.EntityGrid<BillDetailRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof BillDetailDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace Indotalent.Purchase {
    class BillPaymentDialog extends Serenity.EntityDialog<BillPaymentRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: BillPaymentForm;
    }
}
declare namespace Indotalent.Purchase {
    class BillPaymentGrid extends Serenity.EntityGrid<BillPaymentRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof BillPaymentDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace Indotalent.Purchase {
    class PurchaseOrderDialog extends Serenity.EntityDialog<PurchaseOrderRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: PurchaseOrderForm;
    }
}
declare namespace Indotalent.Purchase {
    class PurchaseOrderGrid extends Serenity.EntityGrid<PurchaseOrderRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof PurchaseOrderDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace Indotalent.Purchase {
    class PurchaseOrderDetailDialog extends Serenity.EntityDialog<PurchaseOrderDetailRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: PurchaseOrderDetailForm;
    }
}
declare namespace Indotalent.Purchase {
    class PurchaseOrderDetailGrid extends Serenity.EntityGrid<PurchaseOrderDetailRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof PurchaseOrderDetailDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace Indotalent.Purchase {
    class VendorDialog extends Serenity.EntityDialog<VendorRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: VendorForm;
    }
}
declare namespace Indotalent.Purchase {
    class VendorGrid extends Serenity.EntityGrid<VendorRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof VendorDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace Indotalent.Purchase {
    class VendorContactDialog extends Serenity.EntityDialog<VendorContactRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: VendorContactForm;
    }
}
declare namespace Indotalent.Purchase {
    class VendorContactGrid extends Serenity.EntityGrid<VendorContactRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof VendorContactDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace Indotalent.Sales {
    class CustomerDialog extends Serenity.EntityDialog<CustomerRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: CustomerForm;
    }
}
declare namespace Indotalent.Sales {
    class CustomerGrid extends Serenity.EntityGrid<CustomerRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof CustomerDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getColumns(): Slick.Column[];
        protected getButtons(): Serenity.ToolButton[];
    }
}
declare namespace Indotalent.Sales {
    class CustomerContactDialog extends Serenity.EntityDialog<CustomerContactRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: CustomerContactForm;
    }
}
declare namespace Indotalent.Sales {
    class CustomerContactEditor extends Serenity.Extensions.GridEditorBase<CustomerContactRow> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof CustomerContactDialog;
        protected getLocalTextPrefix(): string;
        constructor(container: JQuery);
        protected getColumns(): Slick.Column[];
    }
}
declare namespace Indotalent.Sales {
    class CustomerContactGrid extends Serenity.EntityGrid<CustomerContactRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof CustomerContactDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace Indotalent.Sales {
    class InvoiceDialog extends Serenity.EntityDialog<InvoiceRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: InvoiceForm;
    }
}
declare namespace Indotalent.Sales {
    class InvoiceGrid extends Serenity.EntityGrid<InvoiceRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof InvoiceDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace Indotalent.Sales {
    class InvoiceDetailDialog extends Serenity.EntityDialog<InvoiceDetailRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: InvoiceDetailForm;
    }
}
declare namespace Indotalent.Sales {
    class InvoiceDetailGrid extends Serenity.EntityGrid<InvoiceDetailRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof InvoiceDetailDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace Indotalent.Sales {
    class InvoicePaymentDialog extends Serenity.EntityDialog<InvoicePaymentRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: InvoicePaymentForm;
    }
}
declare namespace Indotalent.Sales {
    class InvoicePaymentGrid extends Serenity.EntityGrid<InvoicePaymentRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof InvoicePaymentDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace Indotalent.Sales {
    class SalesChannelDialog extends Serenity.EntityDialog<SalesChannelRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: SalesChannelForm;
    }
}
declare namespace Indotalent.Sales {
    class SalesChannelGrid extends Serenity.EntityGrid<SalesChannelRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof SalesChannelDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace Indotalent.Sales {
    class SalesOrderDialog extends Serenity.EntityDialog<SalesOrderRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: SalesOrderForm;
    }
}
declare namespace Indotalent.Sales {
    class SalesOrderGrid extends Serenity.EntityGrid<SalesOrderRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof SalesOrderDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace Indotalent.Sales {
    class SalesOrderDetailDialog extends Serenity.EntityDialog<SalesOrderDetailRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: SalesOrderDetailForm;
    }
}
declare namespace Indotalent.Sales {
    class SalesOrderDetailGrid extends Serenity.EntityGrid<SalesOrderDetailRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof SalesOrderDetailDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace Indotalent.Settings {
    class CashBankDialog extends Serenity.EntityDialog<CashBankRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: CashBankForm;
    }
}
declare namespace Indotalent.Settings {
    class CashBankGrid extends Serenity.EntityGrid<CashBankRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof CashBankDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace Indotalent.Settings {
    class MyCompanyDialog extends Serenity.EntityDialog<MyCompanyRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: MyCompanyForm;
    }
}
declare namespace Indotalent.Settings {
    class MyCompanyGrid extends Serenity.EntityGrid<MyCompanyRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof MyCompanyDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace Indotalent.Settings {
    class PurchaseTaxDialog extends Serenity.EntityDialog<PurchaseTaxRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: PurchaseTaxForm;
    }
}
declare namespace Indotalent.Settings {
    class PurchaseTaxGrid extends Serenity.EntityGrid<PurchaseTaxRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof PurchaseTaxDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace Indotalent.Settings {
    class SalesTaxDialog extends Serenity.EntityDialog<SalesTaxRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: SalesTaxForm;
    }
}
declare namespace Indotalent.Settings {
    class SalesTaxGrid extends Serenity.EntityGrid<SalesTaxRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof SalesTaxDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
