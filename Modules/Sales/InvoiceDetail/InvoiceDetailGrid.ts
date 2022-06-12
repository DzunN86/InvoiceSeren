
namespace Indotalent.Sales {

    @Serenity.Decorators.registerClass()
    export class InvoiceDetailGrid extends Serenity.EntityGrid<InvoiceDetailRow, any> {
        protected getColumnsKey() { return InvoiceDetailColumns.columnsKey; }
        protected getDialogType() { return InvoiceDetailDialog; }
        protected getIdProperty() { return InvoiceDetailRow.idProperty; }
        protected getInsertPermission() { return InvoiceDetailRow.insertPermission; }
        protected getLocalTextPrefix() { return InvoiceDetailRow.localTextPrefix; }
        protected getService() { return InvoiceDetailService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}