
namespace Indotalent.Merchandise {

    @Serenity.Decorators.registerClass()
    export class SizeDialog extends Serenity.EntityDialog<SizeRow, any> {
        protected getFormKey() { return SizeForm.formKey; }
        protected getIdProperty() { return SizeRow.idProperty; }
        protected getLocalTextPrefix() { return SizeRow.localTextPrefix; }
        protected getNameProperty() { return SizeRow.nameProperty; }
        protected getService() { return SizeService.baseUrl; }
        protected getDeletePermission() { return SizeRow.deletePermission; }
        protected getInsertPermission() { return SizeRow.insertPermission; }
        protected getUpdatePermission() { return SizeRow.updatePermission; }

        protected form = new SizeForm(this.idPrefix);
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