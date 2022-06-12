
namespace Indotalent.Merchandise {

    @Serenity.Decorators.registerClass()
    export class ProductGrid extends Serenity.EntityGrid<ProductRow, any> {
        protected getColumnsKey() { return ProductColumns.columnsKey; }
        protected getDialogType() { return ProductDialog; }
        protected getIdProperty() { return ProductRow.idProperty; }
        protected getInsertPermission() { return ProductRow.insertPermission; }
        protected getLocalTextPrefix() { return ProductRow.localTextPrefix; }
        protected getService() { return ProductService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }


        protected getColumns() {
            let columns = super.getColumns();

            columns.splice(1, 0, {
                id: 'Print Selected',
                field: null,
                name: '',
                format: ctx => '<a class="inline-action print-selected" title="print-selected">' +
                    '<i class="fa fa-file-pdf-o text-red"></i></a>',
                width: 24,
                minWidth: 24,
                maxWidth: 24
            });

            if (!Q.Authorization.hasPermission("Administration:Tenant")) {
                columns = columns.filter(x => x.field != ProductRow.Fields.TenantName && x.field != ProductRow.Fields.Id);
            }

            return columns;
        }


        protected onClick(e: JQueryEventObject, row: number, cell: number) {
            super.onClick(e, row, cell);

            if (e.isDefaultPrevented())
                return;

            var item = this.itemAt(row);
            var target = $(e.target);

            // if user clicks "i" element, e.g. icon
            if (target.parent().hasClass('inline-action'))
                target = target.parent();

            if (target.hasClass('inline-action')) {
                e.preventDefault();

                if (target.hasClass('print-selected')) {
                    Serenity.Extensions.ReportHelper.execute({
                        reportKey: 'ProductPrint',
                        params: {
                            Id: item.Id
                        }
                    });
                }
            }
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