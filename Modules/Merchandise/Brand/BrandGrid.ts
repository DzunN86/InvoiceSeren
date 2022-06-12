
namespace Indotalent.Merchandise {

    @Serenity.Decorators.registerClass()
    export class BrandGrid extends Serenity.EntityGrid<BrandRow, any> {
        protected getColumnsKey() { return BrandColumns.columnsKey; }
        protected getDialogType() { return BrandDialog; }
        protected getIdProperty() { return BrandRow.idProperty; }
        protected getInsertPermission() { return BrandRow.insertPermission; }
        protected getLocalTextPrefix() { return BrandRow.localTextPrefix; }
        protected getService() { return BrandService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}