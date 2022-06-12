
namespace Indotalent.Settings {

    @Serenity.Decorators.registerClass()
    export class SalesTaxGrid extends Serenity.EntityGrid<SalesTaxRow, any> {
        protected getColumnsKey() { return SalesTaxColumns.columnsKey; }
        protected getDialogType() { return SalesTaxDialog; }
        protected getIdProperty() { return SalesTaxRow.idProperty; }
        protected getInsertPermission() { return SalesTaxRow.insertPermission; }
        protected getLocalTextPrefix() { return SalesTaxRow.localTextPrefix; }
        protected getService() { return SalesTaxService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }

        protected getColumns() {
            let columns = super.getColumns();

            if (!Q.Authorization.hasPermission("Administration:Tenant")) {
                columns = columns.filter(x => x.field != SalesTaxRow.Fields.TenantName && x.field != SalesTaxRow.Fields.Id);
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