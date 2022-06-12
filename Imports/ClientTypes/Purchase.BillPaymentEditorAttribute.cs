using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace Indotalent.Purchase
{
    public partial class BillPaymentEditorAttribute : CustomEditorAttribute
    {
        public const string Key = "Indotalent.Purchase.BillPaymentEditor";

        public BillPaymentEditorAttribute()
            : base(Key)
        {
        }
    }
}
