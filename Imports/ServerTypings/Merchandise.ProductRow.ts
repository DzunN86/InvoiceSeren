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
        UomName?: string;
        BrandName?: string;
        CategoryName?: string;
        SizeName?: string;
        ColourName?: string;
        FlavourName?: string;
        PurchaseTaxName?: string;
        SalesTaxName?: string;
        CurrencyName?: string;
        TenantId?: number;
        TenantName?: string;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
    }

    export namespace ProductRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Name';
        export const localTextPrefix = 'Merchandise.Product';
        export const lookupKey = 'Merchandise.Product';

        export function getLookup(): Q.Lookup<ProductRow> {
            return Q.getLookup<ProductRow>('Merchandise.Product');
        }
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
            UomName = "UomName",
            BrandName = "BrandName",
            CategoryName = "CategoryName",
            SizeName = "SizeName",
            ColourName = "ColourName",
            FlavourName = "FlavourName",
            PurchaseTaxName = "PurchaseTaxName",
            SalesTaxName = "SalesTaxName",
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
