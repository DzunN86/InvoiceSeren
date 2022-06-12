using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using Serenity.Extensions.Entities;
using System;
using System.ComponentModel;
using System.IO;

namespace Indotalent.Merchandise
{
    [ConnectionKey("Default"), Module("Merchandise"), TableName("[Product]")]
    [DisplayName("Products"), InstanceName("Product")]
    [LookupScript(LookupType = typeof(MultiTenantRowLookupScript<>))]
    [ReadPermission("Merchandise:Product")]
    [ModifyPermission("Merchandise:Product")]
    public sealed class ProductRow : LoggingRow<ProductRow.RowFields>, IIdRow, INameRow, IMultiTenantRow
    {
        [DisplayName("Id"), Identity, IdProperty]
        public Int32? Id
        {
            get => fields.Id[this];
            set => fields.Id[this] = value;
        }

        [DisplayName("Name"), Size(200), NotNull, QuickSearch, NameProperty, DefaultValue("auto")]
        public String Name
        {
            get => fields.Name[this];
            set => fields.Name[this] = value;
        }

        [DisplayName("Description"), Size(1000)]
        public String Description
        {
            get => fields.Description[this];
            set => fields.Description[this] = value;
        }

        [DisplayName("Picture"), Size(200), ImageUploadEditor(FilenameFormat = "Image/Product/~")]
        public String Picture
        {
            get => fields.Picture[this];
            set => fields.Picture[this] = value;
        }

        [DisplayName("Internal Code"), Size(100)]
        public String InternalCode
        {
            get => fields.InternalCode[this];
            set => fields.InternalCode[this] = value;
        }

        [DisplayName("Barcode"), Size(100)]
        public String Barcode
        {
            get => fields.Barcode[this];
            set => fields.Barcode[this] = value;
        }

        [DisplayName("Uom"), NotNull, ForeignKey("[Uom]", "Id"), LeftJoin("jUom"), TextualField("UomName")]
        [LookupEditor(typeof(UomRow), InplaceAdd = true)]
        public Int32? UomId
        {
            get => fields.UomId[this];
            set => fields.UomId[this] = value;
        }

        [DisplayName("Brand"), NotNull, ForeignKey("[Brand]", "Id"), LeftJoin("jBrand"), TextualField("BrandName")]
        [LookupEditor(typeof(BrandRow), InplaceAdd = true)]
        public Int32? BrandId
        {
            get => fields.BrandId[this];
            set => fields.BrandId[this] = value;
        }

        [DisplayName("Category"), NotNull, ForeignKey("[Category]", "Id"), LeftJoin("jCategory"), TextualField("CategoryName")]
        [LookupEditor(typeof(CategoryRow), InplaceAdd = true)]
        public Int32? CategoryId
        {
            get => fields.CategoryId[this];
            set => fields.CategoryId[this] = value;
        }

        [DisplayName("Size"), ForeignKey("[Size]", "Id"), LeftJoin("jSize"), TextualField("SizeName")]
        [LookupEditor(typeof(SizeRow), InplaceAdd = true)]
        public Int32? SizeId
        {
            get => fields.SizeId[this];
            set => fields.SizeId[this] = value;
        }

        [DisplayName("Colour"), ForeignKey("[Colour]", "Id"), LeftJoin("jColour"), TextualField("ColourName")]
        [LookupEditor(typeof(ColourRow), InplaceAdd = true)]
        public Int32? ColourId
        {
            get => fields.ColourId[this];
            set => fields.ColourId[this] = value;
        }

        [DisplayName("Flavour"), ForeignKey("[Flavour]", "Id"), LeftJoin("jFlavour"), TextualField("FlavourName")]
        [LookupEditor(typeof(FlavourRow), InplaceAdd = true)]
        public Int32? FlavourId
        {
            get => fields.FlavourId[this];
            set => fields.FlavourId[this] = value;
        }

        [DisplayName("Purchase Price"), NotNull]
        [DefaultValue(0)]
        public Double? PurchasePrice
        {
            get => fields.PurchasePrice[this];
            set => fields.PurchasePrice[this] = value;
        }

