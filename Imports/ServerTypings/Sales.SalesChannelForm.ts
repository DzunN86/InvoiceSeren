namespace Indotalent.Sales {
    export interface SalesChannelForm {
        Name: Serenity.StringEditor;
        Description: Serenity.TextAreaEditor;
    }

    export class SalesChannelForm extends Serenity.PrefixedContext {
        static formKey = 'Sales.SalesChannel';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!SalesChannelForm.init)  {
                SalesChannelForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.TextAreaEditor;

                Q.initFormType(SalesChannelForm, [
                    'Name', w0,
                    'Description', w1
                ]);
            }
        }
    }
}
