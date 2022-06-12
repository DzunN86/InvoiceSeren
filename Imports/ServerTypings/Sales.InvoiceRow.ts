namespace Indotalent.Sales {
    export interface InvoiceRow {
        Id?: number;
        Number?: string;
        Description?: string;
        InvoiceDate?: string;
        SalesOrderId?: number;
        SalesOrderNumber?: string;
        SubTotal?: number;
        Discount?: number;
        BeforeTax?: number;
        TaxAmount?: number;
        Total?: number;
        OtherCharge?: number;
        CustomerId?: number;
        CustomerName?: string;
        CustomerStreet?: string;
        CustomerCity?: string;
        CustomerState?: string;
        CustomerZipCode?: string;
        CustomerPhone?: string;
        CustomerEmail?: string;
        SalesGroup?: string;
        CurrencyName?: string;
        TenantId?: number;
        TenantName?: string;
        ItemList?: InvoiceDetailRow[];
        InvoicePaymentList?: InvoicePaymentRow[];
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
    }

    export namespace InvoiceRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Number';
        export const localTextPrefix = 'Sales.Invoice';
        export const lookupKey = 'Sales.Invoice';

        export function getLookup(): Q.Lookup<InvoiceRow> {
            return Q.getLookup<InvoiceRow>('Sales.Invoice');
        }
        export const deletePermission = 'Sales:Invoice';
        export const insertPermission = 'Sales:Invoice';
        export const readPermission = 'Sales:Invoice';
        export const updatePermission = 'Sales:Invoice';

        export declare const enum Fields {
            Id = "Id",
            Number = "Number",
            Description = "Description",
            InvoiceDate = "InvoiceDate",
            SalesOrderId = "SalesOrderId",
            SalesOrderNumber = "SalesOrderNumber",
            SubTotal = "SubTotal",
            Discount = "Discount",
            BeforeTax = "BeforeTax",
            TaxAmount = "TaxAmount",
            Total = "Total",
            OtherCharge = "OtherCharge",
            CustomerId = "CustomerId",
            CustomerName = "CustomerName",
            CustomerStreet = "CustomerStreet",
            CustomerCity = "CustomerCity",
            CustomerState = "CustomerState",
            CustomerZipCode = "CustomerZipCode",
            CustomerPhone = "CustomerPhone",
            CustomerEmail = "CustomerEmail",
            SalesGroup = "SalesGroup",
            CurrencyName = "CurrencyName",
            TenantId = "TenantId",
            TenantName = "TenantName",
            ItemList = "ItemList",
            InvoicePaymentList = "InvoicePaymentList",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate"
        }
    }
}
