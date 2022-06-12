using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.SaveRequest<Indotalent.Sales.InvoiceRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = Indotalent.Sales.InvoiceRow;

namespace Indotalent.Sales
{
    public interface IInvoiceSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

    public class InvoiceSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, IInvoiceSaveHandler
    {
        public InvoiceSaveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}