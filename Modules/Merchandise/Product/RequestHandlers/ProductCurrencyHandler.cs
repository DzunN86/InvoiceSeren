using Indotalent.Administration;
using Serenity;
using Serenity.Abstractions;
using Serenity.Data;
using Serenity.Services;
using System.Data;

namespace Indotalent.Merchandise
{
    public class ProductCurrencyRequest : ServiceRequest
    {
    }

    public class ProductCurrencyResponse : ServiceResponse
    {
        public string Currency { get; set; }
    }
    public interface IProductCurrencyHandler : IRequestHandler
    {
        ProductCurrencyResponse Currency(IDbConnection connection, ProductCurrencyRequest request);
    }
    public class ProductCurrencyHandler : IProductCurrencyHandler
    {
        protected IUserAccessor UserAccessor { get; }
        private IUserRetrieveService UserRetriever { get; }
        public ProductCurrencyHandler(IUserAccessor userAccessor, IUserRetrieveService userRetriever)
        {
            UserAccessor = userAccessor;
            UserRetriever = userRetriever;
        }
        public ProductCurrencyResponse Currency(IDbConnection connection, ProductCurrencyRequest request)
        {
            var user = UserAccessor.User?.GetUserDefinition(UserRetriever) as UserDefinition;
            var tenant = connection.First<TenantRow>(x => x.SelectTableFields().Where(TenantRow.Fields.TenantId == user.TenantId));
            var result = new ProductCurrencyResponse();
            result.Currency = tenant.Currency;
            return result;
        }
    }
}
