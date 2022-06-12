using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace Indotalent.Administration.Columns
{
    [ColumnsScript("Administration.Tenant")]
    [BasedOnRow(typeof(TenantRow), CheckNames = true)]
    public class TenantColumns
    {
        [EditLink, AlignRight]
        public Int32 TenantId { get; set; }
        [EditLink, Width(200), SortOrder(-1)]
        public String TenantName { get; set; }
        [Width(200)]
        public String City { get; set; }
        [Width(200)]
        public String Phone { get; set; }
        [Width(200)]
        public String Email { get; set; }
        [Width(100)]
        public int MaximumUser { get; set; }
    }
}