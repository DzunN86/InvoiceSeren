using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<Indotalent.Purchase.VendorRow>;
using MyRow = Indotalent.Purchase.VendorRow;

namespace Indotalent.Purchase
{
    public interface IVendorListHandler : IListHandler<MyRow, MyRequest, MyResponse> {}

    public class VendorListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, IVendorListHandler
    {
        public VendorListHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}