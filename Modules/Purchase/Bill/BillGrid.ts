
namespace Indotalent.Purchase {

    @Serenity.Decorators.registerClass()
    export class BillGrid extends Serenity.EntityGrid<BillRow, any> {
        protected getColumnsKey() { return BillColumns.columnsKey; }
        protected getDialogType() { return BillDialog; }
        protected getIdProperty() { return BillRow.idProperty; }
        protected getInsertPermission() { return BillRow.insertPermission; }
        protected getLocalTextPrefix() { return BillRow.localTextPrefix; }
        protected getService() { return BillService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}