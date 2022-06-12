using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace Indotalent.Purchase.Forms
{
    [FormScript("Purchase.PurchaseOrder")]
    [BasedOnRow(typeof(PurchaseOrderRow), CheckNames = true)]
    public class PurchaseOrderForm
    {
        [Tab("General")]
        [Category("Purchase Order")]
        [HalfWidth]
        public String Number { get; set; }
        [HalfWidth]
        [DefaultValue("now")]
        public DateTime OrderDate { get; set; }
        [HalfWidth]
        [TextAreaEditor(Rows = 3)]
        public String Description { get; set; }
        [HalfWidth]
        public Int32 VendorId { get; set; }


        [Category("Detail")]
        [PurchaseOrderDetailEditor]
        public List<PurchaseOrderDetailRow> ItemList { get; set; }


        [Category("Currency")]
        public string CurrencyName { get; set; }


        [Category("Summary")]
        public Double SubTotal { get; set; }
        public Double Discount { get; set; }
        public Double BeforeTax { get; set; }
        public Double TaxAmount { get; set; }
        public Double OtherCharge { get; set; }
        public Double Total { get; set; }

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

        [Tab("Bills")]
        [Category("Related Bills")]
        [BillEditor]
        public List<BillRow> BillList { get; set; }
    }
}