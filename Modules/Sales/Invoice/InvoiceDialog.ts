
namespace Indotalent.Sales {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.panel()
    export class InvoiceDialog extends Serenity.EntityDialog<InvoiceRow, any> {
        protected getFormKey() { return InvoiceForm.formKey; }
        protected getIdProperty() { return InvoiceRow.idProperty; }
        protected getLocalTextPrefix() { return InvoiceRow.localTextPrefix; }
        protected getNameProperty() { return InvoiceRow.nameProperty; }
        protected getService() { return InvoiceService.baseUrl; }
        protected getDeletePermission() { return InvoiceRow.deletePermission; }
        protected getInsertPermission() { return InvoiceRow.insertPermission; }
        protected getUpdatePermission() { return InvoiceRow.updatePermission; }

        protected form = new InvoiceForm(this.idPrefix);
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

            this.form.SalesOrderId.changeSelect2((args) => {
                var salesOrderId = this.form.SalesOrderId.value;
                if (Q.isEmptyOrNull(salesOrderId)) {
                    this.setCustomer({});
                    return;
                }
                SalesOrderService.Retrieve({
                    EntityId: salesOrderId
                }, response => {
                    this.form.OtherCharge.value = response.Entity.OtherCharge;
                    var request = [] as Serenity.ListRequest;
                    SalesOrderDetailService.List({
                        Criteria: Serenity.Criteria.and(request.Criteria, [['SalesOrderId'], '=', salesOrderId])
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

                    CustomerService.Retrieve({
                        EntityId: response.Entity.CustomerId
                    }, response => {
                        this.setCustomer(response.Entity)
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
                Indotalent.Sales.InvoiceService.Currency({
                }, response => {
                    this.form.CurrencyName.value = response.Currency;
                });
            }

        }

        protected updateInterface(): void {
            super.updateInterface();

            this.toolbar.findButton('print-invoice').toggle(this.isEditMode());
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
                title: 'Print Invoice',
                cssClass: 'export-pdf-button print-invoice',
                reportKey: 'InvoicePrint',
                getParams: () => ({
                    Id: this.get_entityId()
                })
            }));

            return buttons;
        }

    }
}