        [DisplayName("Sales Price"), NotNull]
        [DefaultValue(0)]
        public Double? SalesPrice
        {
            get => fields.SalesPrice[this];
            set => fields.SalesPrice[this] = value;
        }

        [DisplayName("Purchase Tax"), NotNull, ForeignKey("[PurchaseTax]", "Id"), LeftJoin("jPurchaseTax"), TextualField("PurchaseTaxName")]
        [LookupEditor(typeof(Settings.PurchaseTaxRow), InplaceAdd = true)]
        public Int32? PurchaseTaxId
        {
            get => fields.PurchaseTaxId[this];
            set => fields.PurchaseTaxId[this] = value;
        }

        [DisplayName("Sales Tax"), NotNull, ForeignKey("[SalesTax]", "Id"), LeftJoin("jSalesTax"), TextualField("SalesTaxName")]
        [LookupEditor(typeof(Settings.SalesTaxRow), InplaceAdd = true)]
        public Int32? SalesTaxId
        {
            get => fields.SalesTaxId[this];
            set => fields.SalesTaxId[this] = value;
        }

        [DisplayName("Uom"), Expression("jUom.[Name]")]
        public String UomName
        {
            get => fields.UomName[this];
            set => fields.UomName[this] = value;
        }

        [DisplayName("Brand"), Expression("jBrand.[Name]")]
        public String BrandName
        {
            get => fields.BrandName[this];
            set => fields.BrandName[this] = value;
        }

        [DisplayName("Category"), Expression("jCategory.[Name]")]
        public String CategoryName
        {
            get => fields.CategoryName[this];
            set => fields.CategoryName[this] = value;
        }

        [DisplayName("Size"), Expression("jSize.[Name]")]
        public String SizeName
        {
            get => fields.SizeName[this];
            set => fields.SizeName[this] = value;
        }

        [DisplayName("Colour"), Expression("jColour.[Name]")]
        public String ColourName
        {
            get => fields.ColourName[this];
            set => fields.ColourName[this] = value;
        }

        [DisplayName("Flavour"), Expression("jFlavour.[Name]")]
        public String FlavourName
        {
            get => fields.FlavourName[this];
            set => fields.FlavourName[this] = value;
        }

        [DisplayName("Purchase Tax"), Expression("jPurchaseTax.[Name]")]
        public String PurchaseTaxName
        {
            get => fields.PurchaseTaxName[this];
            set => fields.PurchaseTaxName[this] = value;
        }

        [DisplayName("Sales Tax"), Expression("jSalesTax.[Name]")]
        public String SalesTaxName
        {
            get => fields.SalesTaxName[this];
            set => fields.SalesTaxName[this] = value;
        }

        [DisplayName("Tenant"), ForeignKey("Tenant", "TenantId"), LeftJoin("jTenant")]
        [Insertable(false), Updatable(false)]
        public Int32? TenantId
        {
            get { return Fields.TenantId[this]; }
            set { Fields.TenantId[this] = value; }
        }

        [DisplayName("Tenant"), Expression("jTenant.TenantName")]
        public String TenantName
        {
            get { return Fields.TenantName[this]; }
            set { Fields.TenantName[this] = value; }
        }

        [DisplayName("Currency"), Size(10), Expression("jTenant.Currency"), Insertable(false), Updatable(false)]
        public String CurrencyName
        {
            get => fields.CurrencyName[this];
            set => fields.CurrencyName[this] = value;
        }

        public Int32Field TenantIdField
        {
            get { return Fields.TenantId; }
        }

        public ProductRow()
            : base()
        {
        }

        public ProductRow(RowFields fields)
            : base(fields)
        {
        }

        public class RowFields : LoggingRowFields
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

            public StringField UomName;

            public StringField BrandName;

            public StringField CategoryName;

            public StringField SizeName;

            public StringField ColourName;

            public StringField FlavourName;

            public StringField PurchaseTaxName;

            public StringField SalesTaxName;

            public StringField CurrencyName;

            public Int32Field TenantId;
            public StringField TenantName;
        }
    }
}
