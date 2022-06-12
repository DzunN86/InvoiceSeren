using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System;
using System.ComponentModel;
using System.IO;

namespace Indotalent.Purchase
{
    [ConnectionKey("Default"), Module("Purchase"), TableName("VendorContact")]
    [DisplayName("Vendor Contact"), InstanceName("Vendor Contact")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class VendorContactRow : Row<VendorContactRow.RowFields>, IIdRow, INameRow
    {
        [DisplayName("Id"), Identity, IdProperty]
        public int? Id
        {
            get => fields.Id[this];
            set => fields.Id[this] = value;
        }

        [DisplayName("Vendor Id"), NotNull]
        public int? VendorId
        {
            get => fields.VendorId[this];
            set => fields.VendorId[this] = value;
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

        [DisplayName("Insert Date")]
        public DateTime? InsertDate
        {
            get => fields.InsertDate[this];
            set => fields.InsertDate[this] = value;
        }

        [DisplayName("Insert User Id")]
        public int? InsertUserId
        {
            get => fields.InsertUserId[this];
            set => fields.InsertUserId[this] = value;
        }

        [DisplayName("Update Date")]
        public DateTime? UpdateDate
        {
            get => fields.UpdateDate[this];
            set => fields.UpdateDate[this] = value;
        }

        [DisplayName("Update User Id")]
        public int? UpdateUserId
        {
            get => fields.UpdateUserId[this];
            set => fields.UpdateUserId[this] = value;
        }

        [DisplayName("Tenant Id"), NotNull]
        public int? TenantId
        {
            get => fields.TenantId[this];
            set => fields.TenantId[this] = value;
        }

        public VendorContactRow()
            : base()
        {
        }

        public VendorContactRow(RowFields fields)
            : base(fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public Int32Field VendorId;
            public StringField Name;
            public StringField Description;
            public StringField Street;
            public StringField City;
            public StringField State;
            public StringField ZipCode;
            public StringField Phone;
            public StringField Email;
            public DateTimeField InsertDate;
            public Int32Field InsertUserId;
            public DateTimeField UpdateDate;
            public Int32Field UpdateUserId;
            public Int32Field TenantId;
        }
    }
}
