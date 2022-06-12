using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.DeleteRequest;
using MyResponse = Serenity.Services.DeleteResponse;
using MyRow = Indotalent.Purchase.BillPaymentRow;

namespace Indotalent.Purchase
{
    public interface IBillPaymentDeleteHandler : IDeleteHandler<MyRow, MyRequest, MyResponse> {}

    public class BillPaymentDeleteHandler : DeleteRequestHandler<MyRow, MyRequest, MyResponse>, IBillPaymentDeleteHandler
    {
        public BillPaymentDeleteHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}