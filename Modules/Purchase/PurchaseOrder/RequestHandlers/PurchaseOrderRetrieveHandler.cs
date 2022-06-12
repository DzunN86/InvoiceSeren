using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<Indotalent.Purchase.PurchaseOrderRow>;
using MyRow = Indotalent.Purchase.PurchaseOrderRow;

namespace Indotalent.Purchase
{
    public interface IPurchaseOrderRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> {}

    public class PurchaseOrderRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, IPurchaseOrderRetrieveHandler
    {
        public PurchaseOrderRetrieveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}