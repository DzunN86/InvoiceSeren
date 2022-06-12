namespace Indotalent.Sales {
    export interface SalesOrderForm {
        Number: Serenity.StringEditor;
        OrderDate: Serenity.DateEditor;
        Description: Serenity.TextAreaEditor;
        CustomerId: Serenity.LookupEditor;
        SalesChannelId: Serenity.LookupEditor;
        ItemList: SalesOrderDetailEditor;
        CurrencyName: Serenity.StringEditor;
        SubTotal: Serenity.DecimalEditor;
        Discount: Serenity.DecimalEditor;
        BeforeTax: Serenity.DecimalEditor;
        TaxAmount: Serenity.DecimalEditor;
        OtherCharge: Serenity.DecimalEditor;
        Total: Serenity.DecimalEditor;
        CustomerName: Serenity.StringEditor;
        CustomerStreet: Serenity.StringEditor;
        CustomerCity: Serenity.StringEditor;
        CustomerState: Serenity.StringEditor;
        CustomerZipCode: Serenity.StringEditor;
        CustomerPhone: Serenity.StringEditor;
        CustomerEmail: Serenity.StringEditor;
        InvoiceList: InvoiceEditor;
    }

    export class SalesOrderForm extends Serenity.PrefixedContext {
        static formKey = 'Sales.SalesOrder';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!SalesOrderForm.init)  {
                SalesOrderForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.DateEditor;
                var w2 = s.TextAreaEditor;
                var w3 = s.LookupEditor;
                var w4 = SalesOrderDetailEditor;
                var w5 = s.DecimalEditor;
                var w6 = InvoiceEditor;

                Q.initFormType(SalesOrderForm, [
                    'Number', w0,
                    'OrderDate', w1,
                    'Description', w2,
                    'CustomerId', w3,
                    'SalesChannelId', w3,
                    'ItemList', w4,
                    'CurrencyName', w0,
                    'SubTotal', w5,
                    'Discount', w5,
                    'BeforeTax', w5,
                    'TaxAmount', w5,
                    'OtherCharge', w5,
                    'Total', w5,
                    'CustomerName', w0,
                    'CustomerStreet', w0,
                    'CustomerCity', w0,
                    'CustomerState', w0,
                    'CustomerZipCode', w0,
                    'CustomerPhone', w0,
                    'CustomerEmail', w0,
                    'InvoiceList', w6
                ]);
            }
        }
    }
}
