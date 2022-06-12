
namespace Indotalent.Settings {

    @Serenity.Decorators.registerClass()
    export class SalesTaxDialog extends Serenity.EntityDialog<SalesTaxRow, any> {
        protected getFormKey() { return SalesTaxForm.formKey; }
        protected getIdProperty() { return SalesTaxRow.idProperty; }
        protected getLocalTextPrefix() { return SalesTaxRow.localTextPrefix; }
        protected getNameProperty() { return SalesTaxRow.nameProperty; }
        protected getService() { return SalesTaxService.baseUrl; }
        protected getDeletePermission() { return SalesTaxRow.deletePermission; }
        protected getInsertPermission() { return SalesTaxRow.insertPermission; }
        protected getUpdatePermission() { return SalesTaxRow.updatePermission; }

        protected form = new SalesTaxForm(this.idPrefix);

    }
}