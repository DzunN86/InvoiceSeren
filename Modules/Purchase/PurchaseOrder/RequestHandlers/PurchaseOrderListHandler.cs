using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<Indotalent.Purchase.PurchaseOrderRow>;
using MyRow = Indotalent.Purchase.PurchaseOrderRow;

namespace Indotalent.Purchase
{
    public interface IPurchaseOrderListHandler : IListHandler<MyRow, MyRequest, MyResponse> {}

    public class PurchaseOrderListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, IPurchaseOrderListHandler
    {
        public PurchaseOrderListHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}