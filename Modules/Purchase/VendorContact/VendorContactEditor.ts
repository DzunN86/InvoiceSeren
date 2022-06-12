
namespace Indotalent.Purchase {

    @Serenity.Decorators.registerClass()
    export class VendorContactEditor extends Serenity.Extensions.GridEditorBase<VendorContactRow> {
        protected getColumnsKey() { return VendorContactColumns.columnsKey; }
        protected getDialogType() { return VendorContactDialog; }
        protected getLocalTextPrefix() { return VendorContactRow.localTextPrefix; }

        constructor(container: JQuery) {
            super(container);
        }

        protected getColumns() {
            let columns = super.getColumns();

            if (!Q.Authorization.hasPermission("Administration:Tenant")) {
                columns = columns.filter(x => x.field != VendorContactRow.Fields.TenantName && x.field != VendorContactRow.Fields.Id);
            }

            return columns;
        }

    }
}