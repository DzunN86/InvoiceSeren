using Indotalent.Administration;
using Serenity;
using Serenity.Abstractions;
using Serenity.Data;
using Serenity.Services;
using System.Data;

namespace Indotalent.Sales
{
    public class InvoiceCurrencyRequest : ServiceRequest
    {
    }

    public class InvoiceCurrencyResponse : ServiceResponse
    {
        public string Currency { get; set; }
    }
    public interface IInvoiceCurrencyHandler : IRequestHandler
    {
        InvoiceCurrencyResponse Currency(IDbConnection connection, InvoiceCurrencyRequest request);
    }
    public class InvoiceCurrencyHandler : IInvoiceCurrencyHandler
    {
        protected IUserAccessor UserAccessor { get; }
        private IUserRetrieveService UserRetriever { get; }
        public InvoiceCurrencyHandler(IUserAccessor userAccessor, IUserRetrieveService userRetriever)
        {
            UserAccessor = userAccessor;
            UserRetriever = userRetriever;
        }
        public InvoiceCurrencyResponse Currency(IDbConnection connection, InvoiceCurrencyRequest request)
        {
            var user = UserAccessor.User?.GetUserDefinition(UserRetriever) as UserDefinition;
            var tenant = connection.First<TenantRow>(x => x.SelectTableFields().Where(TenantRow.Fields.TenantId == user.TenantId));
            var result = new InvoiceCurrencyResponse();
            result.Currency = tenant.Currency;
            return result;
        }
    }
}
