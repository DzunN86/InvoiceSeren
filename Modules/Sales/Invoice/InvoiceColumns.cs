using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace Indotalent.Sales.Columns
{
    [ColumnsScript("Sales.Invoice")]
    [BasedOnRow(typeof(InvoiceRow), CheckNames = true)]
    public class InvoiceColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public int Id { get; set; }
        [EditLink]
        public string Number { get; set; }
        public string Description { get; set; }
        public string SalesGroup { get; set; }
        public DateTime InvoiceDate { get; set; }
        public int SalesOrderId { get; set; }
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