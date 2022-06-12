namespace Indotalent.Sales {
    export interface InvoicePaymentRow {
        Id?: number;
        InvoiceId?: number;
        Number?: string;
        Description?: string;
        PaymentDate?: string;
        CashBankId?: number;
        InvoiceAmount?: number;
        PaymentAmount?: number;
        InvoiceNumber?: string;
        CashBankName?: string;
        SalesOrderId?: number;
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
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
    }

    export namespace InvoicePaymentRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Number';
        export const localTextPrefix = 'Sales.InvoicePayment';
        export const lookupKey = 'Sales.InvoicePayment';

        export function getLookup(): Q.Lookup<InvoicePaymentRow> {
            return Q.getLookup<InvoicePaymentRow>('Sales.InvoicePayment');
        }
        export const deletePermission = 'Sales:InvoicePayment';
        export const insertPermission = 'Sales:InvoicePayment';
        export const readPermission = 'Sales:InvoicePayment';
        export const updatePermission = 'Sales:InvoicePayment';

        export declare const enum Fields {
            Id = "Id",
            InvoiceId = "InvoiceId",
            Number = "Number",
            Description = "Description",
            PaymentDate = "PaymentDate",
            CashBankId = "CashBankId",
            InvoiceAmount = "InvoiceAmount",
            PaymentAmount = "PaymentAmount",
            InvoiceNumber = "InvoiceNumber",
            CashBankName = "CashBankName",
            SalesOrderId = "SalesOrderId",
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
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate"
        }
    }
}
