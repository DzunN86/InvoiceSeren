
namespace Indotalent.Purchase {

    @Serenity.Decorators.registerClass()
    export class BillPaymentEditor extends Serenity.Extensions.GridEditorBase<BillPaymentRow> {
        protected getColumnsKey() { return BillPaymentColumns.columnsKey; }
        protected getDialogType() { return BillPaymentDialog; }
        protected getLocalTextPrefix() { return BillPaymentRow.localTextPrefix; }

        constructor(container: JQuery) {
            super(container);
        }


        protected getColumns() {
            var columns = super.getColumns();

            if (!Q.Authorization.hasPermission("Administration:Tenant")) {
                columns = columns.filter(x => x.field != BillPaymentRow.Fields.TenantName && x.field != BillPaymentRow.Fields.Id);
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