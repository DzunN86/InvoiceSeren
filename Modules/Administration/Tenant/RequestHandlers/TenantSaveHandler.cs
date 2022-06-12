using Indotalent.Settings;
using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.SaveRequest<Indotalent.Administration.TenantRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = Indotalent.Administration.TenantRow;

namespace Indotalent.Administration
{
    public interface ITenantSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

    public class TenantSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, ITenantSaveHandler
    {
        public TenantSaveHandler(IRequestContext context)
             : base(context)
        {
        }

        protected override void AfterSave()
        {
            base.AfterSave();

            if (this.IsCreate && Permissions.HasPermission(PermissionKeys.Tenant))
            {
                MultiTenantHelper.GenerateDefaultBusinessEntity(this.Connection, Row.TenantId);
            }
        }
    }
}