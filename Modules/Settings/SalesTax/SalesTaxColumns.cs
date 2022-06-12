using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace Indotalent.Settings.Columns
{
    [ColumnsScript("Settings.SalesTax")]
    [BasedOnRow(typeof(SalesTaxRow), CheckNames = true)]
    public class SalesTaxColumns
    {
        [EditLink]
        [Width(200)]
        public String Name { get; set; }
        [Width(200)]
        public Double TaxRatePercentage { get; set; }
        [Width(200)]
        public String TenantName { get; set; }
    }
}