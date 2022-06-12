using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<Indotalent.Settings.PurchaseTaxRow>;
using MyRow = Indotalent.Settings.PurchaseTaxRow;

namespace Indotalent.Settings
{
    public interface IPurchaseTaxRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> {}

    public class PurchaseTaxRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, IPurchaseTaxRetrieveHandler
    {
        public PurchaseTaxRetrieveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}