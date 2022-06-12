using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<Indotalent.Merchandise.FlavourRow>;
using MyRow = Indotalent.Merchandise.FlavourRow;

namespace Indotalent.Merchandise
{
    public interface IFlavourRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> {}

    public class FlavourRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, IFlavourRetrieveHandler
    {
        public FlavourRetrieveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}