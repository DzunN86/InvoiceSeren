
namespace Indotalent.Sales {

    @Serenity.Decorators.registerClass()
    export class SalesOrderDetailGrid extends Serenity.EntityGrid<SalesOrderDetailRow, any> {
        protected getColumnsKey() { return SalesOrderDetailColumns.columnsKey; }
        protected getDialogType() { return SalesOrderDetailDialog; }
        protected getIdProperty() { return SalesOrderDetailRow.idProperty; }
        protected getInsertPermission() { return SalesOrderDetailRow.insertPermission; }
        protected getLocalTextPrefix() { return SalesOrderDetailRow.localTextPrefix; }
        protected getService() { return SalesOrderDetailService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}