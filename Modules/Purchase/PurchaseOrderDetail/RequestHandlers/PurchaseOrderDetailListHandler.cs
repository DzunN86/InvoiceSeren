using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<Indotalent.Purchase.PurchaseOrderDetailRow>;
using MyRow = Indotalent.Purchase.PurchaseOrderDetailRow;

namespace Indotalent.Purchase
{
    public interface IPurchaseOrderDetailListHandler : IListHandler<MyRow, MyRequest, MyResponse> {}

    public class PurchaseOrderDetailListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, IPurchaseOrderDetailListHandler
    {
        public PurchaseOrderDetailListHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}