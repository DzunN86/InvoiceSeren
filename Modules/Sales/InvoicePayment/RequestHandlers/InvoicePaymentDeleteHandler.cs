using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.DeleteRequest;
using MyResponse = Serenity.Services.DeleteResponse;
using MyRow = Indotalent.Sales.InvoicePaymentRow;

namespace Indotalent.Sales
{
    public interface IInvoicePaymentDeleteHandler : IDeleteHandler<MyRow, MyRequest, MyResponse> {}

    public class InvoicePaymentDeleteHandler : DeleteRequestHandler<MyRow, MyRequest, MyResponse>, IInvoicePaymentDeleteHandler
    {
        public InvoicePaymentDeleteHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}