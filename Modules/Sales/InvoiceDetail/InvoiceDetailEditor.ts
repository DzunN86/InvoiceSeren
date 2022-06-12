
namespace Indotalent.Sales {

    @Serenity.Decorators.registerClass()
    export class InvoiceDetailEditor extends Serenity.Extensions.GridEditorBase<InvoiceDetailRow> {
        protected getColumnsKey() { return InvoiceDetailColumns.columnsKey; }
        protected getDialogType() { return InvoiceDetailDialog; }
        protected getLocalTextPrefix() { return InvoiceDetailRow.localTextPrefix; }


        constructor(container: JQuery) {
            super(container);
        }

        protected validateEntity(row: InvoiceDetailRow, id: number) {
            if (!super.validateEntity(row, id))
                return false;

            row.ProductName = Merchandise.ProductRow.getLookup()
                .itemById[row.ProductId].Name;

            return true;
        }

    }
}