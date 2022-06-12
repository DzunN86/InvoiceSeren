using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.SaveRequest<Indotalent.Sales.InvoicePaymentRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = Indotalent.Sales.InvoicePaymentRow;

namespace Indotalent.Sales
{
    public interface IInvoicePaymentSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

    public class InvoicePaymentSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, IInvoicePaymentSaveHandler
    {
        public InvoicePaymentSaveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}