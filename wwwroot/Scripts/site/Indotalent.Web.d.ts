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
        TenantId?: number;
        TenantName?: string;
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
            TenantId = "TenantId",
            TenantName = "TenantName",
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
        IsActive: Serenity.BooleanEditor;
        IsTenantAdmin: Serenity.BooleanEditor;
        Username: Serenity.StringEditor;
        DisplayName: Serenity.StringEditor;
        Email: Serenity.EmailEditor;
        UserImage: Serenity.ImageUploadEditor;
        Password: Serenity.PasswordEditor;
        PasswordConfirm: Serenity.PasswordEditor;
        Source: Serenity.StringEditor;
        TenantId: Serenity.LookupEditor;
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
        Description: Serenity.TextAreaEditor;
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
        TenantId?: number;
        TenantName?: string;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
    }
    namespace BrandRow {
        const idProperty = "Id";
        const nameProperty = "Name";
        const localTextPrefix = "Merchandise.Brand";
        const lookupKey = "Merchandise.Brand";
        function getLookup(): Q.Lookup<BrandRow>;
        const deletePermission = "Merchandise:Brand";
        const insertPermission = "Merchandise:Brand";
        const readPermission = "Merchandise:Brand";
        const updatePermission = "Merchandise:Brand";
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
        Description: Serenity.TextAreaEditor;
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
        TenantId?: number;
        TenantName?: string;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
    }
    namespace CategoryRow {
        const idProperty = "Id";
        const nameProperty = "Name";
        const localTextPrefix = "Merchandise.Category";
        const lookupKey = "Merchandise.Category";
        function getLookup(): Q.Lookup<CategoryRow>;
        const deletePermission = "Merchandise:Category";
        const insertPermission = "Merchandise:Category";
        const readPermission = "Merchandise:Category";
        const updatePermission = "Merchandise:Category";
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
        Description: Serenity.TextAreaEditor;
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
        TenantId?: number;
        TenantName?: string;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
    }
    namespace ColourRow {
        const idProperty = "Id";
        const nameProperty = "Name";
        const localTextPrefix = "Merchandise.Colour";
        const lookupKey = "Merchandise.Colour";
        function getLookup(): Q.Lookup<ColourRow>;
        const deletePermission = "Merchandise:Colour";
        const insertPermission = "Merchandise:Colour";
        const readPermission = "Merchandise:Colour";
        const updatePermission = "Merchandise:Colour";
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
        Description: Serenity.TextAreaEditor;
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
        TenantId?: number;
        TenantName?: string;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
    }
    namespace FlavourRow {
        const idProperty = "Id";
        const nameProperty = "Name";
        const localTextPrefix = "Merchandise.Flavour";
        const lookupKey = "Merchandise.Flavour";
        function getLookup(): Q.Lookup<FlavourRow>;
        const deletePermission = "Merchandise:Flavour";
        const insertPermission = "Merchandise:Flavour";
        const readPermission = "Merchandise:Flavour";
        const updatePermission = "Merchandise:Flavour";
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
    interface ProductCurrencyRequest extends Serenity.ServiceRequest {
    }
}
declare namespace Indotalent.Merchandise {
    interface ProductCurrencyResponse extends Serenity.ServiceResponse {
        Currency?: string;
    }
}
declare namespace Indotalent.Merchandise {
    interface ProductForm {
        Name: Serenity.StringEditor;
        InternalCode: Serenity.StringEditor;
        Barcode: Serenity.StringEditor;
        Description: Serenity.TextAreaEditor;
        UomId: Serenity.LookupEditor;
        Picture: Serenity.ImageUploadEditor;
        BrandId: Serenity.LookupEditor;
        CategoryId: Serenity.LookupEditor;
        SizeId: Serenity.LookupEditor;
        ColourId: Serenity.LookupEditor;
        FlavourId: Serenity.LookupEditor;
        CurrencyName: Serenity.StringEditor;
        PurchasePrice: Serenity.DecimalEditor;
        PurchaseTaxId: Serenity.LookupEditor;
        SalesPrice: Serenity.DecimalEditor;
        SalesTaxId: Serenity.LookupEditor;
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
        UomName?: string;
        BrandName?: string;
        CategoryName?: string;
        SizeName?: string;
        ColourName?: string;
        FlavourName?: string;
        PurchaseTaxName?: string;
        SalesTaxName?: string;
        CurrencyName?: string;
        TenantId?: number;
        TenantName?: string;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
    }
    namespace ProductRow {
        const idProperty = "Id";
        const nameProperty = "Name";
        const localTextPrefix = "Merchandise.Product";
        const lookupKey = "Merchandise.Product";
        function getLookup(): Q.Lookup<ProductRow>;
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
            UomName = "UomName",
            BrandName = "BrandName",
            CategoryName = "CategoryName",
            SizeName = "SizeName",
            ColourName = "ColourName",
            FlavourName = "FlavourName",
            PurchaseTaxName = "PurchaseTaxName",
            SalesTaxName = "SalesTaxName",
            CurrencyName = "CurrencyName",
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
    namespace ProductService {
        const baseUrl = "Merchandise/Product";
        function Create(request: Serenity.SaveRequest<ProductRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<ProductRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ProductRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ProductRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Currency(request: ProductCurrencyRequest, onSuccess?: (response: ProductCurrencyResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Merchandise/Product/Create",
            Update = "Merchandise/Product/Update",
            Delete = "Merchandise/Product/Delete",
            Retrieve = "Merchandise/Product/Retrieve",
            List = "Merchandise/Product/List",
            Currency = "Merchandise/Product/Currency"
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
    interface BillCurrencyRequest extends Serenity.ServiceRequest {
    }
}
declare namespace Indotalent.Purchase {
    interface BillCurrencyResponse extends Serenity.ServiceResponse {
        Currency?: string;
    }
}
declare namespace Indotalent.Purchase {
    class BillDetailColumns {
        static columnsKey: string;
    }
}
declare namespace Indotalent.Purchase {
    interface BillDetailForm {
        ProductId: Serenity.LookupEditor;
        Price: Serenity.DecimalEditor;
        Qty: Serenity.DecimalEditor;
        Discount: Serenity.DecimalEditor;
        TaxPercentage: Serenity.DecimalEditor;
        SubTotal: Serenity.DecimalEditor;
        BeforeTax: Serenity.DecimalEditor;
        TaxAmount: Serenity.DecimalEditor;
        Total: Serenity.DecimalEditor;
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
        ProductName?: string;
        TenantId?: number;
        TenantName?: string;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
    }
    namespace BillDetailRow {
        const idProperty = "Id";
        const nameProperty = "ProductName";
        const localTextPrefix = "Purchase.BillDetail";
        const lookupKey = "Purchase.BillDetail";
        function getLookup(): Q.Lookup<BillDetailRow>;
        const deletePermission = "Purchase:Bill";
        const insertPermission = "Purchase:Bill";
        const readPermission = "Purchase:Bill";
        const updatePermission = "Purchase:Bill";
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
            ProductName = "ProductName",
            TenantId = "TenantId",
            TenantName = "TenantName",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate"
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
        BillDate: Serenity.DateEditor;
        Description: Serenity.TextAreaEditor;
        PurchaseOrderId: Serenity.LookupEditor;
        ExternalReferenceNumber: Serenity.StringEditor;
        ItemList: BillDetailEditor;
        CurrencyName: Serenity.StringEditor;
        SubTotal: Serenity.DecimalEditor;
        Discount: Serenity.DecimalEditor;
        BeforeTax: Serenity.DecimalEditor;
        TaxAmount: Serenity.DecimalEditor;
        OtherCharge: Serenity.DecimalEditor;
        Total: Serenity.DecimalEditor;
        VendorName: Serenity.StringEditor;
        VendorStreet: Serenity.StringEditor;
        VendorCity: Serenity.StringEditor;
        VendorState: Serenity.StringEditor;
        VendorZipCode: Serenity.StringEditor;
        VendorPhone: Serenity.StringEditor;
        VendorEmail: Serenity.StringEditor;
        BillPaymentList: BillPaymentEditor;
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
    interface BillPaymentCurrencyRequest extends Serenity.ServiceRequest {
    }
}
declare namespace Indotalent.Purchase {
    interface BillPaymentCurrencyResponse extends Serenity.ServiceResponse {
        Currency?: string;
    }
}
declare namespace Indotalent.Purchase {
    interface BillPaymentForm {
        Number: Serenity.StringEditor;
        Description: Serenity.TextAreaEditor;
        BillId: Serenity.LookupEditor;
        BillAmount: Serenity.DecimalEditor;
        CurrencyName: Serenity.StringEditor;
        PaymentDate: Serenity.DateEditor;
        CashBankId: Serenity.LookupEditor;
        PaymentAmount: Serenity.DecimalEditor;
        VendorName: Serenity.StringEditor;
        VendorStreet: Serenity.StringEditor;
        VendorCity: Serenity.StringEditor;
        VendorState: Serenity.StringEditor;
        VendorZipCode: Serenity.StringEditor;
        VendorPhone: Serenity.StringEditor;
        VendorEmail: Serenity.StringEditor;
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
        PaymentDate?: string;
        CashBankId?: number;
        BillAmount?: number;
        PaymentAmount?: number;
        BillNumber?: string;
        CashBankName?: string;
        PurchaseOrderId?: number;
        VendorId?: number;
        VendorName?: string;
        VendorStreet?: string;
        VendorCity?: string;
        VendorState?: string;
        VendorZipCode?: string;
        VendorPhone?: string;
        VendorEmail?: string;
        ProcurementGroup?: string;
        CurrencyName?: string;
        TenantId?: number;
        TenantName?: string;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
    }
    namespace BillPaymentRow {
        const idProperty = "Id";
        const nameProperty = "Number";
        const localTextPrefix = "Purchase.BillPayment";
        const lookupKey = "Purchase.BillPayment";
        function getLookup(): Q.Lookup<BillPaymentRow>;
        const deletePermission = "Purchase:BillPayment";
        const insertPermission = "Purchase:BillPayment";
        const readPermission = "Purchase:BillPayment";
        const updatePermission = "Purchase:BillPayment";
        const enum Fields {
            Id = "Id",
            BillId = "BillId",
            Number = "Number",
            Description = "Description",
            PaymentDate = "PaymentDate",
            CashBankId = "CashBankId",
            BillAmount = "BillAmount",
            PaymentAmount = "PaymentAmount",
            BillNumber = "BillNumber",
            CashBankName = "CashBankName",
            PurchaseOrderId = "PurchaseOrderId",
            VendorId = "VendorId",
            VendorName = "VendorName",
            VendorStreet = "VendorStreet",
            VendorCity = "VendorCity",
            VendorState = "VendorState",
            VendorZipCode = "VendorZipCode",
            VendorPhone = "VendorPhone",
            VendorEmail = "VendorEmail",
            ProcurementGroup = "ProcurementGroup",
            CurrencyName = "CurrencyName",
            TenantId = "TenantId",
            TenantName = "TenantName",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate"
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
        function Currency(request: BillPaymentCurrencyRequest, onSuccess?: (response: BillPaymentCurrencyResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Purchase/BillPayment/Create",
            Update = "Purchase/BillPayment/Update",
            Delete = "Purchase/BillPayment/Delete",
            Retrieve = "Purchase/BillPayment/Retrieve",
            List = "Purchase/BillPayment/List",
            Currency = "Purchase/BillPayment/Currency"
        }
    }
}
declare namespace Indotalent.Purchase {
    interface BillRow {
        Id?: number;
        Number?: string;
        Description?: string;
        ExternalReferenceNumber?: string;
        BillDate?: string;
        PurchaseOrderId?: number;
        PurchaseOrderNumber?: string;
        SubTotal?: number;
        Discount?: number;
        BeforeTax?: number;
        TaxAmount?: number;
        Total?: number;
        OtherCharge?: number;
        VendorId?: number;
        VendorName?: string;
        VendorStreet?: string;
        VendorCity?: string;
        VendorState?: string;
        VendorZipCode?: string;
        VendorPhone?: string;
        VendorEmail?: string;
        ProcurementGroup?: string;
        CurrencyName?: string;
        TenantId?: number;
        TenantName?: string;
        ItemList?: BillDetailRow[];
        BillPaymentList?: BillPaymentRow[];
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
    }
    namespace BillRow {
        const idProperty = "Id";
        const nameProperty = "Number";
        const localTextPrefix = "Purchase.Bill";
        const lookupKey = "Purchase.Bill";
        function getLookup(): Q.Lookup<BillRow>;
        const deletePermission = "Purchase:Bill";
        const insertPermission = "Purchase:Bill";
        const readPermission = "Purchase:Bill";
        const updatePermission = "Purchase:Bill";
        const enum Fields {
            Id = "Id",
            Number = "Number",
            Description = "Description",
            ExternalReferenceNumber = "ExternalReferenceNumber",
            BillDate = "BillDate",
            PurchaseOrderId = "PurchaseOrderId",
            PurchaseOrderNumber = "PurchaseOrderNumber",
            SubTotal = "SubTotal",
            Discount = "Discount",
            BeforeTax = "BeforeTax",
            TaxAmount = "TaxAmount",
            Total = "Total",
            OtherCharge = "OtherCharge",
            VendorId = "VendorId",
            VendorName = "VendorName",
            VendorStreet = "VendorStreet",
            VendorCity = "VendorCity",
            VendorState = "VendorState",
            VendorZipCode = "VendorZipCode",
            VendorPhone = "VendorPhone",
            VendorEmail = "VendorEmail",
            ProcurementGroup = "ProcurementGroup",
            CurrencyName = "CurrencyName",
            TenantId = "TenantId",
            TenantName = "TenantName",
            ItemList = "ItemList",
            BillPaymentList = "BillPaymentList",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate"
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
        function Currency(request: BillCurrencyRequest, onSuccess?: (response: BillCurrencyResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Purchase/Bill/Create",
            Update = "Purchase/Bill/Update",
            Delete = "Purchase/Bill/Delete",
            Retrieve = "Purchase/Bill/Retrieve",
            List = "Purchase/Bill/List",
            Currency = "Purchase/Bill/Currency"
        }
    }
}
declare namespace Indotalent.Purchase {
    class PurchaseOrderColumns {
        static columnsKey: string;
    }
}
declare namespace Indotalent.Purchase {
    interface PurchaseOrderCurrencyRequest extends Serenity.ServiceRequest {
    }
}
declare namespace Indotalent.Purchase {
    interface PurchaseOrderCurrencyResponse extends Serenity.ServiceResponse {
        Currency?: string;
    }
}
declare namespace Indotalent.Purchase {
    class PurchaseOrderDetailColumns {
        static columnsKey: string;
    }
}
declare namespace Indotalent.Purchase {
    interface PurchaseOrderDetailForm {
        ProductId: Serenity.LookupEditor;
        Price: Serenity.DecimalEditor;
        Qty: Serenity.DecimalEditor;
        Discount: Serenity.DecimalEditor;
        TaxPercentage: Serenity.DecimalEditor;
        SubTotal: Serenity.DecimalEditor;
        BeforeTax: Serenity.DecimalEditor;
        TaxAmount: Serenity.DecimalEditor;
        Total: Serenity.DecimalEditor;
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
        ProductName?: string;
        TenantId?: number;
        TenantName?: string;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
    }
    namespace PurchaseOrderDetailRow {
        const idProperty = "Id";
        const nameProperty = "ProductName";
        const localTextPrefix = "PurchaseOrder.PurchaseOrderDetail";
        const lookupKey = "PurchaseOrder.PurchaseOrderDetail";
        function getLookup(): Q.Lookup<PurchaseOrderDetailRow>;
        const deletePermission = "Purchase:PurchaseOrder";
        const insertPermission = "Purchase:PurchaseOrder";
        const readPermission = "Purchase:PurchaseOrder";
        const updatePermission = "Purchase:PurchaseOrder";
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
            ProductName = "ProductName",
            TenantId = "TenantId",
            TenantName = "TenantName",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate"
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
        OrderDate: Serenity.DateEditor;
        Description: Serenity.TextAreaEditor;
        VendorId: Serenity.LookupEditor;
        ItemList: PurchaseOrderDetailEditor;
        CurrencyName: Serenity.StringEditor;
        SubTotal: Serenity.DecimalEditor;
        Discount: Serenity.DecimalEditor;
        BeforeTax: Serenity.DecimalEditor;
        TaxAmount: Serenity.DecimalEditor;
        OtherCharge: Serenity.DecimalEditor;
        Total: Serenity.DecimalEditor;
        VendorName: Serenity.StringEditor;
        VendorStreet: Serenity.StringEditor;
        VendorCity: Serenity.StringEditor;
        VendorState: Serenity.StringEditor;
        VendorZipCode: Serenity.StringEditor;
        VendorPhone: Serenity.StringEditor;
        VendorEmail: Serenity.StringEditor;
        BillList: BillEditor;
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
        ProcurementGroup?: string;
        Description?: string;
        OrderDate?: string;
        VendorId?: number;
        SubTotal?: number;
        Discount?: number;
        BeforeTax?: number;
        TaxAmount?: number;
        Total?: number;
        OtherCharge?: number;
        VendorName?: string;
        VendorStreet?: string;
        VendorCity?: string;
        VendorState?: string;
        VendorZipCode?: string;
        VendorPhone?: string;
        VendorEmail?: string;
        CurrencyName?: string;
        TenantId?: number;
        TenantName?: string;
        ItemList?: PurchaseOrderDetailRow[];
        BillList?: BillRow[];
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
    }
    namespace PurchaseOrderRow {
        const idProperty = "Id";
        const nameProperty = "Number";
        const localTextPrefix = "Purchase.PurchaseOrder";
        const lookupKey = "Purchase.PurchaseOrder";
        function getLookup(): Q.Lookup<PurchaseOrderRow>;
        const deletePermission = "Purchase:PurchaseOrder";
        const insertPermission = "Purchase:PurchaseOrder";
        const readPermission = "Purchase:PurchaseOrder";
        const updatePermission = "Purchase:PurchaseOrder";
        const enum Fields {
            Id = "Id",
            Number = "Number",
            ProcurementGroup = "ProcurementGroup",
            Description = "Description",
            OrderDate = "OrderDate",
            VendorId = "VendorId",
            SubTotal = "SubTotal",
            Discount = "Discount",
            BeforeTax = "BeforeTax",
            TaxAmount = "TaxAmount",
            Total = "Total",
            OtherCharge = "OtherCharge",
            VendorName = "VendorName",
            VendorStreet = "VendorStreet",
            VendorCity = "VendorCity",
            VendorState = "VendorState",
            VendorZipCode = "VendorZipCode",
            VendorPhone = "VendorPhone",
            VendorEmail = "VendorEmail",
            CurrencyName = "CurrencyName",
            TenantId = "TenantId",
            TenantName = "TenantName",
            ItemList = "ItemList",
            BillList = "BillList",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate"
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
        function Currency(request: PurchaseOrderCurrencyRequest, onSuccess?: (response: PurchaseOrderCurrencyResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Purchase/PurchaseOrder/Create",
            Update = "Purchase/PurchaseOrder/Update",
            Delete = "Purchase/PurchaseOrder/Delete",
            Retrieve = "Purchase/PurchaseOrder/Retrieve",
            List = "Purchase/PurchaseOrder/List",
            Currency = "Purchase/PurchaseOrder/Currency"
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
        Name: Serenity.StringEditor;
        Description: Serenity.TextAreaEditor;
        Street: Serenity.StringEditor;
        City: Serenity.StringEditor;
        State: Serenity.StringEditor;
        ZipCode: Serenity.StringEditor;
        Phone: Serenity.StringEditor;
        Email: Serenity.StringEditor;
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
        TenantId?: number;
        TenantName?: string;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
    }
    namespace VendorContactRow {
        const idProperty = "Id";
        const nameProperty = "Name";
        const localTextPrefix = "Purchase.VendorContact";
        const lookupKey = "Purchase.VendorContact";
        function getLookup(): Q.Lookup<VendorContactRow>;
        const deletePermission = "Purchase:Vendor";
        const insertPermission = "Purchase:Vendor";
        const readPermission = "Purchase:Vendor";
        const updatePermission = "Purchase:Vendor";
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
            TenantId = "TenantId",
            TenantName = "TenantName",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate"
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
        Description: Serenity.TextAreaEditor;
        Street: Serenity.StringEditor;
        City: Serenity.StringEditor;
        State: Serenity.StringEditor;
        ZipCode: Serenity.StringEditor;
        Phone: Serenity.StringEditor;
        Email: Serenity.StringEditor;
        ContactList: VendorContactEditor;
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
        TenantId?: number;
        TenantName?: string;
        ContactList?: VendorContactRow[];
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
    }
    namespace VendorRow {
        const idProperty = "Id";
        const nameProperty = "Name";
        const localTextPrefix = "Purchase.Vendor";
        const lookupKey = "Purchase.Vendor";
        function getLookup(): Q.Lookup<VendorRow>;
        const deletePermission = "Purchase:Vendor";
        const insertPermission = "Purchase:Vendor";
        const readPermission = "Purchase:Vendor";
        const updatePermission = "Purchase:Vendor";
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
            ContactList = "ContactList",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate"
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
        Name: Serenity.StringEditor;
        Description: Serenity.TextAreaEditor;
        Street: Serenity.StringEditor;
        City: Serenity.StringEditor;
        State: Serenity.StringEditor;
        ZipCode: Serenity.StringEditor;
        Phone: Serenity.StringEditor;
        Email: Serenity.StringEditor;
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
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
    }
    namespace CustomerRow {
        const idProperty = "Id";
        const nameProperty = "Name";
        const localTextPrefix = "Sales.Customer";
        const lookupKey = "Sales.Customer";
        function getLookup(): Q.Lookup<CustomerRow>;
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
            ContactList = "ContactList",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate"
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
    interface InvoiceCurrencyRequest extends Serenity.ServiceRequest {
    }
}
declare namespace Indotalent.Sales {
    interface InvoiceCurrencyResponse extends Serenity.ServiceResponse {
        Currency?: string;
    }
}
declare namespace Indotalent.Sales {
    class InvoiceDetailColumns {
        static columnsKey: string;
    }
}
declare namespace Indotalent.Sales {
    interface InvoiceDetailForm {
        ProductId: Serenity.LookupEditor;
        Price: Serenity.DecimalEditor;
        Qty: Serenity.DecimalEditor;
        Discount: Serenity.DecimalEditor;
        TaxPercentage: Serenity.DecimalEditor;
        SubTotal: Serenity.DecimalEditor;
        BeforeTax: Serenity.DecimalEditor;
        TaxAmount: Serenity.DecimalEditor;
        Total: Serenity.DecimalEditor;
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
        ProductName?: string;
        TenantId?: number;
        TenantName?: string;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
    }
    namespace InvoiceDetailRow {
        const idProperty = "Id";
        const nameProperty = "ProductName";
        const localTextPrefix = "Sales.InvoiceDetail";
        const lookupKey = "Sales.InvoiceDetail";
        function getLookup(): Q.Lookup<InvoiceDetailRow>;
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
            ProductName = "ProductName",
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
        InvoiceDate: Serenity.DateEditor;
        Description: Serenity.TextAreaEditor;
        SalesOrderId: Serenity.LookupEditor;
        ItemList: InvoiceDetailEditor;
        CurrencyName: Serenity.StringEditor;
        SubTotal: Serenity.DecimalEditor;
        Discount: Serenity.DecimalEditor;
        BeforeTax: Serenity.DecimalEditor;
        TaxAmount: Serenity.DecimalEditor;
        OtherCharge: Serenity.DecimalEditor;
        Total: Serenity.DecimalEditor;
        CustomerName: Serenity.StringEditor;
        CustomerStreet: Serenity.StringEditor;
        CustomerCity: Serenity.StringEditor;
        CustomerState: Serenity.StringEditor;
        CustomerZipCode: Serenity.StringEditor;
        CustomerPhone: Serenity.StringEditor;
        CustomerEmail: Serenity.StringEditor;
        InvoicePaymentList: InvoicePaymentEditor;
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
    interface InvoicePaymentCurrencyRequest extends Serenity.ServiceRequest {
    }
}
declare namespace Indotalent.Sales {
    interface InvoicePaymentCurrencyResponse extends Serenity.ServiceResponse {
        Currency?: string;
    }
}
declare namespace Indotalent.Sales {
    interface InvoicePaymentForm {
        Number: Serenity.StringEditor;
        Description: Serenity.TextAreaEditor;
        InvoiceId: Serenity.LookupEditor;
        InvoiceAmount: Serenity.DecimalEditor;
        CurrencyName: Serenity.StringEditor;
        PaymentDate: Serenity.DateEditor;
        CashBankId: Serenity.LookupEditor;
        PaymentAmount: Serenity.DecimalEditor;
        CustomerName: Serenity.StringEditor;
        CustomerStreet: Serenity.StringEditor;
        CustomerCity: Serenity.StringEditor;
        CustomerState: Serenity.StringEditor;
        CustomerZipCode: Serenity.StringEditor;
        CustomerPhone: Serenity.StringEditor;
        CustomerEmail: Serenity.StringEditor;
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
        PaymentDate?: string;
        CashBankId?: number;
        InvoiceAmount?: number;
        PaymentAmount?: number;
        InvoiceNumber?: string;
        CashBankName?: string;
        SalesOrderId?: number;
        CustomerId?: number;
        CustomerName?: string;
        CustomerStreet?: string;
        CustomerCity?: string;
        CustomerState?: string;
        CustomerZipCode?: string;
        CustomerPhone?: string;
        CustomerEmail?: string;
        SalesGroup?: string;
        CurrencyName?: string;
        TenantId?: number;
        TenantName?: string;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
    }
    namespace InvoicePaymentRow {
        const idProperty = "Id";
        const nameProperty = "Number";
        const localTextPrefix = "Sales.InvoicePayment";
        const lookupKey = "Sales.InvoicePayment";
        function getLookup(): Q.Lookup<InvoicePaymentRow>;
        const deletePermission = "Sales:InvoicePayment";
        const insertPermission = "Sales:InvoicePayment";
        const readPermission = "Sales:InvoicePayment";
        const updatePermission = "Sales:InvoicePayment";
        const enum Fields {
            Id = "Id",
            InvoiceId = "InvoiceId",
            Number = "Number",
            Description = "Description",
            PaymentDate = "PaymentDate",
            CashBankId = "CashBankId",
            InvoiceAmount = "InvoiceAmount",
            PaymentAmount = "PaymentAmount",
            InvoiceNumber = "InvoiceNumber",
            CashBankName = "CashBankName",
            SalesOrderId = "SalesOrderId",
            CustomerId = "CustomerId",
            CustomerName = "CustomerName",
            CustomerStreet = "CustomerStreet",
            CustomerCity = "CustomerCity",
            CustomerState = "CustomerState",
            CustomerZipCode = "CustomerZipCode",
            CustomerPhone = "CustomerPhone",
            CustomerEmail = "CustomerEmail",
            SalesGroup = "SalesGroup",
            CurrencyName = "CurrencyName",
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
    namespace InvoicePaymentService {
        const baseUrl = "Sales/InvoicePayment";
        function Create(request: Serenity.SaveRequest<InvoicePaymentRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<InvoicePaymentRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<InvoicePaymentRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<InvoicePaymentRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Currency(request: InvoicePaymentCurrencyRequest, onSuccess?: (response: InvoicePaymentCurrencyResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Sales/InvoicePayment/Create",
            Update = "Sales/InvoicePayment/Update",
            Delete = "Sales/InvoicePayment/Delete",
            Retrieve = "Sales/InvoicePayment/Retrieve",
            List = "Sales/InvoicePayment/List",
            Currency = "Sales/InvoicePayment/Currency"
        }
    }
}
declare namespace Indotalent.Sales {
    interface InvoiceRow {
        Id?: number;
        Number?: string;
        Description?: string;
        InvoiceDate?: string;
        SalesOrderId?: number;
        SalesOrderNumber?: string;
        SubTotal?: number;
        Discount?: number;
        BeforeTax?: number;
        TaxAmount?: number;
        Total?: number;
        OtherCharge?: number;
        CustomerId?: number;
        CustomerName?: string;
        CustomerStreet?: string;
        CustomerCity?: string;
        CustomerState?: string;
        CustomerZipCode?: string;
        CustomerPhone?: string;
        CustomerEmail?: string;
        SalesGroup?: string;
        CurrencyName?: string;
        TenantId?: number;
        TenantName?: string;
        ItemList?: InvoiceDetailRow[];
        InvoicePaymentList?: InvoicePaymentRow[];
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
    }
    namespace InvoiceRow {
        const idProperty = "Id";
        const nameProperty = "Number";
        const localTextPrefix = "Sales.Invoice";
        const lookupKey = "Sales.Invoice";
        function getLookup(): Q.Lookup<InvoiceRow>;
        const deletePermission = "Sales:Invoice";
        const insertPermission = "Sales:Invoice";
        const readPermission = "Sales:Invoice";
        const updatePermission = "Sales:Invoice";
        const enum Fields {
            Id = "Id",
            Number = "Number",
            Description = "Description",
            InvoiceDate = "InvoiceDate",
            SalesOrderId = "SalesOrderId",
            SalesOrderNumber = "SalesOrderNumber",
            SubTotal = "SubTotal",
            Discount = "Discount",
            BeforeTax = "BeforeTax",
            TaxAmount = "TaxAmount",
            Total = "Total",
            OtherCharge = "OtherCharge",
            CustomerId = "CustomerId",
            CustomerName = "CustomerName",
            CustomerStreet = "CustomerStreet",
            CustomerCity = "CustomerCity",
            CustomerState = "CustomerState",
            CustomerZipCode = "CustomerZipCode",
            CustomerPhone = "CustomerPhone",
            CustomerEmail = "CustomerEmail",
            SalesGroup = "SalesGroup",
            CurrencyName = "CurrencyName",
            TenantId = "TenantId",
            TenantName = "TenantName",
            ItemList = "ItemList",
            InvoicePaymentList = "InvoicePaymentList",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate"
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
        function Currency(request: InvoiceCurrencyRequest, onSuccess?: (response: InvoiceCurrencyResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Sales/Invoice/Create",
            Update = "Sales/Invoice/Update",
            Delete = "Sales/Invoice/Delete",
            Retrieve = "Sales/Invoice/Retrieve",
            List = "Sales/Invoice/List",
            Currency = "Sales/Invoice/Currency"
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
        Description: Serenity.TextAreaEditor;
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
        TenantId?: number;
        TenantName?: string;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
    }
    namespace SalesChannelRow {
        const idProperty = "Id";
        const nameProperty = "Name";
        const localTextPrefix = "Sales.SalesChannel";
        const lookupKey = "Sales.SalesChannel";
        function getLookup(): Q.Lookup<SalesChannelRow>;
        const deletePermission = "Sales:SalesChannel";
        const insertPermission = "Sales:SalesChannel";
        const readPermission = "Sales:SalesChannel";
        const updatePermission = "Sales:SalesChannel";
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
    interface SalesOrderCurrencyRequest extends Serenity.ServiceRequest {
    }
}
declare namespace Indotalent.Sales {
    interface SalesOrderCurrencyResponse extends Serenity.ServiceResponse {
        Currency?: string;
    }
}
declare namespace Indotalent.Sales {
    class SalesOrderDetailColumns {
        static columnsKey: string;
    }
}
declare namespace Indotalent.Sales {
    interface SalesOrderDetailForm {
        ProductId: Serenity.LookupEditor;
        Price: Serenity.DecimalEditor;
        Qty: Serenity.DecimalEditor;
        Discount: Serenity.DecimalEditor;
        TaxPercentage: Serenity.DecimalEditor;
        SubTotal: Serenity.DecimalEditor;
        BeforeTax: Serenity.DecimalEditor;
        TaxAmount: Serenity.DecimalEditor;
        Total: Serenity.DecimalEditor;
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
        ProductName?: string;
        TenantId?: number;
        TenantName?: string;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
    }
    namespace SalesOrderDetailRow {
        const idProperty = "Id";
        const nameProperty = "ProductName";
        const localTextPrefix = "Sales.SalesOrderDetail";
        const lookupKey = "Sales.SalesOrderDetail";
        function getLookup(): Q.Lookup<SalesOrderDetailRow>;
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
            ProductName = "ProductName",
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
        OrderDate: Serenity.DateEditor;
        Description: Serenity.TextAreaEditor;
        CustomerId: Serenity.LookupEditor;
        SalesChannelId: Serenity.LookupEditor;
        ItemList: SalesOrderDetailEditor;
        CurrencyName: Serenity.StringEditor;
        SubTotal: Serenity.DecimalEditor;
        Discount: Serenity.DecimalEditor;
        BeforeTax: Serenity.DecimalEditor;
        TaxAmount: Serenity.DecimalEditor;
        OtherCharge: Serenity.DecimalEditor;
        Total: Serenity.DecimalEditor;
        CustomerName: Serenity.StringEditor;
        CustomerStreet: Serenity.StringEditor;
        CustomerCity: Serenity.StringEditor;
        CustomerState: Serenity.StringEditor;
        CustomerZipCode: Serenity.StringEditor;
        CustomerPhone: Serenity.StringEditor;
        CustomerEmail: Serenity.StringEditor;
        InvoiceList: InvoiceEditor;
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
        SalesGroup?: string;
        Description?: string;
        OrderDate?: string;
        CustomerId?: number;
        SubTotal?: number;
        Discount?: number;
        BeforeTax?: number;
        TaxAmount?: number;
        Total?: number;
        OtherCharge?: number;
        CustomerName?: string;
        CustomerStreet?: string;
        CustomerCity?: string;
        CustomerState?: string;
        CustomerZipCode?: string;
        CustomerPhone?: string;
        CustomerEmail?: string;
        SalesChannelId?: number;
        SalesChannelName?: string;
        CurrencyName?: string;
        TenantId?: number;
        TenantName?: string;
        ItemList?: SalesOrderDetailRow[];
        InvoiceList?: InvoiceRow[];
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
    }
    namespace SalesOrderRow {
        const idProperty = "Id";
        const nameProperty = "Number";
        const localTextPrefix = "Sales.SalesOrder";
        const lookupKey = "Sales.SalesOrder";
        function getLookup(): Q.Lookup<SalesOrderRow>;
        const deletePermission = "Sales:SalesOrder";
        const insertPermission = "Sales:SalesOrder";
        const readPermission = "Sales:SalesOrder";
        const updatePermission = "Sales:SalesOrder";
        const enum Fields {
            Id = "Id",
            Number = "Number",
            SalesGroup = "SalesGroup",
            Description = "Description",
            OrderDate = "OrderDate",
            CustomerId = "CustomerId",
            SubTotal = "SubTotal",
            Discount = "Discount",
            BeforeTax = "BeforeTax",
            TaxAmount = "TaxAmount",
            Total = "Total",
            OtherCharge = "OtherCharge",
            CustomerName = "CustomerName",
            CustomerStreet = "CustomerStreet",
            CustomerCity = "CustomerCity",
            CustomerState = "CustomerState",
            CustomerZipCode = "CustomerZipCode",
            CustomerPhone = "CustomerPhone",
            CustomerEmail = "CustomerEmail",
            SalesChannelId = "SalesChannelId",
            SalesChannelName = "SalesChannelName",
            CurrencyName = "CurrencyName",
            TenantId = "TenantId",
            TenantName = "TenantName",
            ItemList = "ItemList",
            InvoiceList = "InvoiceList",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate"
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
        function Currency(request: SalesOrderCurrencyRequest, onSuccess?: (response: SalesOrderCurrencyResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Sales/SalesOrder/Create",
            Update = "Sales/SalesOrder/Update",
            Delete = "Sales/SalesOrder/Delete",
            Retrieve = "Sales/SalesOrder/Retrieve",
            List = "Sales/SalesOrder/List",
            Currency = "Sales/SalesOrder/Currency"
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
        Description: Serenity.TextAreaEditor;
        AccountNumber: Serenity.StringEditor;
        Street: Serenity.StringEditor;
        City: Serenity.StringEditor;
        State: Serenity.StringEditor;
        ZipCode: Serenity.StringEditor;
        Phone: Serenity.StringEditor;
        Email: Serenity.StringEditor;
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
        TenantId?: number;
        TenantName?: string;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
    }
    namespace CashBankRow {
        const idProperty = "Id";
        const nameProperty = "Name";
        const localTextPrefix = "Settings.CashBank";
        const lookupKey = "Settings.CashBank";
        function getLookup(): Q.Lookup<CashBankRow>;
        const deletePermission = "Settings:CashBank";
        const insertPermission = "Settings:CashBank";
        const readPermission = "Settings:CashBank";
        const updatePermission = "Settings:CashBank";
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
            TenantId = "TenantId",
            TenantName = "TenantName",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate"
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
        Description: Serenity.TextAreaEditor;
        TaxRatePercentage: Serenity.DecimalEditor;
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
        TenantId?: number;
        TenantName?: string;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
    }
    namespace PurchaseTaxRow {
        const idProperty = "Id";
        const nameProperty = "Name";
        const localTextPrefix = "Settings.PurchaseTax";
        const lookupKey = "Settings.PurchaseTax";
        function getLookup(): Q.Lookup<PurchaseTaxRow>;
        const deletePermission = "Settings:PurchaseTax";
        const insertPermission = "Settings:PurchaseTax";
        const readPermission = "Settings:PurchaseTax";
        const updatePermission = "Settings:PurchaseTax";
        const enum Fields {
            Id = "Id",
            Name = "Name",
            Description = "Description",
            TaxRatePercentage = "TaxRatePercentage",
            TenantId = "TenantId",
            TenantName = "TenantName",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate"
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
        Description: Serenity.TextAreaEditor;
        TaxRatePercentage: Serenity.DecimalEditor;
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
        TenantId?: number;
        TenantName?: string;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
    }
    namespace SalesTaxRow {
        const idProperty = "Id";
        const nameProperty = "Name";
        const localTextPrefix = "Settings.SalesTax";
        const lookupKey = "Settings.SalesTax";
        function getLookup(): Q.Lookup<SalesTaxRow>;
        const deletePermission = "Settings:SalesTax";
        const insertPermission = "Settings:SalesTax";
        const readPermission = "Settings:SalesTax";
        const updatePermission = "Settings:SalesTax";
        const enum Fields {
            Id = "Id",
            Name = "Name",
            Description = "Description",
            TaxRatePercentage = "TaxRatePercentage",
            TenantId = "TenantId",
            TenantName = "TenantName",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate"
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
        protected getButtons(): Serenity.ToolButton[];
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
        protected getColumns(): Slick.Column[];
        protected getButtons(): Serenity.ToolButton[];
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
        protected getPropertyItems(): Serenity.PropertyItem[];
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
        protected getColumns(): Slick.Column[];
        protected getButtons(): Serenity.ToolButton[];
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
        private loadedState;
        constructor();
        getSaveState(): string;
        loadResponse(data: any): void;
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
        protected getColumns(): Slick.Column[];
        protected getButtons(): Serenity.ToolButton[];
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
        private loadedState;
        constructor();
        getSaveState(): string;
        loadResponse(data: any): void;
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
        protected getColumns(): Slick.Column[];
        protected getButtons(): Serenity.ToolButton[];
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
        private loadedState;
        constructor();
        getSaveState(): string;
        loadResponse(data: any): void;
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
        protected getColumns(): Slick.Column[];
        protected getButtons(): Serenity.ToolButton[];
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
        private loadedState;
        constructor();
        getSaveState(): string;
        loadResponse(data: any): void;
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
        protected getColumns(): Slick.Column[];
        protected getButtons(): Serenity.ToolButton[];
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
        private loadedState;
        constructor();
        getSaveState(): string;
        loadResponse(data: any): void;
        protected getToolbarButtons(): Serenity.ToolButton[];
        protected afterLoadEntity(): void;
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
        protected getColumns(): Slick.Column[];
        protected onClick(e: JQueryEventObject, row: number, cell: number): void;
        protected getButtons(): Serenity.ToolButton[];
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
        private loadedState;
        constructor();
        getSaveState(): string;
        loadResponse(data: any): void;
        private recalculate;
        protected afterLoadEntity(): void;
        protected updateInterface(): void;
        private setVendor;
        protected getToolbarButtons(): Serenity.ToolButton[];
    }
}
declare namespace Indotalent.Purchase {
    class BillEditor extends Serenity.Extensions.GridEditorBase<BillRow> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof BillDialog;
        protected getLocalTextPrefix(): string;
        constructor(container: JQuery);
        protected getColumns(): Slick.Column[];
        protected updateInterface(): void;
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
        protected getButtons(): Serenity.ToolButton[];
        protected getColumns(): Slick.Column[];
        protected onClick(e: JQueryEventObject, row: number, cell: number): void;
    }
}
declare namespace Indotalent.Purchase {
    class BillDetailDialog extends Serenity.Extensions.GridEditorDialog<BillDetailRow> {
        protected getFormKey(): string;
        protected getLocalTextPrefix(): string;
        protected form: BillDetailForm;
        constructor();
        private recalculate;
        protected updateInterface(): void;
    }
}
declare namespace Indotalent.Purchase {
    class BillDetailEditor extends Serenity.Extensions.GridEditorBase<BillDetailRow> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof BillDetailDialog;
        protected getLocalTextPrefix(): string;
        constructor(container: JQuery);
        protected validateEntity(row: BillDetailRow, id: number): boolean;
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
        private loadedState;
        constructor();
        getSaveState(): string;
        loadResponse(data: any): void;
        protected updateInterface(): void;
        protected afterLoadEntity(): void;
        private setVendor;
        protected getToolbarButtons(): Serenity.ToolButton[];
    }
}
declare namespace Indotalent.Purchase {
    class BillPaymentEditor extends Serenity.Extensions.GridEditorBase<BillPaymentRow> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof BillPaymentDialog;
        protected getLocalTextPrefix(): string;
        constructor(container: JQuery);
        protected getColumns(): Slick.Column[];
        protected updateInterface(): void;
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
        protected getButtons(): Serenity.ToolButton[];
        protected getColumns(): Slick.Column[];
        protected onClick(e: JQueryEventObject, row: number, cell: number): void;
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
        private loadedState;
        constructor();
        getSaveState(): string;
        loadResponse(data: any): void;
        private recalculate;
        protected afterLoadEntity(): void;
        protected updateInterface(): void;
        private setVendor;
        protected getToolbarButtons(): Serenity.ToolButton[];
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
        protected getButtons(): Serenity.ToolButton[];
        protected getColumns(): Slick.Column[];
        protected onClick(e: JQueryEventObject, row: number, cell: number): void;
    }
}
declare namespace Indotalent.Purchase {
    class PurchaseOrderDetailDialog extends Serenity.Extensions.GridEditorDialog<PurchaseOrderDetailRow> {
        protected getFormKey(): string;
        protected getLocalTextPrefix(): string;
        protected form: PurchaseOrderDetailForm;
        constructor();
        private recalculate;
        protected updateInterface(): void;
    }
}
declare namespace Indotalent.Purchase {
    class PurchaseOrderDetailEditor extends Serenity.Extensions.GridEditorBase<PurchaseOrderDetailRow> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof PurchaseOrderDetailDialog;
        protected getLocalTextPrefix(): string;
        constructor(container: JQuery);
        protected validateEntity(row: PurchaseOrderDetailRow, id: number): boolean;
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
        private loadedState;
        constructor();
        getSaveState(): string;
        loadResponse(data: any): void;
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
        protected getColumns(): Slick.Column[];
        protected getButtons(): Serenity.ToolButton[];
    }
}
declare namespace Indotalent.Purchase {
    class VendorContactDialog extends Serenity.Extensions.GridEditorDialog<VendorContactRow> {
        protected getFormKey(): string;
        protected getLocalTextPrefix(): string;
        protected form: VendorContactForm;
    }
}
declare namespace Indotalent.Purchase {
    class VendorContactEditor extends Serenity.Extensions.GridEditorBase<VendorContactRow> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof VendorContactDialog;
        protected getLocalTextPrefix(): string;
        constructor(container: JQuery);
        protected getColumns(): Slick.Column[];
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
        protected getColumns(): Slick.Column[];
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
        private loadedState;
        constructor();
        getSaveState(): string;
        loadResponse(data: any): void;
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
    class CustomerContactDialog extends Serenity.Extensions.GridEditorDialog<CustomerContactRow> {
        protected getFormKey(): string;
        protected getLocalTextPrefix(): string;
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
        protected getColumns(): Slick.Column[];
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
        private loadedState;
        constructor();
        getSaveState(): string;
        loadResponse(data: any): void;
        private recalculate;
        protected afterLoadEntity(): void;
        protected updateInterface(): void;
        private setCustomer;
        protected getToolbarButtons(): Serenity.ToolButton[];
    }
}
declare namespace Indotalent.Sales {
    class InvoiceEditor extends Serenity.Extensions.GridEditorBase<InvoiceRow> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof InvoiceDialog;
        protected getLocalTextPrefix(): string;
        constructor(container: JQuery);
        protected getColumns(): Slick.Column[];
        protected updateInterface(): void;
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
        protected getButtons(): Serenity.ToolButton[];
        protected getColumns(): Slick.Column[];
        protected onClick(e: JQueryEventObject, row: number, cell: number): void;
    }
}
declare namespace Indotalent.Sales {
    class InvoiceDetailDialog extends Serenity.Extensions.GridEditorDialog<InvoiceDetailRow> {
        protected getFormKey(): string;
        protected getLocalTextPrefix(): string;
        protected form: InvoiceDetailForm;
        constructor();
        private recalculate;
        protected updateInterface(): void;
    }
}
declare namespace Indotalent.Sales {
    class InvoiceDetailEditor extends Serenity.Extensions.GridEditorBase<InvoiceDetailRow> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof InvoiceDetailDialog;
        protected getLocalTextPrefix(): string;
        constructor(container: JQuery);
        protected validateEntity(row: InvoiceDetailRow, id: number): boolean;
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
        private loadedState;
        constructor();
        getSaveState(): string;
        loadResponse(data: any): void;
        protected updateInterface(): void;
        protected afterLoadEntity(): void;
        private setCustomer;
        protected getToolbarButtons(): Serenity.ToolButton[];
    }
}
declare namespace Indotalent.Sales {
    class InvoicePaymentEditor extends Serenity.Extensions.GridEditorBase<InvoicePaymentRow> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof InvoicePaymentDialog;
        protected getLocalTextPrefix(): string;
        constructor(container: JQuery);
        protected getColumns(): Slick.Column[];
        protected updateInterface(): void;
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
        protected getButtons(): Serenity.ToolButton[];
        protected getColumns(): Slick.Column[];
        protected onClick(e: JQueryEventObject, row: number, cell: number): void;
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
        private loadedState;
        constructor();
        getSaveState(): string;
        loadResponse(data: any): void;
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
        protected getColumns(): Slick.Column[];
        protected getButtons(): Serenity.ToolButton[];
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
        private loadedState;
        constructor();
        getSaveState(): string;
        loadResponse(data: any): void;
        private recalculate;
        protected afterLoadEntity(): void;
        protected updateInterface(): void;
        private setCustomer;
        protected getToolbarButtons(): Serenity.ToolButton[];
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
        protected getButtons(): Serenity.ToolButton[];
        protected getColumns(): Slick.Column[];
        protected onClick(e: JQueryEventObject, row: number, cell: number): void;
    }
}
declare namespace Indotalent.Sales {
    class SalesOrderDetailDialog extends Serenity.Extensions.GridEditorDialog<SalesOrderDetailRow> {
        protected getFormKey(): string;
        protected getLocalTextPrefix(): string;
        protected form: SalesOrderDetailForm;
        constructor();
        private recalculate;
        protected updateInterface(): void;
    }
}
declare namespace Indotalent.Sales {
    class SalesOrderDetailEditor extends Serenity.Extensions.GridEditorBase<SalesOrderDetailRow> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof SalesOrderDetailDialog;
        protected getLocalTextPrefix(): string;
        constructor(container: JQuery);
        protected validateEntity(row: SalesOrderDetailRow, id: number): boolean;
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
        private loadedState;
        constructor();
        getSaveState(): string;
        loadResponse(data: any): void;
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
        protected getColumns(): Slick.Column[];
        protected getButtons(): Serenity.ToolButton[];
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
        protected updateInterface(): void;
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
        protected updateInterface(): void;
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
        private loadedState;
        constructor();
        getSaveState(): string;
        loadResponse(data: any): void;
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
        protected getColumns(): Slick.Column[];
        protected getButtons(): Serenity.ToolButton[];
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
        private loadedState;
        constructor();
        getSaveState(): string;
        loadResponse(data: any): void;
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
        protected getColumns(): Slick.Column[];
        protected getButtons(): Serenity.ToolButton[];
    }
}
