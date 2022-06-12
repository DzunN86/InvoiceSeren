
namespace Indotalent.Settings {

    @Serenity.Decorators.registerClass()
    export class CashBankGrid extends Serenity.EntityGrid<CashBankRow, any> {
        protected getColumnsKey() { return CashBankColumns.columnsKey; }
        protected getDialogType() { return CashBankDialog; }
        protected getIdProperty() { return CashBankRow.idProperty; }
        protected getInsertPermission() { return CashBankRow.insertPermission; }
        protected getLocalTextPrefix() { return CashBankRow.localTextPrefix; }
        protected getService() { return CashBankService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}