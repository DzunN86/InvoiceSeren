using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.DeleteRequest;
using MyResponse = Serenity.Services.DeleteResponse;
using MyRow = Indotalent.Sales.SalesChannelRow;

namespace Indotalent.Sales
{
    public interface ISalesChannelDeleteHandler : IDeleteHandler<MyRow, MyRequest, MyResponse> {}

    public class SalesChannelDeleteHandler : DeleteRequestHandler<MyRow, MyRequest, MyResponse>, ISalesChannelDeleteHandler
    {
        public SalesChannelDeleteHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}