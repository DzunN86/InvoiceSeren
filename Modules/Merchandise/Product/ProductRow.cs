using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System;
using System.ComponentModel;
using System.IO;

namespace Indotalent.Merchandise
{
    [ConnectionKey("Default"), Module("Merchandise"), TableName("Product")]
    [DisplayName("Product"), InstanceName("Product")]
    [ReadPermission("Merchandise:Product")]
    [ModifyPermission("Merchandise:Product")]
    public sealed class ProductRow : Row<ProductRow.RowFields>, IIdRow, INameRow
    {
        [DisplayName("Id"), Identity, IdProperty]
        public int? Id
        {
            get => fields.Id[this];
            set => fields.Id[this] = value;
        }

        [DisplayName("Name"), Size(200), NotNull, QuickSearch, NameProperty]
        public string Name
        {
            get => fields.Name[this];
            set => fields.Name[this] = value;
        }

        [DisplayName("Description"), Size(1000)]
        public string Description
        {
            get => fields.Description[this];
            set => fields.Description[this] = value;
        }

        [DisplayName("Picture"), Size(200)]
        public string Picture
        {
            get => fields.Picture[this];
            set => fields.Picture[this] = value;
        }

        [DisplayName("Internal Code"), Size(100)]
        public string InternalCode
        {
            get => fields.InternalCode[this];
            set => fields.InternalCode[this] = value;
        }

        [DisplayName("Barcode"), Size(100)]
        public string Barcode
        {
            get => fields.Barcode[this];
            set => fields.Barcode[this] = value;
        }

        [DisplayName("Uom Id"), NotNull]
        public int? UomId
        {
            get => fields.UomId[this];
            set => fields.UomId[this] = value;
        }

        [DisplayName("Brand Id"), NotNull]
        public int? BrandId
        {
            get => fields.BrandId[this];
            set => fields.BrandId[this] = value;
        }

        [DisplayName("Category Id"), NotNull]
        public int? CategoryId
        {
            get => fields.CategoryId[this];
            set => fields.CategoryId[this] = value;
        }

        [DisplayName("Size Id")]
        public int? SizeId
        {
            get => fields.SizeId[this];
            set => fields.SizeId[this] = value;
        }

        [DisplayName("Colour Id")]
        public int? ColourId
        {
            get => fields.ColourId[this];
            set => fields.ColourId[this] = value;
        }

        [DisplayName("Flavour Id")]
        public int? FlavourId
        {
            get => fields.FlavourId[this];
            set => fields.FlavourId[this] = value;
        }

        [DisplayName("Purchase Price"), NotNull]
        public double? PurchasePrice
        {
            get => fields.PurchasePrice[this];
            set => fields.PurchasePrice[this] = value;
        }

        [DisplayName("Sales Price"), NotNull]
        public double? SalesPrice
        {
            get => fields.SalesPrice[this];
            set => fields.SalesPrice[this] = value;
        }

        [DisplayName("Purchase Tax Id"), NotNull]
        public int? PurchaseTaxId
        {
            get => fields.PurchaseTaxId[this];
            set => fields.PurchaseTaxId[this] = value;
        }

        [DisplayName("Sales Tax Id"), NotNull]
        public int? SalesTaxId
        {
            get => fields.SalesTaxId[this];
            set => fields.SalesTaxId[this] = value;
        }

        [DisplayName("Insert Date")]
        public DateTime? InsertDate
        {
            get => fields.InsertDate[this];
            set => fields.InsertDate[this] = value;
        }

        [DisplayName("Insert User Id")]
        public int? InsertUserId
        {
            get => fields.InsertUserId[this];
            set => fields.InsertUserId[this] = value;
        }

        [DisplayName("Update Date")]
        public DateTime? UpdateDate
        {
            get => fields.UpdateDate[this];
            set => fields.UpdateDate[this] = value;
        }

        [DisplayName("Update User Id")]
        public int? UpdateUserId
        {
            get => fields.UpdateUserId[this];
            set => fields.UpdateUserId[this] = value;
        }

        [DisplayName("Tenant Id"), NotNull]
        public int? TenantId
        {
            get => fields.TenantId[this];
            set => fields.TenantId[this] = value;
        }

        public ProductRow()
            : base()
        {
        }

        public ProductRow(RowFields fields)
            : base(fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public StringField Name;
            public StringField Description;
            public StringField Picture;
            public StringField InternalCode;
            public StringField Barcode;
            public Int32Field UomId;
            public Int32Field BrandId;
            public Int32Field CategoryId;
            public Int32Field SizeId;
            public Int32Field ColourId;
            public Int32Field FlavourId;
            public DoubleField PurchasePrice;
            public DoubleField SalesPrice;
            public Int32Field PurchaseTaxId;
            public Int32Field SalesTaxId;
            public DateTimeField InsertDate;
            public Int32Field InsertUserId;
            public DateTimeField UpdateDate;
            public Int32Field UpdateUserId;
            public Int32Field TenantId;
        }
    }
}
