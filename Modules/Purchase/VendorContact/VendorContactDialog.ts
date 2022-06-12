
namespace Indotalent.Purchase {

    @Serenity.Decorators.registerClass()
    export class VendorContactDialog extends Serenity.Extensions.GridEditorDialog<VendorContactRow> {
        protected getFormKey() { return VendorContactForm.formKey; }
        protected getLocalTextPrefix() { return VendorContactRow.localTextPrefix; }

        protected form = new VendorContactForm(this.idPrefix);

    }
}