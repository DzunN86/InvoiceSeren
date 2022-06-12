namespace Indotalent.Purchase {
    export interface PurchaseOrderDetailForm {
        PurchaseOrderId: Serenity.IntegerEditor;
        ProductId: Serenity.IntegerEditor;
        Price: Serenity.DecimalEditor;
        Qty: Serenity.DecimalEditor;
        SubTotal: Serenity.DecimalEditor;
        Discount: Serenity.DecimalEditor;
        BeforeTax: Serenity.DecimalEditor;
        TaxPercentage: Serenity.DecimalEditor;
        TaxAmount: Serenity.DecimalEditor;
        Total: Serenity.DecimalEditor;
        InsertDate: Serenity.DateEditor;
        InsertUserId: Serenity.IntegerEditor;
        UpdateDate: Serenity.DateEditor;
        UpdateUserId: Serenity.IntegerEditor;
        TenantId: Serenity.IntegerEditor;
    }

    export class PurchaseOrderDetailForm extends Serenity.PrefixedContext {
        static formKey = 'Purchase.PurchaseOrderDetail';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!PurchaseOrderDetailForm.init)  {
                PurchaseOrderDetailForm.init = true;

                var s = Serenity;
                var w0 = s.IntegerEditor;
                var w1 = s.DecimalEditor;
                var w2 = s.DateEditor;

                Q.initFormType(PurchaseOrderDetailForm, [
                    'PurchaseOrderId', w0,
                    'ProductId', w0,
                    'Price', w1,
                    'Qty', w1,
                    'SubTotal', w1,
                    'Discount', w1,
                    'BeforeTax', w1,
                    'TaxPercentage', w1,
                    'TaxAmount', w1,
                    'Total', w1,
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
