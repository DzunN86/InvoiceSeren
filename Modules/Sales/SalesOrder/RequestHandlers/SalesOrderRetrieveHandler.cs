using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<Indotalent.Sales.SalesOrderRow>;
using MyRow = Indotalent.Sales.SalesOrderRow;

namespace Indotalent.Sales
{
    public interface ISalesOrderRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> {}

    public class SalesOrderRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, ISalesOrderRetrieveHandler
    {
        public SalesOrderRetrieveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}