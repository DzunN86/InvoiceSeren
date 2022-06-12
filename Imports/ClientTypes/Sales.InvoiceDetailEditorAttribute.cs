using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace Indotalent.Sales
{
    public partial class InvoiceDetailEditorAttribute : CustomEditorAttribute
    {
        public const string Key = "Indotalent.Sales.InvoiceDetailEditor";

        public InvoiceDetailEditorAttribute()
            : base(Key)
        {
        }
    }
}
