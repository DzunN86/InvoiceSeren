using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.SaveRequest<Indotalent.Sales.SalesChannelRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = Indotalent.Sales.SalesChannelRow;

namespace Indotalent.Sales
{
    public interface ISalesChannelSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

    public class SalesChannelSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, ISalesChannelSaveHandler
    {
        public SalesChannelSaveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}