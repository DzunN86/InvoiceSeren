
namespace Indotalent.Settings {

    @Serenity.Decorators.registerClass()
    export class PurchaseTaxGrid extends Serenity.EntityGrid<PurchaseTaxRow, any> {
        protected getColumnsKey() { return PurchaseTaxColumns.columnsKey; }
        protected getDialogType() { return PurchaseTaxDialog; }
        protected getIdProperty() { return PurchaseTaxRow.idProperty; }
        protected getInsertPermission() { return PurchaseTaxRow.insertPermission; }
        protected getLocalTextPrefix() { return PurchaseTaxRow.localTextPrefix; }
        protected getService() { return PurchaseTaxService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}