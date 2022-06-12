using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace Indotalent.Purchase
{
    public partial class VendorContactEditorAttribute : CustomEditorAttribute
    {
        public const string Key = "Indotalent.Purchase.VendorContactEditor";

        public VendorContactEditorAttribute()
            : base(Key)
        {
        }
    }
}
