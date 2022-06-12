using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.SaveRequest<Indotalent.Purchase.PurchaseOrderRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = Indotalent.Purchase.PurchaseOrderRow;

namespace Indotalent.Purchase
{
    public interface IPurchaseOrderSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

    public class PurchaseOrderSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, IPurchaseOrderSaveHandler
    {
        public PurchaseOrderSaveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}