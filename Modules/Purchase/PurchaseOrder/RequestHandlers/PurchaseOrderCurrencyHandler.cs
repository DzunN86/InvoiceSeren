using Indotalent.Administration;
using Serenity;
using Serenity.Abstractions;
using Serenity.Data;
using Serenity.Services;
using System.Data;

namespace Indotalent.Purchase
{
    public class PurchaseOrderCurrencyRequest : ServiceRequest
    {
    }

    public class PurchaseOrderCurrencyResponse : ServiceResponse
    {
        public string Currency { get; set; }
    }
    public interface IPurchaseOrderCurrencyHandler : IRequestHandler
    {
        PurchaseOrderCurrencyResponse Currency(IDbConnection connection, PurchaseOrderCurrencyRequest request);
    }
    public class PurchaseOrderCurrencyHandler : IPurchaseOrderCurrencyHandler
    {
        protected IUserAccessor UserAccessor { get; }
        private IUserRetrieveService UserRetriever { get; }
        public PurchaseOrderCurrencyHandler(IUserAccessor userAccessor, IUserRetrieveService userRetriever)
        {
            UserAccessor = userAccessor;
            UserRetriever = userRetriever;
        }
        public PurchaseOrderCurrencyResponse Currency(IDbConnection connection, PurchaseOrderCurrencyRequest request)
        {
            var user = UserAccessor.User?.GetUserDefinition(UserRetriever) as UserDefinition;
            var tenant = connection.First<TenantRow>(x => x.SelectTableFields().Where(TenantRow.Fields.TenantId == user.TenantId));
            var result = new PurchaseOrderCurrencyResponse();
            result.Currency = tenant.Currency;
            return result;
        }
    }
}
