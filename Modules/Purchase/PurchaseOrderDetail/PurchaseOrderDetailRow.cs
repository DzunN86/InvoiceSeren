using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System;
using System.ComponentModel;
using System.IO;

namespace Indotalent.Purchase
{
    [ConnectionKey("Default"), Module("Purchase"), TableName("PurchaseOrderDetail")]
    [DisplayName("Purchase Order Detail"), InstanceName("Purchase Order Detail")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class PurchaseOrderDetailRow : Row<PurchaseOrderDetailRow.RowFields>, IIdRow
    {
        [DisplayName("Id"), Identity, IdProperty]
        public int? Id
        {
            get => fields.Id[this];
            set => fields.Id[this] = value;
        }

        [DisplayName("Purchase Order Id"), NotNull]
        public int? PurchaseOrderId
        {
            get => fields.PurchaseOrderId[this];
            set => fields.PurchaseOrderId[this] = value;
        }

        [DisplayName("Product Id"), NotNull]
        public int? ProductId
        {
            get => fields.ProductId[this];
            set => fields.ProductId[this] = value;
        }

        [DisplayName("Price"), NotNull]
        public double? Price
        {
            get => fields.Price[this];
            set => fields.Price[this] = value;
        }

        [DisplayName("Qty"), NotNull]
        public double? Qty
        {
            get => fields.Qty[this];
            set => fields.Qty[this] = value;
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

        [DisplayName("Tax Percentage"), NotNull]
        public double? TaxPercentage
        {
            get => fields.TaxPercentage[this];
            set => fields.TaxPercentage[this] = value;
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

        public PurchaseOrderDetailRow()
            : base()
        {
        }

        public PurchaseOrderDetailRow(RowFields fields)
            : base(fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public Int32Field PurchaseOrderId;
            public Int32Field ProductId;
            public DoubleField Price;
            public DoubleField Qty;
            public DoubleField SubTotal;
            public DoubleField Discount;
            public DoubleField BeforeTax;
            public DoubleField TaxPercentage;
            public DoubleField TaxAmount;
            public DoubleField Total;
            public DateTimeField InsertDate;
            public Int32Field InsertUserId;
            public DateTimeField UpdateDate;
            public Int32Field UpdateUserId;
            public Int32Field TenantId;
        }
    }
}
