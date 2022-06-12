
namespace Indotalent.Purchase {

    @Serenity.Decorators.registerClass()
    export class BillDetailGrid extends Serenity.EntityGrid<BillDetailRow, any> {
        protected getColumnsKey() { return BillDetailColumns.columnsKey; }
        protected getDialogType() { return BillDetailDialog; }
        protected getIdProperty() { return BillDetailRow.idProperty; }
        protected getInsertPermission() { return BillDetailRow.insertPermission; }
        protected getLocalTextPrefix() { return BillDetailRow.localTextPrefix; }
        protected getService() { return BillDetailService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}