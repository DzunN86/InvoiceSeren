using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System;
using System.ComponentModel;
using System.IO;

namespace Indotalent.Sales
{
    [ConnectionKey("Default"), Module("Sales"), TableName("Invoice")]
    [DisplayName("Invoice"), InstanceName("Invoice")]
    [ReadPermission("Sales:Invoice")]
    [ModifyPermission("Sales:Invoice")]
    public sealed class InvoiceRow : Row<InvoiceRow.RowFields>, IIdRow, INameRow
    {
        [DisplayName("Id"), Identity, IdProperty]
        public int? Id
        {
            get => fields.Id[this];
            set => fields.Id[this] = value;
        }

        [DisplayName("Number"), Size(200), NotNull, QuickSearch, NameProperty]
        public string Number
        {
            get => fields.Number[this];
            set => fields.Number[this] = value;
        }

        [DisplayName("Description"), Size(1000)]
        public string Description
        {
            get => fields.Description[this];
            set => fields.Description[this] = value;
        }

        [DisplayName("Sales Group"), Size(200)]
        public string SalesGroup
        {
            get => fields.SalesGroup[this];
            set => fields.SalesGroup[this] = value;
        }

        [DisplayName("Invoice Date"), NotNull]
        public DateTime? InvoiceDate
        {
            get => fields.InvoiceDate[this];
            set => fields.InvoiceDate[this] = value;
        }

        [DisplayName("Sales Order Id"), NotNull]
        public int? SalesOrderId
        {
            get => fields.SalesOrderId[this];
            set => fields.SalesOrderId[this] = value;
        }

        [DisplayName("Sub Total"), NotNull]
        public double? SubTotal
        {
            get => fields.SubTotal[this];
            set => fields.SubTotal[this] = value;
        }

        [DisplayName("Discount"), NotNull]
        public double? Discount
        {
            get => fields.Discount[this];
            set => fields.Discount[this] = value;
        }

        [DisplayName("Before Tax"), NotNull]
        public double? BeforeTax
        {
            get => fields.BeforeTax[this];
            set => fields.BeforeTax[this] = value;
        }

        [DisplayName("Tax Amount"), NotNull]
        public double? TaxAmount
        {
            get => fields.TaxAmount[this];
            set => fields.TaxAmount[this] = value;
        }

        [DisplayName("Total"), NotNull]
        public double? Total
        {
            get => fields.Total[this];
            set => fields.Total[this] = value;
        }

        [DisplayName("Other Charge"), NotNull]
        public double? OtherCharge
        {
            get => fields.OtherCharge[this];
            set => fields.OtherCharge[this] = value;
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

        public InvoiceRow()
            : base()
        {
        }

        public InvoiceRow(RowFields fields)
            : base(fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public StringField Number;
            public StringField Description;
            public StringField SalesGroup;
            public DateTimeField InvoiceDate;
            public Int32Field SalesOrderId;
            public DoubleField SubTotal;
            public DoubleField Discount;
            public DoubleField BeforeTax;
            public DoubleField TaxAmount;
            public DoubleField Total;
            public DoubleField OtherCharge;
            public DateTimeField InsertDate;
            public Int32Field InsertUserId;
            public DateTimeField UpdateDate;
            public Int32Field UpdateUserId;
            public Int32Field TenantId;
        }
    }
}
