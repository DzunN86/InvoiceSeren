namespace Indotalent.Purchase {
    export interface BillPaymentRow {
        Id?: number;
        BillId?: number;
        Number?: string;
        Description?: string;
        PaymentDate?: string;
        CashBankId?: number;
        BillAmount?: number;
        PaymentAmount?: number;
        BillNumber?: string;
        CashBankName?: string;
        PurchaseOrderId?: number;
        VendorId?: number;
        VendorName?: string;
        VendorStreet?: string;
        VendorCity?: string;
        VendorState?: string;
        VendorZipCode?: string;
        VendorPhone?: string;
        VendorEmail?: string;
        ProcurementGroup?: string;
        CurrencyName?: string;
        TenantId?: number;
        TenantName?: string;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
    }

    export namespace BillPaymentRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Number';
        export const localTextPrefix = 'Purchase.BillPayment';
        export const lookupKey = 'Purchase.BillPayment';

        export function getLookup(): Q.Lookup<BillPaymentRow> {
            return Q.getLookup<BillPaymentRow>('Purchase.BillPayment');
        }
        export const deletePermission = 'Purchase:BillPayment';
        export const insertPermission = 'Purchase:BillPayment';
        export const readPermission = 'Purchase:BillPayment';
        export const updatePermission = 'Purchase:BillPayment';

        export declare const enum Fields {
            Id = "Id",
            BillId = "BillId",
            Number = "Number",
            Description = "Description",
            PaymentDate = "PaymentDate",
            CashBankId = "CashBankId",
            BillAmount = "BillAmount",
            PaymentAmount = "PaymentAmount",
            BillNumber = "BillNumber",
            CashBankName = "CashBankName",
            PurchaseOrderId = "PurchaseOrderId",
            VendorId = "VendorId",
            VendorName = "VendorName",
            VendorStreet = "VendorStreet",
            VendorCity = "VendorCity",
            VendorState = "VendorState",
            VendorZipCode = "VendorZipCode",
            VendorPhone = "VendorPhone",
            VendorEmail = "VendorEmail",
            ProcurementGroup = "ProcurementGroup",
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
