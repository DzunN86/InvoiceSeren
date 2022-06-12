namespace Indotalent.Merchandise {
    export interface FlavourForm {
        Name: Serenity.StringEditor;
        Description: Serenity.TextAreaEditor;
    }

    export class FlavourForm extends Serenity.PrefixedContext {
        static formKey = 'Merchandise.Flavour';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!FlavourForm.init)  {
                FlavourForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.TextAreaEditor;

                Q.initFormType(FlavourForm, [
                    'Name', w0,
                    'Description', w1
                ]);
            }
        }
    }
}
