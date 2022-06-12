
namespace Indotalent.Sales {

    @Serenity.Decorators.registerClass()
    export class CustomerContactDialog extends Serenity.EntityDialog<CustomerContactRow, any> {
        protected getFormKey() { return CustomerContactForm.formKey; }
        protected getIdProperty() { return CustomerContactRow.idProperty; }
        protected getLocalTextPrefix() { return CustomerContactRow.localTextPrefix; }
        protected getNameProperty() { return CustomerContactRow.nameProperty; }
        protected getService() { return CustomerContactService.baseUrl; }
        protected getDeletePermission() { return CustomerContactRow.deletePermission; }
        protected getInsertPermission() { return CustomerContactRow.insertPermission; }
        protected getUpdatePermission() { return CustomerContactRow.updatePermission; }

        protected form = new CustomerContactForm(this.idPrefix);

    }
}