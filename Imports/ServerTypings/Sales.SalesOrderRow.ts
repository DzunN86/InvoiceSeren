namespace Indotalent.Sales {
    export interface SalesOrderRow {
        Id?: number;
        Number?: string;
        SalesGroup?: string;
        Description?: string;
        OrderDate?: string;
        CustomerId?: number;
        SubTotal?: number;
        Discount?: number;
        BeforeTax?: number;
        TaxAmount?: number;
        Total?: number;
        OtherCharge?: number;
        CustomerName?: string;
        CustomerStreet?: string;
        CustomerCity?: string;
        CustomerState?: string;
        CustomerZipCode?: string;
        CustomerPhone?: string;
        CustomerEmail?: string;
        SalesChannelId?: number;
        SalesChannelName?: string;
        CurrencyName?: string;
        TenantId?: number;
        TenantName?: string;
        ItemList?: SalesOrderDetailRow[];
        InvoiceList?: InvoiceRow[];
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
    }

    export namespace SalesOrderRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Number';
        export const localTextPrefix = 'Sales.SalesOrder';
        export const lookupKey = 'Sales.SalesOrder';

        export function getLookup(): Q.Lookup<SalesOrderRow> {
            return Q.getLookup<SalesOrderRow>('Sales.SalesOrder');
        }
        export const deletePermission = 'Sales:SalesOrder';
        export const insertPermission = 'Sales:SalesOrder';
        export const readPermission = 'Sales:SalesOrder';
        export const updatePermission = 'Sales:SalesOrder';

        export declare const enum Fields {
            Id = "Id",
            Number = "Number",
            SalesGroup = "SalesGroup",
            Description = "Description",
            OrderDate = "OrderDate",
            CustomerId = "CustomerId",
            SubTotal = "SubTotal",
            Discount = "Discount",
            BeforeTax = "BeforeTax",
            TaxAmount = "TaxAmount",
            Total = "Total",
            OtherCharge = "OtherCharge",
            CustomerName = "CustomerName",
            CustomerStreet = "CustomerStreet",
            CustomerCity = "CustomerCity",
            CustomerState = "CustomerState",
            CustomerZipCode = "CustomerZipCode",
            CustomerPhone = "CustomerPhone",
            CustomerEmail = "CustomerEmail",
            SalesChannelId = "SalesChannelId",
            SalesChannelName = "SalesChannelName",
            CurrencyName = "CurrencyName",
            TenantId = "TenantId",
            TenantName = "TenantName",
            ItemList = "ItemList",
            InvoiceList = "InvoiceList",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate"
        }
    }
}
