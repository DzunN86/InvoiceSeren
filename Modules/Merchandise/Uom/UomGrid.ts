
namespace Indotalent.Merchandise {

    @Serenity.Decorators.registerClass()
    export class UomGrid extends Serenity.EntityGrid<UomRow, any> {
        protected getColumnsKey() { return UomColumns.columnsKey; }
        protected getDialogType() { return UomDialog; }
        protected getIdProperty() { return UomRow.idProperty; }
        protected getInsertPermission() { return UomRow.insertPermission; }
        protected getLocalTextPrefix() { return UomRow.localTextPrefix; }
        protected getService() { return UomService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }

        protected getColumns() {
            let columns = super.getColumns();

            if (!Q.Authorization.hasPermission("Administration:Tenant")) {
                columns = columns.filter(x => x.field != UomRow.Fields.TenantName && x.field != UomRow.Fields.Id);
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