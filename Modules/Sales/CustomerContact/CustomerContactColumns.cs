using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace Indotalent.Sales.Columns
{
    [ColumnsScript("Sales.CustomerContact")]
    [BasedOnRow(typeof(CustomerContactRow), CheckNames = true)]
    public class CustomerContactColumns
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