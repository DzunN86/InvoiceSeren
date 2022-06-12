namespace Indotalent.Sales {
    export interface InvoicePaymentForm {
        Number: Serenity.StringEditor;
        Description: Serenity.TextAreaEditor;
        InvoiceId: Serenity.LookupEditor;
        InvoiceAmount: Serenity.DecimalEditor;
        CurrencyName: Serenity.StringEditor;
        PaymentDate: Serenity.DateEditor;
        CashBankId: Serenity.LookupEditor;
        PaymentAmount: Serenity.DecimalEditor;
        CustomerName: Serenity.StringEditor;
        CustomerStreet: Serenity.StringEditor;
        CustomerCity: Serenity.StringEditor;
        CustomerState: Serenity.StringEditor;
        CustomerZipCode: Serenity.StringEditor;
        CustomerPhone: Serenity.StringEditor;
        CustomerEmail: Serenity.StringEditor;
    }

    export class InvoicePaymentForm extends Serenity.PrefixedContext {
        static formKey = 'Sales.InvoicePayment';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!InvoicePaymentForm.init)  {
                InvoicePaymentForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.TextAreaEditor;
                var w2 = s.LookupEditor;
                var w3 = s.DecimalEditor;
                var w4 = s.DateEditor;

                Q.initFormType(InvoicePaymentForm, [
                    'Number', w0,
                    'Description', w1,
                    'InvoiceId', w2,
                    'InvoiceAmount', w3,
                    'CurrencyName', w0,
                    'PaymentDate', w4,
                    'CashBankId', w2,
                    'PaymentAmount', w3,
                    'CustomerName', w0,
                    'CustomerStreet', w0,
                    'CustomerCity', w0,
                    'CustomerState', w0,
                    'CustomerZipCode', w0,
                    'CustomerPhone', w0,
                    'CustomerEmail', w0
                ]);
            }
        }
    }
}
