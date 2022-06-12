using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.SaveRequest<Indotalent.Settings.PurchaseTaxRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = Indotalent.Settings.PurchaseTaxRow;

namespace Indotalent.Settings
{
    public interface IPurchaseTaxSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

    public class PurchaseTaxSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, IPurchaseTaxSaveHandler
    {
        public PurchaseTaxSaveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}