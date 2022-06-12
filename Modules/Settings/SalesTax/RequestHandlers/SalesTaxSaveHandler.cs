using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.SaveRequest<Indotalent.Settings.SalesTaxRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = Indotalent.Settings.SalesTaxRow;

namespace Indotalent.Settings
{
    public interface ISalesTaxSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

    public class SalesTaxSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, ISalesTaxSaveHandler
    {
        public SalesTaxSaveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}