
namespace Indotalent.Merchandise {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.panel()
    export class ProductDialog extends Serenity.EntityDialog<ProductRow, any> {
        protected getFormKey() { return ProductForm.formKey; }
        protected getIdProperty() { return ProductRow.idProperty; }
        protected getLocalTextPrefix() { return ProductRow.localTextPrefix; }
        protected getNameProperty() { return ProductRow.nameProperty; }
        protected getService() { return ProductService.baseUrl; }
        protected getDeletePermission() { return ProductRow.deletePermission; }
        protected getInsertPermission() { return ProductRow.insertPermission; }
        protected getUpdatePermission() { return ProductRow.updatePermission; }

        protected form = new ProductForm(this.idPrefix);
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

        protected getToolbarButtons() {
            var buttons = super.getToolbarButtons();

            buttons.push(Serenity.Extensions.ReportHelper.createToolButton({
                title: 'Print Brochure',
                cssClass: 'export-pdf-button print-brochure',
                reportKey: 'ProductPrint',
                getParams: () => ({
                    Id: this.get_entityId()
                })
            }));

            return buttons;
        }

        protected afterLoadEntity() {
            super.afterLoadEntity();

            if (this.isNew()) {
                Indotalent.Merchandise.ProductService.Currency({
                }, response => {
                    this.form.CurrencyName.value = response.Currency;
                });
            }

        }

    }
}