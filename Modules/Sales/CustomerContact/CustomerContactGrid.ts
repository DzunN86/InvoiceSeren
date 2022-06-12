
namespace Indotalent.Sales {

    @Serenity.Decorators.registerClass()
    export class CustomerContactGrid extends Serenity.EntityGrid<CustomerContactRow, any> {
        protected getColumnsKey() { return CustomerContactColumns.columnsKey; }
        protected getDialogType() { return CustomerContactDialog; }
        protected getIdProperty() { return CustomerContactRow.idProperty; }
        protected getInsertPermission() { return CustomerContactRow.insertPermission; }
        protected getLocalTextPrefix() { return CustomerContactRow.localTextPrefix; }
        protected getService() { return CustomerContactService.baseUrl; }

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