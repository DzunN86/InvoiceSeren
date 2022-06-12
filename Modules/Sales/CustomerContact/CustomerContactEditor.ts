
namespace Indotalent.Sales {

    @Serenity.Decorators.registerClass()
    export class CustomerContactEditor extends Serenity.Extensions.GridEditorBase<CustomerContactRow> {
        protected getColumnsKey() { return CustomerContactColumns.columnsKey; }
        protected getDialogType() { return CustomerContactDialog; }
        protected getLocalTextPrefix() { return CustomerContactRow.localTextPrefix; }

        constructor(container: JQuery) {
            super(container);
        }

        protected getColumns() {
            let columns = super.getColumns();

            if (!Q.Authorization.hasPermission("Administration:Tenant")) {
                columns = columns.filter(x => x.field != CustomerContactRow.Fields.TenantName && x.field != CustomerContactRow.Fields.Id);
            }

            return columns;
        }

    }
}