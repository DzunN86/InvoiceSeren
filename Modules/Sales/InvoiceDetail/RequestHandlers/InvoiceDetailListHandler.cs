using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<Indotalent.Sales.InvoiceDetailRow>;
using MyRow = Indotalent.Sales.InvoiceDetailRow;

namespace Indotalent.Sales
{
    public interface IInvoiceDetailListHandler : IListHandler<MyRow, MyRequest, MyResponse> {}

    public class InvoiceDetailListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, IInvoiceDetailListHandler
    {
        public InvoiceDetailListHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}