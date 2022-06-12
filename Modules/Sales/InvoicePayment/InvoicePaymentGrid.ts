
namespace Indotalent.Sales {

    @Serenity.Decorators.registerClass()
    export class InvoicePaymentGrid extends Serenity.EntityGrid<InvoicePaymentRow, any> {
        protected getColumnsKey() { return InvoicePaymentColumns.columnsKey; }
        protected getDialogType() { return InvoicePaymentDialog; }
        protected getIdProperty() { return InvoicePaymentRow.idProperty; }
        protected getInsertPermission() { return InvoicePaymentRow.insertPermission; }
        protected getLocalTextPrefix() { return InvoicePaymentRow.localTextPrefix; }
        protected getService() { return InvoicePaymentService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}