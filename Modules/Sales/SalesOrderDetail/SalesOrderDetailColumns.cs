using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace Indotalent.Sales.Columns
{
    [ColumnsScript("Sales.SalesOrderDetail")]
    [BasedOnRow(typeof(SalesOrderDetailRow), CheckNames = true)]
    public class SalesOrderDetailColumns
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