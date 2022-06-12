using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace Indotalent.Sales.Columns
{
    [ColumnsScript("Sales.InvoicePayment")]
    [BasedOnRow(typeof(InvoicePaymentRow), CheckNames = true)]
    public class InvoicePaymentColumns
    {
        [EditLink]
        [SortOrder(1, descending: true)]
        public String Number { get; set; }
        [Width(100)]
        public DateTime PaymentDate { get; set; }
        public String InvoiceNumber { get; set; }
        public String CashBankName { get; set; }
        public Double PaymentAmount { get; set; }
        public String TenantName { get; set; }
    }
}