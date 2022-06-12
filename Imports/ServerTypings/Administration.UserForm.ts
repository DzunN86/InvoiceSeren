namespace Indotalent.Administration {
    export interface UserForm {
        IsActive: Serenity.BooleanEditor;
        IsTenantAdmin: Serenity.BooleanEditor;
        Username: Serenity.StringEditor;
        DisplayName: Serenity.StringEditor;
        Email: Serenity.EmailEditor;
        UserImage: Serenity.ImageUploadEditor;
        Password: Serenity.PasswordEditor;
        PasswordConfirm: Serenity.PasswordEditor;
        Source: Serenity.StringEditor;
        TenantId: Serenity.LookupEditor;
    }

    export class UserForm extends Serenity.PrefixedContext {
        static formKey = 'Administration.User';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!UserForm.init)  {
                UserForm.init = true;

                var s = Serenity;
                var w0 = s.BooleanEditor;
                var w1 = s.StringEditor;
                var w2 = s.EmailEditor;
                var w3 = s.ImageUploadEditor;
                var w4 = s.PasswordEditor;
                var w5 = s.LookupEditor;

                Q.initFormType(UserForm, [
                    'IsActive', w0,
                    'IsTenantAdmin', w0,
                    'Username', w1,
                    'DisplayName', w1,
                    'Email', w2,
                    'UserImage', w3,
                    'Password', w4,
                    'PasswordConfirm', w4,
                    'Source', w1,
                    'TenantId', w5
                ]);
            }
        }
    }
}
