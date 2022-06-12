namespace Indotalent.Sales {
    export interface SalesOrderForm {
        Number: Serenity.StringEditor;
        Description: Serenity.StringEditor;
        SalesGroup: Serenity.StringEditor;
        OrderDate: Serenity.DateEditor;
        CustomerId: Serenity.IntegerEditor;
        SalesChannelId: Serenity.IntegerEditor;
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
                var w2 = s.IntegerEditor;
                var w3 = s.DecimalEditor;

                Q.initFormType(SalesOrderForm, [
                    'Number', w0,
                    'Description', w0,
                    'SalesGroup', w0,
                    'OrderDate', w1,
                    'CustomerId', w2,
                    'SalesChannelId', w2,
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
