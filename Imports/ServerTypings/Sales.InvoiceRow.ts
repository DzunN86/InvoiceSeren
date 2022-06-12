namespace Indotalent.Sales {
    export interface InvoiceRow {
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

    export namespace InvoiceRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Number';
        export const localTextPrefix = 'Sales.Invoice';
        export const deletePermission = 'Sales:Invoice';
        export const insertPermission = 'Sales:Invoice';
        export const readPermission = 'Sales:Invoice';
        export const updatePermission = 'Sales:Invoice';

        export declare const enum Fields {
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
