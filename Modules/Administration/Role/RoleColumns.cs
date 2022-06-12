using Serenity.ComponentModel;
using System;
using System.ComponentModel;

namespace Indotalent.Administration.Forms
{
    [ColumnsScript("Administration.Role")]
    [BasedOnRow(typeof(Entities.RoleRow), CheckNames = true)]
    public class RoleColumns
    {
        [EditLink, AlignRight]
        public Int32 RoleId { get; set; }
        [EditLink, Width(300), SortOrder(-1)]
        public String RoleName { get; set; }
        [Width(200)]
        public String TenantName { get; set; }
    }
}