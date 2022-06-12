namespace Indotalent.Sales {
    export interface InvoicePaymentRow {
        Id?: number;
        InvoiceId?: number;
        Number?: string;
        Description?: string;
        SalesGroup?: string;
        PaymentDate?: string;
        CashBankId?: number;
        InvoiceAmount?: number;
        PaymentAmount?: number;
        InsertDate?: string;
        InsertUserId?: number;
        UpdateDate?: string;
        UpdateUserId?: number;
        TenantId?: number;
    }

    export namespace InvoicePaymentRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Number';
        export const localTextPrefix = 'Sales.InvoicePayment';
        export const deletePermission = 'Sales:Invoice';
        export const insertPermission = 'Sales:Invoice';
        export const readPermission = 'Sales:Invoice';
        export const updatePermission = 'Sales:Invoice';

        export declare const enum Fields {
            Id = "Id",
            InvoiceId = "InvoiceId",
            Number = "Number",
            Description = "Description",
            SalesGroup = "SalesGroup",
            PaymentDate = "PaymentDate",
            CashBankId = "CashBankId",
            InvoiceAmount = "InvoiceAmount",
            PaymentAmount = "PaymentAmount",
            InsertDate = "InsertDate",
            InsertUserId = "InsertUserId",
            UpdateDate = "UpdateDate",
            UpdateUserId = "UpdateUserId",
            TenantId = "TenantId"
        }
    }
}
