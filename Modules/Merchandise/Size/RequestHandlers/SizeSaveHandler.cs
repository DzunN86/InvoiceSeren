using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.SaveRequest<Indotalent.Merchandise.SizeRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = Indotalent.Merchandise.SizeRow;

namespace Indotalent.Merchandise
{
    public interface ISizeSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

    public class SizeSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, ISizeSaveHandler
    {
        public SizeSaveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}