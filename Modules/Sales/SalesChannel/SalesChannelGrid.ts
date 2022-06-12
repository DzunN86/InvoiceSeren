
namespace Indotalent.Sales {

    @Serenity.Decorators.registerClass()
    export class SalesChannelGrid extends Serenity.EntityGrid<SalesChannelRow, any> {
        protected getColumnsKey() { return SalesChannelColumns.columnsKey; }
        protected getDialogType() { return SalesChannelDialog; }
        protected getIdProperty() { return SalesChannelRow.idProperty; }
        protected getInsertPermission() { return SalesChannelRow.insertPermission; }
        protected getLocalTextPrefix() { return SalesChannelRow.localTextPrefix; }
        protected getService() { return SalesChannelService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}