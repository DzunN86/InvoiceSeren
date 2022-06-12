namespace Indotalent.Purchase {
    export interface BillForm {
        Number: Serenity.StringEditor;
        Description: Serenity.StringEditor;
        ExternalReferenceNumber: Serenity.StringEditor;
        ProcurementGroup: Serenity.StringEditor;
        BillDate: Serenity.DateEditor;
        PurchaseOrderId: Serenity.IntegerEditor;
        SubTotal: Serenity.DecimalEditor;
        Discount: Serenity.DecimalEditor;
        BeforeTax: Serenity.DecimalEditor;
        TaxAmount: Serenity.DecimalEditor;
        Total: Serenity.DecimalEditor;
        OtherCharge: Serenity.DecimalEditor;
        InsertDate: Serenity.DateEditor;
        InsertUserId: Serenity.IntegerEditor;
        UpdateDate: Serenity.DateEditor;
        UpdateUserId: Serenity.IntegerEditor;
        TenantId: Serenity.IntegerEditor;
    }

    export class BillForm extends Serenity.PrefixedContext {
        static formKey = 'Purchase.Bill';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!BillForm.init)  {
                BillForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.DateEditor;
                var w2 = s.IntegerEditor;
                var w3 = s.DecimalEditor;

                Q.initFormType(BillForm, [
                    'Number', w0,
                    'Description', w0,
                    'ExternalReferenceNumber', w0,
                    'ProcurementGroup', w0,
                    'BillDate', w1,
                    'PurchaseOrderId', w2,
                    'SubTotal', w3,
                    'Discount', w3,
                    'BeforeTax', w3,
                    'TaxAmount', w3,
                    'Total', w3,
                    'OtherCharge', w3,
                    'InsertDate', w1,
                    'InsertUserId', w2,
                    'UpdateDate', w1,
                    'UpdateUserId', w2,
                    'TenantId', w2
                ]);
            }
        }
    }
}
