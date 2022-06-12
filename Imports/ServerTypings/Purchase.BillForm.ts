namespace Indotalent.Purchase {
    export interface BillForm {
        Number: Serenity.StringEditor;
        BillDate: Serenity.DateEditor;
        Description: Serenity.TextAreaEditor;
        PurchaseOrderId: Serenity.LookupEditor;
        ExternalReferenceNumber: Serenity.StringEditor;
        ItemList: BillDetailEditor;
        CurrencyName: Serenity.StringEditor;
        SubTotal: Serenity.DecimalEditor;
        Discount: Serenity.DecimalEditor;
        BeforeTax: Serenity.DecimalEditor;
        TaxAmount: Serenity.DecimalEditor;
        OtherCharge: Serenity.DecimalEditor;
        Total: Serenity.DecimalEditor;
        VendorName: Serenity.StringEditor;
        VendorStreet: Serenity.StringEditor;
        VendorCity: Serenity.StringEditor;
        VendorState: Serenity.StringEditor;
        VendorZipCode: Serenity.StringEditor;
        VendorPhone: Serenity.StringEditor;
        VendorEmail: Serenity.StringEditor;
        BillPaymentList: BillPaymentEditor;
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
                var w2 = s.TextAreaEditor;
                var w3 = s.LookupEditor;
                var w4 = BillDetailEditor;
                var w5 = s.DecimalEditor;
                var w6 = BillPaymentEditor;

                Q.initFormType(BillForm, [
                    'Number', w0,
                    'BillDate', w1,
                    'Description', w2,
                    'PurchaseOrderId', w3,
                    'ExternalReferenceNumber', w0,
                    'ItemList', w4,
                    'CurrencyName', w0,
                    'SubTotal', w5,
                    'Discount', w5,
                    'BeforeTax', w5,
                    'TaxAmount', w5,
                    'OtherCharge', w5,
                    'Total', w5,
                    'VendorName', w0,
                    'VendorStreet', w0,
                    'VendorCity', w0,
                    'VendorState', w0,
                    'VendorZipCode', w0,
                    'VendorPhone', w0,
                    'VendorEmail', w0,
                    'BillPaymentList', w6
                ]);
            }
        }
    }
}
