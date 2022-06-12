namespace Indotalent.Settings {
    export interface SalesTaxForm {
        Name: Serenity.StringEditor;
        Description: Serenity.TextAreaEditor;
        TaxRatePercentage: Serenity.DecimalEditor;
    }

    export class SalesTaxForm extends Serenity.PrefixedContext {
        static formKey = 'Settings.SalesTax';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!SalesTaxForm.init)  {
                SalesTaxForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.TextAreaEditor;
                var w2 = s.DecimalEditor;

                Q.initFormType(SalesTaxForm, [
                    'Name', w0,
                    'Description', w1,
                    'TaxRatePercentage', w2
                ]);
            }
        }
    }
}
