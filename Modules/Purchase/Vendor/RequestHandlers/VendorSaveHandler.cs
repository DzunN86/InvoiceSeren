using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.SaveRequest<Indotalent.Purchase.VendorRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = Indotalent.Purchase.VendorRow;

namespace Indotalent.Purchase
{
    public interface IVendorSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

    public class VendorSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, IVendorSaveHandler
    {
        public VendorSaveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}