using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace Indotalent.Merchandise.Columns
{
    [ColumnsScript("Merchandise.Product")]
    [BasedOnRow(typeof(ProductRow), CheckNames = true)]
    public class ProductColumns
    {
        [EditLink]
        public String Name { get; set; }
        [Width(100)]
        public String UomName { get; set; }
        [Width(100)]
        public String BrandName { get; set; }
        [Width(100)]
        public String CategoryName { get; set; }
        [Width(100)]
        public String SizeName { get; set; }
        [Width(100)]
        public String ColourName { get; set; }
        [Width(100)]
        public String FlavourName { get; set; }
        [Width(200)]
        public String TenantName { get; set; }
    }
}