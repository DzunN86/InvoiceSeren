using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.DeleteRequest;
using MyResponse = Serenity.Services.DeleteResponse;
using MyRow = Indotalent.Purchase.BillDetailRow;

namespace Indotalent.Purchase
{
    public interface IBillDetailDeleteHandler : IDeleteHandler<MyRow, MyRequest, MyResponse> {}

    public class BillDetailDeleteHandler : DeleteRequestHandler<MyRow, MyRequest, MyResponse>, IBillDetailDeleteHandler
    {
        public BillDetailDeleteHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}