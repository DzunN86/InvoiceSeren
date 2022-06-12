
namespace Indotalent.Merchandise {

    @Serenity.Decorators.registerClass()
    export class ColourDialog extends Serenity.EntityDialog<ColourRow, any> {
        protected getFormKey() { return ColourForm.formKey; }
        protected getIdProperty() { return ColourRow.idProperty; }
        protected getLocalTextPrefix() { return ColourRow.localTextPrefix; }
        protected getNameProperty() { return ColourRow.nameProperty; }
        protected getService() { return ColourService.baseUrl; }
        protected getDeletePermission() { return ColourRow.deletePermission; }
        protected getInsertPermission() { return ColourRow.insertPermission; }
        protected getUpdatePermission() { return ColourRow.updatePermission; }

        protected form = new ColourForm(this.idPrefix);

    }
}