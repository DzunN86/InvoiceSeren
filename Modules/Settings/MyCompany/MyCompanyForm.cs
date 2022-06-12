using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace Indotalent.Settings.Forms
{
    [FormScript("Settings.MyCompany")]
    [BasedOnRow(typeof(MyCompanyRow), CheckNames = true)]
    public class MyCompanyForm
    {
        [Tab("General")]
        [Category("Identity")]
        public String TenantName { get; set; }
        [TextAreaEditor(Rows = 3)]
        public String Description { get; set; }
        public String Currency { get; set; }

        [Category("Address")]
        public String Street { get; set; }
        public String City { get; set; }
        public String State { get; set; }
        public String ZipCode { get; set; }
        public String Phone { get; set; }
        public String Email { get; set; }

        [Tab("Number Sequence")]
        [Category("Merchandise")]
        [OneThirdWidth]
        public String ProductNumberPrefix { get; set; }
        [OneThirdWidth]
        public Boolean ProductNumberUseDate { get; set; }
        [OneThirdWidth]
        public Int16 ProductNumberLength { get; set; }
        [Category("Sales")]
        [OneThirdWidth]
        public String CustomerNumberPrefix { get; set; }
        [OneThirdWidth]
        public Boolean CustomerNumberUseDate { get; set; }
        [OneThirdWidth]
        public Int16 CustomerNumberLength { get; set; }
        [OneThirdWidth]
        public String SalesNumberPrefix { get; set; }
        [OneThirdWidth]
        public Boolean SalesNumberUseDate { get; set; }
        [OneThirdWidth]
        public Int16 SalesNumberLength { get; set; }
        [OneThirdWidth]
        public String InvoiceNumberPrefix { get; set; }
        [OneThirdWidth]
        public Boolean InvoiceNumberUseDate { get; set; }
        [OneThirdWidth]
        public Int16 InvoiceNumberLength { get; set; }
        [OneThirdWidth]
        public String InvoicePaymentNumberPrefix { get; set; }
        [OneThirdWidth]
        public Boolean InvoicePaymentNumberUseDate { get; set; }
        [OneThirdWidth]
        public Int16 InvoicePaymentNumberLength { get; set; }
        [Category("Purchase")]
        [OneThirdWidth]
        public String VendorNumberPrefix { get; set; }
        [OneThirdWidth]
        public Boolean VendorNumberUseDate { get; set; }
        [OneThirdWidth]
        public Int16 VendorNumberLength { get; set; }
        [OneThirdWidth]
        public String PurchaseNumberPrefix { get; set; }
        [OneThirdWidth]
        public Boolean PurchaseNumberUseDate { get; set; }
        [OneThirdWidth]
        public Int16 PurchaseNumberLength { get; set; }
        [OneThirdWidth]
        public String BillNumberPrefix { get; set; }
        [OneThirdWidth]
        public Boolean BillNumberUseDate { get; set; }
        [OneThirdWidth]
        public Int16 BillNumberLength { get; set; }
        [OneThirdWidth]
        public String BillPaymentNumberPrefix { get; set; }
        [OneThirdWidth]
        public Boolean BillPaymentNumberUseDate { get; set; }
        [OneThirdWidth]
        public Int16 BillPaymentNumberLength { get; set; }

        [Tab("Package")]
        [Category("Provisioning")]
        public int MaximumUser { get; set; }
    }
}