namespace Indotalent.Purchase {
    export interface BillPaymentRow {
        Id?: number;
        BillId?: number;
        Number?: string;
        Description?: string;
        ProcurementGroup?: string;
        PaymentDate?: string;
        CashBankId?: number;
        BillAmount?: number;
        PaymentAmount?: number;
        InsertDate?: string;
        InsertUserId?: number;
        UpdateDate?: string;
        UpdateUserId?: number;
        TenantId?: number;
    }

    export namespace BillPaymentRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Number';
        export const localTextPrefix = 'Purchase.BillPayment';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            Id = "Id",
            BillId = "BillId",
            Number = "Number",
            Description = "Description",
            ProcurementGroup = "ProcurementGroup",
            PaymentDate = "PaymentDate",
            CashBankId = "CashBankId",
            BillAmount = "BillAmount",
            PaymentAmount = "PaymentAmount",
            InsertDate = "InsertDate",
            InsertUserId = "InsertUserId",
            UpdateDate = "UpdateDate",
            UpdateUserId = "UpdateUserId",
            TenantId = "TenantId"
        }
    }
}
