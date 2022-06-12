using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<Indotalent.Sales.InvoiceRow>;
using MyRow = Indotalent.Sales.InvoiceRow;

namespace Indotalent.Sales
{
    public interface IInvoiceRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> {}

    public class InvoiceRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, IInvoiceRetrieveHandler
    {
        public InvoiceRetrieveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}