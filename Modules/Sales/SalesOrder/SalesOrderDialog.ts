
namespace Indotalent.Sales {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.panel()
    export class SalesOrderDialog extends Serenity.EntityDialog<SalesOrderRow, any> {
        protected getFormKey() { return SalesOrderForm.formKey; }
        protected getIdProperty() { return SalesOrderRow.idProperty; }
        protected getLocalTextPrefix() { return SalesOrderRow.localTextPrefix; }
        protected getNameProperty() { return SalesOrderRow.nameProperty; }
        protected getService() { return SalesOrderService.baseUrl; }
        protected getDeletePermission() { return SalesOrderRow.deletePermission; }
        protected getInsertPermission() { return SalesOrderRow.insertPermission; }
        protected getUpdatePermission() { return SalesOrderRow.updatePermission; }

        protected form = new SalesOrderForm(this.idPrefix);
        private loadedState: string;

        constructor() {
            super();
            this.form.ItemList.element.css('height', '300px');

            (this.form.ItemList.view as any).onRowCountChanged.subscribe(() => {
                this.recalculate();
            });

            (this.form.ItemList.view as any).onDataChanged.subscribe(() => {
                this.recalculate();
            });

            this.form.OtherCharge.change(() => {
                this.recalculate();
            });

            Indotalent.DialogUtils.pendingChangesConfirmation(this.element, () => this.getSaveState() != this.loadedState);

            this.form.CustomerId.changeSelect2((args) => {
                var customerId = this.form.CustomerId.value;
                if (Q.isEmptyOrNull(customerId)) {
                    this.setCustomer({});
                    return;
                }
                CustomerService.Retrieve({
                    EntityId: customerId
                }, response => {
                    this.setCustomer(response.Entity);
                });
            });

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

        private recalculate() {
            this.form.SubTotal.value = 0;
            this.form.BeforeTax.value = 0;
            this.form.Discount.value = 0;
            this.form.TaxAmount.value = 0;
            this.form.Total.value = 0;

            for (var item of this.form.ItemList.getItems()) {
                this.form.SubTotal.value += item.SubTotal;
                this.form.Discount.value += item.Discount;
                this.form.BeforeTax.value += item.BeforeTax;
                this.form.TaxAmount.value += item.TaxAmount;
                this.form.Total.value += item.Total;
            }
            this.form.Total.value += this.form.OtherCharge.value;
        }

        protected afterLoadEntity() {
            super.afterLoadEntity();

            if (this.isNew()) {
                Indotalent.Sales.SalesOrderService.Currency({
                }, response => {
                    this.form.CurrencyName.value = response.Currency;
                });
            }

        }

        protected updateInterface(): void {
            super.updateInterface();

            this.toolbar.findButton('print-so').toggle(this.isEditMode());
        }

        private setCustomer(customer: CustomerRow): void {
            this.form.CustomerName.value = customer.Name;
            this.form.CustomerStreet.value = customer.Street;
            this.form.CustomerCity.value = customer.City;
            this.form.CustomerState.value = customer.State;
            this.form.CustomerZipCode.value = customer.ZipCode;
            this.form.CustomerPhone.value = customer.Phone;
            this.form.CustomerEmail.value = customer.Email;
        }

        protected getToolbarButtons() {
            var buttons = super.getToolbarButtons();

            buttons.push(Serenity.Extensions.ReportHelper.createToolButton({
                title: 'Print SO',
                cssClass: 'export-pdf-button print-so',
                reportKey: 'SalesOrderPrint',
                getParams: () => ({
                    Id: this.get_entityId()
                })
            }));

            return buttons;
        }

    }
}