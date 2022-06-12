namespace Indotalent.Purchase {
    export interface VendorForm {
        Name: Serenity.StringEditor;
        Description: Serenity.TextAreaEditor;
        Street: Serenity.StringEditor;
        City: Serenity.StringEditor;
        State: Serenity.StringEditor;
        ZipCode: Serenity.StringEditor;
        Phone: Serenity.StringEditor;
        Email: Serenity.StringEditor;
        ContactList: VendorContactEditor;
    }

    export class VendorForm extends Serenity.PrefixedContext {
        static formKey = 'Purchase.Vendor';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!VendorForm.init)  {
                VendorForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.TextAreaEditor;
                var w2 = VendorContactEditor;

                Q.initFormType(VendorForm, [
                    'Name', w0,
                    'Description', w1,
                    'Street', w0,
                    'City', w0,
                    'State', w0,
                    'ZipCode', w0,
                    'Phone', w0,
                    'Email', w0,
                    'ContactList', w2
                ]);
            }
        }
    }
}
