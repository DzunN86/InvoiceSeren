using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace Indotalent.Merchandise.Forms
{
    [FormScript("Merchandise.Brand")]
    [BasedOnRow(typeof(BrandRow), CheckNames = true)]
    public class BrandForm
    {
        [Tab("General")]
        [Category("Size for Variant")]
        public String Name { get; set; }
        [TextAreaEditor(Rows = 3)]
        public String Description { get; set; }
    }
}