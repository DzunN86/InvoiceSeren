namespace Indotalent.Sales {
    export interface SalesChannelRow {
        Id?: number;
        Name?: string;
        Description?: string;
        InsertDate?: string;
        InsertUserId?: number;
        UpdateDate?: string;
        UpdateUserId?: number;
        TenantId?: number;
    }

    export namespace SalesChannelRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Name';
        export const localTextPrefix = 'Sales.SalesChannel';
        export const deletePermission = 'Sales:SalesChannel';
        export const insertPermission = 'Sales:SalesChannel';
        export const readPermission = 'Sales:SalesChannel';
        export const updatePermission = 'Sales:SalesChannel';

        export declare const enum Fields {
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
