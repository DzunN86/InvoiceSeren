using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace Indotalent.Sales
{
    public partial class InvoicePaymentEditorAttribute : CustomEditorAttribute
    {
        public const string Key = "Indotalent.Sales.InvoicePaymentEditor";

        public InvoicePaymentEditorAttribute()
            : base(Key)
        {
        }
    }
}
