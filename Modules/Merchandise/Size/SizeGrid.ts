
namespace Indotalent.Merchandise {

    @Serenity.Decorators.registerClass()
    export class SizeGrid extends Serenity.EntityGrid<SizeRow, any> {
        protected getColumnsKey() { return SizeColumns.columnsKey; }
        protected getDialogType() { return SizeDialog; }
        protected getIdProperty() { return SizeRow.idProperty; }
        protected getInsertPermission() { return SizeRow.insertPermission; }
        protected getLocalTextPrefix() { return SizeRow.localTextPrefix; }
        protected getService() { return SizeService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }

        protected getColumns() {
            let columns = super.getColumns();

            if (!Q.Authorization.hasPermission("Administration:Tenant")) {
                columns = columns.filter(x => x.field != SizeRow.Fields.TenantName && x.field != SizeRow.Fields.Id);
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