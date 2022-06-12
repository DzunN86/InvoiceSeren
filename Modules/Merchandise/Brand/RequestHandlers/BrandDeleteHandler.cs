using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.DeleteRequest;
using MyResponse = Serenity.Services.DeleteResponse;
using MyRow = Indotalent.Merchandise.BrandRow;

namespace Indotalent.Merchandise
{
    public interface IBrandDeleteHandler : IDeleteHandler<MyRow, MyRequest, MyResponse> {}

    public class BrandDeleteHandler : DeleteRequestHandler<MyRow, MyRequest, MyResponse>, IBrandDeleteHandler
    {
        public BrandDeleteHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}