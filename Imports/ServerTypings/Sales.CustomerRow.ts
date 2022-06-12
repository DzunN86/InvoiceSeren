namespace Indotalent.Sales {
    export interface CustomerRow {
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

    export namespace CustomerRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Name';
        export const localTextPrefix = 'Sales.Customer';
        export const lookupKey = 'Sales.Customer';

        export function getLookup(): Q.Lookup<CustomerRow> {
            return Q.getLookup<CustomerRow>('Sales.Customer');
        }
        export const deletePermission = 'Sales:Customer';
        export const insertPermission = 'Sales:Customer';
        export const readPermission = 'Sales:Customer';
        export const updatePermission = 'Sales:Customer';

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
