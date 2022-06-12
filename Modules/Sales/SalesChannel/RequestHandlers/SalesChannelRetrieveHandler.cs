using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<Indotalent.Sales.SalesChannelRow>;
using MyRow = Indotalent.Sales.SalesChannelRow;

namespace Indotalent.Sales
{
    public interface ISalesChannelRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> {}

    public class SalesChannelRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, ISalesChannelRetrieveHandler
    {
        public SalesChannelRetrieveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}