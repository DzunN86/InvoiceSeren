using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<Indotalent.Merchandise.UomRow>;
using MyRow = Indotalent.Merchandise.UomRow;

namespace Indotalent.Merchandise
{
    public interface IUomListHandler : IListHandler<MyRow, MyRequest, MyResponse> {}

    public class UomListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, IUomListHandler
    {
        public UomListHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}