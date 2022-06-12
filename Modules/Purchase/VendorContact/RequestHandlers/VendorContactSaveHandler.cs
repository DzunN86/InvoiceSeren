using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.SaveRequest<Indotalent.Purchase.VendorContactRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = Indotalent.Purchase.VendorContactRow;

namespace Indotalent.Purchase
{
    public interface IVendorContactSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

    public class VendorContactSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, IVendorContactSaveHandler
    {
        public VendorContactSaveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}