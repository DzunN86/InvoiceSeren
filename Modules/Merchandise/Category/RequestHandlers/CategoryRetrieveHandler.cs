using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<Indotalent.Merchandise.CategoryRow>;
using MyRow = Indotalent.Merchandise.CategoryRow;

namespace Indotalent.Merchandise
{
    public interface ICategoryRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> {}

    public class CategoryRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, ICategoryRetrieveHandler
    {
        public CategoryRetrieveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}