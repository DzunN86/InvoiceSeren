
namespace Indotalent.Purchase {

    @Serenity.Decorators.registerClass()
    export class VendorDialog extends Serenity.EntityDialog<VendorRow, any> {
        protected getFormKey() { return VendorForm.formKey; }
        protected getIdProperty() { return VendorRow.idProperty; }
        protected getLocalTextPrefix() { return VendorRow.localTextPrefix; }
        protected getNameProperty() { return VendorRow.nameProperty; }
        protected getService() { return VendorService.baseUrl; }
        protected getDeletePermission() { return VendorRow.deletePermission; }
        protected getInsertPermission() { return VendorRow.insertPermission; }
        protected getUpdatePermission() { return VendorRow.updatePermission; }

        protected form = new VendorForm(this.idPrefix);

    }
}