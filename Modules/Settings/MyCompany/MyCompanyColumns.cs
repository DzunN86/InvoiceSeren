using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace Indotalent.Settings.Columns
{
    [ColumnsScript("Settings.MyCompany")]
    [BasedOnRow(typeof(MyCompanyRow), CheckNames = true)]
    public class MyCompanyColumns
    {
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