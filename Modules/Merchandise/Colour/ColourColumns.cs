using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace Indotalent.Merchandise.Columns
{
    [ColumnsScript("Merchandise.Colour")]
    [BasedOnRow(typeof(ColourRow), CheckNames = true)]
    public class ColourColumns
    {
        [EditLink]
        [Width(200)]
        public String Name { get; set; }
        [Width(200)]
        public String TenantName { get; set; }
    }
}