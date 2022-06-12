
namespace Indotalent.Merchandise {

    @Serenity.Decorators.registerClass()
    export class UomDialog extends Serenity.EntityDialog<UomRow, any> {
        protected getFormKey() { return UomForm.formKey; }
        protected getIdProperty() { return UomRow.idProperty; }
        protected getLocalTextPrefix() { return UomRow.localTextPrefix; }
        protected getNameProperty() { return UomRow.nameProperty; }
        protected getService() { return UomService.baseUrl; }
        protected getDeletePermission() { return UomRow.deletePermission; }
        protected getInsertPermission() { return UomRow.insertPermission; }
        protected getUpdatePermission() { return UomRow.updatePermission; }

        protected form = new UomForm(this.idPrefix);
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