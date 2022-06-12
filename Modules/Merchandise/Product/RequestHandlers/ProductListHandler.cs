using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<Indotalent.Merchandise.ProductRow>;
using MyRow = Indotalent.Merchandise.ProductRow;

namespace Indotalent.Merchandise
{
    public interface IProductListHandler : IListHandler<MyRow, MyRequest, MyResponse> {}

    public class ProductListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, IProductListHandler
    {
        public ProductListHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}