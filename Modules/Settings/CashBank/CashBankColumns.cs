using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace Indotalent.Settings.Columns
{
    [ColumnsScript("Settings.CashBank")]
    [BasedOnRow(typeof(CashBankRow), CheckNames = true)]
    public class CashBankColumns
    {
        [EditLink]
        [Width(200)]
        public String Name { get; set; }
        [Width(200)]
        public String AccountNumber { get; set; }
        [Width(200)]
        public String TenantName { get; set; }
    }
}