
namespace Indotalent.Purchase {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.panel()
    export class BillDialog extends Serenity.EntityDialog<BillRow, any> {
        protected getFormKey() { return BillForm.formKey; }
        protected getIdProperty() { return BillRow.idProperty; }
        protected getLocalTextPrefix() { return BillRow.localTextPrefix; }
        protected getNameProperty() { return BillRow.nameProperty; }
        protected getService() { return BillService.baseUrl; }
        protected getDeletePermission() { return BillRow.deletePermission; }
        protected getInsertPermission() { return BillRow.insertPermission; }
        protected getUpdatePermission() { return BillRow.updatePermission; }

        protected form = new BillForm(this.idPrefix);
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

            this.form.PurchaseOrderId.changeSelect2((args) => {
                var purchaseOrderId = this.form.PurchaseOrderId.value;
                if (Q.isEmptyOrNull(purchaseOrderId)) {
                    this.setVendor({});
                    return;
                }
                PurchaseOrderService.Retrieve({
                    EntityId: purchaseOrderId
                }, response => {
                    this.form.OtherCharge.value = response.Entity.OtherCharge;
                    var request = [] as Serenity.ListRequest;
                    PurchaseOrderDetailService.List({
                        Criteria: Serenity.Criteria.and(request.Criteria, [['PurchaseOrderId'], '=', purchaseOrderId])
                    }, response => {
                        var items = [];
                        for (var item of response.Entities) {
                            items.push({
                                ProductId: item.ProductId,
                                ProductName: item.ProductName,
                                Price: item.Price,
                                Qty: item.Qty,
                                SubTotal: item.SubTotal,
                                Discount: item.Discount,
                                BeforeTax: item.BeforeTax,
                                TaxPercentage: item.TaxPercentage,
                                TaxAmount: item.TaxAmount,
                                Total: item.Total
                            });
                        }
                        this.form.ItemList.value = items;
                    });

                    VendorService.Retrieve({
                        EntityId: response.Entity.VendorId
                    }, response => {
                        this.setVendor(response.Entity)
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
                Indotalent.Purchase.BillService.Currency({
                }, response => {
                    this.form.CurrencyName.value = response.Currency;
                });
            }

        }

        protected updateInterface(): void {
            super.updateInterface();

            this.toolbar.findButton('print-bill').toggle(this.isEditMode());
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
                title: 'Print Bill',
                cssClass: 'export-pdf-button print-bill',
                reportKey: 'BillPrint',
                getParams: () => ({
                    Id: this.get_entityId()
                })
            }));

            return buttons;
        }

    }
}