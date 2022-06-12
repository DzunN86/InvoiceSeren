
namespace Indotalent.Settings {

    @Serenity.Decorators.registerClass()
    export class MyCompanyDialog extends Serenity.EntityDialog<MyCompanyRow, any> {
        protected getFormKey() { return MyCompanyForm.formKey; }
        protected getIdProperty() { return MyCompanyRow.idProperty; }
        protected getLocalTextPrefix() { return MyCompanyRow.localTextPrefix; }
        protected getNameProperty() { return MyCompanyRow.nameProperty; }
        protected getService() { return MyCompanyService.baseUrl; }
        protected getDeletePermission() { return MyCompanyRow.deletePermission; }
        protected getInsertPermission() { return MyCompanyRow.insertPermission; }
        protected getUpdatePermission() { return MyCompanyRow.updatePermission; }

        protected form = new MyCompanyForm(this.idPrefix);

    }
}