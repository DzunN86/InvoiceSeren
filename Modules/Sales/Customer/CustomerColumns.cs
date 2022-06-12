using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace Indotalent.Sales.Columns
{
    [ColumnsScript("Sales.Customer")]
    [BasedOnRow(typeof(CustomerRow), CheckNames = true)]
    public class CustomerColumns
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