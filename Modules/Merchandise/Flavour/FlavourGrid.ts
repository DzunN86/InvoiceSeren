
namespace Indotalent.Merchandise {

    @Serenity.Decorators.registerClass()
    export class FlavourGrid extends Serenity.EntityGrid<FlavourRow, any> {
        protected getColumnsKey() { return FlavourColumns.columnsKey; }
        protected getDialogType() { return FlavourDialog; }
        protected getIdProperty() { return FlavourRow.idProperty; }
        protected getInsertPermission() { return FlavourRow.insertPermission; }
        protected getLocalTextPrefix() { return FlavourRow.localTextPrefix; }
        protected getService() { return FlavourService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}