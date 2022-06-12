using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace Indotalent.Purchase.Forms
{
    [FormScript("Purchase.Vendor")]
    [BasedOnRow(typeof(VendorRow), CheckNames = true)]
    public class VendorForm
    {
        [Tab("General")]
        [Category("Vendor Info")]
        public String Name { get; set; }
        [TextAreaEditor(Rows = 3)]
        public String Description { get; set; }

        [Category("Address")]
        public String Street { get; set; }
        public String City { get; set; }
        public String State { get; set; }
        public String ZipCode { get; set; }
        public String Phone { get; set; }
        public String Email { get; set; }

        [Tab("Contacts")]
        [Category("List")]
        [VendorContactEditor]
        public List<VendorContactRow> ContactList { get; set; }
    }
}