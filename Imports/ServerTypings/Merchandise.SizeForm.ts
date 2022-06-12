namespace Indotalent.Merchandise {
    export interface SizeForm {
        Name: Serenity.StringEditor;
        Description: Serenity.TextAreaEditor;
    }

    export class SizeForm extends Serenity.PrefixedContext {
        static formKey = 'Merchandise.Size';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!SizeForm.init)  {
                SizeForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.TextAreaEditor;

                Q.initFormType(SizeForm, [
                    'Name', w0,
                    'Description', w1
                ]);
            }
        }
    }
}
