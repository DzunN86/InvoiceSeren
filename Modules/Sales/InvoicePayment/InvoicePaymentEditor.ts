
namespace Indotalent.Sales {

    @Serenity.Decorators.registerClass()
    export class InvoicePaymentEditor extends Serenity.Extensions.GridEditorBase<InvoicePaymentRow> {
        protected getColumnsKey() { return InvoicePaymentColumns.columnsKey; }
        protected getDialogType() { return InvoicePaymentDialog; }
        protected getLocalTextPrefix() { return InvoicePaymentRow.localTextPrefix; }

        constructor(container: JQuery) {
            super(container);
        }


        protected getColumns() {
            var columns = super.getColumns();

            if (!Q.Authorization.hasPermission("Administration:Tenant")) {
                columns = columns.filter(x => x.field != InvoicePaymentRow.Fields.TenantName && x.field != InvoicePaymentRow.Fields.Id);
            }

            return columns;
        }

        protected updateInterface(): void {
            super.updateInterface();

            var addButton = this.toolbar.findButton('add-button');
            addButton.toggleClass('hide', true);
        }


    }



}