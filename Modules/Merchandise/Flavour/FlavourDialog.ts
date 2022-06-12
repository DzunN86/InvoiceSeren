
namespace Indotalent.Merchandise {

    @Serenity.Decorators.registerClass()
    export class FlavourDialog extends Serenity.EntityDialog<FlavourRow, any> {
        protected getFormKey() { return FlavourForm.formKey; }
        protected getIdProperty() { return FlavourRow.idProperty; }
        protected getLocalTextPrefix() { return FlavourRow.localTextPrefix; }
        protected getNameProperty() { return FlavourRow.nameProperty; }
        protected getService() { return FlavourService.baseUrl; }
        protected getDeletePermission() { return FlavourRow.deletePermission; }
        protected getInsertPermission() { return FlavourRow.insertPermission; }
        protected getUpdatePermission() { return FlavourRow.updatePermission; }

        protected form = new FlavourForm(this.idPrefix);
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