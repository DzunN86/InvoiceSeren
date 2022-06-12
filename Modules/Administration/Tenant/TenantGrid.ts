
namespace Indotalent.Administration {

    @Serenity.Decorators.registerClass()
    export class TenantGrid extends Serenity.EntityGrid<TenantRow, any> {
        protected getColumnsKey() { return TenantColumns.columnsKey; }
        protected getDialogType() { return TenantDialog; }
        protected getIdProperty() { return TenantRow.idProperty; }
        protected getInsertPermission() { return TenantRow.insertPermission; }
        protected getLocalTextPrefix() { return TenantRow.localTextPrefix; }
        protected getService() { return TenantService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
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