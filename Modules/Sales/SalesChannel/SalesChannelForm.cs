using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace Indotalent.Sales.Forms
{
    [FormScript("Sales.SalesChannel")]
    [BasedOnRow(typeof(SalesChannelRow), CheckNames = true)]
    public class SalesChannelForm
    {
        [Tab("General")]
        [Category("Sales Channel")]
        public String Name { get; set; }
        [TextAreaEditor(Rows = 3)]
        public String Description { get; set; }
    }
}