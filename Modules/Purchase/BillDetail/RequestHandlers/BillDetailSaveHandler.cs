using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.SaveRequest<Indotalent.Purchase.BillDetailRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = Indotalent.Purchase.BillDetailRow;

namespace Indotalent.Purchase
{
    public interface IBillDetailSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

    public class BillDetailSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, IBillDetailSaveHandler
    {
        public BillDetailSaveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}