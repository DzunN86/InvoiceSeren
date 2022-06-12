using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<Indotalent.Purchase.BillDetailRow>;
using MyRow = Indotalent.Purchase.BillDetailRow;

namespace Indotalent.Purchase
{
    public interface IBillDetailListHandler : IListHandler<MyRow, MyRequest, MyResponse> {}

    public class BillDetailListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, IBillDetailListHandler
    {
        public BillDetailListHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}