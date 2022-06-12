namespace Indotalent.Administration {
    export interface TenantForm {
        TenantName: Serenity.StringEditor;
        Description: Serenity.TextAreaEditor;
        Currency: Serenity.StringEditor;
        Street: Serenity.StringEditor;
        City: Serenity.StringEditor;
        State: Serenity.StringEditor;
        ZipCode: Serenity.StringEditor;
        Phone: Serenity.StringEditor;
        Email: Serenity.StringEditor;
        ProductNumberPrefix: Serenity.StringEditor;
        ProductNumberUseDate: Serenity.BooleanEditor;
        ProductNumberLength: Serenity.IntegerEditor;
        CustomerNumberPrefix: Serenity.StringEditor;
        CustomerNumberUseDate: Serenity.BooleanEditor;
        CustomerNumberLength: Serenity.IntegerEditor;
        SalesNumberPrefix: Serenity.StringEditor;
        SalesNumberUseDate: Serenity.BooleanEditor;
        SalesNumberLength: Serenity.IntegerEditor;
        InvoiceNumberPrefix: Serenity.StringEditor;
        InvoiceNumberUseDate: Serenity.BooleanEditor;
        InvoiceNumberLength: Serenity.IntegerEditor;
        InvoicePaymentNumberPrefix: Serenity.StringEditor;
        InvoicePaymentNumberUseDate: Serenity.BooleanEditor;
        InvoicePaymentNumberLength: Serenity.IntegerEditor;
        VendorNumberPrefix: Serenity.StringEditor;
        VendorNumberUseDate: Serenity.BooleanEditor;
        VendorNumberLength: Serenity.IntegerEditor;
        PurchaseNumberPrefix: Serenity.StringEditor;
        PurchaseNumberUseDate: Serenity.BooleanEditor;
        PurchaseNumberLength: Serenity.IntegerEditor;
        BillNumberPrefix: Serenity.StringEditor;
        BillNumberUseDate: Serenity.BooleanEditor;
        BillNumberLength: Serenity.IntegerEditor;
        BillPaymentNumberPrefix: Serenity.StringEditor;
        BillPaymentNumberUseDate: Serenity.BooleanEditor;
        BillPaymentNumberLength: Serenity.IntegerEditor;
        MaximumUser: Serenity.IntegerEditor;
    }

    export class TenantForm extends Serenity.PrefixedContext {
        static formKey = 'Administration.Tenant';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!TenantForm.init)  {
                TenantForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.TextAreaEditor;
                var w2 = s.BooleanEditor;
                var w3 = s.IntegerEditor;

                Q.initFormType(TenantForm, [
                    'TenantName', w0,
                    'Description', w1,
                    'Currency', w0,
                    'Street', w0,
                    'City', w0,
                    'State', w0,
                    'ZipCode', w0,
                    'Phone', w0,
                    'Email', w0,
                    'ProductNumberPrefix', w0,
                    'ProductNumberUseDate', w2,
                    'ProductNumberLength', w3,
                    'CustomerNumberPrefix', w0,
                    'CustomerNumberUseDate', w2,
                    'CustomerNumberLength', w3,
                    'SalesNumberPrefix', w0,
                    'SalesNumberUseDate', w2,
                    'SalesNumberLength', w3,
                    'InvoiceNumberPrefix', w0,
                    'InvoiceNumberUseDate', w2,
                    'InvoiceNumberLength', w3,
                    'InvoicePaymentNumberPrefix', w0,
                    'InvoicePaymentNumberUseDate', w2,
                    'InvoicePaymentNumberLength', w3,
                    'VendorNumberPrefix', w0,
                    'VendorNumberUseDate', w2,
                    'VendorNumberLength', w3,
                    'PurchaseNumberPrefix', w0,
                    'PurchaseNumberUseDate', w2,
                    'PurchaseNumberLength', w3,
                    'BillNumberPrefix', w0,
                    'BillNumberUseDate', w2,
                    'BillNumberLength', w3,
                    'BillPaymentNumberPrefix', w0,
                    'BillPaymentNumberUseDate', w2,
                    'BillPaymentNumberLength', w3,
                    'MaximumUser', w3
                ]);
            }
        }
    }
}
