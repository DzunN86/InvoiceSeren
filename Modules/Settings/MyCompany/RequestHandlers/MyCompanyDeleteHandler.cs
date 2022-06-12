using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.DeleteRequest;
using MyResponse = Serenity.Services.DeleteResponse;
using MyRow = Indotalent.Settings.MyCompanyRow;

namespace Indotalent.Settings
{
    public interface IMyCompanyDeleteHandler : IDeleteHandler<MyRow, MyRequest, MyResponse> {}

    public class MyCompanyDeleteHandler : DeleteRequestHandler<MyRow, MyRequest, MyResponse>, IMyCompanyDeleteHandler
    {
        public MyCompanyDeleteHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}