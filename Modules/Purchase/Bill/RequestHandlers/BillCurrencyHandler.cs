using Indotalent.Administration;
using Serenity;
using Serenity.Abstractions;
using Serenity.Data;
using Serenity.Services;
using System.Data;

namespace Indotalent.Purchase
{
    public class BillCurrencyRequest : ServiceRequest
    {
    }

    public class BillCurrencyResponse : ServiceResponse
    {
        public string Currency { get; set; }
    }
    public interface IBillCurrencyHandler : IRequestHandler
    {
        BillCurrencyResponse Currency(IDbConnection connection, BillCurrencyRequest request);
    }
    public class BillCurrencyHandler : IBillCurrencyHandler
    {
        protected IUserAccessor UserAccessor { get; }
        private IUserRetrieveService UserRetriever { get; }
        public BillCurrencyHandler(IUserAccessor userAccessor, IUserRetrieveService userRetriever)
        {
            UserAccessor = userAccessor;
            UserRetriever = userRetriever;
        }
        public BillCurrencyResponse Currency(IDbConnection connection, BillCurrencyRequest request)
        {
            var user = UserAccessor.User?.GetUserDefinition(UserRetriever) as UserDefinition;
            var tenant = connection.First<TenantRow>(x => x.SelectTableFields().Where(TenantRow.Fields.TenantId == user.TenantId));
            var result = new BillCurrencyResponse();
            result.Currency = tenant.Currency;
            return result;
        }
    }
}
