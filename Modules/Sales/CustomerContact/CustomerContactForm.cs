using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace Indotalent.Sales.Forms
{
    [FormScript("Sales.CustomerContact")]
    [BasedOnRow(typeof(CustomerContactRow), CheckNames = true)]
    public class CustomerContactForm
    {
        [Tab("General")]
        [Category("Contact Info")]
        public String Name { get; set; }
        [TextAreaEditor(Rows = 3)]
        public String Description { get; set; }


        [Tab("Address")]
        [Category("Main")]
        public String Street { get; set; }
        public String City { get; set; }
        public String State { get; set; }
        public String ZipCode { get; set; }
        public String Phone { get; set; }
        public String Email { get; set; }
    }
}