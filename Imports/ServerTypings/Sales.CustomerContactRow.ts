namespace Indotalent.Sales {
    export interface CustomerContactRow {
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

    export namespace CustomerContactRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Name';
        export const localTextPrefix = 'Sales.CustomerContact';
        export const lookupKey = 'Sales.CustomerContact';

        export function getLookup(): Q.Lookup<CustomerContactRow> {
            return Q.getLookup<CustomerContactRow>('Sales.CustomerContact');
        }
        export const deletePermission = 'Sales:Customer';
        export const insertPermission = 'Sales:Customer';
        export const readPermission = 'Sales:Customer';
        export const updatePermission = 'Sales:Customer';

        export declare const enum Fields {
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
