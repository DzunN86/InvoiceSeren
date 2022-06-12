using Indotalent.Purchase;
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
    [ConnectionKey("Default"), Module("Purchase"), TableName("[Bill]")]
    [DisplayName("Bills"), InstanceName("Bill")]
    [LookupScript(LookupType = typeof(MultiTenantRowLookupScript<>))]
    [ReadPermission("Purchase:Bill")]
    [ModifyPermission("Purchase:Bill")]
    public sealed class BillRow : LoggingRow<BillRow.RowFields>, IIdRow, INameRow, IMultiTenantRow
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

        [DisplayName("External Reference Number"), Size(200)]
        public String ExternalReferenceNumber
        {
            get => fields.ExternalReferenceNumber[this];
            set => fields.ExternalReferenceNumber[this] = value;
        }

        [DisplayName("Bill Date"), NotNull]
        public DateTime? BillDate
        {
            get => fields.BillDate[this];
            set => fields.BillDate[this] = value;
        }

        [DisplayName("Purchase Order"), NotNull, ForeignKey("[PurchaseOrder]", "Id"), LeftJoin("jPurchaseOrder"), TextualField("PurchaseOrderNumber")]
        [LookupEditor(typeof(PurchaseOrderRow))]
        [Updatable(false)]
        public Int32? PurchaseOrderId
        {
            get => fields.PurchaseOrderId[this];
            set => fields.PurchaseOrderId[this] = value;
        }

        [DisplayName("Purchase Order"), Expression("jPurchaseOrder.[Number]"), MinSelectLevel(SelectLevel.List)]
        [Insertable(false), Updatable(false)]
        public String PurchaseOrderNumber
        {
            get => fields.PurchaseOrderNumber[this];
            set => fields.PurchaseOrderNumber[this] = value;
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


        [DisplayName("Vendor"), Expression("jPurchaseOrder.[VendorId]"), ForeignKey("[Vendor]", "Id"), LeftJoin("jVendor")]
        public Int32? VendorId
        {
            get => fields.VendorId[this];
            set => fields.VendorId[this] = value;
        }

        [DisplayName("Vendor Name"), Expression("jVendor.[Name]"), MinSelectLevel(SelectLevel.List)]
        [Insertable(false), Updatable(false)]
        public String VendorName
        {
            get => fields.VendorName[this];
            set => fields.VendorName[this] = value;
        }

        [DisplayName("Vendor Street"), Expression("jVendor.[Street]"), MinSelectLevel(SelectLevel.List)]
        [Insertable(false), Updatable(false)]
        public String VendorStreet
        {
            get => fields.VendorStreet[this];
            set => fields.VendorStreet[this] = value;
        }

        [DisplayName("Vendor City"), Expression("jVendor.[City]"), MinSelectLevel(SelectLevel.List)]
        [Insertable(false), Updatable(false)]
        public String VendorCity
        {
            get => fields.VendorCity[this];
            set => fields.VendorCity[this] = value;
        }

        [DisplayName("Vendor State"), Expression("jVendor.[State]"), MinSelectLevel(SelectLevel.List)]
        [Insertable(false), Updatable(false)]
        public String VendorState
        {
            get => fields.VendorState[this];
            set => fields.VendorState[this] = value;
        }

        [DisplayName("Vendor Zip Code"), Expression("jVendor.[ZipCode]"), MinSelectLevel(SelectLevel.List)]
        [Insertable(false), Updatable(false)]
        public String VendorZipCode
        {
            get => fields.VendorZipCode[this];
            set => fields.VendorZipCode[this] = value;
        }

        [DisplayName("Vendor Phone"), Expression("jVendor.[Phone]"), MinSelectLevel(SelectLevel.List)]
        [Insertable(false), Updatable(false)]
        public String VendorPhone
        {
            get => fields.VendorPhone[this];
            set => fields.VendorPhone[this] = value;
        }

        [DisplayName("Vendor Email"), Expression("jVendor.[Email]"), MinSelectLevel(SelectLevel.List)]
        [Insertable(false), Updatable(false)]
        public String VendorEmail
        {
            get => fields.VendorEmail[this];
            set => fields.VendorEmail[this] = value;
        }

        [DisplayName("Items"), MasterDetailRelation(foreignKey: "BillId"), MinSelectLevel(SelectLevel.List), NotMapped]
        public List<BillDetailRow> ItemList
        {
            get => fields.ItemList[this];
            set => fields.ItemList[this] = value;
        }

        [DisplayName("Bill Payments"), MasterDetailRelation(foreignKey: "BillId"), NotMapped]
        public List<BillPaymentRow> BillPaymentList
        {
            get => fields.BillPaymentList[this];
            set => fields.BillPaymentList[this] = value;
        }

        [DisplayName("Procurement"), Size(200)]
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

        [DisplayName("Currency"), Size(10), Expression("jTenant.Currency"), MinSelectLevel(SelectLevel.List), Insertable(false), Updatable(false)]
        public String CurrencyName
        {
            get => fields.CurrencyName[this];
            set => fields.CurrencyName[this] = value;
        }

        public Int32Field TenantIdField
        {
            get { return Fields.TenantId; }
        }

        public BillRow()
            : base()
        {
        }

        public BillRow(RowFields fields)
            : base(fields)
        {
        }

        public class RowFields : LoggingRowFields
        {
            public Int32Field Id;
            public StringField Number;
            public StringField Description;
            public StringField ExternalReferenceNumber;
            public DateTimeField BillDate;
            public Int32Field PurchaseOrderId;
            public StringField PurchaseOrderNumber;
            public DoubleField SubTotal;
            public DoubleField Discount;
            public DoubleField BeforeTax;
            public DoubleField TaxAmount;
            public DoubleField Total;
            public DoubleField OtherCharge;

            public Int32Field VendorId;
            public StringField VendorName;
            public StringField VendorStreet;
            public StringField VendorCity;
            public StringField VendorState;
            public StringField VendorZipCode;
            public StringField VendorPhone;
            public StringField VendorEmail;
            public StringField ProcurementGroup;

            public StringField CurrencyName;
            public Int32Field TenantId;
            public StringField TenantName;

            public RowListField<BillDetailRow> ItemList;
            public RowListField<BillPaymentRow> BillPaymentList;

        }
    }
}
