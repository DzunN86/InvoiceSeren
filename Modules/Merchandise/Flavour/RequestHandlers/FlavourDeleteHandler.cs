using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.DeleteRequest;
using MyResponse = Serenity.Services.DeleteResponse;
using MyRow = Indotalent.Merchandise.FlavourRow;

namespace Indotalent.Merchandise
{
    public interface IFlavourDeleteHandler : IDeleteHandler<MyRow, MyRequest, MyResponse> {}

    public class FlavourDeleteHandler : DeleteRequestHandler<MyRow, MyRequest, MyResponse>, IFlavourDeleteHandler
    {
        public FlavourDeleteHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}