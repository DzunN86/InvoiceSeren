namespace Indotalent.Merchandise {
    export interface CategoryForm {
        Name: Serenity.StringEditor;
        Description: Serenity.TextAreaEditor;
    }

    export class CategoryForm extends Serenity.PrefixedContext {
        static formKey = 'Merchandise.Category';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!CategoryForm.init)  {
                CategoryForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.TextAreaEditor;

                Q.initFormType(CategoryForm, [
                    'Name', w0,
                    'Description', w1
                ]);
            }
        }
    }
}
