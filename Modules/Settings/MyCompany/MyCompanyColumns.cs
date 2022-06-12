using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace Indotalent.Settings.Columns
{
    [ColumnsScript("Settings.MyCompany")]
    [BasedOnRow(typeof(MyCompanyRow), CheckNames = true)]
    public class MyCompanyColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public int TenantId { get; set; }
        [EditLink]
        public string TenantName { get; set; }
        public string Description { get; set; }
        public string Currency { get; set; }
        public string Street { get; set; }
        public string City { get; set; }
        public string State { get; set; }
        public string ZipCode { get; set; }
        public string Phone { get; set; }
        public string Email { get; set; }
        public string ProductNumberPrefix { get; set; }
        public short ProductNumberUseDate { get; set; }
        public short ProductNumberLength { get; set; }
        public string CustomerNumberPrefix { get; set; }
        public short CustomerNumberUseDate { get; set; }
        public short CustomerNumberLength { get; set; }
        public string SalesNumberPrefix { get; set; }
        public short SalesNumberUseDate { get; set; }
        public short SalesNumberLength { get; set; }
        public string InvoiceNumberPrefix { get; set; }
        public short InvoiceNumberUseDate { get; set; }
        public short InvoiceNumberLength { get; set; }
        public string InvoicePaymentNumberPrefix { get; set; }
        public short InvoicePaymentNumberUseDate { get; set; }
        public short InvoicePaymentNumberLength { get; set; }
        public string VendorNumberPrefix { get; set; }
        public short VendorNumberUseDate { get; set; }
        public short VendorNumberLength { get; set; }
        public string PurchaseNumberPrefix { get; set; }
        public short PurchaseNumberUseDate { get; set; }
        public short PurchaseNumberLength { get; set; }
        public string BillNumberPrefix { get; set; }
        public short BillNumberUseDate { get; set; }
        public short BillNumberLength { get; set; }
        public string BillPaymentNumberPrefix { get; set; }
        public short BillPaymentNumberUseDate { get; set; }
        public short BillPaymentNumberLength { get; set; }
        public int MaximumUser { get; set; }
        public DateTime InsertDate { get; set; }
        public int InsertUserId { get; set; }
        public DateTime UpdateDate { get; set; }
        public int UpdateUserId { get; set; }
    }
}