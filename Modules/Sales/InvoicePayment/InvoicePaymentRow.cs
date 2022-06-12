using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System;
using System.ComponentModel;
using System.IO;

namespace Indotalent.Sales
{
    [ConnectionKey("Default"), Module("Sales"), TableName("InvoicePayment")]
    [DisplayName("Invoice Payment"), InstanceName("Invoice Payment")]
    [ReadPermission("Sales:Invoice")]
    [ModifyPermission("Sales:Invoice")]
    public sealed class InvoicePaymentRow : Row<InvoicePaymentRow.RowFields>, IIdRow, INameRow
    {
        [DisplayName("Id"), Identity, IdProperty]
        public int? Id
        {
            get => fields.Id[this];
            set => fields.Id[this] = value;
        }

        [DisplayName("Invoice Id"), NotNull]
        public int? InvoiceId
        {
            get => fields.InvoiceId[this];
            set => fields.InvoiceId[this] = value;
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

        [DisplayName("Payment Date"), NotNull]
        public DateTime? PaymentDate
        {
            get => fields.PaymentDate[this];
            set => fields.PaymentDate[this] = value;
        }

        [DisplayName("Cash Bank Id"), NotNull]
        public int? CashBankId
        {
            get => fields.CashBankId[this];
            set => fields.CashBankId[this] = value;
        }

        [DisplayName("Invoice Amount"), NotNull]
        public double? InvoiceAmount
        {
            get => fields.InvoiceAmount[this];
            set => fields.InvoiceAmount[this] = value;
        }

        [DisplayName("Payment Amount"), NotNull]
        public double? PaymentAmount
        {
            get => fields.PaymentAmount[this];
            set => fields.PaymentAmount[this] = value;
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

        public InvoicePaymentRow()
            : base()
        {
        }

        public InvoicePaymentRow(RowFields fields)
            : base(fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public Int32Field InvoiceId;
            public StringField Number;
            public StringField Description;
            public StringField SalesGroup;
            public DateTimeField PaymentDate;
            public Int32Field CashBankId;
            public DoubleField InvoiceAmount;
            public DoubleField PaymentAmount;
            public DateTimeField InsertDate;
            public Int32Field InsertUserId;
            public DateTimeField UpdateDate;
            public Int32Field UpdateUserId;
            public Int32Field TenantId;
        }
    }
}
