using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.DeleteRequest;
using MyResponse = Serenity.Services.DeleteResponse;
using MyRow = Indotalent.Settings.CashBankRow;

namespace Indotalent.Settings
{
    public interface ICashBankDeleteHandler : IDeleteHandler<MyRow, MyRequest, MyResponse> {}

    public class CashBankDeleteHandler : DeleteRequestHandler<MyRow, MyRequest, MyResponse>, ICashBankDeleteHandler
    {
        public CashBankDeleteHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}