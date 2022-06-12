
namespace Indotalent.Settings {

    @Serenity.Decorators.registerClass()
    export class MyCompanyGrid extends Serenity.EntityGrid<MyCompanyRow, any> {
        protected getColumnsKey() { return MyCompanyColumns.columnsKey; }
        protected getDialogType() { return MyCompanyDialog; }
        protected getIdProperty() { return MyCompanyRow.idProperty; }
        protected getInsertPermission() { return MyCompanyRow.insertPermission; }
        protected getLocalTextPrefix() { return MyCompanyRow.localTextPrefix; }
        protected getService() { return MyCompanyService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}