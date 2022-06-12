using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.SaveRequest<Indotalent.Merchandise.CategoryRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = Indotalent.Merchandise.CategoryRow;

namespace Indotalent.Merchandise
{
    public interface ICategorySaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

    public class CategorySaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, ICategorySaveHandler
    {
        public CategorySaveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}