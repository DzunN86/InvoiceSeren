namespace Indotalent.Settings {
    export interface SalesTaxRow {
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

    export namespace SalesTaxRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Name';
        export const localTextPrefix = 'Settings.SalesTax';
        export const deletePermission = 'Sales:SalesOrder';
        export const insertPermission = 'Sales:SalesOrder';
        export const readPermission = 'Sales:SalesOrder';
        export const updatePermission = 'Sales:SalesOrder';

        export declare const enum Fields {
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
