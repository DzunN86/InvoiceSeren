
namespace Indotalent.Settings {

    @Serenity.Decorators.registerClass()
    export class PurchaseTaxDialog extends Serenity.EntityDialog<PurchaseTaxRow, any> {
        protected getFormKey() { return PurchaseTaxForm.formKey; }
        protected getIdProperty() { return PurchaseTaxRow.idProperty; }
        protected getLocalTextPrefix() { return PurchaseTaxRow.localTextPrefix; }
        protected getNameProperty() { return PurchaseTaxRow.nameProperty; }
        protected getService() { return PurchaseTaxService.baseUrl; }
        protected getDeletePermission() { return PurchaseTaxRow.deletePermission; }
        protected getInsertPermission() { return PurchaseTaxRow.insertPermission; }
        protected getUpdatePermission() { return PurchaseTaxRow.updatePermission; }

        protected form = new PurchaseTaxForm(this.idPrefix);

    }
}