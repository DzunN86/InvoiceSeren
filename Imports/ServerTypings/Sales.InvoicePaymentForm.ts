namespace Indotalent.Sales {
    export interface InvoicePaymentForm {
        InvoiceId: Serenity.IntegerEditor;
        Number: Serenity.StringEditor;
        Description: Serenity.StringEditor;
        SalesGroup: Serenity.StringEditor;
        PaymentDate: Serenity.DateEditor;
        CashBankId: Serenity.IntegerEditor;
        InvoiceAmount: Serenity.DecimalEditor;
        PaymentAmount: Serenity.DecimalEditor;
        InsertDate: Serenity.DateEditor;
        InsertUserId: Serenity.IntegerEditor;
        UpdateDate: Serenity.DateEditor;
        UpdateUserId: Serenity.IntegerEditor;
        TenantId: Serenity.IntegerEditor;
    }

    export class InvoicePaymentForm extends Serenity.PrefixedContext {
        static formKey = 'Sales.InvoicePayment';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!InvoicePaymentForm.init)  {
                InvoicePaymentForm.init = true;

                var s = Serenity;
                var w0 = s.IntegerEditor;
                var w1 = s.StringEditor;
                var w2 = s.DateEditor;
                var w3 = s.DecimalEditor;

                Q.initFormType(InvoicePaymentForm, [
                    'InvoiceId', w0,
                    'Number', w1,
                    'Description', w1,
                    'SalesGroup', w1,
                    'PaymentDate', w2,
                    'CashBankId', w0,
                    'InvoiceAmount', w3,
                    'PaymentAmount', w3,
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
