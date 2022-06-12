namespace Indotalent.Merchandise {
    export interface BrandForm {
        Name: Serenity.StringEditor;
        Description: Serenity.TextAreaEditor;
    }

    export class BrandForm extends Serenity.PrefixedContext {
        static formKey = 'Merchandise.Brand';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!BrandForm.init)  {
                BrandForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.TextAreaEditor;

                Q.initFormType(BrandForm, [
                    'Name', w0,
                    'Description', w1
                ]);
            }
        }
    }
}
