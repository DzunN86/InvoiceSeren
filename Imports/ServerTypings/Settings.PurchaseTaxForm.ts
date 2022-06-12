namespace Indotalent.Settings {
    export interface PurchaseTaxForm {
        Name: Serenity.StringEditor;
        Description: Serenity.StringEditor;
        TaxRatePercentage: Serenity.DecimalEditor;
        InsertDate: Serenity.DateEditor;
        InsertUserId: Serenity.IntegerEditor;
        UpdateDate: Serenity.DateEditor;
        UpdateUserId: Serenity.IntegerEditor;
        TenantId: Serenity.IntegerEditor;
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
                var w1 = s.DecimalEditor;
                var w2 = s.DateEditor;
                var w3 = s.IntegerEditor;

                Q.initFormType(PurchaseTaxForm, [
                    'Name', w0,
                    'Description', w0,
                    'TaxRatePercentage', w1,
                    'InsertDate', w2,
                    'InsertUserId', w3,
                    'UpdateDate', w2,
                    'UpdateUserId', w3,
                    'TenantId', w3
                ]);
            }
        }
    }
}
