using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.DeleteRequest;
using MyResponse = Serenity.Services.DeleteResponse;
using MyRow = Indotalent.Sales.SalesOrderRow;

namespace Indotalent.Sales
{
    public interface ISalesOrderDeleteHandler : IDeleteHandler<MyRow, MyRequest, MyResponse> {}

    public class SalesOrderDeleteHandler : DeleteRequestHandler<MyRow, MyRequest, MyResponse>, ISalesOrderDeleteHandler
    {
        public SalesOrderDeleteHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}