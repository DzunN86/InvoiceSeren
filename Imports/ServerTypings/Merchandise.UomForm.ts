namespace Indotalent.Merchandise {
    export interface UomForm {
        Name: Serenity.StringEditor;
        Description: Serenity.TextAreaEditor;
    }

    export class UomForm extends Serenity.PrefixedContext {
        static formKey = 'Merchandise.Uom';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!UomForm.init)  {
                UomForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.TextAreaEditor;

                Q.initFormType(UomForm, [
                    'Name', w0,
                    'Description', w1
                ]);
            }
        }
    }
}
