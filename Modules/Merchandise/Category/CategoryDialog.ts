
namespace Indotalent.Merchandise {

    @Serenity.Decorators.registerClass()
    export class CategoryDialog extends Serenity.EntityDialog<CategoryRow, any> {
        protected getFormKey() { return CategoryForm.formKey; }
        protected getIdProperty() { return CategoryRow.idProperty; }
        protected getLocalTextPrefix() { return CategoryRow.localTextPrefix; }
        protected getNameProperty() { return CategoryRow.nameProperty; }
        protected getService() { return CategoryService.baseUrl; }
        protected getDeletePermission() { return CategoryRow.deletePermission; }
        protected getInsertPermission() { return CategoryRow.insertPermission; }
        protected getUpdatePermission() { return CategoryRow.updatePermission; }

        protected form = new CategoryForm(this.idPrefix);
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