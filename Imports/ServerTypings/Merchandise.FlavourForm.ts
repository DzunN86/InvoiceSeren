namespace Indotalent.Merchandise {
    export interface FlavourForm {
        Name: Serenity.StringEditor;
        Description: Serenity.StringEditor;
        InsertDate: Serenity.DateEditor;
        InsertUserId: Serenity.IntegerEditor;
        UpdateDate: Serenity.DateEditor;
        UpdateUserId: Serenity.IntegerEditor;
        TenantId: Serenity.IntegerEditor;
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
                var w1 = s.DateEditor;
                var w2 = s.IntegerEditor;

                Q.initFormType(FlavourForm, [
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
