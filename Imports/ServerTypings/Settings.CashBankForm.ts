namespace Indotalent.Settings {
    export interface CashBankForm {
        Name: Serenity.StringEditor;
        Description: Serenity.TextAreaEditor;
        AccountNumber: Serenity.StringEditor;
        Street: Serenity.StringEditor;
        City: Serenity.StringEditor;
        State: Serenity.StringEditor;
        ZipCode: Serenity.StringEditor;
        Phone: Serenity.StringEditor;
        Email: Serenity.StringEditor;
    }

    export class CashBankForm extends Serenity.PrefixedContext {
        static formKey = 'Settings.CashBank';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!CashBankForm.init)  {
                CashBankForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.TextAreaEditor;

                Q.initFormType(CashBankForm, [
                    'Name', w0,
                    'Description', w1,
                    'AccountNumber', w0,
                    'Street', w0,
                    'City', w0,
                    'State', w0,
                    'ZipCode', w0,
                    'Phone', w0,
                    'Email', w0
                ]);
            }
        }
    }
}
