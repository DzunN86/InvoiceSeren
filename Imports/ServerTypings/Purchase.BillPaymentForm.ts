namespace Indotalent.Purchase {
    export interface BillPaymentForm {
        Number: Serenity.StringEditor;
        Description: Serenity.TextAreaEditor;
        BillId: Serenity.LookupEditor;
        BillAmount: Serenity.DecimalEditor;
        CurrencyName: Serenity.StringEditor;
        PaymentDate: Serenity.DateEditor;
        CashBankId: Serenity.LookupEditor;
        PaymentAmount: Serenity.DecimalEditor;
        VendorName: Serenity.StringEditor;
        VendorStreet: Serenity.StringEditor;
        VendorCity: Serenity.StringEditor;
        VendorState: Serenity.StringEditor;
        VendorZipCode: Serenity.StringEditor;
        VendorPhone: Serenity.StringEditor;
        VendorEmail: Serenity.StringEditor;
    }

    export class BillPaymentForm extends Serenity.PrefixedContext {
        static formKey = 'Purchase.BillPayment';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!BillPaymentForm.init)  {
                BillPaymentForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.TextAreaEditor;
                var w2 = s.LookupEditor;
                var w3 = s.DecimalEditor;
                var w4 = s.DateEditor;

                Q.initFormType(BillPaymentForm, [
                    'Number', w0,
                    'Description', w1,
                    'BillId', w2,
                    'BillAmount', w3,
                    'CurrencyName', w0,
                    'PaymentDate', w4,
                    'CashBankId', w2,
                    'PaymentAmount', w3,
                    'VendorName', w0,
                    'VendorStreet', w0,
                    'VendorCity', w0,
                    'VendorState', w0,
                    'VendorZipCode', w0,
                    'VendorPhone', w0,
                    'VendorEmail', w0
                ]);
            }
        }
    }
}
