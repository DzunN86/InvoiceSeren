
namespace Indotalent.Sales {

    @Serenity.Decorators.registerClass()
    export class SalesOrderDetailDialog extends Serenity.Extensions.GridEditorDialog<SalesOrderDetailRow> {
        protected getFormKey() { return SalesOrderDetailForm.formKey; }
        protected getLocalTextPrefix() { return SalesOrderDetailRow.localTextPrefix; }

        protected form = new SalesOrderDetailForm(this.idPrefix);


        constructor() {
            super();

            this.form.Price.change(() => {
                this.recalculate();
            });

            this.form.Qty.change(() => {
                this.recalculate();
            });

            this.form.Discount.change(() => {
                this.recalculate();
            });

            this.form.TaxPercentage.change(() => {
                this.recalculate();
            });

            this.form.ProductId.changeSelect2(args => {
                var productId = this.form.ProductId.value;
                if (Q.isEmptyOrNull(productId)) {
                    return;
                }
                Merchandise.ProductService.Retrieve({
                    EntityId: productId
                }, response => {
                    this.form.Price.value = response.Entity.SalesPrice;
                    Settings.SalesTaxService.Retrieve({
                        EntityId: response.Entity.SalesTaxId
                    }, response => {
                        this.form.TaxPercentage.value = response.Entity.TaxRatePercentage;
                        this.recalculate();
                    });
                });
            });

        }

        private recalculate() {
            this.form.SubTotal.value = this.form.Price.value * this.form.Qty.value;
            this.form.BeforeTax.value = this.form.SubTotal.value - this.form.Discount.value;
            this.form.TaxAmount.value = (this.form.TaxPercentage.value * this.form.BeforeTax.value) / 100;
            this.form.Total.value = this.form.BeforeTax.value + this.form.TaxAmount.value;
        }

        protected updateInterface(): void {
            super.updateInterface();

            this.form.SubTotal.element.attr('readonly', 'readonly');
            this.form.SubTotal.element.addClass('readonly');

            this.form.BeforeTax.element.attr('readonly', 'readonly');
            this.form.BeforeTax.element.addClass('readonly');

            this.form.TaxAmount.element.attr('readonly', 'readonly');
            this.form.TaxAmount.element.addClass('readonly');

            this.form.Total.element.attr('readonly', 'readonly');
            this.form.Total.element.addClass('readonly');
        }

    }
}