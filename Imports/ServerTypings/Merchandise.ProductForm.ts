namespace Indotalent.Merchandise {
    export interface ProductForm {
        Name: Serenity.StringEditor;
        InternalCode: Serenity.StringEditor;
        Barcode: Serenity.StringEditor;
        Description: Serenity.TextAreaEditor;
        UomId: Serenity.LookupEditor;
        Picture: Serenity.ImageUploadEditor;
        BrandId: Serenity.LookupEditor;
        CategoryId: Serenity.LookupEditor;
        SizeId: Serenity.LookupEditor;
        ColourId: Serenity.LookupEditor;
        FlavourId: Serenity.LookupEditor;
        CurrencyName: Serenity.StringEditor;
        PurchasePrice: Serenity.DecimalEditor;
        PurchaseTaxId: Serenity.LookupEditor;
        SalesPrice: Serenity.DecimalEditor;
        SalesTaxId: Serenity.LookupEditor;
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
                var w1 = s.TextAreaEditor;
                var w2 = s.LookupEditor;
                var w3 = s.ImageUploadEditor;
                var w4 = s.DecimalEditor;

                Q.initFormType(ProductForm, [
                    'Name', w0,
                    'InternalCode', w0,
                    'Barcode', w0,
                    'Description', w1,
                    'UomId', w2,
                    'Picture', w3,
                    'BrandId', w2,
                    'CategoryId', w2,
                    'SizeId', w2,
                    'ColourId', w2,
                    'FlavourId', w2,
                    'CurrencyName', w0,
                    'PurchasePrice', w4,
                    'PurchaseTaxId', w2,
                    'SalesPrice', w4,
                    'SalesTaxId', w2
                ]);
            }
        }
    }
}
