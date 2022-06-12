using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.DeleteRequest;
using MyResponse = Serenity.Services.DeleteResponse;
using MyRow = Indotalent.Purchase.PurchaseOrderDetailRow;

namespace Indotalent.Purchase
{
    public interface IPurchaseOrderDetailDeleteHandler : IDeleteHandler<MyRow, MyRequest, MyResponse> {}

    public class PurchaseOrderDetailDeleteHandler : DeleteRequestHandler<MyRow, MyRequest, MyResponse>, IPurchaseOrderDetailDeleteHandler
    {
        public PurchaseOrderDetailDeleteHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}