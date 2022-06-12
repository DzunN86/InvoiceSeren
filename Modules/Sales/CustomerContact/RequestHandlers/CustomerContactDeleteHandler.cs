using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.DeleteRequest;
using MyResponse = Serenity.Services.DeleteResponse;
using MyRow = Indotalent.Sales.CustomerContactRow;

namespace Indotalent.Sales
{
    public interface ICustomerContactDeleteHandler : IDeleteHandler<MyRow, MyRequest, MyResponse> {}

    public class CustomerContactDeleteHandler : DeleteRequestHandler<MyRow, MyRequest, MyResponse>, ICustomerContactDeleteHandler
    {
        public CustomerContactDeleteHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}