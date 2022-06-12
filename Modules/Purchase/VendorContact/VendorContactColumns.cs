using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace Indotalent.Purchase.Columns
{
    [ColumnsScript("Purchase.VendorContact")]
    [BasedOnRow(typeof(VendorContactRow), CheckNames = true)]
    public class VendorContactColumns
    {
        [EditLink]
        [Width(200)]
        public String Name { get; set; }
        [Width(200)]
        public String Email { get; set; }
        [Width(200)]
        public String TenantName { get; set; }
    }
}