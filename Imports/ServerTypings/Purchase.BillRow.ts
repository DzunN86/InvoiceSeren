namespace Indotalent.Purchase {
    export interface BillRow {
        Id?: number;
        Number?: string;
        Description?: string;
        ExternalReferenceNumber?: string;
        BillDate?: string;
        PurchaseOrderId?: number;
        PurchaseOrderNumber?: string;
        SubTotal?: number;
        Discount?: number;
        BeforeTax?: number;
        TaxAmount?: number;
        Total?: number;
        OtherCharge?: number;
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
        ItemList?: BillDetailRow[];
        BillPaymentList?: BillPaymentRow[];
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
    }

    export namespace BillRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Number';
        export const localTextPrefix = 'Purchase.Bill';
        export const lookupKey = 'Purchase.Bill';

        export function getLookup(): Q.Lookup<BillRow> {
            return Q.getLookup<BillRow>('Purchase.Bill');
        }
        export const deletePermission = 'Purchase:Bill';
        export const insertPermission = 'Purchase:Bill';
        export const readPermission = 'Purchase:Bill';
        export const updatePermission = 'Purchase:Bill';

        export declare const enum Fields {
            Id = "Id",
            Number = "Number",
            Description = "Description",
            ExternalReferenceNumber = "ExternalReferenceNumber",
            BillDate = "BillDate",
            PurchaseOrderId = "PurchaseOrderId",
            PurchaseOrderNumber = "PurchaseOrderNumber",
            SubTotal = "SubTotal",
            Discount = "Discount",
            BeforeTax = "BeforeTax",
            TaxAmount = "TaxAmount",
            Total = "Total",
            OtherCharge = "OtherCharge",
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
            ItemList = "ItemList",
            BillPaymentList = "BillPaymentList",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate"
        }
    }
}
