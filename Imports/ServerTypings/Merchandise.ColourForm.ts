namespace Indotalent.Merchandise {
    export interface ColourForm {
        Name: Serenity.StringEditor;
        Description: Serenity.TextAreaEditor;
    }

    export class ColourForm extends Serenity.PrefixedContext {
        static formKey = 'Merchandise.Colour';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!ColourForm.init)  {
                ColourForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.TextAreaEditor;

                Q.initFormType(ColourForm, [
                    'Name', w0,
                    'Description', w1
                ]);
            }
        }
    }
}
