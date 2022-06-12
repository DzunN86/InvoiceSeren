namespace Indotalent.Sales {
    export interface InvoiceDetailRow {
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
        InsertDate?: string;
        InsertUserId?: number;
        UpdateDate?: string;
        UpdateUserId?: number;
        TenantId?: number;
    }

    export namespace InvoiceDetailRow {
        export const idProperty = 'Id';
        export const localTextPrefix = 'Sales.InvoiceDetail';
        export const deletePermission = 'Sales:Invoice';
        export const insertPermission = 'Sales:Invoice';
        export const readPermission = 'Sales:Invoice';
        export const updatePermission = 'Sales:Invoice';

        export declare const enum Fields {
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
            InsertDate = "InsertDate",
            InsertUserId = "InsertUserId",
            UpdateDate = "UpdateDate",
            UpdateUserId = "UpdateUserId",
            TenantId = "TenantId"
        }
    }
}
