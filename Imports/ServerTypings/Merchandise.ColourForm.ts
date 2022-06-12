namespace Indotalent.Merchandise {
    export interface ColourForm {
        Name: Serenity.StringEditor;
        Description: Serenity.StringEditor;
        InsertDate: Serenity.DateEditor;
        InsertUserId: Serenity.IntegerEditor;
        UpdateDate: Serenity.DateEditor;
        UpdateUserId: Serenity.IntegerEditor;
        TenantId: Serenity.IntegerEditor;
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
                var w1 = s.DateEditor;
                var w2 = s.IntegerEditor;

                Q.initFormType(ColourForm, [
                    'Name', w0,
                    'Description', w0,
                    'InsertDate', w1,
                    'InsertUserId', w2,
                    'UpdateDate', w1,
                    'UpdateUserId', w2,
                    'TenantId', w2
                ]);
            }
        }
    }
}
