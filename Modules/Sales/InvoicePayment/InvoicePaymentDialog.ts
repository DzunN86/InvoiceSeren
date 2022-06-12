
namespace Indotalent.Sales {

    @Serenity.Decorators.registerClass()
    export class InvoicePaymentDialog extends Serenity.EntityDialog<InvoicePaymentRow, any> {
        protected getFormKey() { return InvoicePaymentForm.formKey; }
        protected getIdProperty() { return InvoicePaymentRow.idProperty; }
        protected getLocalTextPrefix() { return InvoicePaymentRow.localTextPrefix; }
        protected getNameProperty() { return InvoicePaymentRow.nameProperty; }
        protected getService() { return InvoicePaymentService.baseUrl; }
        protected getDeletePermission() { return InvoicePaymentRow.deletePermission; }
        protected getInsertPermission() { return InvoicePaymentRow.insertPermission; }
        protected getUpdatePermission() { return InvoicePaymentRow.updatePermission; }

        protected form = new InvoicePaymentForm(this.idPrefix);
        private loadedState: string;

        constructor() {
            super();

            Indotalent.DialogUtils.pendingChangesConfirmation(this.element, () => this.getSaveState() != this.loadedState);

            this.form.InvoiceId.changeSelect2(args => {
                var invoiceId = this.form.InvoiceId.value;
                if (Q.isEmptyOrNull(invoiceId)) {
                    this.setCustomer({});
                    return;
                }
                InvoiceService.Retrieve({
                    EntityId: invoiceId
                }, response => {
                    this.form.InvoiceAmount.value = response.Entity.Total;
                    this.form.PaymentAmount.value = this.form.InvoiceAmount.value;
                    SalesOrderService.Retrieve({
                        EntityId: response.Entity.SalesOrderId
                    }, response => {
                        CustomerService.Retrieve({
                            EntityId: response.Entity.CustomerId
                        }, response => {
                            this.setCustomer(response.Entity);
                        });
                    });
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

        protected updateInterface(): void {
            super.updateInterface();

            this.form.InvoiceAmount.element.attr('readonly', 'readonly');
            this.form.InvoiceAmount.element.addClass('readonly');

            this.toolbar.findButton('print-payment').toggle(this.isEditMode());
        }

        protected afterLoadEntity() {
            super.afterLoadEntity();

            if (this.isNew()) {
                Indotalent.Sales.InvoicePaymentService.Currency({
                }, response => {
                    this.form.CurrencyName.value = response.Currency;
                });
            }

        }


        private setCustomer(vendor: CustomerRow): void {
            this.form.CustomerName.value = vendor.Name;
            this.form.CustomerStreet.value = vendor.Street;
            this.form.CustomerCity.value = vendor.City;
            this.form.CustomerState.value = vendor.State;
            this.form.CustomerZipCode.value = vendor.ZipCode;
            this.form.CustomerPhone.value = vendor.Phone;
            this.form.CustomerEmail.value = vendor.Email;
        }

        protected getToolbarButtons() {
            var buttons = super.getToolbarButtons();

            buttons.push(Serenity.Extensions.ReportHelper.createToolButton({
                title: 'Print Payment',
                cssClass: 'export-pdf-button print-payment',
                reportKey: 'InvoicePaymentPrint',
                getParams: () => ({
                    Id: this.get_entityId()
                })
            }));

            return buttons;
        }

    }
}