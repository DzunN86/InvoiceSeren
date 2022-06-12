using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.SaveRequest<Indotalent.Purchase.PurchaseOrderDetailRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = Indotalent.Purchase.PurchaseOrderDetailRow;

namespace Indotalent.Purchase
{
    public interface IPurchaseOrderDetailSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

    public class PurchaseOrderDetailSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, IPurchaseOrderDetailSaveHandler
    {
        public PurchaseOrderDetailSaveHandler(IRequestContext context)
             : base(context)
        {
        }

        protected override void BeforeSave()
        {
            base.BeforeSave();

            Row.SubTotal = Row.Price * Row.Qty;
            Row.BeforeTax = Row.SubTotal - Row.Discount;
            Row.TaxAmount = (Row.TaxPercentage * Row.BeforeTax) / 100.0;
            Row.Total = Row.BeforeTax + Row.TaxAmount;

        }
    }
}