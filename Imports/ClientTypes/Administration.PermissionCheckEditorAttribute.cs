using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace Indotalent.Administration
{
    public partial class PermissionCheckEditorAttribute : CustomEditorAttribute
    {
        public const string Key = "Indotalent.Administration.PermissionCheckEditor";

        public PermissionCheckEditorAttribute()
            : base(Key)
        {
        }

        public bool ShowRevoke
        {
            get { return GetOption<bool>("showRevoke"); }
            set { SetOption("showRevoke", value); }
        }
    }
}
