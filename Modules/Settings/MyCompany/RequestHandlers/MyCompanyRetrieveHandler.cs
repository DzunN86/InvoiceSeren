using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<Indotalent.Settings.MyCompanyRow>;
using MyRow = Indotalent.Settings.MyCompanyRow;

namespace Indotalent.Settings
{
    public interface IMyCompanyRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> {}

    public class MyCompanyRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, IMyCompanyRetrieveHandler
    {
        public MyCompanyRetrieveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}