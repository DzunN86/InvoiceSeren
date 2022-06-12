
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

        protected getColumns() {
            let columns = super.getColumns();

            if (!Q.Authorization.hasPermission("Administration:Tenant")) {
                columns = columns.filter(x => x.field != ColourRow.Fields.TenantName && x.field != ColourRow.Fields.Id);
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