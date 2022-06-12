
namespace Indotalent.Sales {

    @Serenity.Decorators.registerClass()
    export class CustomerGrid extends Serenity.EntityGrid<CustomerRow, any> {
        protected getColumnsKey() { return CustomerColumns.columnsKey; }
        protected getDialogType() { return CustomerDialog; }
        protected getIdProperty() { return CustomerRow.idProperty; }
        protected getInsertPermission() { return CustomerRow.insertPermission; }
        protected getLocalTextPrefix() { return CustomerRow.localTextPrefix; }
        protected getService() { return CustomerService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }

        protected getColumns() {
            let columns = super.getColumns();

            if (!Q.Authorization.hasPermission("Administration:Tenant")) {
                columns = columns.filter(x => x.field != CustomerRow.Fields.TenantName && x.field != CustomerRow.Fields.Id);
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