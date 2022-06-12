using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.SaveRequest<Indotalent.Merchandise.FlavourRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = Indotalent.Merchandise.FlavourRow;

namespace Indotalent.Merchandise
{
    public interface IFlavourSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

    public class FlavourSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, IFlavourSaveHandler
    {
        public FlavourSaveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}