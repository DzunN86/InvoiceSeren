
namespace Indotalent.Merchandise {

    @Serenity.Decorators.registerClass()
    export class BrandDialog extends Serenity.EntityDialog<BrandRow, any> {
        protected getFormKey() { return BrandForm.formKey; }
        protected getIdProperty() { return BrandRow.idProperty; }
        protected getLocalTextPrefix() { return BrandRow.localTextPrefix; }
        protected getNameProperty() { return BrandRow.nameProperty; }
        protected getService() { return BrandService.baseUrl; }
        protected getDeletePermission() { return BrandRow.deletePermission; }
        protected getInsertPermission() { return BrandRow.insertPermission; }
        protected getUpdatePermission() { return BrandRow.updatePermission; }

        protected form = new BrandForm(this.idPrefix);
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