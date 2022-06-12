namespace Indotalent.Purchase {
    export interface PurchaseOrderRow {
        Id?: number;
        Number?: string;
        ProcurementGroup?: string;
        Description?: string;
        OrderDate?: string;
        VendorId?: number;
        SubTotal?: number;
        Discount?: number;
        BeforeTax?: number;
        TaxAmount?: number;
        Total?: number;
        OtherCharge?: number;
        VendorName?: string;
        VendorStreet?: string;
        VendorCity?: string;
        VendorState?: string;
        VendorZipCode?: string;
        VendorPhone?: string;
        VendorEmail?: string;
        CurrencyName?: string;
        TenantId?: number;
        TenantName?: string;
        ItemList?: PurchaseOrderDetailRow[];
        BillList?: BillRow[];
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
    }

    export namespace PurchaseOrderRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Number';
        export const localTextPrefix = 'Purchase.PurchaseOrder';
        export const lookupKey = 'Purchase.PurchaseOrder';

        export function getLookup(): Q.Lookup<PurchaseOrderRow> {
            return Q.getLookup<PurchaseOrderRow>('Purchase.PurchaseOrder');
        }
        export const deletePermission = 'Purchase:PurchaseOrder';
        export const insertPermission = 'Purchase:PurchaseOrder';
        export const readPermission = 'Purchase:PurchaseOrder';
        export const updatePermission = 'Purchase:PurchaseOrder';

        export declare const enum Fields {
            Id = "Id",
            Number = "Number",
            ProcurementGroup = "ProcurementGroup",
            Description = "Description",
            OrderDate = "OrderDate",
            VendorId = "VendorId",
            SubTotal = "SubTotal",
            Discount = "Discount",
            BeforeTax = "BeforeTax",
            TaxAmount = "TaxAmount",
            Total = "Total",
            OtherCharge = "OtherCharge",
            VendorName = "VendorName",
            VendorStreet = "VendorStreet",
            VendorCity = "VendorCity",
            VendorState = "VendorState",
            VendorZipCode = "VendorZipCode",
            VendorPhone = "VendorPhone",
            VendorEmail = "VendorEmail",
            CurrencyName = "CurrencyName",
            TenantId = "TenantId",
            TenantName = "TenantName",
            ItemList = "ItemList",
            BillList = "BillList",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate"
        }
    }
}
