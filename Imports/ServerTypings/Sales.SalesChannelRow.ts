namespace Indotalent.Sales {
    export interface SalesChannelRow {
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

    export namespace SalesChannelRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Name';
        export const localTextPrefix = 'Sales.SalesChannel';
        export const lookupKey = 'Sales.SalesChannel';

        export function getLookup(): Q.Lookup<SalesChannelRow> {
            return Q.getLookup<SalesChannelRow>('Sales.SalesChannel');
        }
        export const deletePermission = 'Sales:SalesChannel';
        export const insertPermission = 'Sales:SalesChannel';
        export const readPermission = 'Sales:SalesChannel';
        export const updatePermission = 'Sales:SalesChannel';

        export declare const enum Fields {
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
