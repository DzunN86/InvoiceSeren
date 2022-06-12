using Indotalent.Settings;
using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using Serenity.Extensions.Entities;
using System;
using System.ComponentModel;
using System.IO;

namespace Indotalent.Sales
{
    [ConnectionKey("Default"), Module("Sales"), TableName("[InvoicePayment]")]
    [DisplayName("Invoice Payments"), InstanceName("Invoice Payment")]
    [LookupScript(LookupType = typeof(MultiTenantRowLookupScript<>))]
    [ReadPermission("Sales:InvoicePayment")]
    [ModifyPermission("Sales:InvoicePayment")]
    public sealed class InvoicePaymentRow : LoggingRow<InvoicePaymentRow.RowFields>, IIdRow, INameRow, IMultiTenantRow
    {
        [DisplayName("Id"), Identity, IdProperty]
        public Int32? Id
        {
            get => fields.Id[this];
            set => fields.Id[this] = value;
        }

        [DisplayName("Invoice#"), NotNull, ForeignKey("[Invoice]", "Id"), LeftJoin("jInvoice"), TextualField("InvoiceNumber")]
        [LookupEditor(typeof(InvoiceRow))]
        [Updatable(false)]
        public Int32? InvoiceId
        {
            get => fields.InvoiceId[this];
            set => fields.InvoiceId[this] = value;
        }

        [DisplayName("Invoice#"), Expression("jInvoice.[Number]"), MinSelectLevel(SelectLevel.List)]
        [Insertable(false), Updatable(false)]
        public String InvoiceNumber
        {
            get => fields.InvoiceNumber[this];
            set => fields.InvoiceNumber[this] = value;
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

        [DisplayName("Invoice Amount"), NotNull]
        [DefaultValue(0), Updatable(false)]
        public Double? InvoiceAmount
        {
            get => fields.InvoiceAmount[this];
            set => fields.InvoiceAmount[this] = value;
        }

        [DisplayName("Payment Amount"), DecimalEditor(Decimals = 2, MinValue = 0), DisplayFormat("#,##0.##"), NotNull]
        [DefaultValue(0)]
        public Double? PaymentAmount
        {
            get => fields.PaymentAmount[this];
            set => fields.PaymentAmount[this] = value;
        }

        [DisplayName("Sales Order"), Expression("jInvoice.[SalesOrderId]"), ForeignKey("[SalesOrder]", "Id"), LeftJoin("jSalesOrder")]
        public Int32? SalesOrderId
        {
            get => fields.SalesOrderId[this];
            set => fields.SalesOrderId[this] = value;
        }

        [DisplayName("Customer"), Expression("jSalesOrder.[CustomerId]"), ForeignKey("[Customer]", "Id"), LeftJoin("jCustomer")]
        public Int32? CustomerId
        {
            get => fields.CustomerId[this];
            set => fields.CustomerId[this] = value;
        }

        [DisplayName("Customer Name"), Expression("jCustomer.[Name]"), MinSelectLevel(SelectLevel.List)]
        [Insertable(false), Updatable(false)]
        public String CustomerName
        {
            get => fields.CustomerName[this];
            set => fields.CustomerName[this] = value;
        }

        [DisplayName("Customer Street"), Expression("jCustomer.[Street]"), MinSelectLevel(SelectLevel.List)]
        [Insertable(false), Updatable(false)]
        public String CustomerStreet
        {
            get => fields.CustomerStreet[this];
            set => fields.CustomerStreet[this] = value;
        }

        [DisplayName("Customer City"), Expression("jCustomer.[City]"), MinSelectLevel(SelectLevel.List)]
        [Insertable(false), Updatable(false)]
        public String CustomerCity
        {
            get => fields.CustomerCity[this];
            set => fields.CustomerCity[this] = value;
        }

        [DisplayName("Customer State"), Expression("jCustomer.[State]"), MinSelectLevel(SelectLevel.List)]
        [Insertable(false), Updatable(false)]
        public String CustomerState
        {
            get => fields.CustomerState[this];
            set => fields.CustomerState[this] = value;
        }

        [DisplayName("Customer Zip Code"), Expression("jCustomer.[ZipCode]"), MinSelectLevel(SelectLevel.List)]
        [Insertable(false), Updatable(false)]
        public String CustomerZipCode
        {
            get => fields.CustomerZipCode[this];
            set => fields.CustomerZipCode[this] = value;
        }

        [DisplayName("Customer Phone"), Expression("jCustomer.[Phone]"), MinSelectLevel(SelectLevel.List)]
        [Insertable(false), Updatable(false)]
        public String CustomerPhone
        {
            get => fields.CustomerPhone[this];
            set => fields.CustomerPhone[this] = value;
        }

        [DisplayName("Customer Email"), Expression("jCustomer.[Email]"), MinSelectLevel(SelectLevel.List)]
        [Insertable(false), Updatable(false)]
        public String CustomerEmail
        {
            get => fields.CustomerEmail[this];
            set => fields.CustomerEmail[this] = value;
        }

        [DisplayName("Sales"), Size(200)]
        public String SalesGroup
        {
            get => fields.SalesGroup[this];
            set => fields.SalesGroup[this] = value;
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

        public InvoicePaymentRow()
            : base()
        {
        }

        public InvoicePaymentRow(RowFields fields)
            : base(fields)
        {
        }

        public class RowFields : LoggingRowFields
        {
            public Int32Field Id;
            public Int32Field InvoiceId;
            public StringField Number;
            public StringField Description;
            public DateTimeField PaymentDate;
            public Int32Field CashBankId;
            public DoubleField InvoiceAmount;
            public DoubleField PaymentAmount;
            public StringField InvoiceNumber;
            public StringField CashBankName;
            public Int32Field SalesOrderId;
            public Int32Field CustomerId;
            public StringField CustomerName;
            public StringField CustomerStreet;
            public StringField CustomerCity;
            public StringField CustomerState;
            public StringField CustomerZipCode;
            public StringField CustomerPhone;
            public StringField CustomerEmail;
            public StringField SalesGroup;
            public StringField CurrencyName;
            public Int32Field TenantId;
            public StringField TenantName;

        }
    }
}
