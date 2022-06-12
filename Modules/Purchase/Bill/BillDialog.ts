
namespace Indotalent.Purchase {

    @Serenity.Decorators.registerClass()
    export class BillDialog extends Serenity.EntityDialog<BillRow, any> {
        protected getFormKey() { return BillForm.formKey; }
        protected getIdProperty() { return BillRow.idProperty; }
        protected getLocalTextPrefix() { return BillRow.localTextPrefix; }
        protected getNameProperty() { return BillRow.nameProperty; }
        protected getService() { return BillService.baseUrl; }
        protected getDeletePermission() { return BillRow.deletePermission; }
        protected getInsertPermission() { return BillRow.insertPermission; }
        protected getUpdatePermission() { return BillRow.updatePermission; }

        protected form = new BillForm(this.idPrefix);

    }
}