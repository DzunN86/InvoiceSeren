namespace Indotalent.Sales {
    export interface SalesOrderRow {
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

    export namespace SalesOrderRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Number';
        export const localTextPrefix = 'Sales.SalesOrder';
        export const deletePermission = 'Sales:SalesOrder';
        export const insertPermission = 'Sales:SalesOrder';
        export const readPermission = 'Sales:SalesOrder';
        export const updatePermission = 'Sales:SalesOrder';

        export declare const enum Fields {
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
