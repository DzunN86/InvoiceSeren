using Indotalent.Administration;
using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.SaveRequest<Indotalent.Purchase.VendorRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = Indotalent.Purchase.VendorRow;

namespace Indotalent.Purchase
{
    public interface IVendorSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

    public class VendorSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, IVendorSaveHandler
    {
        public VendorSaveHandler(IRequestContext context)
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
                        Prefix = tenant.VendorNumberUseDate.Value ? tenant.VendorNumberPrefix + "/" + DateTime.Now.ToString("yyyyMMdd") : tenant.VendorNumberPrefix,
                        Length = tenant.VendorNumberLength.Value
                    };
                    var respone = MultiTenantHelper.GetNextNumber(UnitOfWork.Connection, request, MyRow.Fields.Name, tenant.TenantId);
                    Row.Name = respone.Serial;
                }

            }
        }
    }
}