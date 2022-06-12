using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<Indotalent.Settings.SalesTaxRow>;
using MyRow = Indotalent.Settings.SalesTaxRow;

namespace Indotalent.Settings
{
    public interface ISalesTaxRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> {}

    public class SalesTaxRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, ISalesTaxRetrieveHandler
    {
        public SalesTaxRetrieveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}