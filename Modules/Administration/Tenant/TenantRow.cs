using Indotalent.Administration.Entities;
using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System;
using System.ComponentModel;
using System.IO;

namespace Indotalent.Administration
{
    [ConnectionKey("Default"), Module("Administration"), TableName("[Tenant]")]
    [DisplayName("Tenant"), InstanceName("Tenant"), TwoLevelCached]
    [ReadPermission(PermissionKeys.Tenant)]
    [ModifyPermission(PermissionKeys.Tenant)]
    [LookupScript("Administration.Tenant")]
    public sealed class TenantRow : LoggingRow<TenantRow.RowFields>, IIdRow, INameRow
    {
        [DisplayName("Tenant Id"), Identity, IdProperty]
        public Int32? TenantId
        {
            get => fields.TenantId[this];
            set => fields.TenantId[this] = value;
        }

        [DisplayName("Tenant Name"), Size(100), NotNull, QuickSearch, NameProperty]
        public String TenantName
        {
            get => fields.TenantName[this];
            set => fields.TenantName[this] = value;
        }

        [DisplayName("Description"), Size(1000)]
        public String Description
        {
            get => fields.Description[this];
            set => fields.Description[this] = value;
        }

        [DisplayName("Street"), Size(200)]
        public String Street
        {
            get => fields.Street[this];
            set => fields.Street[this] = value;
        }

        [DisplayName("City"), Size(200)]
        public String City
        {
            get => fields.City[this];
            set => fields.City[this] = value;
        }

        [DisplayName("State"), Size(200)]
        public String State
        {
            get => fields.State[this];
            set => fields.State[this] = value;
        }

        [DisplayName("Zip Code"), Size(50)]
        public String ZipCode
        {
            get => fields.ZipCode[this];
            set => fields.ZipCode[this] = value;
        }

        [DisplayName("Phone"), Size(50)]
        public String Phone
        {
            get => fields.Phone[this];
            set => fields.Phone[this] = value;
        }

        [DisplayName("Email"), Size(200)]
        public String Email
        {
            get => fields.Email[this];
            set => fields.Email[this] = value;
        }

        [DisplayName("Currency"), NotNull, Size(5)]
        public String Currency
        {
            get => fields.Currency[this];
            set => fields.Currency[this] = value;
        }

        [DisplayName("User Max"), NotNull]
        public Int32? MaximumUser
        {
            get => fields.MaximumUser[this];
            set => fields.MaximumUser[this] = value;
        }



        [DisplayName("Product Prefix"), Size(5), DefaultValue("ART")]
        public String ProductNumberPrefix
        {
            get => fields.ProductNumberPrefix[this];
            set => fields.ProductNumberPrefix[this] = value;
        }

        [DisplayName("Product Use Date"), DefaultValue(false)]
        public Boolean? ProductNumberUseDate
        {
            get => fields.ProductNumberUseDate[this];
            set => fields.ProductNumberUseDate[this] = value;
        }

        [DisplayName("Product Length"), DefaultValue(16), NotNull, IntegerEditor(MinValue = 2, MaxValue = 50)]
        public Int16? ProductNumberLength
        {
            get => fields.ProductNumberLength[this];
            set => fields.ProductNumberLength[this] = value;
        }

        [DisplayName("Customer Prefix"), Size(5), DefaultValue("CST")]
        public String CustomerNumberPrefix
        {
            get => fields.CustomerNumberPrefix[this];
            set => fields.CustomerNumberPrefix[this] = value;
        }

        [DisplayName("Customer Use Date"), DefaultValue(true)]
        public Boolean? CustomerNumberUseDate
        {
            get => fields.CustomerNumberUseDate[this];
            set => fields.CustomerNumberUseDate[this] = value;
        }

        [DisplayName("Customer Length"), DefaultValue(16), NotNull, IntegerEditor(MinValue = 2, MaxValue = 50)]
        public Int16? CustomerNumberLength
        {
            get => fields.CustomerNumberLength[this];
            set => fields.CustomerNumberLength[this] = value;
        }

        [DisplayName("Sales Prefix"), Size(5), DefaultValue("SO")]
        public String SalesNumberPrefix
        {
            get => fields.SalesNumberPrefix[this];
            set => fields.SalesNumberPrefix[this] = value;
        }

        [DisplayName("Sales Use Date"), DefaultValue(true)]
        public Boolean? SalesNumberUseDate
        {
            get => fields.SalesNumberUseDate[this];
            set => fields.SalesNumberUseDate[this] = value;
        }

        [DisplayName("Sales Length"), DefaultValue(16), NotNull, IntegerEditor(MinValue = 2, MaxValue = 50)]
        public Int16? SalesNumberLength
        {
            get => fields.SalesNumberLength[this];
            set => fields.SalesNumberLength[this] = value;
        }

        [DisplayName("Invoice Prefix"), Size(5), DefaultValue("INV")]
        public String InvoiceNumberPrefix
        {
            get => fields.InvoiceNumberPrefix[this];
            set => fields.InvoiceNumberPrefix[this] = value;
        }

        [DisplayName("Invoice Use Date"), DefaultValue(true)]
        public Boolean? InvoiceNumberUseDate
        {
            get => fields.InvoiceNumberUseDate[this];
            set => fields.InvoiceNumberUseDate[this] = value;
        }

        [DisplayName("Invoice Length"), DefaultValue(16), NotNull, IntegerEditor(MinValue = 2, MaxValue = 50)]
        public Int16? InvoiceNumberLength
        {
            get => fields.InvoiceNumberLength[this];
            set => fields.InvoiceNumberLength[this] = value;
        }

        [DisplayName("Invoice Payment Prefix"), Size(5), DefaultValue("IVPY")]
        public String InvoicePaymentNumberPrefix
        {
            get => fields.InvoicePaymentNumberPrefix[this];
            set => fields.InvoicePaymentNumberPrefix[this] = value;
        }

