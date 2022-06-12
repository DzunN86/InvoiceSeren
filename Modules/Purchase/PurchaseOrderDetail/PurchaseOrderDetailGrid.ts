
namespace Indotalent.Purchase {

    @Serenity.Decorators.registerClass()
    export class PurchaseOrderDetailGrid extends Serenity.EntityGrid<PurchaseOrderDetailRow, any> {
        protected getColumnsKey() { return PurchaseOrderDetailColumns.columnsKey; }
        protected getDialogType() { return PurchaseOrderDetailDialog; }
        protected getIdProperty() { return PurchaseOrderDetailRow.idProperty; }
        protected getInsertPermission() { return PurchaseOrderDetailRow.insertPermission; }
        protected getLocalTextPrefix() { return PurchaseOrderDetailRow.localTextPrefix; }
        protected getService() { return PurchaseOrderDetailService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}