using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<Indotalent.Settings.CashBankRow>;
using MyRow = Indotalent.Settings.CashBankRow;

namespace Indotalent.Settings
{
    public interface ICashBankRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> {}

    public class CashBankRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, ICashBankRetrieveHandler
    {
        public CashBankRetrieveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}