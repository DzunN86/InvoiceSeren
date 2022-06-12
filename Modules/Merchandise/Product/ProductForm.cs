using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace Indotalent.Merchandise.Forms
{
    [FormScript("Merchandise.Product")]
    [BasedOnRow(typeof(ProductRow), CheckNames = true)]
    public class ProductForm
    {
        public string Name { get; set; }
        public string Description { get; set; }
        public string Picture { get; set; }
        public string InternalCode { get; set; }
        public string Barcode { get; set; }
        public int UomId { get; set; }
        public int BrandId { get; set; }
        public int CategoryId { get; set; }
        public int SizeId { get; set; }
        public int ColourId { get; set; }
        public int FlavourId { get; set; }
        public double PurchasePrice { get; set; }
        public double SalesPrice { get; set; }
        public int PurchaseTaxId { get; set; }
        public int SalesTaxId { get; set; }
        public DateTime InsertDate { get; set; }
        public int InsertUserId { get; set; }
        public DateTime UpdateDate { get; set; }
        public int UpdateUserId { get; set; }
        public int TenantId { get; set; }
    }
}