using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<Indotalent.Merchandise.ColourRow>;
using MyRow = Indotalent.Merchandise.ColourRow;

namespace Indotalent.Merchandise
{
    public interface IColourRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> {}

    public class ColourRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, IColourRetrieveHandler
    {
        public ColourRetrieveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}