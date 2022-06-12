namespace Indotalent.Merchandise {
    export interface ProductForm {
        Name: Serenity.StringEditor;
        Description: Serenity.StringEditor;
        Picture: Serenity.StringEditor;
        InternalCode: Serenity.StringEditor;
        Barcode: Serenity.StringEditor;
        UomId: Serenity.IntegerEditor;
        BrandId: Serenity.IntegerEditor;
        CategoryId: Serenity.IntegerEditor;
        SizeId: Serenity.IntegerEditor;
        ColourId: Serenity.IntegerEditor;
        FlavourId: Serenity.IntegerEditor;
        PurchasePrice: Serenity.DecimalEditor;
        SalesPrice: Serenity.DecimalEditor;
        PurchaseTaxId: Serenity.IntegerEditor;
        SalesTaxId: Serenity.IntegerEditor;
        InsertDate: Serenity.DateEditor;
        InsertUserId: Serenity.IntegerEditor;
        UpdateDate: Serenity.DateEditor;
        UpdateUserId: Serenity.IntegerEditor;
        TenantId: Serenity.IntegerEditor;
    }

    export class ProductForm extends Serenity.PrefixedContext {
        static formKey = 'Merchandise.Product';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!ProductForm.init)  {
                ProductForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.IntegerEditor;
                var w2 = s.DecimalEditor;
                var w3 = s.DateEditor;

                Q.initFormType(ProductForm, [
                    'Name', w0,
                    'Description', w0,
                    'Picture', w0,
                    'InternalCode', w0,
                    'Barcode', w0,
                    'UomId', w1,
                    'BrandId', w1,
                    'CategoryId', w1,
                    'SizeId', w1,
                    'ColourId', w1,
                    'FlavourId', w1,
                    'PurchasePrice', w2,
                    'SalesPrice', w2,
                    'PurchaseTaxId', w1,
                    'SalesTaxId', w1,
                    'InsertDate', w3,
                    'InsertUserId', w1,
                    'UpdateDate', w3,
                    'UpdateUserId', w1,
                    'TenantId', w1
                ]);
            }
        }
    }
}
