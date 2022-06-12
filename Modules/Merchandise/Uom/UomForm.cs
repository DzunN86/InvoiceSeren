using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace Indotalent.Merchandise.Forms
{
    [FormScript("Merchandise.Uom")]
    [BasedOnRow(typeof(UomRow), CheckNames = true)]
    public class UomForm
    {
        [Tab("General")]
        [Category("Unit Of Measure")]
        public String Name { get; set; }
        [TextAreaEditor(Rows = 3)]
        public String Description { get; set; }
    }
}