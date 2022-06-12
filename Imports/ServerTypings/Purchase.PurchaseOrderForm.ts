namespace Indotalent.Purchase {
    export interface PurchaseOrderForm {
        Number: Serenity.StringEditor;
        Description: Serenity.StringEditor;
        ProcurementGroup: Serenity.StringEditor;
        OrderDate: Serenity.DateEditor;
        VendorId: Serenity.IntegerEditor;
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

    export class PurchaseOrderForm extends Serenity.PrefixedContext {
        static formKey = 'Purchase.PurchaseOrder';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!PurchaseOrderForm.init)  {
                PurchaseOrderForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.DateEditor;
                var w2 = s.IntegerEditor;
                var w3 = s.DecimalEditor;

                Q.initFormType(PurchaseOrderForm, [
                    'Number', w0,
                    'Description', w0,
                    'ProcurementGroup', w0,
                    'OrderDate', w1,
                    'VendorId', w2,
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
