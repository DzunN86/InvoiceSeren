
namespace Indotalent.Purchase {

    @Serenity.Decorators.registerClass()
    export class PurchaseOrderDetailEditor extends Serenity.Extensions.GridEditorBase<PurchaseOrderDetailRow> {
        protected getColumnsKey() { return PurchaseOrderDetailColumns.columnsKey; }
        protected getDialogType() { return PurchaseOrderDetailDialog; }
        protected getLocalTextPrefix() { return PurchaseOrderDetailRow.localTextPrefix; }


        constructor(container: JQuery) {
            super(container);
        }

        protected validateEntity(row: PurchaseOrderDetailRow, id: number) {
            if (!super.validateEntity(row, id))
                return false;

            row.ProductName = Merchandise.ProductRow.getLookup()
                .itemById[row.ProductId].Name;

            return true;
        }


    }



}