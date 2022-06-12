namespace Indotalent.Purchase {
    export interface PurchaseOrderRow {
        Id?: number;
        Number?: string;
        Description?: string;
        ProcurementGroup?: string;
        OrderDate?: string;
        VendorId?: number;
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

    export namespace PurchaseOrderRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Number';
        export const localTextPrefix = 'Purchase.PurchaseOrder';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            Id = "Id",
            Number = "Number",
            Description = "Description",
            ProcurementGroup = "ProcurementGroup",
            OrderDate = "OrderDate",
            VendorId = "VendorId",
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
