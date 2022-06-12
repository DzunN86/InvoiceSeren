
namespace Indotalent.Settings {

    @Serenity.Decorators.registerClass()
    export class SalesTaxGrid extends Serenity.EntityGrid<SalesTaxRow, any> {
        protected getColumnsKey() { return SalesTaxColumns.columnsKey; }
        protected getDialogType() { return SalesTaxDialog; }
        protected getIdProperty() { return SalesTaxRow.idProperty; }
        protected getInsertPermission() { return SalesTaxRow.insertPermission; }
        protected getLocalTextPrefix() { return SalesTaxRow.localTextPrefix; }
        protected getService() { return SalesTaxService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}