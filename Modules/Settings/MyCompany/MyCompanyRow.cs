using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System;
using System.ComponentModel;
using System.IO;

namespace Indotalent.Settings
{
    [ConnectionKey("Default"), Module("Settings"), TableName("Tenant")]
    [DisplayName("My Company"), InstanceName("My Company")]
    [ReadPermission("Settings:MyCompany")]
    [ModifyPermission("Settings:MyCompany")]
    public sealed class MyCompanyRow : Row<MyCompanyRow.RowFields>, IIdRow, INameRow
    {
        [DisplayName("Tenant Id"), Identity, IdProperty]
        public int? TenantId
        {
            get => fields.TenantId[this];
            set => fields.TenantId[this] = value;
        }

        [DisplayName("Tenant Name"), Size(200), NotNull, QuickSearch, NameProperty]
        public string TenantName
        {
            get => fields.TenantName[this];
            set => fields.TenantName[this] = value;
        }

        [DisplayName("Description"), Size(1000)]
        public string Description
        {
            get => fields.Description[this];
            set => fields.Description[this] = value;
        }

        [DisplayName("Currency"), Size(5), NotNull]
        public string Currency
        {
            get => fields.Currency[this];
            set => fields.Currency[this] = value;
        }

        [DisplayName("Street"), Size(200)]
        public string Street
        {
            get => fields.Street[this];
            set => fields.Street[this] = value;
        }

        [DisplayName("City"), Size(200)]
        public string City
        {
            get => fields.City[this];
            set => fields.City[this] = value;
        }

        [DisplayName("State"), Size(200)]
        public string State
        {
            get => fields.State[this];
            set => fields.State[this] = value;
        }

        [DisplayName("Zip Code"), Size(50)]
        public string ZipCode
        {
            get => fields.ZipCode[this];
            set => fields.ZipCode[this] = value;
        }

        [DisplayName("Phone"), Size(50)]
        public string Phone
        {
            get => fields.Phone[this];
            set => fields.Phone[this] = value;
        }

        [DisplayName("Email"), Size(200)]
        public string Email
        {
            get => fields.Email[this];
            set => fields.Email[this] = value;
        }

        [DisplayName("Product Number Prefix"), Size(5)]
        public string ProductNumberPrefix
        {
            get => fields.ProductNumberPrefix[this];
            set => fields.ProductNumberPrefix[this] = value;
        }

        [DisplayName("Product Number Use Date")]
        public short? ProductNumberUseDate
        {
            get => fields.ProductNumberUseDate[this];
            set => fields.ProductNumberUseDate[this] = value;
        }

        [DisplayName("Product Number Length"), NotNull]
        public short? ProductNumberLength
        {
            get => fields.ProductNumberLength[this];
            set => fields.ProductNumberLength[this] = value;
        }

        [DisplayName("Customer Number Prefix"), Size(5)]
        public string CustomerNumberPrefix
        {
            get => fields.CustomerNumberPrefix[this];
            set => fields.CustomerNumberPrefix[this] = value;
        }

        [DisplayName("Customer Number Use Date")]
        public short? CustomerNumberUseDate
        {
            get => fields.CustomerNumberUseDate[this];
            set => fields.CustomerNumberUseDate[this] = value;
        }

        [DisplayName("Customer Number Length"), NotNull]
        public short? CustomerNumberLength
        {
            get => fields.CustomerNumberLength[this];
            set => fields.CustomerNumberLength[this] = value;
        }

        [DisplayName("Sales Number Prefix"), Size(5)]
        public string SalesNumberPrefix
        {
            get => fields.SalesNumberPrefix[this];
            set => fields.SalesNumberPrefix[this] = value;
        }

        [DisplayName("Sales Number Use Date")]
        public short? SalesNumberUseDate
        {
            get => fields.SalesNumberUseDate[this];
            set => fields.SalesNumberUseDate[this] = value;
        }

        [DisplayName("Sales Number Length"), NotNull]
        public short? SalesNumberLength
        {
            get => fields.SalesNumberLength[this];
            set => fields.SalesNumberLength[this] = value;
        }

        [DisplayName("Invoice Number Prefix"), Size(5)]
        public string InvoiceNumberPrefix
        {
            get => fields.InvoiceNumberPrefix[this];
            set => fields.InvoiceNumberPrefix[this] = value;
        }

        [DisplayName("Invoice Number Use Date")]
        public short? InvoiceNumberUseDate
        {
            get => fields.InvoiceNumberUseDate[this];
            set => fields.InvoiceNumberUseDate[this] = value;
        }

        [DisplayName("Invoice Number Length"), NotNull]
        public short? InvoiceNumberLength
        {
            get => fields.InvoiceNumberLength[this];
            set => fields.InvoiceNumberLength[this] = value;
        }

        [DisplayName("Invoice Payment Number Prefix"), Size(5)]
        public string InvoicePaymentNumberPrefix
        {
            get => fields.InvoicePaymentNumberPrefix[this];
            set => fields.InvoicePaymentNumberPrefix[this] = value;
        }

