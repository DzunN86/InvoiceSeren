using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<Indotalent.Merchandise.FlavourRow>;
using MyRow = Indotalent.Merchandise.FlavourRow;

namespace Indotalent.Merchandise
{
    public interface IFlavourListHandler : IListHandler<MyRow, MyRequest, MyResponse> {}

    public class FlavourListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, IFlavourListHandler
    {
        public FlavourListHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}