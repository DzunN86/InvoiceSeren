using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.DeleteRequest;
using MyResponse = Serenity.Services.DeleteResponse;
using MyRow = Indotalent.Purchase.VendorContactRow;

namespace Indotalent.Purchase
{
    public interface IVendorContactDeleteHandler : IDeleteHandler<MyRow, MyRequest, MyResponse> {}

    public class VendorContactDeleteHandler : DeleteRequestHandler<MyRow, MyRequest, MyResponse>, IVendorContactDeleteHandler
    {
        public VendorContactDeleteHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}