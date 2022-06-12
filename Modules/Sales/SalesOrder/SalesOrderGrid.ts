
namespace Indotalent.Sales {

    @Serenity.Decorators.registerClass()
    export class SalesOrderGrid extends Serenity.EntityGrid<SalesOrderRow, any> {
        protected getColumnsKey() { return SalesOrderColumns.columnsKey; }
        protected getDialogType() { return SalesOrderDialog; }
        protected getIdProperty() { return SalesOrderRow.idProperty; }
        protected getInsertPermission() { return SalesOrderRow.insertPermission; }
        protected getLocalTextPrefix() { return SalesOrderRow.localTextPrefix; }
        protected getService() { return SalesOrderService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}