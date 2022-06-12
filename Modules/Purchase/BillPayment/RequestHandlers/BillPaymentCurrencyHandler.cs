using Indotalent.Administration;
using Serenity;
using Serenity.Abstractions;
using Serenity.Data;
using Serenity.Services;
using System.Data;

namespace Indotalent.Purchase
{
    public class BillPaymentCurrencyRequest : ServiceRequest
    {
    }

    public class BillPaymentCurrencyResponse : ServiceResponse
    {
        public string Currency { get; set; }
    }
    public interface IBillPaymentCurrencyHandler : IRequestHandler
    {
        BillPaymentCurrencyResponse Currency(IDbConnection connection, BillPaymentCurrencyRequest request);
    }
    public class BillPaymentCurrencyHandler : IBillPaymentCurrencyHandler
    {
        protected IUserAccessor UserAccessor { get; }
        private IUserRetrieveService UserRetriever { get; }
        public BillPaymentCurrencyHandler(IUserAccessor userAccessor, IUserRetrieveService userRetriever)
        {
            UserAccessor = userAccessor;
            UserRetriever = userRetriever;
        }
        public BillPaymentCurrencyResponse Currency(IDbConnection connection, BillPaymentCurrencyRequest request)
        {
            var user = UserAccessor.User?.GetUserDefinition(UserRetriever) as UserDefinition;
            var tenant = connection.First<TenantRow>(x => x.SelectTableFields().Where(TenantRow.Fields.TenantId == user.TenantId));
            var result = new BillPaymentCurrencyResponse();
            result.Currency = tenant.Currency;
            return result;
        }
    }
}
