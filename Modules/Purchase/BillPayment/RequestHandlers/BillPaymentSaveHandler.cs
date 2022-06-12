using Indotalent.Administration;
using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.SaveRequest<Indotalent.Purchase.BillPaymentRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = Indotalent.Purchase.BillPaymentRow;

namespace Indotalent.Purchase
{
    public interface IBillPaymentSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

    public class BillPaymentSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, IBillPaymentSaveHandler
    {
        public BillPaymentSaveHandler(IRequestContext context)
             : base(context)
        {
        }

        private string GetProcurement(int billId, IDbConnection connection)
        {
            var result = "";

            var data = connection.TryById<BillRow>(billId, q => q
                 .SelectTableFields());
            result = data.ProcurementGroup;

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
                        Prefix = tenant.BillPaymentNumberUseDate.Value ? tenant.BillPaymentNumberPrefix + "/" + DateTime.Now.ToString("yyyyMMdd") : tenant.BillPaymentNumberPrefix,
                        Length = tenant.BillPaymentNumberLength.Value
                    };
                    var respone = MultiTenantHelper.GetNextNumber(UnitOfWork.Connection, request, MyRow.Fields.Number, tenant.TenantId);
                    Row.Number = respone.Serial;
                    Row.ProcurementGroup = GetProcurement(Row.BillId.Value, UnitOfWork.Connection);
                }

            }
        }
    }
}