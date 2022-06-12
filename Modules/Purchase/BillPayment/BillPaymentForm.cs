using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace Indotalent.Purchase.Forms
{
    [FormScript("Purchase.BillPayment")]
    [BasedOnRow(typeof(BillPaymentRow), CheckNames = true)]
    public class BillPaymentForm
    {
        [Tab("General")]
        [Category("Bill Payment")]
        public String Number { get; set; }
        [TextAreaEditor(Rows = 3)]
        public String Description { get; set; }

        [Category("Bill To Paid")]
        public Int32 BillId { get; set; }
        public Double BillAmount { get; set; }

        [Category("Currency")]
        public String CurrencyName { get; set; }

        [Category("Payment Info")]
        [DefaultValue("now")]
        public DateTime PaymentDate { get; set; }
        public Int32 CashBankId { get; set; }
        public Double PaymentAmount { get; set; }


        [Tab("Vendor")]
        [Category("Name")]
        public String VendorName { get; set; }
        [Category("Address")]
        public String VendorStreet { get; set; }
        public String VendorCity { get; set; }
        public String VendorState { get; set; }
        public String VendorZipCode { get; set; }
        public String VendorPhone { get; set; }
        public String VendorEmail { get; set; }
    }
}