
namespace Indotalent.Settings {

    @Serenity.Decorators.registerClass()
    export class CashBankDialog extends Serenity.EntityDialog<CashBankRow, any> {
        protected getFormKey() { return CashBankForm.formKey; }
        protected getIdProperty() { return CashBankRow.idProperty; }
        protected getLocalTextPrefix() { return CashBankRow.localTextPrefix; }
        protected getNameProperty() { return CashBankRow.nameProperty; }
        protected getService() { return CashBankService.baseUrl; }
        protected getDeletePermission() { return CashBankRow.deletePermission; }
        protected getInsertPermission() { return CashBankRow.insertPermission; }
        protected getUpdatePermission() { return CashBankRow.updatePermission; }

        protected form = new CashBankForm(this.idPrefix);

    }
}