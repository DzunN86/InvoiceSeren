using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using Serenity.Extensions.Entities;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.IO;

namespace Indotalent.Sales
{
    [ConnectionKey("Default"), Module("Sales"), TableName("[SalesOrder]")]
    [DisplayName("Sales Orders"), InstanceName("Sales Order")]
    [LookupScript(LookupType = typeof(MultiTenantRowLookupScript<>))]
    [ReadPermission("Sales:SalesOrder")]
    [ModifyPermission("Sales:SalesOrder")]
    public sealed class SalesOrderRow : LoggingRow<SalesOrderRow.RowFields>, IIdRow, INameRow, IMultiTenantRow
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

        [DisplayName("Sales Channel"), NotNull, ForeignKey("[SalesChannel]", "Id"), LeftJoin("jSalesChannel"), TextualField("SalesChannelName")]
        [LookupEditor(typeof(SalesChannelRow), InplaceAdd = true)]
        public Int32? SalesChannelId
        {
            get => fields.SalesChannelId[this];
            set => fields.SalesChannelId[this] = value;
        }

        [DisplayName("Sales Channel"), Expression("jSalesChannel.[Name]")]
        [Insertable(false), Updatable(false)]
        public String SalesChannelName
        {
            get => fields.SalesChannelName[this];
            set => fields.SalesChannelName[this] = value;
        }

        [DisplayName("Customer"), NotNull, ForeignKey("[Customer]", "Id"), LeftJoin("jCustomer"), TextualField("CustomerName")]
        [LookupEditor(typeof(CustomerRow), InplaceAdd = true)]
        public Int32? CustomerId
        {
            get => fields.CustomerId[this];
            set => fields.CustomerId[this] = value;
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

        [DisplayName("Customer Name"), Expression("jCustomer.[Name]")]
        [Insertable(false), Updatable(false)]
        public String CustomerName
        {
            get => fields.CustomerName[this];
            set => fields.CustomerName[this] = value;
        }

        [DisplayName("Customer Street"), Expression("jCustomer.[Street]")]
        [Insertable(false), Updatable(false)]
        public String CustomerStreet
        {
            get => fields.CustomerStreet[this];
            set => fields.CustomerStreet[this] = value;
        }

        [DisplayName("Customer City"), Expression("jCustomer.[City]")]
        [Insertable(false), Updatable(false)]
        public String CustomerCity
        {
            get => fields.CustomerCity[this];
            set => fields.CustomerCity[this] = value;
        }

        [DisplayName("Customer State"), Expression("jCustomer.[State]")]
        [Insertable(false), Updatable(false)]
        public String CustomerState
        {
            get => fields.CustomerState[this];
            set => fields.CustomerState[this] = value;
        }

        [DisplayName("Customer Zip Code"), Expression("jCustomer.[ZipCode]")]
        [Insertable(false), Updatable(false)]
        public String CustomerZipCode
        {
            get => fields.CustomerZipCode[this];
            set => fields.CustomerZipCode[this] = value;
        }

        [DisplayName("Customer Phone"), Expression("jCustomer.[Phone]")]
        [Insertable(false), Updatable(false)]
        public String CustomerPhone
        {
            get => fields.CustomerPhone[this];
            set => fields.CustomerPhone[this] = value;
        }

        [DisplayName("Customer Email"), Expression("jCustomer.[Email]")]
        [Insertable(false), Updatable(false)]
        public String CustomerEmail
        {
            get => fields.CustomerEmail[this];
            set => fields.CustomerEmail[this] = value;
        }

        [DisplayName("Items"), MasterDetailRelation(foreignKey: "SalesOrderId"), NotMapped]
        public List<SalesOrderDetailRow> ItemList
        {
            get => fields.ItemList[this];
            set => fields.ItemList[this] = value;
        }

        [DisplayName("Invoices"), MasterDetailRelation(foreignKey: "SalesOrderId"), NotMapped]
        public List<InvoiceRow> InvoiceList
        {
            get => fields.InvoiceList[this];
            set => fields.InvoiceList[this] = value;
        }

        [DisplayName("Sales Group"), Size(200)]
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

        public SalesOrderRow()
            : base()
        {
        }

        public SalesOrderRow(RowFields fields)
            : base(fields)
        {
        }

        public class RowFields : LoggingRowFields
        {
            public Int32Field Id;
            public StringField Number;
            public StringField SalesGroup;
            public StringField Description;
            public DateTimeField OrderDate;
            public Int32Field CustomerId;
            public DoubleField SubTotal;
            public DoubleField Discount;
            public DoubleField BeforeTax;
            public DoubleField TaxAmount;
            public DoubleField Total;
            public DoubleField OtherCharge;

            public StringField CustomerName;
            public StringField CustomerStreet;
            public StringField CustomerCity;
            public StringField CustomerState;
            public StringField CustomerZipCode;
            public StringField CustomerPhone;
            public StringField CustomerEmail;
            public Int32Field SalesChannelId;
            public StringField SalesChannelName;

            public StringField CurrencyName;
            public Int32Field TenantId;
            public StringField TenantName;

            public RowListField<SalesOrderDetailRow> ItemList;
            public RowListField<InvoiceRow> InvoiceList;
        }
    }
}
