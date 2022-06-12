
namespace Indotalent.Purchase {

    @Serenity.Decorators.registerClass()
    export class PurchaseOrderDetailDialog extends Serenity.EntityDialog<PurchaseOrderDetailRow, any> {
        protected getFormKey() { return PurchaseOrderDetailForm.formKey; }
        protected getIdProperty() { return PurchaseOrderDetailRow.idProperty; }
        protected getLocalTextPrefix() { return PurchaseOrderDetailRow.localTextPrefix; }
        protected getService() { return PurchaseOrderDetailService.baseUrl; }
        protected getDeletePermission() { return PurchaseOrderDetailRow.deletePermission; }
        protected getInsertPermission() { return PurchaseOrderDetailRow.insertPermission; }
        protected getUpdatePermission() { return PurchaseOrderDetailRow.updatePermission; }

        protected form = new PurchaseOrderDetailForm(this.idPrefix);

    }
}