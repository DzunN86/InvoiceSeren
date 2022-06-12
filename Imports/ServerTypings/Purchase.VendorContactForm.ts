namespace Indotalent.Purchase {
    export interface VendorContactForm {
        Name: Serenity.StringEditor;
        Description: Serenity.TextAreaEditor;
        Street: Serenity.StringEditor;
        City: Serenity.StringEditor;
        State: Serenity.StringEditor;
        ZipCode: Serenity.StringEditor;
        Phone: Serenity.StringEditor;
        Email: Serenity.StringEditor;
    }

    export class VendorContactForm extends Serenity.PrefixedContext {
        static formKey = 'Purchase.VendorContact';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!VendorContactForm.init)  {
                VendorContactForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.TextAreaEditor;

                Q.initFormType(VendorContactForm, [
                    'Name', w0,
                    'Description', w1,
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
