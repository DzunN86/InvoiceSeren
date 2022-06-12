namespace Indotalent.Purchase {
    export interface BillPaymentForm {
        BillId: Serenity.IntegerEditor;
        Number: Serenity.StringEditor;
        Description: Serenity.StringEditor;
        ProcurementGroup: Serenity.StringEditor;
        PaymentDate: Serenity.DateEditor;
        CashBankId: Serenity.IntegerEditor;
        BillAmount: Serenity.DecimalEditor;
        PaymentAmount: Serenity.DecimalEditor;
        InsertDate: Serenity.DateEditor;
        InsertUserId: Serenity.IntegerEditor;
        UpdateDate: Serenity.DateEditor;
        UpdateUserId: Serenity.IntegerEditor;
        TenantId: Serenity.IntegerEditor;
    }

    export class BillPaymentForm extends Serenity.PrefixedContext {
        static formKey = 'Purchase.BillPayment';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!BillPaymentForm.init)  {
                BillPaymentForm.init = true;

                var s = Serenity;
                var w0 = s.IntegerEditor;
                var w1 = s.StringEditor;
                var w2 = s.DateEditor;
                var w3 = s.DecimalEditor;

                Q.initFormType(BillPaymentForm, [
                    'BillId', w0,
                    'Number', w1,
                    'Description', w1,
                    'ProcurementGroup', w1,
                    'PaymentDate', w2,
                    'CashBankId', w0,
                    'BillAmount', w3,
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
