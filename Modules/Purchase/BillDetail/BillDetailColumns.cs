using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace Indotalent.Purchase.Columns
{
    [ColumnsScript("Purchase.BillDetail")]
    [BasedOnRow(typeof(BillDetailRow), CheckNames = true)]
    public class BillDetailColumns
    {
        [EditLink]
        public String ProductName { get; set; }
        public Double Price { get; set; }
        public Double Qty { get; set; }
        public Double SubTotal { get; set; }
        public Double Discount { get; set; }
        public Double BeforeTax { get; set; }
        public Double TaxPercentage { get; set; }
        public Double TaxAmount { get; set; }
        public Double Total { get; set; }
    }
}