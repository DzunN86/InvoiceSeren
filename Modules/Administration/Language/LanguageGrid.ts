namespace Indotalent.Administration {

    @Serenity.Decorators.registerClass()
    export class LanguageGrid extends Serenity.EntityGrid<LanguageRow, any> {
        protected getColumnsKey() { return "Administration.Language"; }
        protected getDialogType() { return LanguageDialog; }
        protected getIdProperty() { return LanguageRow.idProperty; }
        protected getLocalTextPrefix() { return LanguageRow.localTextPrefix; }
        protected getService() { return LanguageService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }

        protected getButtons() {
            var buttons = super.getButtons();

            buttons.push(Serenity.Extensions.ExcelExportHelper.createToolButton({
                grid: this,
                service: this.getService() + '/ListExcel',
                onViewSubmit: () => this.onViewSubmit(),
                separator: true
            }));

            buttons.push(Serenity.Extensions.PdfExportHelper.createToolButton({
                grid: this,
                onViewSubmit: () => this.onViewSubmit()
            }));

            return buttons;
        }
    }
}