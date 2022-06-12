
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

        protected getColumns() {
            let columns = super.getColumns();

            if (!Q.Authorization.hasPermission("Administration:Tenant")) {
                columns = columns.filter(x => x.field != FlavourRow.Fields.TenantName && x.field != FlavourRow.Fields.Id);
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