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
        public int BillId { get; set; }
        public string Number { get; set; }
        public string Description { get; set; }
        public string ProcurementGroup { get; set; }
        public DateTime PaymentDate { get; set; }
        public int CashBankId { get; set; }
        public double BillAmount { get; set; }
        public double PaymentAmount { get; set; }
        public DateTime InsertDate { get; set; }
        public int InsertUserId { get; set; }
        public DateTime UpdateDate { get; set; }
        public int UpdateUserId { get; set; }
        public int TenantId { get; set; }
    }
}