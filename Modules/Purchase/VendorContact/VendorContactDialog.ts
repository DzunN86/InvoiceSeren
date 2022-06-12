
namespace Indotalent.Purchase {

    @Serenity.Decorators.registerClass()
    export class VendorContactDialog extends Serenity.EntityDialog<VendorContactRow, any> {
        protected getFormKey() { return VendorContactForm.formKey; }
        protected getIdProperty() { return VendorContactRow.idProperty; }
        protected getLocalTextPrefix() { return VendorContactRow.localTextPrefix; }
        protected getNameProperty() { return VendorContactRow.nameProperty; }
        protected getService() { return VendorContactService.baseUrl; }
        protected getDeletePermission() { return VendorContactRow.deletePermission; }
        protected getInsertPermission() { return VendorContactRow.insertPermission; }
        protected getUpdatePermission() { return VendorContactRow.updatePermission; }

        protected form = new VendorContactForm(this.idPrefix);

    }
}