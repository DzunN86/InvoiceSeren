using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<Indotalent.Merchandise.SizeRow>;
using MyRow = Indotalent.Merchandise.SizeRow;

namespace Indotalent.Merchandise
{
    public interface ISizeListHandler : IListHandler<MyRow, MyRequest, MyResponse> {}

    public class SizeListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, ISizeListHandler
    {
        public SizeListHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}