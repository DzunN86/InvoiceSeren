using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<Indotalent.Sales.SalesOrderDetailRow>;
using MyRow = Indotalent.Sales.SalesOrderDetailRow;

namespace Indotalent.Sales
{
    public interface ISalesOrderDetailRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> {}

    public class SalesOrderDetailRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, ISalesOrderDetailRetrieveHandler
    {
        public SalesOrderDetailRetrieveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}