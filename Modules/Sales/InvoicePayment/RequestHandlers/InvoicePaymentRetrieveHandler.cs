using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<Indotalent.Sales.InvoicePaymentRow>;
using MyRow = Indotalent.Sales.InvoicePaymentRow;

namespace Indotalent.Sales
{
    public interface IInvoicePaymentRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> {}

    public class InvoicePaymentRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, IInvoicePaymentRetrieveHandler
    {
        public InvoicePaymentRetrieveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}