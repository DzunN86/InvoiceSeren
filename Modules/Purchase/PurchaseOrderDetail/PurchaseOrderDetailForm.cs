using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace Indotalent.Purchase.Forms
{
    [FormScript("Purchase.PurchaseOrderDetail")]
    [BasedOnRow(typeof(PurchaseOrderDetailRow), CheckNames = true)]
    public class PurchaseOrderDetailForm
    {
        [Tab("General")]
        [Category("Main")]
        public Int32 ProductId { get; set; }
        [HalfWidth]
        public Double Price { get; set; }
        [HalfWidth]
        public Double Qty { get; set; }
        [HalfWidth]
        public Double Discount { get; set; }
        [HalfWidth]
        public Double TaxPercentage { get; set; }

        [Category("Summary")]
        public Double SubTotal { get; set; }
        public Double BeforeTax { get; set; }
        public Double TaxAmount { get; set; }
        public Double Total { get; set; }
    }
}