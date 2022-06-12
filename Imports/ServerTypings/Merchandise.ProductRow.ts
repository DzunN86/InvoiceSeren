namespace Indotalent.Merchandise {
    export interface ProductRow {
        Id?: number;
        Name?: string;
        Description?: string;
        Picture?: string;
        InternalCode?: string;
        Barcode?: string;
        UomId?: number;
        BrandId?: number;
        CategoryId?: number;
        SizeId?: number;
        ColourId?: number;
        FlavourId?: number;
        PurchasePrice?: number;
        SalesPrice?: number;
        PurchaseTaxId?: number;
        SalesTaxId?: number;
        InsertDate?: string;
        InsertUserId?: number;
        UpdateDate?: string;
        UpdateUserId?: number;
        TenantId?: number;
    }

    export namespace ProductRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Name';
        export const localTextPrefix = 'Merchandise.Product';
        export const deletePermission = 'Merchandise:Product';
        export const insertPermission = 'Merchandise:Product';
        export const readPermission = 'Merchandise:Product';
        export const updatePermission = 'Merchandise:Product';

        export declare const enum Fields {
            Id = "Id",
            Name = "Name",
            Description = "Description",
            Picture = "Picture",
            InternalCode = "InternalCode",
            Barcode = "Barcode",
            UomId = "UomId",
            BrandId = "BrandId",
            CategoryId = "CategoryId",
            SizeId = "SizeId",
            ColourId = "ColourId",
            FlavourId = "FlavourId",
            PurchasePrice = "PurchasePrice",
            SalesPrice = "SalesPrice",
            PurchaseTaxId = "PurchaseTaxId",
            SalesTaxId = "SalesTaxId",
            InsertDate = "InsertDate",
            InsertUserId = "InsertUserId",
            UpdateDate = "UpdateDate",
            UpdateUserId = "UpdateUserId",
            TenantId = "TenantId"
        }
    }
}
