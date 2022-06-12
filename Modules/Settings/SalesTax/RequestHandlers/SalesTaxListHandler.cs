using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<Indotalent.Settings.SalesTaxRow>;
using MyRow = Indotalent.Settings.SalesTaxRow;

namespace Indotalent.Settings
{
    public interface ISalesTaxListHandler : IListHandler<MyRow, MyRequest, MyResponse> {}

    public class SalesTaxListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, ISalesTaxListHandler
    {
        public SalesTaxListHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}