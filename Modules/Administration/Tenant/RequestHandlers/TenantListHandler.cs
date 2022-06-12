using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<Indotalent.Administration.TenantRow>;
using MyRow = Indotalent.Administration.TenantRow;

namespace Indotalent.Administration
{
    public interface ITenantListHandler : IListHandler<MyRow, MyRequest, MyResponse> {}

    public class TenantListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, ITenantListHandler
    {
        public TenantListHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}