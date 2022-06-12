
namespace Indotalent.Purchase {

    @Serenity.Decorators.registerClass()
    export class BillDetailDialog extends Serenity.EntityDialog<BillDetailRow, any> {
        protected getFormKey() { return BillDetailForm.formKey; }
        protected getIdProperty() { return BillDetailRow.idProperty; }
        protected getLocalTextPrefix() { return BillDetailRow.localTextPrefix; }
        protected getService() { return BillDetailService.baseUrl; }
        protected getDeletePermission() { return BillDetailRow.deletePermission; }
        protected getInsertPermission() { return BillDetailRow.insertPermission; }
        protected getUpdatePermission() { return BillDetailRow.updatePermission; }

        protected form = new BillDetailForm(this.idPrefix);

    }
}