
namespace Indotalent.Sales {

    @Serenity.Decorators.registerClass()
    export class InvoiceEditor extends Serenity.Extensions.GridEditorBase<InvoiceRow> {
        protected getColumnsKey() { return InvoiceColumns.columnsKey; }
        protected getDialogType() { return InvoiceDialog; }
        protected getLocalTextPrefix() { return InvoiceRow.localTextPrefix; }

        constructor(container: JQuery) {
            super(container);
        }


        protected getColumns() {
            var columns = super.getColumns();

            if (!Q.Authorization.hasPermission("Administration:Tenant")) {
                columns = columns.filter(x => x.field != InvoiceRow.Fields.TenantName && x.field != InvoiceRow.Fields.Id);
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