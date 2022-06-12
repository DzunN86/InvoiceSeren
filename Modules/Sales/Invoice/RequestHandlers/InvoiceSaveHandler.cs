using Indotalent.Administration;
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


        private string GetSalesGroup(int salesOrderId, IDbConnection connection)
        {
            var result = "";

            var data = connection.TryById<SalesOrderRow>(salesOrderId, q => q
                 .SelectTableFields());
            result = data.SalesGroup;

            return result;
        }

        protected override void BeforeSave()
        {
            base.BeforeSave();

            Row.SubTotal = 0;
            Row.BeforeTax = 0;
            Row.Discount = 0;
            Row.TaxAmount = 0;
            Row.Total = 0;
            foreach (var item in Row.ItemList)
            {
                Row.SubTotal += item.SubTotal;
                Row.BeforeTax += item.BeforeTax;
                Row.Discount += item.Discount;
                Row.TaxAmount += item.TaxAmount;
                Row.Total += item.Total;
            }

            Row.Total += Row.OtherCharge;

            if (this.IsCreate)
            {
                if (Row.Number.ToLower().Equals("auto"))
                {
                    var tenant = UnitOfWork.Connection.ById<TenantRow>(Row.TenantId);
                    var request = new GetNextNumberRequest()
                    {
                        Prefix = tenant.InvoiceNumberUseDate.Value ? tenant.InvoiceNumberPrefix + "/" + DateTime.Now.ToString("yyyyMMdd") : tenant.InvoiceNumberPrefix,
                        Length = tenant.InvoiceNumberLength.Value
                    };
                    var respone = MultiTenantHelper.GetNextNumber(UnitOfWork.Connection, request, MyRow.Fields.Number, tenant.TenantId);
                    Row.Number = respone.Serial;
                    Row.SalesGroup = GetSalesGroup(Row.SalesOrderId.Value, UnitOfWork.Connection);
                }

            }
        }
    }
}