        [DisplayName("Invoice Payment Number Use Date")]
        public short? InvoicePaymentNumberUseDate
        {
            get => fields.InvoicePaymentNumberUseDate[this];
            set => fields.InvoicePaymentNumberUseDate[this] = value;
        }

        [DisplayName("Invoice Payment Number Length"), NotNull]
        public short? InvoicePaymentNumberLength
        {
            get => fields.InvoicePaymentNumberLength[this];
            set => fields.InvoicePaymentNumberLength[this] = value;
        }

        [DisplayName("Vendor Number Prefix"), Size(5)]
        public string VendorNumberPrefix
        {
            get => fields.VendorNumberPrefix[this];
            set => fields.VendorNumberPrefix[this] = value;
        }

        [DisplayName("Vendor Number Use Date")]
        public short? VendorNumberUseDate
        {
            get => fields.VendorNumberUseDate[this];
            set => fields.VendorNumberUseDate[this] = value;
        }

        [DisplayName("Vendor Number Length"), NotNull]
        public short? VendorNumberLength
        {
            get => fields.VendorNumberLength[this];
            set => fields.VendorNumberLength[this] = value;
        }

        [DisplayName("Purchase Number Prefix"), Size(5)]
        public string PurchaseNumberPrefix
        {
            get => fields.PurchaseNumberPrefix[this];
            set => fields.PurchaseNumberPrefix[this] = value;
        }

        [DisplayName("Purchase Number Use Date")]
        public short? PurchaseNumberUseDate
        {
            get => fields.PurchaseNumberUseDate[this];
            set => fields.PurchaseNumberUseDate[this] = value;
        }

        [DisplayName("Purchase Number Length"), NotNull]
        public short? PurchaseNumberLength
        {
            get => fields.PurchaseNumberLength[this];
            set => fields.PurchaseNumberLength[this] = value;
        }

        [DisplayName("Bill Number Prefix"), Size(5)]
        public string BillNumberPrefix
        {
            get => fields.BillNumberPrefix[this];
            set => fields.BillNumberPrefix[this] = value;
        }

        [DisplayName("Bill Number Use Date")]
        public short? BillNumberUseDate
        {
            get => fields.BillNumberUseDate[this];
            set => fields.BillNumberUseDate[this] = value;
        }

        [DisplayName("Bill Number Length"), NotNull]
        public short? BillNumberLength
        {
            get => fields.BillNumberLength[this];
            set => fields.BillNumberLength[this] = value;
        }

        [DisplayName("Bill Payment Number Prefix"), Size(5)]
        public string BillPaymentNumberPrefix
        {
            get => fields.BillPaymentNumberPrefix[this];
            set => fields.BillPaymentNumberPrefix[this] = value;
        }

        [DisplayName("Bill Payment Number Use Date")]
        public short? BillPaymentNumberUseDate
        {
            get => fields.BillPaymentNumberUseDate[this];
            set => fields.BillPaymentNumberUseDate[this] = value;
        }

        [DisplayName("Bill Payment Number Length"), NotNull]
        public short? BillPaymentNumberLength
        {
            get => fields.BillPaymentNumberLength[this];
            set => fields.BillPaymentNumberLength[this] = value;
        }

        [DisplayName("Maximum User"), NotNull]
        public int? MaximumUser
        {
            get => fields.MaximumUser[this];
            set => fields.MaximumUser[this] = value;
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

        public MyCompanyRow()
            : base()
        {
        }

        public MyCompanyRow(RowFields fields)
            : base(fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field TenantId;
            public StringField TenantName;
            public StringField Description;
            public StringField Currency;
            public StringField Street;
            public StringField City;
            public StringField State;
            public StringField ZipCode;
            public StringField Phone;
            public StringField Email;
            public StringField ProductNumberPrefix;
            public Int16Field ProductNumberUseDate;
            public Int16Field ProductNumberLength;
            public StringField CustomerNumberPrefix;
            public Int16Field CustomerNumberUseDate;
            public Int16Field CustomerNumberLength;
            public StringField SalesNumberPrefix;
            public Int16Field SalesNumberUseDate;
            public Int16Field SalesNumberLength;
            public StringField InvoiceNumberPrefix;
            public Int16Field InvoiceNumberUseDate;
            public Int16Field InvoiceNumberLength;
            public StringField InvoicePaymentNumberPrefix;
            public Int16Field InvoicePaymentNumberUseDate;
            public Int16Field InvoicePaymentNumberLength;
            public StringField VendorNumberPrefix;
            public Int16Field VendorNumberUseDate;
            public Int16Field VendorNumberLength;
            public StringField PurchaseNumberPrefix;
            public Int16Field PurchaseNumberUseDate;
            public Int16Field PurchaseNumberLength;
            public StringField BillNumberPrefix;
            public Int16Field BillNumberUseDate;
            public Int16Field BillNumberLength;
            public StringField BillPaymentNumberPrefix;
            public Int16Field BillPaymentNumberUseDate;
            public Int16Field BillPaymentNumberLength;
            public Int32Field MaximumUser;
            public DateTimeField InsertDate;
            public Int32Field InsertUserId;
            public DateTimeField UpdateDate;
            public Int32Field UpdateUserId;
        }
    }
}
