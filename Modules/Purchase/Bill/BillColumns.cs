using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace Indotalent.Purchase.Columns
{
    [ColumnsScript("Purchase.Bill")]
    [BasedOnRow(typeof(BillRow), CheckNames = true)]
    public class BillColumns
    {
        [EditLink]
        [SortOrder(1, descending: true)]
        public String Number { get; set; }
        public DateTime BillDate { get; set; }
        public String PurchaseOrderNumber { get; set; }
        public Double Total { get; set; }
        public String TenantName { get; set; }
    }
}