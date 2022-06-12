
namespace Indotalent.Purchase {

    @Serenity.Decorators.registerClass()
    export class BillEditor extends Serenity.Extensions.GridEditorBase<BillRow> {
        protected getColumnsKey() { return BillColumns.columnsKey; }
        protected getDialogType() { return BillDialog; }
        protected getLocalTextPrefix() { return BillRow.localTextPrefix; }

        constructor(container: JQuery) {
            super(container);
        }


        protected getColumns() {
            var columns = super.getColumns();

            if (!Q.Authorization.hasPermission("Administration:Tenant")) {
                columns = columns.filter(x => x.field != BillRow.Fields.TenantName && x.field != BillRow.Fields.Id);
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