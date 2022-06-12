using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<Indotalent.Purchase.BillDetailRow>;
using MyRow = Indotalent.Purchase.BillDetailRow;

namespace Indotalent.Purchase
{
    public interface IBillDetailRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> {}

    public class BillDetailRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, IBillDetailRetrieveHandler
    {
        public BillDetailRetrieveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}