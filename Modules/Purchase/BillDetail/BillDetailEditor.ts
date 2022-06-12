
namespace Indotalent.Purchase {

    @Serenity.Decorators.registerClass()
    export class BillDetailEditor extends Serenity.Extensions.GridEditorBase<BillDetailRow> {
        protected getColumnsKey() { return BillDetailColumns.columnsKey; }
        protected getDialogType() { return BillDetailDialog; }
        protected getLocalTextPrefix() { return BillDetailRow.localTextPrefix; }


        constructor(container: JQuery) {
            super(container);
        }

        protected validateEntity(row: BillDetailRow, id: number) {
            if (!super.validateEntity(row, id))
                return false;

            row.ProductName = Merchandise.ProductRow.getLookup()
                .itemById[row.ProductId].Name;

            return true;
        }

    }
}