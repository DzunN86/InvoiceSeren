namespace Indotalent.Purchase {
    export interface PurchaseOrderDetailRow {
        Id?: number;
        PurchaseOrderId?: number;
        ProductId?: number;
        Price?: number;
        Qty?: number;
        SubTotal?: number;
        Discount?: number;
        BeforeTax?: number;
        TaxPercentage?: number;
        TaxAmount?: number;
        Total?: number;
        ProductName?: string;
        TenantId?: number;
        TenantName?: string;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
    }

    export namespace PurchaseOrderDetailRow {
        export const idProperty = 'Id';
        export const nameProperty = 'ProductName';
        export const localTextPrefix = 'PurchaseOrder.PurchaseOrderDetail';
        export const lookupKey = 'PurchaseOrder.PurchaseOrderDetail';

        export function getLookup(): Q.Lookup<PurchaseOrderDetailRow> {
            return Q.getLookup<PurchaseOrderDetailRow>('PurchaseOrder.PurchaseOrderDetail');
        }
        export const deletePermission = 'Purchase:PurchaseOrder';
        export const insertPermission = 'Purchase:PurchaseOrder';
        export const readPermission = 'Purchase:PurchaseOrder';
        export const updatePermission = 'Purchase:PurchaseOrder';

        export declare const enum Fields {
            Id = "Id",
            PurchaseOrderId = "PurchaseOrderId",
            ProductId = "ProductId",
            Price = "Price",
            Qty = "Qty",
            SubTotal = "SubTotal",
            Discount = "Discount",
            BeforeTax = "BeforeTax",
            TaxPercentage = "TaxPercentage",
            TaxAmount = "TaxAmount",
            Total = "Total",
            ProductName = "ProductName",
            TenantId = "TenantId",
            TenantName = "TenantName",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate"
        }
    }
}
