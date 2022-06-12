
namespace Indotalent.Sales {

    @Serenity.Decorators.registerClass()
    export class InvoiceDetailDialog extends Serenity.EntityDialog<InvoiceDetailRow, any> {
        protected getFormKey() { return InvoiceDetailForm.formKey; }
        protected getIdProperty() { return InvoiceDetailRow.idProperty; }
        protected getLocalTextPrefix() { return InvoiceDetailRow.localTextPrefix; }
        protected getService() { return InvoiceDetailService.baseUrl; }
        protected getDeletePermission() { return InvoiceDetailRow.deletePermission; }
        protected getInsertPermission() { return InvoiceDetailRow.insertPermission; }
        protected getUpdatePermission() { return InvoiceDetailRow.updatePermission; }

        protected form = new InvoiceDetailForm(this.idPrefix);

    }
}