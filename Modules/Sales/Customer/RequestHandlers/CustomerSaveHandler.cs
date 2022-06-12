using Indotalent.Administration;
using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.SaveRequest<Indotalent.Sales.CustomerRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = Indotalent.Sales.CustomerRow;

namespace Indotalent.Sales
{
    public interface ICustomerSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

    public class CustomerSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, ICustomerSaveHandler
    {
        public CustomerSaveHandler(IRequestContext context)
             : base(context)
        {
        }
        protected override void BeforeSave()
        {
            base.BeforeSave();


            if (this.IsCreate)
            {
                if (Row.Name.ToLower().Equals("auto"))
                {
                    var tenant = UnitOfWork.Connection.ById<TenantRow>(Row.TenantId);
                    var request = new GetNextNumberRequest()
                    {
                        Prefix = tenant.CustomerNumberUseDate.Value ? tenant.CustomerNumberPrefix + "/" + DateTime.Now.ToString("yyyyMMdd") : tenant.CustomerNumberPrefix,
                        Length = tenant.CustomerNumberLength.Value
                    };
                    var respone = MultiTenantHelper.GetNextNumber(UnitOfWork.Connection, request, MyRow.Fields.Name, tenant.TenantId);
                    Row.Name = respone.Serial;
                }

            }
        }
    }
}