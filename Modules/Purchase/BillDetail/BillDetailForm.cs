using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace Indotalent.Purchase.Forms
{
    [FormScript("Purchase.BillDetail")]
    [BasedOnRow(typeof(BillDetailRow), CheckNames = true)]
    public class BillDetailForm
    {
        public int BillId { get; set; }
        public int ProductId { get; set; }
        public double Price { get; set; }
        public double Qty { get; set; }
        public double SubTotal { get; set; }
        public double Discount { get; set; }
        public double BeforeTax { get; set; }
        public double TaxPercentage { get; set; }
        public double TaxAmount { get; set; }
        public double Total { get; set; }
        public DateTime InsertDate { get; set; }
        public int InsertUserId { get; set; }
        public DateTime UpdateDate { get; set; }
        public int UpdateUserId { get; set; }
        public int TenantId { get; set; }
    }
}