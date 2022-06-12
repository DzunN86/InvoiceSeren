using Serenity;
using Serenity.Abstractions;
using Serenity.Data;
using Serenity.Data.Mapping;
using Serenity.Web;
using System;

namespace Indotalent
{

    public class MultiTenantRowLookupScript<TRow> : RowLookupScript<TRow>
        where TRow : class, IRow, IMultiTenantRow, new()
    {
        protected IUserRetrieveService UserRetrieveService { get; }
        protected IUserAccessor UserAccessor { get; }
        protected ITwoLevelCache Cache { get; }
        public MultiTenantRowLookupScript(ISqlConnections connections, IUserRetrieveService userRetrieveService, IUserAccessor userAccessor, ITwoLevelCache cache) : base(connections)
        {
            Expiration = TimeSpan.FromDays(-1);
            UserRetrieveService = userRetrieveService ?? throw new ArgumentNullException(nameof(userRetrieveService));
            UserAccessor = userAccessor ?? throw new ArgumentNullException(nameof(userAccessor));
            Cache = cache ?? throw new ArgumentNullException(nameof(cache));
        }

        protected override void PrepareQuery(SqlQuery query)
        {
            base.PrepareQuery(query);
            query.OrderBy("T0.[Id]", desc: true);
            AddTenantFilter(query);
        }

        protected void AddTenantFilter(SqlQuery query)
        {
            var user = UserAccessor.User?.GetUserDefinition(UserRetrieveService) as UserDefinition;
            var r = new TRow();
            query.Where(r.TenantIdField == user.TenantId);
        }

        public override string GetScript()
        {
            var user = UserAccessor.User?.GetUserDefinition(UserRetrieveService) as UserDefinition;

            return Cache.GetLocalStoreOnly("MultiTenantLookup:" +
                    this.ScriptName + ":" +
                    user.TenantId,
                    TimeSpan.FromHours(1),
                new TRow().GetFields().GenerationKey, () =>
                {
                    return base.GetScript();
                });
        }
    }
}
