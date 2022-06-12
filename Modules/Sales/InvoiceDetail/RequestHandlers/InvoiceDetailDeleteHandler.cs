using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.DeleteRequest;
using MyResponse = Serenity.Services.DeleteResponse;
using MyRow = Indotalent.Sales.InvoiceDetailRow;

namespace Indotalent.Sales
{
    public interface IInvoiceDetailDeleteHandler : IDeleteHandler<MyRow, MyRequest, MyResponse> {}

    public class InvoiceDetailDeleteHandler : DeleteRequestHandler<MyRow, MyRequest, MyResponse>, IInvoiceDetailDeleteHandler
    {
        public InvoiceDetailDeleteHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}