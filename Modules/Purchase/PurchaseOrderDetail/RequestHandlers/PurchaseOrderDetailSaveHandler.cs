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
    }
}