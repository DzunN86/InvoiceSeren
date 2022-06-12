using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<Indotalent.Sales.CustomerContactRow>;
using MyRow = Indotalent.Sales.CustomerContactRow;

namespace Indotalent.Sales
{
    public interface ICustomerContactRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> {}

    public class CustomerContactRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, ICustomerContactRetrieveHandler
    {
        public CustomerContactRetrieveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}