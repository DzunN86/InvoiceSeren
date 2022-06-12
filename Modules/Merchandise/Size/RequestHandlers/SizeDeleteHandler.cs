using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.DeleteRequest;
using MyResponse = Serenity.Services.DeleteResponse;
using MyRow = Indotalent.Merchandise.SizeRow;

namespace Indotalent.Merchandise
{
    public interface ISizeDeleteHandler : IDeleteHandler<MyRow, MyRequest, MyResponse> {}

    public class SizeDeleteHandler : DeleteRequestHandler<MyRow, MyRequest, MyResponse>, ISizeDeleteHandler
    {
        public SizeDeleteHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}