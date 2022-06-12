
namespace Indotalent.Purchase {

    @Serenity.Decorators.registerClass()
    export class BillPaymentGrid extends Serenity.EntityGrid<BillPaymentRow, any> {
        protected getColumnsKey() { return BillPaymentColumns.columnsKey; }
        protected getDialogType() { return BillPaymentDialog; }
        protected getIdProperty() { return BillPaymentRow.idProperty; }
        protected getInsertPermission() { return BillPaymentRow.insertPermission; }
        protected getLocalTextPrefix() { return BillPaymentRow.localTextPrefix; }
        protected getService() { return BillPaymentService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}