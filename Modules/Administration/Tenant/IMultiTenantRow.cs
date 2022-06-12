using Serenity.Data;

namespace Indotalent
{
    public interface IMultiTenantRow
    {
        Int32Field TenantIdField { get; }
    }
}
