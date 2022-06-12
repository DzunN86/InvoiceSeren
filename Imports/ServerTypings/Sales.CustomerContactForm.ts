namespace Indotalent.Sales {
    export interface CustomerContactForm {
        CustomerId: Serenity.IntegerEditor;
        Name: Serenity.StringEditor;
        Description: Serenity.StringEditor;
        Street: Serenity.StringEditor;
        City: Serenity.StringEditor;
        State: Serenity.StringEditor;
        ZipCode: Serenity.StringEditor;
        Phone: Serenity.StringEditor;
        Email: Serenity.StringEditor;
        InsertDate: Serenity.DateEditor;
        InsertUserId: Serenity.IntegerEditor;
        UpdateDate: Serenity.DateEditor;
        UpdateUserId: Serenity.IntegerEditor;
        TenantId: Serenity.IntegerEditor;
    }

    export class CustomerContactForm extends Serenity.PrefixedContext {
        static formKey = 'Sales.CustomerContact';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!CustomerContactForm.init)  {
                CustomerContactForm.init = true;

                var s = Serenity;
                var w0 = s.IntegerEditor;
                var w1 = s.StringEditor;
                var w2 = s.DateEditor;

                Q.initFormType(CustomerContactForm, [
                    'CustomerId', w0,
                    'Name', w1,
                    'Description', w1,
                    'Street', w1,
                    'City', w1,
                    'State', w1,
                    'ZipCode', w1,
                    'Phone', w1,
                    'Email', w1,
                    'InsertDate', w2,
                    'InsertUserId', w0,
                    'UpdateDate', w2,
                    'UpdateUserId', w0,
                    'TenantId', w0
                ]);
            }
        }
    }
}
