
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

    }
}