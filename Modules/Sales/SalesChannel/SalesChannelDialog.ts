
namespace Indotalent.Sales {

    @Serenity.Decorators.registerClass()
    export class SalesChannelDialog extends Serenity.EntityDialog<SalesChannelRow, any> {
        protected getFormKey() { return SalesChannelForm.formKey; }
        protected getIdProperty() { return SalesChannelRow.idProperty; }
        protected getLocalTextPrefix() { return SalesChannelRow.localTextPrefix; }
        protected getNameProperty() { return SalesChannelRow.nameProperty; }
        protected getService() { return SalesChannelService.baseUrl; }
        protected getDeletePermission() { return SalesChannelRow.deletePermission; }
        protected getInsertPermission() { return SalesChannelRow.insertPermission; }
        protected getUpdatePermission() { return SalesChannelRow.updatePermission; }

        protected form = new SalesChannelForm(this.idPrefix);

    }
}