using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<Indotalent.Sales.SalesChannelRow>;
using MyRow = Indotalent.Sales.SalesChannelRow;

namespace Indotalent.Sales
{
    public interface ISalesChannelListHandler : IListHandler<MyRow, MyRequest, MyResponse> {}

    public class SalesChannelListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, ISalesChannelListHandler
    {
        public SalesChannelListHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}