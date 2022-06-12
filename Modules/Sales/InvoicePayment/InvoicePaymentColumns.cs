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
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public int Id { get; set; }
        public int InvoiceId { get; set; }
        [EditLink]
        public string Number { get; set; }
        public string Description { get; set; }
        public string SalesGroup { get; set; }
        public DateTime PaymentDate { get; set; }
        public int CashBankId { get; set; }
        public double InvoiceAmount { get; set; }
        public double PaymentAmount { get; set; }
        public DateTime InsertDate { get; set; }
        public int InsertUserId { get; set; }
        public DateTime UpdateDate { get; set; }
        public int UpdateUserId { get; set; }
        public int TenantId { get; set; }
    }
}