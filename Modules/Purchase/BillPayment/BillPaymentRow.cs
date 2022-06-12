using Indotalent.Settings;
using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using Serenity.Extensions.Entities;
using System;
using System.ComponentModel;
using System.IO;

namespace Indotalent.Purchase
{
    [ConnectionKey("Default"), Module("Purchase"), TableName("[BillPayment]")]
    [DisplayName("Bill Payments"), InstanceName("Bill Payment")]
    [LookupScript(LookupType = typeof(MultiTenantRowLookupScript<>))]
    [ReadPermission("Purchase:BillPayment")]
    [ModifyPermission("Purchase:BillPayment")]
    public sealed class BillPaymentRow : LoggingRow<BillPaymentRow.RowFields>, IIdRow, INameRow, IMultiTenantRow
    {
        [DisplayName("Id"), Identity, IdProperty]
        public Int32? Id
        {
            get => fields.Id[this];
            set => fields.Id[this] = value;
        }

        [DisplayName("Bill#"), NotNull, ForeignKey("[Bill]", "Id"), LeftJoin("jBill"), TextualField("BillNumber")]
        [LookupEditor(typeof(BillRow))]
        [Updatable(false)]
        public Int32? BillId
        {
            get => fields.BillId[this];
            set => fields.BillId[this] = value;
        }

        [DisplayName("Bill#"), Expression("jBill.[Number]"), MinSelectLevel(SelectLevel.List)]
        [Insertable(false), Updatable(false)]
        public String BillNumber
        {
            get => fields.BillNumber[this];
            set => fields.BillNumber[this] = value;
        }

        [DisplayName("Payment#"), Size(200), NotNull, QuickSearch, NameProperty]
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

        [DisplayName("Payment Date"), NotNull]
        public DateTime? PaymentDate
        {
            get => fields.PaymentDate[this];
            set => fields.PaymentDate[this] = value;
        }

        [DisplayName("Cash Bank"), NotNull, ForeignKey("[CashBank]", "Id"), LeftJoin("jCashBank"), TextualField("CashBankName")]
        [LookupEditor(typeof(CashBankRow), InplaceAdd = true)]
        public Int32? CashBankId
        {
            get => fields.CashBankId[this];
            set => fields.CashBankId[this] = value;
        }

        [DisplayName("Cash Bank"), Expression("jCashBank.[Name]"), MinSelectLevel(SelectLevel.List)]
        [Insertable(false), Updatable(false)]
        public String CashBankName
        {
            get => fields.CashBankName[this];
            set => fields.CashBankName[this] = value;
        }

        [DisplayName("Bill Amount"), NotNull]
        [DefaultValue(0), Updatable(false)]
        public Double? BillAmount
        {
            get => fields.BillAmount[this];
            set => fields.BillAmount[this] = value;
        }

        [DisplayName("Payment Amount"), NotNull, DecimalEditor(Decimals = 2, MinValue = 0), DisplayFormat("#,##0.##")]
        [DefaultValue(0)]
        public Double? PaymentAmount
        {
            get => fields.PaymentAmount[this];
            set => fields.PaymentAmount[this] = value;
        }

        [DisplayName("Purchase Order"), Expression("jBill.[PurchaseOrderId]"), ForeignKey("[PurchaseOrder]", "Id"), LeftJoin("jPurchaseOrder")]
        public Int32? PurchaseOrderId
        {
            get => fields.PurchaseOrderId[this];
            set => fields.PurchaseOrderId[this] = value;
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

        [DisplayName("Currency"), Size(10), Expression("jTenant.Currency"), Insertable(false), Updatable(false), MinSelectLevel(SelectLevel.List)]
        public String CurrencyName
        {
            get => fields.CurrencyName[this];
            set => fields.CurrencyName[this] = value;
        }

        public Int32Field TenantIdField
        {
            get { return Fields.TenantId; }
        }

        public BillPaymentRow()
            : base()
        {
        }

        public BillPaymentRow(RowFields fields)
            : base(fields)
        {
        }

        public class RowFields : LoggingRowFields
        {
            public Int32Field Id;
            public Int32Field BillId;
            public StringField Number;
            public StringField Description;
            public DateTimeField PaymentDate;
            public Int32Field CashBankId;
            public DoubleField BillAmount;
            public DoubleField PaymentAmount;

            public StringField BillNumber;
            public StringField CashBankName;

            public Int32Field PurchaseOrderId;

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

        }
    }
}
