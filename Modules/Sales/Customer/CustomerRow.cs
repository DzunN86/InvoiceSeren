using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using Serenity.Extensions.Entities;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.IO;

namespace Indotalent.Sales
{
    [ConnectionKey("Default"), Module("Sales"), TableName("Customer")]
    [DisplayName("Customer"), InstanceName("Customer")]
    // [LookupScript(LookupType = typeof(MultiTenantRowLookupScript<>))]
    [ReadPermission("Sales:Customer")]
    [ModifyPermission("Sales:Customer")]
    public sealed class CustomerRow : Row<CustomerRow.RowFields>, IIdRow, INameRow
    {
        [DisplayName("Id"), Identity, IdProperty]
        public int? Id
        {
            get => fields.Id[this];
            set => fields.Id[this] = value;
        }

        [DisplayName("Name"), Size(200), NotNull, QuickSearch, NameProperty]
        public string Name
        {
            get => fields.Name[this];
            set => fields.Name[this] = value;
        }

        [DisplayName("Description"), Size(1000)]
        public string Description
        {
            get => fields.Description[this];
            set => fields.Description[this] = value;
        }

        [DisplayName("Street"), Size(200)]
        public string Street
        {
            get => fields.Street[this];
            set => fields.Street[this] = value;
        }

        [DisplayName("City"), Size(200)]
        public string City
        {
            get => fields.City[this];
            set => fields.City[this] = value;
        }

        [DisplayName("State"), Size(200)]
        public string State
        {
            get => fields.State[this];
            set => fields.State[this] = value;
        }

        [DisplayName("Zip Code"), Size(10)]
        public string ZipCode
        {
            get => fields.ZipCode[this];
            set => fields.ZipCode[this] = value;
        }

        [DisplayName("Phone"), Size(50)]
        public string Phone
        {
            get => fields.Phone[this];
            set => fields.Phone[this] = value;
        }

        [DisplayName("Email"), Size(200)]
        public string Email
        {
            get => fields.Email[this];
            set => fields.Email[this] = value;
        }

        [DisplayName("Contacts"), MasterDetailRelation(foreignKey: "CustomerId"), NotMapped]
        public List<CustomerContactRow> ContactList
        {
            get => fields.ContactList[this];
            set => fields.ContactList[this] = value;
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
        
        public CustomerRow()
            : base()
        {
        }

        public CustomerRow(RowFields fields)
            : base(fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public StringField Name;
            public StringField Description;
            public StringField Street;
            public StringField City;
            public StringField State;
            public StringField ZipCode;
            public StringField Phone;
            public StringField Email;
            public Int32Field TenantId;
            public StringField TenantName;
            public RowListField<CustomerContactRow> ContactList;
        }
    }
}
