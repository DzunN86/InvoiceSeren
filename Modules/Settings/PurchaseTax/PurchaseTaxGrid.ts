
namespace Indotalent.Settings {

    @Serenity.Decorators.registerClass()
    export class PurchaseTaxGrid extends Serenity.EntityGrid<PurchaseTaxRow, any> {
        protected getColumnsKey() { return PurchaseTaxColumns.columnsKey; }
        protected getDialogType() { return PurchaseTaxDialog; }
        protected getIdProperty() { return PurchaseTaxRow.idProperty; }
        protected getInsertPermission() { return PurchaseTaxRow.insertPermission; }
        protected getLocalTextPrefix() { return PurchaseTaxRow.localTextPrefix; }
        protected getService() { return PurchaseTaxService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }

        protected getColumns() {
            let columns = super.getColumns();

            if (!Q.Authorization.hasPermission("Administration:Tenant")) {
                columns = columns.filter(x => x.field != PurchaseTaxRow.Fields.TenantName && x.field != PurchaseTaxRow.Fields.Id);
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