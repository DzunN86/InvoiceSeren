
namespace Indotalent.Sales {

    @Serenity.Decorators.registerClass()
    export class SalesOrderDetailEditor extends Serenity.Extensions.GridEditorBase<SalesOrderDetailRow> {
        protected getColumnsKey() { return SalesOrderDetailColumns.columnsKey; }
        protected getDialogType() { return SalesOrderDetailDialog; }
        protected getLocalTextPrefix() { return SalesOrderDetailRow.localTextPrefix; }


        constructor(container: JQuery) {
            super(container);
        }

        protected validateEntity(row: SalesOrderDetailRow, id: number) {
            if (!super.validateEntity(row, id))
                return false;

            row.ProductName = Merchandise.ProductRow.getLookup()
                .itemById[row.ProductId].Name;

            return true;
        }


    }



}