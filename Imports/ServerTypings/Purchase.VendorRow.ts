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
        TenantId?: number;
        TenantName?: string;
        ContactList?: VendorContactRow[];
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
    }

    export namespace VendorRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Name';
        export const localTextPrefix = 'Purchase.Vendor';
        export const lookupKey = 'Purchase.Vendor';

        export function getLookup(): Q.Lookup<VendorRow> {
            return Q.getLookup<VendorRow>('Purchase.Vendor');
        }
        export const deletePermission = 'Purchase:Vendor';
        export const insertPermission = 'Purchase:Vendor';
        export const readPermission = 'Purchase:Vendor';
        export const updatePermission = 'Purchase:Vendor';

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
