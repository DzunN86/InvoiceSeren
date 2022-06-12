
namespace Indotalent.Purchase {

    @Serenity.Decorators.registerClass()
    export class VendorGrid extends Serenity.EntityGrid<VendorRow, any> {
        protected getColumnsKey() { return VendorColumns.columnsKey; }
        protected getDialogType() { return VendorDialog; }
        protected getIdProperty() { return VendorRow.idProperty; }
        protected getInsertPermission() { return VendorRow.insertPermission; }
        protected getLocalTextPrefix() { return VendorRow.localTextPrefix; }
        protected getService() { return VendorService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}