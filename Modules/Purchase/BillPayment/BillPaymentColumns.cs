using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace Indotalent.Purchase.Columns
{
    [ColumnsScript("Purchase.BillPayment")]
    [BasedOnRow(typeof(BillPaymentRow), CheckNames = true)]
    public class BillPaymentColumns
    {
        [EditLink]
        [SortOrder(1, descending: true)]
        public String Number { get; set; }
        [Width(100)]
        public DateTime PaymentDate { get; set; }
        public String BillNumber { get; set; }
        public String CashBankName { get; set; }
        public Double PaymentAmount { get; set; }
        public String TenantName { get; set; }
    }
}