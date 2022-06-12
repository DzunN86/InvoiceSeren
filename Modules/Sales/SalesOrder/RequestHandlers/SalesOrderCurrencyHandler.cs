using Indotalent.Administration;
using Serenity;
using Serenity.Abstractions;
using Serenity.Data;
using Serenity.Services;
using System.Data;

namespace Indotalent.Sales
{
    public class SalesOrderCurrencyRequest : ServiceRequest
    {
    }

    public class SalesOrderCurrencyResponse : ServiceResponse
    {
        public string Currency { get; set; }
    }
    public interface ISalesOrderCurrencyHandler : IRequestHandler
    {
        SalesOrderCurrencyResponse Currency(IDbConnection connection, SalesOrderCurrencyRequest request);
    }
    public class SalesOrderCurrencyHandler : ISalesOrderCurrencyHandler
    {
        protected IUserAccessor UserAccessor { get; }
        private IUserRetrieveService UserRetriever { get; }
        public SalesOrderCurrencyHandler(IUserAccessor userAccessor, IUserRetrieveService userRetriever)
        {
            UserAccessor = userAccessor;
            UserRetriever = userRetriever;
        }
        public SalesOrderCurrencyResponse Currency(IDbConnection connection, SalesOrderCurrencyRequest request)
        {
            var user = UserAccessor.User?.GetUserDefinition(UserRetriever) as UserDefinition;
            var tenant = connection.First<TenantRow>(x => x.SelectTableFields().Where(TenantRow.Fields.TenantId == user.TenantId));
            var result = new SalesOrderCurrencyResponse();
            result.Currency = tenant.Currency;
            return result;
        }
    }
}
