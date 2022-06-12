using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<Indotalent.Settings.CashBankRow>;
using MyRow = Indotalent.Settings.CashBankRow;

namespace Indotalent.Settings
{
    public interface ICashBankListHandler : IListHandler<MyRow, MyRequest, MyResponse> {}

    public class CashBankListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, ICashBankListHandler
    {
        public CashBankListHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}