using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace Indotalent.Sales.Forms
{
    [FormScript("Sales.InvoicePayment")]
    [BasedOnRow(typeof(InvoicePaymentRow), CheckNames = true)]
    public class InvoicePaymentForm
    {
        [Tab("General")]
        [Category("Invoice Payment")]
        public String Number { get; set; }
        [TextAreaEditor(Rows = 3)]
        public String Description { get; set; }

        [Category("Paid Invoice")]
        public Int32 InvoiceId { get; set; }
        public Double InvoiceAmount { get; set; }

        [Category("Currency")]
        public String CurrencyName { get; set; }

        [Category("Payment Info")]
        [DefaultValue("now")]
        public DateTime PaymentDate { get; set; }
        public Int32 CashBankId { get; set; }
        public Double PaymentAmount { get; set; }


        [Tab("Customer")]
        [Category("Name")]
        public String CustomerName { get; set; }
        [Category("Address")]
        public String CustomerStreet { get; set; }
        public String CustomerCity { get; set; }
        public String CustomerState { get; set; }
        public String CustomerZipCode { get; set; }
        public String CustomerPhone { get; set; }
        public String CustomerEmail { get; set; }
    }
}