using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace Indotalent.Sales.Forms
{
    [FormScript("Sales.SalesOrder")]
    [BasedOnRow(typeof(SalesOrderRow), CheckNames = true)]
    public class SalesOrderForm
    {
        [Tab("General")]
        [Category("Sales Order")]
        [HalfWidth]
        public String Number { get; set; }
        [HalfWidth]
        [DefaultValue("now")]
        public DateTime OrderDate { get; set; }
        [HalfWidth]
        [TextAreaEditor(Rows = 3)]
        public String Description { get; set; }
        [HalfWidth]
        public Int32 CustomerId { get; set; }

        [Category("Channel")]
        public Int32 SalesChannelId { get; set; }


        [Category("Detail")]
        [SalesOrderDetailEditor]
        public List<SalesOrderDetailRow> ItemList { get; set; }


        [Category("Currency")]
        public string CurrencyName { get; set; }


        [Category("Summary")]
        public Double SubTotal { get; set; }
        public Double Discount { get; set; }
        public Double BeforeTax { get; set; }
        public Double TaxAmount { get; set; }
        public Double OtherCharge { get; set; }
        public Double Total { get; set; }

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

        [Tab("Invoices")]
        [Category("Related Invoices")]
        [InvoiceEditor]
        public List<InvoiceRow> InvoiceList { get; set; }
    }
}