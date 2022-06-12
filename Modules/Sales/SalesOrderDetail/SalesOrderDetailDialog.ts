
namespace Indotalent.Sales {

    @Serenity.Decorators.registerClass()
    export class SalesOrderDetailDialog extends Serenity.EntityDialog<SalesOrderDetailRow, any> {
        protected getFormKey() { return SalesOrderDetailForm.formKey; }
        protected getIdProperty() { return SalesOrderDetailRow.idProperty; }
        protected getLocalTextPrefix() { return SalesOrderDetailRow.localTextPrefix; }
        protected getService() { return SalesOrderDetailService.baseUrl; }
        protected getDeletePermission() { return SalesOrderDetailRow.deletePermission; }
        protected getInsertPermission() { return SalesOrderDetailRow.insertPermission; }
        protected getUpdatePermission() { return SalesOrderDetailRow.updatePermission; }

        protected form = new SalesOrderDetailForm(this.idPrefix);

    }
}