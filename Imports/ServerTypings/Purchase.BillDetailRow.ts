namespace Indotalent.Purchase {
    export interface BillDetailRow {
        Id?: number;
        BillId?: number;
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

    export namespace BillDetailRow {
        export const idProperty = 'Id';
        export const nameProperty = 'ProductName';
        export const localTextPrefix = 'Purchase.BillDetail';
        export const lookupKey = 'Purchase.BillDetail';

        export function getLookup(): Q.Lookup<BillDetailRow> {
            return Q.getLookup<BillDetailRow>('Purchase.BillDetail');
        }
        export const deletePermission = 'Purchase:Bill';
        export const insertPermission = 'Purchase:Bill';
        export const readPermission = 'Purchase:Bill';
        export const updatePermission = 'Purchase:Bill';

        export declare const enum Fields {
            Id = "Id",
            BillId = "BillId",
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
