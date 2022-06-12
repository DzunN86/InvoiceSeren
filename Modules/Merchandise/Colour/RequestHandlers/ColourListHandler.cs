using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<Indotalent.Merchandise.ColourRow>;
using MyRow = Indotalent.Merchandise.ColourRow;

namespace Indotalent.Merchandise
{
    public interface IColourListHandler : IListHandler<MyRow, MyRequest, MyResponse> {}

    public class ColourListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, IColourListHandler
    {
        public ColourListHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}