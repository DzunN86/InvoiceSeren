using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.SaveRequest<Indotalent.Settings.CashBankRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = Indotalent.Settings.CashBankRow;

namespace Indotalent.Settings
{
    public interface ICashBankSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

    public class CashBankSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, ICashBankSaveHandler
    {
        public CashBankSaveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}