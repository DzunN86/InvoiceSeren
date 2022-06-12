namespace Indotalent.Sales {
    export interface SalesOrderDetailForm {
        ProductId: Serenity.LookupEditor;
        Price: Serenity.DecimalEditor;
        Qty: Serenity.DecimalEditor;
        Discount: Serenity.DecimalEditor;
        TaxPercentage: Serenity.DecimalEditor;
        SubTotal: Serenity.DecimalEditor;
        BeforeTax: Serenity.DecimalEditor;
        TaxAmount: Serenity.DecimalEditor;
        Total: Serenity.DecimalEditor;
    }

    export class SalesOrderDetailForm extends Serenity.PrefixedContext {
        static formKey = 'Sales.SalesOrderDetail';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!SalesOrderDetailForm.init)  {
                SalesOrderDetailForm.init = true;

                var s = Serenity;
                var w0 = s.LookupEditor;
                var w1 = s.DecimalEditor;

                Q.initFormType(SalesOrderDetailForm, [
                    'ProductId', w0,
                    'Price', w1,
                    'Qty', w1,
                    'Discount', w1,
                    'TaxPercentage', w1,
                    'SubTotal', w1,
                    'BeforeTax', w1,
                    'TaxAmount', w1,
                    'Total', w1
                ]);
            }
        }
    }
}