        [DisplayName("Invoice Payment Use Date"), DefaultValue(true)]
        public Boolean? InvoicePaymentNumberUseDate
        {
            get => fields.InvoicePaymentNumberUseDate[this];
            set => fields.InvoicePaymentNumberUseDate[this] = value;
        }

        [DisplayName("Invoice Payment Length"), DefaultValue(16), NotNull, IntegerEditor(MinValue = 2, MaxValue = 50)]
        public Int16? InvoicePaymentNumberLength
        {
            get => fields.InvoicePaymentNumberLength[this];
            set => fields.InvoicePaymentNumberLength[this] = value;
        }

        [DisplayName("Vendor Prefix"), Size(5), DefaultValue("VND")]
        public String VendorNumberPrefix
        {
            get => fields.VendorNumberPrefix[this];
            set => fields.VendorNumberPrefix[this] = value;
        }

        [DisplayName("Vendor Use Date"), DefaultValue(true)]
        public Boolean? VendorNumberUseDate
        {
            get => fields.VendorNumberUseDate[this];
            set => fields.VendorNumberUseDate[this] = value;
        }

        [DisplayName("Vendor Length"), DefaultValue(16), NotNull, IntegerEditor(MinValue = 2, MaxValue = 50)]
        public Int16? VendorNumberLength
        {
            get => fields.VendorNumberLength[this];
            set => fields.VendorNumberLength[this] = value;
        }

        [DisplayName("Purchase Prefix"), Size(5), DefaultValue("PO")]
        public String PurchaseNumberPrefix
        {
            get => fields.PurchaseNumberPrefix[this];
            set => fields.PurchaseNumberPrefix[this] = value;
        }

        [DisplayName("Purchase Use Date"), DefaultValue(true)]
        public Boolean? PurchaseNumberUseDate
        {
            get => fields.PurchaseNumberUseDate[this];
            set => fields.PurchaseNumberUseDate[this] = value;
        }

        [DisplayName("Purchase Length"), DefaultValue(16), NotNull, IntegerEditor(MinValue = 2, MaxValue = 50)]
        public Int16? PurchaseNumberLength
        {
            get => fields.PurchaseNumberLength[this];
            set => fields.PurchaseNumberLength[this] = value;
        }

        [DisplayName("Bill Prefix"), Size(5), DefaultValue("BLL")]
        public String BillNumberPrefix
        {
            get => fields.BillNumberPrefix[this];
            set => fields.BillNumberPrefix[this] = value;
        }

        [DisplayName("Bill Use Date"), DefaultValue(true)]
        public Boolean? BillNumberUseDate
        {
            get => fields.BillNumberUseDate[this];
            set => fields.BillNumberUseDate[this] = value;
        }

        [DisplayName("Bill Length"), DefaultValue(16), NotNull, IntegerEditor(MinValue = 2, MaxValue = 50)]
        public Int16? BillNumberLength
        {
            get => fields.BillNumberLength[this];
            set => fields.BillNumberLength[this] = value;
        }

        [DisplayName("Bill Payment Prefix"), Size(5), DefaultValue("BLPY")]
        public String BillPaymentNumberPrefix
        {
            get => fields.BillPaymentNumberPrefix[this];
            set => fields.BillPaymentNumberPrefix[this] = value;
        }

        [DisplayName("Bill Payment Use Date"), DefaultValue(true)]
        public Boolean? BillPaymentNumberUseDate
        {
            get => fields.BillPaymentNumberUseDate[this];
            set => fields.BillPaymentNumberUseDate[this] = value;
        }

        [DisplayName("Bill Payment Length"), DefaultValue(16), NotNull, IntegerEditor(MinValue = 2, MaxValue = 50)]
        public Int16? BillPaymentNumberLength
        {
            get => fields.BillPaymentNumberLength[this];
            set => fields.BillPaymentNumberLength[this] = value;
        }

        public TenantRow()
            : base()
        {
        }

        public TenantRow(RowFields fields)
            : base(fields)
        {
        }

        public class RowFields : LoggingRowFields
        {
            public Int32Field TenantId;
            public StringField TenantName;
            public StringField Description;
            public StringField Street;
            public StringField City;
            public StringField State;
            public StringField ZipCode;
            public StringField Phone;
            public StringField Email;
            public StringField Currency;
            public Int32Field MaximumUser;

            public StringField ProductNumberPrefix;
            public BooleanField ProductNumberUseDate;
            public Int16Field ProductNumberLength;
            public StringField CustomerNumberPrefix;
            public BooleanField CustomerNumberUseDate;
            public Int16Field CustomerNumberLength;
            public StringField SalesNumberPrefix;
            public BooleanField SalesNumberUseDate;
            public Int16Field SalesNumberLength;
            public StringField InvoiceNumberPrefix;
            public BooleanField InvoiceNumberUseDate;
            public Int16Field InvoiceNumberLength;
            public StringField InvoicePaymentNumberPrefix;
            public BooleanField InvoicePaymentNumberUseDate;
            public Int16Field InvoicePaymentNumberLength;
            public StringField VendorNumberPrefix;
            public BooleanField VendorNumberUseDate;
            public Int16Field VendorNumberLength;
            public StringField PurchaseNumberPrefix;
            public BooleanField PurchaseNumberUseDate;
            public Int16Field PurchaseNumberLength;
            public StringField BillNumberPrefix;
            public BooleanField BillNumberUseDate;
            public Int16Field BillNumberLength;
            public StringField BillPaymentNumberPrefix;
            public BooleanField BillPaymentNumberUseDate;
            public Int16Field BillPaymentNumberLength;
        }
    }
}
