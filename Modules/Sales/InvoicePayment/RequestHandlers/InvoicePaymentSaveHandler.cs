using Indotalent.Administration;
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


        private string GetSalesGroup(int invoiceId, IDbConnection connection)
        {
            var result = "";

            var data = connection.TryById<InvoiceRow>(invoiceId, q => q
                 .SelectTableFields());
            result = data.SalesGroup;

            return result;
        }

        protected override void BeforeSave()
        {
            base.BeforeSave();

            if (this.IsCreate)
            {
                if (Row.Number.ToLower().Equals("auto"))
                {
                    var tenant = UnitOfWork.Connection.ById<TenantRow>(Row.TenantId);
                    var request = new GetNextNumberRequest()
                    {
                        Prefix = tenant.InvoicePaymentNumberUseDate.Value ? tenant.InvoicePaymentNumberPrefix + "/" + DateTime.Now.ToString("yyyyMMdd") : tenant.InvoicePaymentNumberPrefix,
                        Length = tenant.InvoicePaymentNumberLength.Value
                    };
                    var respone = MultiTenantHelper.GetNextNumber(UnitOfWork.Connection, request, MyRow.Fields.Number, tenant.TenantId);
                    Row.Number = respone.Serial;
                    Row.SalesGroup = GetSalesGroup(Row.InvoiceId.Value, UnitOfWork.Connection);
                }

            }
        }
    }
}