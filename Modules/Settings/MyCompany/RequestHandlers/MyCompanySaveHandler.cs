using Indotalent.Administration;
using Indotalent.Administration.Entities;
using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.ComponentModel.DataAnnotations;
using System.Data;
using MyRequest = Serenity.Services.SaveRequest<Indotalent.Settings.MyCompanyRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = Indotalent.Settings.MyCompanyRow;

namespace Indotalent.Settings
{
    public interface IMyCompanySaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

    public class MyCompanySaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, IMyCompanySaveHandler
    {
        public MyCompanySaveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}