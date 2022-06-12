namespace Indotalent.Settings {
    export interface PurchaseTaxForm {
        Name: Serenity.StringEditor;
        Description: Serenity.TextAreaEditor;
        TaxRatePercentage: Serenity.DecimalEditor;
    }

    export class PurchaseTaxForm extends Serenity.PrefixedContext {
        static formKey = 'Settings.PurchaseTax';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!PurchaseTaxForm.init)  {
                PurchaseTaxForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.TextAreaEditor;
                var w2 = s.DecimalEditor;

                Q.initFormType(PurchaseTaxForm, [
                    'Name', w0,
                    'Description', w1,
                    'TaxRatePercentage', w2
                ]);
            }
        }
    }
}
