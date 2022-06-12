using Indotalent.Administration;
using Serenity;
using Serenity.Abstractions;
using Serenity.Data;
using Serenity.Services;
using System.Data;

namespace Indotalent.Sales
{
    public class InvoicePaymentCurrencyRequest : ServiceRequest
    {
    }

    public class InvoicePaymentCurrencyResponse : ServiceResponse
    {
        public string Currency { get; set; }
    }
    public interface IInvoicePaymentCurrencyHandler : IRequestHandler
    {
        InvoicePaymentCurrencyResponse Currency(IDbConnection connection, InvoicePaymentCurrencyRequest request);
    }
    public class InvoicePaymentCurrencyHandler : IInvoicePaymentCurrencyHandler
    {
        protected IUserAccessor UserAccessor { get; }
        private IUserRetrieveService UserRetriever { get; }
        public InvoicePaymentCurrencyHandler(IUserAccessor userAccessor, IUserRetrieveService userRetriever)
        {
            UserAccessor = userAccessor;
            UserRetriever = userRetriever;
        }
        public InvoicePaymentCurrencyResponse Currency(IDbConnection connection, InvoicePaymentCurrencyRequest request)
        {
            var user = UserAccessor.User?.GetUserDefinition(UserRetriever) as UserDefinition;
            var tenant = connection.First<TenantRow>(x => x.SelectTableFields().Where(TenantRow.Fields.TenantId == user.TenantId));
            var result = new InvoicePaymentCurrencyResponse();
            result.Currency = tenant.Currency;
            return result;
        }
    }
}
