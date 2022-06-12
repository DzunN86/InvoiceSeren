using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<Indotalent.Merchandise.CategoryRow>;
using MyRow = Indotalent.Merchandise.CategoryRow;

namespace Indotalent.Merchandise
{
    public interface ICategoryListHandler : IListHandler<MyRow, MyRequest, MyResponse> {}

    public class CategoryListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, ICategoryListHandler
    {
        public CategoryListHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}