using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace Indotalent.Purchase.Columns
{
    [ColumnsScript("Purchase.Vendor")]
    [BasedOnRow(typeof(VendorRow), CheckNames = true)]
    public class VendorColumns
    {
        [EditLink]
        [Width(200)]
        public String Name { get; set; }
        [Width(200)]
        public String City { get; set; }
        [Width(200)]
        public String Street { get; set; }
        [Width(200)]
        public String Email { get; set; }
        [Width(200)]
        public String TenantName { get; set; }
    }
}