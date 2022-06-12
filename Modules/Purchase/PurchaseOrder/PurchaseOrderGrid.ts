
namespace Indotalent.Purchase {

    @Serenity.Decorators.registerClass()
    export class PurchaseOrderGrid extends Serenity.EntityGrid<PurchaseOrderRow, any> {
        protected getColumnsKey() { return PurchaseOrderColumns.columnsKey; }
        protected getDialogType() { return PurchaseOrderDialog; }
        protected getIdProperty() { return PurchaseOrderRow.idProperty; }
        protected getInsertPermission() { return PurchaseOrderRow.insertPermission; }
        protected getLocalTextPrefix() { return PurchaseOrderRow.localTextPrefix; }
        protected getService() { return PurchaseOrderService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}