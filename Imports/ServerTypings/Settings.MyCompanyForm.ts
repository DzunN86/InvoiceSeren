namespace Indotalent.Settings {
    export interface MyCompanyForm {
        TenantName: Serenity.StringEditor;
        Description: Serenity.StringEditor;
        Currency: Serenity.StringEditor;
        Street: Serenity.StringEditor;
        City: Serenity.StringEditor;
        State: Serenity.StringEditor;
        ZipCode: Serenity.StringEditor;
        Phone: Serenity.StringEditor;
        Email: Serenity.StringEditor;
        ProductNumberPrefix: Serenity.StringEditor;
        ProductNumberUseDate: Serenity.IntegerEditor;
        ProductNumberLength: Serenity.IntegerEditor;
        CustomerNumberPrefix: Serenity.StringEditor;
        CustomerNumberUseDate: Serenity.IntegerEditor;
        CustomerNumberLength: Serenity.IntegerEditor;
        SalesNumberPrefix: Serenity.StringEditor;
        SalesNumberUseDate: Serenity.IntegerEditor;
        SalesNumberLength: Serenity.IntegerEditor;
        InvoiceNumberPrefix: Serenity.StringEditor;
        InvoiceNumberUseDate: Serenity.IntegerEditor;
        InvoiceNumberLength: Serenity.IntegerEditor;
        InvoicePaymentNumberPrefix: Serenity.StringEditor;
        InvoicePaymentNumberUseDate: Serenity.IntegerEditor;
        InvoicePaymentNumberLength: Serenity.IntegerEditor;
        VendorNumberPrefix: Serenity.StringEditor;
        VendorNumberUseDate: Serenity.IntegerEditor;
        VendorNumberLength: Serenity.IntegerEditor;
        PurchaseNumberPrefix: Serenity.StringEditor;
        PurchaseNumberUseDate: Serenity.IntegerEditor;
        PurchaseNumberLength: Serenity.IntegerEditor;
        BillNumberPrefix: Serenity.StringEditor;
        BillNumberUseDate: Serenity.IntegerEditor;
        BillNumberLength: Serenity.IntegerEditor;
        BillPaymentNumberPrefix: Serenity.StringEditor;
        BillPaymentNumberUseDate: Serenity.IntegerEditor;
        BillPaymentNumberLength: Serenity.IntegerEditor;
        MaximumUser: Serenity.IntegerEditor;
        InsertDate: Serenity.DateEditor;
        InsertUserId: Serenity.IntegerEditor;
        UpdateDate: Serenity.DateEditor;
        UpdateUserId: Serenity.IntegerEditor;
    }

    export class MyCompanyForm extends Serenity.PrefixedContext {
        static formKey = 'Settings.MyCompany';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!MyCompanyForm.init)  {
                MyCompanyForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.IntegerEditor;
                var w2 = s.DateEditor;

                Q.initFormType(MyCompanyForm, [
                    'TenantName', w0,
                    'Description', w0,
                    'Currency', w0,
                    'Street', w0,
                    'City', w0,
                    'State', w0,
                    'ZipCode', w0,
                    'Phone', w0,
                    'Email', w0,
                    'ProductNumberPrefix', w0,
                    'ProductNumberUseDate', w1,
                    'ProductNumberLength', w1,
                    'CustomerNumberPrefix', w0,
                    'CustomerNumberUseDate', w1,
                    'CustomerNumberLength', w1,
                    'SalesNumberPrefix', w0,
                    'SalesNumberUseDate', w1,
                    'SalesNumberLength', w1,
                    'InvoiceNumberPrefix', w0,
                    'InvoiceNumberUseDate', w1,
                    'InvoiceNumberLength', w1,
                    'InvoicePaymentNumberPrefix', w0,
                    'InvoicePaymentNumberUseDate', w1,
                    'InvoicePaymentNumberLength', w1,
                    'VendorNumberPrefix', w0,
                    'VendorNumberUseDate', w1,
                    'VendorNumberLength', w1,
                    'PurchaseNumberPrefix', w0,
                    'PurchaseNumberUseDate', w1,
                    'PurchaseNumberLength', w1,
                    'BillNumberPrefix', w0,
                    'BillNumberUseDate', w1,
                    'BillNumberLength', w1,
                    'BillPaymentNumberPrefix', w0,
                    'BillPaymentNumberUseDate', w1,
                    'BillPaymentNumberLength', w1,
                    'MaximumUser', w1,
                    'InsertDate', w2,
                    'InsertUserId', w1,
                    'UpdateDate', w2,
                    'UpdateUserId', w1
                ]);
            }
        }
    }
}
