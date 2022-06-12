using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.SaveRequest<Indotalent.Merchandise.ColourRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = Indotalent.Merchandise.ColourRow;

namespace Indotalent.Merchandise
{
    public interface IColourSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

    public class ColourSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, IColourSaveHandler
    {
        public ColourSaveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}