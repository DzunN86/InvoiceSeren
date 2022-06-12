
namespace Indotalent.Sales {

    @Serenity.Decorators.registerClass()
    export class SalesOrderDialog extends Serenity.EntityDialog<SalesOrderRow, any> {
        protected getFormKey() { return SalesOrderForm.formKey; }
        protected getIdProperty() { return SalesOrderRow.idProperty; }
        protected getLocalTextPrefix() { return SalesOrderRow.localTextPrefix; }
        protected getNameProperty() { return SalesOrderRow.nameProperty; }
        protected getService() { return SalesOrderService.baseUrl; }
        protected getDeletePermission() { return SalesOrderRow.deletePermission; }
        protected getInsertPermission() { return SalesOrderRow.insertPermission; }
        protected getUpdatePermission() { return SalesOrderRow.updatePermission; }

        protected form = new SalesOrderForm(this.idPrefix);

    }
}