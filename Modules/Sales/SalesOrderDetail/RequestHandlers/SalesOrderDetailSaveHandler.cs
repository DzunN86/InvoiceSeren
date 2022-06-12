using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.SaveRequest<Indotalent.Sales.SalesOrderDetailRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = Indotalent.Sales.SalesOrderDetailRow;

namespace Indotalent.Sales
{
    public interface ISalesOrderDetailSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

    public class SalesOrderDetailSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, ISalesOrderDetailSaveHandler
    {
        public SalesOrderDetailSaveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}