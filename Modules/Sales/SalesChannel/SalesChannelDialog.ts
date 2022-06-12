
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
        private loadedState: string;

        constructor() {
            super();

            Indotalent.DialogUtils.pendingChangesConfirmation(this.element, () => this.getSaveState() != this.loadedState);
        }


        getSaveState() {
            try {
                return $.toJSON(this.getSaveEntity());
            }
            catch (e) {
                return null;
            }
        }

        loadResponse(data) {
            super.loadResponse(data);
            this.loadedState = this.getSaveState();
        }

    }
}