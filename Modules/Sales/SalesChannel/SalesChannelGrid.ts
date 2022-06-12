
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

        protected getColumns() {
            let columns = super.getColumns();

            if (!Q.Authorization.hasPermission("Administration:Tenant")) {
                columns = columns.filter(x => x.field != SalesChannelRow.Fields.TenantName && x.field != SalesChannelRow.Fields.Id);
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