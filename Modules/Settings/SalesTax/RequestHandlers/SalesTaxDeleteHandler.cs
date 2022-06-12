using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.DeleteRequest;
using MyResponse = Serenity.Services.DeleteResponse;
using MyRow = Indotalent.Settings.SalesTaxRow;

namespace Indotalent.Settings
{
    public interface ISalesTaxDeleteHandler : IDeleteHandler<MyRow, MyRequest, MyResponse> {}

    public class SalesTaxDeleteHandler : DeleteRequestHandler<MyRow, MyRequest, MyResponse>, ISalesTaxDeleteHandler
    {
        public SalesTaxDeleteHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}