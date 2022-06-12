using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace Indotalent.Merchandise.Forms
{
    [FormScript("Merchandise.Category")]
    [BasedOnRow(typeof(CategoryRow), CheckNames = true)]
    public class CategoryForm
    {
        [Tab("General")]
        [Category("Size for Variant")]
        public String Name { get; set; }
        [TextAreaEditor(Rows = 3)]
        public String Description { get; set; }
    }
}