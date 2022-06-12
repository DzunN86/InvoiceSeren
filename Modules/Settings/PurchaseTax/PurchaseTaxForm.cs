using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace Indotalent.Settings.Forms
{
    [FormScript("Settings.PurchaseTax")]
    [BasedOnRow(typeof(PurchaseTaxRow), CheckNames = true)]
    public class PurchaseTaxForm
    {
        [Tab("General")]
        [Category("Purchase Tax Info")]
        public String Name { get; set; }
        [TextAreaEditor(Rows = 3)]
        public String Description { get; set; }
        [Category("Rate")]
        public Double TaxRatePercentage { get; set; }

    }
}