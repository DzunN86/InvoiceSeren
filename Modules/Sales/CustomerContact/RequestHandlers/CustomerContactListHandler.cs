using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<Indotalent.Sales.CustomerContactRow>;
using MyRow = Indotalent.Sales.CustomerContactRow;

namespace Indotalent.Sales
{
    public interface ICustomerContactListHandler : IListHandler<MyRow, MyRequest, MyResponse> {}

    public class CustomerContactListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, ICustomerContactListHandler
    {
        public CustomerContactListHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}