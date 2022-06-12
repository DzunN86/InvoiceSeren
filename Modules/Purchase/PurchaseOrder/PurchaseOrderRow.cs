using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using Serenity.Extensions.Entities;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.IO;

namespace Indotalent.Purchase
{
    [ConnectionKey("Default"), Module("Purchase"), TableName("[PurchaseOrder]")]
    [DisplayName("Purchase Orders"), InstanceName("Purchase Order")]
    [LookupScript(LookupType = typeof(MultiTenantRowLookupScript<>))]
    [ReadPermission("Purchase:PurchaseOrder")]
    [ModifyPermission("Purchase:PurchaseOrder")]
    public sealed class PurchaseOrderRow : LoggingRow<PurchaseOrderRow.RowFields>, IIdRow, INameRow, IMultiTenantRow
    {
        [DisplayName("Id"), Identity, IdProperty]
        public Int32? Id
        {
            get => fields.Id[this];
            set => fields.Id[this] = value;
        }

        [DisplayName("Number"), Size(200), NotNull, QuickSearch, NameProperty]
        [Insertable(false), Updatable(false)]
        [DefaultValue("auto")]
        public String Number
        {
            get => fields.Number[this];
            set => fields.Number[this] = value;
        }

        [DisplayName("Description"), Size(1000)]
        public String Description
        {
            get => fields.Description[this];
            set => fields.Description[this] = value;
        }

        [DisplayName("Order Date"), NotNull]
        public DateTime? OrderDate
        {
            get => fields.OrderDate[this];
            set => fields.OrderDate[this] = value;
        }

        [DisplayName("Vendor"), NotNull, ForeignKey("[Vendor]", "Id"), LeftJoin("jVendor"), TextualField("VendorName")]
        [LookupEditor(typeof(VendorRow), InplaceAdd = true)]
        public Int32? VendorId
        {
            get => fields.VendorId[this];
            set => fields.VendorId[this] = value;
        }

        [DisplayName("Sub Total"), NotNull]
        [DefaultValue(0), Insertable(false), Updatable(false)]
        public Double? SubTotal
        {
            get => fields.SubTotal[this];
            set => fields.SubTotal[this] = value;
        }

        [DisplayName("Discount"), NotNull]
        [DefaultValue(0), Insertable(false), Updatable(false)]
        public Double? Discount
        {
            get => fields.Discount[this];
            set => fields.Discount[this] = value;
        }

        [DisplayName("Before Tax"), NotNull]
        [DefaultValue(0), Insertable(false), Updatable(false)]
        public Double? BeforeTax
        {
            get => fields.BeforeTax[this];
            set => fields.BeforeTax[this] = value;
        }

        [DisplayName("Tax Amount"), NotNull]
        [DefaultValue(0), Insertable(false), Updatable(false)]
        public Double? TaxAmount
        {
            get => fields.TaxAmount[this];
            set => fields.TaxAmount[this] = value;
        }

        [DisplayName("Total"), NotNull, DecimalEditor(Decimals = 2, MinValue = 0), DisplayFormat("#,##0.##")]
        [DefaultValue(0), Insertable(false), Updatable(false)]
        public Double? Total
        {
            get => fields.Total[this];
            set => fields.Total[this] = value;
        }

        [DisplayName("Other Charge"), NotNull]
        [DefaultValue(0)]
        public Double? OtherCharge
        {
            get => fields.OtherCharge[this];
            set => fields.OtherCharge[this] = value;
        }

        [DisplayName("Vendor Name"), Expression("jVendor.[Name]")]
        [Insertable(false), Updatable(false)]
        public String VendorName
        {
            get => fields.VendorName[this];
            set => fields.VendorName[this] = value;
        }

        [DisplayName("Vendor Street"), Expression("jVendor.[Street]")]
        [Insertable(false), Updatable(false)]
        public String VendorStreet
        {
            get => fields.VendorStreet[this];
            set => fields.VendorStreet[this] = value;
        }

        [DisplayName("Vendor City"), Expression("jVendor.[City]")]
        [Insertable(false), Updatable(false)]
        public String VendorCity
        {
            get => fields.VendorCity[this];
            set => fields.VendorCity[this] = value;
        }

        [DisplayName("Vendor State"), Expression("jVendor.[State]")]
        [Insertable(false), Updatable(false)]
        public String VendorState
        {
            get => fields.VendorState[this];
            set => fields.VendorState[this] = value;
        }

        [DisplayName("Vendor Zip Code"), Expression("jVendor.[ZipCode]")]
        [Insertable(false), Updatable(false)]
        public String VendorZipCode
        {
            get => fields.VendorZipCode[this];
            set => fields.VendorZipCode[this] = value;
        }

        [DisplayName("Vendor Phone"), Expression("jVendor.[Phone]")]
        [Insertable(false), Updatable(false)]
        public String VendorPhone
        {
            get => fields.VendorPhone[this];
            set => fields.VendorPhone[this] = value;
        }

        [DisplayName("Vendor Email"), Expression("jVendor.[Email]")]
        [Insertable(false), Updatable(false)]
        public String VendorEmail
        {
            get => fields.VendorEmail[this];
            set => fields.VendorEmail[this] = value;
        }

        [DisplayName("Items"), MasterDetailRelation(foreignKey: "PurchaseOrderId"), NotMapped]
        public List<PurchaseOrderDetailRow> ItemList
        {
            get => fields.ItemList[this];
            set => fields.ItemList[this] = value;
        }

        [DisplayName("Bills"), MasterDetailRelation(foreignKey: "PurchaseOrderId"), NotMapped]
        public List<BillRow> BillList
        {
            get => fields.BillList[this];
            set => fields.BillList[this] = value;
        }

        [DisplayName("Procurement Group"), Size(200)]
        public String ProcurementGroup
        {
            get => fields.ProcurementGroup[this];
            set => fields.ProcurementGroup[this] = value;
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

        public PurchaseOrderRow()
            : base()
        {
        }

        public PurchaseOrderRow(RowFields fields)
            : base(fields)
        {
        }

        public class RowFields : LoggingRowFields
        {
            public Int32Field Id;
            public StringField Number;
            public StringField ProcurementGroup;
            public StringField Description;
            public DateTimeField OrderDate;
            public Int32Field VendorId;
            public DoubleField SubTotal;
            public DoubleField Discount;
            public DoubleField BeforeTax;
            public DoubleField TaxAmount;
            public DoubleField Total;
            public DoubleField OtherCharge;

            public StringField VendorName;
            public StringField VendorStreet;
            public StringField VendorCity;
            public StringField VendorState;
            public StringField VendorZipCode;
            public StringField VendorPhone;
            public StringField VendorEmail;

            public StringField CurrencyName;
            public Int32Field TenantId;
            public StringField TenantName;

            public RowListField<PurchaseOrderDetailRow> ItemList;
            public RowListField<BillRow> BillList;
        }
    }
}
