using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace Indotalent.Purchase
{
    public partial class BillDetailEditorAttribute : CustomEditorAttribute
    {
        public const string Key = "Indotalent.Purchase.BillDetailEditor";

        public BillDetailEditorAttribute()
            : base(Key)
        {
        }
    }
}
