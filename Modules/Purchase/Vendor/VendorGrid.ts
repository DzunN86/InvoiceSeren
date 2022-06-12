
namespace Indotalent.Purchase {

    @Serenity.Decorators.registerClass()
    export class VendorGrid extends Serenity.EntityGrid<VendorRow, any> {
        protected getColumnsKey() { return VendorColumns.columnsKey; }
        protected getDialogType() { return VendorDialog; }
        protected getIdProperty() { return VendorRow.idProperty; }
        protected getInsertPermission() { return VendorRow.insertPermission; }
        protected getLocalTextPrefix() { return VendorRow.localTextPrefix; }
        protected getService() { return VendorService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }

        protected getColumns() {
            let columns = super.getColumns();

            if (!Q.Authorization.hasPermission("Administration:Tenant")) {
                columns = columns.filter(x => x.field != VendorRow.Fields.TenantName && x.field != VendorRow.Fields.Id);
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