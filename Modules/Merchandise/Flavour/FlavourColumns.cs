using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace Indotalent.Merchandise.Columns
{
    [ColumnsScript("Merchandise.Flavour")]
    [BasedOnRow(typeof(FlavourRow), CheckNames = true)]
    public class FlavourColumns
    {
        [EditLink]
        [Width(200)]
        public String Name { get; set; }
        [Width(200)]
        public String TenantName { get; set; }
    }
}