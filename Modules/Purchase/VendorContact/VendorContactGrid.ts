
namespace Indotalent.Purchase {

    @Serenity.Decorators.registerClass()
    export class VendorContactGrid extends Serenity.EntityGrid<VendorContactRow, any> {
        protected getColumnsKey() { return VendorContactColumns.columnsKey; }
        protected getDialogType() { return VendorContactDialog; }
        protected getIdProperty() { return VendorContactRow.idProperty; }
        protected getInsertPermission() { return VendorContactRow.insertPermission; }
        protected getLocalTextPrefix() { return VendorContactRow.localTextPrefix; }
        protected getService() { return VendorContactService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}