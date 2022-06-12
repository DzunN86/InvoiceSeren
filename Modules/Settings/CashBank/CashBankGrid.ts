
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

        protected getColumns() {
            let columns = super.getColumns();

            if (!Q.Authorization.hasPermission("Administration:Tenant")) {
                columns = columns.filter(x => x.field != CashBankRow.Fields.TenantName && x.field != CashBankRow.Fields.Id);
            }

            return columns;
        }

        protected getButtons() {
            var buttons = super.getButtons();

            buttons.push(Serenity.Extensions.ExcelExportHelper.createToolButton({
                grid: this,
                service: this.getService() + '/ListExcel',
                onViewSubmit: () => this.onViewSubmit(),
                separator: true
            }));

            buttons.push(Serenity.Extensions.PdfExportHelper.createToolButton({
                grid: this,
                onViewSubmit: () => this.onViewSubmit()
            }));

            return buttons;
        }
    }
}