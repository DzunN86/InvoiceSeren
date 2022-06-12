using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<Indotalent.Settings.MyCompanyRow>;
using MyRow = Indotalent.Settings.MyCompanyRow;

namespace Indotalent.Settings
{
    public interface IMyCompanyListHandler : IListHandler<MyRow, MyRequest, MyResponse> {}

    public class MyCompanyListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, IMyCompanyListHandler
    {
        public MyCompanyListHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}