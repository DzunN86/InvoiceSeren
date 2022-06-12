using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using Serenity.Extensions.Entities;
using System;
using System.ComponentModel;
using System.IO;

namespace Indotalent.Settings
{
    [ConnectionKey("Default"), Module("Settings"), TableName("[PurchaseTax]")]
    [DisplayName("Purchase Tax"), InstanceName("Purchase Tax")]
    [ReadPermission("Settings:PurchaseTax")]
    [ModifyPermission("Settings:PurchaseTax")]
    [LookupScript(LookupType = typeof(MultiTenantRowLookupScript<>))]
    public sealed class PurchaseTaxRow : LoggingRow<PurchaseTaxRow.RowFields>, IIdRow, INameRow, IMultiTenantRow
    {
        [DisplayName("Id"), Identity, IdProperty]
        public Int32? Id
        {
            get => fields.Id[this];
            set => fields.Id[this] = value;
        }

        [DisplayName("Name"), Size(10), NotNull, QuickSearch, NameProperty]
        public String Name
        {
            get => fields.Name[this];
            set => fields.Name[this] = value;
        }

        [DisplayName("Description"), Size(1000)]
        public String Description
        {
            get => fields.Description[this];
            set => fields.Description[this] = value;
        }

        [DisplayName("Tax Rate Percentage"), DecimalEditor(MinValue = -100, MaxValue = 100, AllowNegatives = true, Decimals = 2), NotNull]
        public Double? TaxRatePercentage
        {
            get => fields.TaxRatePercentage[this];
            set => fields.TaxRatePercentage[this] = value;
        }

        [DisplayName("Tenant"), ForeignKey("Tenant", "TenantId"), LeftJoin("jTenant")]
        [Insertable(false), Updatable(false)]
        public Int32? TenantId
        {
            get { return Fields.TenantId[this]; }
            set { Fields.TenantId[this] = value; }
        }

        [DisplayName("Tenant"), Expression("jTenant.TenantName")]
        public String TenantName
        {
            get { return Fields.TenantName[this]; }
            set { Fields.TenantName[this] = value; }
        }

        public Int32Field TenantIdField
        {
            get { return Fields.TenantId; }
        }

        public PurchaseTaxRow()
            : base()
        {
        }

        public PurchaseTaxRow(RowFields fields)
            : base(fields)
        {
        }

        public class RowFields : LoggingRowFields
        {
            public Int32Field Id;
            public StringField Name;
            public StringField Description;
            public DoubleField TaxRatePercentage;
            public Int32Field TenantId;
            public StringField TenantName;
        }
    }
}
