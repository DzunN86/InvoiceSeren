
namespace Indotalent.Purchase {

    @Serenity.Decorators.registerClass()
    export class BillPaymentDialog extends Serenity.EntityDialog<BillPaymentRow, any> {
        protected getFormKey() { return BillPaymentForm.formKey; }
        protected getIdProperty() { return BillPaymentRow.idProperty; }
        protected getLocalTextPrefix() { return BillPaymentRow.localTextPrefix; }
        protected getNameProperty() { return BillPaymentRow.nameProperty; }
        protected getService() { return BillPaymentService.baseUrl; }
        protected getDeletePermission() { return BillPaymentRow.deletePermission; }
        protected getInsertPermission() { return BillPaymentRow.insertPermission; }
        protected getUpdatePermission() { return BillPaymentRow.updatePermission; }

        protected form = new BillPaymentForm(this.idPrefix);
        private loadedState: string;

        constructor() {
            super();

            Indotalent.DialogUtils.pendingChangesConfirmation(this.element, () => this.getSaveState() != this.loadedState);

            this.form.BillId.changeSelect2(args => {
                var billId = this.form.BillId.value;
                if (Q.isEmptyOrNull(billId)) {
                    this.setVendor({});
                    return;
                }
                BillService.Retrieve({
                    EntityId: billId
                }, response => {
                    this.form.BillAmount.value = response.Entity.Total;
                    this.form.PaymentAmount.value = this.form.BillAmount.value;
                    PurchaseOrderService.Retrieve({
                        EntityId: response.Entity.PurchaseOrderId
                    }, response => {
                        VendorService.Retrieve({
                            EntityId: response.Entity.VendorId
                        }, response => {
                            this.setVendor(response.Entity);
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

            this.form.BillAmount.element.attr('readonly', 'readonly');
            this.form.BillAmount.element.addClass('readonly');

            this.toolbar.findButton('print-payment').toggle(this.isEditMode());
        }

        protected afterLoadEntity() {
            super.afterLoadEntity();

            if (this.isNew()) {
                Indotalent.Purchase.BillPaymentService.Currency({
                }, response => {
                    this.form.CurrencyName.value = response.Currency;
                });
            }

        }


        private setVendor(vendor: VendorRow): void {
            this.form.VendorName.value = vendor.Name;
            this.form.VendorStreet.value = vendor.Street;
            this.form.VendorCity.value = vendor.City;
            this.form.VendorState.value = vendor.State;
            this.form.VendorZipCode.value = vendor.ZipCode;
            this.form.VendorPhone.value = vendor.Phone;
            this.form.VendorEmail.value = vendor.Email;
        }

        protected getToolbarButtons() {
            var buttons = super.getToolbarButtons();

            buttons.push(Serenity.Extensions.ReportHelper.createToolButton({
                title: 'Print Payment Voucher',
                cssClass: 'export-pdf-button print-payment',
                reportKey: 'BillPaymentPrint',
                getParams: () => ({
                    Id: this.get_entityId()
                })
            }));

            return buttons;
        }

    }
}