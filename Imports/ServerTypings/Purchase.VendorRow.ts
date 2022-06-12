namespace Indotalent.Purchase {
    export interface VendorRow {
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

    export namespace VendorRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Name';
        export const localTextPrefix = 'Purchase.Vendor';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
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
