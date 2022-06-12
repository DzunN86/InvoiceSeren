using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace Indotalent.Sales.Columns
{
    [ColumnsScript("Sales.SalesOrder")]
    [BasedOnRow(typeof(SalesOrderRow), CheckNames = true)]
    public class SalesOrderColumns
    {
        [EditLink]
        [SortOrder(1, descending: true)]
        [Width(200)]
        public String Number { get; set; }
        [Width(200)]
        public DateTime OrderDate { get; set; }
        [Width(200)]
        public String CustomerName { get; set; }
        [Width(200)]
        public Double Total { get; set; }
        [Width(200)]
        public String TenantName { get; set; }
    }
}