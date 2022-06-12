using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace Indotalent.Sales.Forms
{
    [FormScript("Sales.Customer")]
    [BasedOnRow(typeof(CustomerRow), CheckNames = true)]
    public class CustomerForm
    {
        [Tab("General")]
        [Category("Customer Info")]
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
        [CustomerContactEditor]
        public List<CustomerContactRow> ContactList { get; set; }
    }
}