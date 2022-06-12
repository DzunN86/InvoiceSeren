namespace Indotalent.Sales {
    export interface InvoiceDetailForm {
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

    export class InvoiceDetailForm extends Serenity.PrefixedContext {
        static formKey = 'Sales.InvoiceDetail';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!InvoiceDetailForm.init)  {
                InvoiceDetailForm.init = true;

                var s = Serenity;
                var w0 = s.LookupEditor;
                var w1 = s.DecimalEditor;

                Q.initFormType(InvoiceDetailForm, [
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
