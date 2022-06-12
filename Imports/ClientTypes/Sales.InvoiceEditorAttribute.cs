using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace Indotalent.Sales
{
    public partial class InvoiceEditorAttribute : CustomEditorAttribute
    {
        public const string Key = "Indotalent.Sales.InvoiceEditor";

        public InvoiceEditorAttribute()
            : base(Key)
        {
        }
    }
}
