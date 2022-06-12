using Indotalent.Administration;
using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.SaveRequest<Indotalent.Purchase.BillRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = Indotalent.Purchase.BillRow;

namespace Indotalent.Purchase
{
    public interface IBillSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

    public class BillSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, IBillSaveHandler
    {
        public BillSaveHandler(IRequestContext context)
             : base(context)
        {
        }

        private string GetProcurement(int purchaseOrderId, IDbConnection connection)
        {
            var result = "";

            var data = connection.TryById<PurchaseOrderRow>(purchaseOrderId, q => q
                 .SelectTableFields());
            result = data.ProcurementGroup;

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
                        Prefix = tenant.BillNumberUseDate.Value ? tenant.BillNumberPrefix + "/" + DateTime.Now.ToString("yyyyMMdd") : tenant.BillNumberPrefix,
                        Length = tenant.BillNumberLength.Value
                    };
                    var respone = MultiTenantHelper.GetNextNumber(UnitOfWork.Connection, request, MyRow.Fields.Number, tenant.TenantId);
                    Row.Number = respone.Serial;
                    Row.ProcurementGroup = GetProcurement(Row.PurchaseOrderId.Value, UnitOfWork.Connection);
                }

            }
        }
    }
}