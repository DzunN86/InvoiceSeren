
namespace Indotalent.Sales {

    @Serenity.Decorators.registerClass()
    export class CustomerContactDialog extends Serenity.Extensions.GridEditorDialog<CustomerContactRow> {
        protected getFormKey() { return CustomerContactForm.formKey; }
        protected getLocalTextPrefix() { return CustomerContactRow.localTextPrefix; }

        protected form = new CustomerContactForm(this.idPrefix);

    }
}