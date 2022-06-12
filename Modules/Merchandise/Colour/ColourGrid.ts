
namespace Indotalent.Merchandise {

    @Serenity.Decorators.registerClass()
    export class ColourGrid extends Serenity.EntityGrid<ColourRow, any> {
        protected getColumnsKey() { return ColourColumns.columnsKey; }
        protected getDialogType() { return ColourDialog; }
        protected getIdProperty() { return ColourRow.idProperty; }
        protected getInsertPermission() { return ColourRow.insertPermission; }
        protected getLocalTextPrefix() { return ColourRow.localTextPrefix; }
        protected getService() { return ColourService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}