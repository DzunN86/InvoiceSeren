using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<Indotalent.Purchase.BillRow>;
using MyRow = Indotalent.Purchase.BillRow;

namespace Indotalent.Purchase
{
    public interface IBillListHandler : IListHandler<MyRow, MyRequest, MyResponse> {}

    public class BillListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, IBillListHandler
    {
        public BillListHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}