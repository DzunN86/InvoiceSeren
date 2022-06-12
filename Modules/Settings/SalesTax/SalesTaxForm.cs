using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace Indotalent.Settings.Forms
{
    [FormScript("Settings.SalesTax")]
    [BasedOnRow(typeof(SalesTaxRow), CheckNames = true)]
    public class SalesTaxForm
    {
        [Tab("General")]
        [Category("Sales Tax Info")]
        public String Name { get; set; }
        [TextAreaEditor(Rows = 3)]
        public String Description { get; set; }
        [Category("Rate")]
        public Double TaxRatePercentage { get; set; }
    }
}