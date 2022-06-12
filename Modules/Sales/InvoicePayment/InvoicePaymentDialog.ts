
namespace Indotalent.Sales {

    @Serenity.Decorators.registerClass()
    export class InvoicePaymentDialog extends Serenity.EntityDialog<InvoicePaymentRow, any> {
        protected getFormKey() { return InvoicePaymentForm.formKey; }
        protected getIdProperty() { return InvoicePaymentRow.idProperty; }
        protected getLocalTextPrefix() { return InvoicePaymentRow.localTextPrefix; }
        protected getNameProperty() { return InvoicePaymentRow.nameProperty; }
        protected getService() { return InvoicePaymentService.baseUrl; }
        protected getDeletePermission() { return InvoicePaymentRow.deletePermission; }
        protected getInsertPermission() { return InvoicePaymentRow.insertPermission; }
        protected getUpdatePermission() { return InvoicePaymentRow.updatePermission; }

        protected form = new InvoicePaymentForm(this.idPrefix);

    }
}