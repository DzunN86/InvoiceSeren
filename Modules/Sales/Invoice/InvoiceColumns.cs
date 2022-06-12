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
        [EditLink]
        [SortOrder(1, descending: true)]
        public String Number { get; set; }
        public DateTime InvoiceDate { get; set; }
        public String SalesOrderNumber { get; set; }
        public Double Total { get; set; }
        public String TenantName { get; set; }
    }
}