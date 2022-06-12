using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System;
using System.ComponentModel;
using System.IO;

namespace Indotalent.Purchase
{
    [ConnectionKey("Default"), Module("Purchase"), TableName("BillPayment")]
    [DisplayName("Bill Payment"), InstanceName("Bill Payment")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class BillPaymentRow : Row<BillPaymentRow.RowFields>, IIdRow, INameRow
    {
        [DisplayName("Id"), Identity, IdProperty]
        public int? Id
        {
            get => fields.Id[this];
            set => fields.Id[this] = value;
        }

        [DisplayName("Bill Id"), NotNull]
        public int? BillId
        {
            get => fields.BillId[this];
            set => fields.BillId[this] = value;
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

        [DisplayName("Procurement Group"), Size(200)]
        public string ProcurementGroup
        {
            get => fields.ProcurementGroup[this];
            set => fields.ProcurementGroup[this] = value;
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

        [DisplayName("Bill Amount"), NotNull]
        public double? BillAmount
        {
            get => fields.BillAmount[this];
            set => fields.BillAmount[this] = value;
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

        public BillPaymentRow()
            : base()
        {
        }

        public BillPaymentRow(RowFields fields)
            : base(fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public Int32Field BillId;
            public StringField Number;
            public StringField Description;
            public StringField ProcurementGroup;
            public DateTimeField PaymentDate;
            public Int32Field CashBankId;
            public DoubleField BillAmount;
            public DoubleField PaymentAmount;
            public DateTimeField InsertDate;
            public Int32Field InsertUserId;
            public DateTimeField UpdateDate;
            public Int32Field UpdateUserId;
            public Int32Field TenantId;
        }
    }
}
