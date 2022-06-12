using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace Indotalent.Sales
{
    public partial class SalesOrderDetailEditorAttribute : CustomEditorAttribute
    {
        public const string Key = "Indotalent.Sales.SalesOrderDetailEditor";

        public SalesOrderDetailEditorAttribute()
            : base(Key)
        {
        }
    }
}
