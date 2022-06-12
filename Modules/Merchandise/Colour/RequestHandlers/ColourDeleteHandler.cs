using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.DeleteRequest;
using MyResponse = Serenity.Services.DeleteResponse;
using MyRow = Indotalent.Merchandise.ColourRow;

namespace Indotalent.Merchandise
{
    public interface IColourDeleteHandler : IDeleteHandler<MyRow, MyRequest, MyResponse> {}

    public class ColourDeleteHandler : DeleteRequestHandler<MyRow, MyRequest, MyResponse>, IColourDeleteHandler
    {
        public ColourDeleteHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}