using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.DeleteRequest;
using MyResponse = Serenity.Services.DeleteResponse;
using MyRow = Indotalent.Purchase.VendorRow;

namespace Indotalent.Purchase
{
    public interface IVendorDeleteHandler : IDeleteHandler<MyRow, MyRequest, MyResponse> {}

    public class VendorDeleteHandler : DeleteRequestHandler<MyRow, MyRequest, MyResponse>, IVendorDeleteHandler
    {
        public VendorDeleteHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}