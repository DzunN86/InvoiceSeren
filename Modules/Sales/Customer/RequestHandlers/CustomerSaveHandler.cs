using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.SaveRequest<Indotalent.Sales.CustomerRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = Indotalent.Sales.CustomerRow;

namespace Indotalent.Sales
{
    public interface ICustomerSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

    public class CustomerSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, ICustomerSaveHandler
    {
        public CustomerSaveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}