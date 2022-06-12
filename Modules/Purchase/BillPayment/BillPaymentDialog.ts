
namespace Indotalent.Purchase {

    @Serenity.Decorators.registerClass()
    export class BillPaymentDialog extends Serenity.EntityDialog<BillPaymentRow, any> {
        protected getFormKey() { return BillPaymentForm.formKey; }
        protected getIdProperty() { return BillPaymentRow.idProperty; }
        protected getLocalTextPrefix() { return BillPaymentRow.localTextPrefix; }
        protected getNameProperty() { return BillPaymentRow.nameProperty; }
        protected getService() { return BillPaymentService.baseUrl; }
        protected getDeletePermission() { return BillPaymentRow.deletePermission; }
        protected getInsertPermission() { return BillPaymentRow.insertPermission; }
        protected getUpdatePermission() { return BillPaymentRow.updatePermission; }

        protected form = new BillPaymentForm(this.idPrefix);

    }
}