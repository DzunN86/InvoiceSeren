using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace Indotalent.Purchase.Forms
{
    [FormScript("Purchase.Bill")]
    [BasedOnRow(typeof(BillRow), CheckNames = true)]
    public class BillForm
    {
        public string Number { get; set; }
        public string Description { get; set; }
        public string ExternalReferenceNumber { get; set; }
        public string ProcurementGroup { get; set; }
        public DateTime BillDate { get; set; }
        public int PurchaseOrderId { get; set; }
        public double SubTotal { get; set; }
        public double Discount { get; set; }
        public double BeforeTax { get; set; }
        public double TaxAmount { get; set; }
        public double Total { get; set; }
        public double OtherCharge { get; set; }
        public DateTime InsertDate { get; set; }
        public int InsertUserId { get; set; }
        public DateTime UpdateDate { get; set; }
        public int UpdateUserId { get; set; }
        public int TenantId { get; set; }
    }
}