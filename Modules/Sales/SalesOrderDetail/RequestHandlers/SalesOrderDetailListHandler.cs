using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<Indotalent.Sales.SalesOrderDetailRow>;
using MyRow = Indotalent.Sales.SalesOrderDetailRow;

namespace Indotalent.Sales
{
    public interface ISalesOrderDetailListHandler : IListHandler<MyRow, MyRequest, MyResponse> {}

    public class SalesOrderDetailListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, ISalesOrderDetailListHandler
    {
        public SalesOrderDetailListHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}