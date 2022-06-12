var Indotalent;
(function (Indotalent) {
    var Administration;
    (function (Administration) {
        var LanguageColumns = /** @class */ (function () {
            function LanguageColumns() {
            }
            LanguageColumns.columnsKey = 'Administration.Language';
            return LanguageColumns;
        }());
        Administration.LanguageColumns = LanguageColumns;
    })(Administration = Indotalent.Administration || (Indotalent.Administration = {}));
})(Indotalent || (Indotalent = {}));
var Indotalent;
(function (Indotalent) {
    var Administration;
    (function (Administration) {
        var LanguageForm = /** @class */ (function (_super) {
            __extends(LanguageForm, _super);
            function LanguageForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!LanguageForm.init) {
                    LanguageForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    Q.initFormType(LanguageForm, [
                        'LanguageId', w0,
                        'LanguageName', w0
                    ]);
                }
                return _this;
            }
            LanguageForm.formKey = 'Administration.Language';
            return LanguageForm;
        }(Serenity.PrefixedContext));
        Administration.LanguageForm = LanguageForm;
    })(Administration = Indotalent.Administration || (Indotalent.Administration = {}));
})(Indotalent || (Indotalent = {}));
var Indotalent;
(function (Indotalent) {
    var Administration;
    (function (Administration) {
        var LanguageRow;
        (function (LanguageRow) {
            LanguageRow.idProperty = 'Id';
            LanguageRow.nameProperty = 'LanguageName';
            LanguageRow.localTextPrefix = 'Administration.Language';
            LanguageRow.lookupKey = 'Administration.Language';
            function getLookup() {
                return Q.getLookup('Administration.Language');
            }
            LanguageRow.getLookup = getLookup;
            LanguageRow.deletePermission = 'Administration:Translation';
            LanguageRow.insertPermission = 'Administration:Translation';
            LanguageRow.readPermission = 'Administration:Translation';
            LanguageRow.updatePermission = 'Administration:Translation';
        })(LanguageRow = Administration.LanguageRow || (Administration.LanguageRow = {}));
    })(Administration = Indotalent.Administration || (Indotalent.Administration = {}));
})(Indotalent || (Indotalent = {}));
var Indotalent;
(function (Indotalent) {
    var Administration;
    (function (Administration) {
        var LanguageService;
        (function (LanguageService) {
            LanguageService.baseUrl = 'Administration/Language';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                LanguageService[x] = function (r, s, o) {
                    return Q.serviceRequest(LanguageService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(LanguageService = Administration.LanguageService || (Administration.LanguageService = {}));
    })(Administration = Indotalent.Administration || (Indotalent.Administration = {}));
})(Indotalent || (Indotalent = {}));
var Indotalent;
(function (Indotalent) {
    var Administration;
    (function (Administration) {
        var PermissionKeys;
        (function (PermissionKeys) {
            PermissionKeys.Security = "Administration:Security";
            PermissionKeys.Translation = "Administration:Translation";
            PermissionKeys.Tenant = "Administration:Tenant";
        })(PermissionKeys = Administration.PermissionKeys || (Administration.PermissionKeys = {}));
    })(Administration = Indotalent.Administration || (Indotalent.Administration = {}));
})(Indotalent || (Indotalent = {}));
var Indotalent;
(function (Indotalent) {
    var Administration;
    (function (Administration) {
        var RoleColumns = /** @class */ (function () {
            function RoleColumns() {
            }
            RoleColumns.columnsKey = 'Administration.Role';
            return RoleColumns;
        }());
        Administration.RoleColumns = RoleColumns;
    })(Administration = Indotalent.Administration || (Indotalent.Administration = {}));
})(Indotalent || (Indotalent = {}));
var Indotalent;
(function (Indotalent) {
    var Administration;
    (function (Administration) {
        var RoleForm = /** @class */ (function (_super) {
            __extends(RoleForm, _super);
            function RoleForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!RoleForm.init) {
                    RoleForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    Q.initFormType(RoleForm, [
                        'RoleName', w0
                    ]);
                }
                return _this;
            }
            RoleForm.formKey = 'Administration.Role';
            return RoleForm;
        }(Serenity.PrefixedContext));
        Administration.RoleForm = RoleForm;
    })(Administration = Indotalent.Administration || (Indotalent.Administration = {}));
})(Indotalent || (Indotalent = {}));
var Indotalent;
(function (Indotalent) {
    var Administration;
    (function (Administration) {
        var RolePermissionRow;
        (function (RolePermissionRow) {
            RolePermissionRow.idProperty = 'RolePermissionId';
            RolePermissionRow.nameProperty = 'PermissionKey';
            RolePermissionRow.localTextPrefix = 'Administration.RolePermission';
            RolePermissionRow.deletePermission = 'Administration:Security';
            RolePermissionRow.insertPermission = 'Administration:Security';
            RolePermissionRow.readPermission = 'Administration:Security';
            RolePermissionRow.updatePermission = 'Administration:Security';
        })(RolePermissionRow = Administration.RolePermissionRow || (Administration.RolePermissionRow = {}));
    })(Administration = Indotalent.Administration || (Indotalent.Administration = {}));
})(Indotalent || (Indotalent = {}));
var Indotalent;
(function (Indotalent) {
    var Administration;
    (function (Administration) {
        var RolePermissionService;
        (function (RolePermissionService) {
            RolePermissionService.baseUrl = 'Administration/RolePermission';
            [
                'Update',
                'List'
            ].forEach(function (x) {
                RolePermissionService[x] = function (r, s, o) {
                    return Q.serviceRequest(RolePermissionService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(RolePermissionService = Administration.RolePermissionService || (Administration.RolePermissionService = {}));
    })(Administration = Indotalent.Administration || (Indotalent.Administration = {}));
})(Indotalent || (Indotalent = {}));
var Indotalent;
(function (Indotalent) {
    var Administration;
    (function (Administration) {
        var RoleRow;
        (function (RoleRow) {
            RoleRow.idProperty = 'RoleId';
            RoleRow.nameProperty = 'RoleName';
            RoleRow.localTextPrefix = 'Administration.Role';
            RoleRow.lookupKey = 'Administration.Role';
            function getLookup() {
                return Q.getLookup('Administration.Role');
            }
            RoleRow.getLookup = getLookup;
            RoleRow.deletePermission = 'Administration:Security';
            RoleRow.insertPermission = 'Administration:Security';
            RoleRow.readPermission = 'Administration:Security';
            RoleRow.updatePermission = 'Administration:Security';
        })(RoleRow = Administration.RoleRow || (Administration.RoleRow = {}));
    })(Administration = Indotalent.Administration || (Indotalent.Administration = {}));
})(Indotalent || (Indotalent = {}));
var Indotalent;
(function (Indotalent) {
    var Administration;
    (function (Administration) {
        var RoleService;
        (function (RoleService) {
            RoleService.baseUrl = 'Administration/Role';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                RoleService[x] = function (r, s, o) {
                    return Q.serviceRequest(RoleService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(RoleService = Administration.RoleService || (Administration.RoleService = {}));
    })(Administration = Indotalent.Administration || (Indotalent.Administration = {}));
})(Indotalent || (Indotalent = {}));
var Indotalent;
(function (Indotalent) {
    var Administration;
    (function (Administration) {
        var TenantColumns = /** @class */ (function () {
            function TenantColumns() {
            }
            TenantColumns.columnsKey = 'Administration.Tenant';
            return TenantColumns;
        }());
        Administration.TenantColumns = TenantColumns;
    })(Administration = Indotalent.Administration || (Indotalent.Administration = {}));
})(Indotalent || (Indotalent = {}));
var Indotalent;
(function (Indotalent) {
    var Administration;
    (function (Administration) {
        var TenantForm = /** @class */ (function (_super) {
            __extends(TenantForm, _super);
            function TenantForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!TenantForm.init) {
                    TenantForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.TextAreaEditor;
                    var w2 = s.BooleanEditor;
                    var w3 = s.IntegerEditor;
                    Q.initFormType(TenantForm, [
                        'TenantName', w0,
                        'Description', w1,
                        'Currency', w0,
                        'Street', w0,
                        'City', w0,
                        'State', w0,
                        'ZipCode', w0,
                        'Phone', w0,
                        'Email', w0,
                        'ProductNumberPrefix', w0,
                        'ProductNumberUseDate', w2,
                        'ProductNumberLength', w3,
                        'CustomerNumberPrefix', w0,
                        'CustomerNumberUseDate', w2,
                        'CustomerNumberLength', w3,
                        'SalesNumberPrefix', w0,
                        'SalesNumberUseDate', w2,
                        'SalesNumberLength', w3,
                        'InvoiceNumberPrefix', w0,
                        'InvoiceNumberUseDate', w2,
                        'InvoiceNumberLength', w3,
                        'InvoicePaymentNumberPrefix', w0,
                        'InvoicePaymentNumberUseDate', w2,
                        'InvoicePaymentNumberLength', w3,
                        'VendorNumberPrefix', w0,
                        'VendorNumberUseDate', w2,
                        'VendorNumberLength', w3,
                        'PurchaseNumberPrefix', w0,
                        'PurchaseNumberUseDate', w2,
                        'PurchaseNumberLength', w3,
                        'BillNumberPrefix', w0,
                        'BillNumberUseDate', w2,
                        'BillNumberLength', w3,
                        'BillPaymentNumberPrefix', w0,
                        'BillPaymentNumberUseDate', w2,
                        'BillPaymentNumberLength', w3,
                        'MaximumUser', w3
                    ]);
                }
                return _this;
            }
            TenantForm.formKey = 'Administration.Tenant';
            return TenantForm;
        }(Serenity.PrefixedContext));
        Administration.TenantForm = TenantForm;
    })(Administration = Indotalent.Administration || (Indotalent.Administration = {}));
})(Indotalent || (Indotalent = {}));
var Indotalent;
(function (Indotalent) {
    var Administration;
    (function (Administration) {
        var TenantRow;
        (function (TenantRow) {
            TenantRow.idProperty = 'TenantId';
            TenantRow.nameProperty = 'TenantName';
            TenantRow.localTextPrefix = 'Administration.Tenant';
            TenantRow.lookupKey = 'Administration.Tenant';
            function getLookup() {
                return Q.getLookup('Administration.Tenant');
            }
            TenantRow.getLookup = getLookup;
            TenantRow.deletePermission = 'Administration:Tenant';
            TenantRow.insertPermission = 'Administration:Tenant';
            TenantRow.readPermission = 'Administration:Tenant';
            TenantRow.updatePermission = 'Administration:Tenant';
        })(TenantRow = Administration.TenantRow || (Administration.TenantRow = {}));
    })(Administration = Indotalent.Administration || (Indotalent.Administration = {}));
})(Indotalent || (Indotalent = {}));
var Indotalent;
(function (Indotalent) {
    var Administration;
    (function (Administration) {
        var TenantService;
        (function (TenantService) {
            TenantService.baseUrl = 'Administration/Tenant';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                TenantService[x] = function (r, s, o) {
                    return Q.serviceRequest(TenantService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(TenantService = Administration.TenantService || (Administration.TenantService = {}));
    })(Administration = Indotalent.Administration || (Indotalent.Administration = {}));
})(Indotalent || (Indotalent = {}));
var Indotalent;
(function (Indotalent) {
    var Administration;
    (function (Administration) {
        var TranslationService;
        (function (TranslationService) {
            TranslationService.baseUrl = 'Administration/Translation';
            [
                'List',
                'Update'
            ].forEach(function (x) {
                TranslationService[x] = function (r, s, o) {
                    return Q.serviceRequest(TranslationService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(TranslationService = Administration.TranslationService || (Administration.TranslationService = {}));
    })(Administration = Indotalent.Administration || (Indotalent.Administration = {}));
})(Indotalent || (Indotalent = {}));
var Indotalent;
(function (Indotalent) {
    var Administration;
    (function (Administration) {
        var UserColumns = /** @class */ (function () {
            function UserColumns() {
            }
            UserColumns.columnsKey = 'Administration.User';
            return UserColumns;
        }());
        Administration.UserColumns = UserColumns;
    })(Administration = Indotalent.Administration || (Indotalent.Administration = {}));
})(Indotalent || (Indotalent = {}));
var Indotalent;
(function (Indotalent) {
    var Administration;
    (function (Administration) {
        var UserForm = /** @class */ (function (_super) {
            __extends(UserForm, _super);
            function UserForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!UserForm.init) {
                    UserForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.EmailEditor;
                    var w2 = s.ImageUploadEditor;
                    var w3 = s.PasswordEditor;
                    Q.initFormType(UserForm, [
                        'Username', w0,
                        'DisplayName', w0,
                        'Email', w1,
                        'UserImage', w2,
                        'Password', w3,
                        'PasswordConfirm', w3,
                        'Source', w0
                    ]);
                }
                return _this;
            }
            UserForm.formKey = 'Administration.User';
            return UserForm;
        }(Serenity.PrefixedContext));
        Administration.UserForm = UserForm;
    })(Administration = Indotalent.Administration || (Indotalent.Administration = {}));
})(Indotalent || (Indotalent = {}));
var Indotalent;
(function (Indotalent) {
    var Administration;
    (function (Administration) {
        var UserPermissionRow;
        (function (UserPermissionRow) {
            UserPermissionRow.idProperty = 'UserPermissionId';
            UserPermissionRow.nameProperty = 'PermissionKey';
            UserPermissionRow.localTextPrefix = 'Administration.UserPermission';
            UserPermissionRow.deletePermission = 'Administration:Security';
            UserPermissionRow.insertPermission = 'Administration:Security';
            UserPermissionRow.readPermission = 'Administration:Security';
            UserPermissionRow.updatePermission = 'Administration:Security';
        })(UserPermissionRow = Administration.UserPermissionRow || (Administration.UserPermissionRow = {}));
    })(Administration = Indotalent.Administration || (Indotalent.Administration = {}));
})(Indotalent || (Indotalent = {}));
var Indotalent;
(function (Indotalent) {
    var Administration;
    (function (Administration) {
        var UserPermissionService;
        (function (UserPermissionService) {
            UserPermissionService.baseUrl = 'Administration/UserPermission';
            [
                'Update',
                'List',
                'ListRolePermissions',
                'ListPermissionKeys'
            ].forEach(function (x) {
                UserPermissionService[x] = function (r, s, o) {
                    return Q.serviceRequest(UserPermissionService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(UserPermissionService = Administration.UserPermissionService || (Administration.UserPermissionService = {}));
    })(Administration = Indotalent.Administration || (Indotalent.Administration = {}));
})(Indotalent || (Indotalent = {}));
var Indotalent;
(function (Indotalent) {
    var Administration;
    (function (Administration) {
        var UserRoleRow;
        (function (UserRoleRow) {
            UserRoleRow.idProperty = 'UserRoleId';
            UserRoleRow.localTextPrefix = 'Administration.UserRole';
            UserRoleRow.deletePermission = 'Administration:Security';
            UserRoleRow.insertPermission = 'Administration:Security';
            UserRoleRow.readPermission = 'Administration:Security';
            UserRoleRow.updatePermission = 'Administration:Security';
        })(UserRoleRow = Administration.UserRoleRow || (Administration.UserRoleRow = {}));
    })(Administration = Indotalent.Administration || (Indotalent.Administration = {}));
})(Indotalent || (Indotalent = {}));
var Indotalent;
(function (Indotalent) {
    var Administration;
    (function (Administration) {
        var UserRoleService;
        (function (UserRoleService) {
            UserRoleService.baseUrl = 'Administration/UserRole';
            [
                'Update',
                'List'
            ].forEach(function (x) {
                UserRoleService[x] = function (r, s, o) {
                    return Q.serviceRequest(UserRoleService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(UserRoleService = Administration.UserRoleService || (Administration.UserRoleService = {}));
    })(Administration = Indotalent.Administration || (Indotalent.Administration = {}));
})(Indotalent || (Indotalent = {}));
var Indotalent;
(function (Indotalent) {
    var Administration;
    (function (Administration) {
        var UserRow;
        (function (UserRow) {
            UserRow.idProperty = 'UserId';
            UserRow.isActiveProperty = 'IsActive';
            UserRow.nameProperty = 'Username';
            UserRow.localTextPrefix = 'Administration.User';
            UserRow.lookupKey = 'Administration.User';
            function getLookup() {
                return Q.getLookup('Administration.User');
            }
            UserRow.getLookup = getLookup;
            UserRow.deletePermission = 'Administration:Security';
            UserRow.insertPermission = 'Administration:Security';
            UserRow.readPermission = 'Administration:Security';
            UserRow.updatePermission = 'Administration:Security';
        })(UserRow = Administration.UserRow || (Administration.UserRow = {}));
    })(Administration = Indotalent.Administration || (Indotalent.Administration = {}));
})(Indotalent || (Indotalent = {}));
var Indotalent;
(function (Indotalent) {
    var Administration;
    (function (Administration) {
        var UserService;
        (function (UserService) {
            UserService.baseUrl = 'Administration/User';
            [
                'Create',
                'Update',
                'Delete',
                'Undelete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                UserService[x] = function (r, s, o) {
                    return Q.serviceRequest(UserService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(UserService = Administration.UserService || (Administration.UserService = {}));
    })(Administration = Indotalent.Administration || (Indotalent.Administration = {}));
})(Indotalent || (Indotalent = {}));
var Indotalent;
(function (Indotalent) {
    var Membership;
    (function (Membership) {
        var ChangePasswordForm = /** @class */ (function (_super) {
            __extends(ChangePasswordForm, _super);
            function ChangePasswordForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!ChangePasswordForm.init) {
                    ChangePasswordForm.init = true;
                    var s = Serenity;
                    var w0 = s.PasswordEditor;
                    Q.initFormType(ChangePasswordForm, [
                        'OldPassword', w0,
                        'NewPassword', w0,
                        'ConfirmPassword', w0
                    ]);
                }
                return _this;
            }
            ChangePasswordForm.formKey = 'Membership.ChangePassword';
            return ChangePasswordForm;
        }(Serenity.PrefixedContext));
        Membership.ChangePasswordForm = ChangePasswordForm;
    })(Membership = Indotalent.Membership || (Indotalent.Membership = {}));
})(Indotalent || (Indotalent = {}));
var Indotalent;
(function (Indotalent) {
    var Membership;
    (function (Membership) {
        var ForgotPasswordForm = /** @class */ (function (_super) {
            __extends(ForgotPasswordForm, _super);
            function ForgotPasswordForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!ForgotPasswordForm.init) {
                    ForgotPasswordForm.init = true;
                    var s = Serenity;
                    var w0 = s.EmailAddressEditor;
                    Q.initFormType(ForgotPasswordForm, [
                        'Email', w0
                    ]);
                }
                return _this;
            }
            ForgotPasswordForm.formKey = 'Membership.ForgotPassword';
            return ForgotPasswordForm;
        }(Serenity.PrefixedContext));
        Membership.ForgotPasswordForm = ForgotPasswordForm;
    })(Membership = Indotalent.Membership || (Indotalent.Membership = {}));
})(Indotalent || (Indotalent = {}));
var Indotalent;
(function (Indotalent) {
    var Membership;
    (function (Membership) {
        var LoginForm = /** @class */ (function (_super) {
            __extends(LoginForm, _super);
            function LoginForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!LoginForm.init) {
                    LoginForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.PasswordEditor;
                    Q.initFormType(LoginForm, [
                        'Username', w0,
                        'Password', w1
                    ]);
                }
                return _this;
            }
            LoginForm.formKey = 'Membership.Login';
            return LoginForm;
        }(Serenity.PrefixedContext));
        Membership.LoginForm = LoginForm;
    })(Membership = Indotalent.Membership || (Indotalent.Membership = {}));
})(Indotalent || (Indotalent = {}));
var Indotalent;
(function (Indotalent) {
    var Membership;
    (function (Membership) {
        var ResetPasswordForm = /** @class */ (function (_super) {
            __extends(ResetPasswordForm, _super);
            function ResetPasswordForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!ResetPasswordForm.init) {
                    ResetPasswordForm.init = true;
                    var s = Serenity;
                    var w0 = s.PasswordEditor;
                    Q.initFormType(ResetPasswordForm, [
                        'NewPassword', w0,
                        'ConfirmPassword', w0
                    ]);
                }
                return _this;
            }
            ResetPasswordForm.formKey = 'Membership.ResetPassword';
            return ResetPasswordForm;
        }(Serenity.PrefixedContext));
        Membership.ResetPasswordForm = ResetPasswordForm;
    })(Membership = Indotalent.Membership || (Indotalent.Membership = {}));
})(Indotalent || (Indotalent = {}));
var Indotalent;
(function (Indotalent) {
    var Membership;
    (function (Membership) {
        var SignUpForm = /** @class */ (function (_super) {
            __extends(SignUpForm, _super);
            function SignUpForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!SignUpForm.init) {
                    SignUpForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.EmailAddressEditor;
                    var w2 = s.PasswordEditor;
                    Q.initFormType(SignUpForm, [
                        'DisplayName', w0,
                        'Email', w1,
                        'ConfirmEmail', w1,
                        'Password', w2,
                        'ConfirmPassword', w2
                    ]);
                }
                return _this;
            }
            SignUpForm.formKey = 'Membership.SignUp';
            return SignUpForm;
        }(Serenity.PrefixedContext));
        Membership.SignUpForm = SignUpForm;
    })(Membership = Indotalent.Membership || (Indotalent.Membership = {}));
})(Indotalent || (Indotalent = {}));
var Indotalent;
(function (Indotalent) {
    var Merchandise;
    (function (Merchandise) {
        var BrandColumns = /** @class */ (function () {
            function BrandColumns() {
            }
            BrandColumns.columnsKey = 'Merchandise.Brand';
            return BrandColumns;
        }());
        Merchandise.BrandColumns = BrandColumns;
    })(Merchandise = Indotalent.Merchandise || (Indotalent.Merchandise = {}));
})(Indotalent || (Indotalent = {}));
var Indotalent;
(function (Indotalent) {
    var Merchandise;
    (function (Merchandise) {
        var BrandForm = /** @class */ (function (_super) {
            __extends(BrandForm, _super);
            function BrandForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!BrandForm.init) {
                    BrandForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.DateEditor;
                    var w2 = s.IntegerEditor;
                    Q.initFormType(BrandForm, [
                        'Name', w0,
                        'Description', w0,
                        'InsertDate', w1,
                        'InsertUserId', w2,
                        'UpdateDate', w1,
                        'UpdateUserId', w2,
                        'TenantId', w2
                    ]);
                }
                return _this;
            }
            BrandForm.formKey = 'Merchandise.Brand';
            return BrandForm;
        }(Serenity.PrefixedContext));
        Merchandise.BrandForm = BrandForm;
    })(Merchandise = Indotalent.Merchandise || (Indotalent.Merchandise = {}));
})(Indotalent || (Indotalent = {}));
var Indotalent;
(function (Indotalent) {
    var Merchandise;
    (function (Merchandise) {
        var BrandRow;
        (function (BrandRow) {
            BrandRow.idProperty = 'Id';
            BrandRow.nameProperty = 'Name';
            BrandRow.localTextPrefix = 'Merchandise.Brand';
            BrandRow.deletePermission = 'Merchandise:Brand';
            BrandRow.insertPermission = 'Merchandise:Brand';
            BrandRow.readPermission = 'Merchandise:Brand';
            BrandRow.updatePermission = 'Merchandise:Brand';
        })(BrandRow = Merchandise.BrandRow || (Merchandise.BrandRow = {}));
    })(Merchandise = Indotalent.Merchandise || (Indotalent.Merchandise = {}));
})(Indotalent || (Indotalent = {}));
var Indotalent;
(function (Indotalent) {
    var Merchandise;
    (function (Merchandise) {
        var BrandService;
        (function (BrandService) {
            BrandService.baseUrl = 'Merchandise/Brand';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                BrandService[x] = function (r, s, o) {
                    return Q.serviceRequest(BrandService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(BrandService = Merchandise.BrandService || (Merchandise.BrandService = {}));
    })(Merchandise = Indotalent.Merchandise || (Indotalent.Merchandise = {}));
})(Indotalent || (Indotalent = {}));
var Indotalent;
(function (Indotalent) {
    var Merchandise;
    (function (Merchandise) {
        var CategoryColumns = /** @class */ (function () {
            function CategoryColumns() {
            }
            CategoryColumns.columnsKey = 'Merchandise.Category';
            return CategoryColumns;
        }());
        Merchandise.CategoryColumns = CategoryColumns;
    })(Merchandise = Indotalent.Merchandise || (Indotalent.Merchandise = {}));
})(Indotalent || (Indotalent = {}));
var Indotalent;
(function (Indotalent) {
    var Merchandise;
    (function (Merchandise) {
        var CategoryForm = /** @class */ (function (_super) {
            __extends(CategoryForm, _super);
            function CategoryForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!CategoryForm.init) {
                    CategoryForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.DateEditor;
                    var w2 = s.IntegerEditor;
                    Q.initFormType(CategoryForm, [
                        'Name', w0,
                        'Description', w0,
                        'InsertDate', w1,
                        'InsertUserId', w2,
                        'UpdateDate', w1,
                        'UpdateUserId', w2,
                        'TenantId', w2
                    ]);
                }
                return _this;
            }
            CategoryForm.formKey = 'Merchandise.Category';
            return CategoryForm;
        }(Serenity.PrefixedContext));
        Merchandise.CategoryForm = CategoryForm;
    })(Merchandise = Indotalent.Merchandise || (Indotalent.Merchandise = {}));
})(Indotalent || (Indotalent = {}));
var Indotalent;
(function (Indotalent) {
    var Merchandise;
    (function (Merchandise) {
        var CategoryRow;
        (function (CategoryRow) {
            CategoryRow.idProperty = 'Id';
            CategoryRow.nameProperty = 'Name';
            CategoryRow.localTextPrefix = 'Merchandise.Category';
            CategoryRow.deletePermission = 'Merchandise:Category';
            CategoryRow.insertPermission = 'Merchandise:Category';
            CategoryRow.readPermission = 'Merchandise:Category';
            CategoryRow.updatePermission = 'Merchandise:Category';
        })(CategoryRow = Merchandise.CategoryRow || (Merchandise.CategoryRow = {}));
    })(Merchandise = Indotalent.Merchandise || (Indotalent.Merchandise = {}));
})(Indotalent || (Indotalent = {}));
var Indotalent;
(function (Indotalent) {
    var Merchandise;
    (function (Merchandise) {
        var CategoryService;
        (function (CategoryService) {
            CategoryService.baseUrl = 'Merchandise/Category';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                CategoryService[x] = function (r, s, o) {
                    return Q.serviceRequest(CategoryService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(CategoryService = Merchandise.CategoryService || (Merchandise.CategoryService = {}));
    })(Merchandise = Indotalent.Merchandise || (Indotalent.Merchandise = {}));
})(Indotalent || (Indotalent = {}));
var Indotalent;
(function (Indotalent) {
    var Merchandise;
    (function (Merchandise) {
        var ColourColumns = /** @class */ (function () {
            function ColourColumns() {
            }
            ColourColumns.columnsKey = 'Merchandise.Colour';
            return ColourColumns;
        }());
        Merchandise.ColourColumns = ColourColumns;
    })(Merchandise = Indotalent.Merchandise || (Indotalent.Merchandise = {}));
})(Indotalent || (Indotalent = {}));
var Indotalent;
(function (Indotalent) {
    var Merchandise;
    (function (Merchandise) {
        var ColourForm = /** @class */ (function (_super) {
            __extends(ColourForm, _super);
            function ColourForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!ColourForm.init) {
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
                return _this;
            }
            ColourForm.formKey = 'Merchandise.Colour';
            return ColourForm;
        }(Serenity.PrefixedContext));
        Merchandise.ColourForm = ColourForm;
    })(Merchandise = Indotalent.Merchandise || (Indotalent.Merchandise = {}));
})(Indotalent || (Indotalent = {}));
var Indotalent;
(function (Indotalent) {
    var Merchandise;
    (function (Merchandise) {
        var ColourRow;
        (function (ColourRow) {
            ColourRow.idProperty = 'Id';
            ColourRow.nameProperty = 'Name';
            ColourRow.localTextPrefix = 'Merchandise.Colour';
            ColourRow.deletePermission = 'Merchandise:Colour';
            ColourRow.insertPermission = 'Merchandise:Colour';
            ColourRow.readPermission = 'Merchandise:Colour';
            ColourRow.updatePermission = 'Merchandise:Colour';
        })(ColourRow = Merchandise.ColourRow || (Merchandise.ColourRow = {}));
    })(Merchandise = Indotalent.Merchandise || (Indotalent.Merchandise = {}));
})(Indotalent || (Indotalent = {}));
var Indotalent;
(function (Indotalent) {
    var Merchandise;
    (function (Merchandise) {
        var ColourService;
        (function (ColourService) {
            ColourService.baseUrl = 'Merchandise/Colour';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                ColourService[x] = function (r, s, o) {
                    return Q.serviceRequest(ColourService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(ColourService = Merchandise.ColourService || (Merchandise.ColourService = {}));
    })(Merchandise = Indotalent.Merchandise || (Indotalent.Merchandise = {}));
})(Indotalent || (Indotalent = {}));
var Indotalent;
(function (Indotalent) {
    var Merchandise;
    (function (Merchandise) {
        var FlavourColumns = /** @class */ (function () {
            function FlavourColumns() {
            }
            FlavourColumns.columnsKey = 'Merchandise.Flavour';
            return FlavourColumns;
        }());
        Merchandise.FlavourColumns = FlavourColumns;
    })(Merchandise = Indotalent.Merchandise || (Indotalent.Merchandise = {}));
})(Indotalent || (Indotalent = {}));
var Indotalent;
(function (Indotalent) {
    var Merchandise;
    (function (Merchandise) {
        var FlavourForm = /** @class */ (function (_super) {
            __extends(FlavourForm, _super);
            function FlavourForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!FlavourForm.init) {
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
                return _this;
            }
            FlavourForm.formKey = 'Merchandise.Flavour';
            return FlavourForm;
        }(Serenity.PrefixedContext));
        Merchandise.FlavourForm = FlavourForm;
    })(Merchandise = Indotalent.Merchandise || (Indotalent.Merchandise = {}));
})(Indotalent || (Indotalent = {}));
var Indotalent;
(function (Indotalent) {
    var Merchandise;
    (function (Merchandise) {
        var FlavourRow;
        (function (FlavourRow) {
            FlavourRow.idProperty = 'Id';
            FlavourRow.nameProperty = 'Name';
            FlavourRow.localTextPrefix = 'Merchandise.Flavour';
            FlavourRow.deletePermission = 'Merchandise:Flavour';
            FlavourRow.insertPermission = 'Merchandise:Flavour';
            FlavourRow.readPermission = 'Merchandise:Flavour';
            FlavourRow.updatePermission = 'Merchandise:Flavour';
        })(FlavourRow = Merchandise.FlavourRow || (Merchandise.FlavourRow = {}));
    })(Merchandise = Indotalent.Merchandise || (Indotalent.Merchandise = {}));
})(Indotalent || (Indotalent = {}));
var Indotalent;
(function (Indotalent) {
    var Merchandise;
    (function (Merchandise) {
        var FlavourService;
        (function (FlavourService) {
            FlavourService.baseUrl = 'Merchandise/Flavour';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                FlavourService[x] = function (r, s, o) {
                    return Q.serviceRequest(FlavourService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(FlavourService = Merchandise.FlavourService || (Merchandise.FlavourService = {}));
    })(Merchandise = Indotalent.Merchandise || (Indotalent.Merchandise = {}));
})(Indotalent || (Indotalent = {}));
var Indotalent;
(function (Indotalent) {
    var Merchandise;
    (function (Merchandise) {
        var ProductColumns = /** @class */ (function () {
            function ProductColumns() {
            }
            ProductColumns.columnsKey = 'Merchandise.Product';
            return ProductColumns;
        }());
        Merchandise.ProductColumns = ProductColumns;
    })(Merchandise = Indotalent.Merchandise || (Indotalent.Merchandise = {}));
})(Indotalent || (Indotalent = {}));
var Indotalent;
(function (Indotalent) {
    var Merchandise;
    (function (Merchandise) {
        var ProductForm = /** @class */ (function (_super) {
            __extends(ProductForm, _super);
            function ProductForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!ProductForm.init) {
                    ProductForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.IntegerEditor;
                    var w2 = s.DecimalEditor;
                    var w3 = s.DateEditor;
                    Q.initFormType(ProductForm, [
                        'Name', w0,
                        'Description', w0,
                        'Picture', w0,
                        'InternalCode', w0,
                        'Barcode', w0,
                        'UomId', w1,
                        'BrandId', w1,
                        'CategoryId', w1,
                        'SizeId', w1,
                        'ColourId', w1,
                        'FlavourId', w1,
                        'PurchasePrice', w2,
                        'SalesPrice', w2,
                        'PurchaseTaxId', w1,
                        'SalesTaxId', w1,
                        'InsertDate', w3,
                        'InsertUserId', w1,
                        'UpdateDate', w3,
                        'UpdateUserId', w1,
                        'TenantId', w1
                    ]);
                }
                return _this;
            }
            ProductForm.formKey = 'Merchandise.Product';
            return ProductForm;
        }(Serenity.PrefixedContext));
        Merchandise.ProductForm = ProductForm;
    })(Merchandise = Indotalent.Merchandise || (Indotalent.Merchandise = {}));
})(Indotalent || (Indotalent = {}));
var Indotalent;
(function (Indotalent) {
    var Merchandise;
    (function (Merchandise) {
        var ProductRow;
        (function (ProductRow) {
            ProductRow.idProperty = 'Id';
            ProductRow.nameProperty = 'Name';
            ProductRow.localTextPrefix = 'Merchandise.Product';
            ProductRow.deletePermission = 'Merchandise:Product';
            ProductRow.insertPermission = 'Merchandise:Product';
            ProductRow.readPermission = 'Merchandise:Product';
            ProductRow.updatePermission = 'Merchandise:Product';
        })(ProductRow = Merchandise.ProductRow || (Merchandise.ProductRow = {}));
    })(Merchandise = Indotalent.Merchandise || (Indotalent.Merchandise = {}));
})(Indotalent || (Indotalent = {}));
var Indotalent;
(function (Indotalent) {
    var Merchandise;
    (function (Merchandise) {
        var ProductService;
        (function (ProductService) {
            ProductService.baseUrl = 'Merchandise/Product';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                ProductService[x] = function (r, s, o) {
                    return Q.serviceRequest(ProductService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(ProductService = Merchandise.ProductService || (Merchandise.ProductService = {}));
    })(Merchandise = Indotalent.Merchandise || (Indotalent.Merchandise = {}));
})(Indotalent || (Indotalent = {}));
var Indotalent;
(function (Indotalent) {
    var Merchandise;
    (function (Merchandise) {
        var SizeColumns = /** @class */ (function () {
            function SizeColumns() {
            }
            SizeColumns.columnsKey = 'Merchandise.Size';
            return SizeColumns;
        }());
        Merchandise.SizeColumns = SizeColumns;
    })(Merchandise = Indotalent.Merchandise || (Indotalent.Merchandise = {}));
})(Indotalent || (Indotalent = {}));
var Indotalent;
(function (Indotalent) {
    var Merchandise;
    (function (Merchandise) {
        var SizeForm = /** @class */ (function (_super) {
            __extends(SizeForm, _super);
            function SizeForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!SizeForm.init) {
                    SizeForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.TextAreaEditor;
                    Q.initFormType(SizeForm, [
                        'Name', w0,
                        'Description', w1
                    ]);
                }
                return _this;
            }
            SizeForm.formKey = 'Merchandise.Size';
            return SizeForm;
        }(Serenity.PrefixedContext));
        Merchandise.SizeForm = SizeForm;
    })(Merchandise = Indotalent.Merchandise || (Indotalent.Merchandise = {}));
})(Indotalent || (Indotalent = {}));
var Indotalent;
(function (Indotalent) {
    var Merchandise;
    (function (Merchandise) {
        var SizeRow;
        (function (SizeRow) {
            SizeRow.idProperty = 'Id';
            SizeRow.nameProperty = 'Name';
            SizeRow.localTextPrefix = 'Merchandise.Size';
            SizeRow.lookupKey = 'Merchandise.Size';
            function getLookup() {
                return Q.getLookup('Merchandise.Size');
            }
            SizeRow.getLookup = getLookup;
            SizeRow.deletePermission = 'Merchandise:Size';
            SizeRow.insertPermission = 'Merchandise:Size';
            SizeRow.readPermission = 'Merchandise:Size';
            SizeRow.updatePermission = 'Merchandise:Size';
        })(SizeRow = Merchandise.SizeRow || (Merchandise.SizeRow = {}));
    })(Merchandise = Indotalent.Merchandise || (Indotalent.Merchandise = {}));
})(Indotalent || (Indotalent = {}));
var Indotalent;
(function (Indotalent) {
    var Merchandise;
    (function (Merchandise) {
        var SizeService;
        (function (SizeService) {
            SizeService.baseUrl = 'Merchandise/Size';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                SizeService[x] = function (r, s, o) {
                    return Q.serviceRequest(SizeService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(SizeService = Merchandise.SizeService || (Merchandise.SizeService = {}));
    })(Merchandise = Indotalent.Merchandise || (Indotalent.Merchandise = {}));
})(Indotalent || (Indotalent = {}));
var Indotalent;
(function (Indotalent) {
    var Merchandise;
    (function (Merchandise) {
        var UomColumns = /** @class */ (function () {
            function UomColumns() {
            }
            UomColumns.columnsKey = 'Merchandise.Uom';
            return UomColumns;
        }());
        Merchandise.UomColumns = UomColumns;
    })(Merchandise = Indotalent.Merchandise || (Indotalent.Merchandise = {}));
})(Indotalent || (Indotalent = {}));
var Indotalent;
(function (Indotalent) {
    var Merchandise;
    (function (Merchandise) {
        var UomForm = /** @class */ (function (_super) {
            __extends(UomForm, _super);
            function UomForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!UomForm.init) {
                    UomForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.TextAreaEditor;
                    Q.initFormType(UomForm, [
                        'Name', w0,
                        'Description', w1
                    ]);
                }
                return _this;
            }
            UomForm.formKey = 'Merchandise.Uom';
            return UomForm;
        }(Serenity.PrefixedContext));
        Merchandise.UomForm = UomForm;
    })(Merchandise = Indotalent.Merchandise || (Indotalent.Merchandise = {}));
})(Indotalent || (Indotalent = {}));
var Indotalent;
(function (Indotalent) {
    var Merchandise;
    (function (Merchandise) {
        var UomRow;
        (function (UomRow) {
            UomRow.idProperty = 'Id';
            UomRow.nameProperty = 'Name';
            UomRow.localTextPrefix = 'Merchandise.Uom';
            UomRow.lookupKey = 'Merchandise.Uom';
            function getLookup() {
                return Q.getLookup('Merchandise.Uom');
            }
            UomRow.getLookup = getLookup;
            UomRow.deletePermission = 'Merchandise:Uom';
            UomRow.insertPermission = 'Merchandise:Uom';
            UomRow.readPermission = 'Merchandise:Uom';
            UomRow.updatePermission = 'Merchandise:Uom';
        })(UomRow = Merchandise.UomRow || (Merchandise.UomRow = {}));
    })(Merchandise = Indotalent.Merchandise || (Indotalent.Merchandise = {}));
})(Indotalent || (Indotalent = {}));
var Indotalent;
(function (Indotalent) {
    var Merchandise;
    (function (Merchandise) {
        var UomService;
        (function (UomService) {
            UomService.baseUrl = 'Merchandise/Uom';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                UomService[x] = function (r, s, o) {
                    return Q.serviceRequest(UomService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(UomService = Merchandise.UomService || (Merchandise.UomService = {}));
    })(Merchandise = Indotalent.Merchandise || (Indotalent.Merchandise = {}));
})(Indotalent || (Indotalent = {}));
var Indotalent;
(function (Indotalent) {
    var Purchase;
    (function (Purchase) {
        var BillColumns = /** @class */ (function () {
            function BillColumns() {
            }
            BillColumns.columnsKey = 'Purchase.Bill';
            return BillColumns;
        }());
        Purchase.BillColumns = BillColumns;
    })(Purchase = Indotalent.Purchase || (Indotalent.Purchase = {}));
})(Indotalent || (Indotalent = {}));
var Indotalent;
(function (Indotalent) {
    var Purchase;
    (function (Purchase) {
        var BillDetailColumns = /** @class */ (function () {
            function BillDetailColumns() {
            }
            BillDetailColumns.columnsKey = 'Purchase.BillDetail';
            return BillDetailColumns;
        }());
        Purchase.BillDetailColumns = BillDetailColumns;
    })(Purchase = Indotalent.Purchase || (Indotalent.Purchase = {}));
})(Indotalent || (Indotalent = {}));
var Indotalent;
(function (Indotalent) {
    var Purchase;
    (function (Purchase) {
        var BillDetailForm = /** @class */ (function (_super) {
            __extends(BillDetailForm, _super);
            function BillDetailForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!BillDetailForm.init) {
                    BillDetailForm.init = true;
                    var s = Serenity;
                    var w0 = s.IntegerEditor;
                    var w1 = s.DecimalEditor;
                    var w2 = s.DateEditor;
                    Q.initFormType(BillDetailForm, [
                        'BillId', w0,
                        'ProductId', w0,
                        'Price', w1,
                        'Qty', w1,
                        'SubTotal', w1,
                        'Discount', w1,
                        'BeforeTax', w1,
                        'TaxPercentage', w1,
                        'TaxAmount', w1,
                        'Total', w1,
                        'InsertDate', w2,
                        'InsertUserId', w0,
                        'UpdateDate', w2,
                        'UpdateUserId', w0,
                        'TenantId', w0
                    ]);
                }
                return _this;
            }
            BillDetailForm.formKey = 'Purchase.BillDetail';
            return BillDetailForm;
        }(Serenity.PrefixedContext));
        Purchase.BillDetailForm = BillDetailForm;
    })(Purchase = Indotalent.Purchase || (Indotalent.Purchase = {}));
})(Indotalent || (Indotalent = {}));
var Indotalent;
(function (Indotalent) {
    var Purchase;
    (function (Purchase) {
        var BillDetailRow;
        (function (BillDetailRow) {
            BillDetailRow.idProperty = 'Id';
            BillDetailRow.localTextPrefix = 'Purchase.BillDetail';
            BillDetailRow.deletePermission = 'Administration:General';
            BillDetailRow.insertPermission = 'Administration:General';
            BillDetailRow.readPermission = 'Administration:General';
            BillDetailRow.updatePermission = 'Administration:General';
        })(BillDetailRow = Purchase.BillDetailRow || (Purchase.BillDetailRow = {}));
    })(Purchase = Indotalent.Purchase || (Indotalent.Purchase = {}));
})(Indotalent || (Indotalent = {}));
var Indotalent;
(function (Indotalent) {
    var Purchase;
    (function (Purchase) {
        var BillDetailService;
        (function (BillDetailService) {
            BillDetailService.baseUrl = 'Purchase/BillDetail';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                BillDetailService[x] = function (r, s, o) {
                    return Q.serviceRequest(BillDetailService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(BillDetailService = Purchase.BillDetailService || (Purchase.BillDetailService = {}));
    })(Purchase = Indotalent.Purchase || (Indotalent.Purchase = {}));
})(Indotalent || (Indotalent = {}));
var Indotalent;
(function (Indotalent) {
    var Purchase;
    (function (Purchase) {
        var BillForm = /** @class */ (function (_super) {
            __extends(BillForm, _super);
            function BillForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!BillForm.init) {
                    BillForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.DateEditor;
                    var w2 = s.IntegerEditor;
                    var w3 = s.DecimalEditor;
                    Q.initFormType(BillForm, [
                        'Number', w0,
                        'Description', w0,
                        'ExternalReferenceNumber', w0,
                        'ProcurementGroup', w0,
                        'BillDate', w1,
                        'PurchaseOrderId', w2,
                        'SubTotal', w3,
                        'Discount', w3,
                        'BeforeTax', w3,
                        'TaxAmount', w3,
                        'Total', w3,
                        'OtherCharge', w3,
                        'InsertDate', w1,
                        'InsertUserId', w2,
                        'UpdateDate', w1,
                        'UpdateUserId', w2,
                        'TenantId', w2
                    ]);
                }
                return _this;
            }
            BillForm.formKey = 'Purchase.Bill';
            return BillForm;
        }(Serenity.PrefixedContext));
        Purchase.BillForm = BillForm;
    })(Purchase = Indotalent.Purchase || (Indotalent.Purchase = {}));
})(Indotalent || (Indotalent = {}));
var Indotalent;
(function (Indotalent) {
    var Purchase;
    (function (Purchase) {
        var BillPaymentColumns = /** @class */ (function () {
            function BillPaymentColumns() {
            }
            BillPaymentColumns.columnsKey = 'Purchase.BillPayment';
            return BillPaymentColumns;
        }());
        Purchase.BillPaymentColumns = BillPaymentColumns;
    })(Purchase = Indotalent.Purchase || (Indotalent.Purchase = {}));
})(Indotalent || (Indotalent = {}));
var Indotalent;
(function (Indotalent) {
    var Purchase;
    (function (Purchase) {
        var BillPaymentForm = /** @class */ (function (_super) {
            __extends(BillPaymentForm, _super);
            function BillPaymentForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!BillPaymentForm.init) {
                    BillPaymentForm.init = true;
                    var s = Serenity;
                    var w0 = s.IntegerEditor;
                    var w1 = s.StringEditor;
                    var w2 = s.DateEditor;
                    var w3 = s.DecimalEditor;
                    Q.initFormType(BillPaymentForm, [
                        'BillId', w0,
                        'Number', w1,
                        'Description', w1,
                        'ProcurementGroup', w1,
                        'PaymentDate', w2,
                        'CashBankId', w0,
                        'BillAmount', w3,
                        'PaymentAmount', w3,
                        'InsertDate', w2,
                        'InsertUserId', w0,
                        'UpdateDate', w2,
                        'UpdateUserId', w0,
                        'TenantId', w0
                    ]);
                }
                return _this;
            }
            BillPaymentForm.formKey = 'Purchase.BillPayment';
            return BillPaymentForm;
        }(Serenity.PrefixedContext));
        Purchase.BillPaymentForm = BillPaymentForm;
    })(Purchase = Indotalent.Purchase || (Indotalent.Purchase = {}));
})(Indotalent || (Indotalent = {}));
var Indotalent;
(function (Indotalent) {
    var Purchase;
    (function (Purchase) {
        var BillPaymentRow;
        (function (BillPaymentRow) {
            BillPaymentRow.idProperty = 'Id';
            BillPaymentRow.nameProperty = 'Number';
            BillPaymentRow.localTextPrefix = 'Purchase.BillPayment';
            BillPaymentRow.deletePermission = 'Administration:General';
            BillPaymentRow.insertPermission = 'Administration:General';
            BillPaymentRow.readPermission = 'Administration:General';
            BillPaymentRow.updatePermission = 'Administration:General';
        })(BillPaymentRow = Purchase.BillPaymentRow || (Purchase.BillPaymentRow = {}));
    })(Purchase = Indotalent.Purchase || (Indotalent.Purchase = {}));
})(Indotalent || (Indotalent = {}));
var Indotalent;
(function (Indotalent) {
    var Purchase;
    (function (Purchase) {
        var BillPaymentService;
        (function (BillPaymentService) {
            BillPaymentService.baseUrl = 'Purchase/BillPayment';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                BillPaymentService[x] = function (r, s, o) {
                    return Q.serviceRequest(BillPaymentService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(BillPaymentService = Purchase.BillPaymentService || (Purchase.BillPaymentService = {}));
    })(Purchase = Indotalent.Purchase || (Indotalent.Purchase = {}));
})(Indotalent || (Indotalent = {}));
var Indotalent;
(function (Indotalent) {
    var Purchase;
    (function (Purchase) {
        var BillRow;
        (function (BillRow) {
            BillRow.idProperty = 'Id';
            BillRow.nameProperty = 'Number';
            BillRow.localTextPrefix = 'Purchase.Bill';
            BillRow.deletePermission = 'Administration:General';
            BillRow.insertPermission = 'Administration:General';
            BillRow.readPermission = 'Administration:General';
            BillRow.updatePermission = 'Administration:General';
        })(BillRow = Purchase.BillRow || (Purchase.BillRow = {}));
    })(Purchase = Indotalent.Purchase || (Indotalent.Purchase = {}));
})(Indotalent || (Indotalent = {}));
var Indotalent;
(function (Indotalent) {
    var Purchase;
    (function (Purchase) {
        var BillService;
        (function (BillService) {
            BillService.baseUrl = 'Purchase/Bill';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                BillService[x] = function (r, s, o) {
                    return Q.serviceRequest(BillService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(BillService = Purchase.BillService || (Purchase.BillService = {}));
    })(Purchase = Indotalent.Purchase || (Indotalent.Purchase = {}));
})(Indotalent || (Indotalent = {}));
var Indotalent;
(function (Indotalent) {
    var Purchase;
    (function (Purchase) {
        var PurchaseOrderColumns = /** @class */ (function () {
            function PurchaseOrderColumns() {
            }
            PurchaseOrderColumns.columnsKey = 'Purchase.PurchaseOrder';
            return PurchaseOrderColumns;
        }());
        Purchase.PurchaseOrderColumns = PurchaseOrderColumns;
    })(Purchase = Indotalent.Purchase || (Indotalent.Purchase = {}));
})(Indotalent || (Indotalent = {}));
var Indotalent;
(function (Indotalent) {
    var Purchase;
    (function (Purchase) {
        var PurchaseOrderDetailColumns = /** @class */ (function () {
            function PurchaseOrderDetailColumns() {
            }
            PurchaseOrderDetailColumns.columnsKey = 'Purchase.PurchaseOrderDetail';
            return PurchaseOrderDetailColumns;
        }());
        Purchase.PurchaseOrderDetailColumns = PurchaseOrderDetailColumns;
    })(Purchase = Indotalent.Purchase || (Indotalent.Purchase = {}));
})(Indotalent || (Indotalent = {}));
var Indotalent;
(function (Indotalent) {
    var Purchase;
    (function (Purchase) {
        var PurchaseOrderDetailForm = /** @class */ (function (_super) {
            __extends(PurchaseOrderDetailForm, _super);
            function PurchaseOrderDetailForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!PurchaseOrderDetailForm.init) {
                    PurchaseOrderDetailForm.init = true;
                    var s = Serenity;
                    var w0 = s.IntegerEditor;
                    var w1 = s.DecimalEditor;
                    var w2 = s.DateEditor;
                    Q.initFormType(PurchaseOrderDetailForm, [
                        'PurchaseOrderId', w0,
                        'ProductId', w0,
                        'Price', w1,
                        'Qty', w1,
                        'SubTotal', w1,
                        'Discount', w1,
                        'BeforeTax', w1,
                        'TaxPercentage', w1,
                        'TaxAmount', w1,
                        'Total', w1,
                        'InsertDate', w2,
                        'InsertUserId', w0,
                        'UpdateDate', w2,
                        'UpdateUserId', w0,
                        'TenantId', w0
                    ]);
                }
                return _this;
            }
            PurchaseOrderDetailForm.formKey = 'Purchase.PurchaseOrderDetail';
            return PurchaseOrderDetailForm;
        }(Serenity.PrefixedContext));
        Purchase.PurchaseOrderDetailForm = PurchaseOrderDetailForm;
    })(Purchase = Indotalent.Purchase || (Indotalent.Purchase = {}));
})(Indotalent || (Indotalent = {}));
var Indotalent;
(function (Indotalent) {
    var Purchase;
    (function (Purchase) {
        var PurchaseOrderDetailRow;
        (function (PurchaseOrderDetailRow) {
            PurchaseOrderDetailRow.idProperty = 'Id';
            PurchaseOrderDetailRow.localTextPrefix = 'Purchase.PurchaseOrderDetail';
            PurchaseOrderDetailRow.deletePermission = 'Administration:General';
            PurchaseOrderDetailRow.insertPermission = 'Administration:General';
            PurchaseOrderDetailRow.readPermission = 'Administration:General';
            PurchaseOrderDetailRow.updatePermission = 'Administration:General';
        })(PurchaseOrderDetailRow = Purchase.PurchaseOrderDetailRow || (Purchase.PurchaseOrderDetailRow = {}));
    })(Purchase = Indotalent.Purchase || (Indotalent.Purchase = {}));
})(Indotalent || (Indotalent = {}));
var Indotalent;
(function (Indotalent) {
    var Purchase;
    (function (Purchase) {
        var PurchaseOrderDetailService;
        (function (PurchaseOrderDetailService) {
            PurchaseOrderDetailService.baseUrl = 'Purchase/PurchaseOrderDetail';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                PurchaseOrderDetailService[x] = function (r, s, o) {
                    return Q.serviceRequest(PurchaseOrderDetailService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(PurchaseOrderDetailService = Purchase.PurchaseOrderDetailService || (Purchase.PurchaseOrderDetailService = {}));
    })(Purchase = Indotalent.Purchase || (Indotalent.Purchase = {}));
})(Indotalent || (Indotalent = {}));
var Indotalent;
(function (Indotalent) {
    var Purchase;
    (function (Purchase) {
        var PurchaseOrderForm = /** @class */ (function (_super) {
            __extends(PurchaseOrderForm, _super);
            function PurchaseOrderForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!PurchaseOrderForm.init) {
                    PurchaseOrderForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.DateEditor;
                    var w2 = s.IntegerEditor;
                    var w3 = s.DecimalEditor;
                    Q.initFormType(PurchaseOrderForm, [
                        'Number', w0,
                        'Description', w0,
                        'ProcurementGroup', w0,
                        'OrderDate', w1,
                        'VendorId', w2,
                        'SubTotal', w3,
                        'Discount', w3,
                        'BeforeTax', w3,
                        'TaxAmount', w3,
                        'Total', w3,
                        'OtherCharge', w3,
                        'InsertDate', w1,
                        'InsertUserId', w2,
                        'UpdateDate', w1,
                        'UpdateUserId', w2,
                        'TenantId', w2
                    ]);
                }
                return _this;
            }
            PurchaseOrderForm.formKey = 'Purchase.PurchaseOrder';
            return PurchaseOrderForm;
        }(Serenity.PrefixedContext));
        Purchase.PurchaseOrderForm = PurchaseOrderForm;
    })(Purchase = Indotalent.Purchase || (Indotalent.Purchase = {}));
})(Indotalent || (Indotalent = {}));
var Indotalent;
(function (Indotalent) {
    var Purchase;
    (function (Purchase) {
        var PurchaseOrderRow;
        (function (PurchaseOrderRow) {
            PurchaseOrderRow.idProperty = 'Id';
            PurchaseOrderRow.nameProperty = 'Number';
            PurchaseOrderRow.localTextPrefix = 'Purchase.PurchaseOrder';
            PurchaseOrderRow.deletePermission = 'Administration:General';
            PurchaseOrderRow.insertPermission = 'Administration:General';
            PurchaseOrderRow.readPermission = 'Administration:General';
            PurchaseOrderRow.updatePermission = 'Administration:General';
        })(PurchaseOrderRow = Purchase.PurchaseOrderRow || (Purchase.PurchaseOrderRow = {}));
    })(Purchase = Indotalent.Purchase || (Indotalent.Purchase = {}));
})(Indotalent || (Indotalent = {}));
var Indotalent;
(function (Indotalent) {
    var Purchase;
    (function (Purchase) {
        var PurchaseOrderService;
        (function (PurchaseOrderService) {
            PurchaseOrderService.baseUrl = 'Purchase/PurchaseOrder';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                PurchaseOrderService[x] = function (r, s, o) {
                    return Q.serviceRequest(PurchaseOrderService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(PurchaseOrderService = Purchase.PurchaseOrderService || (Purchase.PurchaseOrderService = {}));
    })(Purchase = Indotalent.Purchase || (Indotalent.Purchase = {}));
})(Indotalent || (Indotalent = {}));
var Indotalent;
(function (Indotalent) {
    var Purchase;
    (function (Purchase) {
        var VendorColumns = /** @class */ (function () {
            function VendorColumns() {
            }
            VendorColumns.columnsKey = 'Purchase.Vendor';
            return VendorColumns;
        }());
        Purchase.VendorColumns = VendorColumns;
    })(Purchase = Indotalent.Purchase || (Indotalent.Purchase = {}));
})(Indotalent || (Indotalent = {}));
var Indotalent;
(function (Indotalent) {
    var Purchase;
    (function (Purchase) {
        var VendorContactColumns = /** @class */ (function () {
            function VendorContactColumns() {
            }
            VendorContactColumns.columnsKey = 'Purchase.VendorContact';
            return VendorContactColumns;
        }());
        Purchase.VendorContactColumns = VendorContactColumns;
    })(Purchase = Indotalent.Purchase || (Indotalent.Purchase = {}));
})(Indotalent || (Indotalent = {}));
var Indotalent;
(function (Indotalent) {
    var Purchase;
    (function (Purchase) {
        var VendorContactForm = /** @class */ (function (_super) {
            __extends(VendorContactForm, _super);
            function VendorContactForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!VendorContactForm.init) {
                    VendorContactForm.init = true;
                    var s = Serenity;
                    var w0 = s.IntegerEditor;
                    var w1 = s.StringEditor;
                    var w2 = s.DateEditor;
                    Q.initFormType(VendorContactForm, [
                        'VendorId', w0,
                        'Name', w1,
                        'Description', w1,
                        'Street', w1,
                        'City', w1,
                        'State', w1,
                        'ZipCode', w1,
                        'Phone', w1,
                        'Email', w1,
                        'InsertDate', w2,
                        'InsertUserId', w0,
                        'UpdateDate', w2,
                        'UpdateUserId', w0,
                        'TenantId', w0
                    ]);
                }
                return _this;
            }
            VendorContactForm.formKey = 'Purchase.VendorContact';
            return VendorContactForm;
        }(Serenity.PrefixedContext));
        Purchase.VendorContactForm = VendorContactForm;
    })(Purchase = Indotalent.Purchase || (Indotalent.Purchase = {}));
})(Indotalent || (Indotalent = {}));
var Indotalent;
(function (Indotalent) {
    var Purchase;
    (function (Purchase) {
        var VendorContactRow;
        (function (VendorContactRow) {
            VendorContactRow.idProperty = 'Id';
            VendorContactRow.nameProperty = 'Name';
            VendorContactRow.localTextPrefix = 'Purchase.VendorContact';
            VendorContactRow.deletePermission = 'Administration:General';
            VendorContactRow.insertPermission = 'Administration:General';
            VendorContactRow.readPermission = 'Administration:General';
            VendorContactRow.updatePermission = 'Administration:General';
        })(VendorContactRow = Purchase.VendorContactRow || (Purchase.VendorContactRow = {}));
    })(Purchase = Indotalent.Purchase || (Indotalent.Purchase = {}));
})(Indotalent || (Indotalent = {}));
var Indotalent;
(function (Indotalent) {
    var Purchase;
    (function (Purchase) {
        var VendorContactService;
        (function (VendorContactService) {
            VendorContactService.baseUrl = 'Purchase/VendorContact';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                VendorContactService[x] = function (r, s, o) {
                    return Q.serviceRequest(VendorContactService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(VendorContactService = Purchase.VendorContactService || (Purchase.VendorContactService = {}));
    })(Purchase = Indotalent.Purchase || (Indotalent.Purchase = {}));
})(Indotalent || (Indotalent = {}));
var Indotalent;
(function (Indotalent) {
    var Purchase;
    (function (Purchase) {
        var VendorForm = /** @class */ (function (_super) {
            __extends(VendorForm, _super);
            function VendorForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!VendorForm.init) {
                    VendorForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.DateEditor;
                    var w2 = s.IntegerEditor;
                    Q.initFormType(VendorForm, [
                        'Name', w0,
                        'Description', w0,
                        'Street', w0,
                        'City', w0,
                        'State', w0,
                        'ZipCode', w0,
                        'Phone', w0,
                        'Email', w0,
                        'InsertDate', w1,
                        'InsertUserId', w2,
                        'UpdateDate', w1,
                        'UpdateUserId', w2,
                        'TenantId', w2
                    ]);
                }
                return _this;
            }
            VendorForm.formKey = 'Purchase.Vendor';
            return VendorForm;
        }(Serenity.PrefixedContext));
        Purchase.VendorForm = VendorForm;
    })(Purchase = Indotalent.Purchase || (Indotalent.Purchase = {}));
})(Indotalent || (Indotalent = {}));
var Indotalent;
(function (Indotalent) {
    var Purchase;
    (function (Purchase) {
        var VendorRow;
        (function (VendorRow) {
            VendorRow.idProperty = 'Id';
            VendorRow.nameProperty = 'Name';
            VendorRow.localTextPrefix = 'Purchase.Vendor';
            VendorRow.deletePermission = 'Administration:General';
            VendorRow.insertPermission = 'Administration:General';
            VendorRow.readPermission = 'Administration:General';
            VendorRow.updatePermission = 'Administration:General';
        })(VendorRow = Purchase.VendorRow || (Purchase.VendorRow = {}));
    })(Purchase = Indotalent.Purchase || (Indotalent.Purchase = {}));
})(Indotalent || (Indotalent = {}));
var Indotalent;
(function (Indotalent) {
    var Purchase;
    (function (Purchase) {
        var VendorService;
        (function (VendorService) {
            VendorService.baseUrl = 'Purchase/Vendor';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                VendorService[x] = function (r, s, o) {
                    return Q.serviceRequest(VendorService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(VendorService = Purchase.VendorService || (Purchase.VendorService = {}));
    })(Purchase = Indotalent.Purchase || (Indotalent.Purchase = {}));
})(Indotalent || (Indotalent = {}));
var Indotalent;
(function (Indotalent) {
    var Sales;
    (function (Sales) {
        var CustomerColumns = /** @class */ (function () {
            function CustomerColumns() {
            }
            CustomerColumns.columnsKey = 'Sales.Customer';
            return CustomerColumns;
        }());
        Sales.CustomerColumns = CustomerColumns;
    })(Sales = Indotalent.Sales || (Indotalent.Sales = {}));
})(Indotalent || (Indotalent = {}));
var Indotalent;
(function (Indotalent) {
    var Sales;
    (function (Sales) {
        var CustomerContactColumns = /** @class */ (function () {
            function CustomerContactColumns() {
            }
            CustomerContactColumns.columnsKey = 'Sales.CustomerContact';
            return CustomerContactColumns;
        }());
        Sales.CustomerContactColumns = CustomerContactColumns;
    })(Sales = Indotalent.Sales || (Indotalent.Sales = {}));
})(Indotalent || (Indotalent = {}));
var Indotalent;
(function (Indotalent) {
    var Sales;
    (function (Sales) {
        var CustomerContactForm = /** @class */ (function (_super) {
            __extends(CustomerContactForm, _super);
            function CustomerContactForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!CustomerContactForm.init) {
                    CustomerContactForm.init = true;
                    var s = Serenity;
                    var w0 = s.IntegerEditor;
                    var w1 = s.StringEditor;
                    var w2 = s.DateEditor;
                    Q.initFormType(CustomerContactForm, [
                        'CustomerId', w0,
                        'Name', w1,
                        'Description', w1,
                        'Street', w1,
                        'City', w1,
                        'State', w1,
                        'ZipCode', w1,
                        'Phone', w1,
                        'Email', w1,
                        'InsertDate', w2,
                        'InsertUserId', w0,
                        'UpdateDate', w2,
                        'UpdateUserId', w0,
                        'TenantId', w0
                    ]);
                }
                return _this;
            }
            CustomerContactForm.formKey = 'Sales.CustomerContact';
            return CustomerContactForm;
        }(Serenity.PrefixedContext));
        Sales.CustomerContactForm = CustomerContactForm;
    })(Sales = Indotalent.Sales || (Indotalent.Sales = {}));
})(Indotalent || (Indotalent = {}));
var Indotalent;
(function (Indotalent) {
    var Sales;
    (function (Sales) {
        var CustomerContactRow;
        (function (CustomerContactRow) {
            CustomerContactRow.idProperty = 'Id';
            CustomerContactRow.nameProperty = 'Name';
            CustomerContactRow.localTextPrefix = 'Sales.CustomerContact';
            CustomerContactRow.lookupKey = 'Sales.CustomerContact';
            function getLookup() {
                return Q.getLookup('Sales.CustomerContact');
            }
            CustomerContactRow.getLookup = getLookup;
            CustomerContactRow.deletePermission = 'Sales:Customer';
            CustomerContactRow.insertPermission = 'Sales:Customer';
            CustomerContactRow.readPermission = 'Sales:Customer';
            CustomerContactRow.updatePermission = 'Sales:Customer';
        })(CustomerContactRow = Sales.CustomerContactRow || (Sales.CustomerContactRow = {}));
    })(Sales = Indotalent.Sales || (Indotalent.Sales = {}));
})(Indotalent || (Indotalent = {}));
var Indotalent;
(function (Indotalent) {
    var Sales;
    (function (Sales) {
        var CustomerContactService;
        (function (CustomerContactService) {
            CustomerContactService.baseUrl = 'Sales/CustomerContact';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                CustomerContactService[x] = function (r, s, o) {
                    return Q.serviceRequest(CustomerContactService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(CustomerContactService = Sales.CustomerContactService || (Sales.CustomerContactService = {}));
    })(Sales = Indotalent.Sales || (Indotalent.Sales = {}));
})(Indotalent || (Indotalent = {}));
var Indotalent;
(function (Indotalent) {
    var Sales;
    (function (Sales) {
        var CustomerForm = /** @class */ (function (_super) {
            __extends(CustomerForm, _super);
            function CustomerForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!CustomerForm.init) {
                    CustomerForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.TextAreaEditor;
                    var w2 = Sales.CustomerContactEditor;
                    Q.initFormType(CustomerForm, [
                        'Name', w0,
                        'Description', w1,
                        'Street', w0,
                        'City', w0,
                        'State', w0,
                        'ZipCode', w0,
                        'Phone', w0,
                        'Email', w0,
                        'ContactList', w2
                    ]);
                }
                return _this;
            }
            CustomerForm.formKey = 'Sales.Customer';
            return CustomerForm;
        }(Serenity.PrefixedContext));
        Sales.CustomerForm = CustomerForm;
    })(Sales = Indotalent.Sales || (Indotalent.Sales = {}));
})(Indotalent || (Indotalent = {}));
var Indotalent;
(function (Indotalent) {
    var Sales;
    (function (Sales) {
        var CustomerRow;
        (function (CustomerRow) {
            CustomerRow.idProperty = 'Id';
            CustomerRow.nameProperty = 'Name';
            CustomerRow.localTextPrefix = 'Sales.Customer';
            CustomerRow.deletePermission = 'Sales:Customer';
            CustomerRow.insertPermission = 'Sales:Customer';
            CustomerRow.readPermission = 'Sales:Customer';
            CustomerRow.updatePermission = 'Sales:Customer';
        })(CustomerRow = Sales.CustomerRow || (Sales.CustomerRow = {}));
    })(Sales = Indotalent.Sales || (Indotalent.Sales = {}));
})(Indotalent || (Indotalent = {}));
var Indotalent;
(function (Indotalent) {
    var Sales;
    (function (Sales) {
        var CustomerService;
        (function (CustomerService) {
            CustomerService.baseUrl = 'Sales/Customer';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                CustomerService[x] = function (r, s, o) {
                    return Q.serviceRequest(CustomerService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(CustomerService = Sales.CustomerService || (Sales.CustomerService = {}));
    })(Sales = Indotalent.Sales || (Indotalent.Sales = {}));
})(Indotalent || (Indotalent = {}));
var Indotalent;
(function (Indotalent) {
    var Sales;
    (function (Sales) {
        var InvoiceColumns = /** @class */ (function () {
            function InvoiceColumns() {
            }
            InvoiceColumns.columnsKey = 'Sales.Invoice';
            return InvoiceColumns;
        }());
        Sales.InvoiceColumns = InvoiceColumns;
    })(Sales = Indotalent.Sales || (Indotalent.Sales = {}));
})(Indotalent || (Indotalent = {}));
var Indotalent;
(function (Indotalent) {
    var Sales;
    (function (Sales) {
        var InvoiceDetailColumns = /** @class */ (function () {
            function InvoiceDetailColumns() {
            }
            InvoiceDetailColumns.columnsKey = 'Sales.InvoiceDetail';
            return InvoiceDetailColumns;
        }());
        Sales.InvoiceDetailColumns = InvoiceDetailColumns;
    })(Sales = Indotalent.Sales || (Indotalent.Sales = {}));
})(Indotalent || (Indotalent = {}));
var Indotalent;
(function (Indotalent) {
    var Sales;
    (function (Sales) {
        var InvoiceDetailForm = /** @class */ (function (_super) {
            __extends(InvoiceDetailForm, _super);
            function InvoiceDetailForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!InvoiceDetailForm.init) {
                    InvoiceDetailForm.init = true;
                    var s = Serenity;
                    var w0 = s.IntegerEditor;
                    var w1 = s.DecimalEditor;
                    var w2 = s.DateEditor;
                    Q.initFormType(InvoiceDetailForm, [
                        'InvoiceId', w0,
                        'ProductId', w0,
                        'Price', w1,
                        'Qty', w1,
                        'SubTotal', w1,
                        'Discount', w1,
                        'BeforeTax', w1,
                        'TaxPercentage', w1,
                        'TaxAmount', w1,
                        'Total', w1,
                        'InsertDate', w2,
                        'InsertUserId', w0,
                        'UpdateDate', w2,
                        'UpdateUserId', w0,
                        'TenantId', w0
                    ]);
                }
                return _this;
            }
            InvoiceDetailForm.formKey = 'Sales.InvoiceDetail';
            return InvoiceDetailForm;
        }(Serenity.PrefixedContext));
        Sales.InvoiceDetailForm = InvoiceDetailForm;
    })(Sales = Indotalent.Sales || (Indotalent.Sales = {}));
})(Indotalent || (Indotalent = {}));
var Indotalent;
(function (Indotalent) {
    var Sales;
    (function (Sales) {
        var InvoiceDetailRow;
        (function (InvoiceDetailRow) {
            InvoiceDetailRow.idProperty = 'Id';
            InvoiceDetailRow.localTextPrefix = 'Sales.InvoiceDetail';
            InvoiceDetailRow.deletePermission = 'Sales:Invoice';
            InvoiceDetailRow.insertPermission = 'Sales:Invoice';
            InvoiceDetailRow.readPermission = 'Sales:Invoice';
            InvoiceDetailRow.updatePermission = 'Sales:Invoice';
        })(InvoiceDetailRow = Sales.InvoiceDetailRow || (Sales.InvoiceDetailRow = {}));
    })(Sales = Indotalent.Sales || (Indotalent.Sales = {}));
})(Indotalent || (Indotalent = {}));
var Indotalent;
(function (Indotalent) {
    var Sales;
    (function (Sales) {
        var InvoiceDetailService;
        (function (InvoiceDetailService) {
            InvoiceDetailService.baseUrl = 'Sales/InvoiceDetail';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                InvoiceDetailService[x] = function (r, s, o) {
                    return Q.serviceRequest(InvoiceDetailService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(InvoiceDetailService = Sales.InvoiceDetailService || (Sales.InvoiceDetailService = {}));
    })(Sales = Indotalent.Sales || (Indotalent.Sales = {}));
})(Indotalent || (Indotalent = {}));
var Indotalent;
(function (Indotalent) {
    var Sales;
    (function (Sales) {
        var InvoiceForm = /** @class */ (function (_super) {
            __extends(InvoiceForm, _super);
            function InvoiceForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!InvoiceForm.init) {
                    InvoiceForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.DateEditor;
                    var w2 = s.IntegerEditor;
                    var w3 = s.DecimalEditor;
                    Q.initFormType(InvoiceForm, [
                        'Number', w0,
                        'Description', w0,
                        'SalesGroup', w0,
                        'InvoiceDate', w1,
                        'SalesOrderId', w2,
                        'SubTotal', w3,
                        'Discount', w3,
                        'BeforeTax', w3,
                        'TaxAmount', w3,
                        'Total', w3,
                        'OtherCharge', w3,
                        'InsertDate', w1,
                        'InsertUserId', w2,
                        'UpdateDate', w1,
                        'UpdateUserId', w2,
                        'TenantId', w2
                    ]);
                }
                return _this;
            }
            InvoiceForm.formKey = 'Sales.Invoice';
            return InvoiceForm;
        }(Serenity.PrefixedContext));
        Sales.InvoiceForm = InvoiceForm;
    })(Sales = Indotalent.Sales || (Indotalent.Sales = {}));
})(Indotalent || (Indotalent = {}));
var Indotalent;
(function (Indotalent) {
    var Sales;
    (function (Sales) {
        var InvoicePaymentColumns = /** @class */ (function () {
            function InvoicePaymentColumns() {
            }
            InvoicePaymentColumns.columnsKey = 'Sales.InvoicePayment';
            return InvoicePaymentColumns;
        }());
        Sales.InvoicePaymentColumns = InvoicePaymentColumns;
    })(Sales = Indotalent.Sales || (Indotalent.Sales = {}));
})(Indotalent || (Indotalent = {}));
var Indotalent;
(function (Indotalent) {
    var Sales;
    (function (Sales) {
        var InvoicePaymentForm = /** @class */ (function (_super) {
            __extends(InvoicePaymentForm, _super);
            function InvoicePaymentForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!InvoicePaymentForm.init) {
                    InvoicePaymentForm.init = true;
                    var s = Serenity;
                    var w0 = s.IntegerEditor;
                    var w1 = s.StringEditor;
                    var w2 = s.DateEditor;
                    var w3 = s.DecimalEditor;
                    Q.initFormType(InvoicePaymentForm, [
                        'InvoiceId', w0,
                        'Number', w1,
                        'Description', w1,
                        'SalesGroup', w1,
                        'PaymentDate', w2,
                        'CashBankId', w0,
                        'InvoiceAmount', w3,
                        'PaymentAmount', w3,
                        'InsertDate', w2,
                        'InsertUserId', w0,
                        'UpdateDate', w2,
                        'UpdateUserId', w0,
                        'TenantId', w0
                    ]);
                }
                return _this;
            }
            InvoicePaymentForm.formKey = 'Sales.InvoicePayment';
            return InvoicePaymentForm;
        }(Serenity.PrefixedContext));
        Sales.InvoicePaymentForm = InvoicePaymentForm;
    })(Sales = Indotalent.Sales || (Indotalent.Sales = {}));
})(Indotalent || (Indotalent = {}));
var Indotalent;
(function (Indotalent) {
    var Sales;
    (function (Sales) {
        var InvoicePaymentRow;
        (function (InvoicePaymentRow) {
            InvoicePaymentRow.idProperty = 'Id';
            InvoicePaymentRow.nameProperty = 'Number';
            InvoicePaymentRow.localTextPrefix = 'Sales.InvoicePayment';
            InvoicePaymentRow.deletePermission = 'Sales:Invoice';
            InvoicePaymentRow.insertPermission = 'Sales:Invoice';
            InvoicePaymentRow.readPermission = 'Sales:Invoice';
            InvoicePaymentRow.updatePermission = 'Sales:Invoice';
        })(InvoicePaymentRow = Sales.InvoicePaymentRow || (Sales.InvoicePaymentRow = {}));
    })(Sales = Indotalent.Sales || (Indotalent.Sales = {}));
})(Indotalent || (Indotalent = {}));
var Indotalent;
(function (Indotalent) {
    var Sales;
    (function (Sales) {
        var InvoicePaymentService;
        (function (InvoicePaymentService) {
            InvoicePaymentService.baseUrl = 'Sales/InvoicePayment';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                InvoicePaymentService[x] = function (r, s, o) {
                    return Q.serviceRequest(InvoicePaymentService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(InvoicePaymentService = Sales.InvoicePaymentService || (Sales.InvoicePaymentService = {}));
    })(Sales = Indotalent.Sales || (Indotalent.Sales = {}));
})(Indotalent || (Indotalent = {}));
var Indotalent;
(function (Indotalent) {
    var Sales;
    (function (Sales) {
        var InvoiceRow;
        (function (InvoiceRow) {
            InvoiceRow.idProperty = 'Id';
            InvoiceRow.nameProperty = 'Number';
            InvoiceRow.localTextPrefix = 'Sales.Invoice';
            InvoiceRow.deletePermission = 'Sales:Invoice';
            InvoiceRow.insertPermission = 'Sales:Invoice';
            InvoiceRow.readPermission = 'Sales:Invoice';
            InvoiceRow.updatePermission = 'Sales:Invoice';
        })(InvoiceRow = Sales.InvoiceRow || (Sales.InvoiceRow = {}));
    })(Sales = Indotalent.Sales || (Indotalent.Sales = {}));
})(Indotalent || (Indotalent = {}));
var Indotalent;
(function (Indotalent) {
    var Sales;
    (function (Sales) {
        var InvoiceService;
        (function (InvoiceService) {
            InvoiceService.baseUrl = 'Sales/Invoice';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                InvoiceService[x] = function (r, s, o) {
                    return Q.serviceRequest(InvoiceService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(InvoiceService = Sales.InvoiceService || (Sales.InvoiceService = {}));
    })(Sales = Indotalent.Sales || (Indotalent.Sales = {}));
})(Indotalent || (Indotalent = {}));
var Indotalent;
(function (Indotalent) {
    var Sales;
    (function (Sales) {
        var SalesChannelColumns = /** @class */ (function () {
            function SalesChannelColumns() {
            }
            SalesChannelColumns.columnsKey = 'Sales.SalesChannel';
            return SalesChannelColumns;
        }());
        Sales.SalesChannelColumns = SalesChannelColumns;
    })(Sales = Indotalent.Sales || (Indotalent.Sales = {}));
})(Indotalent || (Indotalent = {}));
var Indotalent;
(function (Indotalent) {
    var Sales;
    (function (Sales) {
        var SalesChannelForm = /** @class */ (function (_super) {
            __extends(SalesChannelForm, _super);
            function SalesChannelForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!SalesChannelForm.init) {
                    SalesChannelForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.DateEditor;
                    var w2 = s.IntegerEditor;
                    Q.initFormType(SalesChannelForm, [
                        'Name', w0,
                        'Description', w0,
                        'InsertDate', w1,
                        'InsertUserId', w2,
                        'UpdateDate', w1,
                        'UpdateUserId', w2,
                        'TenantId', w2
                    ]);
                }
                return _this;
            }
            SalesChannelForm.formKey = 'Sales.SalesChannel';
            return SalesChannelForm;
        }(Serenity.PrefixedContext));
        Sales.SalesChannelForm = SalesChannelForm;
    })(Sales = Indotalent.Sales || (Indotalent.Sales = {}));
})(Indotalent || (Indotalent = {}));
var Indotalent;
(function (Indotalent) {
    var Sales;
    (function (Sales) {
        var SalesChannelRow;
        (function (SalesChannelRow) {
            SalesChannelRow.idProperty = 'Id';
            SalesChannelRow.nameProperty = 'Name';
            SalesChannelRow.localTextPrefix = 'Sales.SalesChannel';
            SalesChannelRow.deletePermission = 'Sales:SalesChannel';
            SalesChannelRow.insertPermission = 'Sales:SalesChannel';
            SalesChannelRow.readPermission = 'Sales:SalesChannel';
            SalesChannelRow.updatePermission = 'Sales:SalesChannel';
        })(SalesChannelRow = Sales.SalesChannelRow || (Sales.SalesChannelRow = {}));
    })(Sales = Indotalent.Sales || (Indotalent.Sales = {}));
})(Indotalent || (Indotalent = {}));
var Indotalent;
(function (Indotalent) {
    var Sales;
    (function (Sales) {
        var SalesChannelService;
        (function (SalesChannelService) {
            SalesChannelService.baseUrl = 'Sales/SalesChannel';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                SalesChannelService[x] = function (r, s, o) {
                    return Q.serviceRequest(SalesChannelService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(SalesChannelService = Sales.SalesChannelService || (Sales.SalesChannelService = {}));
    })(Sales = Indotalent.Sales || (Indotalent.Sales = {}));
})(Indotalent || (Indotalent = {}));
var Indotalent;
(function (Indotalent) {
    var Sales;
    (function (Sales) {
        var SalesOrderColumns = /** @class */ (function () {
            function SalesOrderColumns() {
            }
            SalesOrderColumns.columnsKey = 'Sales.SalesOrder';
            return SalesOrderColumns;
        }());
        Sales.SalesOrderColumns = SalesOrderColumns;
    })(Sales = Indotalent.Sales || (Indotalent.Sales = {}));
})(Indotalent || (Indotalent = {}));
var Indotalent;
(function (Indotalent) {
    var Sales;
    (function (Sales) {
        var SalesOrderDetailColumns = /** @class */ (function () {
            function SalesOrderDetailColumns() {
            }
            SalesOrderDetailColumns.columnsKey = 'Sales.SalesOrderDetail';
            return SalesOrderDetailColumns;
        }());
        Sales.SalesOrderDetailColumns = SalesOrderDetailColumns;
    })(Sales = Indotalent.Sales || (Indotalent.Sales = {}));
})(Indotalent || (Indotalent = {}));
var Indotalent;
(function (Indotalent) {
    var Sales;
    (function (Sales) {
        var SalesOrderDetailForm = /** @class */ (function (_super) {
            __extends(SalesOrderDetailForm, _super);
            function SalesOrderDetailForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!SalesOrderDetailForm.init) {
                    SalesOrderDetailForm.init = true;
                    var s = Serenity;
                    var w0 = s.IntegerEditor;
                    var w1 = s.DecimalEditor;
                    var w2 = s.DateEditor;
                    Q.initFormType(SalesOrderDetailForm, [
                        'SalesOrderId', w0,
                        'ProductId', w0,
                        'Price', w1,
                        'Qty', w1,
                        'SubTotal', w1,
                        'Discount', w1,
                        'BeforeTax', w1,
                        'TaxPercentage', w1,
                        'TaxAmount', w1,
                        'Total', w1,
                        'InsertDate', w2,
                        'InsertUserId', w0,
                        'UpdateDate', w2,
                        'UpdateUserId', w0,
                        'TenantId', w0
                    ]);
                }
                return _this;
            }
            SalesOrderDetailForm.formKey = 'Sales.SalesOrderDetail';
            return SalesOrderDetailForm;
        }(Serenity.PrefixedContext));
        Sales.SalesOrderDetailForm = SalesOrderDetailForm;
    })(Sales = Indotalent.Sales || (Indotalent.Sales = {}));
})(Indotalent || (Indotalent = {}));
var Indotalent;
(function (Indotalent) {
    var Sales;
    (function (Sales) {
        var SalesOrderDetailRow;
        (function (SalesOrderDetailRow) {
            SalesOrderDetailRow.idProperty = 'Id';
            SalesOrderDetailRow.localTextPrefix = 'Sales.SalesOrderDetail';
            SalesOrderDetailRow.deletePermission = 'Sales:SalesOrder';
            SalesOrderDetailRow.insertPermission = 'Sales:SalesOrder';
            SalesOrderDetailRow.readPermission = 'Sales:SalesOrder';
            SalesOrderDetailRow.updatePermission = 'Sales:SalesOrder';
        })(SalesOrderDetailRow = Sales.SalesOrderDetailRow || (Sales.SalesOrderDetailRow = {}));
    })(Sales = Indotalent.Sales || (Indotalent.Sales = {}));
})(Indotalent || (Indotalent = {}));
var Indotalent;
(function (Indotalent) {
    var Sales;
    (function (Sales) {
        var SalesOrderDetailService;
        (function (SalesOrderDetailService) {
            SalesOrderDetailService.baseUrl = 'Sales/SalesOrderDetail';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                SalesOrderDetailService[x] = function (r, s, o) {
                    return Q.serviceRequest(SalesOrderDetailService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(SalesOrderDetailService = Sales.SalesOrderDetailService || (Sales.SalesOrderDetailService = {}));
    })(Sales = Indotalent.Sales || (Indotalent.Sales = {}));
})(Indotalent || (Indotalent = {}));
var Indotalent;
(function (Indotalent) {
    var Sales;
    (function (Sales) {
        var SalesOrderForm = /** @class */ (function (_super) {
            __extends(SalesOrderForm, _super);
            function SalesOrderForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!SalesOrderForm.init) {
                    SalesOrderForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.DateEditor;
                    var w2 = s.IntegerEditor;
                    var w3 = s.DecimalEditor;
                    Q.initFormType(SalesOrderForm, [
                        'Number', w0,
                        'Description', w0,
                        'SalesGroup', w0,
                        'OrderDate', w1,
                        'CustomerId', w2,
                        'SalesChannelId', w2,
                        'SubTotal', w3,
                        'Discount', w3,
                        'BeforeTax', w3,
                        'TaxAmount', w3,
                        'Total', w3,
                        'OtherCharge', w3,
                        'InsertDate', w1,
                        'InsertUserId', w2,
                        'UpdateDate', w1,
                        'UpdateUserId', w2,
                        'TenantId', w2
                    ]);
                }
                return _this;
            }
            SalesOrderForm.formKey = 'Sales.SalesOrder';
            return SalesOrderForm;
        }(Serenity.PrefixedContext));
        Sales.SalesOrderForm = SalesOrderForm;
    })(Sales = Indotalent.Sales || (Indotalent.Sales = {}));
})(Indotalent || (Indotalent = {}));
var Indotalent;
(function (Indotalent) {
    var Sales;
    (function (Sales) {
        var SalesOrderRow;
        (function (SalesOrderRow) {
            SalesOrderRow.idProperty = 'Id';
            SalesOrderRow.nameProperty = 'Number';
            SalesOrderRow.localTextPrefix = 'Sales.SalesOrder';
            SalesOrderRow.deletePermission = 'Sales:SalesOrder';
            SalesOrderRow.insertPermission = 'Sales:SalesOrder';
            SalesOrderRow.readPermission = 'Sales:SalesOrder';
            SalesOrderRow.updatePermission = 'Sales:SalesOrder';
        })(SalesOrderRow = Sales.SalesOrderRow || (Sales.SalesOrderRow = {}));
    })(Sales = Indotalent.Sales || (Indotalent.Sales = {}));
})(Indotalent || (Indotalent = {}));
var Indotalent;
(function (Indotalent) {
    var Sales;
    (function (Sales) {
        var SalesOrderService;
        (function (SalesOrderService) {
            SalesOrderService.baseUrl = 'Sales/SalesOrder';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                SalesOrderService[x] = function (r, s, o) {
                    return Q.serviceRequest(SalesOrderService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(SalesOrderService = Sales.SalesOrderService || (Sales.SalesOrderService = {}));
    })(Sales = Indotalent.Sales || (Indotalent.Sales = {}));
})(Indotalent || (Indotalent = {}));
var Indotalent;
(function (Indotalent) {
    var Settings;
    (function (Settings) {
        var CashBankColumns = /** @class */ (function () {
            function CashBankColumns() {
            }
            CashBankColumns.columnsKey = 'Settings.CashBank';
            return CashBankColumns;
        }());
        Settings.CashBankColumns = CashBankColumns;
    })(Settings = Indotalent.Settings || (Indotalent.Settings = {}));
})(Indotalent || (Indotalent = {}));
var Indotalent;
(function (Indotalent) {
    var Settings;
    (function (Settings) {
        var CashBankForm = /** @class */ (function (_super) {
            __extends(CashBankForm, _super);
            function CashBankForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!CashBankForm.init) {
                    CashBankForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.DateEditor;
                    var w2 = s.IntegerEditor;
                    Q.initFormType(CashBankForm, [
                        'Name', w0,
                        'Description', w0,
                        'AccountNumber', w0,
                        'Street', w0,
                        'City', w0,
                        'State', w0,
                        'ZipCode', w0,
                        'Phone', w0,
                        'Email', w0,
                        'InsertDate', w1,
                        'InsertUserId', w2,
                        'UpdateDate', w1,
                        'UpdateUserId', w2,
                        'TenantId', w2
                    ]);
                }
                return _this;
            }
            CashBankForm.formKey = 'Settings.CashBank';
            return CashBankForm;
        }(Serenity.PrefixedContext));
        Settings.CashBankForm = CashBankForm;
    })(Settings = Indotalent.Settings || (Indotalent.Settings = {}));
})(Indotalent || (Indotalent = {}));
var Indotalent;
(function (Indotalent) {
    var Settings;
    (function (Settings) {
        var CashBankRow;
        (function (CashBankRow) {
            CashBankRow.idProperty = 'Id';
            CashBankRow.nameProperty = 'Name';
            CashBankRow.localTextPrefix = 'Settings.CashBank';
            CashBankRow.deletePermission = 'Administration:General';
            CashBankRow.insertPermission = 'Administration:General';
            CashBankRow.readPermission = 'Administration:General';
            CashBankRow.updatePermission = 'Administration:General';
        })(CashBankRow = Settings.CashBankRow || (Settings.CashBankRow = {}));
    })(Settings = Indotalent.Settings || (Indotalent.Settings = {}));
})(Indotalent || (Indotalent = {}));
var Indotalent;
(function (Indotalent) {
    var Settings;
    (function (Settings) {
        var CashBankService;
        (function (CashBankService) {
            CashBankService.baseUrl = 'Settings/CashBank';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                CashBankService[x] = function (r, s, o) {
                    return Q.serviceRequest(CashBankService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(CashBankService = Settings.CashBankService || (Settings.CashBankService = {}));
    })(Settings = Indotalent.Settings || (Indotalent.Settings = {}));
})(Indotalent || (Indotalent = {}));
var Indotalent;
(function (Indotalent) {
    var Settings;
    (function (Settings) {
        var MyCompanyColumns = /** @class */ (function () {
            function MyCompanyColumns() {
            }
            MyCompanyColumns.columnsKey = 'Settings.MyCompany';
            return MyCompanyColumns;
        }());
        Settings.MyCompanyColumns = MyCompanyColumns;
    })(Settings = Indotalent.Settings || (Indotalent.Settings = {}));
})(Indotalent || (Indotalent = {}));
var Indotalent;
(function (Indotalent) {
    var Settings;
    (function (Settings) {
        var MyCompanyForm = /** @class */ (function (_super) {
            __extends(MyCompanyForm, _super);
            function MyCompanyForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!MyCompanyForm.init) {
                    MyCompanyForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.IntegerEditor;
                    var w2 = s.DateEditor;
                    Q.initFormType(MyCompanyForm, [
                        'TenantName', w0,
                        'Description', w0,
                        'Currency', w0,
                        'Street', w0,
                        'City', w0,
                        'State', w0,
                        'ZipCode', w0,
                        'Phone', w0,
                        'Email', w0,
                        'ProductNumberPrefix', w0,
                        'ProductNumberUseDate', w1,
                        'ProductNumberLength', w1,
                        'CustomerNumberPrefix', w0,
                        'CustomerNumberUseDate', w1,
                        'CustomerNumberLength', w1,
                        'SalesNumberPrefix', w0,
                        'SalesNumberUseDate', w1,
                        'SalesNumberLength', w1,
                        'InvoiceNumberPrefix', w0,
                        'InvoiceNumberUseDate', w1,
                        'InvoiceNumberLength', w1,
                        'InvoicePaymentNumberPrefix', w0,
                        'InvoicePaymentNumberUseDate', w1,
                        'InvoicePaymentNumberLength', w1,
                        'VendorNumberPrefix', w0,
                        'VendorNumberUseDate', w1,
                        'VendorNumberLength', w1,
                        'PurchaseNumberPrefix', w0,
                        'PurchaseNumberUseDate', w1,
                        'PurchaseNumberLength', w1,
                        'BillNumberPrefix', w0,
                        'BillNumberUseDate', w1,
                        'BillNumberLength', w1,
                        'BillPaymentNumberPrefix', w0,
                        'BillPaymentNumberUseDate', w1,
                        'BillPaymentNumberLength', w1,
                        'MaximumUser', w1,
                        'InsertDate', w2,
                        'InsertUserId', w1,
                        'UpdateDate', w2,
                        'UpdateUserId', w1
                    ]);
                }
                return _this;
            }
            MyCompanyForm.formKey = 'Settings.MyCompany';
            return MyCompanyForm;
        }(Serenity.PrefixedContext));
        Settings.MyCompanyForm = MyCompanyForm;
    })(Settings = Indotalent.Settings || (Indotalent.Settings = {}));
})(Indotalent || (Indotalent = {}));
var Indotalent;
(function (Indotalent) {
    var Settings;
    (function (Settings) {
        var MyCompanyRow;
        (function (MyCompanyRow) {
            MyCompanyRow.idProperty = 'TenantId';
            MyCompanyRow.nameProperty = 'TenantName';
            MyCompanyRow.localTextPrefix = 'Settings.MyCompany';
            MyCompanyRow.deletePermission = 'Settings:MyCompany';
            MyCompanyRow.insertPermission = 'Settings:MyCompany';
            MyCompanyRow.readPermission = 'Settings:MyCompany';
            MyCompanyRow.updatePermission = 'Settings:MyCompany';
        })(MyCompanyRow = Settings.MyCompanyRow || (Settings.MyCompanyRow = {}));
    })(Settings = Indotalent.Settings || (Indotalent.Settings = {}));
})(Indotalent || (Indotalent = {}));
var Indotalent;
(function (Indotalent) {
    var Settings;
    (function (Settings) {
        var MyCompanyService;
        (function (MyCompanyService) {
            MyCompanyService.baseUrl = 'Settings/MyCompany';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                MyCompanyService[x] = function (r, s, o) {
                    return Q.serviceRequest(MyCompanyService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(MyCompanyService = Settings.MyCompanyService || (Settings.MyCompanyService = {}));
    })(Settings = Indotalent.Settings || (Indotalent.Settings = {}));
})(Indotalent || (Indotalent = {}));
var Indotalent;
(function (Indotalent) {
    var Settings;
    (function (Settings) {
        var PurchaseTaxColumns = /** @class */ (function () {
            function PurchaseTaxColumns() {
            }
            PurchaseTaxColumns.columnsKey = 'Settings.PurchaseTax';
            return PurchaseTaxColumns;
        }());
        Settings.PurchaseTaxColumns = PurchaseTaxColumns;
    })(Settings = Indotalent.Settings || (Indotalent.Settings = {}));
})(Indotalent || (Indotalent = {}));
var Indotalent;
(function (Indotalent) {
    var Settings;
    (function (Settings) {
        var PurchaseTaxForm = /** @class */ (function (_super) {
            __extends(PurchaseTaxForm, _super);
            function PurchaseTaxForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!PurchaseTaxForm.init) {
                    PurchaseTaxForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.DecimalEditor;
                    var w2 = s.DateEditor;
                    var w3 = s.IntegerEditor;
                    Q.initFormType(PurchaseTaxForm, [
                        'Name', w0,
                        'Description', w0,
                        'TaxRatePercentage', w1,
                        'InsertDate', w2,
                        'InsertUserId', w3,
                        'UpdateDate', w2,
                        'UpdateUserId', w3,
                        'TenantId', w3
                    ]);
                }
                return _this;
            }
            PurchaseTaxForm.formKey = 'Settings.PurchaseTax';
            return PurchaseTaxForm;
        }(Serenity.PrefixedContext));
        Settings.PurchaseTaxForm = PurchaseTaxForm;
    })(Settings = Indotalent.Settings || (Indotalent.Settings = {}));
})(Indotalent || (Indotalent = {}));
var Indotalent;
(function (Indotalent) {
    var Settings;
    (function (Settings) {
        var PurchaseTaxRow;
        (function (PurchaseTaxRow) {
            PurchaseTaxRow.idProperty = 'Id';
            PurchaseTaxRow.nameProperty = 'Name';
            PurchaseTaxRow.localTextPrefix = 'Settings.PurchaseTax';
            PurchaseTaxRow.deletePermission = 'Administration:General';
            PurchaseTaxRow.insertPermission = 'Administration:General';
            PurchaseTaxRow.readPermission = 'Administration:General';
            PurchaseTaxRow.updatePermission = 'Administration:General';
        })(PurchaseTaxRow = Settings.PurchaseTaxRow || (Settings.PurchaseTaxRow = {}));
    })(Settings = Indotalent.Settings || (Indotalent.Settings = {}));
})(Indotalent || (Indotalent = {}));
var Indotalent;
(function (Indotalent) {
    var Settings;
    (function (Settings) {
        var PurchaseTaxService;
        (function (PurchaseTaxService) {
            PurchaseTaxService.baseUrl = 'Settings/PurchaseTax';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                PurchaseTaxService[x] = function (r, s, o) {
                    return Q.serviceRequest(PurchaseTaxService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(PurchaseTaxService = Settings.PurchaseTaxService || (Settings.PurchaseTaxService = {}));
    })(Settings = Indotalent.Settings || (Indotalent.Settings = {}));
})(Indotalent || (Indotalent = {}));
var Indotalent;
(function (Indotalent) {
    var Settings;
    (function (Settings) {
        var SalesTaxColumns = /** @class */ (function () {
            function SalesTaxColumns() {
            }
            SalesTaxColumns.columnsKey = 'Settings.SalesTax';
            return SalesTaxColumns;
        }());
        Settings.SalesTaxColumns = SalesTaxColumns;
    })(Settings = Indotalent.Settings || (Indotalent.Settings = {}));
})(Indotalent || (Indotalent = {}));
var Indotalent;
(function (Indotalent) {
    var Settings;
    (function (Settings) {
        var SalesTaxForm = /** @class */ (function (_super) {
            __extends(SalesTaxForm, _super);
            function SalesTaxForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!SalesTaxForm.init) {
                    SalesTaxForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.DecimalEditor;
                    var w2 = s.DateEditor;
                    var w3 = s.IntegerEditor;
                    Q.initFormType(SalesTaxForm, [
                        'Name', w0,
                        'Description', w0,
                        'TaxRatePercentage', w1,
                        'InsertDate', w2,
                        'InsertUserId', w3,
                        'UpdateDate', w2,
                        'UpdateUserId', w3,
                        'TenantId', w3
                    ]);
                }
                return _this;
            }
            SalesTaxForm.formKey = 'Settings.SalesTax';
            return SalesTaxForm;
        }(Serenity.PrefixedContext));
        Settings.SalesTaxForm = SalesTaxForm;
    })(Settings = Indotalent.Settings || (Indotalent.Settings = {}));
})(Indotalent || (Indotalent = {}));
var Indotalent;
(function (Indotalent) {
    var Settings;
    (function (Settings) {
        var SalesTaxRow;
        (function (SalesTaxRow) {
            SalesTaxRow.idProperty = 'Id';
            SalesTaxRow.nameProperty = 'Name';
            SalesTaxRow.localTextPrefix = 'Settings.SalesTax';
            SalesTaxRow.deletePermission = 'Sales:SalesOrder';
            SalesTaxRow.insertPermission = 'Sales:SalesOrder';
            SalesTaxRow.readPermission = 'Sales:SalesOrder';
            SalesTaxRow.updatePermission = 'Sales:SalesOrder';
        })(SalesTaxRow = Settings.SalesTaxRow || (Settings.SalesTaxRow = {}));
    })(Settings = Indotalent.Settings || (Indotalent.Settings = {}));
})(Indotalent || (Indotalent = {}));
var Indotalent;
(function (Indotalent) {
    var Settings;
    (function (Settings) {
        var SalesTaxService;
        (function (SalesTaxService) {
            SalesTaxService.baseUrl = 'Settings/SalesTax';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                SalesTaxService[x] = function (r, s, o) {
                    return Q.serviceRequest(SalesTaxService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(SalesTaxService = Settings.SalesTaxService || (Settings.SalesTaxService = {}));
    })(Settings = Indotalent.Settings || (Indotalent.Settings = {}));
})(Indotalent || (Indotalent = {}));
var Indotalent;
(function (Indotalent) {
    var Texts;
    (function (Texts) {
        Indotalent['Texts'] = Q.proxyTexts(Texts, '', { Db: { Administration: { Language: { Id: 1, InsertDate: 1, InsertUserId: 1, LanguageId: 1, LanguageName: 1, UpdateDate: 1, UpdateUserId: 1 }, Role: { InsertDate: 1, InsertUserId: 1, RoleId: 1, RoleName: 1, UpdateDate: 1, UpdateUserId: 1 }, RolePermission: { PermissionKey: 1, RoleId: 1, RolePermissionId: 1, RoleRoleName: 1 }, Tenant: { BillNumberLength: 1, BillNumberPrefix: 1, BillNumberUseDate: 1, BillPaymentNumberLength: 1, BillPaymentNumberPrefix: 1, BillPaymentNumberUseDate: 1, City: 1, Currency: 1, CustomerNumberLength: 1, CustomerNumberPrefix: 1, CustomerNumberUseDate: 1, Description: 1, Email: 1, InsertDate: 1, InsertUserId: 1, InvoiceNumberLength: 1, InvoiceNumberPrefix: 1, InvoiceNumberUseDate: 1, InvoicePaymentNumberLength: 1, InvoicePaymentNumberPrefix: 1, InvoicePaymentNumberUseDate: 1, MaximumUser: 1, Phone: 1, ProductNumberLength: 1, ProductNumberPrefix: 1, ProductNumberUseDate: 1, PurchaseNumberLength: 1, PurchaseNumberPrefix: 1, PurchaseNumberUseDate: 1, SalesNumberLength: 1, SalesNumberPrefix: 1, SalesNumberUseDate: 1, State: 1, Street: 1, TenantId: 1, TenantName: 1, UpdateDate: 1, UpdateUserId: 1, VendorNumberLength: 1, VendorNumberPrefix: 1, VendorNumberUseDate: 1, ZipCode: 1 }, Translation: { CustomText: 1, EntityPlural: 1, Key: 1, OverrideConfirmation: 1, SaveChangesButton: 1, SourceLanguage: 1, SourceText: 1, TargetLanguage: 1, TargetText: 1 }, User: { DisplayName: 1, Email: 1, InsertDate: 1, InsertUserId: 1, IsActive: 1, IsTenantAdmin: 1, LastDirectoryUpdate: 1, Password: 1, PasswordConfirm: 1, PasswordHash: 1, PasswordSalt: 1, Source: 1, TenantId: 1, TenantName: 1, UpdateDate: 1, UpdateUserId: 1, UserId: 1, UserImage: 1, Username: 1 }, UserPermission: { Granted: 1, PermissionKey: 1, User: 1, UserId: 1, UserPermissionId: 1, Username: 1 }, UserRole: { RoleId: 1, User: 1, UserId: 1, UserRoleId: 1, Username: 1 } }, Merchandise: { Brand: { Description: 1, Id: 1, InsertDate: 1, InsertUserId: 1, Name: 1, TenantId: 1, UpdateDate: 1, UpdateUserId: 1 }, Category: { Description: 1, Id: 1, InsertDate: 1, InsertUserId: 1, Name: 1, TenantId: 1, UpdateDate: 1, UpdateUserId: 1 }, Colour: { Description: 1, Id: 1, InsertDate: 1, InsertUserId: 1, Name: 1, TenantId: 1, UpdateDate: 1, UpdateUserId: 1 }, Flavour: { Description: 1, Id: 1, InsertDate: 1, InsertUserId: 1, Name: 1, TenantId: 1, UpdateDate: 1, UpdateUserId: 1 }, Product: { Barcode: 1, BrandId: 1, CategoryId: 1, ColourId: 1, Description: 1, FlavourId: 1, Id: 1, InsertDate: 1, InsertUserId: 1, InternalCode: 1, Name: 1, Picture: 1, PurchasePrice: 1, PurchaseTaxId: 1, SalesPrice: 1, SalesTaxId: 1, SizeId: 1, TenantId: 1, UomId: 1, UpdateDate: 1, UpdateUserId: 1 }, Size: { Description: 1, Id: 1, InsertDate: 1, InsertUserId: 1, Name: 1, TenantId: 1, TenantName: 1, UpdateDate: 1, UpdateUserId: 1 }, Uom: { Description: 1, Id: 1, InsertDate: 1, InsertUserId: 1, Name: 1, TenantId: 1, TenantName: 1, UpdateDate: 1, UpdateUserId: 1 } }, Purchase: { Bill: { BeforeTax: 1, BillDate: 1, Description: 1, Discount: 1, ExternalReferenceNumber: 1, Id: 1, InsertDate: 1, InsertUserId: 1, Number: 1, OtherCharge: 1, ProcurementGroup: 1, PurchaseOrderId: 1, SubTotal: 1, TaxAmount: 1, TenantId: 1, Total: 1, UpdateDate: 1, UpdateUserId: 1 }, BillDetail: { BeforeTax: 1, BillId: 1, Discount: 1, Id: 1, InsertDate: 1, InsertUserId: 1, Price: 1, ProductId: 1, Qty: 1, SubTotal: 1, TaxAmount: 1, TaxPercentage: 1, TenantId: 1, Total: 1, UpdateDate: 1, UpdateUserId: 1 }, BillPayment: { BillAmount: 1, BillId: 1, CashBankId: 1, Description: 1, Id: 1, InsertDate: 1, InsertUserId: 1, Number: 1, PaymentAmount: 1, PaymentDate: 1, ProcurementGroup: 1, TenantId: 1, UpdateDate: 1, UpdateUserId: 1 }, PurchaseOrder: { BeforeTax: 1, Description: 1, Discount: 1, Id: 1, InsertDate: 1, InsertUserId: 1, Number: 1, OrderDate: 1, OtherCharge: 1, ProcurementGroup: 1, SubTotal: 1, TaxAmount: 1, TenantId: 1, Total: 1, UpdateDate: 1, UpdateUserId: 1, VendorId: 1 }, PurchaseOrderDetail: { BeforeTax: 1, Discount: 1, Id: 1, InsertDate: 1, InsertUserId: 1, Price: 1, ProductId: 1, PurchaseOrderId: 1, Qty: 1, SubTotal: 1, TaxAmount: 1, TaxPercentage: 1, TenantId: 1, Total: 1, UpdateDate: 1, UpdateUserId: 1 }, Vendor: { City: 1, Description: 1, Email: 1, Id: 1, InsertDate: 1, InsertUserId: 1, Name: 1, Phone: 1, State: 1, Street: 1, TenantId: 1, UpdateDate: 1, UpdateUserId: 1, ZipCode: 1 }, VendorContact: { City: 1, Description: 1, Email: 1, Id: 1, InsertDate: 1, InsertUserId: 1, Name: 1, Phone: 1, State: 1, Street: 1, TenantId: 1, UpdateDate: 1, UpdateUserId: 1, VendorId: 1, ZipCode: 1 } }, Sales: { Customer: { City: 1, ContactList: 1, Description: 1, Email: 1, Id: 1, Name: 1, Phone: 1, State: 1, Street: 1, TenantId: 1, TenantName: 1, ZipCode: 1 }, CustomerContact: { City: 1, CustomerId: 1, Description: 1, Email: 1, Id: 1, InsertDate: 1, InsertUserId: 1, Name: 1, Phone: 1, State: 1, Street: 1, TenantId: 1, TenantName: 1, UpdateDate: 1, UpdateUserId: 1, ZipCode: 1 }, Invoice: { BeforeTax: 1, Description: 1, Discount: 1, Id: 1, InsertDate: 1, InsertUserId: 1, InvoiceDate: 1, Number: 1, OtherCharge: 1, SalesGroup: 1, SalesOrderId: 1, SubTotal: 1, TaxAmount: 1, TenantId: 1, Total: 1, UpdateDate: 1, UpdateUserId: 1 }, InvoiceDetail: { BeforeTax: 1, Discount: 1, Id: 1, InsertDate: 1, InsertUserId: 1, InvoiceId: 1, Price: 1, ProductId: 1, Qty: 1, SubTotal: 1, TaxAmount: 1, TaxPercentage: 1, TenantId: 1, Total: 1, UpdateDate: 1, UpdateUserId: 1 }, InvoicePayment: { CashBankId: 1, Description: 1, Id: 1, InsertDate: 1, InsertUserId: 1, InvoiceAmount: 1, InvoiceId: 1, Number: 1, PaymentAmount: 1, PaymentDate: 1, SalesGroup: 1, TenantId: 1, UpdateDate: 1, UpdateUserId: 1 }, SalesChannel: { Description: 1, Id: 1, InsertDate: 1, InsertUserId: 1, Name: 1, TenantId: 1, UpdateDate: 1, UpdateUserId: 1 }, SalesOrder: { BeforeTax: 1, CustomerId: 1, Description: 1, Discount: 1, Id: 1, InsertDate: 1, InsertUserId: 1, Number: 1, OrderDate: 1, OtherCharge: 1, SalesChannelId: 1, SalesGroup: 1, SubTotal: 1, TaxAmount: 1, TenantId: 1, Total: 1, UpdateDate: 1, UpdateUserId: 1 }, SalesOrderDetail: { BeforeTax: 1, Discount: 1, Id: 1, InsertDate: 1, InsertUserId: 1, Price: 1, ProductId: 1, Qty: 1, SalesOrderId: 1, SubTotal: 1, TaxAmount: 1, TaxPercentage: 1, TenantId: 1, Total: 1, UpdateDate: 1, UpdateUserId: 1 } }, Settings: { CashBank: { AccountNumber: 1, City: 1, Description: 1, Email: 1, Id: 1, InsertDate: 1, InsertUserId: 1, Name: 1, Phone: 1, State: 1, Street: 1, TenantId: 1, UpdateDate: 1, UpdateUserId: 1, ZipCode: 1 }, MyCompany: { BillNumberLength: 1, BillNumberPrefix: 1, BillNumberUseDate: 1, BillPaymentNumberLength: 1, BillPaymentNumberPrefix: 1, BillPaymentNumberUseDate: 1, City: 1, Currency: 1, CustomerNumberLength: 1, CustomerNumberPrefix: 1, CustomerNumberUseDate: 1, Description: 1, Email: 1, InsertDate: 1, InsertUserId: 1, InvoiceNumberLength: 1, InvoiceNumberPrefix: 1, InvoiceNumberUseDate: 1, InvoicePaymentNumberLength: 1, InvoicePaymentNumberPrefix: 1, InvoicePaymentNumberUseDate: 1, MaximumUser: 1, Phone: 1, ProductNumberLength: 1, ProductNumberPrefix: 1, ProductNumberUseDate: 1, PurchaseNumberLength: 1, PurchaseNumberPrefix: 1, PurchaseNumberUseDate: 1, SalesNumberLength: 1, SalesNumberPrefix: 1, SalesNumberUseDate: 1, State: 1, Street: 1, TenantId: 1, TenantName: 1, UpdateDate: 1, UpdateUserId: 1, VendorNumberLength: 1, VendorNumberPrefix: 1, VendorNumberUseDate: 1, ZipCode: 1 }, PurchaseTax: { Description: 1, Id: 1, InsertDate: 1, InsertUserId: 1, Name: 1, TaxRatePercentage: 1, TenantId: 1, UpdateDate: 1, UpdateUserId: 1 }, SalesTax: { Description: 1, Id: 1, InsertDate: 1, InsertUserId: 1, Name: 1, TaxRatePercentage: 1, TenantId: 1, UpdateDate: 1, UpdateUserId: 1 } } }, Forms: { Membership: { ChangePassword: { FormTitle: 1, SubmitButton: 1, Success: 1 }, ForgotPassword: { BackToLogin: 1, FormInfo: 1, FormTitle: 1, SubmitButton: 1, Success: 1 }, Login: { FacebookButton: 1, ForgotPassword: 1, GoogleButton: 1, LoginToYourAccount: 1, OR: 1, RememberMe: 1, SignInButton: 1, SignUpButton: 1 }, ResetPassword: { BackToLogin: 1, EmailSubject: 1, FormTitle: 1, SubmitButton: 1, Success: 1 }, SignUp: { AcceptTerms: 1, ActivateEmailSubject: 1, ActivationCompleteMessage: 1, BackToLogin: 1, ConfirmEmail: 1, ConfirmPassword: 1, DisplayName: 1, Email: 1, FormInfo: 1, FormTitle: 1, Password: 1, SubmitButton: 1, Success: 1 } } }, Navigation: { LogoutLink: 1, SiteTitle: 1 }, Site: { AccessDenied: { ClickToChangeUser: 1, ClickToLogin: 1, LackPermissions: 1, NotLoggedIn: 1, PageTitle: 1 }, BasicProgressDialog: { CancelTitle: 1, PleaseWait: 1 }, BulkServiceAction: { AllHadErrorsFormat: 1, AllSuccessFormat: 1, ConfirmationFormat: 1, ErrorCount: 1, NothingToProcess: 1, SomeHadErrorsFormat: 1, SuccessCount: 1 }, Dashboard: { ContentDescription: 1 }, Layout: { FooterCopyright: 1, FooterInfo: 1, FooterRights: 1, GeneralSettings: 1, Language: 1, Theme: 1, ThemeBlack: 1, ThemeBlackLight: 1, ThemeBlue: 1, ThemeBlueLight: 1, ThemeGreen: 1, ThemeGreenLight: 1, ThemePurple: 1, ThemePurpleLight: 1, ThemeRed: 1, ThemeRedLight: 1, ThemeYellow: 1, ThemeYellowLight: 1 }, RolePermissionDialog: { DialogTitle: 1, EditButton: 1, SaveSuccess: 1 }, UserDialog: { EditPermissionsButton: 1, EditRolesButton: 1 }, UserPermissionDialog: { DialogTitle: 1, Grant: 1, Permission: 1, Revoke: 1, SaveSuccess: 1 }, UserRoleDialog: { DialogTitle: 1, SaveSuccess: 1 }, ValidationError: { Title: 1 } }, Validation: { AuthenticationError: 1, CantFindUserWithEmail: 1, CurrentPasswordMismatch: 1, DeleteForeignKeyError: 1, EmailConfirm: 1, EmailInUse: 1, InvalidActivateToken: 1, InvalidResetToken: 1, MinRequiredPasswordLength: 1, SavePrimaryKeyError: 1 } });
    })(Texts = Indotalent.Texts || (Indotalent.Texts = {}));
})(Indotalent || (Indotalent = {}));
var Indotalent;
(function (Indotalent) {
    var DialogUtils;
    (function (DialogUtils) {
        function pendingChangesConfirmation(element, hasPendingChanges) {
            element.on('dialogbeforeclose panelbeforeclose', function (e) {
                if (!Serenity.WX.hasOriginalEvent(e) || !hasPendingChanges()) {
                    return;
                }
                e.preventDefault();
                Q.confirm('You have pending changes. Save them?', function () { return element.find('div.save-and-close-button').click(); }, {
                    onNo: function () {
                        if (element.hasClass('ui-dialog-content'))
                            element.dialog('close');
                        else if (element.hasClass('s-Panel'))
                            Serenity.TemplatedDialog.closePanel(element);
                    }
                });
            });
        }
        DialogUtils.pendingChangesConfirmation = pendingChangesConfirmation;
    })(DialogUtils = Indotalent.DialogUtils || (Indotalent.DialogUtils = {}));
})(Indotalent || (Indotalent = {}));
var Indotalent;
(function (Indotalent) {
    var Administration;
    (function (Administration) {
        var LanguageDialog = /** @class */ (function (_super) {
            __extends(LanguageDialog, _super);
            function LanguageDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Administration.LanguageForm(_this.idPrefix);
                return _this;
            }
            LanguageDialog.prototype.getFormKey = function () { return Administration.LanguageForm.formKey; };
            LanguageDialog.prototype.getIdProperty = function () { return Administration.LanguageRow.idProperty; };
            LanguageDialog.prototype.getLocalTextPrefix = function () { return Administration.LanguageRow.localTextPrefix; };
            LanguageDialog.prototype.getNameProperty = function () { return Administration.LanguageRow.nameProperty; };
            LanguageDialog.prototype.getService = function () { return Administration.LanguageService.baseUrl; };
            LanguageDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], LanguageDialog);
            return LanguageDialog;
        }(Serenity.EntityDialog));
        Administration.LanguageDialog = LanguageDialog;
    })(Administration = Indotalent.Administration || (Indotalent.Administration = {}));
})(Indotalent || (Indotalent = {}));
var Indotalent;
(function (Indotalent) {
    var Administration;
    (function (Administration) {
        var LanguageGrid = /** @class */ (function (_super) {
            __extends(LanguageGrid, _super);
            function LanguageGrid(container) {
                return _super.call(this, container) || this;
            }
            LanguageGrid.prototype.getColumnsKey = function () { return "Administration.Language"; };
            LanguageGrid.prototype.getDialogType = function () { return Administration.LanguageDialog; };
            LanguageGrid.prototype.getIdProperty = function () { return Administration.LanguageRow.idProperty; };
            LanguageGrid.prototype.getLocalTextPrefix = function () { return Administration.LanguageRow.localTextPrefix; };
            LanguageGrid.prototype.getService = function () { return Administration.LanguageService.baseUrl; };
            LanguageGrid.prototype.getDefaultSortBy = function () {
                return ["LanguageName" /* LanguageName */];
            };
            LanguageGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], LanguageGrid);
            return LanguageGrid;
        }(Serenity.EntityGrid));
        Administration.LanguageGrid = LanguageGrid;
    })(Administration = Indotalent.Administration || (Indotalent.Administration = {}));
})(Indotalent || (Indotalent = {}));
var Indotalent;
(function (Indotalent) {
    var Administration;
    (function (Administration) {
        var RoleDialog = /** @class */ (function (_super) {
            __extends(RoleDialog, _super);
            function RoleDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Administration.RoleForm(_this.idPrefix);
                return _this;
            }
            RoleDialog.prototype.getFormKey = function () { return Administration.RoleForm.formKey; };
            RoleDialog.prototype.getIdProperty = function () { return Administration.RoleRow.idProperty; };
            RoleDialog.prototype.getLocalTextPrefix = function () { return Administration.RoleRow.localTextPrefix; };
            RoleDialog.prototype.getNameProperty = function () { return Administration.RoleRow.nameProperty; };
            RoleDialog.prototype.getService = function () { return Administration.RoleService.baseUrl; };
            RoleDialog.prototype.getToolbarButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getToolbarButtons.call(this);
                buttons.push({
                    title: Q.text('Site.RolePermissionDialog.EditButton'),
                    cssClass: 'edit-permissions-button',
                    icon: 'fa-lock text-green',
                    onClick: function () {
                        new Administration.RolePermissionDialog({
                            roleID: _this.entity.RoleId,
                            title: _this.entity.RoleName
                        }).dialogOpen();
                    }
                });
                return buttons;
            };
            RoleDialog.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                this.toolbar.findButton("edit-permissions-button").toggleClass("disabled", this.isNewOrDeleted());
            };
            RoleDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], RoleDialog);
            return RoleDialog;
        }(Serenity.EntityDialog));
        Administration.RoleDialog = RoleDialog;
    })(Administration = Indotalent.Administration || (Indotalent.Administration = {}));
})(Indotalent || (Indotalent = {}));
var Indotalent;
(function (Indotalent) {
    var Administration;
    (function (Administration) {
        var RoleGrid = /** @class */ (function (_super) {
            __extends(RoleGrid, _super);
            function RoleGrid(container) {
                return _super.call(this, container) || this;
            }
            RoleGrid.prototype.getColumnsKey = function () { return "Administration.Role"; };
            RoleGrid.prototype.getDialogType = function () { return Administration.RoleDialog; };
            RoleGrid.prototype.getIdProperty = function () { return Administration.RoleRow.idProperty; };
            RoleGrid.prototype.getLocalTextPrefix = function () { return Administration.RoleRow.localTextPrefix; };
            RoleGrid.prototype.getService = function () { return Administration.RoleService.baseUrl; };
            RoleGrid.prototype.getDefaultSortBy = function () {
                return ["RoleName" /* RoleName */];
            };
            RoleGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], RoleGrid);
            return RoleGrid;
        }(Serenity.EntityGrid));
        Administration.RoleGrid = RoleGrid;
    })(Administration = Indotalent.Administration || (Indotalent.Administration = {}));
})(Indotalent || (Indotalent = {}));
var Indotalent;
(function (Indotalent) {
    var Administration;
    (function (Administration) {
        var RolePermissionDialog = /** @class */ (function (_super) {
            __extends(RolePermissionDialog, _super);
            function RolePermissionDialog(opt) {
                var _this = _super.call(this, opt) || this;
                _this.permissions = new Administration.PermissionCheckEditor(_this.byId('Permissions'), {
                    showRevoke: false
                });
                Administration.RolePermissionService.List({
                    RoleID: _this.options.roleID,
                    Module: null,
                    Submodule: null
                }, function (response) {
                    _this.permissions.value = response.Entities.map(function (x) { return ({ PermissionKey: x }); });
                });
                _this.permissions.implicitPermissions = Q.getRemoteData('Administration.ImplicitPermissions');
                return _this;
            }
            RolePermissionDialog.prototype.getDialogOptions = function () {
                var _this = this;
                var opt = _super.prototype.getDialogOptions.call(this);
                opt.buttons = [
                    {
                        text: Q.text('Dialogs.OkButton'),
                        click: function (e) {
                            Administration.RolePermissionService.Update({
                                RoleID: _this.options.roleID,
                                Permissions: _this.permissions.value.map(function (x) { return x.PermissionKey; }),
                                Module: null,
                                Submodule: null
                            }, function (response) {
                                _this.dialogClose();
                                window.setTimeout(function () { return Q.notifySuccess(Q.text('Site.RolePermissionDialog.SaveSuccess')); }, 0);
                            });
                        }
                    }, {
                        text: Q.text('Dialogs.CancelButton'),
                        click: function () { return _this.dialogClose(); }
                    }
                ];
                opt.title = Q.format(Q.text('Site.RolePermissionDialog.DialogTitle'), this.options.title);
                return opt;
            };
            RolePermissionDialog.prototype.getTemplate = function () {
                return '<div id="~_Permissions"></div>';
            };
            RolePermissionDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], RolePermissionDialog);
            return RolePermissionDialog;
        }(Serenity.TemplatedDialog));
        Administration.RolePermissionDialog = RolePermissionDialog;
    })(Administration = Indotalent.Administration || (Indotalent.Administration = {}));
})(Indotalent || (Indotalent = {}));
var Indotalent;
(function (Indotalent) {
    var Administration;
    (function (Administration) {
        var TenantDialog = /** @class */ (function (_super) {
            __extends(TenantDialog, _super);
            function TenantDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Administration.TenantForm(_this.idPrefix);
                return _this;
            }
            TenantDialog.prototype.getFormKey = function () { return Administration.TenantForm.formKey; };
            TenantDialog.prototype.getIdProperty = function () { return Administration.TenantRow.idProperty; };
            TenantDialog.prototype.getLocalTextPrefix = function () { return Administration.TenantRow.localTextPrefix; };
            TenantDialog.prototype.getNameProperty = function () { return Administration.TenantRow.nameProperty; };
            TenantDialog.prototype.getService = function () { return Administration.TenantService.baseUrl; };
            TenantDialog.prototype.getDeletePermission = function () { return Administration.TenantRow.deletePermission; };
            TenantDialog.prototype.getInsertPermission = function () { return Administration.TenantRow.insertPermission; };
            TenantDialog.prototype.getUpdatePermission = function () { return Administration.TenantRow.updatePermission; };
            TenantDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], TenantDialog);
            return TenantDialog;
        }(Serenity.EntityDialog));
        Administration.TenantDialog = TenantDialog;
    })(Administration = Indotalent.Administration || (Indotalent.Administration = {}));
})(Indotalent || (Indotalent = {}));
var Indotalent;
(function (Indotalent) {
    var Administration;
    (function (Administration) {
        var TenantGrid = /** @class */ (function (_super) {
            __extends(TenantGrid, _super);
            function TenantGrid(container) {
                return _super.call(this, container) || this;
            }
            TenantGrid.prototype.getColumnsKey = function () { return Administration.TenantColumns.columnsKey; };
            TenantGrid.prototype.getDialogType = function () { return Administration.TenantDialog; };
            TenantGrid.prototype.getIdProperty = function () { return Administration.TenantRow.idProperty; };
            TenantGrid.prototype.getInsertPermission = function () { return Administration.TenantRow.insertPermission; };
            TenantGrid.prototype.getLocalTextPrefix = function () { return Administration.TenantRow.localTextPrefix; };
            TenantGrid.prototype.getService = function () { return Administration.TenantService.baseUrl; };
            TenantGrid.prototype.getButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getButtons.call(this);
                buttons.push(Serenity.Extensions.ExcelExportHelper.createToolButton({
                    grid: this,
                    service: this.getService() + '/ListExcel',
                    onViewSubmit: function () { return _this.onViewSubmit(); },
                    separator: true
                }));
                buttons.push(Serenity.Extensions.PdfExportHelper.createToolButton({
                    grid: this,
                    onViewSubmit: function () { return _this.onViewSubmit(); }
                }));
                return buttons;
            };
            TenantGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], TenantGrid);
            return TenantGrid;
        }(Serenity.EntityGrid));
        Administration.TenantGrid = TenantGrid;
    })(Administration = Indotalent.Administration || (Indotalent.Administration = {}));
})(Indotalent || (Indotalent = {}));
var Indotalent;
(function (Indotalent) {
    var Administration;
    (function (Administration) {
        var TranslationGrid = /** @class */ (function (_super) {
            __extends(TranslationGrid, _super);
            function TranslationGrid(container) {
                var _this = _super.call(this, container) || this;
                _this.element.on('keyup.' + _this.uniqueName + ' change.' + _this.uniqueName, 'input.custom-text', function (e) {
                    var value = Q.trimToNull($(e.target).val());
                    if (value === '') {
                        value = null;
                    }
                    _this.view.getItemById($(e.target).data('key')).CustomText = value;
                    _this.hasChanges = true;
                });
                return _this;
            }
            TranslationGrid.prototype.getIdProperty = function () { return "Key"; };
            TranslationGrid.prototype.getLocalTextPrefix = function () { return "Administration.Translation"; };
            TranslationGrid.prototype.getService = function () { return Administration.TranslationService.baseUrl; };
            TranslationGrid.prototype.onClick = function (e, row, cell) {
                var _this = this;
                _super.prototype.onClick.call(this, e, row, cell);
                if (e.isDefaultPrevented()) {
                    return;
                }
                var item = this.itemAt(row);
                var done;
                if ($(e.target).hasClass('source-text')) {
                    e.preventDefault();
                    done = function () {
                        item.CustomText = item.SourceText;
                        _this.view.updateItem(item.Key, item);
                        _this.hasChanges = true;
                    };
                    if (Q.isTrimmedEmpty(item.CustomText) ||
                        (Q.trimToEmpty(item.CustomText) === Q.trimToEmpty(item.SourceText))) {
                        done();
                        return;
                    }
                    Q.confirm(Q.text('Db.Administration.Translation.OverrideConfirmation'), done);
                    return;
                }
                if ($(e.target).hasClass('target-text')) {
                    e.preventDefault();
                    done = function () {
                        item.CustomText = item.TargetText;
                        _this.view.updateItem(item.Key, item);
                        _this.hasChanges = true;
                    };
                    if (Q.isTrimmedEmpty(item.CustomText) ||
                        (Q.trimToEmpty(item.CustomText) === Q.trimToEmpty(item.TargetText))) {
                        done();
                        return;
                    }
                    Q.confirm(Q.text('Db.Administration.Translation.OverrideConfirmation'), done);
                    return;
                }
            };
            TranslationGrid.prototype.getColumns = function () {
                var columns = [];
                columns.push({ field: 'Key', width: 300, sortable: false });
                columns.push({
                    field: 'SourceText',
                    width: 300,
                    sortable: false,
                    format: function (ctx) {
                        return Q.outerHtml($('<a/>')
                            .addClass('source-text')
                            .text(ctx.value || ''));
                    }
                });
                columns.push({
                    field: 'CustomText',
                    width: 300,
                    sortable: false,
                    format: function (ctx) { return Q.outerHtml($('<input/>')
                        .addClass('custom-text')
                        .attr('value', ctx.value)
                        .attr('type', 'text')
                        .attr('data-key', ctx.item.Key)); }
                });
                columns.push({
                    field: 'TargetText',
                    width: 300,
                    sortable: false,
                    format: function (ctx) { return Q.outerHtml($('<a/>')
                        .addClass('target-text')
                        .text(ctx.value || '')); }
                });
                return columns;
            };
            TranslationGrid.prototype.createToolbarExtensions = function () {
                var _this = this;
                _super.prototype.createToolbarExtensions.call(this);
                var opt = {
                    lookupKey: 'Administration.Language'
                };
                this.sourceLanguage = Serenity.Widget.create({
                    type: Serenity.LookupEditor,
                    element: function (el) { return el.appendTo(_this.toolbar.element).attr('placeholder', '--- ' +
                        Q.text('Db.Administration.Translation.SourceLanguage') + ' ---'); },
                    options: opt
                });
                this.sourceLanguage.changeSelect2(function (e) {
                    if (_this.hasChanges) {
                        _this.saveChanges(_this.targetLanguageKey).then(function () { return _this.refresh(); });
                    }
                    else {
                        _this.refresh();
                    }
                });
                this.targetLanguage = Serenity.Widget.create({
                    type: Serenity.LookupEditor,
                    element: function (el) { return el.appendTo(_this.toolbar.element).attr('placeholder', '--- ' +
                        Q.text('Db.Administration.Translation.TargetLanguage') + ' ---'); },
                    options: opt
                });
                this.targetLanguage.changeSelect2(function (e) {
                    if (_this.hasChanges) {
                        _this.saveChanges(_this.targetLanguageKey).then(function () { return _this.refresh(); });
                    }
                    else {
                        _this.refresh();
                    }
                });
            };
            TranslationGrid.prototype.saveChanges = function (language) {
                var _this = this;
                var translations = {};
                for (var _i = 0, _a = this.getItems(); _i < _a.length; _i++) {
                    var item = _a[_i];
                    translations[item.Key] = item.CustomText;
                }
                return Promise.resolve(Administration.TranslationService.Update({
                    TargetLanguageID: language,
                    Translations: translations
                })).then(function () {
                    _this.hasChanges = false;
                    language = Q.trimToNull(language) || 'invariant';
                    Q.notifySuccess('User translations in "' + language +
                        '" language are saved to "user.texts.' +
                        language + '.json" ' + 'file under "~/App_Data/texts/"', '');
                });
            };
            TranslationGrid.prototype.onViewSubmit = function () {
                var request = this.view.params;
                request.SourceLanguageID = this.sourceLanguage.value;
                this.targetLanguageKey = this.targetLanguage.value || '';
                request.TargetLanguageID = this.targetLanguageKey;
                this.hasChanges = false;
                return _super.prototype.onViewSubmit.call(this);
            };
            TranslationGrid.prototype.getButtons = function () {
                var _this = this;
                return [{
                        title: Q.text('Db.Administration.Translation.SaveChangesButton'),
                        onClick: function (e) { return _this.saveChanges(_this.targetLanguageKey).then(function () { return _this.refresh(); }); },
                        cssClass: 'apply-changes-button'
                    }];
            };
            TranslationGrid.prototype.createQuickSearchInput = function () {
                var _this = this;
                Serenity.GridUtils.addQuickSearchInputCustom(this.toolbar.element, function (field, searchText) {
                    _this.searchText = searchText;
                    _this.view.setItems(_this.view.getItems(), true);
                });
            };
            TranslationGrid.prototype.onViewFilter = function (item) {
                if (!_super.prototype.onViewFilter.call(this, item)) {
                    return false;
                }
                if (!this.searchText) {
                    return true;
                }
                var sd = Select2.util.stripDiacritics;
                var searching = sd(this.searchText).toLowerCase();
                function match(str) {
                    if (!str)
                        return false;
                    return str.toLowerCase().indexOf(searching) >= 0;
                }
                return Q.isEmptyOrNull(searching) || match(item.Key) || match(item.SourceText) ||
                    match(item.TargetText) || match(item.CustomText);
            };
            TranslationGrid.prototype.usePager = function () {
                return false;
            };
            TranslationGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], TranslationGrid);
            return TranslationGrid;
        }(Serenity.EntityGrid));
        Administration.TranslationGrid = TranslationGrid;
    })(Administration = Indotalent.Administration || (Indotalent.Administration = {}));
})(Indotalent || (Indotalent = {}));
var Indotalent;
(function (Indotalent) {
    var Administration;
    (function (Administration) {
        var UserDialog = /** @class */ (function (_super) {
            __extends(UserDialog, _super);
            function UserDialog() {
                var _this = _super.call(this) || this;
                _this.form = new Administration.UserForm(_this.idPrefix);
                _this.form.Password.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.Password.value.length < 7)
                        return "Password must be at least 7 characters!";
                });
                _this.form.PasswordConfirm.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.Password.value != _this.form.PasswordConfirm.value)
                        return "The passwords entered doesn't match!";
                });
                return _this;
            }
            UserDialog.prototype.getFormKey = function () { return Administration.UserForm.formKey; };
            UserDialog.prototype.getIdProperty = function () { return Administration.UserRow.idProperty; };
            UserDialog.prototype.getIsActiveProperty = function () { return Administration.UserRow.isActiveProperty; };
            UserDialog.prototype.getLocalTextPrefix = function () { return Administration.UserRow.localTextPrefix; };
            UserDialog.prototype.getNameProperty = function () { return Administration.UserRow.nameProperty; };
            UserDialog.prototype.getService = function () { return Administration.UserService.baseUrl; };
            UserDialog.prototype.getToolbarButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getToolbarButtons.call(this);
                buttons.push({
                    title: Q.text('Site.UserDialog.EditRolesButton'),
                    cssClass: 'edit-roles-button',
                    icon: 'fa-users text-blue',
                    onClick: function () {
                        new Administration.UserRoleDialog({
                            userID: _this.entity.UserId,
                            username: _this.entity.Username
                        }).dialogOpen();
                    }
                });
                buttons.push({
                    title: Q.text('Site.UserDialog.EditPermissionsButton'),
                    cssClass: 'edit-permissions-button',
                    icon: 'fa-lock text-green',
                    onClick: function () {
                        new Administration.UserPermissionDialog({
                            userID: _this.entity.UserId,
                            username: _this.entity.Username
                        }).dialogOpen();
                    }
                });
                return buttons;
            };
            UserDialog.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                this.toolbar.findButton('edit-roles-button').toggleClass('disabled', this.isNewOrDeleted());
                this.toolbar.findButton("edit-permissions-button").toggleClass("disabled", this.isNewOrDeleted());
            };
            UserDialog.prototype.afterLoadEntity = function () {
                _super.prototype.afterLoadEntity.call(this);
                // these fields are only required in new record mode
                this.form.Password.element.toggleClass('required', this.isNew())
                    .closest('.field').find('sup').toggle(this.isNew());
                this.form.PasswordConfirm.element.toggleClass('required', this.isNew())
                    .closest('.field').find('sup').toggle(this.isNew());
            };
            UserDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], UserDialog);
            return UserDialog;
        }(Serenity.EntityDialog));
        Administration.UserDialog = UserDialog;
    })(Administration = Indotalent.Administration || (Indotalent.Administration = {}));
})(Indotalent || (Indotalent = {}));
var Indotalent;
(function (Indotalent) {
    var Administration;
    (function (Administration) {
        var UserGrid = /** @class */ (function (_super) {
            __extends(UserGrid, _super);
            function UserGrid(container) {
                return _super.call(this, container) || this;
            }
            UserGrid.prototype.getColumnsKey = function () { return "Administration.User"; };
            UserGrid.prototype.getDialogType = function () { return Administration.UserDialog; };
            UserGrid.prototype.getIdProperty = function () { return Administration.UserRow.idProperty; };
            UserGrid.prototype.getIsActiveProperty = function () { return Administration.UserRow.isActiveProperty; };
            UserGrid.prototype.getLocalTextPrefix = function () { return Administration.UserRow.localTextPrefix; };
            UserGrid.prototype.getService = function () { return Administration.UserService.baseUrl; };
            UserGrid.prototype.getDefaultSortBy = function () {
                return ["Username" /* Username */];
            };
            UserGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], UserGrid);
            return UserGrid;
        }(Serenity.EntityGrid));
        Administration.UserGrid = UserGrid;
    })(Administration = Indotalent.Administration || (Indotalent.Administration = {}));
})(Indotalent || (Indotalent = {}));
var Indotalent;
(function (Indotalent) {
    var Authorization;
    (function (Authorization) {
        Object.defineProperty(Authorization, 'userDefinition', {
            get: function () {
                return Q.getRemoteData('UserData');
            }
        });
        function hasPermission(permissionKey) {
            return Q.Authorization.hasPermission(permissionKey);
        }
        Authorization.hasPermission = hasPermission;
    })(Authorization = Indotalent.Authorization || (Indotalent.Authorization = {}));
})(Indotalent || (Indotalent = {}));
var Indotalent;
(function (Indotalent) {
    var Administration;
    (function (Administration) {
        var PermissionCheckEditor = /** @class */ (function (_super) {
            __extends(PermissionCheckEditor, _super);
            function PermissionCheckEditor(container, opt) {
                var _this = _super.call(this, container, opt) || this;
                _this._rolePermissions = {};
                _this._implicitPermissions = {};
                var titleByKey = {};
                var permissionKeys = _this.getSortedGroupAndPermissionKeys(titleByKey);
                var items = permissionKeys.map(function (key) { return ({
                    Key: key,
                    ParentKey: _this.getParentKey(key),
                    Title: titleByKey[key],
                    GrantRevoke: null,
                    IsGroup: key.charAt(key.length - 1) === ':'
                }); });
                _this.byParentKey = Q.toGrouping(items, function (x) { return x.ParentKey; });
                _this.setItems(items);
                return _this;
            }
            PermissionCheckEditor.prototype.getIdProperty = function () { return "Key"; };
            PermissionCheckEditor.prototype.getItemGrantRevokeClass = function (item, grant) {
                if (!item.IsGroup) {
                    return ((item.GrantRevoke === grant) ? ' checked' : '');
                }
                var desc = this.getDescendants(item, true);
                var granted = desc.filter(function (x) { return x.GrantRevoke === grant; });
                if (!granted.length) {
                    return '';
                }
                if (desc.length === granted.length) {
                    return 'checked';
                }
                return 'checked partial';
            };
            PermissionCheckEditor.prototype.roleOrImplicit = function (key) {
                if (this._rolePermissions[key])
                    return true;
                for (var _i = 0, _a = Object.keys(this._rolePermissions); _i < _a.length; _i++) {
                    var k = _a[_i];
                    var d = this._implicitPermissions[k];
                    if (d && d[key])
                        return true;
                }
                for (var _b = 0, _c = Object.keys(this._implicitPermissions); _b < _c.length; _b++) {
                    var i = _c[_b];
                    var item = this.view.getItemById(i);
                    if (item && item.GrantRevoke == true) {
                        var d = this._implicitPermissions[i];
                        if (d && d[key])
                            return true;
                    }
                }
            };
            PermissionCheckEditor.prototype.getItemEffectiveClass = function (item) {
                var _this = this;
                if (item.IsGroup) {
                    var desc = this.getDescendants(item, true);
                    var grantCount = Q.count(desc, function (x) { return x.GrantRevoke === true ||
                        (x.GrantRevoke == null && _this.roleOrImplicit(x.Key)); });
                    if (grantCount === desc.length || desc.length === 0) {
                        return 'allow';
                    }
                    if (grantCount === 0) {
                        return 'deny';
                    }
                    return 'partial';
                }
                var granted = item.GrantRevoke === true ||
                    (item.GrantRevoke == null && this.roleOrImplicit(item.Key));
                return (granted ? ' allow' : ' deny');
            };
            PermissionCheckEditor.prototype.getColumns = function () {
                var _this = this;
                var columns = [{
                        name: Q.text('Site.UserPermissionDialog.Permission'),
                        field: 'Title',
                        format: Serenity.SlickFormatting.treeToggle(function () { return _this.view; }, function (x) { return x.Key; }, function (ctx) {
                            var item = ctx.item;
                            var klass = _this.getItemEffectiveClass(item);
                            return '<span class="effective-permission ' + klass + '">' + Q.htmlEncode(ctx.value) + '</span>';
                        }),
                        width: 495,
                        sortable: false
                    }, {
                        name: Q.text('Site.UserPermissionDialog.Grant'), field: 'Grant',
                        format: function (ctx) {
                            var item1 = ctx.item;
                            var klass1 = _this.getItemGrantRevokeClass(item1, true);
                            return "<span class='check-box grant no-float " + klass1 + "'></span>";
                        },
                        width: 65,
                        sortable: false,
                        headerCssClass: 'align-center',
                        cssClass: 'align-center'
                    }];
                if (this.options.showRevoke) {
                    columns.push({
                        name: Q.text('Site.UserPermissionDialog.Revoke'), field: 'Revoke',
                        format: function (ctx) {
                            var item2 = ctx.item;
                            var klass2 = _this.getItemGrantRevokeClass(item2, false);
                            return '<span class="check-box revoke no-float ' + klass2 + '"></span>';
                        },
                        width: 65,
                        sortable: false,
                        headerCssClass: 'align-center',
                        cssClass: 'align-center'
                    });
                }
                return columns;
            };
            PermissionCheckEditor.prototype.setItems = function (items) {
                Serenity.SlickTreeHelper.setIndents(items, function (x) { return x.Key; }, function (x) { return x.ParentKey; }, false);
                this.view.setItems(items, true);
            };
            PermissionCheckEditor.prototype.onViewSubmit = function () {
                return false;
            };
            PermissionCheckEditor.prototype.onViewFilter = function (item) {
                var _this = this;
                if (!_super.prototype.onViewFilter.call(this, item)) {
                    return false;
                }
                if (!Serenity.SlickTreeHelper.filterById(item, this.view, function (x) { return x.ParentKey; }))
                    return false;
                if (this.searchText) {
                    return this.matchContains(item) || item.IsGroup && Q.any(this.getDescendants(item, false), function (x) { return _this.matchContains(x); });
                }
                return true;
            };
            PermissionCheckEditor.prototype.matchContains = function (item) {
                return Select2.util.stripDiacritics(item.Title || '').toLowerCase().indexOf(this.searchText) >= 0;
            };
            PermissionCheckEditor.prototype.getDescendants = function (item, excludeGroups) {
                var result = [];
                var stack = [item];
                while (stack.length > 0) {
                    var i = stack.pop();
                    var children = this.byParentKey[i.Key];
                    if (!children)
                        continue;
                    for (var _i = 0, children_1 = children; _i < children_1.length; _i++) {
                        var child = children_1[_i];
                        if (!excludeGroups || !child.IsGroup) {
                            result.push(child);
                        }
                        stack.push(child);
                    }
                }
                return result;
            };
            PermissionCheckEditor.prototype.onClick = function (e, row, cell) {
                _super.prototype.onClick.call(this, e, row, cell);
                if (!e.isDefaultPrevented()) {
                    Serenity.SlickTreeHelper.toggleClick(e, row, cell, this.view, function (x) { return x.Key; });
                }
                if (e.isDefaultPrevented()) {
                    return;
                }
                var target = $(e.target);
                var grant = target.hasClass('grant');
                if (grant || target.hasClass('revoke')) {
                    e.preventDefault();
                    var item = this.itemAt(row);
                    var checkedOrPartial = target.hasClass('checked') || target.hasClass('partial');
                    if (checkedOrPartial) {
                        grant = null;
                    }
                    else {
                        grant = grant !== checkedOrPartial;
                    }
                    if (item.IsGroup) {
                        for (var _i = 0, _a = this.getDescendants(item, true); _i < _a.length; _i++) {
                            var d = _a[_i];
                            d.GrantRevoke = grant;
                        }
                    }
                    else
                        item.GrantRevoke = grant;
                    this.slickGrid.invalidate();
                }
            };
            PermissionCheckEditor.prototype.getParentKey = function (key) {
                if (key.charAt(key.length - 1) === ':') {
                    key = key.substr(0, key.length - 1);
                }
                var idx = key.lastIndexOf(':');
                if (idx >= 0) {
                    return key.substr(0, idx + 1);
                }
                return null;
            };
            PermissionCheckEditor.prototype.getButtons = function () {
                return [];
            };
            PermissionCheckEditor.prototype.createToolbarExtensions = function () {
                var _this = this;
                _super.prototype.createToolbarExtensions.call(this);
                Serenity.GridUtils.addQuickSearchInputCustom(this.toolbar.element, function (field, text) {
                    _this.searchText = Select2.util.stripDiacritics(Q.trimToNull(text) || '').toLowerCase();
                    _this.view.setItems(_this.view.getItems(), true);
                });
            };
            PermissionCheckEditor.prototype.getSortedGroupAndPermissionKeys = function (titleByKey) {
                var keys = Q.getRemoteData('Administration.PermissionKeys');
                var titleWithGroup = {};
                for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
                    var k = keys_1[_i];
                    var s = k;
                    if (!s) {
                        continue;
                    }
                    if (s.charAt(s.length - 1) == ':') {
                        s = s.substr(0, s.length - 1);
                        if (s.length === 0) {
                            continue;
                        }
                    }
                    if (titleByKey[s]) {
                        continue;
                    }
                    titleByKey[s] = Q.coalesce(Q.tryGetText('Permission.' + s), s);
                    var parts = s.split(':');
                    var group = '';
                    var groupTitle = '';
                    for (var i = 0; i < parts.length - 1; i++) {
                        group = group + parts[i] + ':';
                        var txt = Q.tryGetText('Permission.' + group);
                        if (txt == null) {
                            txt = parts[i];
                        }
                        titleByKey[group] = txt;
                        groupTitle = groupTitle + titleByKey[group] + ':';
                        titleWithGroup[group] = groupTitle;
                    }
                    titleWithGroup[s] = groupTitle + titleByKey[s];
                }
                keys = Object.keys(titleByKey);
                keys = keys.sort(function (x, y) { return Q.turkishLocaleCompare(titleWithGroup[x], titleWithGroup[y]); });
                return keys;
            };
            Object.defineProperty(PermissionCheckEditor.prototype, "value", {
                get: function () {
                    var result = [];
                    for (var _i = 0, _a = this.view.getItems(); _i < _a.length; _i++) {
                        var item = _a[_i];
                        if (item.GrantRevoke != null && item.Key.charAt(item.Key.length - 1) != ':') {
                            result.push({ PermissionKey: item.Key, Granted: item.GrantRevoke });
                        }
                    }
                    return result;
                },
                set: function (value) {
                    for (var _i = 0, _a = this.view.getItems(); _i < _a.length; _i++) {
                        var item = _a[_i];
                        item.GrantRevoke = null;
                    }
                    if (value != null) {
                        for (var _b = 0, value_1 = value; _b < value_1.length; _b++) {
                            var row = value_1[_b];
                            var r = this.view.getItemById(row.PermissionKey);
                            if (r) {
                                r.GrantRevoke = Q.coalesce(row.Granted, true);
                            }
                        }
                    }
                    this.setItems(this.getItems());
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(PermissionCheckEditor.prototype, "rolePermissions", {
                get: function () {
                    return Object.keys(this._rolePermissions);
                },
                set: function (value) {
                    this._rolePermissions = {};
                    if (value) {
                        for (var _i = 0, value_2 = value; _i < value_2.length; _i++) {
                            var k = value_2[_i];
                            this._rolePermissions[k] = true;
                        }
                    }
                    this.setItems(this.getItems());
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(PermissionCheckEditor.prototype, "implicitPermissions", {
                set: function (value) {
                    this._implicitPermissions = {};
                    if (value) {
                        for (var _i = 0, _a = Object.keys(value); _i < _a.length; _i++) {
                            var k = _a[_i];
                            this._implicitPermissions[k] = this._implicitPermissions[k] || {};
                            var l = value[k];
                            if (l) {
                                for (var _b = 0, l_1 = l; _b < l_1.length; _b++) {
                                    var s = l_1[_b];
                                    this._implicitPermissions[k][s] = true;
                                }
                            }
                        }
                    }
                },
                enumerable: true,
                configurable: true
            });
            PermissionCheckEditor = __decorate([
                Serenity.Decorators.registerEditor([Serenity.IGetEditValue, Serenity.ISetEditValue])
            ], PermissionCheckEditor);
            return PermissionCheckEditor;
        }(Serenity.DataGrid));
        Administration.PermissionCheckEditor = PermissionCheckEditor;
    })(Administration = Indotalent.Administration || (Indotalent.Administration = {}));
})(Indotalent || (Indotalent = {}));
var Indotalent;
(function (Indotalent) {
    var Administration;
    (function (Administration) {
        var UserPermissionDialog = /** @class */ (function (_super) {
            __extends(UserPermissionDialog, _super);
            function UserPermissionDialog(opt) {
                var _this = _super.call(this, opt) || this;
                _this.permissions = new Administration.PermissionCheckEditor(_this.byId('Permissions'), {
                    showRevoke: true
                });
                Administration.UserPermissionService.List({
                    UserID: _this.options.userID,
                    Module: null,
                    Submodule: null
                }, function (response) {
                    _this.permissions.value = response.Entities;
                });
                Administration.UserPermissionService.ListRolePermissions({
                    UserID: _this.options.userID,
                    Module: null,
                    Submodule: null,
                }, function (response) {
                    _this.permissions.rolePermissions = response.Entities;
                });
                _this.permissions.implicitPermissions = Q.getRemoteData('Administration.ImplicitPermissions');
                return _this;
            }
            UserPermissionDialog.prototype.getDialogOptions = function () {
                var _this = this;
                var opt = _super.prototype.getDialogOptions.call(this);
                opt.buttons = [
                    {
                        text: Q.text('Dialogs.OkButton'),
                        cssClass: 'btn btn-primary',
                        click: function (e) {
                            Administration.UserPermissionService.Update({
                                UserID: _this.options.userID,
                                Permissions: _this.permissions.value,
                                Module: null,
                                Submodule: null
                            }, function (response) {
                                _this.dialogClose();
                                window.setTimeout(function () { return Q.notifySuccess(Q.text('Site.UserPermissionDialog.SaveSuccess')); }, 0);
                            });
                        }
                    }, {
                        text: Q.text('Dialogs.CancelButton'),
                        click: function () { return _this.dialogClose(); }
                    }
                ];
                opt.title = Q.format(Q.text('Site.UserPermissionDialog.DialogTitle'), this.options.username);
                return opt;
            };
            UserPermissionDialog.prototype.getTemplate = function () {
                return '<div id="~_Permissions"></div>';
            };
            UserPermissionDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], UserPermissionDialog);
            return UserPermissionDialog;
        }(Serenity.TemplatedDialog));
        Administration.UserPermissionDialog = UserPermissionDialog;
    })(Administration = Indotalent.Administration || (Indotalent.Administration = {}));
})(Indotalent || (Indotalent = {}));
var Indotalent;
(function (Indotalent) {
    var Administration;
    (function (Administration) {
        var RoleCheckEditor = /** @class */ (function (_super) {
            __extends(RoleCheckEditor, _super);
            function RoleCheckEditor(div) {
                return _super.call(this, div) || this;
            }
            RoleCheckEditor.prototype.createToolbarExtensions = function () {
                var _this = this;
                _super.prototype.createToolbarExtensions.call(this);
                Serenity.GridUtils.addQuickSearchInputCustom(this.toolbar.element, function (field, text) {
                    _this.searchText = Select2.util.stripDiacritics(text || '').toUpperCase();
                    _this.view.setItems(_this.view.getItems(), true);
                });
            };
            RoleCheckEditor.prototype.getButtons = function () {
                return [];
            };
            RoleCheckEditor.prototype.getTreeItems = function () {
                return Administration.RoleRow.getLookup().items.map(function (role) { return ({
                    id: role.RoleId.toString(),
                    text: role.RoleName
                }); });
            };
            RoleCheckEditor.prototype.onViewFilter = function (item) {
                return _super.prototype.onViewFilter.call(this, item) &&
                    (Q.isEmptyOrNull(this.searchText) ||
                        Select2.util.stripDiacritics(item.text || '')
                            .toUpperCase().indexOf(this.searchText) >= 0);
            };
            RoleCheckEditor = __decorate([
                Serenity.Decorators.registerEditor()
            ], RoleCheckEditor);
            return RoleCheckEditor;
        }(Serenity.CheckTreeEditor));
        Administration.RoleCheckEditor = RoleCheckEditor;
    })(Administration = Indotalent.Administration || (Indotalent.Administration = {}));
})(Indotalent || (Indotalent = {}));
var Indotalent;
(function (Indotalent) {
    var Administration;
    (function (Administration) {
        var UserRoleDialog = /** @class */ (function (_super) {
            __extends(UserRoleDialog, _super);
            function UserRoleDialog(opt) {
                var _this = _super.call(this, opt) || this;
                _this.permissions = new Administration.RoleCheckEditor(_this.byId('Roles'));
                Administration.UserRoleService.List({
                    UserID: _this.options.userID
                }, function (response) {
                    _this.permissions.value = response.Entities.map(function (x) { return x.toString(); });
                });
                return _this;
            }
            UserRoleDialog.prototype.getDialogOptions = function () {
                var _this = this;
                var opt = _super.prototype.getDialogOptions.call(this);
                opt.buttons = [{
                        text: Q.text('Dialogs.OkButton'),
                        cssClass: 'btn btn-primary',
                        click: function () {
                            Q.serviceRequest('Administration/UserRole/Update', {
                                UserID: _this.options.userID,
                                Roles: _this.permissions.value.map(function (x) { return parseInt(x, 10); })
                            }, function (response) {
                                _this.dialogClose();
                                Q.notifySuccess(Q.text('Site.UserRoleDialog.SaveSuccess'));
                            });
                        }
                    }, {
                        text: Q.text('Dialogs.CancelButton'),
                        click: function () { return _this.dialogClose(); }
                    }];
                opt.title = Q.format(Q.text('Site.UserRoleDialog.DialogTitle'), this.options.username);
                return opt;
            };
            UserRoleDialog.prototype.getTemplate = function () {
                return "<div id='~_Roles'></div>";
            };
            UserRoleDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], UserRoleDialog);
            return UserRoleDialog;
        }(Serenity.TemplatedDialog));
        Administration.UserRoleDialog = UserRoleDialog;
    })(Administration = Indotalent.Administration || (Indotalent.Administration = {}));
})(Indotalent || (Indotalent = {}));
var Indotalent;
(function (Indotalent) {
    var LanguageList;
    (function (LanguageList) {
        function getValue() {
            var result = [];
            for (var _i = 0, _a = Indotalent.Administration.LanguageRow.getLookup().items; _i < _a.length; _i++) {
                var k = _a[_i];
                if (k.LanguageId !== 'en') {
                    result.push([k.Id.toString(), k.LanguageName]);
                }
            }
            return result;
        }
        LanguageList.getValue = getValue;
    })(LanguageList = Indotalent.LanguageList || (Indotalent.LanguageList = {}));
})(Indotalent || (Indotalent = {}));
/// <reference path="../Common/Helpers/LanguageList.ts" />
var Indotalent;
(function (Indotalent) {
    var ScriptInitialization;
    (function (ScriptInitialization) {
        Q.Config.responsiveDialogs = true;
        Q.Config.rootNamespaces.push('Indotalent');
        Serenity.EntityDialog.defaultLanguageList = Indotalent.LanguageList.getValue;
        Serenity.HtmlContentEditor.CKEditorBasePath = "~/Serenity.Assets/Scripts/ckeditor/";
        if ($.fn['colorbox']) {
            $.fn['colorbox'].settings.maxWidth = "95%";
            $.fn['colorbox'].settings.maxHeight = "95%";
        }
        window.onerror = Q.ErrorHandling.runtimeErrorHandler;
    })(ScriptInitialization = Indotalent.ScriptInitialization || (Indotalent.ScriptInitialization = {}));
})(Indotalent || (Indotalent = {}));
var Indotalent;
(function (Indotalent) {
    var Common;
    (function (Common) {
        var SidebarSearch = /** @class */ (function (_super) {
            __extends(SidebarSearch, _super);
            function SidebarSearch(input, menuUL) {
                var _this = _super.call(this, input) || this;
                new Serenity.QuickSearchInput(input, {
                    onSearch: function (field, text, success) {
                        _this.updateMatchFlags(text);
                        success(true);
                    }
                });
                _this.menuUL = menuUL;
                return _this;
            }
            SidebarSearch.prototype.updateMatchFlags = function (text) {
                var liList = this.menuUL.find('li').removeClass('non-match');
                text = Q.trimToNull(text);
                if (text == null) {
                    liList.show();
                    liList.removeClass('expanded');
                    return;
                }
                var parts = text.replace(',', ' ').split(' ').filter(function (x) { return !Q.isTrimmedEmpty(x); });
                for (var i = 0; i < parts.length; i++) {
                    parts[i] = Q.trimToNull(Select2.util.stripDiacritics(parts[i]).toUpperCase());
                }
                var items = liList;
                items.each(function (idx, e) {
                    var x = $(e);
                    var title = Select2.util.stripDiacritics(Q.coalesce(x.text(), '').toUpperCase());
                    for (var _i = 0, parts_1 = parts; _i < parts_1.length; _i++) {
                        var p = parts_1[_i];
                        if (p != null && !(title.indexOf(p) !== -1)) {
                            x.addClass('non-match');
                            break;
                        }
                    }
                });
                var matchingItems = items.not('.non-match');
                var visibles = matchingItems.parents('li').add(matchingItems);
                var nonVisibles = liList.not(visibles);
                nonVisibles.hide().addClass('non-match');
                visibles.show();
                liList.addClass('expanded');
            };
            return SidebarSearch;
        }(Serenity.Widget));
        Common.SidebarSearch = SidebarSearch;
    })(Common = Indotalent.Common || (Indotalent.Common = {}));
})(Indotalent || (Indotalent = {}));
var Indotalent;
(function (Indotalent) {
    var Membership;
    (function (Membership) {
        var LoginPanel = /** @class */ (function (_super) {
            __extends(LoginPanel, _super);
            function LoginPanel(container) {
                var _this = _super.call(this, container) || this;
                _this.byId('LoginButton').click(function (e) {
                    e.preventDefault();
                    if (!_this.validateForm()) {
                        return;
                    }
                    var request = _this.getSaveEntity();
                    Q.serviceCall({
                        url: Q.resolveUrl('~/Account/Login'),
                        request: request,
                        onSuccess: function (response) {
                            _this.redirectToReturnUrl();
                        },
                        onError: function (response) {
                            if (response != null && response.Error != null && response.Error.Code == "RedirectUserTo") {
                                window.location.href = response.Error.Arguments;
                                return;
                            }
                            if (response != null && response.Error != null && !Q.isEmptyOrNull(response.Error.Message)) {
                                Q.notifyError(response.Error.Message);
                                $('#Password').focus();
                                return;
                            }
                            Q.ErrorHandling.showServiceError(response.Error);
                        }
                    });
                });
                return _this;
            }
            LoginPanel.prototype.getFormKey = function () { return Membership.LoginForm.formKey; };
            LoginPanel.prototype.redirectToReturnUrl = function () {
                var q = Q.parseQueryString();
                var returnUrl = q['returnUrl'] || q['ReturnUrl'];
                if (returnUrl) {
                    var hash = window.location.hash;
                    if (hash != null && hash != '#')
                        returnUrl += hash;
                    window.location.href = returnUrl;
                }
                else {
                    window.location.href = Q.resolveUrl('~/');
                }
            };
            LoginPanel.prototype.getTemplate = function () {
                return "\n    <h2 class=\"text-center p-4\">\n        <img src=\"" + Q.resolveUrl("~/Content/site/images/serenity-logo-w-128.png") + "\"\n            class=\"rounded-circle p-1\" style=\"background-color: var(--s-sidebar-band-bg)\"\n            width=\"50\" height=\"50\" /> Indotalent\n    </h2>\n\n    <div class=\"s-Panel p-4\">\n        <h5 class=\"text-center my-4\">" + Q.text("Forms.Membership.Login.LoginToYourAccount") + "</h5>\n        <form id=\"~_Form\" action=\"\">\n            <div id=\"~_PropertyGrid\"></div>\n            <div class=\"px-field\">\n                <a class=\"float-end text-decoration-none\" href=\"" + Q.resolveUrl('~/Account/ForgotPassword') + "\">\n                    " + Q.text("Forms.Membership.Login.ForgotPassword") + "\n                </a>\n            </div>\n            <div class=\"px-field\">\n                <button id=\"~_LoginButton\" type=\"submit\" class=\"btn btn-primary my-3 w-100\">\n                    " + Q.text("Forms.Membership.Login.SignInButton") + "\n                </button>\n            </div>\n        </form>\n    </div>\n\n    <div class=\"text-center mt-2\">\n        <a class=\"text-decoration-none\" href=\"" + Q.resolveUrl('~/Account/SignUp') + "\">" + Q.text("Forms.Membership.Login.SignUpButton") + "</a>\n    </div>   \n";
            };
            LoginPanel = __decorate([
                Serenity.Decorators.registerClass()
            ], LoginPanel);
            return LoginPanel;
        }(Serenity.PropertyPanel));
        Membership.LoginPanel = LoginPanel;
    })(Membership = Indotalent.Membership || (Indotalent.Membership = {}));
})(Indotalent || (Indotalent = {}));
var Indotalent;
(function (Indotalent) {
    var Membership;
    (function (Membership) {
        var ChangePasswordPanel = /** @class */ (function (_super) {
            __extends(ChangePasswordPanel, _super);
            function ChangePasswordPanel(container) {
                var _this = _super.call(this, container) || this;
                _this.form = new Membership.ChangePasswordForm(_this.idPrefix);
                _this.form.NewPassword.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.w('ConfirmPassword', Serenity.PasswordEditor).value.length < 7) {
                        return Q.format(Q.text('Validation.MinRequiredPasswordLength'), 7);
                    }
                });
                _this.form.ConfirmPassword.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.ConfirmPassword.value !== _this.form.NewPassword.value) {
                        return Q.text('Validation.PasswordConfirm');
                    }
                });
                _this.byId('SubmitButton').click(function (e) {
                    e.preventDefault();
                    if (!_this.validateForm()) {
                        return;
                    }
                    var request = _this.getSaveEntity();
                    Q.serviceCall({
                        url: Q.resolveUrl('~/Account/ChangePassword'),
                        request: request,
                        onSuccess: function (response) {
                            Q.information(Q.text('Forms.Membership.ChangePassword.Success'), function () {
                                window.location.href = Q.resolveUrl('~/');
                            });
                        }
                    });
                });
                return _this;
            }
            ChangePasswordPanel.prototype.getFormKey = function () { return Membership.ChangePasswordForm.formKey; };
            ChangePasswordPanel.prototype.getTemplate = function () {
                return "<div class=\"s-Panel\">\n    <h3 class=\"page-title mb-4 text-center\">" + Q.text("Forms.Membership.ChangePassword.FormTitle") + "</h3>\n    <form id=\"~_Form\" action=\"\">\n        <div id=\"~_PropertyGrid\"></div>\n        <div class=\"px-field mt-4\">\n            <button id=\"~_SubmitButton\" type=\"submit\" class=\"btn btn-primary w-100\">\n                " + Q.text("Forms.Membership.ChangePassword.SubmitButton") + "\n            </button>\n        </div>\n    </form>\n</div>";
            };
            ChangePasswordPanel = __decorate([
                Serenity.Decorators.registerClass()
            ], ChangePasswordPanel);
            return ChangePasswordPanel;
        }(Serenity.PropertyPanel));
        Membership.ChangePasswordPanel = ChangePasswordPanel;
    })(Membership = Indotalent.Membership || (Indotalent.Membership = {}));
})(Indotalent || (Indotalent = {}));
var Indotalent;
(function (Indotalent) {
    var Membership;
    (function (Membership) {
        var ForgotPasswordPanel = /** @class */ (function (_super) {
            __extends(ForgotPasswordPanel, _super);
            function ForgotPasswordPanel(container) {
                var _this = _super.call(this, container) || this;
                _this.form = new Membership.ForgotPasswordForm(_this.idPrefix);
                _this.byId('SubmitButton').click(function (e) {
                    e.preventDefault();
                    if (!_this.validateForm()) {
                        return;
                    }
                    var request = _this.getSaveEntity();
                    Q.serviceCall({
                        url: Q.resolveUrl('~/Account/ForgotPassword'),
                        request: request,
                        onSuccess: function (response) {
                            Q.information(Q.text('Forms.Membership.ForgotPassword.Success'), function () {
                                window.location.href = Q.resolveUrl('~/');
                            });
                        }
                    });
                });
                return _this;
            }
            ForgotPasswordPanel.prototype.getFormKey = function () { return Membership.ForgotPasswordForm.formKey; };
            ForgotPasswordPanel = __decorate([
                Serenity.Decorators.registerClass()
            ], ForgotPasswordPanel);
            return ForgotPasswordPanel;
        }(Serenity.PropertyPanel));
        Membership.ForgotPasswordPanel = ForgotPasswordPanel;
    })(Membership = Indotalent.Membership || (Indotalent.Membership = {}));
})(Indotalent || (Indotalent = {}));
var Indotalent;
(function (Indotalent) {
    var Membership;
    (function (Membership) {
        var ResetPasswordPanel = /** @class */ (function (_super) {
            __extends(ResetPasswordPanel, _super);
            function ResetPasswordPanel(container) {
                var _this = _super.call(this, container) || this;
                _this.form = new Membership.ResetPasswordForm(_this.idPrefix);
                _this.form.NewPassword.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.NewPassword.value.length < 7) {
                        return Q.format(Q.text('Validation.MinRequiredPasswordLength'), 7);
                    }
                });
                _this.form.ConfirmPassword.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.ConfirmPassword.value !== _this.form.NewPassword.value) {
                        return Q.text('Validation.PasswordConfirm');
                    }
                });
                _this.byId('SubmitButton').click(function (e) {
                    e.preventDefault();
                    if (!_this.validateForm()) {
                        return;
                    }
                    var request = _this.getSaveEntity();
                    request.Token = _this.byId('Token').val();
                    Q.serviceCall({
                        url: Q.resolveUrl('~/Account/ResetPassword'),
                        request: request,
                        onSuccess: function (response) {
                            Q.information(Q.text('Forms.Membership.ResetPassword.Success'), function () {
                                window.location.href = Q.resolveUrl('~/Account/Login');
                            });
                        }
                    });
                });
                return _this;
            }
            ResetPasswordPanel.prototype.getFormKey = function () { return Membership.ResetPasswordForm.formKey; };
            ResetPasswordPanel = __decorate([
                Serenity.Decorators.registerClass()
            ], ResetPasswordPanel);
            return ResetPasswordPanel;
        }(Serenity.PropertyPanel));
        Membership.ResetPasswordPanel = ResetPasswordPanel;
    })(Membership = Indotalent.Membership || (Indotalent.Membership = {}));
})(Indotalent || (Indotalent = {}));
var Indotalent;
(function (Indotalent) {
    var Membership;
    (function (Membership) {
        var SignUpPanel = /** @class */ (function (_super) {
            __extends(SignUpPanel, _super);
            function SignUpPanel(container) {
                var _this = _super.call(this, container) || this;
                _this.form = new Membership.SignUpForm(_this.idPrefix);
                _this.form.ConfirmEmail.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.ConfirmEmail.value !== _this.form.Email.value) {
                        return Q.text('Validation.EmailConfirm');
                    }
                });
                _this.form.ConfirmPassword.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.ConfirmPassword.value !== _this.form.Password.value) {
                        return Q.text('Validation.PasswordConfirm');
                    }
                });
                _this.byId('SubmitButton').click(function (e) {
                    e.preventDefault();
                    if (!_this.validateForm()) {
                        return;
                    }
                    Q.serviceCall({
                        url: Q.resolveUrl('~/Account/SignUp'),
                        request: {
                            DisplayName: _this.form.DisplayName.value,
                            Email: _this.form.Email.value,
                            Password: _this.form.Password.value
                        },
                        onSuccess: function (response) {
                            Q.information(Q.text('Forms.Membership.SignUp.Success'), function () {
                                window.location.href = Q.resolveUrl('~/');
                            });
                        }
                    });
                });
                return _this;
            }
            SignUpPanel.prototype.getFormKey = function () { return Membership.SignUpForm.formKey; };
            SignUpPanel = __decorate([
                Serenity.Decorators.registerClass()
            ], SignUpPanel);
            return SignUpPanel;
        }(Serenity.PropertyPanel));
        Membership.SignUpPanel = SignUpPanel;
    })(Membership = Indotalent.Membership || (Indotalent.Membership = {}));
})(Indotalent || (Indotalent = {}));
var Indotalent;
(function (Indotalent) {
    var Merchandise;
    (function (Merchandise) {
        var BrandDialog = /** @class */ (function (_super) {
            __extends(BrandDialog, _super);
            function BrandDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Merchandise.BrandForm(_this.idPrefix);
                return _this;
            }
            BrandDialog.prototype.getFormKey = function () { return Merchandise.BrandForm.formKey; };
            BrandDialog.prototype.getIdProperty = function () { return Merchandise.BrandRow.idProperty; };
            BrandDialog.prototype.getLocalTextPrefix = function () { return Merchandise.BrandRow.localTextPrefix; };
            BrandDialog.prototype.getNameProperty = function () { return Merchandise.BrandRow.nameProperty; };
            BrandDialog.prototype.getService = function () { return Merchandise.BrandService.baseUrl; };
            BrandDialog.prototype.getDeletePermission = function () { return Merchandise.BrandRow.deletePermission; };
            BrandDialog.prototype.getInsertPermission = function () { return Merchandise.BrandRow.insertPermission; };
            BrandDialog.prototype.getUpdatePermission = function () { return Merchandise.BrandRow.updatePermission; };
            BrandDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], BrandDialog);
            return BrandDialog;
        }(Serenity.EntityDialog));
        Merchandise.BrandDialog = BrandDialog;
    })(Merchandise = Indotalent.Merchandise || (Indotalent.Merchandise = {}));
})(Indotalent || (Indotalent = {}));
var Indotalent;
(function (Indotalent) {
    var Merchandise;
    (function (Merchandise) {
        var BrandGrid = /** @class */ (function (_super) {
            __extends(BrandGrid, _super);
            function BrandGrid(container) {
                return _super.call(this, container) || this;
            }
            BrandGrid.prototype.getColumnsKey = function () { return Merchandise.BrandColumns.columnsKey; };
            BrandGrid.prototype.getDialogType = function () { return Merchandise.BrandDialog; };
            BrandGrid.prototype.getIdProperty = function () { return Merchandise.BrandRow.idProperty; };
            BrandGrid.prototype.getInsertPermission = function () { return Merchandise.BrandRow.insertPermission; };
            BrandGrid.prototype.getLocalTextPrefix = function () { return Merchandise.BrandRow.localTextPrefix; };
            BrandGrid.prototype.getService = function () { return Merchandise.BrandService.baseUrl; };
            BrandGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], BrandGrid);
            return BrandGrid;
        }(Serenity.EntityGrid));
        Merchandise.BrandGrid = BrandGrid;
    })(Merchandise = Indotalent.Merchandise || (Indotalent.Merchandise = {}));
})(Indotalent || (Indotalent = {}));
var Indotalent;
(function (Indotalent) {
    var Merchandise;
    (function (Merchandise) {
        var CategoryDialog = /** @class */ (function (_super) {
            __extends(CategoryDialog, _super);
            function CategoryDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Merchandise.CategoryForm(_this.idPrefix);
                return _this;
            }
            CategoryDialog.prototype.getFormKey = function () { return Merchandise.CategoryForm.formKey; };
            CategoryDialog.prototype.getIdProperty = function () { return Merchandise.CategoryRow.idProperty; };
            CategoryDialog.prototype.getLocalTextPrefix = function () { return Merchandise.CategoryRow.localTextPrefix; };
            CategoryDialog.prototype.getNameProperty = function () { return Merchandise.CategoryRow.nameProperty; };
            CategoryDialog.prototype.getService = function () { return Merchandise.CategoryService.baseUrl; };
            CategoryDialog.prototype.getDeletePermission = function () { return Merchandise.CategoryRow.deletePermission; };
            CategoryDialog.prototype.getInsertPermission = function () { return Merchandise.CategoryRow.insertPermission; };
            CategoryDialog.prototype.getUpdatePermission = function () { return Merchandise.CategoryRow.updatePermission; };
            CategoryDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], CategoryDialog);
            return CategoryDialog;
        }(Serenity.EntityDialog));
        Merchandise.CategoryDialog = CategoryDialog;
    })(Merchandise = Indotalent.Merchandise || (Indotalent.Merchandise = {}));
})(Indotalent || (Indotalent = {}));
var Indotalent;
(function (Indotalent) {
    var Merchandise;
    (function (Merchandise) {
        var CategoryGrid = /** @class */ (function (_super) {
            __extends(CategoryGrid, _super);
            function CategoryGrid(container) {
                return _super.call(this, container) || this;
            }
            CategoryGrid.prototype.getColumnsKey = function () { return Merchandise.CategoryColumns.columnsKey; };
            CategoryGrid.prototype.getDialogType = function () { return Merchandise.CategoryDialog; };
            CategoryGrid.prototype.getIdProperty = function () { return Merchandise.CategoryRow.idProperty; };
            CategoryGrid.prototype.getInsertPermission = function () { return Merchandise.CategoryRow.insertPermission; };
            CategoryGrid.prototype.getLocalTextPrefix = function () { return Merchandise.CategoryRow.localTextPrefix; };
            CategoryGrid.prototype.getService = function () { return Merchandise.CategoryService.baseUrl; };
            CategoryGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], CategoryGrid);
            return CategoryGrid;
        }(Serenity.EntityGrid));
        Merchandise.CategoryGrid = CategoryGrid;
    })(Merchandise = Indotalent.Merchandise || (Indotalent.Merchandise = {}));
})(Indotalent || (Indotalent = {}));
var Indotalent;
(function (Indotalent) {
    var Merchandise;
    (function (Merchandise) {
        var ColourDialog = /** @class */ (function (_super) {
            __extends(ColourDialog, _super);
            function ColourDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Merchandise.ColourForm(_this.idPrefix);
                return _this;
            }
            ColourDialog.prototype.getFormKey = function () { return Merchandise.ColourForm.formKey; };
            ColourDialog.prototype.getIdProperty = function () { return Merchandise.ColourRow.idProperty; };
            ColourDialog.prototype.getLocalTextPrefix = function () { return Merchandise.ColourRow.localTextPrefix; };
            ColourDialog.prototype.getNameProperty = function () { return Merchandise.ColourRow.nameProperty; };
            ColourDialog.prototype.getService = function () { return Merchandise.ColourService.baseUrl; };
            ColourDialog.prototype.getDeletePermission = function () { return Merchandise.ColourRow.deletePermission; };
            ColourDialog.prototype.getInsertPermission = function () { return Merchandise.ColourRow.insertPermission; };
            ColourDialog.prototype.getUpdatePermission = function () { return Merchandise.ColourRow.updatePermission; };
            ColourDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], ColourDialog);
            return ColourDialog;
        }(Serenity.EntityDialog));
        Merchandise.ColourDialog = ColourDialog;
    })(Merchandise = Indotalent.Merchandise || (Indotalent.Merchandise = {}));
})(Indotalent || (Indotalent = {}));
var Indotalent;
(function (Indotalent) {
    var Merchandise;
    (function (Merchandise) {
        var ColourGrid = /** @class */ (function (_super) {
            __extends(ColourGrid, _super);
            function ColourGrid(container) {
                return _super.call(this, container) || this;
            }
            ColourGrid.prototype.getColumnsKey = function () { return Merchandise.ColourColumns.columnsKey; };
            ColourGrid.prototype.getDialogType = function () { return Merchandise.ColourDialog; };
            ColourGrid.prototype.getIdProperty = function () { return Merchandise.ColourRow.idProperty; };
            ColourGrid.prototype.getInsertPermission = function () { return Merchandise.ColourRow.insertPermission; };
            ColourGrid.prototype.getLocalTextPrefix = function () { return Merchandise.ColourRow.localTextPrefix; };
            ColourGrid.prototype.getService = function () { return Merchandise.ColourService.baseUrl; };
            ColourGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], ColourGrid);
            return ColourGrid;
        }(Serenity.EntityGrid));
        Merchandise.ColourGrid = ColourGrid;
    })(Merchandise = Indotalent.Merchandise || (Indotalent.Merchandise = {}));
})(Indotalent || (Indotalent = {}));
var Indotalent;
(function (Indotalent) {
    var Merchandise;
    (function (Merchandise) {
        var FlavourDialog = /** @class */ (function (_super) {
            __extends(FlavourDialog, _super);
            function FlavourDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Merchandise.FlavourForm(_this.idPrefix);
                return _this;
            }
            FlavourDialog.prototype.getFormKey = function () { return Merchandise.FlavourForm.formKey; };
            FlavourDialog.prototype.getIdProperty = function () { return Merchandise.FlavourRow.idProperty; };
            FlavourDialog.prototype.getLocalTextPrefix = function () { return Merchandise.FlavourRow.localTextPrefix; };
            FlavourDialog.prototype.getNameProperty = function () { return Merchandise.FlavourRow.nameProperty; };
            FlavourDialog.prototype.getService = function () { return Merchandise.FlavourService.baseUrl; };
            FlavourDialog.prototype.getDeletePermission = function () { return Merchandise.FlavourRow.deletePermission; };
            FlavourDialog.prototype.getInsertPermission = function () { return Merchandise.FlavourRow.insertPermission; };
            FlavourDialog.prototype.getUpdatePermission = function () { return Merchandise.FlavourRow.updatePermission; };
            FlavourDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], FlavourDialog);
            return FlavourDialog;
        }(Serenity.EntityDialog));
        Merchandise.FlavourDialog = FlavourDialog;
    })(Merchandise = Indotalent.Merchandise || (Indotalent.Merchandise = {}));
})(Indotalent || (Indotalent = {}));
var Indotalent;
(function (Indotalent) {
    var Merchandise;
    (function (Merchandise) {
        var FlavourGrid = /** @class */ (function (_super) {
            __extends(FlavourGrid, _super);
            function FlavourGrid(container) {
                return _super.call(this, container) || this;
            }
            FlavourGrid.prototype.getColumnsKey = function () { return Merchandise.FlavourColumns.columnsKey; };
            FlavourGrid.prototype.getDialogType = function () { return Merchandise.FlavourDialog; };
            FlavourGrid.prototype.getIdProperty = function () { return Merchandise.FlavourRow.idProperty; };
            FlavourGrid.prototype.getInsertPermission = function () { return Merchandise.FlavourRow.insertPermission; };
            FlavourGrid.prototype.getLocalTextPrefix = function () { return Merchandise.FlavourRow.localTextPrefix; };
            FlavourGrid.prototype.getService = function () { return Merchandise.FlavourService.baseUrl; };
            FlavourGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], FlavourGrid);
            return FlavourGrid;
        }(Serenity.EntityGrid));
        Merchandise.FlavourGrid = FlavourGrid;
    })(Merchandise = Indotalent.Merchandise || (Indotalent.Merchandise = {}));
})(Indotalent || (Indotalent = {}));
var Indotalent;
(function (Indotalent) {
    var Merchandise;
    (function (Merchandise) {
        var ProductDialog = /** @class */ (function (_super) {
            __extends(ProductDialog, _super);
            function ProductDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Merchandise.ProductForm(_this.idPrefix);
                return _this;
            }
            ProductDialog.prototype.getFormKey = function () { return Merchandise.ProductForm.formKey; };
            ProductDialog.prototype.getIdProperty = function () { return Merchandise.ProductRow.idProperty; };
            ProductDialog.prototype.getLocalTextPrefix = function () { return Merchandise.ProductRow.localTextPrefix; };
            ProductDialog.prototype.getNameProperty = function () { return Merchandise.ProductRow.nameProperty; };
            ProductDialog.prototype.getService = function () { return Merchandise.ProductService.baseUrl; };
            ProductDialog.prototype.getDeletePermission = function () { return Merchandise.ProductRow.deletePermission; };
            ProductDialog.prototype.getInsertPermission = function () { return Merchandise.ProductRow.insertPermission; };
            ProductDialog.prototype.getUpdatePermission = function () { return Merchandise.ProductRow.updatePermission; };
            ProductDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], ProductDialog);
            return ProductDialog;
        }(Serenity.EntityDialog));
        Merchandise.ProductDialog = ProductDialog;
    })(Merchandise = Indotalent.Merchandise || (Indotalent.Merchandise = {}));
})(Indotalent || (Indotalent = {}));
var Indotalent;
(function (Indotalent) {
    var Merchandise;
    (function (Merchandise) {
        var ProductGrid = /** @class */ (function (_super) {
            __extends(ProductGrid, _super);
            function ProductGrid(container) {
                return _super.call(this, container) || this;
            }
            ProductGrid.prototype.getColumnsKey = function () { return Merchandise.ProductColumns.columnsKey; };
            ProductGrid.prototype.getDialogType = function () { return Merchandise.ProductDialog; };
            ProductGrid.prototype.getIdProperty = function () { return Merchandise.ProductRow.idProperty; };
            ProductGrid.prototype.getInsertPermission = function () { return Merchandise.ProductRow.insertPermission; };
            ProductGrid.prototype.getLocalTextPrefix = function () { return Merchandise.ProductRow.localTextPrefix; };
            ProductGrid.prototype.getService = function () { return Merchandise.ProductService.baseUrl; };
            ProductGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], ProductGrid);
            return ProductGrid;
        }(Serenity.EntityGrid));
        Merchandise.ProductGrid = ProductGrid;
    })(Merchandise = Indotalent.Merchandise || (Indotalent.Merchandise = {}));
})(Indotalent || (Indotalent = {}));
var Indotalent;
(function (Indotalent) {
    var Merchandise;
    (function (Merchandise) {
        var SizeDialog = /** @class */ (function (_super) {
            __extends(SizeDialog, _super);
            function SizeDialog() {
                var _this = _super.call(this) || this;
                _this.form = new Merchandise.SizeForm(_this.idPrefix);
                Indotalent.DialogUtils.pendingChangesConfirmation(_this.element, function () { return _this.getSaveState() != _this.loadedState; });
                return _this;
            }
            SizeDialog.prototype.getFormKey = function () { return Merchandise.SizeForm.formKey; };
            SizeDialog.prototype.getIdProperty = function () { return Merchandise.SizeRow.idProperty; };
            SizeDialog.prototype.getLocalTextPrefix = function () { return Merchandise.SizeRow.localTextPrefix; };
            SizeDialog.prototype.getNameProperty = function () { return Merchandise.SizeRow.nameProperty; };
            SizeDialog.prototype.getService = function () { return Merchandise.SizeService.baseUrl; };
            SizeDialog.prototype.getDeletePermission = function () { return Merchandise.SizeRow.deletePermission; };
            SizeDialog.prototype.getInsertPermission = function () { return Merchandise.SizeRow.insertPermission; };
            SizeDialog.prototype.getUpdatePermission = function () { return Merchandise.SizeRow.updatePermission; };
            SizeDialog.prototype.getSaveState = function () {
                try {
                    return $.toJSON(this.getSaveEntity());
                }
                catch (e) {
                    return null;
                }
            };
            SizeDialog.prototype.loadResponse = function (data) {
                _super.prototype.loadResponse.call(this, data);
                this.loadedState = this.getSaveState();
            };
            SizeDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], SizeDialog);
            return SizeDialog;
        }(Serenity.EntityDialog));
        Merchandise.SizeDialog = SizeDialog;
    })(Merchandise = Indotalent.Merchandise || (Indotalent.Merchandise = {}));
})(Indotalent || (Indotalent = {}));
var Indotalent;
(function (Indotalent) {
    var Merchandise;
    (function (Merchandise) {
        var SizeGrid = /** @class */ (function (_super) {
            __extends(SizeGrid, _super);
            function SizeGrid(container) {
                return _super.call(this, container) || this;
            }
            SizeGrid.prototype.getColumnsKey = function () { return Merchandise.SizeColumns.columnsKey; };
            SizeGrid.prototype.getDialogType = function () { return Merchandise.SizeDialog; };
            SizeGrid.prototype.getIdProperty = function () { return Merchandise.SizeRow.idProperty; };
            SizeGrid.prototype.getInsertPermission = function () { return Merchandise.SizeRow.insertPermission; };
            SizeGrid.prototype.getLocalTextPrefix = function () { return Merchandise.SizeRow.localTextPrefix; };
            SizeGrid.prototype.getService = function () { return Merchandise.SizeService.baseUrl; };
            SizeGrid.prototype.getColumns = function () {
                var columns = _super.prototype.getColumns.call(this);
                if (!Q.Authorization.hasPermission("Administration:Tenant")) {
                    columns = columns.filter(function (x) { return x.field != "TenantName" /* TenantName */ && x.field != "Id" /* Id */; });
                }
                return columns;
            };
            SizeGrid.prototype.getButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getButtons.call(this);
                buttons.push(Serenity.Extensions.ExcelExportHelper.createToolButton({
                    grid: this,
                    service: this.getService() + '/ListExcel',
                    onViewSubmit: function () { return _this.onViewSubmit(); },
                    separator: true
                }));
                buttons.push(Serenity.Extensions.PdfExportHelper.createToolButton({
                    grid: this,
                    onViewSubmit: function () { return _this.onViewSubmit(); }
                }));
                return buttons;
            };
            SizeGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], SizeGrid);
            return SizeGrid;
        }(Serenity.EntityGrid));
        Merchandise.SizeGrid = SizeGrid;
    })(Merchandise = Indotalent.Merchandise || (Indotalent.Merchandise = {}));
})(Indotalent || (Indotalent = {}));
var Indotalent;
(function (Indotalent) {
    var Merchandise;
    (function (Merchandise) {
        var UomDialog = /** @class */ (function (_super) {
            __extends(UomDialog, _super);
            function UomDialog() {
                var _this = _super.call(this) || this;
                _this.form = new Merchandise.UomForm(_this.idPrefix);
                Indotalent.DialogUtils.pendingChangesConfirmation(_this.element, function () { return _this.getSaveState() != _this.loadedState; });
                return _this;
            }
            UomDialog.prototype.getFormKey = function () { return Merchandise.UomForm.formKey; };
            UomDialog.prototype.getIdProperty = function () { return Merchandise.UomRow.idProperty; };
            UomDialog.prototype.getLocalTextPrefix = function () { return Merchandise.UomRow.localTextPrefix; };
            UomDialog.prototype.getNameProperty = function () { return Merchandise.UomRow.nameProperty; };
            UomDialog.prototype.getService = function () { return Merchandise.UomService.baseUrl; };
            UomDialog.prototype.getDeletePermission = function () { return Merchandise.UomRow.deletePermission; };
            UomDialog.prototype.getInsertPermission = function () { return Merchandise.UomRow.insertPermission; };
            UomDialog.prototype.getUpdatePermission = function () { return Merchandise.UomRow.updatePermission; };
            UomDialog.prototype.getSaveState = function () {
                try {
                    return $.toJSON(this.getSaveEntity());
                }
                catch (e) {
                    return null;
                }
            };
            UomDialog.prototype.loadResponse = function (data) {
                _super.prototype.loadResponse.call(this, data);
                this.loadedState = this.getSaveState();
            };
            UomDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], UomDialog);
            return UomDialog;
        }(Serenity.EntityDialog));
        Merchandise.UomDialog = UomDialog;
    })(Merchandise = Indotalent.Merchandise || (Indotalent.Merchandise = {}));
})(Indotalent || (Indotalent = {}));
var Indotalent;
(function (Indotalent) {
    var Merchandise;
    (function (Merchandise) {
        var UomGrid = /** @class */ (function (_super) {
            __extends(UomGrid, _super);
            function UomGrid(container) {
                return _super.call(this, container) || this;
            }
            UomGrid.prototype.getColumnsKey = function () { return Merchandise.UomColumns.columnsKey; };
            UomGrid.prototype.getDialogType = function () { return Merchandise.UomDialog; };
            UomGrid.prototype.getIdProperty = function () { return Merchandise.UomRow.idProperty; };
            UomGrid.prototype.getInsertPermission = function () { return Merchandise.UomRow.insertPermission; };
            UomGrid.prototype.getLocalTextPrefix = function () { return Merchandise.UomRow.localTextPrefix; };
            UomGrid.prototype.getService = function () { return Merchandise.UomService.baseUrl; };
            UomGrid.prototype.getColumns = function () {
                var columns = _super.prototype.getColumns.call(this);
                if (!Q.Authorization.hasPermission("Administration:Tenant")) {
                    columns = columns.filter(function (x) { return x.field != "TenantName" /* TenantName */ && x.field != "Id" /* Id */; });
                }
                return columns;
            };
            UomGrid.prototype.getButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getButtons.call(this);
                buttons.push(Serenity.Extensions.ExcelExportHelper.createToolButton({
                    grid: this,
                    service: this.getService() + '/ListExcel',
                    onViewSubmit: function () { return _this.onViewSubmit(); },
                    separator: true
                }));
                buttons.push(Serenity.Extensions.PdfExportHelper.createToolButton({
                    grid: this,
                    onViewSubmit: function () { return _this.onViewSubmit(); }
                }));
                return buttons;
            };
            UomGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], UomGrid);
            return UomGrid;
        }(Serenity.EntityGrid));
        Merchandise.UomGrid = UomGrid;
    })(Merchandise = Indotalent.Merchandise || (Indotalent.Merchandise = {}));
})(Indotalent || (Indotalent = {}));
var Indotalent;
(function (Indotalent) {
    var Purchase;
    (function (Purchase) {
        var BillDialog = /** @class */ (function (_super) {
            __extends(BillDialog, _super);
            function BillDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Purchase.BillForm(_this.idPrefix);
                return _this;
            }
            BillDialog.prototype.getFormKey = function () { return Purchase.BillForm.formKey; };
            BillDialog.prototype.getIdProperty = function () { return Purchase.BillRow.idProperty; };
            BillDialog.prototype.getLocalTextPrefix = function () { return Purchase.BillRow.localTextPrefix; };
            BillDialog.prototype.getNameProperty = function () { return Purchase.BillRow.nameProperty; };
            BillDialog.prototype.getService = function () { return Purchase.BillService.baseUrl; };
            BillDialog.prototype.getDeletePermission = function () { return Purchase.BillRow.deletePermission; };
            BillDialog.prototype.getInsertPermission = function () { return Purchase.BillRow.insertPermission; };
            BillDialog.prototype.getUpdatePermission = function () { return Purchase.BillRow.updatePermission; };
            BillDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], BillDialog);
            return BillDialog;
        }(Serenity.EntityDialog));
        Purchase.BillDialog = BillDialog;
    })(Purchase = Indotalent.Purchase || (Indotalent.Purchase = {}));
})(Indotalent || (Indotalent = {}));
var Indotalent;
(function (Indotalent) {
    var Purchase;
    (function (Purchase) {
        var BillGrid = /** @class */ (function (_super) {
            __extends(BillGrid, _super);
            function BillGrid(container) {
                return _super.call(this, container) || this;
            }
            BillGrid.prototype.getColumnsKey = function () { return Purchase.BillColumns.columnsKey; };
            BillGrid.prototype.getDialogType = function () { return Purchase.BillDialog; };
            BillGrid.prototype.getIdProperty = function () { return Purchase.BillRow.idProperty; };
            BillGrid.prototype.getInsertPermission = function () { return Purchase.BillRow.insertPermission; };
            BillGrid.prototype.getLocalTextPrefix = function () { return Purchase.BillRow.localTextPrefix; };
            BillGrid.prototype.getService = function () { return Purchase.BillService.baseUrl; };
            BillGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], BillGrid);
            return BillGrid;
        }(Serenity.EntityGrid));
        Purchase.BillGrid = BillGrid;
    })(Purchase = Indotalent.Purchase || (Indotalent.Purchase = {}));
})(Indotalent || (Indotalent = {}));
var Indotalent;
(function (Indotalent) {
    var Purchase;
    (function (Purchase) {
        var BillDetailDialog = /** @class */ (function (_super) {
            __extends(BillDetailDialog, _super);
            function BillDetailDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Purchase.BillDetailForm(_this.idPrefix);
                return _this;
            }
            BillDetailDialog.prototype.getFormKey = function () { return Purchase.BillDetailForm.formKey; };
            BillDetailDialog.prototype.getIdProperty = function () { return Purchase.BillDetailRow.idProperty; };
            BillDetailDialog.prototype.getLocalTextPrefix = function () { return Purchase.BillDetailRow.localTextPrefix; };
            BillDetailDialog.prototype.getService = function () { return Purchase.BillDetailService.baseUrl; };
            BillDetailDialog.prototype.getDeletePermission = function () { return Purchase.BillDetailRow.deletePermission; };
            BillDetailDialog.prototype.getInsertPermission = function () { return Purchase.BillDetailRow.insertPermission; };
            BillDetailDialog.prototype.getUpdatePermission = function () { return Purchase.BillDetailRow.updatePermission; };
            BillDetailDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], BillDetailDialog);
            return BillDetailDialog;
        }(Serenity.EntityDialog));
        Purchase.BillDetailDialog = BillDetailDialog;
    })(Purchase = Indotalent.Purchase || (Indotalent.Purchase = {}));
})(Indotalent || (Indotalent = {}));
var Indotalent;
(function (Indotalent) {
    var Purchase;
    (function (Purchase) {
        var BillDetailGrid = /** @class */ (function (_super) {
            __extends(BillDetailGrid, _super);
            function BillDetailGrid(container) {
                return _super.call(this, container) || this;
            }
            BillDetailGrid.prototype.getColumnsKey = function () { return Purchase.BillDetailColumns.columnsKey; };
            BillDetailGrid.prototype.getDialogType = function () { return Purchase.BillDetailDialog; };
            BillDetailGrid.prototype.getIdProperty = function () { return Purchase.BillDetailRow.idProperty; };
            BillDetailGrid.prototype.getInsertPermission = function () { return Purchase.BillDetailRow.insertPermission; };
            BillDetailGrid.prototype.getLocalTextPrefix = function () { return Purchase.BillDetailRow.localTextPrefix; };
            BillDetailGrid.prototype.getService = function () { return Purchase.BillDetailService.baseUrl; };
            BillDetailGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], BillDetailGrid);
            return BillDetailGrid;
        }(Serenity.EntityGrid));
        Purchase.BillDetailGrid = BillDetailGrid;
    })(Purchase = Indotalent.Purchase || (Indotalent.Purchase = {}));
})(Indotalent || (Indotalent = {}));
var Indotalent;
(function (Indotalent) {
    var Purchase;
    (function (Purchase) {
        var BillPaymentDialog = /** @class */ (function (_super) {
            __extends(BillPaymentDialog, _super);
            function BillPaymentDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Purchase.BillPaymentForm(_this.idPrefix);
                return _this;
            }
            BillPaymentDialog.prototype.getFormKey = function () { return Purchase.BillPaymentForm.formKey; };
            BillPaymentDialog.prototype.getIdProperty = function () { return Purchase.BillPaymentRow.idProperty; };
            BillPaymentDialog.prototype.getLocalTextPrefix = function () { return Purchase.BillPaymentRow.localTextPrefix; };
            BillPaymentDialog.prototype.getNameProperty = function () { return Purchase.BillPaymentRow.nameProperty; };
            BillPaymentDialog.prototype.getService = function () { return Purchase.BillPaymentService.baseUrl; };
            BillPaymentDialog.prototype.getDeletePermission = function () { return Purchase.BillPaymentRow.deletePermission; };
            BillPaymentDialog.prototype.getInsertPermission = function () { return Purchase.BillPaymentRow.insertPermission; };
            BillPaymentDialog.prototype.getUpdatePermission = function () { return Purchase.BillPaymentRow.updatePermission; };
            BillPaymentDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], BillPaymentDialog);
            return BillPaymentDialog;
        }(Serenity.EntityDialog));
        Purchase.BillPaymentDialog = BillPaymentDialog;
    })(Purchase = Indotalent.Purchase || (Indotalent.Purchase = {}));
})(Indotalent || (Indotalent = {}));
var Indotalent;
(function (Indotalent) {
    var Purchase;
    (function (Purchase) {
        var BillPaymentGrid = /** @class */ (function (_super) {
            __extends(BillPaymentGrid, _super);
            function BillPaymentGrid(container) {
                return _super.call(this, container) || this;
            }
            BillPaymentGrid.prototype.getColumnsKey = function () { return Purchase.BillPaymentColumns.columnsKey; };
            BillPaymentGrid.prototype.getDialogType = function () { return Purchase.BillPaymentDialog; };
            BillPaymentGrid.prototype.getIdProperty = function () { return Purchase.BillPaymentRow.idProperty; };
            BillPaymentGrid.prototype.getInsertPermission = function () { return Purchase.BillPaymentRow.insertPermission; };
            BillPaymentGrid.prototype.getLocalTextPrefix = function () { return Purchase.BillPaymentRow.localTextPrefix; };
            BillPaymentGrid.prototype.getService = function () { return Purchase.BillPaymentService.baseUrl; };
            BillPaymentGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], BillPaymentGrid);
            return BillPaymentGrid;
        }(Serenity.EntityGrid));
        Purchase.BillPaymentGrid = BillPaymentGrid;
    })(Purchase = Indotalent.Purchase || (Indotalent.Purchase = {}));
})(Indotalent || (Indotalent = {}));
var Indotalent;
(function (Indotalent) {
    var Purchase;
    (function (Purchase) {
        var PurchaseOrderDialog = /** @class */ (function (_super) {
            __extends(PurchaseOrderDialog, _super);
            function PurchaseOrderDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Purchase.PurchaseOrderForm(_this.idPrefix);
                return _this;
            }
            PurchaseOrderDialog.prototype.getFormKey = function () { return Purchase.PurchaseOrderForm.formKey; };
            PurchaseOrderDialog.prototype.getIdProperty = function () { return Purchase.PurchaseOrderRow.idProperty; };
            PurchaseOrderDialog.prototype.getLocalTextPrefix = function () { return Purchase.PurchaseOrderRow.localTextPrefix; };
            PurchaseOrderDialog.prototype.getNameProperty = function () { return Purchase.PurchaseOrderRow.nameProperty; };
            PurchaseOrderDialog.prototype.getService = function () { return Purchase.PurchaseOrderService.baseUrl; };
            PurchaseOrderDialog.prototype.getDeletePermission = function () { return Purchase.PurchaseOrderRow.deletePermission; };
            PurchaseOrderDialog.prototype.getInsertPermission = function () { return Purchase.PurchaseOrderRow.insertPermission; };
            PurchaseOrderDialog.prototype.getUpdatePermission = function () { return Purchase.PurchaseOrderRow.updatePermission; };
            PurchaseOrderDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], PurchaseOrderDialog);
            return PurchaseOrderDialog;
        }(Serenity.EntityDialog));
        Purchase.PurchaseOrderDialog = PurchaseOrderDialog;
    })(Purchase = Indotalent.Purchase || (Indotalent.Purchase = {}));
})(Indotalent || (Indotalent = {}));
var Indotalent;
(function (Indotalent) {
    var Purchase;
    (function (Purchase) {
        var PurchaseOrderGrid = /** @class */ (function (_super) {
            __extends(PurchaseOrderGrid, _super);
            function PurchaseOrderGrid(container) {
                return _super.call(this, container) || this;
            }
            PurchaseOrderGrid.prototype.getColumnsKey = function () { return Purchase.PurchaseOrderColumns.columnsKey; };
            PurchaseOrderGrid.prototype.getDialogType = function () { return Purchase.PurchaseOrderDialog; };
            PurchaseOrderGrid.prototype.getIdProperty = function () { return Purchase.PurchaseOrderRow.idProperty; };
            PurchaseOrderGrid.prototype.getInsertPermission = function () { return Purchase.PurchaseOrderRow.insertPermission; };
            PurchaseOrderGrid.prototype.getLocalTextPrefix = function () { return Purchase.PurchaseOrderRow.localTextPrefix; };
            PurchaseOrderGrid.prototype.getService = function () { return Purchase.PurchaseOrderService.baseUrl; };
            PurchaseOrderGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], PurchaseOrderGrid);
            return PurchaseOrderGrid;
        }(Serenity.EntityGrid));
        Purchase.PurchaseOrderGrid = PurchaseOrderGrid;
    })(Purchase = Indotalent.Purchase || (Indotalent.Purchase = {}));
})(Indotalent || (Indotalent = {}));
var Indotalent;
(function (Indotalent) {
    var Purchase;
    (function (Purchase) {
        var PurchaseOrderDetailDialog = /** @class */ (function (_super) {
            __extends(PurchaseOrderDetailDialog, _super);
            function PurchaseOrderDetailDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Purchase.PurchaseOrderDetailForm(_this.idPrefix);
                return _this;
            }
            PurchaseOrderDetailDialog.prototype.getFormKey = function () { return Purchase.PurchaseOrderDetailForm.formKey; };
            PurchaseOrderDetailDialog.prototype.getIdProperty = function () { return Purchase.PurchaseOrderDetailRow.idProperty; };
            PurchaseOrderDetailDialog.prototype.getLocalTextPrefix = function () { return Purchase.PurchaseOrderDetailRow.localTextPrefix; };
            PurchaseOrderDetailDialog.prototype.getService = function () { return Purchase.PurchaseOrderDetailService.baseUrl; };
            PurchaseOrderDetailDialog.prototype.getDeletePermission = function () { return Purchase.PurchaseOrderDetailRow.deletePermission; };
            PurchaseOrderDetailDialog.prototype.getInsertPermission = function () { return Purchase.PurchaseOrderDetailRow.insertPermission; };
            PurchaseOrderDetailDialog.prototype.getUpdatePermission = function () { return Purchase.PurchaseOrderDetailRow.updatePermission; };
            PurchaseOrderDetailDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], PurchaseOrderDetailDialog);
            return PurchaseOrderDetailDialog;
        }(Serenity.EntityDialog));
        Purchase.PurchaseOrderDetailDialog = PurchaseOrderDetailDialog;
    })(Purchase = Indotalent.Purchase || (Indotalent.Purchase = {}));
})(Indotalent || (Indotalent = {}));
var Indotalent;
(function (Indotalent) {
    var Purchase;
    (function (Purchase) {
        var PurchaseOrderDetailGrid = /** @class */ (function (_super) {
            __extends(PurchaseOrderDetailGrid, _super);
            function PurchaseOrderDetailGrid(container) {
                return _super.call(this, container) || this;
            }
            PurchaseOrderDetailGrid.prototype.getColumnsKey = function () { return Purchase.PurchaseOrderDetailColumns.columnsKey; };
            PurchaseOrderDetailGrid.prototype.getDialogType = function () { return Purchase.PurchaseOrderDetailDialog; };
            PurchaseOrderDetailGrid.prototype.getIdProperty = function () { return Purchase.PurchaseOrderDetailRow.idProperty; };
            PurchaseOrderDetailGrid.prototype.getInsertPermission = function () { return Purchase.PurchaseOrderDetailRow.insertPermission; };
            PurchaseOrderDetailGrid.prototype.getLocalTextPrefix = function () { return Purchase.PurchaseOrderDetailRow.localTextPrefix; };
            PurchaseOrderDetailGrid.prototype.getService = function () { return Purchase.PurchaseOrderDetailService.baseUrl; };
            PurchaseOrderDetailGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], PurchaseOrderDetailGrid);
            return PurchaseOrderDetailGrid;
        }(Serenity.EntityGrid));
        Purchase.PurchaseOrderDetailGrid = PurchaseOrderDetailGrid;
    })(Purchase = Indotalent.Purchase || (Indotalent.Purchase = {}));
})(Indotalent || (Indotalent = {}));
var Indotalent;
(function (Indotalent) {
    var Purchase;
    (function (Purchase) {
        var VendorDialog = /** @class */ (function (_super) {
            __extends(VendorDialog, _super);
            function VendorDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Purchase.VendorForm(_this.idPrefix);
                return _this;
            }
            VendorDialog.prototype.getFormKey = function () { return Purchase.VendorForm.formKey; };
            VendorDialog.prototype.getIdProperty = function () { return Purchase.VendorRow.idProperty; };
            VendorDialog.prototype.getLocalTextPrefix = function () { return Purchase.VendorRow.localTextPrefix; };
            VendorDialog.prototype.getNameProperty = function () { return Purchase.VendorRow.nameProperty; };
            VendorDialog.prototype.getService = function () { return Purchase.VendorService.baseUrl; };
            VendorDialog.prototype.getDeletePermission = function () { return Purchase.VendorRow.deletePermission; };
            VendorDialog.prototype.getInsertPermission = function () { return Purchase.VendorRow.insertPermission; };
            VendorDialog.prototype.getUpdatePermission = function () { return Purchase.VendorRow.updatePermission; };
            VendorDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], VendorDialog);
            return VendorDialog;
        }(Serenity.EntityDialog));
        Purchase.VendorDialog = VendorDialog;
    })(Purchase = Indotalent.Purchase || (Indotalent.Purchase = {}));
})(Indotalent || (Indotalent = {}));
var Indotalent;
(function (Indotalent) {
    var Purchase;
    (function (Purchase) {
        var VendorGrid = /** @class */ (function (_super) {
            __extends(VendorGrid, _super);
            function VendorGrid(container) {
                return _super.call(this, container) || this;
            }
            VendorGrid.prototype.getColumnsKey = function () { return Purchase.VendorColumns.columnsKey; };
            VendorGrid.prototype.getDialogType = function () { return Purchase.VendorDialog; };
            VendorGrid.prototype.getIdProperty = function () { return Purchase.VendorRow.idProperty; };
            VendorGrid.prototype.getInsertPermission = function () { return Purchase.VendorRow.insertPermission; };
            VendorGrid.prototype.getLocalTextPrefix = function () { return Purchase.VendorRow.localTextPrefix; };
            VendorGrid.prototype.getService = function () { return Purchase.VendorService.baseUrl; };
            VendorGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], VendorGrid);
            return VendorGrid;
        }(Serenity.EntityGrid));
        Purchase.VendorGrid = VendorGrid;
    })(Purchase = Indotalent.Purchase || (Indotalent.Purchase = {}));
})(Indotalent || (Indotalent = {}));
var Indotalent;
(function (Indotalent) {
    var Purchase;
    (function (Purchase) {
        var VendorContactDialog = /** @class */ (function (_super) {
            __extends(VendorContactDialog, _super);
            function VendorContactDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Purchase.VendorContactForm(_this.idPrefix);
                return _this;
            }
            VendorContactDialog.prototype.getFormKey = function () { return Purchase.VendorContactForm.formKey; };
            VendorContactDialog.prototype.getIdProperty = function () { return Purchase.VendorContactRow.idProperty; };
            VendorContactDialog.prototype.getLocalTextPrefix = function () { return Purchase.VendorContactRow.localTextPrefix; };
            VendorContactDialog.prototype.getNameProperty = function () { return Purchase.VendorContactRow.nameProperty; };
            VendorContactDialog.prototype.getService = function () { return Purchase.VendorContactService.baseUrl; };
            VendorContactDialog.prototype.getDeletePermission = function () { return Purchase.VendorContactRow.deletePermission; };
            VendorContactDialog.prototype.getInsertPermission = function () { return Purchase.VendorContactRow.insertPermission; };
            VendorContactDialog.prototype.getUpdatePermission = function () { return Purchase.VendorContactRow.updatePermission; };
            VendorContactDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], VendorContactDialog);
            return VendorContactDialog;
        }(Serenity.EntityDialog));
        Purchase.VendorContactDialog = VendorContactDialog;
    })(Purchase = Indotalent.Purchase || (Indotalent.Purchase = {}));
})(Indotalent || (Indotalent = {}));
var Indotalent;
(function (Indotalent) {
    var Purchase;
    (function (Purchase) {
        var VendorContactGrid = /** @class */ (function (_super) {
            __extends(VendorContactGrid, _super);
            function VendorContactGrid(container) {
                return _super.call(this, container) || this;
            }
            VendorContactGrid.prototype.getColumnsKey = function () { return Purchase.VendorContactColumns.columnsKey; };
            VendorContactGrid.prototype.getDialogType = function () { return Purchase.VendorContactDialog; };
            VendorContactGrid.prototype.getIdProperty = function () { return Purchase.VendorContactRow.idProperty; };
            VendorContactGrid.prototype.getInsertPermission = function () { return Purchase.VendorContactRow.insertPermission; };
            VendorContactGrid.prototype.getLocalTextPrefix = function () { return Purchase.VendorContactRow.localTextPrefix; };
            VendorContactGrid.prototype.getService = function () { return Purchase.VendorContactService.baseUrl; };
            VendorContactGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], VendorContactGrid);
            return VendorContactGrid;
        }(Serenity.EntityGrid));
        Purchase.VendorContactGrid = VendorContactGrid;
    })(Purchase = Indotalent.Purchase || (Indotalent.Purchase = {}));
})(Indotalent || (Indotalent = {}));
var Indotalent;
(function (Indotalent) {
    var Sales;
    (function (Sales) {
        var CustomerDialog = /** @class */ (function (_super) {
            __extends(CustomerDialog, _super);
            function CustomerDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Sales.CustomerForm(_this.idPrefix);
                return _this;
            }
            CustomerDialog.prototype.getFormKey = function () { return Sales.CustomerForm.formKey; };
            CustomerDialog.prototype.getIdProperty = function () { return Sales.CustomerRow.idProperty; };
            CustomerDialog.prototype.getLocalTextPrefix = function () { return Sales.CustomerRow.localTextPrefix; };
            CustomerDialog.prototype.getNameProperty = function () { return Sales.CustomerRow.nameProperty; };
            CustomerDialog.prototype.getService = function () { return Sales.CustomerService.baseUrl; };
            CustomerDialog.prototype.getDeletePermission = function () { return Sales.CustomerRow.deletePermission; };
            CustomerDialog.prototype.getInsertPermission = function () { return Sales.CustomerRow.insertPermission; };
            CustomerDialog.prototype.getUpdatePermission = function () { return Sales.CustomerRow.updatePermission; };
            CustomerDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], CustomerDialog);
            return CustomerDialog;
        }(Serenity.EntityDialog));
        Sales.CustomerDialog = CustomerDialog;
    })(Sales = Indotalent.Sales || (Indotalent.Sales = {}));
})(Indotalent || (Indotalent = {}));
var Indotalent;
(function (Indotalent) {
    var Sales;
    (function (Sales) {
        var CustomerGrid = /** @class */ (function (_super) {
            __extends(CustomerGrid, _super);
            function CustomerGrid(container) {
                return _super.call(this, container) || this;
            }
            CustomerGrid.prototype.getColumnsKey = function () { return Sales.CustomerColumns.columnsKey; };
            CustomerGrid.prototype.getDialogType = function () { return Sales.CustomerDialog; };
            CustomerGrid.prototype.getIdProperty = function () { return Sales.CustomerRow.idProperty; };
            CustomerGrid.prototype.getInsertPermission = function () { return Sales.CustomerRow.insertPermission; };
            CustomerGrid.prototype.getLocalTextPrefix = function () { return Sales.CustomerRow.localTextPrefix; };
            CustomerGrid.prototype.getService = function () { return Sales.CustomerService.baseUrl; };
            CustomerGrid.prototype.getColumns = function () {
                var columns = _super.prototype.getColumns.call(this);
                if (!Q.Authorization.hasPermission("Administration:Tenant")) {
                    columns = columns.filter(function (x) { return x.field != "TenantName" /* TenantName */ && x.field != "Id" /* Id */; });
                }
                return columns;
            };
            CustomerGrid.prototype.getButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getButtons.call(this);
                buttons.push(Serenity.Extensions.ExcelExportHelper.createToolButton({
                    grid: this,
                    service: this.getService() + '/ListExcel',
                    onViewSubmit: function () { return _this.onViewSubmit(); },
                    separator: true
                }));
                buttons.push(Serenity.Extensions.PdfExportHelper.createToolButton({
                    grid: this,
                    onViewSubmit: function () { return _this.onViewSubmit(); }
                }));
                return buttons;
            };
            CustomerGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], CustomerGrid);
            return CustomerGrid;
        }(Serenity.EntityGrid));
        Sales.CustomerGrid = CustomerGrid;
    })(Sales = Indotalent.Sales || (Indotalent.Sales = {}));
})(Indotalent || (Indotalent = {}));
var Indotalent;
(function (Indotalent) {
    var Sales;
    (function (Sales) {
        var CustomerContactDialog = /** @class */ (function (_super) {
            __extends(CustomerContactDialog, _super);
            function CustomerContactDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Sales.CustomerContactForm(_this.idPrefix);
                return _this;
            }
            CustomerContactDialog.prototype.getFormKey = function () { return Sales.CustomerContactForm.formKey; };
            CustomerContactDialog.prototype.getIdProperty = function () { return Sales.CustomerContactRow.idProperty; };
            CustomerContactDialog.prototype.getLocalTextPrefix = function () { return Sales.CustomerContactRow.localTextPrefix; };
            CustomerContactDialog.prototype.getNameProperty = function () { return Sales.CustomerContactRow.nameProperty; };
            CustomerContactDialog.prototype.getService = function () { return Sales.CustomerContactService.baseUrl; };
            CustomerContactDialog.prototype.getDeletePermission = function () { return Sales.CustomerContactRow.deletePermission; };
            CustomerContactDialog.prototype.getInsertPermission = function () { return Sales.CustomerContactRow.insertPermission; };
            CustomerContactDialog.prototype.getUpdatePermission = function () { return Sales.CustomerContactRow.updatePermission; };
            CustomerContactDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], CustomerContactDialog);
            return CustomerContactDialog;
        }(Serenity.EntityDialog));
        Sales.CustomerContactDialog = CustomerContactDialog;
    })(Sales = Indotalent.Sales || (Indotalent.Sales = {}));
})(Indotalent || (Indotalent = {}));
var Indotalent;
(function (Indotalent) {
    var Sales;
    (function (Sales) {
        var CustomerContactEditor = /** @class */ (function (_super) {
            __extends(CustomerContactEditor, _super);
            function CustomerContactEditor(container) {
                return _super.call(this, container) || this;
            }
            CustomerContactEditor.prototype.getColumnsKey = function () { return Sales.CustomerContactColumns.columnsKey; };
            CustomerContactEditor.prototype.getDialogType = function () { return Sales.CustomerContactDialog; };
            CustomerContactEditor.prototype.getLocalTextPrefix = function () { return Sales.CustomerContactRow.localTextPrefix; };
            CustomerContactEditor.prototype.getColumns = function () {
                var columns = _super.prototype.getColumns.call(this);
                if (!Q.Authorization.hasPermission("Administration:Tenant")) {
                    columns = columns.filter(function (x) { return x.field != "TenantName" /* TenantName */ && x.field != "Id" /* Id */; });
                }
                return columns;
            };
            CustomerContactEditor = __decorate([
                Serenity.Decorators.registerClass()
            ], CustomerContactEditor);
            return CustomerContactEditor;
        }(Serenity.Extensions.GridEditorBase));
        Sales.CustomerContactEditor = CustomerContactEditor;
    })(Sales = Indotalent.Sales || (Indotalent.Sales = {}));
})(Indotalent || (Indotalent = {}));
var Indotalent;
(function (Indotalent) {
    var Sales;
    (function (Sales) {
        var CustomerContactGrid = /** @class */ (function (_super) {
            __extends(CustomerContactGrid, _super);
            function CustomerContactGrid(container) {
                return _super.call(this, container) || this;
            }
            CustomerContactGrid.prototype.getColumnsKey = function () { return Sales.CustomerContactColumns.columnsKey; };
            CustomerContactGrid.prototype.getDialogType = function () { return Sales.CustomerContactDialog; };
            CustomerContactGrid.prototype.getIdProperty = function () { return Sales.CustomerContactRow.idProperty; };
            CustomerContactGrid.prototype.getInsertPermission = function () { return Sales.CustomerContactRow.insertPermission; };
            CustomerContactGrid.prototype.getLocalTextPrefix = function () { return Sales.CustomerContactRow.localTextPrefix; };
            CustomerContactGrid.prototype.getService = function () { return Sales.CustomerContactService.baseUrl; };
            CustomerContactGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], CustomerContactGrid);
            return CustomerContactGrid;
        }(Serenity.EntityGrid));
        Sales.CustomerContactGrid = CustomerContactGrid;
    })(Sales = Indotalent.Sales || (Indotalent.Sales = {}));
})(Indotalent || (Indotalent = {}));
var Indotalent;
(function (Indotalent) {
    var Sales;
    (function (Sales) {
        var InvoiceDialog = /** @class */ (function (_super) {
            __extends(InvoiceDialog, _super);
            function InvoiceDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Sales.InvoiceForm(_this.idPrefix);
                return _this;
            }
            InvoiceDialog.prototype.getFormKey = function () { return Sales.InvoiceForm.formKey; };
            InvoiceDialog.prototype.getIdProperty = function () { return Sales.InvoiceRow.idProperty; };
            InvoiceDialog.prototype.getLocalTextPrefix = function () { return Sales.InvoiceRow.localTextPrefix; };
            InvoiceDialog.prototype.getNameProperty = function () { return Sales.InvoiceRow.nameProperty; };
            InvoiceDialog.prototype.getService = function () { return Sales.InvoiceService.baseUrl; };
            InvoiceDialog.prototype.getDeletePermission = function () { return Sales.InvoiceRow.deletePermission; };
            InvoiceDialog.prototype.getInsertPermission = function () { return Sales.InvoiceRow.insertPermission; };
            InvoiceDialog.prototype.getUpdatePermission = function () { return Sales.InvoiceRow.updatePermission; };
            InvoiceDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], InvoiceDialog);
            return InvoiceDialog;
        }(Serenity.EntityDialog));
        Sales.InvoiceDialog = InvoiceDialog;
    })(Sales = Indotalent.Sales || (Indotalent.Sales = {}));
})(Indotalent || (Indotalent = {}));
var Indotalent;
(function (Indotalent) {
    var Sales;
    (function (Sales) {
        var InvoiceGrid = /** @class */ (function (_super) {
            __extends(InvoiceGrid, _super);
            function InvoiceGrid(container) {
                return _super.call(this, container) || this;
            }
            InvoiceGrid.prototype.getColumnsKey = function () { return Sales.InvoiceColumns.columnsKey; };
            InvoiceGrid.prototype.getDialogType = function () { return Sales.InvoiceDialog; };
            InvoiceGrid.prototype.getIdProperty = function () { return Sales.InvoiceRow.idProperty; };
            InvoiceGrid.prototype.getInsertPermission = function () { return Sales.InvoiceRow.insertPermission; };
            InvoiceGrid.prototype.getLocalTextPrefix = function () { return Sales.InvoiceRow.localTextPrefix; };
            InvoiceGrid.prototype.getService = function () { return Sales.InvoiceService.baseUrl; };
            InvoiceGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], InvoiceGrid);
            return InvoiceGrid;
        }(Serenity.EntityGrid));
        Sales.InvoiceGrid = InvoiceGrid;
    })(Sales = Indotalent.Sales || (Indotalent.Sales = {}));
})(Indotalent || (Indotalent = {}));
var Indotalent;
(function (Indotalent) {
    var Sales;
    (function (Sales) {
        var InvoiceDetailDialog = /** @class */ (function (_super) {
            __extends(InvoiceDetailDialog, _super);
            function InvoiceDetailDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Sales.InvoiceDetailForm(_this.idPrefix);
                return _this;
            }
            InvoiceDetailDialog.prototype.getFormKey = function () { return Sales.InvoiceDetailForm.formKey; };
            InvoiceDetailDialog.prototype.getIdProperty = function () { return Sales.InvoiceDetailRow.idProperty; };
            InvoiceDetailDialog.prototype.getLocalTextPrefix = function () { return Sales.InvoiceDetailRow.localTextPrefix; };
            InvoiceDetailDialog.prototype.getService = function () { return Sales.InvoiceDetailService.baseUrl; };
            InvoiceDetailDialog.prototype.getDeletePermission = function () { return Sales.InvoiceDetailRow.deletePermission; };
            InvoiceDetailDialog.prototype.getInsertPermission = function () { return Sales.InvoiceDetailRow.insertPermission; };
            InvoiceDetailDialog.prototype.getUpdatePermission = function () { return Sales.InvoiceDetailRow.updatePermission; };
            InvoiceDetailDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], InvoiceDetailDialog);
            return InvoiceDetailDialog;
        }(Serenity.EntityDialog));
        Sales.InvoiceDetailDialog = InvoiceDetailDialog;
    })(Sales = Indotalent.Sales || (Indotalent.Sales = {}));
})(Indotalent || (Indotalent = {}));
var Indotalent;
(function (Indotalent) {
    var Sales;
    (function (Sales) {
        var InvoiceDetailGrid = /** @class */ (function (_super) {
            __extends(InvoiceDetailGrid, _super);
            function InvoiceDetailGrid(container) {
                return _super.call(this, container) || this;
            }
            InvoiceDetailGrid.prototype.getColumnsKey = function () { return Sales.InvoiceDetailColumns.columnsKey; };
            InvoiceDetailGrid.prototype.getDialogType = function () { return Sales.InvoiceDetailDialog; };
            InvoiceDetailGrid.prototype.getIdProperty = function () { return Sales.InvoiceDetailRow.idProperty; };
            InvoiceDetailGrid.prototype.getInsertPermission = function () { return Sales.InvoiceDetailRow.insertPermission; };
            InvoiceDetailGrid.prototype.getLocalTextPrefix = function () { return Sales.InvoiceDetailRow.localTextPrefix; };
            InvoiceDetailGrid.prototype.getService = function () { return Sales.InvoiceDetailService.baseUrl; };
            InvoiceDetailGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], InvoiceDetailGrid);
            return InvoiceDetailGrid;
        }(Serenity.EntityGrid));
        Sales.InvoiceDetailGrid = InvoiceDetailGrid;
    })(Sales = Indotalent.Sales || (Indotalent.Sales = {}));
})(Indotalent || (Indotalent = {}));
var Indotalent;
(function (Indotalent) {
    var Sales;
    (function (Sales) {
        var InvoicePaymentDialog = /** @class */ (function (_super) {
            __extends(InvoicePaymentDialog, _super);
            function InvoicePaymentDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Sales.InvoicePaymentForm(_this.idPrefix);
                return _this;
            }
            InvoicePaymentDialog.prototype.getFormKey = function () { return Sales.InvoicePaymentForm.formKey; };
            InvoicePaymentDialog.prototype.getIdProperty = function () { return Sales.InvoicePaymentRow.idProperty; };
            InvoicePaymentDialog.prototype.getLocalTextPrefix = function () { return Sales.InvoicePaymentRow.localTextPrefix; };
            InvoicePaymentDialog.prototype.getNameProperty = function () { return Sales.InvoicePaymentRow.nameProperty; };
            InvoicePaymentDialog.prototype.getService = function () { return Sales.InvoicePaymentService.baseUrl; };
            InvoicePaymentDialog.prototype.getDeletePermission = function () { return Sales.InvoicePaymentRow.deletePermission; };
            InvoicePaymentDialog.prototype.getInsertPermission = function () { return Sales.InvoicePaymentRow.insertPermission; };
            InvoicePaymentDialog.prototype.getUpdatePermission = function () { return Sales.InvoicePaymentRow.updatePermission; };
            InvoicePaymentDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], InvoicePaymentDialog);
            return InvoicePaymentDialog;
        }(Serenity.EntityDialog));
        Sales.InvoicePaymentDialog = InvoicePaymentDialog;
    })(Sales = Indotalent.Sales || (Indotalent.Sales = {}));
})(Indotalent || (Indotalent = {}));
var Indotalent;
(function (Indotalent) {
    var Sales;
    (function (Sales) {
        var InvoicePaymentGrid = /** @class */ (function (_super) {
            __extends(InvoicePaymentGrid, _super);
            function InvoicePaymentGrid(container) {
                return _super.call(this, container) || this;
            }
            InvoicePaymentGrid.prototype.getColumnsKey = function () { return Sales.InvoicePaymentColumns.columnsKey; };
            InvoicePaymentGrid.prototype.getDialogType = function () { return Sales.InvoicePaymentDialog; };
            InvoicePaymentGrid.prototype.getIdProperty = function () { return Sales.InvoicePaymentRow.idProperty; };
            InvoicePaymentGrid.prototype.getInsertPermission = function () { return Sales.InvoicePaymentRow.insertPermission; };
            InvoicePaymentGrid.prototype.getLocalTextPrefix = function () { return Sales.InvoicePaymentRow.localTextPrefix; };
            InvoicePaymentGrid.prototype.getService = function () { return Sales.InvoicePaymentService.baseUrl; };
            InvoicePaymentGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], InvoicePaymentGrid);
            return InvoicePaymentGrid;
        }(Serenity.EntityGrid));
        Sales.InvoicePaymentGrid = InvoicePaymentGrid;
    })(Sales = Indotalent.Sales || (Indotalent.Sales = {}));
})(Indotalent || (Indotalent = {}));
var Indotalent;
(function (Indotalent) {
    var Sales;
    (function (Sales) {
        var SalesChannelDialog = /** @class */ (function (_super) {
            __extends(SalesChannelDialog, _super);
            function SalesChannelDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Sales.SalesChannelForm(_this.idPrefix);
                return _this;
            }
            SalesChannelDialog.prototype.getFormKey = function () { return Sales.SalesChannelForm.formKey; };
            SalesChannelDialog.prototype.getIdProperty = function () { return Sales.SalesChannelRow.idProperty; };
            SalesChannelDialog.prototype.getLocalTextPrefix = function () { return Sales.SalesChannelRow.localTextPrefix; };
            SalesChannelDialog.prototype.getNameProperty = function () { return Sales.SalesChannelRow.nameProperty; };
            SalesChannelDialog.prototype.getService = function () { return Sales.SalesChannelService.baseUrl; };
            SalesChannelDialog.prototype.getDeletePermission = function () { return Sales.SalesChannelRow.deletePermission; };
            SalesChannelDialog.prototype.getInsertPermission = function () { return Sales.SalesChannelRow.insertPermission; };
            SalesChannelDialog.prototype.getUpdatePermission = function () { return Sales.SalesChannelRow.updatePermission; };
            SalesChannelDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], SalesChannelDialog);
            return SalesChannelDialog;
        }(Serenity.EntityDialog));
        Sales.SalesChannelDialog = SalesChannelDialog;
    })(Sales = Indotalent.Sales || (Indotalent.Sales = {}));
})(Indotalent || (Indotalent = {}));
var Indotalent;
(function (Indotalent) {
    var Sales;
    (function (Sales) {
        var SalesChannelGrid = /** @class */ (function (_super) {
            __extends(SalesChannelGrid, _super);
            function SalesChannelGrid(container) {
                return _super.call(this, container) || this;
            }
            SalesChannelGrid.prototype.getColumnsKey = function () { return Sales.SalesChannelColumns.columnsKey; };
            SalesChannelGrid.prototype.getDialogType = function () { return Sales.SalesChannelDialog; };
            SalesChannelGrid.prototype.getIdProperty = function () { return Sales.SalesChannelRow.idProperty; };
            SalesChannelGrid.prototype.getInsertPermission = function () { return Sales.SalesChannelRow.insertPermission; };
            SalesChannelGrid.prototype.getLocalTextPrefix = function () { return Sales.SalesChannelRow.localTextPrefix; };
            SalesChannelGrid.prototype.getService = function () { return Sales.SalesChannelService.baseUrl; };
            SalesChannelGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], SalesChannelGrid);
            return SalesChannelGrid;
        }(Serenity.EntityGrid));
        Sales.SalesChannelGrid = SalesChannelGrid;
    })(Sales = Indotalent.Sales || (Indotalent.Sales = {}));
})(Indotalent || (Indotalent = {}));
var Indotalent;
(function (Indotalent) {
    var Sales;
    (function (Sales) {
        var SalesOrderDialog = /** @class */ (function (_super) {
            __extends(SalesOrderDialog, _super);
            function SalesOrderDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Sales.SalesOrderForm(_this.idPrefix);
                return _this;
            }
            SalesOrderDialog.prototype.getFormKey = function () { return Sales.SalesOrderForm.formKey; };
            SalesOrderDialog.prototype.getIdProperty = function () { return Sales.SalesOrderRow.idProperty; };
            SalesOrderDialog.prototype.getLocalTextPrefix = function () { return Sales.SalesOrderRow.localTextPrefix; };
            SalesOrderDialog.prototype.getNameProperty = function () { return Sales.SalesOrderRow.nameProperty; };
            SalesOrderDialog.prototype.getService = function () { return Sales.SalesOrderService.baseUrl; };
            SalesOrderDialog.prototype.getDeletePermission = function () { return Sales.SalesOrderRow.deletePermission; };
            SalesOrderDialog.prototype.getInsertPermission = function () { return Sales.SalesOrderRow.insertPermission; };
            SalesOrderDialog.prototype.getUpdatePermission = function () { return Sales.SalesOrderRow.updatePermission; };
            SalesOrderDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], SalesOrderDialog);
            return SalesOrderDialog;
        }(Serenity.EntityDialog));
        Sales.SalesOrderDialog = SalesOrderDialog;
    })(Sales = Indotalent.Sales || (Indotalent.Sales = {}));
})(Indotalent || (Indotalent = {}));
var Indotalent;
(function (Indotalent) {
    var Sales;
    (function (Sales) {
        var SalesOrderGrid = /** @class */ (function (_super) {
            __extends(SalesOrderGrid, _super);
            function SalesOrderGrid(container) {
                return _super.call(this, container) || this;
            }
            SalesOrderGrid.prototype.getColumnsKey = function () { return Sales.SalesOrderColumns.columnsKey; };
            SalesOrderGrid.prototype.getDialogType = function () { return Sales.SalesOrderDialog; };
            SalesOrderGrid.prototype.getIdProperty = function () { return Sales.SalesOrderRow.idProperty; };
            SalesOrderGrid.prototype.getInsertPermission = function () { return Sales.SalesOrderRow.insertPermission; };
            SalesOrderGrid.prototype.getLocalTextPrefix = function () { return Sales.SalesOrderRow.localTextPrefix; };
            SalesOrderGrid.prototype.getService = function () { return Sales.SalesOrderService.baseUrl; };
            SalesOrderGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], SalesOrderGrid);
            return SalesOrderGrid;
        }(Serenity.EntityGrid));
        Sales.SalesOrderGrid = SalesOrderGrid;
    })(Sales = Indotalent.Sales || (Indotalent.Sales = {}));
})(Indotalent || (Indotalent = {}));
var Indotalent;
(function (Indotalent) {
    var Sales;
    (function (Sales) {
        var SalesOrderDetailDialog = /** @class */ (function (_super) {
            __extends(SalesOrderDetailDialog, _super);
            function SalesOrderDetailDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Sales.SalesOrderDetailForm(_this.idPrefix);
                return _this;
            }
            SalesOrderDetailDialog.prototype.getFormKey = function () { return Sales.SalesOrderDetailForm.formKey; };
            SalesOrderDetailDialog.prototype.getIdProperty = function () { return Sales.SalesOrderDetailRow.idProperty; };
            SalesOrderDetailDialog.prototype.getLocalTextPrefix = function () { return Sales.SalesOrderDetailRow.localTextPrefix; };
            SalesOrderDetailDialog.prototype.getService = function () { return Sales.SalesOrderDetailService.baseUrl; };
            SalesOrderDetailDialog.prototype.getDeletePermission = function () { return Sales.SalesOrderDetailRow.deletePermission; };
            SalesOrderDetailDialog.prototype.getInsertPermission = function () { return Sales.SalesOrderDetailRow.insertPermission; };
            SalesOrderDetailDialog.prototype.getUpdatePermission = function () { return Sales.SalesOrderDetailRow.updatePermission; };
            SalesOrderDetailDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], SalesOrderDetailDialog);
            return SalesOrderDetailDialog;
        }(Serenity.EntityDialog));
        Sales.SalesOrderDetailDialog = SalesOrderDetailDialog;
    })(Sales = Indotalent.Sales || (Indotalent.Sales = {}));
})(Indotalent || (Indotalent = {}));
var Indotalent;
(function (Indotalent) {
    var Sales;
    (function (Sales) {
        var SalesOrderDetailGrid = /** @class */ (function (_super) {
            __extends(SalesOrderDetailGrid, _super);
            function SalesOrderDetailGrid(container) {
                return _super.call(this, container) || this;
            }
            SalesOrderDetailGrid.prototype.getColumnsKey = function () { return Sales.SalesOrderDetailColumns.columnsKey; };
            SalesOrderDetailGrid.prototype.getDialogType = function () { return Sales.SalesOrderDetailDialog; };
            SalesOrderDetailGrid.prototype.getIdProperty = function () { return Sales.SalesOrderDetailRow.idProperty; };
            SalesOrderDetailGrid.prototype.getInsertPermission = function () { return Sales.SalesOrderDetailRow.insertPermission; };
            SalesOrderDetailGrid.prototype.getLocalTextPrefix = function () { return Sales.SalesOrderDetailRow.localTextPrefix; };
            SalesOrderDetailGrid.prototype.getService = function () { return Sales.SalesOrderDetailService.baseUrl; };
            SalesOrderDetailGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], SalesOrderDetailGrid);
            return SalesOrderDetailGrid;
        }(Serenity.EntityGrid));
        Sales.SalesOrderDetailGrid = SalesOrderDetailGrid;
    })(Sales = Indotalent.Sales || (Indotalent.Sales = {}));
})(Indotalent || (Indotalent = {}));
var Indotalent;
(function (Indotalent) {
    var Settings;
    (function (Settings) {
        var CashBankDialog = /** @class */ (function (_super) {
            __extends(CashBankDialog, _super);
            function CashBankDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Settings.CashBankForm(_this.idPrefix);
                return _this;
            }
            CashBankDialog.prototype.getFormKey = function () { return Settings.CashBankForm.formKey; };
            CashBankDialog.prototype.getIdProperty = function () { return Settings.CashBankRow.idProperty; };
            CashBankDialog.prototype.getLocalTextPrefix = function () { return Settings.CashBankRow.localTextPrefix; };
            CashBankDialog.prototype.getNameProperty = function () { return Settings.CashBankRow.nameProperty; };
            CashBankDialog.prototype.getService = function () { return Settings.CashBankService.baseUrl; };
            CashBankDialog.prototype.getDeletePermission = function () { return Settings.CashBankRow.deletePermission; };
            CashBankDialog.prototype.getInsertPermission = function () { return Settings.CashBankRow.insertPermission; };
            CashBankDialog.prototype.getUpdatePermission = function () { return Settings.CashBankRow.updatePermission; };
            CashBankDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], CashBankDialog);
            return CashBankDialog;
        }(Serenity.EntityDialog));
        Settings.CashBankDialog = CashBankDialog;
    })(Settings = Indotalent.Settings || (Indotalent.Settings = {}));
})(Indotalent || (Indotalent = {}));
var Indotalent;
(function (Indotalent) {
    var Settings;
    (function (Settings) {
        var CashBankGrid = /** @class */ (function (_super) {
            __extends(CashBankGrid, _super);
            function CashBankGrid(container) {
                return _super.call(this, container) || this;
            }
            CashBankGrid.prototype.getColumnsKey = function () { return Settings.CashBankColumns.columnsKey; };
            CashBankGrid.prototype.getDialogType = function () { return Settings.CashBankDialog; };
            CashBankGrid.prototype.getIdProperty = function () { return Settings.CashBankRow.idProperty; };
            CashBankGrid.prototype.getInsertPermission = function () { return Settings.CashBankRow.insertPermission; };
            CashBankGrid.prototype.getLocalTextPrefix = function () { return Settings.CashBankRow.localTextPrefix; };
            CashBankGrid.prototype.getService = function () { return Settings.CashBankService.baseUrl; };
            CashBankGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], CashBankGrid);
            return CashBankGrid;
        }(Serenity.EntityGrid));
        Settings.CashBankGrid = CashBankGrid;
    })(Settings = Indotalent.Settings || (Indotalent.Settings = {}));
})(Indotalent || (Indotalent = {}));
var Indotalent;
(function (Indotalent) {
    var Settings;
    (function (Settings) {
        var MyCompanyDialog = /** @class */ (function (_super) {
            __extends(MyCompanyDialog, _super);
            function MyCompanyDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Settings.MyCompanyForm(_this.idPrefix);
                return _this;
            }
            MyCompanyDialog.prototype.getFormKey = function () { return Settings.MyCompanyForm.formKey; };
            MyCompanyDialog.prototype.getIdProperty = function () { return Settings.MyCompanyRow.idProperty; };
            MyCompanyDialog.prototype.getLocalTextPrefix = function () { return Settings.MyCompanyRow.localTextPrefix; };
            MyCompanyDialog.prototype.getNameProperty = function () { return Settings.MyCompanyRow.nameProperty; };
            MyCompanyDialog.prototype.getService = function () { return Settings.MyCompanyService.baseUrl; };
            MyCompanyDialog.prototype.getDeletePermission = function () { return Settings.MyCompanyRow.deletePermission; };
            MyCompanyDialog.prototype.getInsertPermission = function () { return Settings.MyCompanyRow.insertPermission; };
            MyCompanyDialog.prototype.getUpdatePermission = function () { return Settings.MyCompanyRow.updatePermission; };
            MyCompanyDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], MyCompanyDialog);
            return MyCompanyDialog;
        }(Serenity.EntityDialog));
        Settings.MyCompanyDialog = MyCompanyDialog;
    })(Settings = Indotalent.Settings || (Indotalent.Settings = {}));
})(Indotalent || (Indotalent = {}));
var Indotalent;
(function (Indotalent) {
    var Settings;
    (function (Settings) {
        var MyCompanyGrid = /** @class */ (function (_super) {
            __extends(MyCompanyGrid, _super);
            function MyCompanyGrid(container) {
                return _super.call(this, container) || this;
            }
            MyCompanyGrid.prototype.getColumnsKey = function () { return Settings.MyCompanyColumns.columnsKey; };
            MyCompanyGrid.prototype.getDialogType = function () { return Settings.MyCompanyDialog; };
            MyCompanyGrid.prototype.getIdProperty = function () { return Settings.MyCompanyRow.idProperty; };
            MyCompanyGrid.prototype.getInsertPermission = function () { return Settings.MyCompanyRow.insertPermission; };
            MyCompanyGrid.prototype.getLocalTextPrefix = function () { return Settings.MyCompanyRow.localTextPrefix; };
            MyCompanyGrid.prototype.getService = function () { return Settings.MyCompanyService.baseUrl; };
            MyCompanyGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], MyCompanyGrid);
            return MyCompanyGrid;
        }(Serenity.EntityGrid));
        Settings.MyCompanyGrid = MyCompanyGrid;
    })(Settings = Indotalent.Settings || (Indotalent.Settings = {}));
})(Indotalent || (Indotalent = {}));
var Indotalent;
(function (Indotalent) {
    var Settings;
    (function (Settings) {
        var PurchaseTaxDialog = /** @class */ (function (_super) {
            __extends(PurchaseTaxDialog, _super);
            function PurchaseTaxDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Settings.PurchaseTaxForm(_this.idPrefix);
                return _this;
            }
            PurchaseTaxDialog.prototype.getFormKey = function () { return Settings.PurchaseTaxForm.formKey; };
            PurchaseTaxDialog.prototype.getIdProperty = function () { return Settings.PurchaseTaxRow.idProperty; };
            PurchaseTaxDialog.prototype.getLocalTextPrefix = function () { return Settings.PurchaseTaxRow.localTextPrefix; };
            PurchaseTaxDialog.prototype.getNameProperty = function () { return Settings.PurchaseTaxRow.nameProperty; };
            PurchaseTaxDialog.prototype.getService = function () { return Settings.PurchaseTaxService.baseUrl; };
            PurchaseTaxDialog.prototype.getDeletePermission = function () { return Settings.PurchaseTaxRow.deletePermission; };
            PurchaseTaxDialog.prototype.getInsertPermission = function () { return Settings.PurchaseTaxRow.insertPermission; };
            PurchaseTaxDialog.prototype.getUpdatePermission = function () { return Settings.PurchaseTaxRow.updatePermission; };
            PurchaseTaxDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], PurchaseTaxDialog);
            return PurchaseTaxDialog;
        }(Serenity.EntityDialog));
        Settings.PurchaseTaxDialog = PurchaseTaxDialog;
    })(Settings = Indotalent.Settings || (Indotalent.Settings = {}));
})(Indotalent || (Indotalent = {}));
var Indotalent;
(function (Indotalent) {
    var Settings;
    (function (Settings) {
        var PurchaseTaxGrid = /** @class */ (function (_super) {
            __extends(PurchaseTaxGrid, _super);
            function PurchaseTaxGrid(container) {
                return _super.call(this, container) || this;
            }
            PurchaseTaxGrid.prototype.getColumnsKey = function () { return Settings.PurchaseTaxColumns.columnsKey; };
            PurchaseTaxGrid.prototype.getDialogType = function () { return Settings.PurchaseTaxDialog; };
            PurchaseTaxGrid.prototype.getIdProperty = function () { return Settings.PurchaseTaxRow.idProperty; };
            PurchaseTaxGrid.prototype.getInsertPermission = function () { return Settings.PurchaseTaxRow.insertPermission; };
            PurchaseTaxGrid.prototype.getLocalTextPrefix = function () { return Settings.PurchaseTaxRow.localTextPrefix; };
            PurchaseTaxGrid.prototype.getService = function () { return Settings.PurchaseTaxService.baseUrl; };
            PurchaseTaxGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], PurchaseTaxGrid);
            return PurchaseTaxGrid;
        }(Serenity.EntityGrid));
        Settings.PurchaseTaxGrid = PurchaseTaxGrid;
    })(Settings = Indotalent.Settings || (Indotalent.Settings = {}));
})(Indotalent || (Indotalent = {}));
var Indotalent;
(function (Indotalent) {
    var Settings;
    (function (Settings) {
        var SalesTaxDialog = /** @class */ (function (_super) {
            __extends(SalesTaxDialog, _super);
            function SalesTaxDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Settings.SalesTaxForm(_this.idPrefix);
                return _this;
            }
            SalesTaxDialog.prototype.getFormKey = function () { return Settings.SalesTaxForm.formKey; };
            SalesTaxDialog.prototype.getIdProperty = function () { return Settings.SalesTaxRow.idProperty; };
            SalesTaxDialog.prototype.getLocalTextPrefix = function () { return Settings.SalesTaxRow.localTextPrefix; };
            SalesTaxDialog.prototype.getNameProperty = function () { return Settings.SalesTaxRow.nameProperty; };
            SalesTaxDialog.prototype.getService = function () { return Settings.SalesTaxService.baseUrl; };
            SalesTaxDialog.prototype.getDeletePermission = function () { return Settings.SalesTaxRow.deletePermission; };
            SalesTaxDialog.prototype.getInsertPermission = function () { return Settings.SalesTaxRow.insertPermission; };
            SalesTaxDialog.prototype.getUpdatePermission = function () { return Settings.SalesTaxRow.updatePermission; };
            SalesTaxDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], SalesTaxDialog);
            return SalesTaxDialog;
        }(Serenity.EntityDialog));
        Settings.SalesTaxDialog = SalesTaxDialog;
    })(Settings = Indotalent.Settings || (Indotalent.Settings = {}));
})(Indotalent || (Indotalent = {}));
var Indotalent;
(function (Indotalent) {
    var Settings;
    (function (Settings) {
        var SalesTaxGrid = /** @class */ (function (_super) {
            __extends(SalesTaxGrid, _super);
            function SalesTaxGrid(container) {
                return _super.call(this, container) || this;
            }
            SalesTaxGrid.prototype.getColumnsKey = function () { return Settings.SalesTaxColumns.columnsKey; };
            SalesTaxGrid.prototype.getDialogType = function () { return Settings.SalesTaxDialog; };
            SalesTaxGrid.prototype.getIdProperty = function () { return Settings.SalesTaxRow.idProperty; };
            SalesTaxGrid.prototype.getInsertPermission = function () { return Settings.SalesTaxRow.insertPermission; };
            SalesTaxGrid.prototype.getLocalTextPrefix = function () { return Settings.SalesTaxRow.localTextPrefix; };
            SalesTaxGrid.prototype.getService = function () { return Settings.SalesTaxService.baseUrl; };
            SalesTaxGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], SalesTaxGrid);
            return SalesTaxGrid;
        }(Serenity.EntityGrid));
        Settings.SalesTaxGrid = SalesTaxGrid;
    })(Settings = Indotalent.Settings || (Indotalent.Settings = {}));
})(Indotalent || (Indotalent = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSW5kb3RhbGVudC5XZWIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvQWRtaW5pc3RyYXRpb24uTGFuZ3VhZ2VDb2x1bW5zLnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL0FkbWluaXN0cmF0aW9uLkxhbmd1YWdlRm9ybS50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9BZG1pbmlzdHJhdGlvbi5MYW5ndWFnZVJvdy50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9BZG1pbmlzdHJhdGlvbi5MYW5ndWFnZVNlcnZpY2UudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvQWRtaW5pc3RyYXRpb24uUGVybWlzc2lvbktleXMudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvQWRtaW5pc3RyYXRpb24uUm9sZUNvbHVtbnMudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvQWRtaW5pc3RyYXRpb24uUm9sZUZvcm0udHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvQWRtaW5pc3RyYXRpb24uUm9sZVBlcm1pc3Npb25MaXN0UmVxdWVzdC50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9BZG1pbmlzdHJhdGlvbi5Sb2xlUGVybWlzc2lvbkxpc3RSZXNwb25zZS50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9BZG1pbmlzdHJhdGlvbi5Sb2xlUGVybWlzc2lvblJvdy50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9BZG1pbmlzdHJhdGlvbi5Sb2xlUGVybWlzc2lvblNlcnZpY2UudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvQWRtaW5pc3RyYXRpb24uUm9sZVBlcm1pc3Npb25VcGRhdGVSZXF1ZXN0LnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL0FkbWluaXN0cmF0aW9uLlJvbGVSb3cudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvQWRtaW5pc3RyYXRpb24uUm9sZVNlcnZpY2UudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvQWRtaW5pc3RyYXRpb24uVGVuYW50Q29sdW1ucy50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9BZG1pbmlzdHJhdGlvbi5UZW5hbnRGb3JtLnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL0FkbWluaXN0cmF0aW9uLlRlbmFudFJvdy50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9BZG1pbmlzdHJhdGlvbi5UZW5hbnRTZXJ2aWNlLnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL0FkbWluaXN0cmF0aW9uLlRyYW5zbGF0aW9uSXRlbS50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9BZG1pbmlzdHJhdGlvbi5UcmFuc2xhdGlvbkxpc3RSZXF1ZXN0LnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL0FkbWluaXN0cmF0aW9uLlRyYW5zbGF0aW9uU2VydmljZS50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9BZG1pbmlzdHJhdGlvbi5UcmFuc2xhdGlvblVwZGF0ZVJlcXVlc3QudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvQWRtaW5pc3RyYXRpb24uVXNlckNvbHVtbnMudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvQWRtaW5pc3RyYXRpb24uVXNlckZvcm0udHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvQWRtaW5pc3RyYXRpb24uVXNlclBlcm1pc3Npb25MaXN0UmVxdWVzdC50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9BZG1pbmlzdHJhdGlvbi5Vc2VyUGVybWlzc2lvblJvdy50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9BZG1pbmlzdHJhdGlvbi5Vc2VyUGVybWlzc2lvblNlcnZpY2UudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvQWRtaW5pc3RyYXRpb24uVXNlclBlcm1pc3Npb25VcGRhdGVSZXF1ZXN0LnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL0FkbWluaXN0cmF0aW9uLlVzZXJSb2xlTGlzdFJlcXVlc3QudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvQWRtaW5pc3RyYXRpb24uVXNlclJvbGVMaXN0UmVzcG9uc2UudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvQWRtaW5pc3RyYXRpb24uVXNlclJvbGVSb3cudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvQWRtaW5pc3RyYXRpb24uVXNlclJvbGVTZXJ2aWNlLnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL0FkbWluaXN0cmF0aW9uLlVzZXJSb2xlVXBkYXRlUmVxdWVzdC50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9BZG1pbmlzdHJhdGlvbi5Vc2VyUm93LnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL0FkbWluaXN0cmF0aW9uLlVzZXJTZXJ2aWNlLnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL0dldE5leHROdW1iZXJSZXF1ZXN0LnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL0dldE5leHROdW1iZXJSZXNwb25zZS50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9NZW1iZXJzaGlwLkNoYW5nZVBhc3N3b3JkRm9ybS50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9NZW1iZXJzaGlwLkNoYW5nZVBhc3N3b3JkUmVxdWVzdC50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9NZW1iZXJzaGlwLkZvcmdvdFBhc3N3b3JkRm9ybS50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9NZW1iZXJzaGlwLkZvcmdvdFBhc3N3b3JkUmVxdWVzdC50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9NZW1iZXJzaGlwLkxvZ2luRm9ybS50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9NZW1iZXJzaGlwLkxvZ2luUmVxdWVzdC50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9NZW1iZXJzaGlwLlJlc2V0UGFzc3dvcmRGb3JtLnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL01lbWJlcnNoaXAuUmVzZXRQYXNzd29yZFJlcXVlc3QudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvTWVtYmVyc2hpcC5TaWduVXBGb3JtLnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL01lbWJlcnNoaXAuU2lnblVwUmVxdWVzdC50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9NZXJjaGFuZGlzZS5CcmFuZENvbHVtbnMudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvTWVyY2hhbmRpc2UuQnJhbmRGb3JtLnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL01lcmNoYW5kaXNlLkJyYW5kUm93LnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL01lcmNoYW5kaXNlLkJyYW5kU2VydmljZS50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9NZXJjaGFuZGlzZS5DYXRlZ29yeUNvbHVtbnMudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvTWVyY2hhbmRpc2UuQ2F0ZWdvcnlGb3JtLnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL01lcmNoYW5kaXNlLkNhdGVnb3J5Um93LnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL01lcmNoYW5kaXNlLkNhdGVnb3J5U2VydmljZS50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9NZXJjaGFuZGlzZS5Db2xvdXJDb2x1bW5zLnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL01lcmNoYW5kaXNlLkNvbG91ckZvcm0udHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvTWVyY2hhbmRpc2UuQ29sb3VyUm93LnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL01lcmNoYW5kaXNlLkNvbG91clNlcnZpY2UudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvTWVyY2hhbmRpc2UuRmxhdm91ckNvbHVtbnMudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvTWVyY2hhbmRpc2UuRmxhdm91ckZvcm0udHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvTWVyY2hhbmRpc2UuRmxhdm91clJvdy50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9NZXJjaGFuZGlzZS5GbGF2b3VyU2VydmljZS50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9NZXJjaGFuZGlzZS5Qcm9kdWN0Q29sdW1ucy50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9NZXJjaGFuZGlzZS5Qcm9kdWN0Rm9ybS50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9NZXJjaGFuZGlzZS5Qcm9kdWN0Um93LnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL01lcmNoYW5kaXNlLlByb2R1Y3RTZXJ2aWNlLnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL01lcmNoYW5kaXNlLlNpemVDb2x1bW5zLnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL01lcmNoYW5kaXNlLlNpemVGb3JtLnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL01lcmNoYW5kaXNlLlNpemVSb3cudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvTWVyY2hhbmRpc2UuU2l6ZVNlcnZpY2UudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvTWVyY2hhbmRpc2UuVW9tQ29sdW1ucy50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9NZXJjaGFuZGlzZS5Vb21Gb3JtLnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL01lcmNoYW5kaXNlLlVvbVJvdy50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9NZXJjaGFuZGlzZS5Vb21TZXJ2aWNlLnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL1B1cmNoYXNlLkJpbGxDb2x1bW5zLnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL1B1cmNoYXNlLkJpbGxEZXRhaWxDb2x1bW5zLnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL1B1cmNoYXNlLkJpbGxEZXRhaWxGb3JtLnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL1B1cmNoYXNlLkJpbGxEZXRhaWxSb3cudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvUHVyY2hhc2UuQmlsbERldGFpbFNlcnZpY2UudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvUHVyY2hhc2UuQmlsbEZvcm0udHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvUHVyY2hhc2UuQmlsbFBheW1lbnRDb2x1bW5zLnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL1B1cmNoYXNlLkJpbGxQYXltZW50Rm9ybS50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9QdXJjaGFzZS5CaWxsUGF5bWVudFJvdy50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9QdXJjaGFzZS5CaWxsUGF5bWVudFNlcnZpY2UudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvUHVyY2hhc2UuQmlsbFJvdy50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9QdXJjaGFzZS5CaWxsU2VydmljZS50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9QdXJjaGFzZS5QdXJjaGFzZU9yZGVyQ29sdW1ucy50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9QdXJjaGFzZS5QdXJjaGFzZU9yZGVyRGV0YWlsQ29sdW1ucy50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9QdXJjaGFzZS5QdXJjaGFzZU9yZGVyRGV0YWlsRm9ybS50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9QdXJjaGFzZS5QdXJjaGFzZU9yZGVyRGV0YWlsUm93LnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL1B1cmNoYXNlLlB1cmNoYXNlT3JkZXJEZXRhaWxTZXJ2aWNlLnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL1B1cmNoYXNlLlB1cmNoYXNlT3JkZXJGb3JtLnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL1B1cmNoYXNlLlB1cmNoYXNlT3JkZXJSb3cudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvUHVyY2hhc2UuUHVyY2hhc2VPcmRlclNlcnZpY2UudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvUHVyY2hhc2UuVmVuZG9yQ29sdW1ucy50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9QdXJjaGFzZS5WZW5kb3JDb250YWN0Q29sdW1ucy50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9QdXJjaGFzZS5WZW5kb3JDb250YWN0Rm9ybS50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9QdXJjaGFzZS5WZW5kb3JDb250YWN0Um93LnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL1B1cmNoYXNlLlZlbmRvckNvbnRhY3RTZXJ2aWNlLnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL1B1cmNoYXNlLlZlbmRvckZvcm0udHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvUHVyY2hhc2UuVmVuZG9yUm93LnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL1B1cmNoYXNlLlZlbmRvclNlcnZpY2UudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvU2FsZXMuQ3VzdG9tZXJDb2x1bW5zLnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL1NhbGVzLkN1c3RvbWVyQ29udGFjdENvbHVtbnMudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvU2FsZXMuQ3VzdG9tZXJDb250YWN0Rm9ybS50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9TYWxlcy5DdXN0b21lckNvbnRhY3RSb3cudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvU2FsZXMuQ3VzdG9tZXJDb250YWN0U2VydmljZS50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9TYWxlcy5DdXN0b21lckZvcm0udHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvU2FsZXMuQ3VzdG9tZXJSb3cudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvU2FsZXMuQ3VzdG9tZXJTZXJ2aWNlLnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL1NhbGVzLkludm9pY2VDb2x1bW5zLnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL1NhbGVzLkludm9pY2VEZXRhaWxDb2x1bW5zLnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL1NhbGVzLkludm9pY2VEZXRhaWxGb3JtLnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL1NhbGVzLkludm9pY2VEZXRhaWxSb3cudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvU2FsZXMuSW52b2ljZURldGFpbFNlcnZpY2UudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvU2FsZXMuSW52b2ljZUZvcm0udHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvU2FsZXMuSW52b2ljZVBheW1lbnRDb2x1bW5zLnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL1NhbGVzLkludm9pY2VQYXltZW50Rm9ybS50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9TYWxlcy5JbnZvaWNlUGF5bWVudFJvdy50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9TYWxlcy5JbnZvaWNlUGF5bWVudFNlcnZpY2UudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvU2FsZXMuSW52b2ljZVJvdy50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9TYWxlcy5JbnZvaWNlU2VydmljZS50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9TYWxlcy5TYWxlc0NoYW5uZWxDb2x1bW5zLnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL1NhbGVzLlNhbGVzQ2hhbm5lbEZvcm0udHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvU2FsZXMuU2FsZXNDaGFubmVsUm93LnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL1NhbGVzLlNhbGVzQ2hhbm5lbFNlcnZpY2UudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvU2FsZXMuU2FsZXNPcmRlckNvbHVtbnMudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvU2FsZXMuU2FsZXNPcmRlckRldGFpbENvbHVtbnMudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvU2FsZXMuU2FsZXNPcmRlckRldGFpbEZvcm0udHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvU2FsZXMuU2FsZXNPcmRlckRldGFpbFJvdy50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9TYWxlcy5TYWxlc09yZGVyRGV0YWlsU2VydmljZS50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9TYWxlcy5TYWxlc09yZGVyRm9ybS50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9TYWxlcy5TYWxlc09yZGVyUm93LnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL1NhbGVzLlNhbGVzT3JkZXJTZXJ2aWNlLnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL1NjcmlwdFVzZXJEZWZpbml0aW9uLnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL1NldHRpbmdzLkNhc2hCYW5rQ29sdW1ucy50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9TZXR0aW5ncy5DYXNoQmFua0Zvcm0udHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvU2V0dGluZ3MuQ2FzaEJhbmtSb3cudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvU2V0dGluZ3MuQ2FzaEJhbmtTZXJ2aWNlLnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL1NldHRpbmdzLk15Q29tcGFueUNvbHVtbnMudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvU2V0dGluZ3MuTXlDb21wYW55Rm9ybS50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9TZXR0aW5ncy5NeUNvbXBhbnlSb3cudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvU2V0dGluZ3MuTXlDb21wYW55U2VydmljZS50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9TZXR0aW5ncy5QdXJjaGFzZVRheENvbHVtbnMudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvU2V0dGluZ3MuUHVyY2hhc2VUYXhGb3JtLnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL1NldHRpbmdzLlB1cmNoYXNlVGF4Um93LnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL1NldHRpbmdzLlB1cmNoYXNlVGF4U2VydmljZS50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9TZXR0aW5ncy5TYWxlc1RheENvbHVtbnMudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvU2V0dGluZ3MuU2FsZXNUYXhGb3JtLnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL1NldHRpbmdzLlNhbGVzVGF4Um93LnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL1NldHRpbmdzLlNhbGVzVGF4U2VydmljZS50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9UZXh0cy50cyIsIi4uLy4uLy4uL01vZHVsZXMvRGlhbG9nVXRpbHMudHMiLCIuLi8uLi8uLi9Nb2R1bGVzL0FkbWluaXN0cmF0aW9uL0xhbmd1YWdlL0xhbmd1YWdlRGlhbG9nLnRzIiwiLi4vLi4vLi4vTW9kdWxlcy9BZG1pbmlzdHJhdGlvbi9MYW5ndWFnZS9MYW5ndWFnZUdyaWQudHMiLCIuLi8uLi8uLi9Nb2R1bGVzL0FkbWluaXN0cmF0aW9uL1JvbGUvUm9sZURpYWxvZy50cyIsIi4uLy4uLy4uL01vZHVsZXMvQWRtaW5pc3RyYXRpb24vUm9sZS9Sb2xlR3JpZC50cyIsIi4uLy4uLy4uL01vZHVsZXMvQWRtaW5pc3RyYXRpb24vUm9sZVBlcm1pc3Npb24vUm9sZVBlcm1pc3Npb25EaWFsb2cudHMiLCIuLi8uLi8uLi9Nb2R1bGVzL0FkbWluaXN0cmF0aW9uL1RlbmFudC9UZW5hbnREaWFsb2cudHMiLCIuLi8uLi8uLi9Nb2R1bGVzL0FkbWluaXN0cmF0aW9uL1RlbmFudC9UZW5hbnRHcmlkLnRzIiwiLi4vLi4vLi4vTW9kdWxlcy9BZG1pbmlzdHJhdGlvbi9UcmFuc2xhdGlvbi9UcmFuc2xhdGlvbkdyaWQudHMiLCIuLi8uLi8uLi9Nb2R1bGVzL0FkbWluaXN0cmF0aW9uL1VzZXIvVXNlckRpYWxvZy50cyIsIi4uLy4uLy4uL01vZHVsZXMvQWRtaW5pc3RyYXRpb24vVXNlci9Vc2VyR3JpZC50cyIsIi4uLy4uLy4uL01vZHVsZXMvQWRtaW5pc3RyYXRpb24vVXNlci9BdXRoZW50aWNhdGlvbi9BdXRob3JpemF0aW9uLnRzIiwiLi4vLi4vLi4vTW9kdWxlcy9BZG1pbmlzdHJhdGlvbi9Vc2VyUGVybWlzc2lvbi9QZXJtaXNzaW9uQ2hlY2tFZGl0b3IudHMiLCIuLi8uLi8uLi9Nb2R1bGVzL0FkbWluaXN0cmF0aW9uL1VzZXJQZXJtaXNzaW9uL1VzZXJQZXJtaXNzaW9uRGlhbG9nLnRzIiwiLi4vLi4vLi4vTW9kdWxlcy9BZG1pbmlzdHJhdGlvbi9Vc2VyUm9sZS9Sb2xlQ2hlY2tFZGl0b3IudHMiLCIuLi8uLi8uLi9Nb2R1bGVzL0FkbWluaXN0cmF0aW9uL1VzZXJSb2xlL1VzZXJSb2xlRGlhbG9nLnRzIiwiLi4vLi4vLi4vTW9kdWxlcy9Db21tb24vSGVscGVycy9MYW5ndWFnZUxpc3QudHMiLCIuLi8uLi8uLi9Nb2R1bGVzL0NvbW1vbi9TY3JpcHRJbml0aWFsaXphdGlvbi50cyIsIi4uLy4uLy4uL01vZHVsZXMvQ29tbW9uL05hdmlnYXRpb24vU2lkZWJhclNlYXJjaC50cyIsIi4uLy4uLy4uL01vZHVsZXMvTWVtYmVyc2hpcC9BY2NvdW50L0xvZ2luUGFuZWwudHMiLCIuLi8uLi8uLi9Nb2R1bGVzL01lbWJlcnNoaXAvQWNjb3VudC9DaGFuZ2VQYXNzd29yZC9DaGFuZ2VQYXNzd29yZFBhbmVsLnRzIiwiLi4vLi4vLi4vTW9kdWxlcy9NZW1iZXJzaGlwL0FjY291bnQvRm9yZ290UGFzc3dvcmQvRm9yZ290UGFzc3dvcmRQYW5lbC50cyIsIi4uLy4uLy4uL01vZHVsZXMvTWVtYmVyc2hpcC9BY2NvdW50L1Jlc2V0UGFzc3dvcmQvUmVzZXRQYXNzd29yZFBhbmVsLnRzIiwiLi4vLi4vLi4vTW9kdWxlcy9NZW1iZXJzaGlwL0FjY291bnQvU2lnblVwL1NpZ25VcFBhbmVsLnRzIiwiLi4vLi4vLi4vTW9kdWxlcy9NZXJjaGFuZGlzZS9CcmFuZC9CcmFuZERpYWxvZy50cyIsIi4uLy4uLy4uL01vZHVsZXMvTWVyY2hhbmRpc2UvQnJhbmQvQnJhbmRHcmlkLnRzIiwiLi4vLi4vLi4vTW9kdWxlcy9NZXJjaGFuZGlzZS9DYXRlZ29yeS9DYXRlZ29yeURpYWxvZy50cyIsIi4uLy4uLy4uL01vZHVsZXMvTWVyY2hhbmRpc2UvQ2F0ZWdvcnkvQ2F0ZWdvcnlHcmlkLnRzIiwiLi4vLi4vLi4vTW9kdWxlcy9NZXJjaGFuZGlzZS9Db2xvdXIvQ29sb3VyRGlhbG9nLnRzIiwiLi4vLi4vLi4vTW9kdWxlcy9NZXJjaGFuZGlzZS9Db2xvdXIvQ29sb3VyR3JpZC50cyIsIi4uLy4uLy4uL01vZHVsZXMvTWVyY2hhbmRpc2UvRmxhdm91ci9GbGF2b3VyRGlhbG9nLnRzIiwiLi4vLi4vLi4vTW9kdWxlcy9NZXJjaGFuZGlzZS9GbGF2b3VyL0ZsYXZvdXJHcmlkLnRzIiwiLi4vLi4vLi4vTW9kdWxlcy9NZXJjaGFuZGlzZS9Qcm9kdWN0L1Byb2R1Y3REaWFsb2cudHMiLCIuLi8uLi8uLi9Nb2R1bGVzL01lcmNoYW5kaXNlL1Byb2R1Y3QvUHJvZHVjdEdyaWQudHMiLCIuLi8uLi8uLi9Nb2R1bGVzL01lcmNoYW5kaXNlL1NpemUvU2l6ZURpYWxvZy50cyIsIi4uLy4uLy4uL01vZHVsZXMvTWVyY2hhbmRpc2UvU2l6ZS9TaXplR3JpZC50cyIsIi4uLy4uLy4uL01vZHVsZXMvTWVyY2hhbmRpc2UvVW9tL1VvbURpYWxvZy50cyIsIi4uLy4uLy4uL01vZHVsZXMvTWVyY2hhbmRpc2UvVW9tL1VvbUdyaWQudHMiLCIuLi8uLi8uLi9Nb2R1bGVzL1B1cmNoYXNlL0JpbGwvQmlsbERpYWxvZy50cyIsIi4uLy4uLy4uL01vZHVsZXMvUHVyY2hhc2UvQmlsbC9CaWxsR3JpZC50cyIsIi4uLy4uLy4uL01vZHVsZXMvUHVyY2hhc2UvQmlsbERldGFpbC9CaWxsRGV0YWlsRGlhbG9nLnRzIiwiLi4vLi4vLi4vTW9kdWxlcy9QdXJjaGFzZS9CaWxsRGV0YWlsL0JpbGxEZXRhaWxHcmlkLnRzIiwiLi4vLi4vLi4vTW9kdWxlcy9QdXJjaGFzZS9CaWxsUGF5bWVudC9CaWxsUGF5bWVudERpYWxvZy50cyIsIi4uLy4uLy4uL01vZHVsZXMvUHVyY2hhc2UvQmlsbFBheW1lbnQvQmlsbFBheW1lbnRHcmlkLnRzIiwiLi4vLi4vLi4vTW9kdWxlcy9QdXJjaGFzZS9QdXJjaGFzZU9yZGVyL1B1cmNoYXNlT3JkZXJEaWFsb2cudHMiLCIuLi8uLi8uLi9Nb2R1bGVzL1B1cmNoYXNlL1B1cmNoYXNlT3JkZXIvUHVyY2hhc2VPcmRlckdyaWQudHMiLCIuLi8uLi8uLi9Nb2R1bGVzL1B1cmNoYXNlL1B1cmNoYXNlT3JkZXJEZXRhaWwvUHVyY2hhc2VPcmRlckRldGFpbERpYWxvZy50cyIsIi4uLy4uLy4uL01vZHVsZXMvUHVyY2hhc2UvUHVyY2hhc2VPcmRlckRldGFpbC9QdXJjaGFzZU9yZGVyRGV0YWlsR3JpZC50cyIsIi4uLy4uLy4uL01vZHVsZXMvUHVyY2hhc2UvVmVuZG9yL1ZlbmRvckRpYWxvZy50cyIsIi4uLy4uLy4uL01vZHVsZXMvUHVyY2hhc2UvVmVuZG9yL1ZlbmRvckdyaWQudHMiLCIuLi8uLi8uLi9Nb2R1bGVzL1B1cmNoYXNlL1ZlbmRvckNvbnRhY3QvVmVuZG9yQ29udGFjdERpYWxvZy50cyIsIi4uLy4uLy4uL01vZHVsZXMvUHVyY2hhc2UvVmVuZG9yQ29udGFjdC9WZW5kb3JDb250YWN0R3JpZC50cyIsIi4uLy4uLy4uL01vZHVsZXMvU2FsZXMvQ3VzdG9tZXIvQ3VzdG9tZXJEaWFsb2cudHMiLCIuLi8uLi8uLi9Nb2R1bGVzL1NhbGVzL0N1c3RvbWVyL0N1c3RvbWVyR3JpZC50cyIsIi4uLy4uLy4uL01vZHVsZXMvU2FsZXMvQ3VzdG9tZXJDb250YWN0L0N1c3RvbWVyQ29udGFjdERpYWxvZy50cyIsIi4uLy4uLy4uL01vZHVsZXMvU2FsZXMvQ3VzdG9tZXJDb250YWN0L0N1c3RvbWVyQ29udGFjdEVkaXRvci50cyIsIi4uLy4uLy4uL01vZHVsZXMvU2FsZXMvQ3VzdG9tZXJDb250YWN0L0N1c3RvbWVyQ29udGFjdEdyaWQudHMiLCIuLi8uLi8uLi9Nb2R1bGVzL1NhbGVzL0ludm9pY2UvSW52b2ljZURpYWxvZy50cyIsIi4uLy4uLy4uL01vZHVsZXMvU2FsZXMvSW52b2ljZS9JbnZvaWNlR3JpZC50cyIsIi4uLy4uLy4uL01vZHVsZXMvU2FsZXMvSW52b2ljZURldGFpbC9JbnZvaWNlRGV0YWlsRGlhbG9nLnRzIiwiLi4vLi4vLi4vTW9kdWxlcy9TYWxlcy9JbnZvaWNlRGV0YWlsL0ludm9pY2VEZXRhaWxHcmlkLnRzIiwiLi4vLi4vLi4vTW9kdWxlcy9TYWxlcy9JbnZvaWNlUGF5bWVudC9JbnZvaWNlUGF5bWVudERpYWxvZy50cyIsIi4uLy4uLy4uL01vZHVsZXMvU2FsZXMvSW52b2ljZVBheW1lbnQvSW52b2ljZVBheW1lbnRHcmlkLnRzIiwiLi4vLi4vLi4vTW9kdWxlcy9TYWxlcy9TYWxlc0NoYW5uZWwvU2FsZXNDaGFubmVsRGlhbG9nLnRzIiwiLi4vLi4vLi4vTW9kdWxlcy9TYWxlcy9TYWxlc0NoYW5uZWwvU2FsZXNDaGFubmVsR3JpZC50cyIsIi4uLy4uLy4uL01vZHVsZXMvU2FsZXMvU2FsZXNPcmRlci9TYWxlc09yZGVyRGlhbG9nLnRzIiwiLi4vLi4vLi4vTW9kdWxlcy9TYWxlcy9TYWxlc09yZGVyL1NhbGVzT3JkZXJHcmlkLnRzIiwiLi4vLi4vLi4vTW9kdWxlcy9TYWxlcy9TYWxlc09yZGVyRGV0YWlsL1NhbGVzT3JkZXJEZXRhaWxEaWFsb2cudHMiLCIuLi8uLi8uLi9Nb2R1bGVzL1NhbGVzL1NhbGVzT3JkZXJEZXRhaWwvU2FsZXNPcmRlckRldGFpbEdyaWQudHMiLCIuLi8uLi8uLi9Nb2R1bGVzL1NldHRpbmdzL0Nhc2hCYW5rL0Nhc2hCYW5rRGlhbG9nLnRzIiwiLi4vLi4vLi4vTW9kdWxlcy9TZXR0aW5ncy9DYXNoQmFuay9DYXNoQmFua0dyaWQudHMiLCIuLi8uLi8uLi9Nb2R1bGVzL1NldHRpbmdzL015Q29tcGFueS9NeUNvbXBhbnlEaWFsb2cudHMiLCIuLi8uLi8uLi9Nb2R1bGVzL1NldHRpbmdzL015Q29tcGFueS9NeUNvbXBhbnlHcmlkLnRzIiwiLi4vLi4vLi4vTW9kdWxlcy9TZXR0aW5ncy9QdXJjaGFzZVRheC9QdXJjaGFzZVRheERpYWxvZy50cyIsIi4uLy4uLy4uL01vZHVsZXMvU2V0dGluZ3MvUHVyY2hhc2VUYXgvUHVyY2hhc2VUYXhHcmlkLnRzIiwiLi4vLi4vLi4vTW9kdWxlcy9TZXR0aW5ncy9TYWxlc1RheC9TYWxlc1RheERpYWxvZy50cyIsIi4uLy4uLy4uL01vZHVsZXMvU2V0dGluZ3MvU2FsZXNUYXgvU2FsZXNUYXhHcmlkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLElBQVUsVUFBVSxDQUluQjtBQUpELFdBQVUsVUFBVTtJQUFDLElBQUEsY0FBYyxDQUlsQztJQUpvQixXQUFBLGNBQWM7UUFDL0I7WUFBQTtZQUVBLENBQUM7WUFEVSwwQkFBVSxHQUFHLHlCQUF5QixDQUFDO1lBQ2xELHNCQUFDO1NBQUEsQUFGRCxJQUVDO1FBRlksOEJBQWUsa0JBRTNCLENBQUE7SUFDTCxDQUFDLEVBSm9CLGNBQWMsR0FBZCx5QkFBYyxLQUFkLHlCQUFjLFFBSWxDO0FBQUQsQ0FBQyxFQUpTLFVBQVUsS0FBVixVQUFVLFFBSW5CO0FDSkQsSUFBVSxVQUFVLENBMEJuQjtBQTFCRCxXQUFVLFVBQVU7SUFBQyxJQUFB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QixFQUFDLENBQUMsRUFBQyxjQUFjLEVBQUMsQ0FBQyxFQUFDLFVBQVUsRUFBQyxDQUFDLEVBQUMsY0FBYyxFQUFDLENBQUMsRUFBQyxVQUFVLEVBQUMsQ0FBQyxFQUFDLEVBQUMsSUFBSSxFQUFDLEVBQUMsV0FBVyxFQUFDLENBQUMsRUFBQyxLQUFLLEVBQUMsQ0FBQyxFQUFDLFVBQVUsRUFBQyxDQUFDLEVBQUMsWUFBWSxFQUFDLENBQUMsRUFBQyxRQUFRLEVBQUMsQ0FBQyxFQUFDLGFBQWEsRUFBQyxDQUFDLEVBQUMsbUJBQW1CLEVBQUMsQ0FBQyxFQUFDLFFBQVEsRUFBQyxDQUFDLEVBQUMsZUFBZSxFQUFDLENBQUMsRUFBQyxZQUFZLEVBQUMsQ0FBQyxFQUFDLFlBQVksRUFBQyxDQUFDLEVBQUMsTUFBTSxFQUFDLENBQUMsRUFBQyxRQUFRLEVBQUMsQ0FBQyxFQUFDLFVBQVUsRUFBQyxDQUFDLEVBQUMsVUFBVSxFQUFDLENBQUMsRUFBQyxZQUFZLEVBQUMsQ0FBQyxFQUFDLE1BQU0sRUFBQyxDQUFDLEVBQUMsU0FBUyxFQUFDLENBQUMsRUFBQyxRQUFRLEVBQUMsQ0FBQyxFQUFDLEVBQUMsY0FBYyxFQUFDLEVBQUMsT0FBTyxFQUFDLENBQUMsRUFBQyxhQUFhLEVBQUMsQ0FBQyxFQUFDLElBQUksRUFBQyxDQUFDLEVBQUMsTUFBTSxFQUFDLENBQUMsRUFBQyxnQkFBZ0IsRUFBQyxDQUFDLEVBQUMsUUFBUSxFQUFDLENBQUMsRUFBQyxFQUFDLFFBQVEsRUFBQyxFQUFDLE1BQU0sRUFBQyxDQUFDLEVBQUMsSUFBSSxFQUFDLENBQUMsRUFBQyxNQUFNLEVBQUMsQ0FBQyxFQUFDLFVBQVUsRUFBQyxDQUFDLEVBQUMsUUFBUSxFQUFDLENBQUMsRUFBQyxFQUFDLEVBQUMsV0FBVyxFQUFDLEVBQUMsS0FBSyxFQUFDLEVBQUMsV0FBVyxFQUFDLENBQUMsRUFBQyxFQUFFLEVBQUMsQ0FBQyxFQUFDLFVBQVUsRUFBQyxDQUFDLEVBQUMsWUFBWSxFQUFDLENBQUMsRUFBQyxJQUFJLEVBQUMsQ0FBQyxFQUFDLFFBQVEsRUFBQyxDQUFDLEVBQUMsVUFBVSxFQUFDLENBQUMsRUFBQyxZQUFZLEVBQUMsQ0FBQyxFQUFDLEVBQUMsUUFBUSxFQUFDLEVBQUMsV0FBVyxFQUFDLENBQUMsRUFBQyxFQUFFLEVBQUMsQ0FBQyxFQUFDLFVBQVUsRUFBQyxDQUFDLEVBQUMsWUFBWSxFQUFDLENBQUMsRUFBQyxJQUFJLEVBQUMsQ0FBQyxFQUFDLFFBQVEsRUFBQyxDQUFDLEVBQUMsVUFBVSxFQUFDLENBQUMsRUFBQyxZQUFZLEVBQUMsQ0FBQyxFQUFDLEVBQUMsTUFBTSxFQUFDLEVBQUMsV0FBVyxFQUFDLENBQUMsRUFBQyxFQUFFLEVBQUMsQ0FBQyxFQUFDLFVBQVUsRUFBQyxDQUFDLEVBQUMsWUFBWSxFQUFDLENBQUMsRUFBQyxJQUFJLEVBQUMsQ0FBQyxFQUFDLFFBQVEsRUFBQyxDQUFDLEVBQUMsVUFBVSxFQUFDLENBQUMsRUFBQyxZQUFZLEVBQUMsQ0FBQyxFQUFDLEVBQUMsT0FBTyxFQUFDLEVBQUMsV0FBVyxFQUFDLENBQUMsRUFBQyxFQUFFLEVBQUMsQ0FBQyxFQUFDLFVBQVUsRUFBQyxDQUFDLEVBQUMsWUFBWSxFQUFDLENBQUMsRUFBQyxJQUFJLEVBQUMsQ0FBQyxFQUFDLFFBQVEsRUFBQyxDQUFDLEVBQUMsVUFBVSxFQUFDLENBQUMsRUFBQyxZQUFZLEVBQUMsQ0FBQyxFQUFDLEVBQUMsT0FBTyxFQUFDLEVBQUMsT0FBTyxFQUFDLENBQUMsRUFBQyxPQUFPLEVBQUMsQ0FBQyxFQUFDLFVBQVUsRUFBQyxDQUFDLEVBQUMsUUFBUSxFQUFDLENBQUMsRUFBQyxXQUFXLEVBQUMsQ0FBQyxFQUFDLFNBQVMsRUFBQyxDQUFDLEVBQUMsRUFBRSxFQUFDLENBQUMsRUFBQyxVQUFVLEVBQUMsQ0FBQyxFQUFDLFlBQVksRUFBQyxDQUFDLEVBQUMsWUFBWSxFQUFDLENBQUMsRUFBQyxJQUFJLEVBQUMsQ0FBQyxFQUFDLE9BQU8sRUFBQyxDQUFDLEVBQUMsYUFBYSxFQUFDLENBQUMsRUFBQyxhQUFhLEVBQUMsQ0FBQyxFQUFDLFVBQVUsRUFBQyxDQUFDLEVBQUMsVUFBVSxFQUFDLENBQUMsRUFBQyxNQUFNLEVBQUMsQ0FBQyxFQUFDLFFBQVEsRUFBQyxDQUFDLEVBQUMsS0FBSyxFQUFDLENBQUMsRUFBQyxVQUFVLEVBQUMsQ0FBQyxFQUFDLFlBQVksRUFBQyxDQUFDLEVBQUMsRUFBQyxJQUFJLEVBQUMsRUFBQyxXQUFXLEVBQUMsQ0FBQyxFQUFDLEVBQUUsRUFBQyxDQUFDLEVBQUMsVUFBVSxFQUFDLENBQUMsRUFBQyxZQUFZLEVBQUMsQ0FBQyxFQUFDLElBQUksRUFBQyxDQUFDLEVBQUMsUUFBUSxFQUFDLENBQUMsRUFBQyxVQUFVLEVBQUMsQ0FBQyxFQUFDLFVBQVUsRUFBQyxDQUFDLEVBQUMsWUFBWSxFQUFDLENBQUMsRUFBQyxFQUFDLEdBQUcsRUFBQyxFQUFDLFdBQVcsRUFBQyxDQUFDLEVBQUMsRUFBRSxFQUFDLENBQUMsRUFBQyxVQUFVLEVBQUMsQ0FBQyxFQUFDLFlBQVksRUFBQyxDQUFDLEVBQUMsSUFBSSxFQUFDLENBQUMsRUFBQyxRQUFRLEVBQUMsQ0FBQyxFQUFDLFVBQVUsRUFBQyxDQUFDLEVBQUMsVUFBVSxFQUFDLENBQUMsRUFBQyxZQUFZLEVBQUMsQ0FBQyxFQUFDLEVBQUMsRUFBQyxRQUFRLEVBQUMsRUFBQyxJQUFJLEVBQUMsRUFBQyxTQUFTLEVBQUMsQ0FBQyxFQUFDLFFBQVEsRUFBQyxDQUFDLEVBQUMsV0FBVyxFQUFDLENBQUMsRUFBQyxRQUFRLEVBQUMsQ0FBQyxFQUFDLHVCQUF1QixFQUFDLENBQUMsRUFBQyxFQUFFLEVBQUMsQ0FBQyxFQUFDLFVBQVUsRUFBQyxDQUFDLEVBQUMsWUFBWSxFQUFDLENBQUMsRUFBQyxNQUFNLEVBQUMsQ0FBQyxFQUFDLFdBQVcsRUFBQyxDQUFDLEVBQUMsZ0JBQWdCLEVBQUMsQ0FBQyxFQUFDLGVBQWUsRUFBQyxDQUFDLEVBQUMsUUFBUSxFQUFDLENBQUMsRUFBQyxTQUFTLEVBQUMsQ0FBQyxFQUFDLFFBQVEsRUFBQyxDQUFDLEVBQUMsS0FBSyxFQUFDLENBQUMsRUFBQyxVQUFVLEVBQUMsQ0FBQyxFQUFDLFlBQVksRUFBQyxDQUFDLEVBQUMsRUFBQyxVQUFVLEVBQUMsRUFBQyxTQUFTLEVBQUMsQ0FBQyxFQUFDLE1BQU0sRUFBQyxDQUFDLEVBQUMsUUFBUSxFQUFDLENBQUMsRUFBQyxFQUFFLEVBQUMsQ0FBQyxFQUFDLFVBQVUsRUFBQyxDQUFDLEVBQUMsWUFBWSxFQUFDLENBQUMsRUFBQyxLQUFLLEVBQUMsQ0FBQyxFQUFDLFNBQVMsRUFBQyxDQUFDLEVBQUMsR0FBRyxFQUFDLENBQUMsRUFBQyxRQUFRLEVBQUMsQ0FBQyxFQUFDLFNBQVMsRUFBQyxDQUFDLEVBQUMsYUFBYSxFQUFDLENBQUMsRUFBQyxRQUFRLEVBQUMsQ0FBQyxFQUFDLEtBQUssRUFBQyxDQUFDLEVBQUMsVUFBVSxFQUFDLENBQUMsRUFBQyxZQUFZLEVBQUMsQ0FBQyxFQUFDLEVBQUMsV0FBVyxFQUFDLEVBQUMsVUFBVSxFQUFDLENBQUMsRUFBQyxNQUFNLEVBQUMsQ0FBQyxFQUFDLFVBQVUsRUFBQyxDQUFDLEVBQUMsV0FBVyxFQUFDLENBQUMsRUFBQyxFQUFFLEVBQUMsQ0FBQyxFQUFDLFVBQVUsRUFBQyxDQUFDLEVBQUMsWUFBWSxFQUFDLENBQUMsRUFBQyxNQUFNLEVBQUMsQ0FBQyxFQUFDLGFBQWEsRUFBQyxDQUFDLEVBQUMsV0FBVyxFQUFDLENBQUMsRUFBQyxnQkFBZ0IsRUFBQyxDQUFDLEVBQUMsUUFBUSxFQUFDLENBQUMsRUFBQyxVQUFVLEVBQUMsQ0FBQyxFQUFDLFlBQVksRUFBQyxDQUFDLEVBQUMsRUFBQyxhQUFhLEVBQUMsRUFBQyxTQUFTLEVBQUMsQ0FBQyxFQUFDLFdBQVcsRUFBQyxDQUFDLEVBQUMsUUFBUSxFQUFDLENBQUMsRUFBQyxFQUFFLEVBQUMsQ0FBQyxFQUFDLFVBQVUsRUFBQyxDQUFDLEVBQUMsWUFBWSxFQUFDLENBQUMsRUFBQyxNQUFNLEVBQUMsQ0FBQyxFQUFDLFNBQVMsRUFBQyxDQUFDLEVBQUMsV0FBVyxFQUFDLENBQUMsRUFBQyxnQkFBZ0IsRUFBQyxDQUFDLEVBQUMsUUFBUSxFQUFDLENBQUMsRUFBQyxTQUFTLEVBQUMsQ0FBQyxFQUFDLFFBQVEsRUFBQyxDQUFDLEVBQUMsS0FBSyxFQUFDLENBQUMsRUFBQyxVQUFVLEVBQUMsQ0FBQyxFQUFDLFlBQVksRUFBQyxDQUFDLEVBQUMsUUFBUSxFQUFDLENBQUMsRUFBQyxFQUFDLG1CQUFtQixFQUFDLEVBQUMsU0FBUyxFQUFDLENBQUMsRUFBQyxRQUFRLEVBQUMsQ0FBQyxFQUFDLEVBQUUsRUFBQyxDQUFDLEVBQUMsVUFBVSxFQUFDLENBQUMsRUFBQyxZQUFZLEVBQUMsQ0FBQyxFQUFDLEtBQUssRUFBQyxDQUFDLEVBQUMsU0FBUyxFQUFDLENBQUMsRUFBQyxlQUFlLEVBQUMsQ0FBQyxFQUFDLEdBQUcsRUFBQyxDQUFDLEVBQUMsUUFBUSxFQUFDLENBQUMsRUFBQyxTQUFTLEVBQUMsQ0FBQyxFQUFDLGFBQWEsRUFBQyxDQUFDLEVBQUMsUUFBUSxFQUFDLENBQUMsRUFBQyxLQUFLLEVBQUMsQ0FBQyxFQUFDLFVBQVUsRUFBQyxDQUFDLEVBQUMsWUFBWSxFQUFDLENBQUMsRUFBQyxFQUFDLE1BQU0sRUFBQyxFQUFDLElBQUksRUFBQyxDQUFDLEVBQUMsV0FBVyxFQUFDLENBQUMsRUFBQyxLQUFLLEVBQUMsQ0FBQyxFQUFDLEVBQUUsRUFBQyxDQUFDLEVBQUMsVUFBVSxFQUFDLENBQUMsRUFBQyxZQUFZLEVBQUMsQ0FBQyxFQUFDLElBQUksRUFBQyxDQUFDLEVBQUMsS0FBSyxFQUFDLENBQUMsRUFBQyxLQUFLLEVBQUMsQ0FBQyxFQUFDLE1BQU0sRUFBQyxDQUFDLEVBQUMsUUFBUSxFQUFDLENBQUMsRUFBQyxVQUFVLEVBQUMsQ0FBQyxFQUFDLFlBQVksRUFBQyxDQUFDLEVBQUMsT0FBTyxFQUFDLENBQUMsRUFBQyxFQUFDLGFBQWEsRUFBQyxFQUFDLElBQUksRUFBQyxDQUFDLEVBQUMsV0FBVyxFQUFDLENBQUMsRUFBQyxLQUFLLEVBQUMsQ0FBQyxFQUFDLEVBQUUsRUFBQyxDQUFDLEVBQUMsVUFBVSxFQUFDLENBQUMsRUFBQyxZQUFZLEVBQUMsQ0FBQyxFQUFDLElBQUksRUFBQyxDQUFDLEVBQUMsS0FBSyxFQUFDLENBQUMsRUFBQyxLQUFLLEVBQUMsQ0FBQyxFQUFDLE1BQU0sRUFBQyxDQUFDLEVBQUMsUUFBUSxFQUFDLENBQUMsRUFBQyxVQUFVLEVBQUMsQ0FBQyxFQUFDLFlBQVksRUFBQyxDQUFDLEVBQUMsUUFBUSxFQUFDLENBQUMsRUFBQyxPQUFPLEVBQUMsQ0FBQyxFQUFDLEVBQUMsRUFBQyxLQUFLLEVBQUMsRUFBQyxRQUFRLEVBQUMsRUFBQyxJQUFJLEVBQUMsQ0FBQyxFQUFDLFdBQVcsRUFBQyxDQUFDLEVBQUMsV0FBVyxFQUFDLENBQUMsRUFBQyxLQUFLLEVBQUMsQ0FBQyxFQUFDLEVBQUUsRUFBQyxDQUFDLEVBQUMsSUFBSSxFQUFDLENBQUMsRUFBQyxLQUFLLEVBQUMsQ0FBQyxFQUFDLEtBQUssRUFBQyxDQUFDLEVBQUMsTUFBTSxFQUFDLENBQUMsRUFBQyxRQUFRLEVBQUMsQ0FBQyxFQUFDLFVBQVUsRUFBQyxDQUFDLEVBQUMsT0FBTyxFQUFDLENBQUMsRUFBQyxFQUFDLGVBQWUsRUFBQyxFQUFDLElBQUksRUFBQyxDQUFDLEVBQUMsVUFBVSxFQUFDLENBQUMsRUFBQyxXQUFXLEVBQUMsQ0FBQyxFQUFDLEtBQUssRUFBQyxDQUFDLEVBQUMsRUFBRSxFQUFDLENBQUMsRUFBQyxVQUFVLEVBQUMsQ0FBQyxFQUFDLFlBQVksRUFBQyxDQUFDLEVBQUMsSUFBSSxFQUFDLENBQUMsRUFBQyxLQUFLLEVBQUMsQ0FBQyxFQUFDLEtBQUssRUFBQyxDQUFDLEVBQUMsTUFBTSxFQUFDLENBQUMsRUFBQyxRQUFRLEVBQUMsQ0FBQyxFQUFDLFVBQVUsRUFBQyxDQUFDLEVBQUMsVUFBVSxFQUFDLENBQUMsRUFBQyxZQUFZLEVBQUMsQ0FBQyxFQUFDLE9BQU8sRUFBQyxDQUFDLEVBQUMsRUFBQyxPQUFPLEVBQUMsRUFBQyxTQUFTLEVBQUMsQ0FBQyxFQUFDLFdBQVcsRUFBQyxDQUFDLEVBQUMsUUFBUSxFQUFDLENBQUMsRUFBQyxFQUFFLEVBQUMsQ0FBQyxFQUFDLFVBQVUsRUFBQyxDQUFDLEVBQUMsWUFBWSxFQUFDLENBQUMsRUFBQyxXQUFXLEVBQUMsQ0FBQyxFQUFDLE1BQU0sRUFBQyxDQUFDLEVBQUMsV0FBVyxFQUFDLENBQUMsRUFBQyxVQUFVLEVBQUMsQ0FBQyxFQUFDLFlBQVksRUFBQyxDQUFDLEVBQUMsUUFBUSxFQUFDLENBQUMsRUFBQyxTQUFTLEVBQUMsQ0FBQyxFQUFDLFFBQVEsRUFBQyxDQUFDLEVBQUMsS0FBSyxFQUFDLENBQUMsRUFBQyxVQUFVLEVBQUMsQ0FBQyxFQUFDLFlBQVksRUFBQyxDQUFDLEVBQUMsRUFBQyxhQUFhLEVBQUMsRUFBQyxTQUFTLEVBQUMsQ0FBQyxFQUFDLFFBQVEsRUFBQyxDQUFDLEVBQUMsRUFBRSxFQUFDLENBQUMsRUFBQyxVQUFVLEVBQUMsQ0FBQyxFQUFDLFlBQVksRUFBQyxDQUFDLEVBQUMsU0FBUyxFQUFDLENBQUMsRUFBQyxLQUFLLEVBQUMsQ0FBQyxFQUFDLFNBQVMsRUFBQyxDQUFDLEVBQUMsR0FBRyxFQUFDLENBQUMsRUFBQyxRQUFRLEVBQUMsQ0FBQyxFQUFDLFNBQVMsRUFBQyxDQUFDLEVBQUMsYUFBYSxFQUFDLENBQUMsRUFBQyxRQUFRLEVBQUMsQ0FBQyxFQUFDLEtBQUssRUFBQyxDQUFDLEVBQUMsVUFBVSxFQUFDLENBQUMsRUFBQyxZQUFZLEVBQUMsQ0FBQyxFQUFDLEVBQUMsY0FBYyxFQUFDLEVBQUMsVUFBVSxFQUFDLENBQUMsRUFBQyxXQUFXLEVBQUMsQ0FBQyxFQUFDLEVBQUUsRUFBQyxDQUFDLEVBQUMsVUFBVSxFQUFDLENBQUMsRUFBQyxZQUFZLEVBQUMsQ0FBQyxFQUFDLGFBQWEsRUFBQyxDQUFDLEVBQUMsU0FBUyxFQUFDLENBQUMsRUFBQyxNQUFNLEVBQUMsQ0FBQyxFQUFDLGFBQWEsRUFBQyxDQUFDLEVBQUMsV0FBVyxFQUFDLENBQUMsRUFBQyxVQUFVLEVBQUMsQ0FBQyxFQUFDLFFBQVEsRUFBQyxDQUFDLEVBQUMsVUFBVSxFQUFDLENBQUMsRUFBQyxZQUFZLEVBQUMsQ0FBQyxFQUFDLEVBQUMsWUFBWSxFQUFDLEVBQUMsV0FBVyxFQUFDLENBQUMsRUFBQyxFQUFFLEVBQUMsQ0FBQyxFQUFDLFVBQVUsRUFBQyxDQUFDLEVBQUMsWUFBWSxFQUFDLENBQUMsRUFBQyxJQUFJLEVBQUMsQ0FBQyxFQUFDLFFBQVEsRUFBQyxDQUFDLEVBQUMsVUFBVSxFQUFDLENBQUMsRUFBQyxZQUFZLEVBQUMsQ0FBQyxFQUFDLEVBQUMsVUFBVSxFQUFDLEVBQUMsU0FBUyxFQUFDLENBQUMsRUFBQyxVQUFVLEVBQUMsQ0FBQyxFQUFDLFdBQVcsRUFBQyxDQUFDLEVBQUMsUUFBUSxFQUFDLENBQUMsRUFBQyxFQUFFLEVBQUMsQ0FBQyxFQUFDLFVBQVUsRUFBQyxDQUFDLEVBQUMsWUFBWSxFQUFDLENBQUMsRUFBQyxNQUFNLEVBQUMsQ0FBQyxFQUFDLFNBQVMsRUFBQyxDQUFDLEVBQUMsV0FBVyxFQUFDLENBQUMsRUFBQyxjQUFjLEVBQUMsQ0FBQyxFQUFDLFVBQVUsRUFBQyxDQUFDLEVBQUMsUUFBUSxFQUFDLENBQUMsRUFBQyxTQUFTLEVBQUMsQ0FBQyxFQUFDLFFBQVEsRUFBQyxDQUFDLEVBQUMsS0FBSyxFQUFDLENBQUMsRUFBQyxVQUFVLEVBQUMsQ0FBQyxFQUFDLFlBQVksRUFBQyxDQUFDLEVBQUMsRUFBQyxnQkFBZ0IsRUFBQyxFQUFDLFNBQVMsRUFBQyxDQUFDLEVBQUMsUUFBUSxFQUFDLENBQUMsRUFBQyxFQUFFLEVBQUMsQ0FBQyxFQUFDLFVBQVUsRUFBQyxDQUFDLEVBQUMsWUFBWSxFQUFDLENBQUMsRUFBQyxLQUFLLEVBQUMsQ0FBQyxFQUFDLFNBQVMsRUFBQyxDQUFDLEVBQUMsR0FBRyxFQUFDLENBQUMsRUFBQyxZQUFZLEVBQUMsQ0FBQyxFQUFDLFFBQVEsRUFBQyxDQUFDLEVBQUMsU0FBUyxFQUFDLENBQUMsRUFBQyxhQUFhLEVBQUMsQ0FBQyxFQUFDLFFBQVEsRUFBQyxDQUFDLEVBQUMsS0FBSyxFQUFDLENBQUMsRUFBQyxVQUFVLEVBQUMsQ0FBQyxFQUFDLFlBQVksRUFBQyxDQUFDLEVBQUMsRUFBQyxFQUFDLFFBQVEsRUFBQyxFQUFDLFFBQVEsRUFBQyxFQUFDLGFBQWEsRUFBQyxDQUFDLEVBQUMsSUFBSSxFQUFDLENBQUMsRUFBQyxXQUFXLEVBQUMsQ0FBQyxFQUFDLEtBQUssRUFBQyxDQUFDLEVBQUMsRUFBRSxFQUFDLENBQUMsRUFBQyxVQUFVLEVBQUMsQ0FBQyxFQUFDLFlBQVksRUFBQyxDQUFDLEVBQUMsSUFBSSxFQUFDLENBQUMsRUFBQyxLQUFLLEVBQUMsQ0FBQyxFQUFDLEtBQUssRUFBQyxDQUFDLEVBQUMsTUFBTSxFQUFDLENBQUMsRUFBQyxRQUFRLEVBQUMsQ0FBQyxFQUFDLFVBQVUsRUFBQyxDQUFDLEVBQUMsWUFBWSxFQUFDLENBQUMsRUFBQyxPQUFPLEVBQUMsQ0FBQyxFQUFDLEVBQUMsU0FBUyxFQUFDLEVBQUMsZ0JBQWdCLEVBQUMsQ0FBQyxFQUFDLGdCQUFnQixFQUFDLENBQUMsRUFBQyxpQkFBaUIsRUFBQyxDQUFDLEVBQUMsdUJBQXVCLEVBQUMsQ0FBQyxFQUFDLHVCQUF1QixFQUFDLENBQUMsRUFBQyx3QkFBd0IsRUFBQyxDQUFDLEVBQUMsSUFBSSxFQUFDLENBQUMsRUFBQyxRQUFRLEVBQUMsQ0FBQyxFQUFDLG9CQUFvQixFQUFDLENBQUMsRUFBQyxvQkFBb0IsRUFBQyxDQUFDLEVBQUMscUJBQXFCLEVBQUMsQ0FBQyxFQUFDLFdBQVcsRUFBQyxDQUFDLEVBQUMsS0FBSyxFQUFDLENBQUMsRUFBQyxVQUFVLEVBQUMsQ0FBQyxFQUFDLFlBQVksRUFBQyxDQUFDLEVBQUMsbUJBQW1CLEVBQUMsQ0FBQyxFQUFDLG1CQUFtQixFQUFDLENBQUMsRUFBQyxvQkFBb0IsRUFBQyxDQUFDLEVBQUMsMEJBQTBCLEVBQUMsQ0FBQyxFQUFDLDBCQUEwQixFQUFDLENBQUMsRUFBQywyQkFBMkIsRUFBQyxDQUFDLEVBQUMsV0FBVyxFQUFDLENBQUMsRUFBQyxLQUFLLEVBQUMsQ0FBQyxFQUFDLG1CQUFtQixFQUFDLENBQUMsRUFBQyxtQkFBbUIsRUFBQyxDQUFDLEVBQUMsb0JBQW9CLEVBQUMsQ0FBQyxFQUFDLG9CQUFvQixFQUFDLENBQUMsRUFBQyxvQkFBb0IsRUFBQyxDQUFDLEVBQUMscUJBQXFCLEVBQUMsQ0FBQyxFQUFDLGlCQUFpQixFQUFDLENBQUMsRUFBQyxpQkFBaUIsRUFBQyxDQUFDLEVBQUMsa0JBQWtCLEVBQUMsQ0FBQyxFQUFDLEtBQUssRUFBQyxDQUFDLEVBQUMsTUFBTSxFQUFDLENBQUMsRUFBQyxRQUFRLEVBQUMsQ0FBQyxFQUFDLFVBQVUsRUFBQyxDQUFDLEVBQUMsVUFBVSxFQUFDLENBQUMsRUFBQyxZQUFZLEVBQUMsQ0FBQyxFQUFDLGtCQUFrQixFQUFDLENBQUMsRUFBQyxrQkFBa0IsRUFBQyxDQUFDLEVBQUMsbUJBQW1CLEVBQUMsQ0FBQyxFQUFDLE9BQU8sRUFBQyxDQUFDLEVBQUMsRUFBQyxXQUFXLEVBQUMsRUFBQyxXQUFXLEVBQUMsQ0FBQyxFQUFDLEVBQUUsRUFBQyxDQUFDLEVBQUMsVUFBVSxFQUFDLENBQUMsRUFBQyxZQUFZLEVBQUMsQ0FBQyxFQUFDLElBQUksRUFBQyxDQUFDLEVBQUMsaUJBQWlCLEVBQUMsQ0FBQyxFQUFDLFFBQVEsRUFBQyxDQUFDLEVBQUMsVUFBVSxFQUFDLENBQUMsRUFBQyxZQUFZLEVBQUMsQ0FBQyxFQUFDLEVBQUMsUUFBUSxFQUFDLEVBQUMsV0FBVyxFQUFDLENBQUMsRUFBQyxFQUFFLEVBQUMsQ0FBQyxFQUFDLFVBQVUsRUFBQyxDQUFDLEVBQUMsWUFBWSxFQUFDLENBQUMsRUFBQyxJQUFJLEVBQUMsQ0FBQyxFQUFDLGlCQUFpQixFQUFDLENBQUMsRUFBQyxRQUFRLEVBQUMsQ0FBQyxFQUFDLFVBQVUsRUFBQyxDQUFDLEVBQUMsWUFBWSxFQUFDLENBQUMsRUFBQyxFQUFDLEVBQUMsRUFBQyxLQUFLLEVBQUMsRUFBQyxVQUFVLEVBQUMsRUFBQyxjQUFjLEVBQUMsRUFBQyxTQUFTLEVBQUMsQ0FBQyxFQUFDLFlBQVksRUFBQyxDQUFDLEVBQUMsT0FBTyxFQUFDLENBQUMsRUFBQyxFQUFDLGNBQWMsRUFBQyxFQUFDLFdBQVcsRUFBQyxDQUFDLEVBQUMsUUFBUSxFQUFDLENBQUMsRUFBQyxTQUFTLEVBQUMsQ0FBQyxFQUFDLFlBQVksRUFBQyxDQUFDLEVBQUMsT0FBTyxFQUFDLENBQUMsRUFBQyxFQUFDLEtBQUssRUFBQyxFQUFDLGNBQWMsRUFBQyxDQUFDLEVBQUMsY0FBYyxFQUFDLENBQUMsRUFBQyxZQUFZLEVBQUMsQ0FBQyxFQUFDLGtCQUFrQixFQUFDLENBQUMsRUFBQyxFQUFFLEVBQUMsQ0FBQyxFQUFDLFVBQVUsRUFBQyxDQUFDLEVBQUMsWUFBWSxFQUFDLENBQUMsRUFBQyxZQUFZLEVBQUMsQ0FBQyxFQUFDLEVBQUMsYUFBYSxFQUFDLEVBQUMsV0FBVyxFQUFDLENBQUMsRUFBQyxZQUFZLEVBQUMsQ0FBQyxFQUFDLFNBQVMsRUFBQyxDQUFDLEVBQUMsWUFBWSxFQUFDLENBQUMsRUFBQyxPQUFPLEVBQUMsQ0FBQyxFQUFDLEVBQUMsTUFBTSxFQUFDLEVBQUMsV0FBVyxFQUFDLENBQUMsRUFBQyxvQkFBb0IsRUFBQyxDQUFDLEVBQUMseUJBQXlCLEVBQUMsQ0FBQyxFQUFDLFdBQVcsRUFBQyxDQUFDLEVBQUMsWUFBWSxFQUFDLENBQUMsRUFBQyxlQUFlLEVBQUMsQ0FBQyxFQUFDLFdBQVcsRUFBQyxDQUFDLEVBQUMsS0FBSyxFQUFDLENBQUMsRUFBQyxRQUFRLEVBQUMsQ0FBQyxFQUFDLFNBQVMsRUFBQyxDQUFDLEVBQUMsUUFBUSxFQUFDLENBQUMsRUFBQyxZQUFZLEVBQUMsQ0FBQyxFQUFDLE9BQU8sRUFBQyxDQUFDLEVBQUMsRUFBQyxFQUFDLEVBQUMsVUFBVSxFQUFDLEVBQUMsVUFBVSxFQUFDLENBQUMsRUFBQyxTQUFTLEVBQUMsQ0FBQyxFQUFDLEVBQUMsSUFBSSxFQUFDLEVBQUMsWUFBWSxFQUFDLEVBQUMsaUJBQWlCLEVBQUMsQ0FBQyxFQUFDLFlBQVksRUFBQyxDQUFDLEVBQUMsZUFBZSxFQUFDLENBQUMsRUFBQyxXQUFXLEVBQUMsQ0FBQyxFQUFDLFNBQVMsRUFBQyxDQUFDLEVBQUMsRUFBQyxtQkFBbUIsRUFBQyxFQUFDLFdBQVcsRUFBQyxDQUFDLEVBQUMsVUFBVSxFQUFDLENBQUMsRUFBQyxFQUFDLGlCQUFpQixFQUFDLEVBQUMsa0JBQWtCLEVBQUMsQ0FBQyxFQUFDLGdCQUFnQixFQUFDLENBQUMsRUFBQyxrQkFBa0IsRUFBQyxDQUFDLEVBQUMsVUFBVSxFQUFDLENBQUMsRUFBQyxnQkFBZ0IsRUFBQyxDQUFDLEVBQUMsbUJBQW1CLEVBQUMsQ0FBQyxFQUFDLFlBQVksRUFBQyxDQUFDLEVBQUMsRUFBQyxTQUFTLEVBQUMsRUFBQyxrQkFBa0IsRUFBQyxDQUFDLEVBQUMsRUFBQyxNQUFNLEVBQUMsRUFBQyxlQUFlLEVBQUMsQ0FBQyxFQUFDLFVBQVUsRUFBQyxDQUFDLEVBQUMsWUFBWSxFQUFDLENBQUMsRUFBQyxlQUFlLEVBQUMsQ0FBQyxFQUFDLFFBQVEsRUFBQyxDQUFDLEVBQUMsS0FBSyxFQUFDLENBQUMsRUFBQyxVQUFVLEVBQUMsQ0FBQyxFQUFDLGVBQWUsRUFBQyxDQUFDLEVBQUMsU0FBUyxFQUFDLENBQUMsRUFBQyxjQUFjLEVBQUMsQ0FBQyxFQUFDLFVBQVUsRUFBQyxDQUFDLEVBQUMsZUFBZSxFQUFDLENBQUMsRUFBQyxXQUFXLEVBQUMsQ0FBQyxFQUFDLGdCQUFnQixFQUFDLENBQUMsRUFBQyxRQUFRLEVBQUMsQ0FBQyxFQUFDLGFBQWEsRUFBQyxDQUFDLEVBQUMsV0FBVyxFQUFDLENBQUMsRUFBQyxnQkFBZ0IsRUFBQyxDQUFDLEVBQUMsRUFBQyxvQkFBb0IsRUFBQyxFQUFDLFdBQVcsRUFBQyxDQUFDLEVBQUMsVUFBVSxFQUFDLENBQUMsRUFBQyxXQUFXLEVBQUMsQ0FBQyxFQUFDLEVBQUMsVUFBVSxFQUFDLEVBQUMscUJBQXFCLEVBQUMsQ0FBQyxFQUFDLGVBQWUsRUFBQyxDQUFDLEVBQUMsRUFBQyxvQkFBb0IsRUFBQyxFQUFDLFdBQVcsRUFBQyxDQUFDLEVBQUMsS0FBSyxFQUFDLENBQUMsRUFBQyxVQUFVLEVBQUMs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QUFZLGVBV3hCLENBQUE7SUFDTCxDQUFDLEVBZm9CLFFBQVEsR0FBUixtQkFBUSxLQUFSLG1CQUFRLFFBZTVCO0FBQUQsQ0FBQyxFQWZTLFVBQVUsS0FBVixVQUFVLFFBZW5CIiwic291cmNlc0NvbnRlbnQiOlsibmFtZXNwYWNlIEluZG90YWxlbnQuQWRtaW5pc3RyYXRpb24ge1xyXG4gICAgZXhwb3J0IGNsYXNzIExhbmd1YWdlQ29sdW1ucyB7XHJcbiAgICAgICAgc3RhdGljIGNvbHVtbnNLZXkgPSAnQWRtaW5pc3RyYXRpb24uTGFuZ3VhZ2UnO1xyXG4gICAgfVxyXG59XHJcbiIsIm5hbWVzcGFjZSBJbmRvdGFsZW50LkFkbWluaXN0cmF0aW9uIHtcclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgTGFuZ3VhZ2VGb3JtIHtcclxuICAgICAgICBMYW5ndWFnZUlkOiBTZXJlbml0eS5TdHJpbmdFZGl0b3I7XHJcbiAgICAgICAgTGFuZ3VhZ2VOYW1lOiBTZXJlbml0eS5TdHJpbmdFZGl0b3I7XHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IGNsYXNzIExhbmd1YWdlRm9ybSBleHRlbmRzIFNlcmVuaXR5LlByZWZpeGVkQ29udGV4dCB7XHJcbiAgICAgICAgc3RhdGljIGZvcm1LZXkgPSAnQWRtaW5pc3RyYXRpb24uTGFuZ3VhZ2UnO1xyXG4gICAgICAgIHByaXZhdGUgc3RhdGljIGluaXQ6IGJvb2xlYW47XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKHByZWZpeDogc3RyaW5nKSB7XHJcbiAgICAgICAgICAgIHN1cGVyKHByZWZpeCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoIUxhbmd1YWdlRm9ybS5pbml0KSAge1xyXG4gICAgICAgICAgICAgICAgTGFuZ3VhZ2VGb3JtLmluaXQgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBzID0gU2VyZW5pdHk7XHJcbiAgICAgICAgICAgICAgICB2YXIgdzAgPSBzLlN0cmluZ0VkaXRvcjtcclxuXHJcbiAgICAgICAgICAgICAgICBRLmluaXRGb3JtVHlwZShMYW5ndWFnZUZvcm0sIFtcclxuICAgICAgICAgICAgICAgICAgICAnTGFuZ3VhZ2VJZCcsIHcwLFxyXG4gICAgICAgICAgICAgICAgICAgICdMYW5ndWFnZU5hbWUnLCB3MFxyXG4gICAgICAgICAgICAgICAgXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwibmFtZXNwYWNlIEluZG90YWxlbnQuQWRtaW5pc3RyYXRpb24ge1xuICAgIGV4cG9ydCBpbnRlcmZhY2UgTGFuZ3VhZ2VSb3cge1xuICAgICAgICBJZD86IG51bWJlcjtcbiAgICAgICAgTGFuZ3VhZ2VJZD86IHN0cmluZztcbiAgICAgICAgTGFuZ3VhZ2VOYW1lPzogc3RyaW5nO1xuICAgICAgICBJbnNlcnRVc2VySWQ/OiBudW1iZXI7XG4gICAgICAgIEluc2VydERhdGU/OiBzdHJpbmc7XG4gICAgICAgIFVwZGF0ZVVzZXJJZD86IG51bWJlcjtcbiAgICAgICAgVXBkYXRlRGF0ZT86IHN0cmluZztcbiAgICB9XG5cbiAgICBleHBvcnQgbmFtZXNwYWNlIExhbmd1YWdlUm93IHtcbiAgICAgICAgZXhwb3J0IGNvbnN0IGlkUHJvcGVydHkgPSAnSWQnO1xuICAgICAgICBleHBvcnQgY29uc3QgbmFtZVByb3BlcnR5ID0gJ0xhbmd1YWdlTmFtZSc7XG4gICAgICAgIGV4cG9ydCBjb25zdCBsb2NhbFRleHRQcmVmaXggPSAnQWRtaW5pc3RyYXRpb24uTGFuZ3VhZ2UnO1xuICAgICAgICBleHBvcnQgY29uc3QgbG9va3VwS2V5ID0gJ0FkbWluaXN0cmF0aW9uLkxhbmd1YWdlJztcblxuICAgICAgICBleHBvcnQgZnVuY3Rpb24gZ2V0TG9va3VwKCk6IFEuTG9va3VwPExhbmd1YWdlUm93PiB7XG4gICAgICAgICAgICByZXR1cm4gUS5nZXRMb29rdXA8TGFuZ3VhZ2VSb3c+KCdBZG1pbmlzdHJhdGlvbi5MYW5ndWFnZScpO1xuICAgICAgICB9XG4gICAgICAgIGV4cG9ydCBjb25zdCBkZWxldGVQZXJtaXNzaW9uID0gJ0FkbWluaXN0cmF0aW9uOlRyYW5zbGF0aW9uJztcbiAgICAgICAgZXhwb3J0IGNvbnN0IGluc2VydFBlcm1pc3Npb24gPSAnQWRtaW5pc3RyYXRpb246VHJhbnNsYXRpb24nO1xuICAgICAgICBleHBvcnQgY29uc3QgcmVhZFBlcm1pc3Npb24gPSAnQWRtaW5pc3RyYXRpb246VHJhbnNsYXRpb24nO1xuICAgICAgICBleHBvcnQgY29uc3QgdXBkYXRlUGVybWlzc2lvbiA9ICdBZG1pbmlzdHJhdGlvbjpUcmFuc2xhdGlvbic7XG5cbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgY29uc3QgZW51bSBGaWVsZHMge1xuICAgICAgICAgICAgSWQgPSBcIklkXCIsXG4gICAgICAgICAgICBMYW5ndWFnZUlkID0gXCJMYW5ndWFnZUlkXCIsXG4gICAgICAgICAgICBMYW5ndWFnZU5hbWUgPSBcIkxhbmd1YWdlTmFtZVwiLFxuICAgICAgICAgICAgSW5zZXJ0VXNlcklkID0gXCJJbnNlcnRVc2VySWRcIixcbiAgICAgICAgICAgIEluc2VydERhdGUgPSBcIkluc2VydERhdGVcIixcbiAgICAgICAgICAgIFVwZGF0ZVVzZXJJZCA9IFwiVXBkYXRlVXNlcklkXCIsXG4gICAgICAgICAgICBVcGRhdGVEYXRlID0gXCJVcGRhdGVEYXRlXCJcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsIm5hbWVzcGFjZSBJbmRvdGFsZW50LkFkbWluaXN0cmF0aW9uIHtcclxuICAgIGV4cG9ydCBuYW1lc3BhY2UgTGFuZ3VhZ2VTZXJ2aWNlIHtcclxuICAgICAgICBleHBvcnQgY29uc3QgYmFzZVVybCA9ICdBZG1pbmlzdHJhdGlvbi9MYW5ndWFnZSc7XHJcblxyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIENyZWF0ZShyZXF1ZXN0OiBTZXJlbml0eS5TYXZlUmVxdWVzdDxMYW5ndWFnZVJvdz4sIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuU2F2ZVJlc3BvbnNlKSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gVXBkYXRlKHJlcXVlc3Q6IFNlcmVuaXR5LlNhdmVSZXF1ZXN0PExhbmd1YWdlUm93Piwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5TYXZlUmVzcG9uc2UpID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBEZWxldGUocmVxdWVzdDogU2VyZW5pdHkuRGVsZXRlUmVxdWVzdCwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5EZWxldGVSZXNwb25zZSkgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIFJldHJpZXZlKHJlcXVlc3Q6IFNlcmVuaXR5LlJldHJpZXZlUmVxdWVzdCwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5SZXRyaWV2ZVJlc3BvbnNlPExhbmd1YWdlUm93PikgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIExpc3QocmVxdWVzdDogU2VyZW5pdHkuTGlzdFJlcXVlc3QsIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuTGlzdFJlc3BvbnNlPExhbmd1YWdlUm93PikgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG5cclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBjb25zdCBlbnVtIE1ldGhvZHMge1xyXG4gICAgICAgICAgICBDcmVhdGUgPSBcIkFkbWluaXN0cmF0aW9uL0xhbmd1YWdlL0NyZWF0ZVwiLFxyXG4gICAgICAgICAgICBVcGRhdGUgPSBcIkFkbWluaXN0cmF0aW9uL0xhbmd1YWdlL1VwZGF0ZVwiLFxyXG4gICAgICAgICAgICBEZWxldGUgPSBcIkFkbWluaXN0cmF0aW9uL0xhbmd1YWdlL0RlbGV0ZVwiLFxyXG4gICAgICAgICAgICBSZXRyaWV2ZSA9IFwiQWRtaW5pc3RyYXRpb24vTGFuZ3VhZ2UvUmV0cmlldmVcIixcclxuICAgICAgICAgICAgTGlzdCA9IFwiQWRtaW5pc3RyYXRpb24vTGFuZ3VhZ2UvTGlzdFwiXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBbXHJcbiAgICAgICAgICAgICdDcmVhdGUnLCBcclxuICAgICAgICAgICAgJ1VwZGF0ZScsIFxyXG4gICAgICAgICAgICAnRGVsZXRlJywgXHJcbiAgICAgICAgICAgICdSZXRyaWV2ZScsIFxyXG4gICAgICAgICAgICAnTGlzdCdcclxuICAgICAgICBdLmZvckVhY2goeCA9PiB7XHJcbiAgICAgICAgICAgICg8YW55Pkxhbmd1YWdlU2VydmljZSlbeF0gPSBmdW5jdGlvbiAociwgcywgbykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFEuc2VydmljZVJlcXVlc3QoYmFzZVVybCArICcvJyArIHgsIHIsIHMsIG8pO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbiIsIm5hbWVzcGFjZSBJbmRvdGFsZW50LkFkbWluaXN0cmF0aW9uIHtcbiAgICBleHBvcnQgbmFtZXNwYWNlIFBlcm1pc3Npb25LZXlzIHtcbiAgICAgICAgZXhwb3J0IGNvbnN0IFNlY3VyaXR5ID0gXCJBZG1pbmlzdHJhdGlvbjpTZWN1cml0eVwiO1xuICAgICAgICBleHBvcnQgY29uc3QgVHJhbnNsYXRpb24gPSBcIkFkbWluaXN0cmF0aW9uOlRyYW5zbGF0aW9uXCI7XG4gICAgICAgIGV4cG9ydCBjb25zdCBUZW5hbnQgPSBcIkFkbWluaXN0cmF0aW9uOlRlbmFudFwiO1xuICAgIH1cbn1cbiIsIm5hbWVzcGFjZSBJbmRvdGFsZW50LkFkbWluaXN0cmF0aW9uIHtcclxuICAgIGV4cG9ydCBjbGFzcyBSb2xlQ29sdW1ucyB7XHJcbiAgICAgICAgc3RhdGljIGNvbHVtbnNLZXkgPSAnQWRtaW5pc3RyYXRpb24uUm9sZSc7XHJcbiAgICB9XHJcbn1cclxuIiwibmFtZXNwYWNlIEluZG90YWxlbnQuQWRtaW5pc3RyYXRpb24ge1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBSb2xlRm9ybSB7XHJcbiAgICAgICAgUm9sZU5hbWU6IFNlcmVuaXR5LlN0cmluZ0VkaXRvcjtcclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgY2xhc3MgUm9sZUZvcm0gZXh0ZW5kcyBTZXJlbml0eS5QcmVmaXhlZENvbnRleHQge1xyXG4gICAgICAgIHN0YXRpYyBmb3JtS2V5ID0gJ0FkbWluaXN0cmF0aW9uLlJvbGUnO1xyXG4gICAgICAgIHByaXZhdGUgc3RhdGljIGluaXQ6IGJvb2xlYW47XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKHByZWZpeDogc3RyaW5nKSB7XHJcbiAgICAgICAgICAgIHN1cGVyKHByZWZpeCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoIVJvbGVGb3JtLmluaXQpICB7XHJcbiAgICAgICAgICAgICAgICBSb2xlRm9ybS5pbml0ID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgcyA9IFNlcmVuaXR5O1xyXG4gICAgICAgICAgICAgICAgdmFyIHcwID0gcy5TdHJpbmdFZGl0b3I7XHJcblxyXG4gICAgICAgICAgICAgICAgUS5pbml0Rm9ybVR5cGUoUm9sZUZvcm0sIFtcclxuICAgICAgICAgICAgICAgICAgICAnUm9sZU5hbWUnLCB3MFxyXG4gICAgICAgICAgICAgICAgXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwibmFtZXNwYWNlIEluZG90YWxlbnQuQWRtaW5pc3RyYXRpb24ge1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBSb2xlUGVybWlzc2lvbkxpc3RSZXF1ZXN0IGV4dGVuZHMgU2VyZW5pdHkuU2VydmljZVJlcXVlc3Qge1xyXG4gICAgICAgIFJvbGVJRD86IG51bWJlcjtcclxuICAgICAgICBNb2R1bGU/OiBzdHJpbmc7XHJcbiAgICAgICAgU3VibW9kdWxlPzogc3RyaW5nO1xyXG4gICAgfVxyXG59XHJcblxyXG4iLCJuYW1lc3BhY2UgSW5kb3RhbGVudC5BZG1pbmlzdHJhdGlvbiB7XHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIFJvbGVQZXJtaXNzaW9uTGlzdFJlc3BvbnNlIGV4dGVuZHMgU2VyZW5pdHkuTGlzdFJlc3BvbnNlPHN0cmluZz4ge1xyXG4gICAgfVxyXG59XHJcblxyXG4iLCJuYW1lc3BhY2UgSW5kb3RhbGVudC5BZG1pbmlzdHJhdGlvbiB7XHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIFJvbGVQZXJtaXNzaW9uUm93IHtcclxuICAgICAgICBSb2xlUGVybWlzc2lvbklkPzogbnVtYmVyO1xyXG4gICAgICAgIFJvbGVJZD86IG51bWJlcjtcclxuICAgICAgICBQZXJtaXNzaW9uS2V5Pzogc3RyaW5nO1xyXG4gICAgICAgIFJvbGVSb2xlTmFtZT86IHN0cmluZztcclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgbmFtZXNwYWNlIFJvbGVQZXJtaXNzaW9uUm93IHtcclxuICAgICAgICBleHBvcnQgY29uc3QgaWRQcm9wZXJ0eSA9ICdSb2xlUGVybWlzc2lvbklkJztcclxuICAgICAgICBleHBvcnQgY29uc3QgbmFtZVByb3BlcnR5ID0gJ1Blcm1pc3Npb25LZXknO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBsb2NhbFRleHRQcmVmaXggPSAnQWRtaW5pc3RyYXRpb24uUm9sZVBlcm1pc3Npb24nO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBkZWxldGVQZXJtaXNzaW9uID0gJ0FkbWluaXN0cmF0aW9uOlNlY3VyaXR5JztcclxuICAgICAgICBleHBvcnQgY29uc3QgaW5zZXJ0UGVybWlzc2lvbiA9ICdBZG1pbmlzdHJhdGlvbjpTZWN1cml0eSc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IHJlYWRQZXJtaXNzaW9uID0gJ0FkbWluaXN0cmF0aW9uOlNlY3VyaXR5JztcclxuICAgICAgICBleHBvcnQgY29uc3QgdXBkYXRlUGVybWlzc2lvbiA9ICdBZG1pbmlzdHJhdGlvbjpTZWN1cml0eSc7XHJcblxyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGNvbnN0IGVudW0gRmllbGRzIHtcclxuICAgICAgICAgICAgUm9sZVBlcm1pc3Npb25JZCA9IFwiUm9sZVBlcm1pc3Npb25JZFwiLFxyXG4gICAgICAgICAgICBSb2xlSWQgPSBcIlJvbGVJZFwiLFxyXG4gICAgICAgICAgICBQZXJtaXNzaW9uS2V5ID0gXCJQZXJtaXNzaW9uS2V5XCIsXHJcbiAgICAgICAgICAgIFJvbGVSb2xlTmFtZSA9IFwiUm9sZVJvbGVOYW1lXCJcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwibmFtZXNwYWNlIEluZG90YWxlbnQuQWRtaW5pc3RyYXRpb24ge1xyXG4gICAgZXhwb3J0IG5hbWVzcGFjZSBSb2xlUGVybWlzc2lvblNlcnZpY2Uge1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBiYXNlVXJsID0gJ0FkbWluaXN0cmF0aW9uL1JvbGVQZXJtaXNzaW9uJztcclxuXHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gVXBkYXRlKHJlcXVlc3Q6IFJvbGVQZXJtaXNzaW9uVXBkYXRlUmVxdWVzdCwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5TYXZlUmVzcG9uc2UpID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBMaXN0KHJlcXVlc3Q6IFJvbGVQZXJtaXNzaW9uTGlzdFJlcXVlc3QsIG9uU3VjY2Vzcz86IChyZXNwb25zZTogUm9sZVBlcm1pc3Npb25MaXN0UmVzcG9uc2UpID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuXHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgY29uc3QgZW51bSBNZXRob2RzIHtcclxuICAgICAgICAgICAgVXBkYXRlID0gXCJBZG1pbmlzdHJhdGlvbi9Sb2xlUGVybWlzc2lvbi9VcGRhdGVcIixcclxuICAgICAgICAgICAgTGlzdCA9IFwiQWRtaW5pc3RyYXRpb24vUm9sZVBlcm1pc3Npb24vTGlzdFwiXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBbXHJcbiAgICAgICAgICAgICdVcGRhdGUnLCBcclxuICAgICAgICAgICAgJ0xpc3QnXHJcbiAgICAgICAgXS5mb3JFYWNoKHggPT4ge1xyXG4gICAgICAgICAgICAoPGFueT5Sb2xlUGVybWlzc2lvblNlcnZpY2UpW3hdID0gZnVuY3Rpb24gKHIsIHMsIG8pIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBRLnNlcnZpY2VSZXF1ZXN0KGJhc2VVcmwgKyAnLycgKyB4LCByLCBzLCBvKTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG4iLCJuYW1lc3BhY2UgSW5kb3RhbGVudC5BZG1pbmlzdHJhdGlvbiB7XHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIFJvbGVQZXJtaXNzaW9uVXBkYXRlUmVxdWVzdCBleHRlbmRzIFNlcmVuaXR5LlNlcnZpY2VSZXF1ZXN0IHtcclxuICAgICAgICBSb2xlSUQ/OiBudW1iZXI7XHJcbiAgICAgICAgTW9kdWxlPzogc3RyaW5nO1xyXG4gICAgICAgIFN1Ym1vZHVsZT86IHN0cmluZztcclxuICAgICAgICBQZXJtaXNzaW9ucz86IHN0cmluZ1tdO1xyXG4gICAgfVxyXG59XHJcblxyXG4iLCJuYW1lc3BhY2UgSW5kb3RhbGVudC5BZG1pbmlzdHJhdGlvbiB7XG4gICAgZXhwb3J0IGludGVyZmFjZSBSb2xlUm93IHtcbiAgICAgICAgUm9sZUlkPzogbnVtYmVyO1xuICAgICAgICBSb2xlTmFtZT86IHN0cmluZztcbiAgICAgICAgSW5zZXJ0VXNlcklkPzogbnVtYmVyO1xuICAgICAgICBJbnNlcnREYXRlPzogc3RyaW5nO1xuICAgICAgICBVcGRhdGVVc2VySWQ/OiBudW1iZXI7XG4gICAgICAgIFVwZGF0ZURhdGU/OiBzdHJpbmc7XG4gICAgfVxuXG4gICAgZXhwb3J0IG5hbWVzcGFjZSBSb2xlUm93IHtcbiAgICAgICAgZXhwb3J0IGNvbnN0IGlkUHJvcGVydHkgPSAnUm9sZUlkJztcbiAgICAgICAgZXhwb3J0IGNvbnN0IG5hbWVQcm9wZXJ0eSA9ICdSb2xlTmFtZSc7XG4gICAgICAgIGV4cG9ydCBjb25zdCBsb2NhbFRleHRQcmVmaXggPSAnQWRtaW5pc3RyYXRpb24uUm9sZSc7XG4gICAgICAgIGV4cG9ydCBjb25zdCBsb29rdXBLZXkgPSAnQWRtaW5pc3RyYXRpb24uUm9sZSc7XG5cbiAgICAgICAgZXhwb3J0IGZ1bmN0aW9uIGdldExvb2t1cCgpOiBRLkxvb2t1cDxSb2xlUm93PiB7XG4gICAgICAgICAgICByZXR1cm4gUS5nZXRMb29rdXA8Um9sZVJvdz4oJ0FkbWluaXN0cmF0aW9uLlJvbGUnKTtcbiAgICAgICAgfVxuICAgICAgICBleHBvcnQgY29uc3QgZGVsZXRlUGVybWlzc2lvbiA9ICdBZG1pbmlzdHJhdGlvbjpTZWN1cml0eSc7XG4gICAgICAgIGV4cG9ydCBjb25zdCBpbnNlcnRQZXJtaXNzaW9uID0gJ0FkbWluaXN0cmF0aW9uOlNlY3VyaXR5JztcbiAgICAgICAgZXhwb3J0IGNvbnN0IHJlYWRQZXJtaXNzaW9uID0gJ0FkbWluaXN0cmF0aW9uOlNlY3VyaXR5JztcbiAgICAgICAgZXhwb3J0IGNvbnN0IHVwZGF0ZVBlcm1pc3Npb24gPSAnQWRtaW5pc3RyYXRpb246U2VjdXJpdHknO1xuXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGNvbnN0IGVudW0gRmllbGRzIHtcbiAgICAgICAgICAgIFJvbGVJZCA9IFwiUm9sZUlkXCIsXG4gICAgICAgICAgICBSb2xlTmFtZSA9IFwiUm9sZU5hbWVcIixcbiAgICAgICAgICAgIEluc2VydFVzZXJJZCA9IFwiSW5zZXJ0VXNlcklkXCIsXG4gICAgICAgICAgICBJbnNlcnREYXRlID0gXCJJbnNlcnREYXRlXCIsXG4gICAgICAgICAgICBVcGRhdGVVc2VySWQgPSBcIlVwZGF0ZVVzZXJJZFwiLFxuICAgICAgICAgICAgVXBkYXRlRGF0ZSA9IFwiVXBkYXRlRGF0ZVwiXG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJuYW1lc3BhY2UgSW5kb3RhbGVudC5BZG1pbmlzdHJhdGlvbiB7XHJcbiAgICBleHBvcnQgbmFtZXNwYWNlIFJvbGVTZXJ2aWNlIHtcclxuICAgICAgICBleHBvcnQgY29uc3QgYmFzZVVybCA9ICdBZG1pbmlzdHJhdGlvbi9Sb2xlJztcclxuXHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gQ3JlYXRlKHJlcXVlc3Q6IFNlcmVuaXR5LlNhdmVSZXF1ZXN0PFJvbGVSb3c+LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5LlNhdmVSZXNwb25zZSkgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIFVwZGF0ZShyZXF1ZXN0OiBTZXJlbml0eS5TYXZlUmVxdWVzdDxSb2xlUm93Piwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5TYXZlUmVzcG9uc2UpID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBEZWxldGUocmVxdWVzdDogU2VyZW5pdHkuRGVsZXRlUmVxdWVzdCwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5EZWxldGVSZXNwb25zZSkgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIFJldHJpZXZlKHJlcXVlc3Q6IFNlcmVuaXR5LlJldHJpZXZlUmVxdWVzdCwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5SZXRyaWV2ZVJlc3BvbnNlPFJvbGVSb3c+KSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gTGlzdChyZXF1ZXN0OiBTZXJlbml0eS5MaXN0UmVxdWVzdCwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5MaXN0UmVzcG9uc2U8Um9sZVJvdz4pID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuXHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgY29uc3QgZW51bSBNZXRob2RzIHtcclxuICAgICAgICAgICAgQ3JlYXRlID0gXCJBZG1pbmlzdHJhdGlvbi9Sb2xlL0NyZWF0ZVwiLFxyXG4gICAgICAgICAgICBVcGRhdGUgPSBcIkFkbWluaXN0cmF0aW9uL1JvbGUvVXBkYXRlXCIsXHJcbiAgICAgICAgICAgIERlbGV0ZSA9IFwiQWRtaW5pc3RyYXRpb24vUm9sZS9EZWxldGVcIixcclxuICAgICAgICAgICAgUmV0cmlldmUgPSBcIkFkbWluaXN0cmF0aW9uL1JvbGUvUmV0cmlldmVcIixcclxuICAgICAgICAgICAgTGlzdCA9IFwiQWRtaW5pc3RyYXRpb24vUm9sZS9MaXN0XCJcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIFtcclxuICAgICAgICAgICAgJ0NyZWF0ZScsIFxyXG4gICAgICAgICAgICAnVXBkYXRlJywgXHJcbiAgICAgICAgICAgICdEZWxldGUnLCBcclxuICAgICAgICAgICAgJ1JldHJpZXZlJywgXHJcbiAgICAgICAgICAgICdMaXN0J1xyXG4gICAgICAgIF0uZm9yRWFjaCh4ID0+IHtcclxuICAgICAgICAgICAgKDxhbnk+Um9sZVNlcnZpY2UpW3hdID0gZnVuY3Rpb24gKHIsIHMsIG8pIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBRLnNlcnZpY2VSZXF1ZXN0KGJhc2VVcmwgKyAnLycgKyB4LCByLCBzLCBvKTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG4iLCJcclxubmFtZXNwYWNlIEluZG90YWxlbnQuQWRtaW5pc3RyYXRpb24ge1xyXG4gICAgZXhwb3J0IGNsYXNzIFRlbmFudENvbHVtbnMge1xyXG4gICAgICAgIHN0YXRpYyBjb2x1bW5zS2V5ID0gJ0FkbWluaXN0cmF0aW9uLlRlbmFudCc7XHJcbiAgICB9XHJcbn0iLCJuYW1lc3BhY2UgSW5kb3RhbGVudC5BZG1pbmlzdHJhdGlvbiB7XG4gICAgZXhwb3J0IGludGVyZmFjZSBUZW5hbnRGb3JtIHtcbiAgICAgICAgVGVuYW50TmFtZTogU2VyZW5pdHkuU3RyaW5nRWRpdG9yO1xuICAgICAgICBEZXNjcmlwdGlvbjogU2VyZW5pdHkuVGV4dEFyZWFFZGl0b3I7XG4gICAgICAgIEN1cnJlbmN5OiBTZXJlbml0eS5TdHJpbmdFZGl0b3I7XG4gICAgICAgIFN0cmVldDogU2VyZW5pdHkuU3RyaW5nRWRpdG9yO1xuICAgICAgICBDaXR5OiBTZXJlbml0eS5TdHJpbmdFZGl0b3I7XG4gICAgICAgIFN0YXRlOiBTZXJlbml0eS5TdHJpbmdFZGl0b3I7XG4gICAgICAgIFppcENvZGU6IFNlcmVuaXR5LlN0cmluZ0VkaXRvcjtcbiAgICAgICAgUGhvbmU6IFNlcmVuaXR5LlN0cmluZ0VkaXRvcjtcbiAgICAgICAgRW1haWw6IFNlcmVuaXR5LlN0cmluZ0VkaXRvcjtcbiAgICAgICAgUHJvZHVjdE51bWJlclByZWZpeDogU2VyZW5pdHkuU3RyaW5nRWRpdG9yO1xuICAgICAgICBQcm9kdWN0TnVtYmVyVXNlRGF0ZTogU2VyZW5pdHkuQm9vbGVhbkVkaXRvcjtcbiAgICAgICAgUHJvZHVjdE51bWJlckxlbmd0aDogU2VyZW5pdHkuSW50ZWdlckVkaXRvcjtcbiAgICAgICAgQ3VzdG9tZXJOdW1iZXJQcmVmaXg6IFNlcmVuaXR5LlN0cmluZ0VkaXRvcjtcbiAgICAgICAgQ3VzdG9tZXJOdW1iZXJVc2VEYXRlOiBTZXJlbml0eS5Cb29sZWFuRWRpdG9yO1xuICAgICAgICBDdXN0b21lck51bWJlckxlbmd0aDogU2VyZW5pdHkuSW50ZWdlckVkaXRvcjtcbiAgICAgICAgU2FsZXNOdW1iZXJQcmVmaXg6IFNlcmVuaXR5LlN0cmluZ0VkaXRvcjtcbiAgICAgICAgU2FsZXNOdW1iZXJVc2VEYXRlOiBTZXJlbml0eS5Cb29sZWFuRWRpdG9yO1xuICAgICAgICBTYWxlc051bWJlckxlbmd0aDogU2VyZW5pdHkuSW50ZWdlckVkaXRvcjtcbiAgICAgICAgSW52b2ljZU51bWJlclByZWZpeDogU2VyZW5pdHkuU3RyaW5nRWRpdG9yO1xuICAgICAgICBJbnZvaWNlTnVtYmVyVXNlRGF0ZTogU2VyZW5pdHkuQm9vbGVhbkVkaXRvcjtcbiAgICAgICAgSW52b2ljZU51bWJlckxlbmd0aDogU2VyZW5pdHkuSW50ZWdlckVkaXRvcjtcbiAgICAgICAgSW52b2ljZVBheW1lbnROdW1iZXJQcmVmaXg6IFNlcmVuaXR5LlN0cmluZ0VkaXRvcjtcbiAgICAgICAgSW52b2ljZVBheW1lbnROdW1iZXJVc2VEYXRlOiBTZXJlbml0eS5Cb29sZWFuRWRpdG9yO1xuICAgICAgICBJbnZvaWNlUGF5bWVudE51bWJlckxlbmd0aDogU2VyZW5pdHkuSW50ZWdlckVkaXRvcjtcbiAgICAgICAgVmVuZG9yTnVtYmVyUHJlZml4OiBTZXJlbml0eS5TdHJpbmdFZGl0b3I7XG4gICAgICAgIFZlbmRvck51bWJlclVzZURhdGU6IFNlcmVuaXR5LkJvb2xlYW5FZGl0b3I7XG4gICAgICAgIFZlbmRvck51bWJlckxlbmd0aDogU2VyZW5pdHkuSW50ZWdlckVkaXRvcjtcbiAgICAgICAgUHVyY2hhc2VOdW1iZXJQcmVmaXg6IFNlcmVuaXR5LlN0cmluZ0VkaXRvcjtcbiAgICAgICAgUHVyY2hhc2VOdW1iZXJVc2VEYXRlOiBTZXJlbml0eS5Cb29sZWFuRWRpdG9yO1xuICAgICAgICBQdXJjaGFzZU51bWJlckxlbmd0aDogU2VyZW5pdHkuSW50ZWdlckVkaXRvcjtcbiAgICAgICAgQmlsbE51bWJlclByZWZpeDogU2VyZW5pdHkuU3RyaW5nRWRpdG9yO1xuICAgICAgICBCaWxsTnVtYmVyVXNlRGF0ZTogU2VyZW5pdHkuQm9vbGVhbkVkaXRvcjtcbiAgICAgICAgQmlsbE51bWJlckxlbmd0aDogU2VyZW5pdHkuSW50ZWdlckVkaXRvcjtcbiAgICAgICAgQmlsbFBheW1lbnROdW1iZXJQcmVmaXg6IFNlcmVuaXR5LlN0cmluZ0VkaXRvcjtcbiAgICAgICAgQmlsbFBheW1lbnROdW1iZXJVc2VEYXRlOiBTZXJlbml0eS5Cb29sZWFuRWRpdG9yO1xuICAgICAgICBCaWxsUGF5bWVudE51bWJlckxlbmd0aDogU2VyZW5pdHkuSW50ZWdlckVkaXRvcjtcbiAgICAgICAgTWF4aW11bVVzZXI6IFNlcmVuaXR5LkludGVnZXJFZGl0b3I7XG4gICAgfVxuXG4gICAgZXhwb3J0IGNsYXNzIFRlbmFudEZvcm0gZXh0ZW5kcyBTZXJlbml0eS5QcmVmaXhlZENvbnRleHQge1xuICAgICAgICBzdGF0aWMgZm9ybUtleSA9ICdBZG1pbmlzdHJhdGlvbi5UZW5hbnQnO1xuICAgICAgICBwcml2YXRlIHN0YXRpYyBpbml0OiBib29sZWFuO1xuXG4gICAgICAgIGNvbnN0cnVjdG9yKHByZWZpeDogc3RyaW5nKSB7XG4gICAgICAgICAgICBzdXBlcihwcmVmaXgpO1xuXG4gICAgICAgICAgICBpZiAoIVRlbmFudEZvcm0uaW5pdCkgIHtcbiAgICAgICAgICAgICAgICBUZW5hbnRGb3JtLmluaXQgPSB0cnVlO1xuXG4gICAgICAgICAgICAgICAgdmFyIHMgPSBTZXJlbml0eTtcbiAgICAgICAgICAgICAgICB2YXIgdzAgPSBzLlN0cmluZ0VkaXRvcjtcbiAgICAgICAgICAgICAgICB2YXIgdzEgPSBzLlRleHRBcmVhRWRpdG9yO1xuICAgICAgICAgICAgICAgIHZhciB3MiA9IHMuQm9vbGVhbkVkaXRvcjtcbiAgICAgICAgICAgICAgICB2YXIgdzMgPSBzLkludGVnZXJFZGl0b3I7XG5cbiAgICAgICAgICAgICAgICBRLmluaXRGb3JtVHlwZShUZW5hbnRGb3JtLCBbXG4gICAgICAgICAgICAgICAgICAgICdUZW5hbnROYW1lJywgdzAsXG4gICAgICAgICAgICAgICAgICAgICdEZXNjcmlwdGlvbicsIHcxLFxuICAgICAgICAgICAgICAgICAgICAnQ3VycmVuY3knLCB3MCxcbiAgICAgICAgICAgICAgICAgICAgJ1N0cmVldCcsIHcwLFxuICAgICAgICAgICAgICAgICAgICAnQ2l0eScsIHcwLFxuICAgICAgICAgICAgICAgICAgICAnU3RhdGUnLCB3MCxcbiAgICAgICAgICAgICAgICAgICAgJ1ppcENvZGUnLCB3MCxcbiAgICAgICAgICAgICAgICAgICAgJ1Bob25lJywgdzAsXG4gICAgICAgICAgICAgICAgICAgICdFbWFpbCcsIHcwLFxuICAgICAgICAgICAgICAgICAgICAnUHJvZHVjdE51bWJlclByZWZpeCcsIHcwLFxuICAgICAgICAgICAgICAgICAgICAnUHJvZHVjdE51bWJlclVzZURhdGUnLCB3MixcbiAgICAgICAgICAgICAgICAgICAgJ1Byb2R1Y3ROdW1iZXJMZW5ndGgnLCB3MyxcbiAgICAgICAgICAgICAgICAgICAgJ0N1c3RvbWVyTnVtYmVyUHJlZml4JywgdzAsXG4gICAgICAgICAgICAgICAgICAgICdDdXN0b21lck51bWJlclVzZURhdGUnLCB3MixcbiAgICAgICAgICAgICAgICAgICAgJ0N1c3RvbWVyTnVtYmVyTGVuZ3RoJywgdzMsXG4gICAgICAgICAgICAgICAgICAgICdTYWxlc051bWJlclByZWZpeCcsIHcwLFxuICAgICAgICAgICAgICAgICAgICAnU2FsZXNOdW1iZXJVc2VEYXRlJywgdzIsXG4gICAgICAgICAgICAgICAgICAgICdTYWxlc051bWJlckxlbmd0aCcsIHczLFxuICAgICAgICAgICAgICAgICAgICAnSW52b2ljZU51bWJlclByZWZpeCcsIHcwLFxuICAgICAgICAgICAgICAgICAgICAnSW52b2ljZU51bWJlclVzZURhdGUnLCB3MixcbiAgICAgICAgICAgICAgICAgICAgJ0ludm9pY2VOdW1iZXJMZW5ndGgnLCB3MyxcbiAgICAgICAgICAgICAgICAgICAgJ0ludm9pY2VQYXltZW50TnVtYmVyUHJlZml4JywgdzAsXG4gICAgICAgICAgICAgICAgICAgICdJbnZvaWNlUGF5bWVudE51bWJlclVzZURhdGUnLCB3MixcbiAgICAgICAgICAgICAgICAgICAgJ0ludm9pY2VQYXltZW50TnVtYmVyTGVuZ3RoJywgdzMsXG4gICAgICAgICAgICAgICAgICAgICdWZW5kb3JOdW1iZXJQcmVmaXgnLCB3MCxcbiAgICAgICAgICAgICAgICAgICAgJ1ZlbmRvck51bWJlclVzZURhdGUnLCB3MixcbiAgICAgICAgICAgICAgICAgICAgJ1ZlbmRvck51bWJlckxlbmd0aCcsIHczLFxuICAgICAgICAgICAgICAgICAgICAnUHVyY2hhc2VOdW1iZXJQcmVmaXgnLCB3MCxcbiAgICAgICAgICAgICAgICAgICAgJ1B1cmNoYXNlTnVtYmVyVXNlRGF0ZScsIHcyLFxuICAgICAgICAgICAgICAgICAgICAnUHVyY2hhc2VOdW1iZXJMZW5ndGgnLCB3MyxcbiAgICAgICAgICAgICAgICAgICAgJ0JpbGxOdW1iZXJQcmVmaXgnLCB3MCxcbiAgICAgICAgICAgICAgICAgICAgJ0JpbGxOdW1iZXJVc2VEYXRlJywgdzIsXG4gICAgICAgICAgICAgICAgICAgICdCaWxsTnVtYmVyTGVuZ3RoJywgdzMsXG4gICAgICAgICAgICAgICAgICAgICdCaWxsUGF5bWVudE51bWJlclByZWZpeCcsIHcwLFxuICAgICAgICAgICAgICAgICAgICAnQmlsbFBheW1lbnROdW1iZXJVc2VEYXRlJywgdzIsXG4gICAgICAgICAgICAgICAgICAgICdCaWxsUGF5bWVudE51bWJlckxlbmd0aCcsIHczLFxuICAgICAgICAgICAgICAgICAgICAnTWF4aW11bVVzZXInLCB3M1xuICAgICAgICAgICAgICAgIF0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuIiwibmFtZXNwYWNlIEluZG90YWxlbnQuQWRtaW5pc3RyYXRpb24ge1xuICAgIGV4cG9ydCBpbnRlcmZhY2UgVGVuYW50Um93IHtcbiAgICAgICAgVGVuYW50SWQ/OiBudW1iZXI7XG4gICAgICAgIFRlbmFudE5hbWU/OiBzdHJpbmc7XG4gICAgICAgIERlc2NyaXB0aW9uPzogc3RyaW5nO1xuICAgICAgICBTdHJlZXQ/OiBzdHJpbmc7XG4gICAgICAgIENpdHk/OiBzdHJpbmc7XG4gICAgICAgIFN0YXRlPzogc3RyaW5nO1xuICAgICAgICBaaXBDb2RlPzogc3RyaW5nO1xuICAgICAgICBQaG9uZT86IHN0cmluZztcbiAgICAgICAgRW1haWw/OiBzdHJpbmc7XG4gICAgICAgIEN1cnJlbmN5Pzogc3RyaW5nO1xuICAgICAgICBNYXhpbXVtVXNlcj86IG51bWJlcjtcbiAgICAgICAgUHJvZHVjdE51bWJlclByZWZpeD86IHN0cmluZztcbiAgICAgICAgUHJvZHVjdE51bWJlclVzZURhdGU/OiBib29sZWFuO1xuICAgICAgICBQcm9kdWN0TnVtYmVyTGVuZ3RoPzogbnVtYmVyO1xuICAgICAgICBDdXN0b21lck51bWJlclByZWZpeD86IHN0cmluZztcbiAgICAgICAgQ3VzdG9tZXJOdW1iZXJVc2VEYXRlPzogYm9vbGVhbjtcbiAgICAgICAgQ3VzdG9tZXJOdW1iZXJMZW5ndGg/OiBudW1iZXI7XG4gICAgICAgIFNhbGVzTnVtYmVyUHJlZml4Pzogc3RyaW5nO1xuICAgICAgICBTYWxlc051bWJlclVzZURhdGU/OiBib29sZWFuO1xuICAgICAgICBTYWxlc051bWJlckxlbmd0aD86IG51bWJlcjtcbiAgICAgICAgSW52b2ljZU51bWJlclByZWZpeD86IHN0cmluZztcbiAgICAgICAgSW52b2ljZU51bWJlclVzZURhdGU/OiBib29sZWFuO1xuICAgICAgICBJbnZvaWNlTnVtYmVyTGVuZ3RoPzogbnVtYmVyO1xuICAgICAgICBJbnZvaWNlUGF5bWVudE51bWJlclByZWZpeD86IHN0cmluZztcbiAgICAgICAgSW52b2ljZVBheW1lbnROdW1iZXJVc2VEYXRlPzogYm9vbGVhbjtcbiAgICAgICAgSW52b2ljZVBheW1lbnROdW1iZXJMZW5ndGg/OiBudW1iZXI7XG4gICAgICAgIFZlbmRvck51bWJlclByZWZpeD86IHN0cmluZztcbiAgICAgICAgVmVuZG9yTnVtYmVyVXNlRGF0ZT86IGJvb2xlYW47XG4gICAgICAgIFZlbmRvck51bWJlckxlbmd0aD86IG51bWJlcjtcbiAgICAgICAgUHVyY2hhc2VOdW1iZXJQcmVmaXg/OiBzdHJpbmc7XG4gICAgICAgIFB1cmNoYXNlTnVtYmVyVXNlRGF0ZT86IGJvb2xlYW47XG4gICAgICAgIFB1cmNoYXNlTnVtYmVyTGVuZ3RoPzogbnVtYmVyO1xuICAgICAgICBCaWxsTnVtYmVyUHJlZml4Pzogc3RyaW5nO1xuICAgICAgICBCaWxsTnVtYmVyVXNlRGF0ZT86IGJvb2xlYW47XG4gICAgICAgIEJpbGxOdW1iZXJMZW5ndGg/OiBudW1iZXI7XG4gICAgICAgIEJpbGxQYXltZW50TnVtYmVyUHJlZml4Pzogc3RyaW5nO1xuICAgICAgICBCaWxsUGF5bWVudE51bWJlclVzZURhdGU/OiBib29sZWFuO1xuICAgICAgICBCaWxsUGF5bWVudE51bWJlckxlbmd0aD86IG51bWJlcjtcbiAgICAgICAgSW5zZXJ0VXNlcklkPzogbnVtYmVyO1xuICAgICAgICBJbnNlcnREYXRlPzogc3RyaW5nO1xuICAgICAgICBVcGRhdGVVc2VySWQ/OiBudW1iZXI7XG4gICAgICAgIFVwZGF0ZURhdGU/OiBzdHJpbmc7XG4gICAgfVxuXG4gICAgZXhwb3J0IG5hbWVzcGFjZSBUZW5hbnRSb3cge1xuICAgICAgICBleHBvcnQgY29uc3QgaWRQcm9wZXJ0eSA9ICdUZW5hbnRJZCc7XG4gICAgICAgIGV4cG9ydCBjb25zdCBuYW1lUHJvcGVydHkgPSAnVGVuYW50TmFtZSc7XG4gICAgICAgIGV4cG9ydCBjb25zdCBsb2NhbFRleHRQcmVmaXggPSAnQWRtaW5pc3RyYXRpb24uVGVuYW50JztcbiAgICAgICAgZXhwb3J0IGNvbnN0IGxvb2t1cEtleSA9ICdBZG1pbmlzdHJhdGlvbi5UZW5hbnQnO1xuXG4gICAgICAgIGV4cG9ydCBmdW5jdGlvbiBnZXRMb29rdXAoKTogUS5Mb29rdXA8VGVuYW50Um93PiB7XG4gICAgICAgICAgICByZXR1cm4gUS5nZXRMb29rdXA8VGVuYW50Um93PignQWRtaW5pc3RyYXRpb24uVGVuYW50Jyk7XG4gICAgICAgIH1cbiAgICAgICAgZXhwb3J0IGNvbnN0IGRlbGV0ZVBlcm1pc3Npb24gPSAnQWRtaW5pc3RyYXRpb246VGVuYW50JztcbiAgICAgICAgZXhwb3J0IGNvbnN0IGluc2VydFBlcm1pc3Npb24gPSAnQWRtaW5pc3RyYXRpb246VGVuYW50JztcbiAgICAgICAgZXhwb3J0IGNvbnN0IHJlYWRQZXJtaXNzaW9uID0gJ0FkbWluaXN0cmF0aW9uOlRlbmFudCc7XG4gICAgICAgIGV4cG9ydCBjb25zdCB1cGRhdGVQZXJtaXNzaW9uID0gJ0FkbWluaXN0cmF0aW9uOlRlbmFudCc7XG5cbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgY29uc3QgZW51bSBGaWVsZHMge1xuICAgICAgICAgICAgVGVuYW50SWQgPSBcIlRlbmFudElkXCIsXG4gICAgICAgICAgICBUZW5hbnROYW1lID0gXCJUZW5hbnROYW1lXCIsXG4gICAgICAgICAgICBEZXNjcmlwdGlvbiA9IFwiRGVzY3JpcHRpb25cIixcbiAgICAgICAgICAgIFN0cmVldCA9IFwiU3RyZWV0XCIsXG4gICAgICAgICAgICBDaXR5ID0gXCJDaXR5XCIsXG4gICAgICAgICAgICBTdGF0ZSA9IFwiU3RhdGVcIixcbiAgICAgICAgICAgIFppcENvZGUgPSBcIlppcENvZGVcIixcbiAgICAgICAgICAgIFBob25lID0gXCJQaG9uZVwiLFxuICAgICAgICAgICAgRW1haWwgPSBcIkVtYWlsXCIsXG4gICAgICAgICAgICBDdXJyZW5jeSA9IFwiQ3VycmVuY3lcIixcbiAgICAgICAgICAgIE1heGltdW1Vc2VyID0gXCJNYXhpbXVtVXNlclwiLFxuICAgICAgICAgICAgUHJvZHVjdE51bWJlclByZWZpeCA9IFwiUHJvZHVjdE51bWJlclByZWZpeFwiLFxuICAgICAgICAgICAgUHJvZHVjdE51bWJlclVzZURhdGUgPSBcIlByb2R1Y3ROdW1iZXJVc2VEYXRlXCIsXG4gICAgICAgICAgICBQcm9kdWN0TnVtYmVyTGVuZ3RoID0gXCJQcm9kdWN0TnVtYmVyTGVuZ3RoXCIsXG4gICAgICAgICAgICBDdXN0b21lck51bWJlclByZWZpeCA9IFwiQ3VzdG9tZXJOdW1iZXJQcmVmaXhcIixcbiAgICAgICAgICAgIEN1c3RvbWVyTnVtYmVyVXNlRGF0ZSA9IFwiQ3VzdG9tZXJOdW1iZXJVc2VEYXRlXCIsXG4gICAgICAgICAgICBDdXN0b21lck51bWJlckxlbmd0aCA9IFwiQ3VzdG9tZXJOdW1iZXJMZW5ndGhcIixcbiAgICAgICAgICAgIFNhbGVzTnVtYmVyUHJlZml4ID0gXCJTYWxlc051bWJlclByZWZpeFwiLFxuICAgICAgICAgICAgU2FsZXNOdW1iZXJVc2VEYXRlID0gXCJTYWxlc051bWJlclVzZURhdGVcIixcbiAgICAgICAgICAgIFNhbGVzTnVtYmVyTGVuZ3RoID0gXCJTYWxlc051bWJlckxlbmd0aFwiLFxuICAgICAgICAgICAgSW52b2ljZU51bWJlclByZWZpeCA9IFwiSW52b2ljZU51bWJlclByZWZpeFwiLFxuICAgICAgICAgICAgSW52b2ljZU51bWJlclVzZURhdGUgPSBcIkludm9pY2VOdW1iZXJVc2VEYXRlXCIsXG4gICAgICAgICAgICBJbnZvaWNlTnVtYmVyTGVuZ3RoID0gXCJJbnZvaWNlTnVtYmVyTGVuZ3RoXCIsXG4gICAgICAgICAgICBJbnZvaWNlUGF5bWVudE51bWJlclByZWZpeCA9IFwiSW52b2ljZVBheW1lbnROdW1iZXJQcmVmaXhcIixcbiAgICAgICAgICAgIEludm9pY2VQYXltZW50TnVtYmVyVXNlRGF0ZSA9IFwiSW52b2ljZVBheW1lbnROdW1iZXJVc2VEYXRlXCIsXG4gICAgICAgICAgICBJbnZvaWNlUGF5bWVudE51bWJlckxlbmd0aCA9IFwiSW52b2ljZVBheW1lbnROdW1iZXJMZW5ndGhcIixcbiAgICAgICAgICAgIFZlbmRvck51bWJlclByZWZpeCA9IFwiVmVuZG9yTnVtYmVyUHJlZml4XCIsXG4gICAgICAgICAgICBWZW5kb3JOdW1iZXJVc2VEYXRlID0gXCJWZW5kb3JOdW1iZXJVc2VEYXRlXCIsXG4gICAgICAgICAgICBWZW5kb3JOdW1iZXJMZW5ndGggPSBcIlZlbmRvck51bWJlckxlbmd0aFwiLFxuICAgICAgICAgICAgUHVyY2hhc2VOdW1iZXJQcmVmaXggPSBcIlB1cmNoYXNlTnVtYmVyUHJlZml4XCIsXG4gICAgICAgICAgICBQdXJjaGFzZU51bWJlclVzZURhdGUgPSBcIlB1cmNoYXNlTnVtYmVyVXNlRGF0ZVwiLFxuICAgICAgICAgICAgUHVyY2hhc2VOdW1iZXJMZW5ndGggPSBcIlB1cmNoYXNlTnVtYmVyTGVuZ3RoXCIsXG4gICAgICAgICAgICBCaWxsTnVtYmVyUHJlZml4ID0gXCJCaWxsTnVtYmVyUHJlZml4XCIsXG4gICAgICAgICAgICBCaWxsTnVtYmVyVXNlRGF0ZSA9IFwiQmlsbE51bWJlclVzZURhdGVcIixcbiAgICAgICAgICAgIEJpbGxOdW1iZXJMZW5ndGggPSBcIkJpbGxOdW1iZXJMZW5ndGhcIixcbiAgICAgICAgICAgIEJpbGxQYXltZW50TnVtYmVyUHJlZml4ID0gXCJCaWxsUGF5bWVudE51bWJlclByZWZpeFwiLFxuICAgICAgICAgICAgQmlsbFBheW1lbnROdW1iZXJVc2VEYXRlID0gXCJCaWxsUGF5bWVudE51bWJlclVzZURhdGVcIixcbiAgICAgICAgICAgIEJpbGxQYXltZW50TnVtYmVyTGVuZ3RoID0gXCJCaWxsUGF5bWVudE51bWJlckxlbmd0aFwiLFxuICAgICAgICAgICAgSW5zZXJ0VXNlcklkID0gXCJJbnNlcnRVc2VySWRcIixcbiAgICAgICAgICAgIEluc2VydERhdGUgPSBcIkluc2VydERhdGVcIixcbiAgICAgICAgICAgIFVwZGF0ZVVzZXJJZCA9IFwiVXBkYXRlVXNlcklkXCIsXG4gICAgICAgICAgICBVcGRhdGVEYXRlID0gXCJVcGRhdGVEYXRlXCJcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsIm5hbWVzcGFjZSBJbmRvdGFsZW50LkFkbWluaXN0cmF0aW9uIHtcbiAgICBleHBvcnQgbmFtZXNwYWNlIFRlbmFudFNlcnZpY2Uge1xuICAgICAgICBleHBvcnQgY29uc3QgYmFzZVVybCA9ICdBZG1pbmlzdHJhdGlvbi9UZW5hbnQnO1xuXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIENyZWF0ZShyZXF1ZXN0OiBTZXJlbml0eS5TYXZlUmVxdWVzdDxUZW5hbnRSb3c+LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5LlNhdmVSZXNwb25zZSkgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBVcGRhdGUocmVxdWVzdDogU2VyZW5pdHkuU2F2ZVJlcXVlc3Q8VGVuYW50Um93Piwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5TYXZlUmVzcG9uc2UpID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gRGVsZXRlKHJlcXVlc3Q6IFNlcmVuaXR5LkRlbGV0ZVJlcXVlc3QsIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuRGVsZXRlUmVzcG9uc2UpID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gUmV0cmlldmUocmVxdWVzdDogU2VyZW5pdHkuUmV0cmlldmVSZXF1ZXN0LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5LlJldHJpZXZlUmVzcG9uc2U8VGVuYW50Um93PikgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBMaXN0KHJlcXVlc3Q6IFNlcmVuaXR5Lkxpc3RSZXF1ZXN0LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5Lkxpc3RSZXNwb25zZTxUZW5hbnRSb3c+KSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XG5cbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgY29uc3QgZW51bSBNZXRob2RzIHtcbiAgICAgICAgICAgIENyZWF0ZSA9IFwiQWRtaW5pc3RyYXRpb24vVGVuYW50L0NyZWF0ZVwiLFxuICAgICAgICAgICAgVXBkYXRlID0gXCJBZG1pbmlzdHJhdGlvbi9UZW5hbnQvVXBkYXRlXCIsXG4gICAgICAgICAgICBEZWxldGUgPSBcIkFkbWluaXN0cmF0aW9uL1RlbmFudC9EZWxldGVcIixcbiAgICAgICAgICAgIFJldHJpZXZlID0gXCJBZG1pbmlzdHJhdGlvbi9UZW5hbnQvUmV0cmlldmVcIixcbiAgICAgICAgICAgIExpc3QgPSBcIkFkbWluaXN0cmF0aW9uL1RlbmFudC9MaXN0XCJcbiAgICAgICAgfVxuXG4gICAgICAgIFtcbiAgICAgICAgICAgICdDcmVhdGUnLCBcbiAgICAgICAgICAgICdVcGRhdGUnLCBcbiAgICAgICAgICAgICdEZWxldGUnLCBcbiAgICAgICAgICAgICdSZXRyaWV2ZScsIFxuICAgICAgICAgICAgJ0xpc3QnXG4gICAgICAgIF0uZm9yRWFjaCh4ID0+IHtcbiAgICAgICAgICAgICg8YW55PlRlbmFudFNlcnZpY2UpW3hdID0gZnVuY3Rpb24gKHIsIHMsIG8pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gUS5zZXJ2aWNlUmVxdWVzdChiYXNlVXJsICsgJy8nICsgeCwgciwgcywgbyk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9KTtcbiAgICB9XG59XG4iLCJuYW1lc3BhY2UgSW5kb3RhbGVudC5BZG1pbmlzdHJhdGlvbiB7XHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIFRyYW5zbGF0aW9uSXRlbSB7XHJcbiAgICAgICAgS2V5Pzogc3RyaW5nO1xyXG4gICAgICAgIFNvdXJjZVRleHQ/OiBzdHJpbmc7XHJcbiAgICAgICAgVGFyZ2V0VGV4dD86IHN0cmluZztcclxuICAgICAgICBDdXN0b21UZXh0Pzogc3RyaW5nO1xyXG4gICAgfVxyXG59XHJcblxyXG4iLCJuYW1lc3BhY2UgSW5kb3RhbGVudC5BZG1pbmlzdHJhdGlvbiB7XHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIFRyYW5zbGF0aW9uTGlzdFJlcXVlc3QgZXh0ZW5kcyBTZXJlbml0eS5MaXN0UmVxdWVzdCB7XHJcbiAgICAgICAgU291cmNlTGFuZ3VhZ2VJRD86IHN0cmluZztcclxuICAgICAgICBUYXJnZXRMYW5ndWFnZUlEPzogc3RyaW5nO1xyXG4gICAgfVxyXG59XHJcblxyXG4iLCJuYW1lc3BhY2UgSW5kb3RhbGVudC5BZG1pbmlzdHJhdGlvbiB7XHJcbiAgICBleHBvcnQgbmFtZXNwYWNlIFRyYW5zbGF0aW9uU2VydmljZSB7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGJhc2VVcmwgPSAnQWRtaW5pc3RyYXRpb24vVHJhbnNsYXRpb24nO1xyXG5cclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBMaXN0KHJlcXVlc3Q6IFRyYW5zbGF0aW9uTGlzdFJlcXVlc3QsIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuTGlzdFJlc3BvbnNlPFRyYW5zbGF0aW9uSXRlbT4pID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBVcGRhdGUocmVxdWVzdDogVHJhbnNsYXRpb25VcGRhdGVSZXF1ZXN0LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5LlNhdmVSZXNwb25zZSkgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG5cclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBjb25zdCBlbnVtIE1ldGhvZHMge1xyXG4gICAgICAgICAgICBMaXN0ID0gXCJBZG1pbmlzdHJhdGlvbi9UcmFuc2xhdGlvbi9MaXN0XCIsXHJcbiAgICAgICAgICAgIFVwZGF0ZSA9IFwiQWRtaW5pc3RyYXRpb24vVHJhbnNsYXRpb24vVXBkYXRlXCJcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIFtcclxuICAgICAgICAgICAgJ0xpc3QnLCBcclxuICAgICAgICAgICAgJ1VwZGF0ZSdcclxuICAgICAgICBdLmZvckVhY2goeCA9PiB7XHJcbiAgICAgICAgICAgICg8YW55PlRyYW5zbGF0aW9uU2VydmljZSlbeF0gPSBmdW5jdGlvbiAociwgcywgbykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFEuc2VydmljZVJlcXVlc3QoYmFzZVVybCArICcvJyArIHgsIHIsIHMsIG8pO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbiIsIm5hbWVzcGFjZSBJbmRvdGFsZW50LkFkbWluaXN0cmF0aW9uIHtcclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgVHJhbnNsYXRpb25VcGRhdGVSZXF1ZXN0IGV4dGVuZHMgU2VyZW5pdHkuU2VydmljZVJlcXVlc3Qge1xyXG4gICAgICAgIFRhcmdldExhbmd1YWdlSUQ/OiBzdHJpbmc7XHJcbiAgICAgICAgVHJhbnNsYXRpb25zPzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfTtcclxuICAgIH1cclxufVxyXG5cclxuIiwibmFtZXNwYWNlIEluZG90YWxlbnQuQWRtaW5pc3RyYXRpb24ge1xyXG4gICAgZXhwb3J0IGNsYXNzIFVzZXJDb2x1bW5zIHtcclxuICAgICAgICBzdGF0aWMgY29sdW1uc0tleSA9ICdBZG1pbmlzdHJhdGlvbi5Vc2VyJztcclxuICAgIH1cclxufVxyXG4iLCJuYW1lc3BhY2UgSW5kb3RhbGVudC5BZG1pbmlzdHJhdGlvbiB7XHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIFVzZXJGb3JtIHtcclxuICAgICAgICBVc2VybmFtZTogU2VyZW5pdHkuU3RyaW5nRWRpdG9yO1xyXG4gICAgICAgIERpc3BsYXlOYW1lOiBTZXJlbml0eS5TdHJpbmdFZGl0b3I7XHJcbiAgICAgICAgRW1haWw6IFNlcmVuaXR5LkVtYWlsRWRpdG9yO1xyXG4gICAgICAgIFVzZXJJbWFnZTogU2VyZW5pdHkuSW1hZ2VVcGxvYWRFZGl0b3I7XHJcbiAgICAgICAgUGFzc3dvcmQ6IFNlcmVuaXR5LlBhc3N3b3JkRWRpdG9yO1xyXG4gICAgICAgIFBhc3N3b3JkQ29uZmlybTogU2VyZW5pdHkuUGFzc3dvcmRFZGl0b3I7XHJcbiAgICAgICAgU291cmNlOiBTZXJlbml0eS5TdHJpbmdFZGl0b3I7XHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IGNsYXNzIFVzZXJGb3JtIGV4dGVuZHMgU2VyZW5pdHkuUHJlZml4ZWRDb250ZXh0IHtcclxuICAgICAgICBzdGF0aWMgZm9ybUtleSA9ICdBZG1pbmlzdHJhdGlvbi5Vc2VyJztcclxuICAgICAgICBwcml2YXRlIHN0YXRpYyBpbml0OiBib29sZWFuO1xyXG5cclxuICAgICAgICBjb25zdHJ1Y3RvcihwcmVmaXg6IHN0cmluZykge1xyXG4gICAgICAgICAgICBzdXBlcihwcmVmaXgpO1xyXG5cclxuICAgICAgICAgICAgaWYgKCFVc2VyRm9ybS5pbml0KSAge1xyXG4gICAgICAgICAgICAgICAgVXNlckZvcm0uaW5pdCA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIHMgPSBTZXJlbml0eTtcclxuICAgICAgICAgICAgICAgIHZhciB3MCA9IHMuU3RyaW5nRWRpdG9yO1xyXG4gICAgICAgICAgICAgICAgdmFyIHcxID0gcy5FbWFpbEVkaXRvcjtcclxuICAgICAgICAgICAgICAgIHZhciB3MiA9IHMuSW1hZ2VVcGxvYWRFZGl0b3I7XHJcbiAgICAgICAgICAgICAgICB2YXIgdzMgPSBzLlBhc3N3b3JkRWRpdG9yO1xyXG5cclxuICAgICAgICAgICAgICAgIFEuaW5pdEZvcm1UeXBlKFVzZXJGb3JtLCBbXHJcbiAgICAgICAgICAgICAgICAgICAgJ1VzZXJuYW1lJywgdzAsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0Rpc3BsYXlOYW1lJywgdzAsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0VtYWlsJywgdzEsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1VzZXJJbWFnZScsIHcyLFxyXG4gICAgICAgICAgICAgICAgICAgICdQYXNzd29yZCcsIHczLFxyXG4gICAgICAgICAgICAgICAgICAgICdQYXNzd29yZENvbmZpcm0nLCB3MyxcclxuICAgICAgICAgICAgICAgICAgICAnU291cmNlJywgdzBcclxuICAgICAgICAgICAgICAgIF0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIm5hbWVzcGFjZSBJbmRvdGFsZW50LkFkbWluaXN0cmF0aW9uIHtcclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgVXNlclBlcm1pc3Npb25MaXN0UmVxdWVzdCBleHRlbmRzIFNlcmVuaXR5LlNlcnZpY2VSZXF1ZXN0IHtcclxuICAgICAgICBVc2VySUQ/OiBudW1iZXI7XHJcbiAgICAgICAgTW9kdWxlPzogc3RyaW5nO1xyXG4gICAgICAgIFN1Ym1vZHVsZT86IHN0cmluZztcclxuICAgIH1cclxufVxyXG5cclxuIiwibmFtZXNwYWNlIEluZG90YWxlbnQuQWRtaW5pc3RyYXRpb24ge1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBVc2VyUGVybWlzc2lvblJvdyB7XHJcbiAgICAgICAgVXNlclBlcm1pc3Npb25JZD86IG51bWJlcjtcclxuICAgICAgICBVc2VySWQ/OiBudW1iZXI7XHJcbiAgICAgICAgUGVybWlzc2lvbktleT86IHN0cmluZztcclxuICAgICAgICBHcmFudGVkPzogYm9vbGVhbjtcclxuICAgICAgICBVc2VybmFtZT86IHN0cmluZztcclxuICAgICAgICBVc2VyPzogc3RyaW5nO1xyXG4gICAgfVxyXG5cclxuICAgIGV4cG9ydCBuYW1lc3BhY2UgVXNlclBlcm1pc3Npb25Sb3cge1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBpZFByb3BlcnR5ID0gJ1VzZXJQZXJtaXNzaW9uSWQnO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBuYW1lUHJvcGVydHkgPSAnUGVybWlzc2lvbktleSc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGxvY2FsVGV4dFByZWZpeCA9ICdBZG1pbmlzdHJhdGlvbi5Vc2VyUGVybWlzc2lvbic7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGRlbGV0ZVBlcm1pc3Npb24gPSAnQWRtaW5pc3RyYXRpb246U2VjdXJpdHknO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBpbnNlcnRQZXJtaXNzaW9uID0gJ0FkbWluaXN0cmF0aW9uOlNlY3VyaXR5JztcclxuICAgICAgICBleHBvcnQgY29uc3QgcmVhZFBlcm1pc3Npb24gPSAnQWRtaW5pc3RyYXRpb246U2VjdXJpdHknO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCB1cGRhdGVQZXJtaXNzaW9uID0gJ0FkbWluaXN0cmF0aW9uOlNlY3VyaXR5JztcclxuXHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgY29uc3QgZW51bSBGaWVsZHMge1xyXG4gICAgICAgICAgICBVc2VyUGVybWlzc2lvbklkID0gXCJVc2VyUGVybWlzc2lvbklkXCIsXHJcbiAgICAgICAgICAgIFVzZXJJZCA9IFwiVXNlcklkXCIsXHJcbiAgICAgICAgICAgIFBlcm1pc3Npb25LZXkgPSBcIlBlcm1pc3Npb25LZXlcIixcclxuICAgICAgICAgICAgR3JhbnRlZCA9IFwiR3JhbnRlZFwiLFxyXG4gICAgICAgICAgICBVc2VybmFtZSA9IFwiVXNlcm5hbWVcIixcclxuICAgICAgICAgICAgVXNlciA9IFwiVXNlclwiXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIm5hbWVzcGFjZSBJbmRvdGFsZW50LkFkbWluaXN0cmF0aW9uIHtcclxuICAgIGV4cG9ydCBuYW1lc3BhY2UgVXNlclBlcm1pc3Npb25TZXJ2aWNlIHtcclxuICAgICAgICBleHBvcnQgY29uc3QgYmFzZVVybCA9ICdBZG1pbmlzdHJhdGlvbi9Vc2VyUGVybWlzc2lvbic7XHJcblxyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIFVwZGF0ZShyZXF1ZXN0OiBVc2VyUGVybWlzc2lvblVwZGF0ZVJlcXVlc3QsIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuU2F2ZVJlc3BvbnNlKSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gTGlzdChyZXF1ZXN0OiBVc2VyUGVybWlzc2lvbkxpc3RSZXF1ZXN0LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5Lkxpc3RSZXNwb25zZTxVc2VyUGVybWlzc2lvblJvdz4pID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBMaXN0Um9sZVBlcm1pc3Npb25zKHJlcXVlc3Q6IFVzZXJQZXJtaXNzaW9uTGlzdFJlcXVlc3QsIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuTGlzdFJlc3BvbnNlPHN0cmluZz4pID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBMaXN0UGVybWlzc2lvbktleXMocmVxdWVzdDogU2VyZW5pdHkuU2VydmljZVJlcXVlc3QsIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuTGlzdFJlc3BvbnNlPHN0cmluZz4pID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuXHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgY29uc3QgZW51bSBNZXRob2RzIHtcclxuICAgICAgICAgICAgVXBkYXRlID0gXCJBZG1pbmlzdHJhdGlvbi9Vc2VyUGVybWlzc2lvbi9VcGRhdGVcIixcclxuICAgICAgICAgICAgTGlzdCA9IFwiQWRtaW5pc3RyYXRpb24vVXNlclBlcm1pc3Npb24vTGlzdFwiLFxyXG4gICAgICAgICAgICBMaXN0Um9sZVBlcm1pc3Npb25zID0gXCJBZG1pbmlzdHJhdGlvbi9Vc2VyUGVybWlzc2lvbi9MaXN0Um9sZVBlcm1pc3Npb25zXCIsXHJcbiAgICAgICAgICAgIExpc3RQZXJtaXNzaW9uS2V5cyA9IFwiQWRtaW5pc3RyYXRpb24vVXNlclBlcm1pc3Npb24vTGlzdFBlcm1pc3Npb25LZXlzXCJcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIFtcclxuICAgICAgICAgICAgJ1VwZGF0ZScsIFxyXG4gICAgICAgICAgICAnTGlzdCcsIFxyXG4gICAgICAgICAgICAnTGlzdFJvbGVQZXJtaXNzaW9ucycsIFxyXG4gICAgICAgICAgICAnTGlzdFBlcm1pc3Npb25LZXlzJ1xyXG4gICAgICAgIF0uZm9yRWFjaCh4ID0+IHtcclxuICAgICAgICAgICAgKDxhbnk+VXNlclBlcm1pc3Npb25TZXJ2aWNlKVt4XSA9IGZ1bmN0aW9uIChyLCBzLCBvKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gUS5zZXJ2aWNlUmVxdWVzdChiYXNlVXJsICsgJy8nICsgeCwgciwgcywgbyk7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuIiwibmFtZXNwYWNlIEluZG90YWxlbnQuQWRtaW5pc3RyYXRpb24ge1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBVc2VyUGVybWlzc2lvblVwZGF0ZVJlcXVlc3QgZXh0ZW5kcyBTZXJlbml0eS5TZXJ2aWNlUmVxdWVzdCB7XHJcbiAgICAgICAgVXNlcklEPzogbnVtYmVyO1xyXG4gICAgICAgIE1vZHVsZT86IHN0cmluZztcclxuICAgICAgICBTdWJtb2R1bGU/OiBzdHJpbmc7XHJcbiAgICAgICAgUGVybWlzc2lvbnM/OiBVc2VyUGVybWlzc2lvblJvd1tdO1xyXG4gICAgfVxyXG59XHJcblxyXG4iLCJuYW1lc3BhY2UgSW5kb3RhbGVudC5BZG1pbmlzdHJhdGlvbiB7XHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIFVzZXJSb2xlTGlzdFJlcXVlc3QgZXh0ZW5kcyBTZXJlbml0eS5TZXJ2aWNlUmVxdWVzdCB7XHJcbiAgICAgICAgVXNlcklEPzogbnVtYmVyO1xyXG4gICAgfVxyXG59XHJcblxyXG4iLCJuYW1lc3BhY2UgSW5kb3RhbGVudC5BZG1pbmlzdHJhdGlvbiB7XHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIFVzZXJSb2xlTGlzdFJlc3BvbnNlIGV4dGVuZHMgU2VyZW5pdHkuTGlzdFJlc3BvbnNlPG51bWJlcj4ge1xyXG4gICAgfVxyXG59XHJcblxyXG4iLCJuYW1lc3BhY2UgSW5kb3RhbGVudC5BZG1pbmlzdHJhdGlvbiB7XHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIFVzZXJSb2xlUm93IHtcclxuICAgICAgICBVc2VyUm9sZUlkPzogbnVtYmVyO1xyXG4gICAgICAgIFVzZXJJZD86IG51bWJlcjtcclxuICAgICAgICBSb2xlSWQ/OiBudW1iZXI7XHJcbiAgICAgICAgVXNlcm5hbWU/OiBzdHJpbmc7XHJcbiAgICAgICAgVXNlcj86IHN0cmluZztcclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgbmFtZXNwYWNlIFVzZXJSb2xlUm93IHtcclxuICAgICAgICBleHBvcnQgY29uc3QgaWRQcm9wZXJ0eSA9ICdVc2VyUm9sZUlkJztcclxuICAgICAgICBleHBvcnQgY29uc3QgbG9jYWxUZXh0UHJlZml4ID0gJ0FkbWluaXN0cmF0aW9uLlVzZXJSb2xlJztcclxuICAgICAgICBleHBvcnQgY29uc3QgZGVsZXRlUGVybWlzc2lvbiA9ICdBZG1pbmlzdHJhdGlvbjpTZWN1cml0eSc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGluc2VydFBlcm1pc3Npb24gPSAnQWRtaW5pc3RyYXRpb246U2VjdXJpdHknO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCByZWFkUGVybWlzc2lvbiA9ICdBZG1pbmlzdHJhdGlvbjpTZWN1cml0eSc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IHVwZGF0ZVBlcm1pc3Npb24gPSAnQWRtaW5pc3RyYXRpb246U2VjdXJpdHknO1xyXG5cclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBjb25zdCBlbnVtIEZpZWxkcyB7XHJcbiAgICAgICAgICAgIFVzZXJSb2xlSWQgPSBcIlVzZXJSb2xlSWRcIixcclxuICAgICAgICAgICAgVXNlcklkID0gXCJVc2VySWRcIixcclxuICAgICAgICAgICAgUm9sZUlkID0gXCJSb2xlSWRcIixcclxuICAgICAgICAgICAgVXNlcm5hbWUgPSBcIlVzZXJuYW1lXCIsXHJcbiAgICAgICAgICAgIFVzZXIgPSBcIlVzZXJcIlxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJuYW1lc3BhY2UgSW5kb3RhbGVudC5BZG1pbmlzdHJhdGlvbiB7XHJcbiAgICBleHBvcnQgbmFtZXNwYWNlIFVzZXJSb2xlU2VydmljZSB7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGJhc2VVcmwgPSAnQWRtaW5pc3RyYXRpb24vVXNlclJvbGUnO1xyXG5cclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBVcGRhdGUocmVxdWVzdDogVXNlclJvbGVVcGRhdGVSZXF1ZXN0LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5LlNhdmVSZXNwb25zZSkgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIExpc3QocmVxdWVzdDogVXNlclJvbGVMaXN0UmVxdWVzdCwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBVc2VyUm9sZUxpc3RSZXNwb25zZSkgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG5cclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBjb25zdCBlbnVtIE1ldGhvZHMge1xyXG4gICAgICAgICAgICBVcGRhdGUgPSBcIkFkbWluaXN0cmF0aW9uL1VzZXJSb2xlL1VwZGF0ZVwiLFxyXG4gICAgICAgICAgICBMaXN0ID0gXCJBZG1pbmlzdHJhdGlvbi9Vc2VyUm9sZS9MaXN0XCJcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIFtcclxuICAgICAgICAgICAgJ1VwZGF0ZScsIFxyXG4gICAgICAgICAgICAnTGlzdCdcclxuICAgICAgICBdLmZvckVhY2goeCA9PiB7XHJcbiAgICAgICAgICAgICg8YW55PlVzZXJSb2xlU2VydmljZSlbeF0gPSBmdW5jdGlvbiAociwgcywgbykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFEuc2VydmljZVJlcXVlc3QoYmFzZVVybCArICcvJyArIHgsIHIsIHMsIG8pO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbiIsIm5hbWVzcGFjZSBJbmRvdGFsZW50LkFkbWluaXN0cmF0aW9uIHtcclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgVXNlclJvbGVVcGRhdGVSZXF1ZXN0IGV4dGVuZHMgU2VyZW5pdHkuU2VydmljZVJlcXVlc3Qge1xyXG4gICAgICAgIFVzZXJJRD86IG51bWJlcjtcclxuICAgICAgICBSb2xlcz86IG51bWJlcltdO1xyXG4gICAgfVxyXG59XHJcblxyXG4iLCJuYW1lc3BhY2UgSW5kb3RhbGVudC5BZG1pbmlzdHJhdGlvbiB7XG4gICAgZXhwb3J0IGludGVyZmFjZSBVc2VyUm93IHtcbiAgICAgICAgVXNlcklkPzogbnVtYmVyO1xuICAgICAgICBVc2VybmFtZT86IHN0cmluZztcbiAgICAgICAgU291cmNlPzogc3RyaW5nO1xuICAgICAgICBQYXNzd29yZEhhc2g/OiBzdHJpbmc7XG4gICAgICAgIFBhc3N3b3JkU2FsdD86IHN0cmluZztcbiAgICAgICAgRGlzcGxheU5hbWU/OiBzdHJpbmc7XG4gICAgICAgIEVtYWlsPzogc3RyaW5nO1xuICAgICAgICBVc2VySW1hZ2U/OiBzdHJpbmc7XG4gICAgICAgIExhc3REaXJlY3RvcnlVcGRhdGU/OiBzdHJpbmc7XG4gICAgICAgIFRlbmFudElkPzogbnVtYmVyO1xuICAgICAgICBUZW5hbnROYW1lPzogc3RyaW5nO1xuICAgICAgICBJc0FjdGl2ZT86IG51bWJlcjtcbiAgICAgICAgSXNUZW5hbnRBZG1pbj86IGJvb2xlYW47XG4gICAgICAgIFBhc3N3b3JkPzogc3RyaW5nO1xuICAgICAgICBQYXNzd29yZENvbmZpcm0/OiBzdHJpbmc7XG4gICAgICAgIEluc2VydFVzZXJJZD86IG51bWJlcjtcbiAgICAgICAgSW5zZXJ0RGF0ZT86IHN0cmluZztcbiAgICAgICAgVXBkYXRlVXNlcklkPzogbnVtYmVyO1xuICAgICAgICBVcGRhdGVEYXRlPzogc3RyaW5nO1xuICAgIH1cblxuICAgIGV4cG9ydCBuYW1lc3BhY2UgVXNlclJvdyB7XG4gICAgICAgIGV4cG9ydCBjb25zdCBpZFByb3BlcnR5ID0gJ1VzZXJJZCc7XG4gICAgICAgIGV4cG9ydCBjb25zdCBpc0FjdGl2ZVByb3BlcnR5ID0gJ0lzQWN0aXZlJztcbiAgICAgICAgZXhwb3J0IGNvbnN0IG5hbWVQcm9wZXJ0eSA9ICdVc2VybmFtZSc7XG4gICAgICAgIGV4cG9ydCBjb25zdCBsb2NhbFRleHRQcmVmaXggPSAnQWRtaW5pc3RyYXRpb24uVXNlcic7XG4gICAgICAgIGV4cG9ydCBjb25zdCBsb29rdXBLZXkgPSAnQWRtaW5pc3RyYXRpb24uVXNlcic7XG5cbiAgICAgICAgZXhwb3J0IGZ1bmN0aW9uIGdldExvb2t1cCgpOiBRLkxvb2t1cDxVc2VyUm93PiB7XG4gICAgICAgICAgICByZXR1cm4gUS5nZXRMb29rdXA8VXNlclJvdz4oJ0FkbWluaXN0cmF0aW9uLlVzZXInKTtcbiAgICAgICAgfVxuICAgICAgICBleHBvcnQgY29uc3QgZGVsZXRlUGVybWlzc2lvbiA9ICdBZG1pbmlzdHJhdGlvbjpTZWN1cml0eSc7XG4gICAgICAgIGV4cG9ydCBjb25zdCBpbnNlcnRQZXJtaXNzaW9uID0gJ0FkbWluaXN0cmF0aW9uOlNlY3VyaXR5JztcbiAgICAgICAgZXhwb3J0IGNvbnN0IHJlYWRQZXJtaXNzaW9uID0gJ0FkbWluaXN0cmF0aW9uOlNlY3VyaXR5JztcbiAgICAgICAgZXhwb3J0IGNvbnN0IHVwZGF0ZVBlcm1pc3Npb24gPSAnQWRtaW5pc3RyYXRpb246U2VjdXJpdHknO1xuXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGNvbnN0IGVudW0gRmllbGRzIHtcbiAgICAgICAgICAgIFVzZXJJZCA9IFwiVXNlcklkXCIsXG4gICAgICAgICAgICBVc2VybmFtZSA9IFwiVXNlcm5hbWVcIixcbiAgICAgICAgICAgIFNvdXJjZSA9IFwiU291cmNlXCIsXG4gICAgICAgICAgICBQYXNzd29yZEhhc2ggPSBcIlBhc3N3b3JkSGFzaFwiLFxuICAgICAgICAgICAgUGFzc3dvcmRTYWx0ID0gXCJQYXNzd29yZFNhbHRcIixcbiAgICAgICAgICAgIERpc3BsYXlOYW1lID0gXCJEaXNwbGF5TmFtZVwiLFxuICAgICAgICAgICAgRW1haWwgPSBcIkVtYWlsXCIsXG4gICAgICAgICAgICBVc2VySW1hZ2UgPSBcIlVzZXJJbWFnZVwiLFxuICAgICAgICAgICAgTGFzdERpcmVjdG9yeVVwZGF0ZSA9IFwiTGFzdERpcmVjdG9yeVVwZGF0ZVwiLFxuICAgICAgICAgICAgVGVuYW50SWQgPSBcIlRlbmFudElkXCIsXG4gICAgICAgICAgICBUZW5hbnROYW1lID0gXCJUZW5hbnROYW1lXCIsXG4gICAgICAgICAgICBJc0FjdGl2ZSA9IFwiSXNBY3RpdmVcIixcbiAgICAgICAgICAgIElzVGVuYW50QWRtaW4gPSBcIklzVGVuYW50QWRtaW5cIixcbiAgICAgICAgICAgIFBhc3N3b3JkID0gXCJQYXNzd29yZFwiLFxuICAgICAgICAgICAgUGFzc3dvcmRDb25maXJtID0gXCJQYXNzd29yZENvbmZpcm1cIixcbiAgICAgICAgICAgIEluc2VydFVzZXJJZCA9IFwiSW5zZXJ0VXNlcklkXCIsXG4gICAgICAgICAgICBJbnNlcnREYXRlID0gXCJJbnNlcnREYXRlXCIsXG4gICAgICAgICAgICBVcGRhdGVVc2VySWQgPSBcIlVwZGF0ZVVzZXJJZFwiLFxuICAgICAgICAgICAgVXBkYXRlRGF0ZSA9IFwiVXBkYXRlRGF0ZVwiXG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJuYW1lc3BhY2UgSW5kb3RhbGVudC5BZG1pbmlzdHJhdGlvbiB7XHJcbiAgICBleHBvcnQgbmFtZXNwYWNlIFVzZXJTZXJ2aWNlIHtcclxuICAgICAgICBleHBvcnQgY29uc3QgYmFzZVVybCA9ICdBZG1pbmlzdHJhdGlvbi9Vc2VyJztcclxuXHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gQ3JlYXRlKHJlcXVlc3Q6IFNlcmVuaXR5LlNhdmVSZXF1ZXN0PFVzZXJSb3c+LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5LlNhdmVSZXNwb25zZSkgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIFVwZGF0ZShyZXF1ZXN0OiBTZXJlbml0eS5TYXZlUmVxdWVzdDxVc2VyUm93Piwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5TYXZlUmVzcG9uc2UpID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBEZWxldGUocmVxdWVzdDogU2VyZW5pdHkuRGVsZXRlUmVxdWVzdCwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5EZWxldGVSZXNwb25zZSkgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIFVuZGVsZXRlKHJlcXVlc3Q6IFNlcmVuaXR5LlVuZGVsZXRlUmVxdWVzdCwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5VbmRlbGV0ZVJlc3BvbnNlKSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gUmV0cmlldmUocmVxdWVzdDogU2VyZW5pdHkuUmV0cmlldmVSZXF1ZXN0LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5LlJldHJpZXZlUmVzcG9uc2U8VXNlclJvdz4pID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBMaXN0KHJlcXVlc3Q6IFNlcmVuaXR5Lkxpc3RSZXF1ZXN0LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5Lkxpc3RSZXNwb25zZTxVc2VyUm93PikgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG5cclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBjb25zdCBlbnVtIE1ldGhvZHMge1xyXG4gICAgICAgICAgICBDcmVhdGUgPSBcIkFkbWluaXN0cmF0aW9uL1VzZXIvQ3JlYXRlXCIsXHJcbiAgICAgICAgICAgIFVwZGF0ZSA9IFwiQWRtaW5pc3RyYXRpb24vVXNlci9VcGRhdGVcIixcclxuICAgICAgICAgICAgRGVsZXRlID0gXCJBZG1pbmlzdHJhdGlvbi9Vc2VyL0RlbGV0ZVwiLFxyXG4gICAgICAgICAgICBVbmRlbGV0ZSA9IFwiQWRtaW5pc3RyYXRpb24vVXNlci9VbmRlbGV0ZVwiLFxyXG4gICAgICAgICAgICBSZXRyaWV2ZSA9IFwiQWRtaW5pc3RyYXRpb24vVXNlci9SZXRyaWV2ZVwiLFxyXG4gICAgICAgICAgICBMaXN0ID0gXCJBZG1pbmlzdHJhdGlvbi9Vc2VyL0xpc3RcIlxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgW1xyXG4gICAgICAgICAgICAnQ3JlYXRlJywgXHJcbiAgICAgICAgICAgICdVcGRhdGUnLCBcclxuICAgICAgICAgICAgJ0RlbGV0ZScsIFxyXG4gICAgICAgICAgICAnVW5kZWxldGUnLCBcclxuICAgICAgICAgICAgJ1JldHJpZXZlJywgXHJcbiAgICAgICAgICAgICdMaXN0J1xyXG4gICAgICAgIF0uZm9yRWFjaCh4ID0+IHtcclxuICAgICAgICAgICAgKDxhbnk+VXNlclNlcnZpY2UpW3hdID0gZnVuY3Rpb24gKHIsIHMsIG8pIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBRLnNlcnZpY2VSZXF1ZXN0KGJhc2VVcmwgKyAnLycgKyB4LCByLCBzLCBvKTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG4iLCJuYW1lc3BhY2UgSW5kb3RhbGVudCB7XG4gICAgZXhwb3J0IGludGVyZmFjZSBHZXROZXh0TnVtYmVyUmVxdWVzdCBleHRlbmRzIFNlcmVuaXR5LlNlcnZpY2VSZXF1ZXN0IHtcbiAgICAgICAgUHJlZml4Pzogc3RyaW5nO1xuICAgICAgICBMZW5ndGg/OiBudW1iZXI7XG4gICAgfVxufVxuIiwibmFtZXNwYWNlIEluZG90YWxlbnQge1xuICAgIGV4cG9ydCBpbnRlcmZhY2UgR2V0TmV4dE51bWJlclJlc3BvbnNlIGV4dGVuZHMgU2VyZW5pdHkuU2VydmljZVJlc3BvbnNlIHtcbiAgICAgICAgTnVtYmVyPzogbnVtYmVyO1xuICAgICAgICBTZXJpYWw/OiBzdHJpbmc7XG4gICAgfVxufVxuIiwibmFtZXNwYWNlIEluZG90YWxlbnQuTWVtYmVyc2hpcCB7XHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIENoYW5nZVBhc3N3b3JkRm9ybSB7XHJcbiAgICAgICAgT2xkUGFzc3dvcmQ6IFNlcmVuaXR5LlBhc3N3b3JkRWRpdG9yO1xyXG4gICAgICAgIE5ld1Bhc3N3b3JkOiBTZXJlbml0eS5QYXNzd29yZEVkaXRvcjtcclxuICAgICAgICBDb25maXJtUGFzc3dvcmQ6IFNlcmVuaXR5LlBhc3N3b3JkRWRpdG9yO1xyXG4gICAgfVxyXG5cclxuICAgIGV4cG9ydCBjbGFzcyBDaGFuZ2VQYXNzd29yZEZvcm0gZXh0ZW5kcyBTZXJlbml0eS5QcmVmaXhlZENvbnRleHQge1xyXG4gICAgICAgIHN0YXRpYyBmb3JtS2V5ID0gJ01lbWJlcnNoaXAuQ2hhbmdlUGFzc3dvcmQnO1xyXG4gICAgICAgIHByaXZhdGUgc3RhdGljIGluaXQ6IGJvb2xlYW47XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKHByZWZpeDogc3RyaW5nKSB7XHJcbiAgICAgICAgICAgIHN1cGVyKHByZWZpeCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoIUNoYW5nZVBhc3N3b3JkRm9ybS5pbml0KSAge1xyXG4gICAgICAgICAgICAgICAgQ2hhbmdlUGFzc3dvcmRGb3JtLmluaXQgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBzID0gU2VyZW5pdHk7XHJcbiAgICAgICAgICAgICAgICB2YXIgdzAgPSBzLlBhc3N3b3JkRWRpdG9yO1xyXG5cclxuICAgICAgICAgICAgICAgIFEuaW5pdEZvcm1UeXBlKENoYW5nZVBhc3N3b3JkRm9ybSwgW1xyXG4gICAgICAgICAgICAgICAgICAgICdPbGRQYXNzd29yZCcsIHcwLFxyXG4gICAgICAgICAgICAgICAgICAgICdOZXdQYXNzd29yZCcsIHcwLFxyXG4gICAgICAgICAgICAgICAgICAgICdDb25maXJtUGFzc3dvcmQnLCB3MFxyXG4gICAgICAgICAgICAgICAgXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwibmFtZXNwYWNlIEluZG90YWxlbnQuTWVtYmVyc2hpcCB7XHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIENoYW5nZVBhc3N3b3JkUmVxdWVzdCBleHRlbmRzIFNlcmVuaXR5LlNlcnZpY2VSZXF1ZXN0IHtcclxuICAgICAgICBPbGRQYXNzd29yZD86IHN0cmluZztcclxuICAgICAgICBOZXdQYXNzd29yZD86IHN0cmluZztcclxuICAgICAgICBDb25maXJtUGFzc3dvcmQ/OiBzdHJpbmc7XHJcbiAgICB9XHJcbn1cclxuXHJcbiIsIm5hbWVzcGFjZSBJbmRvdGFsZW50Lk1lbWJlcnNoaXAge1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBGb3Jnb3RQYXNzd29yZEZvcm0ge1xyXG4gICAgICAgIEVtYWlsOiBTZXJlbml0eS5FbWFpbEFkZHJlc3NFZGl0b3I7XHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IGNsYXNzIEZvcmdvdFBhc3N3b3JkRm9ybSBleHRlbmRzIFNlcmVuaXR5LlByZWZpeGVkQ29udGV4dCB7XHJcbiAgICAgICAgc3RhdGljIGZvcm1LZXkgPSAnTWVtYmVyc2hpcC5Gb3Jnb3RQYXNzd29yZCc7XHJcbiAgICAgICAgcHJpdmF0ZSBzdGF0aWMgaW5pdDogYm9vbGVhbjtcclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IocHJlZml4OiBzdHJpbmcpIHtcclxuICAgICAgICAgICAgc3VwZXIocHJlZml4KTtcclxuXHJcbiAgICAgICAgICAgIGlmICghRm9yZ290UGFzc3dvcmRGb3JtLmluaXQpICB7XHJcbiAgICAgICAgICAgICAgICBGb3Jnb3RQYXNzd29yZEZvcm0uaW5pdCA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIHMgPSBTZXJlbml0eTtcclxuICAgICAgICAgICAgICAgIHZhciB3MCA9IHMuRW1haWxBZGRyZXNzRWRpdG9yO1xyXG5cclxuICAgICAgICAgICAgICAgIFEuaW5pdEZvcm1UeXBlKEZvcmdvdFBhc3N3b3JkRm9ybSwgW1xyXG4gICAgICAgICAgICAgICAgICAgICdFbWFpbCcsIHcwXHJcbiAgICAgICAgICAgICAgICBdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJuYW1lc3BhY2UgSW5kb3RhbGVudC5NZW1iZXJzaGlwIHtcclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgRm9yZ290UGFzc3dvcmRSZXF1ZXN0IGV4dGVuZHMgU2VyZW5pdHkuU2VydmljZVJlcXVlc3Qge1xyXG4gICAgICAgIEVtYWlsPzogc3RyaW5nO1xyXG4gICAgfVxyXG59XHJcblxyXG4iLCJuYW1lc3BhY2UgSW5kb3RhbGVudC5NZW1iZXJzaGlwIHtcclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgTG9naW5Gb3JtIHtcclxuICAgICAgICBVc2VybmFtZTogU2VyZW5pdHkuU3RyaW5nRWRpdG9yO1xyXG4gICAgICAgIFBhc3N3b3JkOiBTZXJlbml0eS5QYXNzd29yZEVkaXRvcjtcclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgY2xhc3MgTG9naW5Gb3JtIGV4dGVuZHMgU2VyZW5pdHkuUHJlZml4ZWRDb250ZXh0IHtcclxuICAgICAgICBzdGF0aWMgZm9ybUtleSA9ICdNZW1iZXJzaGlwLkxvZ2luJztcclxuICAgICAgICBwcml2YXRlIHN0YXRpYyBpbml0OiBib29sZWFuO1xyXG5cclxuICAgICAgICBjb25zdHJ1Y3RvcihwcmVmaXg6IHN0cmluZykge1xyXG4gICAgICAgICAgICBzdXBlcihwcmVmaXgpO1xyXG5cclxuICAgICAgICAgICAgaWYgKCFMb2dpbkZvcm0uaW5pdCkgIHtcclxuICAgICAgICAgICAgICAgIExvZ2luRm9ybS5pbml0ID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgcyA9IFNlcmVuaXR5O1xyXG4gICAgICAgICAgICAgICAgdmFyIHcwID0gcy5TdHJpbmdFZGl0b3I7XHJcbiAgICAgICAgICAgICAgICB2YXIgdzEgPSBzLlBhc3N3b3JkRWRpdG9yO1xyXG5cclxuICAgICAgICAgICAgICAgIFEuaW5pdEZvcm1UeXBlKExvZ2luRm9ybSwgW1xyXG4gICAgICAgICAgICAgICAgICAgICdVc2VybmFtZScsIHcwLFxyXG4gICAgICAgICAgICAgICAgICAgICdQYXNzd29yZCcsIHcxXHJcbiAgICAgICAgICAgICAgICBdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJuYW1lc3BhY2UgSW5kb3RhbGVudC5NZW1iZXJzaGlwIHtcclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgTG9naW5SZXF1ZXN0IGV4dGVuZHMgU2VyZW5pdHkuU2VydmljZVJlcXVlc3Qge1xyXG4gICAgICAgIFVzZXJuYW1lPzogc3RyaW5nO1xyXG4gICAgICAgIFBhc3N3b3JkPzogc3RyaW5nO1xyXG4gICAgfVxyXG59XHJcblxyXG4iLCJuYW1lc3BhY2UgSW5kb3RhbGVudC5NZW1iZXJzaGlwIHtcclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgUmVzZXRQYXNzd29yZEZvcm0ge1xyXG4gICAgICAgIE5ld1Bhc3N3b3JkOiBTZXJlbml0eS5QYXNzd29yZEVkaXRvcjtcclxuICAgICAgICBDb25maXJtUGFzc3dvcmQ6IFNlcmVuaXR5LlBhc3N3b3JkRWRpdG9yO1xyXG4gICAgfVxyXG5cclxuICAgIGV4cG9ydCBjbGFzcyBSZXNldFBhc3N3b3JkRm9ybSBleHRlbmRzIFNlcmVuaXR5LlByZWZpeGVkQ29udGV4dCB7XHJcbiAgICAgICAgc3RhdGljIGZvcm1LZXkgPSAnTWVtYmVyc2hpcC5SZXNldFBhc3N3b3JkJztcclxuICAgICAgICBwcml2YXRlIHN0YXRpYyBpbml0OiBib29sZWFuO1xyXG5cclxuICAgICAgICBjb25zdHJ1Y3RvcihwcmVmaXg6IHN0cmluZykge1xyXG4gICAgICAgICAgICBzdXBlcihwcmVmaXgpO1xyXG5cclxuICAgICAgICAgICAgaWYgKCFSZXNldFBhc3N3b3JkRm9ybS5pbml0KSAge1xyXG4gICAgICAgICAgICAgICAgUmVzZXRQYXNzd29yZEZvcm0uaW5pdCA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIHMgPSBTZXJlbml0eTtcclxuICAgICAgICAgICAgICAgIHZhciB3MCA9IHMuUGFzc3dvcmRFZGl0b3I7XHJcblxyXG4gICAgICAgICAgICAgICAgUS5pbml0Rm9ybVR5cGUoUmVzZXRQYXNzd29yZEZvcm0sIFtcclxuICAgICAgICAgICAgICAgICAgICAnTmV3UGFzc3dvcmQnLCB3MCxcclxuICAgICAgICAgICAgICAgICAgICAnQ29uZmlybVBhc3N3b3JkJywgdzBcclxuICAgICAgICAgICAgICAgIF0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIm5hbWVzcGFjZSBJbmRvdGFsZW50Lk1lbWJlcnNoaXAge1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBSZXNldFBhc3N3b3JkUmVxdWVzdCBleHRlbmRzIFNlcmVuaXR5LlNlcnZpY2VSZXF1ZXN0IHtcclxuICAgICAgICBUb2tlbj86IHN0cmluZztcclxuICAgICAgICBOZXdQYXNzd29yZD86IHN0cmluZztcclxuICAgICAgICBDb25maXJtUGFzc3dvcmQ/OiBzdHJpbmc7XHJcbiAgICB9XHJcbn1cclxuXHJcbiIsIm5hbWVzcGFjZSBJbmRvdGFsZW50Lk1lbWJlcnNoaXAge1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBTaWduVXBGb3JtIHtcclxuICAgICAgICBEaXNwbGF5TmFtZTogU2VyZW5pdHkuU3RyaW5nRWRpdG9yO1xyXG4gICAgICAgIEVtYWlsOiBTZXJlbml0eS5FbWFpbEFkZHJlc3NFZGl0b3I7XHJcbiAgICAgICAgQ29uZmlybUVtYWlsOiBTZXJlbml0eS5FbWFpbEFkZHJlc3NFZGl0b3I7XHJcbiAgICAgICAgUGFzc3dvcmQ6IFNlcmVuaXR5LlBhc3N3b3JkRWRpdG9yO1xyXG4gICAgICAgIENvbmZpcm1QYXNzd29yZDogU2VyZW5pdHkuUGFzc3dvcmRFZGl0b3I7XHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IGNsYXNzIFNpZ25VcEZvcm0gZXh0ZW5kcyBTZXJlbml0eS5QcmVmaXhlZENvbnRleHQge1xyXG4gICAgICAgIHN0YXRpYyBmb3JtS2V5ID0gJ01lbWJlcnNoaXAuU2lnblVwJztcclxuICAgICAgICBwcml2YXRlIHN0YXRpYyBpbml0OiBib29sZWFuO1xyXG5cclxuICAgICAgICBjb25zdHJ1Y3RvcihwcmVmaXg6IHN0cmluZykge1xyXG4gICAgICAgICAgICBzdXBlcihwcmVmaXgpO1xyXG5cclxuICAgICAgICAgICAgaWYgKCFTaWduVXBGb3JtLmluaXQpICB7XHJcbiAgICAgICAgICAgICAgICBTaWduVXBGb3JtLmluaXQgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBzID0gU2VyZW5pdHk7XHJcbiAgICAgICAgICAgICAgICB2YXIgdzAgPSBzLlN0cmluZ0VkaXRvcjtcclxuICAgICAgICAgICAgICAgIHZhciB3MSA9IHMuRW1haWxBZGRyZXNzRWRpdG9yO1xyXG4gICAgICAgICAgICAgICAgdmFyIHcyID0gcy5QYXNzd29yZEVkaXRvcjtcclxuXHJcbiAgICAgICAgICAgICAgICBRLmluaXRGb3JtVHlwZShTaWduVXBGb3JtLCBbXHJcbiAgICAgICAgICAgICAgICAgICAgJ0Rpc3BsYXlOYW1lJywgdzAsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0VtYWlsJywgdzEsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0NvbmZpcm1FbWFpbCcsIHcxLFxyXG4gICAgICAgICAgICAgICAgICAgICdQYXNzd29yZCcsIHcyLFxyXG4gICAgICAgICAgICAgICAgICAgICdDb25maXJtUGFzc3dvcmQnLCB3MlxyXG4gICAgICAgICAgICAgICAgXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwibmFtZXNwYWNlIEluZG90YWxlbnQuTWVtYmVyc2hpcCB7XHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIFNpZ25VcFJlcXVlc3QgZXh0ZW5kcyBTZXJlbml0eS5TZXJ2aWNlUmVxdWVzdCB7XHJcbiAgICAgICAgRGlzcGxheU5hbWU/OiBzdHJpbmc7XHJcbiAgICAgICAgRW1haWw/OiBzdHJpbmc7XHJcbiAgICAgICAgUGFzc3dvcmQ/OiBzdHJpbmc7XHJcbiAgICB9XHJcbn1cclxuXHJcbiIsIlxyXG5uYW1lc3BhY2UgSW5kb3RhbGVudC5NZXJjaGFuZGlzZSB7XHJcbiAgICBleHBvcnQgY2xhc3MgQnJhbmRDb2x1bW5zIHtcclxuICAgICAgICBzdGF0aWMgY29sdW1uc0tleSA9ICdNZXJjaGFuZGlzZS5CcmFuZCc7XHJcbiAgICB9XHJcbn0iLCJuYW1lc3BhY2UgSW5kb3RhbGVudC5NZXJjaGFuZGlzZSB7XG4gICAgZXhwb3J0IGludGVyZmFjZSBCcmFuZEZvcm0ge1xuICAgICAgICBOYW1lOiBTZXJlbml0eS5TdHJpbmdFZGl0b3I7XG4gICAgICAgIERlc2NyaXB0aW9uOiBTZXJlbml0eS5TdHJpbmdFZGl0b3I7XG4gICAgICAgIEluc2VydERhdGU6IFNlcmVuaXR5LkRhdGVFZGl0b3I7XG4gICAgICAgIEluc2VydFVzZXJJZDogU2VyZW5pdHkuSW50ZWdlckVkaXRvcjtcbiAgICAgICAgVXBkYXRlRGF0ZTogU2VyZW5pdHkuRGF0ZUVkaXRvcjtcbiAgICAgICAgVXBkYXRlVXNlcklkOiBTZXJlbml0eS5JbnRlZ2VyRWRpdG9yO1xuICAgICAgICBUZW5hbnRJZDogU2VyZW5pdHkuSW50ZWdlckVkaXRvcjtcbiAgICB9XG5cbiAgICBleHBvcnQgY2xhc3MgQnJhbmRGb3JtIGV4dGVuZHMgU2VyZW5pdHkuUHJlZml4ZWRDb250ZXh0IHtcbiAgICAgICAgc3RhdGljIGZvcm1LZXkgPSAnTWVyY2hhbmRpc2UuQnJhbmQnO1xuICAgICAgICBwcml2YXRlIHN0YXRpYyBpbml0OiBib29sZWFuO1xuXG4gICAgICAgIGNvbnN0cnVjdG9yKHByZWZpeDogc3RyaW5nKSB7XG4gICAgICAgICAgICBzdXBlcihwcmVmaXgpO1xuXG4gICAgICAgICAgICBpZiAoIUJyYW5kRm9ybS5pbml0KSAge1xuICAgICAgICAgICAgICAgIEJyYW5kRm9ybS5pbml0ID0gdHJ1ZTtcblxuICAgICAgICAgICAgICAgIHZhciBzID0gU2VyZW5pdHk7XG4gICAgICAgICAgICAgICAgdmFyIHcwID0gcy5TdHJpbmdFZGl0b3I7XG4gICAgICAgICAgICAgICAgdmFyIHcxID0gcy5EYXRlRWRpdG9yO1xuICAgICAgICAgICAgICAgIHZhciB3MiA9IHMuSW50ZWdlckVkaXRvcjtcblxuICAgICAgICAgICAgICAgIFEuaW5pdEZvcm1UeXBlKEJyYW5kRm9ybSwgW1xuICAgICAgICAgICAgICAgICAgICAnTmFtZScsIHcwLFxuICAgICAgICAgICAgICAgICAgICAnRGVzY3JpcHRpb24nLCB3MCxcbiAgICAgICAgICAgICAgICAgICAgJ0luc2VydERhdGUnLCB3MSxcbiAgICAgICAgICAgICAgICAgICAgJ0luc2VydFVzZXJJZCcsIHcyLFxuICAgICAgICAgICAgICAgICAgICAnVXBkYXRlRGF0ZScsIHcxLFxuICAgICAgICAgICAgICAgICAgICAnVXBkYXRlVXNlcklkJywgdzIsXG4gICAgICAgICAgICAgICAgICAgICdUZW5hbnRJZCcsIHcyXG4gICAgICAgICAgICAgICAgXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJuYW1lc3BhY2UgSW5kb3RhbGVudC5NZXJjaGFuZGlzZSB7XG4gICAgZXhwb3J0IGludGVyZmFjZSBCcmFuZFJvdyB7XG4gICAgICAgIElkPzogbnVtYmVyO1xuICAgICAgICBOYW1lPzogc3RyaW5nO1xuICAgICAgICBEZXNjcmlwdGlvbj86IHN0cmluZztcbiAgICAgICAgSW5zZXJ0RGF0ZT86IHN0cmluZztcbiAgICAgICAgSW5zZXJ0VXNlcklkPzogbnVtYmVyO1xuICAgICAgICBVcGRhdGVEYXRlPzogc3RyaW5nO1xuICAgICAgICBVcGRhdGVVc2VySWQ/OiBudW1iZXI7XG4gICAgICAgIFRlbmFudElkPzogbnVtYmVyO1xuICAgIH1cblxuICAgIGV4cG9ydCBuYW1lc3BhY2UgQnJhbmRSb3cge1xuICAgICAgICBleHBvcnQgY29uc3QgaWRQcm9wZXJ0eSA9ICdJZCc7XG4gICAgICAgIGV4cG9ydCBjb25zdCBuYW1lUHJvcGVydHkgPSAnTmFtZSc7XG4gICAgICAgIGV4cG9ydCBjb25zdCBsb2NhbFRleHRQcmVmaXggPSAnTWVyY2hhbmRpc2UuQnJhbmQnO1xuICAgICAgICBleHBvcnQgY29uc3QgZGVsZXRlUGVybWlzc2lvbiA9ICdNZXJjaGFuZGlzZTpCcmFuZCc7XG4gICAgICAgIGV4cG9ydCBjb25zdCBpbnNlcnRQZXJtaXNzaW9uID0gJ01lcmNoYW5kaXNlOkJyYW5kJztcbiAgICAgICAgZXhwb3J0IGNvbnN0IHJlYWRQZXJtaXNzaW9uID0gJ01lcmNoYW5kaXNlOkJyYW5kJztcbiAgICAgICAgZXhwb3J0IGNvbnN0IHVwZGF0ZVBlcm1pc3Npb24gPSAnTWVyY2hhbmRpc2U6QnJhbmQnO1xuXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGNvbnN0IGVudW0gRmllbGRzIHtcbiAgICAgICAgICAgIElkID0gXCJJZFwiLFxuICAgICAgICAgICAgTmFtZSA9IFwiTmFtZVwiLFxuICAgICAgICAgICAgRGVzY3JpcHRpb24gPSBcIkRlc2NyaXB0aW9uXCIsXG4gICAgICAgICAgICBJbnNlcnREYXRlID0gXCJJbnNlcnREYXRlXCIsXG4gICAgICAgICAgICBJbnNlcnRVc2VySWQgPSBcIkluc2VydFVzZXJJZFwiLFxuICAgICAgICAgICAgVXBkYXRlRGF0ZSA9IFwiVXBkYXRlRGF0ZVwiLFxuICAgICAgICAgICAgVXBkYXRlVXNlcklkID0gXCJVcGRhdGVVc2VySWRcIixcbiAgICAgICAgICAgIFRlbmFudElkID0gXCJUZW5hbnRJZFwiXG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJuYW1lc3BhY2UgSW5kb3RhbGVudC5NZXJjaGFuZGlzZSB7XG4gICAgZXhwb3J0IG5hbWVzcGFjZSBCcmFuZFNlcnZpY2Uge1xuICAgICAgICBleHBvcnQgY29uc3QgYmFzZVVybCA9ICdNZXJjaGFuZGlzZS9CcmFuZCc7XG5cbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gQ3JlYXRlKHJlcXVlc3Q6IFNlcmVuaXR5LlNhdmVSZXF1ZXN0PEJyYW5kUm93Piwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5TYXZlUmVzcG9uc2UpID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gVXBkYXRlKHJlcXVlc3Q6IFNlcmVuaXR5LlNhdmVSZXF1ZXN0PEJyYW5kUm93Piwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5TYXZlUmVzcG9uc2UpID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gRGVsZXRlKHJlcXVlc3Q6IFNlcmVuaXR5LkRlbGV0ZVJlcXVlc3QsIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuRGVsZXRlUmVzcG9uc2UpID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gUmV0cmlldmUocmVxdWVzdDogU2VyZW5pdHkuUmV0cmlldmVSZXF1ZXN0LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5LlJldHJpZXZlUmVzcG9uc2U8QnJhbmRSb3c+KSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIExpc3QocmVxdWVzdDogU2VyZW5pdHkuTGlzdFJlcXVlc3QsIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuTGlzdFJlc3BvbnNlPEJyYW5kUm93PikgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xuXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGNvbnN0IGVudW0gTWV0aG9kcyB7XG4gICAgICAgICAgICBDcmVhdGUgPSBcIk1lcmNoYW5kaXNlL0JyYW5kL0NyZWF0ZVwiLFxuICAgICAgICAgICAgVXBkYXRlID0gXCJNZXJjaGFuZGlzZS9CcmFuZC9VcGRhdGVcIixcbiAgICAgICAgICAgIERlbGV0ZSA9IFwiTWVyY2hhbmRpc2UvQnJhbmQvRGVsZXRlXCIsXG4gICAgICAgICAgICBSZXRyaWV2ZSA9IFwiTWVyY2hhbmRpc2UvQnJhbmQvUmV0cmlldmVcIixcbiAgICAgICAgICAgIExpc3QgPSBcIk1lcmNoYW5kaXNlL0JyYW5kL0xpc3RcIlxuICAgICAgICB9XG5cbiAgICAgICAgW1xuICAgICAgICAgICAgJ0NyZWF0ZScsIFxuICAgICAgICAgICAgJ1VwZGF0ZScsIFxuICAgICAgICAgICAgJ0RlbGV0ZScsIFxuICAgICAgICAgICAgJ1JldHJpZXZlJywgXG4gICAgICAgICAgICAnTGlzdCdcbiAgICAgICAgXS5mb3JFYWNoKHggPT4ge1xuICAgICAgICAgICAgKDxhbnk+QnJhbmRTZXJ2aWNlKVt4XSA9IGZ1bmN0aW9uIChyLCBzLCBvKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFEuc2VydmljZVJlcXVlc3QoYmFzZVVybCArICcvJyArIHgsIHIsIHMsIG8pO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuIiwiXHJcbm5hbWVzcGFjZSBJbmRvdGFsZW50Lk1lcmNoYW5kaXNlIHtcclxuICAgIGV4cG9ydCBjbGFzcyBDYXRlZ29yeUNvbHVtbnMge1xyXG4gICAgICAgIHN0YXRpYyBjb2x1bW5zS2V5ID0gJ01lcmNoYW5kaXNlLkNhdGVnb3J5JztcclxuICAgIH1cclxufSIsIm5hbWVzcGFjZSBJbmRvdGFsZW50Lk1lcmNoYW5kaXNlIHtcbiAgICBleHBvcnQgaW50ZXJmYWNlIENhdGVnb3J5Rm9ybSB7XG4gICAgICAgIE5hbWU6IFNlcmVuaXR5LlN0cmluZ0VkaXRvcjtcbiAgICAgICAgRGVzY3JpcHRpb246IFNlcmVuaXR5LlN0cmluZ0VkaXRvcjtcbiAgICAgICAgSW5zZXJ0RGF0ZTogU2VyZW5pdHkuRGF0ZUVkaXRvcjtcbiAgICAgICAgSW5zZXJ0VXNlcklkOiBTZXJlbml0eS5JbnRlZ2VyRWRpdG9yO1xuICAgICAgICBVcGRhdGVEYXRlOiBTZXJlbml0eS5EYXRlRWRpdG9yO1xuICAgICAgICBVcGRhdGVVc2VySWQ6IFNlcmVuaXR5LkludGVnZXJFZGl0b3I7XG4gICAgICAgIFRlbmFudElkOiBTZXJlbml0eS5JbnRlZ2VyRWRpdG9yO1xuICAgIH1cblxuICAgIGV4cG9ydCBjbGFzcyBDYXRlZ29yeUZvcm0gZXh0ZW5kcyBTZXJlbml0eS5QcmVmaXhlZENvbnRleHQge1xuICAgICAgICBzdGF0aWMgZm9ybUtleSA9ICdNZXJjaGFuZGlzZS5DYXRlZ29yeSc7XG4gICAgICAgIHByaXZhdGUgc3RhdGljIGluaXQ6IGJvb2xlYW47XG5cbiAgICAgICAgY29uc3RydWN0b3IocHJlZml4OiBzdHJpbmcpIHtcbiAgICAgICAgICAgIHN1cGVyKHByZWZpeCk7XG5cbiAgICAgICAgICAgIGlmICghQ2F0ZWdvcnlGb3JtLmluaXQpICB7XG4gICAgICAgICAgICAgICAgQ2F0ZWdvcnlGb3JtLmluaXQgPSB0cnVlO1xuXG4gICAgICAgICAgICAgICAgdmFyIHMgPSBTZXJlbml0eTtcbiAgICAgICAgICAgICAgICB2YXIgdzAgPSBzLlN0cmluZ0VkaXRvcjtcbiAgICAgICAgICAgICAgICB2YXIgdzEgPSBzLkRhdGVFZGl0b3I7XG4gICAgICAgICAgICAgICAgdmFyIHcyID0gcy5JbnRlZ2VyRWRpdG9yO1xuXG4gICAgICAgICAgICAgICAgUS5pbml0Rm9ybVR5cGUoQ2F0ZWdvcnlGb3JtLCBbXG4gICAgICAgICAgICAgICAgICAgICdOYW1lJywgdzAsXG4gICAgICAgICAgICAgICAgICAgICdEZXNjcmlwdGlvbicsIHcwLFxuICAgICAgICAgICAgICAgICAgICAnSW5zZXJ0RGF0ZScsIHcxLFxuICAgICAgICAgICAgICAgICAgICAnSW5zZXJ0VXNlcklkJywgdzIsXG4gICAgICAgICAgICAgICAgICAgICdVcGRhdGVEYXRlJywgdzEsXG4gICAgICAgICAgICAgICAgICAgICdVcGRhdGVVc2VySWQnLCB3MixcbiAgICAgICAgICAgICAgICAgICAgJ1RlbmFudElkJywgdzJcbiAgICAgICAgICAgICAgICBdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbiIsIm5hbWVzcGFjZSBJbmRvdGFsZW50Lk1lcmNoYW5kaXNlIHtcbiAgICBleHBvcnQgaW50ZXJmYWNlIENhdGVnb3J5Um93IHtcbiAgICAgICAgSWQ/OiBudW1iZXI7XG4gICAgICAgIE5hbWU/OiBzdHJpbmc7XG4gICAgICAgIERlc2NyaXB0aW9uPzogc3RyaW5nO1xuICAgICAgICBJbnNlcnREYXRlPzogc3RyaW5nO1xuICAgICAgICBJbnNlcnRVc2VySWQ/OiBudW1iZXI7XG4gICAgICAgIFVwZGF0ZURhdGU/OiBzdHJpbmc7XG4gICAgICAgIFVwZGF0ZVVzZXJJZD86IG51bWJlcjtcbiAgICAgICAgVGVuYW50SWQ/OiBudW1iZXI7XG4gICAgfVxuXG4gICAgZXhwb3J0IG5hbWVzcGFjZSBDYXRlZ29yeVJvdyB7XG4gICAgICAgIGV4cG9ydCBjb25zdCBpZFByb3BlcnR5ID0gJ0lkJztcbiAgICAgICAgZXhwb3J0IGNvbnN0IG5hbWVQcm9wZXJ0eSA9ICdOYW1lJztcbiAgICAgICAgZXhwb3J0IGNvbnN0IGxvY2FsVGV4dFByZWZpeCA9ICdNZXJjaGFuZGlzZS5DYXRlZ29yeSc7XG4gICAgICAgIGV4cG9ydCBjb25zdCBkZWxldGVQZXJtaXNzaW9uID0gJ01lcmNoYW5kaXNlOkNhdGVnb3J5JztcbiAgICAgICAgZXhwb3J0IGNvbnN0IGluc2VydFBlcm1pc3Npb24gPSAnTWVyY2hhbmRpc2U6Q2F0ZWdvcnknO1xuICAgICAgICBleHBvcnQgY29uc3QgcmVhZFBlcm1pc3Npb24gPSAnTWVyY2hhbmRpc2U6Q2F0ZWdvcnknO1xuICAgICAgICBleHBvcnQgY29uc3QgdXBkYXRlUGVybWlzc2lvbiA9ICdNZXJjaGFuZGlzZTpDYXRlZ29yeSc7XG5cbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgY29uc3QgZW51bSBGaWVsZHMge1xuICAgICAgICAgICAgSWQgPSBcIklkXCIsXG4gICAgICAgICAgICBOYW1lID0gXCJOYW1lXCIsXG4gICAgICAgICAgICBEZXNjcmlwdGlvbiA9IFwiRGVzY3JpcHRpb25cIixcbiAgICAgICAgICAgIEluc2VydERhdGUgPSBcIkluc2VydERhdGVcIixcbiAgICAgICAgICAgIEluc2VydFVzZXJJZCA9IFwiSW5zZXJ0VXNlcklkXCIsXG4gICAgICAgICAgICBVcGRhdGVEYXRlID0gXCJVcGRhdGVEYXRlXCIsXG4gICAgICAgICAgICBVcGRhdGVVc2VySWQgPSBcIlVwZGF0ZVVzZXJJZFwiLFxuICAgICAgICAgICAgVGVuYW50SWQgPSBcIlRlbmFudElkXCJcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsIm5hbWVzcGFjZSBJbmRvdGFsZW50Lk1lcmNoYW5kaXNlIHtcbiAgICBleHBvcnQgbmFtZXNwYWNlIENhdGVnb3J5U2VydmljZSB7XG4gICAgICAgIGV4cG9ydCBjb25zdCBiYXNlVXJsID0gJ01lcmNoYW5kaXNlL0NhdGVnb3J5JztcblxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBDcmVhdGUocmVxdWVzdDogU2VyZW5pdHkuU2F2ZVJlcXVlc3Q8Q2F0ZWdvcnlSb3c+LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5LlNhdmVSZXNwb25zZSkgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBVcGRhdGUocmVxdWVzdDogU2VyZW5pdHkuU2F2ZVJlcXVlc3Q8Q2F0ZWdvcnlSb3c+LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5LlNhdmVSZXNwb25zZSkgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBEZWxldGUocmVxdWVzdDogU2VyZW5pdHkuRGVsZXRlUmVxdWVzdCwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5EZWxldGVSZXNwb25zZSkgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBSZXRyaWV2ZShyZXF1ZXN0OiBTZXJlbml0eS5SZXRyaWV2ZVJlcXVlc3QsIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuUmV0cmlldmVSZXNwb25zZTxDYXRlZ29yeVJvdz4pID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gTGlzdChyZXF1ZXN0OiBTZXJlbml0eS5MaXN0UmVxdWVzdCwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5MaXN0UmVzcG9uc2U8Q2F0ZWdvcnlSb3c+KSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XG5cbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgY29uc3QgZW51bSBNZXRob2RzIHtcbiAgICAgICAgICAgIENyZWF0ZSA9IFwiTWVyY2hhbmRpc2UvQ2F0ZWdvcnkvQ3JlYXRlXCIsXG4gICAgICAgICAgICBVcGRhdGUgPSBcIk1lcmNoYW5kaXNlL0NhdGVnb3J5L1VwZGF0ZVwiLFxuICAgICAgICAgICAgRGVsZXRlID0gXCJNZXJjaGFuZGlzZS9DYXRlZ29yeS9EZWxldGVcIixcbiAgICAgICAgICAgIFJldHJpZXZlID0gXCJNZXJjaGFuZGlzZS9DYXRlZ29yeS9SZXRyaWV2ZVwiLFxuICAgICAgICAgICAgTGlzdCA9IFwiTWVyY2hhbmRpc2UvQ2F0ZWdvcnkvTGlzdFwiXG4gICAgICAgIH1cblxuICAgICAgICBbXG4gICAgICAgICAgICAnQ3JlYXRlJywgXG4gICAgICAgICAgICAnVXBkYXRlJywgXG4gICAgICAgICAgICAnRGVsZXRlJywgXG4gICAgICAgICAgICAnUmV0cmlldmUnLCBcbiAgICAgICAgICAgICdMaXN0J1xuICAgICAgICBdLmZvckVhY2goeCA9PiB7XG4gICAgICAgICAgICAoPGFueT5DYXRlZ29yeVNlcnZpY2UpW3hdID0gZnVuY3Rpb24gKHIsIHMsIG8pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gUS5zZXJ2aWNlUmVxdWVzdChiYXNlVXJsICsgJy8nICsgeCwgciwgcywgbyk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9KTtcbiAgICB9XG59XG4iLCJcclxubmFtZXNwYWNlIEluZG90YWxlbnQuTWVyY2hhbmRpc2Uge1xyXG4gICAgZXhwb3J0IGNsYXNzIENvbG91ckNvbHVtbnMge1xyXG4gICAgICAgIHN0YXRpYyBjb2x1bW5zS2V5ID0gJ01lcmNoYW5kaXNlLkNvbG91cic7XHJcbiAgICB9XHJcbn0iLCJuYW1lc3BhY2UgSW5kb3RhbGVudC5NZXJjaGFuZGlzZSB7XG4gICAgZXhwb3J0IGludGVyZmFjZSBDb2xvdXJGb3JtIHtcbiAgICAgICAgTmFtZTogU2VyZW5pdHkuU3RyaW5nRWRpdG9yO1xuICAgICAgICBEZXNjcmlwdGlvbjogU2VyZW5pdHkuU3RyaW5nRWRpdG9yO1xuICAgICAgICBJbnNlcnREYXRlOiBTZXJlbml0eS5EYXRlRWRpdG9yO1xuICAgICAgICBJbnNlcnRVc2VySWQ6IFNlcmVuaXR5LkludGVnZXJFZGl0b3I7XG4gICAgICAgIFVwZGF0ZURhdGU6IFNlcmVuaXR5LkRhdGVFZGl0b3I7XG4gICAgICAgIFVwZGF0ZVVzZXJJZDogU2VyZW5pdHkuSW50ZWdlckVkaXRvcjtcbiAgICAgICAgVGVuYW50SWQ6IFNlcmVuaXR5LkludGVnZXJFZGl0b3I7XG4gICAgfVxuXG4gICAgZXhwb3J0IGNsYXNzIENvbG91ckZvcm0gZXh0ZW5kcyBTZXJlbml0eS5QcmVmaXhlZENvbnRleHQge1xuICAgICAgICBzdGF0aWMgZm9ybUtleSA9ICdNZXJjaGFuZGlzZS5Db2xvdXInO1xuICAgICAgICBwcml2YXRlIHN0YXRpYyBpbml0OiBib29sZWFuO1xuXG4gICAgICAgIGNvbnN0cnVjdG9yKHByZWZpeDogc3RyaW5nKSB7XG4gICAgICAgICAgICBzdXBlcihwcmVmaXgpO1xuXG4gICAgICAgICAgICBpZiAoIUNvbG91ckZvcm0uaW5pdCkgIHtcbiAgICAgICAgICAgICAgICBDb2xvdXJGb3JtLmluaXQgPSB0cnVlO1xuXG4gICAgICAgICAgICAgICAgdmFyIHMgPSBTZXJlbml0eTtcbiAgICAgICAgICAgICAgICB2YXIgdzAgPSBzLlN0cmluZ0VkaXRvcjtcbiAgICAgICAgICAgICAgICB2YXIgdzEgPSBzLkRhdGVFZGl0b3I7XG4gICAgICAgICAgICAgICAgdmFyIHcyID0gcy5JbnRlZ2VyRWRpdG9yO1xuXG4gICAgICAgICAgICAgICAgUS5pbml0Rm9ybVR5cGUoQ29sb3VyRm9ybSwgW1xuICAgICAgICAgICAgICAgICAgICAnTmFtZScsIHcwLFxuICAgICAgICAgICAgICAgICAgICAnRGVzY3JpcHRpb24nLCB3MCxcbiAgICAgICAgICAgICAgICAgICAgJ0luc2VydERhdGUnLCB3MSxcbiAgICAgICAgICAgICAgICAgICAgJ0luc2VydFVzZXJJZCcsIHcyLFxuICAgICAgICAgICAgICAgICAgICAnVXBkYXRlRGF0ZScsIHcxLFxuICAgICAgICAgICAgICAgICAgICAnVXBkYXRlVXNlcklkJywgdzIsXG4gICAgICAgICAgICAgICAgICAgICdUZW5hbnRJZCcsIHcyXG4gICAgICAgICAgICAgICAgXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJuYW1lc3BhY2UgSW5kb3RhbGVudC5NZXJjaGFuZGlzZSB7XG4gICAgZXhwb3J0IGludGVyZmFjZSBDb2xvdXJSb3cge1xuICAgICAgICBJZD86IG51bWJlcjtcbiAgICAgICAgTmFtZT86IHN0cmluZztcbiAgICAgICAgRGVzY3JpcHRpb24/OiBzdHJpbmc7XG4gICAgICAgIEluc2VydERhdGU/OiBzdHJpbmc7XG4gICAgICAgIEluc2VydFVzZXJJZD86IG51bWJlcjtcbiAgICAgICAgVXBkYXRlRGF0ZT86IHN0cmluZztcbiAgICAgICAgVXBkYXRlVXNlcklkPzogbnVtYmVyO1xuICAgICAgICBUZW5hbnRJZD86IG51bWJlcjtcbiAgICB9XG5cbiAgICBleHBvcnQgbmFtZXNwYWNlIENvbG91clJvdyB7XG4gICAgICAgIGV4cG9ydCBjb25zdCBpZFByb3BlcnR5ID0gJ0lkJztcbiAgICAgICAgZXhwb3J0IGNvbnN0IG5hbWVQcm9wZXJ0eSA9ICdOYW1lJztcbiAgICAgICAgZXhwb3J0IGNvbnN0IGxvY2FsVGV4dFByZWZpeCA9ICdNZXJjaGFuZGlzZS5Db2xvdXInO1xuICAgICAgICBleHBvcnQgY29uc3QgZGVsZXRlUGVybWlzc2lvbiA9ICdNZXJjaGFuZGlzZTpDb2xvdXInO1xuICAgICAgICBleHBvcnQgY29uc3QgaW5zZXJ0UGVybWlzc2lvbiA9ICdNZXJjaGFuZGlzZTpDb2xvdXInO1xuICAgICAgICBleHBvcnQgY29uc3QgcmVhZFBlcm1pc3Npb24gPSAnTWVyY2hhbmRpc2U6Q29sb3VyJztcbiAgICAgICAgZXhwb3J0IGNvbnN0IHVwZGF0ZVBlcm1pc3Npb24gPSAnTWVyY2hhbmRpc2U6Q29sb3VyJztcblxuICAgICAgICBleHBvcnQgZGVjbGFyZSBjb25zdCBlbnVtIEZpZWxkcyB7XG4gICAgICAgICAgICBJZCA9IFwiSWRcIixcbiAgICAgICAgICAgIE5hbWUgPSBcIk5hbWVcIixcbiAgICAgICAgICAgIERlc2NyaXB0aW9uID0gXCJEZXNjcmlwdGlvblwiLFxuICAgICAgICAgICAgSW5zZXJ0RGF0ZSA9IFwiSW5zZXJ0RGF0ZVwiLFxuICAgICAgICAgICAgSW5zZXJ0VXNlcklkID0gXCJJbnNlcnRVc2VySWRcIixcbiAgICAgICAgICAgIFVwZGF0ZURhdGUgPSBcIlVwZGF0ZURhdGVcIixcbiAgICAgICAgICAgIFVwZGF0ZVVzZXJJZCA9IFwiVXBkYXRlVXNlcklkXCIsXG4gICAgICAgICAgICBUZW5hbnRJZCA9IFwiVGVuYW50SWRcIlxuICAgICAgICB9XG4gICAgfVxufVxuIiwibmFtZXNwYWNlIEluZG90YWxlbnQuTWVyY2hhbmRpc2Uge1xuICAgIGV4cG9ydCBuYW1lc3BhY2UgQ29sb3VyU2VydmljZSB7XG4gICAgICAgIGV4cG9ydCBjb25zdCBiYXNlVXJsID0gJ01lcmNoYW5kaXNlL0NvbG91cic7XG5cbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gQ3JlYXRlKHJlcXVlc3Q6IFNlcmVuaXR5LlNhdmVSZXF1ZXN0PENvbG91clJvdz4sIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuU2F2ZVJlc3BvbnNlKSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIFVwZGF0ZShyZXF1ZXN0OiBTZXJlbml0eS5TYXZlUmVxdWVzdDxDb2xvdXJSb3c+LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5LlNhdmVSZXNwb25zZSkgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBEZWxldGUocmVxdWVzdDogU2VyZW5pdHkuRGVsZXRlUmVxdWVzdCwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5EZWxldGVSZXNwb25zZSkgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBSZXRyaWV2ZShyZXF1ZXN0OiBTZXJlbml0eS5SZXRyaWV2ZVJlcXVlc3QsIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuUmV0cmlldmVSZXNwb25zZTxDb2xvdXJSb3c+KSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIExpc3QocmVxdWVzdDogU2VyZW5pdHkuTGlzdFJlcXVlc3QsIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuTGlzdFJlc3BvbnNlPENvbG91clJvdz4pID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcblxuICAgICAgICBleHBvcnQgZGVjbGFyZSBjb25zdCBlbnVtIE1ldGhvZHMge1xuICAgICAgICAgICAgQ3JlYXRlID0gXCJNZXJjaGFuZGlzZS9Db2xvdXIvQ3JlYXRlXCIsXG4gICAgICAgICAgICBVcGRhdGUgPSBcIk1lcmNoYW5kaXNlL0NvbG91ci9VcGRhdGVcIixcbiAgICAgICAgICAgIERlbGV0ZSA9IFwiTWVyY2hhbmRpc2UvQ29sb3VyL0RlbGV0ZVwiLFxuICAgICAgICAgICAgUmV0cmlldmUgPSBcIk1lcmNoYW5kaXNlL0NvbG91ci9SZXRyaWV2ZVwiLFxuICAgICAgICAgICAgTGlzdCA9IFwiTWVyY2hhbmRpc2UvQ29sb3VyL0xpc3RcIlxuICAgICAgICB9XG5cbiAgICAgICAgW1xuICAgICAgICAgICAgJ0NyZWF0ZScsIFxuICAgICAgICAgICAgJ1VwZGF0ZScsIFxuICAgICAgICAgICAgJ0RlbGV0ZScsIFxuICAgICAgICAgICAgJ1JldHJpZXZlJywgXG4gICAgICAgICAgICAnTGlzdCdcbiAgICAgICAgXS5mb3JFYWNoKHggPT4ge1xuICAgICAgICAgICAgKDxhbnk+Q29sb3VyU2VydmljZSlbeF0gPSBmdW5jdGlvbiAociwgcywgbykge1xuICAgICAgICAgICAgICAgIHJldHVybiBRLnNlcnZpY2VSZXF1ZXN0KGJhc2VVcmwgKyAnLycgKyB4LCByLCBzLCBvKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbiIsIlxyXG5uYW1lc3BhY2UgSW5kb3RhbGVudC5NZXJjaGFuZGlzZSB7XHJcbiAgICBleHBvcnQgY2xhc3MgRmxhdm91ckNvbHVtbnMge1xyXG4gICAgICAgIHN0YXRpYyBjb2x1bW5zS2V5ID0gJ01lcmNoYW5kaXNlLkZsYXZvdXInO1xyXG4gICAgfVxyXG59IiwibmFtZXNwYWNlIEluZG90YWxlbnQuTWVyY2hhbmRpc2Uge1xuICAgIGV4cG9ydCBpbnRlcmZhY2UgRmxhdm91ckZvcm0ge1xuICAgICAgICBOYW1lOiBTZXJlbml0eS5TdHJpbmdFZGl0b3I7XG4gICAgICAgIERlc2NyaXB0aW9uOiBTZXJlbml0eS5TdHJpbmdFZGl0b3I7XG4gICAgICAgIEluc2VydERhdGU6IFNlcmVuaXR5LkRhdGVFZGl0b3I7XG4gICAgICAgIEluc2VydFVzZXJJZDogU2VyZW5pdHkuSW50ZWdlckVkaXRvcjtcbiAgICAgICAgVXBkYXRlRGF0ZTogU2VyZW5pdHkuRGF0ZUVkaXRvcjtcbiAgICAgICAgVXBkYXRlVXNlcklkOiBTZXJlbml0eS5JbnRlZ2VyRWRpdG9yO1xuICAgICAgICBUZW5hbnRJZDogU2VyZW5pdHkuSW50ZWdlckVkaXRvcjtcbiAgICB9XG5cbiAgICBleHBvcnQgY2xhc3MgRmxhdm91ckZvcm0gZXh0ZW5kcyBTZXJlbml0eS5QcmVmaXhlZENvbnRleHQge1xuICAgICAgICBzdGF0aWMgZm9ybUtleSA9ICdNZXJjaGFuZGlzZS5GbGF2b3VyJztcbiAgICAgICAgcHJpdmF0ZSBzdGF0aWMgaW5pdDogYm9vbGVhbjtcblxuICAgICAgICBjb25zdHJ1Y3RvcihwcmVmaXg6IHN0cmluZykge1xuICAgICAgICAgICAgc3VwZXIocHJlZml4KTtcblxuICAgICAgICAgICAgaWYgKCFGbGF2b3VyRm9ybS5pbml0KSAge1xuICAgICAgICAgICAgICAgIEZsYXZvdXJGb3JtLmluaXQgPSB0cnVlO1xuXG4gICAgICAgICAgICAgICAgdmFyIHMgPSBTZXJlbml0eTtcbiAgICAgICAgICAgICAgICB2YXIgdzAgPSBzLlN0cmluZ0VkaXRvcjtcbiAgICAgICAgICAgICAgICB2YXIgdzEgPSBzLkRhdGVFZGl0b3I7XG4gICAgICAgICAgICAgICAgdmFyIHcyID0gcy5JbnRlZ2VyRWRpdG9yO1xuXG4gICAgICAgICAgICAgICAgUS5pbml0Rm9ybVR5cGUoRmxhdm91ckZvcm0sIFtcbiAgICAgICAgICAgICAgICAgICAgJ05hbWUnLCB3MCxcbiAgICAgICAgICAgICAgICAgICAgJ0Rlc2NyaXB0aW9uJywgdzAsXG4gICAgICAgICAgICAgICAgICAgICdJbnNlcnREYXRlJywgdzEsXG4gICAgICAgICAgICAgICAgICAgICdJbnNlcnRVc2VySWQnLCB3MixcbiAgICAgICAgICAgICAgICAgICAgJ1VwZGF0ZURhdGUnLCB3MSxcbiAgICAgICAgICAgICAgICAgICAgJ1VwZGF0ZVVzZXJJZCcsIHcyLFxuICAgICAgICAgICAgICAgICAgICAnVGVuYW50SWQnLCB3MlxuICAgICAgICAgICAgICAgIF0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuIiwibmFtZXNwYWNlIEluZG90YWxlbnQuTWVyY2hhbmRpc2Uge1xuICAgIGV4cG9ydCBpbnRlcmZhY2UgRmxhdm91clJvdyB7XG4gICAgICAgIElkPzogbnVtYmVyO1xuICAgICAgICBOYW1lPzogc3RyaW5nO1xuICAgICAgICBEZXNjcmlwdGlvbj86IHN0cmluZztcbiAgICAgICAgSW5zZXJ0RGF0ZT86IHN0cmluZztcbiAgICAgICAgSW5zZXJ0VXNlcklkPzogbnVtYmVyO1xuICAgICAgICBVcGRhdGVEYXRlPzogc3RyaW5nO1xuICAgICAgICBVcGRhdGVVc2VySWQ/OiBudW1iZXI7XG4gICAgICAgIFRlbmFudElkPzogbnVtYmVyO1xuICAgIH1cblxuICAgIGV4cG9ydCBuYW1lc3BhY2UgRmxhdm91clJvdyB7XG4gICAgICAgIGV4cG9ydCBjb25zdCBpZFByb3BlcnR5ID0gJ0lkJztcbiAgICAgICAgZXhwb3J0IGNvbnN0IG5hbWVQcm9wZXJ0eSA9ICdOYW1lJztcbiAgICAgICAgZXhwb3J0IGNvbnN0IGxvY2FsVGV4dFByZWZpeCA9ICdNZXJjaGFuZGlzZS5GbGF2b3VyJztcbiAgICAgICAgZXhwb3J0IGNvbnN0IGRlbGV0ZVBlcm1pc3Npb24gPSAnTWVyY2hhbmRpc2U6Rmxhdm91cic7XG4gICAgICAgIGV4cG9ydCBjb25zdCBpbnNlcnRQZXJtaXNzaW9uID0gJ01lcmNoYW5kaXNlOkZsYXZvdXInO1xuICAgICAgICBleHBvcnQgY29uc3QgcmVhZFBlcm1pc3Npb24gPSAnTWVyY2hhbmRpc2U6Rmxhdm91cic7XG4gICAgICAgIGV4cG9ydCBjb25zdCB1cGRhdGVQZXJtaXNzaW9uID0gJ01lcmNoYW5kaXNlOkZsYXZvdXInO1xuXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGNvbnN0IGVudW0gRmllbGRzIHtcbiAgICAgICAgICAgIElkID0gXCJJZFwiLFxuICAgICAgICAgICAgTmFtZSA9IFwiTmFtZVwiLFxuICAgICAgICAgICAgRGVzY3JpcHRpb24gPSBcIkRlc2NyaXB0aW9uXCIsXG4gICAgICAgICAgICBJbnNlcnREYXRlID0gXCJJbnNlcnREYXRlXCIsXG4gICAgICAgICAgICBJbnNlcnRVc2VySWQgPSBcIkluc2VydFVzZXJJZFwiLFxuICAgICAgICAgICAgVXBkYXRlRGF0ZSA9IFwiVXBkYXRlRGF0ZVwiLFxuICAgICAgICAgICAgVXBkYXRlVXNlcklkID0gXCJVcGRhdGVVc2VySWRcIixcbiAgICAgICAgICAgIFRlbmFudElkID0gXCJUZW5hbnRJZFwiXG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJuYW1lc3BhY2UgSW5kb3RhbGVudC5NZXJjaGFuZGlzZSB7XG4gICAgZXhwb3J0IG5hbWVzcGFjZSBGbGF2b3VyU2VydmljZSB7XG4gICAgICAgIGV4cG9ydCBjb25zdCBiYXNlVXJsID0gJ01lcmNoYW5kaXNlL0ZsYXZvdXInO1xuXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIENyZWF0ZShyZXF1ZXN0OiBTZXJlbml0eS5TYXZlUmVxdWVzdDxGbGF2b3VyUm93Piwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5TYXZlUmVzcG9uc2UpID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gVXBkYXRlKHJlcXVlc3Q6IFNlcmVuaXR5LlNhdmVSZXF1ZXN0PEZsYXZvdXJSb3c+LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5LlNhdmVSZXNwb25zZSkgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBEZWxldGUocmVxdWVzdDogU2VyZW5pdHkuRGVsZXRlUmVxdWVzdCwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5EZWxldGVSZXNwb25zZSkgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBSZXRyaWV2ZShyZXF1ZXN0OiBTZXJlbml0eS5SZXRyaWV2ZVJlcXVlc3QsIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuUmV0cmlldmVSZXNwb25zZTxGbGF2b3VyUm93PikgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBMaXN0KHJlcXVlc3Q6IFNlcmVuaXR5Lkxpc3RSZXF1ZXN0LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5Lkxpc3RSZXNwb25zZTxGbGF2b3VyUm93PikgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xuXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGNvbnN0IGVudW0gTWV0aG9kcyB7XG4gICAgICAgICAgICBDcmVhdGUgPSBcIk1lcmNoYW5kaXNlL0ZsYXZvdXIvQ3JlYXRlXCIsXG4gICAgICAgICAgICBVcGRhdGUgPSBcIk1lcmNoYW5kaXNlL0ZsYXZvdXIvVXBkYXRlXCIsXG4gICAgICAgICAgICBEZWxldGUgPSBcIk1lcmNoYW5kaXNlL0ZsYXZvdXIvRGVsZXRlXCIsXG4gICAgICAgICAgICBSZXRyaWV2ZSA9IFwiTWVyY2hhbmRpc2UvRmxhdm91ci9SZXRyaWV2ZVwiLFxuICAgICAgICAgICAgTGlzdCA9IFwiTWVyY2hhbmRpc2UvRmxhdm91ci9MaXN0XCJcbiAgICAgICAgfVxuXG4gICAgICAgIFtcbiAgICAgICAgICAgICdDcmVhdGUnLCBcbiAgICAgICAgICAgICdVcGRhdGUnLCBcbiAgICAgICAgICAgICdEZWxldGUnLCBcbiAgICAgICAgICAgICdSZXRyaWV2ZScsIFxuICAgICAgICAgICAgJ0xpc3QnXG4gICAgICAgIF0uZm9yRWFjaCh4ID0+IHtcbiAgICAgICAgICAgICg8YW55PkZsYXZvdXJTZXJ2aWNlKVt4XSA9IGZ1bmN0aW9uIChyLCBzLCBvKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFEuc2VydmljZVJlcXVlc3QoYmFzZVVybCArICcvJyArIHgsIHIsIHMsIG8pO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuIiwiXHJcbm5hbWVzcGFjZSBJbmRvdGFsZW50Lk1lcmNoYW5kaXNlIHtcclxuICAgIGV4cG9ydCBjbGFzcyBQcm9kdWN0Q29sdW1ucyB7XHJcbiAgICAgICAgc3RhdGljIGNvbHVtbnNLZXkgPSAnTWVyY2hhbmRpc2UuUHJvZHVjdCc7XHJcbiAgICB9XHJcbn0iLCJuYW1lc3BhY2UgSW5kb3RhbGVudC5NZXJjaGFuZGlzZSB7XG4gICAgZXhwb3J0IGludGVyZmFjZSBQcm9kdWN0Rm9ybSB7XG4gICAgICAgIE5hbWU6IFNlcmVuaXR5LlN0cmluZ0VkaXRvcjtcbiAgICAgICAgRGVzY3JpcHRpb246IFNlcmVuaXR5LlN0cmluZ0VkaXRvcjtcbiAgICAgICAgUGljdHVyZTogU2VyZW5pdHkuU3RyaW5nRWRpdG9yO1xuICAgICAgICBJbnRlcm5hbENvZGU6IFNlcmVuaXR5LlN0cmluZ0VkaXRvcjtcbiAgICAgICAgQmFyY29kZTogU2VyZW5pdHkuU3RyaW5nRWRpdG9yO1xuICAgICAgICBVb21JZDogU2VyZW5pdHkuSW50ZWdlckVkaXRvcjtcbiAgICAgICAgQnJhbmRJZDogU2VyZW5pdHkuSW50ZWdlckVkaXRvcjtcbiAgICAgICAgQ2F0ZWdvcnlJZDogU2VyZW5pdHkuSW50ZWdlckVkaXRvcjtcbiAgICAgICAgU2l6ZUlkOiBTZXJlbml0eS5JbnRlZ2VyRWRpdG9yO1xuICAgICAgICBDb2xvdXJJZDogU2VyZW5pdHkuSW50ZWdlckVkaXRvcjtcbiAgICAgICAgRmxhdm91cklkOiBTZXJlbml0eS5JbnRlZ2VyRWRpdG9yO1xuICAgICAgICBQdXJjaGFzZVByaWNlOiBTZXJlbml0eS5EZWNpbWFsRWRpdG9yO1xuICAgICAgICBTYWxlc1ByaWNlOiBTZXJlbml0eS5EZWNpbWFsRWRpdG9yO1xuICAgICAgICBQdXJjaGFzZVRheElkOiBTZXJlbml0eS5JbnRlZ2VyRWRpdG9yO1xuICAgICAgICBTYWxlc1RheElkOiBTZXJlbml0eS5JbnRlZ2VyRWRpdG9yO1xuICAgICAgICBJbnNlcnREYXRlOiBTZXJlbml0eS5EYXRlRWRpdG9yO1xuICAgICAgICBJbnNlcnRVc2VySWQ6IFNlcmVuaXR5LkludGVnZXJFZGl0b3I7XG4gICAgICAgIFVwZGF0ZURhdGU6IFNlcmVuaXR5LkRhdGVFZGl0b3I7XG4gICAgICAgIFVwZGF0ZVVzZXJJZDogU2VyZW5pdHkuSW50ZWdlckVkaXRvcjtcbiAgICAgICAgVGVuYW50SWQ6IFNlcmVuaXR5LkludGVnZXJFZGl0b3I7XG4gICAgfVxuXG4gICAgZXhwb3J0IGNsYXNzIFByb2R1Y3RGb3JtIGV4dGVuZHMgU2VyZW5pdHkuUHJlZml4ZWRDb250ZXh0IHtcbiAgICAgICAgc3RhdGljIGZvcm1LZXkgPSAnTWVyY2hhbmRpc2UuUHJvZHVjdCc7XG4gICAgICAgIHByaXZhdGUgc3RhdGljIGluaXQ6IGJvb2xlYW47XG5cbiAgICAgICAgY29uc3RydWN0b3IocHJlZml4OiBzdHJpbmcpIHtcbiAgICAgICAgICAgIHN1cGVyKHByZWZpeCk7XG5cbiAgICAgICAgICAgIGlmICghUHJvZHVjdEZvcm0uaW5pdCkgIHtcbiAgICAgICAgICAgICAgICBQcm9kdWN0Rm9ybS5pbml0ID0gdHJ1ZTtcblxuICAgICAgICAgICAgICAgIHZhciBzID0gU2VyZW5pdHk7XG4gICAgICAgICAgICAgICAgdmFyIHcwID0gcy5TdHJpbmdFZGl0b3I7XG4gICAgICAgICAgICAgICAgdmFyIHcxID0gcy5JbnRlZ2VyRWRpdG9yO1xuICAgICAgICAgICAgICAgIHZhciB3MiA9IHMuRGVjaW1hbEVkaXRvcjtcbiAgICAgICAgICAgICAgICB2YXIgdzMgPSBzLkRhdGVFZGl0b3I7XG5cbiAgICAgICAgICAgICAgICBRLmluaXRGb3JtVHlwZShQcm9kdWN0Rm9ybSwgW1xuICAgICAgICAgICAgICAgICAgICAnTmFtZScsIHcwLFxuICAgICAgICAgICAgICAgICAgICAnRGVzY3JpcHRpb24nLCB3MCxcbiAgICAgICAgICAgICAgICAgICAgJ1BpY3R1cmUnLCB3MCxcbiAgICAgICAgICAgICAgICAgICAgJ0ludGVybmFsQ29kZScsIHcwLFxuICAgICAgICAgICAgICAgICAgICAnQmFyY29kZScsIHcwLFxuICAgICAgICAgICAgICAgICAgICAnVW9tSWQnLCB3MSxcbiAgICAgICAgICAgICAgICAgICAgJ0JyYW5kSWQnLCB3MSxcbiAgICAgICAgICAgICAgICAgICAgJ0NhdGVnb3J5SWQnLCB3MSxcbiAgICAgICAgICAgICAgICAgICAgJ1NpemVJZCcsIHcxLFxuICAgICAgICAgICAgICAgICAgICAnQ29sb3VySWQnLCB3MSxcbiAgICAgICAgICAgICAgICAgICAgJ0ZsYXZvdXJJZCcsIHcxLFxuICAgICAgICAgICAgICAgICAgICAnUHVyY2hhc2VQcmljZScsIHcyLFxuICAgICAgICAgICAgICAgICAgICAnU2FsZXNQcmljZScsIHcyLFxuICAgICAgICAgICAgICAgICAgICAnUHVyY2hhc2VUYXhJZCcsIHcxLFxuICAgICAgICAgICAgICAgICAgICAnU2FsZXNUYXhJZCcsIHcxLFxuICAgICAgICAgICAgICAgICAgICAnSW5zZXJ0RGF0ZScsIHczLFxuICAgICAgICAgICAgICAgICAgICAnSW5zZXJ0VXNlcklkJywgdzEsXG4gICAgICAgICAgICAgICAgICAgICdVcGRhdGVEYXRlJywgdzMsXG4gICAgICAgICAgICAgICAgICAgICdVcGRhdGVVc2VySWQnLCB3MSxcbiAgICAgICAgICAgICAgICAgICAgJ1RlbmFudElkJywgdzFcbiAgICAgICAgICAgICAgICBdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbiIsIm5hbWVzcGFjZSBJbmRvdGFsZW50Lk1lcmNoYW5kaXNlIHtcbiAgICBleHBvcnQgaW50ZXJmYWNlIFByb2R1Y3RSb3cge1xuICAgICAgICBJZD86IG51bWJlcjtcbiAgICAgICAgTmFtZT86IHN0cmluZztcbiAgICAgICAgRGVzY3JpcHRpb24/OiBzdHJpbmc7XG4gICAgICAgIFBpY3R1cmU/OiBzdHJpbmc7XG4gICAgICAgIEludGVybmFsQ29kZT86IHN0cmluZztcbiAgICAgICAgQmFyY29kZT86IHN0cmluZztcbiAgICAgICAgVW9tSWQ/OiBudW1iZXI7XG4gICAgICAgIEJyYW5kSWQ/OiBudW1iZXI7XG4gICAgICAgIENhdGVnb3J5SWQ/OiBudW1iZXI7XG4gICAgICAgIFNpemVJZD86IG51bWJlcjtcbiAgICAgICAgQ29sb3VySWQ/OiBudW1iZXI7XG4gICAgICAgIEZsYXZvdXJJZD86IG51bWJlcjtcbiAgICAgICAgUHVyY2hhc2VQcmljZT86IG51bWJlcjtcbiAgICAgICAgU2FsZXNQcmljZT86IG51bWJlcjtcbiAgICAgICAgUHVyY2hhc2VUYXhJZD86IG51bWJlcjtcbiAgICAgICAgU2FsZXNUYXhJZD86IG51bWJlcjtcbiAgICAgICAgSW5zZXJ0RGF0ZT86IHN0cmluZztcbiAgICAgICAgSW5zZXJ0VXNlcklkPzogbnVtYmVyO1xuICAgICAgICBVcGRhdGVEYXRlPzogc3RyaW5nO1xuICAgICAgICBVcGRhdGVVc2VySWQ/OiBudW1iZXI7XG4gICAgICAgIFRlbmFudElkPzogbnVtYmVyO1xuICAgIH1cblxuICAgIGV4cG9ydCBuYW1lc3BhY2UgUHJvZHVjdFJvdyB7XG4gICAgICAgIGV4cG9ydCBjb25zdCBpZFByb3BlcnR5ID0gJ0lkJztcbiAgICAgICAgZXhwb3J0IGNvbnN0IG5hbWVQcm9wZXJ0eSA9ICdOYW1lJztcbiAgICAgICAgZXhwb3J0IGNvbnN0IGxvY2FsVGV4dFByZWZpeCA9ICdNZXJjaGFuZGlzZS5Qcm9kdWN0JztcbiAgICAgICAgZXhwb3J0IGNvbnN0IGRlbGV0ZVBlcm1pc3Npb24gPSAnTWVyY2hhbmRpc2U6UHJvZHVjdCc7XG4gICAgICAgIGV4cG9ydCBjb25zdCBpbnNlcnRQZXJtaXNzaW9uID0gJ01lcmNoYW5kaXNlOlByb2R1Y3QnO1xuICAgICAgICBleHBvcnQgY29uc3QgcmVhZFBlcm1pc3Npb24gPSAnTWVyY2hhbmRpc2U6UHJvZHVjdCc7XG4gICAgICAgIGV4cG9ydCBjb25zdCB1cGRhdGVQZXJtaXNzaW9uID0gJ01lcmNoYW5kaXNlOlByb2R1Y3QnO1xuXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGNvbnN0IGVudW0gRmllbGRzIHtcbiAgICAgICAgICAgIElkID0gXCJJZFwiLFxuICAgICAgICAgICAgTmFtZSA9IFwiTmFtZVwiLFxuICAgICAgICAgICAgRGVzY3JpcHRpb24gPSBcIkRlc2NyaXB0aW9uXCIsXG4gICAgICAgICAgICBQaWN0dXJlID0gXCJQaWN0dXJlXCIsXG4gICAgICAgICAgICBJbnRlcm5hbENvZGUgPSBcIkludGVybmFsQ29kZVwiLFxuICAgICAgICAgICAgQmFyY29kZSA9IFwiQmFyY29kZVwiLFxuICAgICAgICAgICAgVW9tSWQgPSBcIlVvbUlkXCIsXG4gICAgICAgICAgICBCcmFuZElkID0gXCJCcmFuZElkXCIsXG4gICAgICAgICAgICBDYXRlZ29yeUlkID0gXCJDYXRlZ29yeUlkXCIsXG4gICAgICAgICAgICBTaXplSWQgPSBcIlNpemVJZFwiLFxuICAgICAgICAgICAgQ29sb3VySWQgPSBcIkNvbG91cklkXCIsXG4gICAgICAgICAgICBGbGF2b3VySWQgPSBcIkZsYXZvdXJJZFwiLFxuICAgICAgICAgICAgUHVyY2hhc2VQcmljZSA9IFwiUHVyY2hhc2VQcmljZVwiLFxuICAgICAgICAgICAgU2FsZXNQcmljZSA9IFwiU2FsZXNQcmljZVwiLFxuICAgICAgICAgICAgUHVyY2hhc2VUYXhJZCA9IFwiUHVyY2hhc2VUYXhJZFwiLFxuICAgICAgICAgICAgU2FsZXNUYXhJZCA9IFwiU2FsZXNUYXhJZFwiLFxuICAgICAgICAgICAgSW5zZXJ0RGF0ZSA9IFwiSW5zZXJ0RGF0ZVwiLFxuICAgICAgICAgICAgSW5zZXJ0VXNlcklkID0gXCJJbnNlcnRVc2VySWRcIixcbiAgICAgICAgICAgIFVwZGF0ZURhdGUgPSBcIlVwZGF0ZURhdGVcIixcbiAgICAgICAgICAgIFVwZGF0ZVVzZXJJZCA9IFwiVXBkYXRlVXNlcklkXCIsXG4gICAgICAgICAgICBUZW5hbnRJZCA9IFwiVGVuYW50SWRcIlxuICAgICAgICB9XG4gICAgfVxufVxuIiwibmFtZXNwYWNlIEluZG90YWxlbnQuTWVyY2hhbmRpc2Uge1xuICAgIGV4cG9ydCBuYW1lc3BhY2UgUHJvZHVjdFNlcnZpY2Uge1xuICAgICAgICBleHBvcnQgY29uc3QgYmFzZVVybCA9ICdNZXJjaGFuZGlzZS9Qcm9kdWN0JztcblxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBDcmVhdGUocmVxdWVzdDogU2VyZW5pdHkuU2F2ZVJlcXVlc3Q8UHJvZHVjdFJvdz4sIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuU2F2ZVJlc3BvbnNlKSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIFVwZGF0ZShyZXF1ZXN0OiBTZXJlbml0eS5TYXZlUmVxdWVzdDxQcm9kdWN0Um93Piwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5TYXZlUmVzcG9uc2UpID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gRGVsZXRlKHJlcXVlc3Q6IFNlcmVuaXR5LkRlbGV0ZVJlcXVlc3QsIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuRGVsZXRlUmVzcG9uc2UpID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gUmV0cmlldmUocmVxdWVzdDogU2VyZW5pdHkuUmV0cmlldmVSZXF1ZXN0LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5LlJldHJpZXZlUmVzcG9uc2U8UHJvZHVjdFJvdz4pID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gTGlzdChyZXF1ZXN0OiBTZXJlbml0eS5MaXN0UmVxdWVzdCwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5MaXN0UmVzcG9uc2U8UHJvZHVjdFJvdz4pID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcblxuICAgICAgICBleHBvcnQgZGVjbGFyZSBjb25zdCBlbnVtIE1ldGhvZHMge1xuICAgICAgICAgICAgQ3JlYXRlID0gXCJNZXJjaGFuZGlzZS9Qcm9kdWN0L0NyZWF0ZVwiLFxuICAgICAgICAgICAgVXBkYXRlID0gXCJNZXJjaGFuZGlzZS9Qcm9kdWN0L1VwZGF0ZVwiLFxuICAgICAgICAgICAgRGVsZXRlID0gXCJNZXJjaGFuZGlzZS9Qcm9kdWN0L0RlbGV0ZVwiLFxuICAgICAgICAgICAgUmV0cmlldmUgPSBcIk1lcmNoYW5kaXNlL1Byb2R1Y3QvUmV0cmlldmVcIixcbiAgICAgICAgICAgIExpc3QgPSBcIk1lcmNoYW5kaXNlL1Byb2R1Y3QvTGlzdFwiXG4gICAgICAgIH1cblxuICAgICAgICBbXG4gICAgICAgICAgICAnQ3JlYXRlJywgXG4gICAgICAgICAgICAnVXBkYXRlJywgXG4gICAgICAgICAgICAnRGVsZXRlJywgXG4gICAgICAgICAgICAnUmV0cmlldmUnLCBcbiAgICAgICAgICAgICdMaXN0J1xuICAgICAgICBdLmZvckVhY2goeCA9PiB7XG4gICAgICAgICAgICAoPGFueT5Qcm9kdWN0U2VydmljZSlbeF0gPSBmdW5jdGlvbiAociwgcywgbykge1xuICAgICAgICAgICAgICAgIHJldHVybiBRLnNlcnZpY2VSZXF1ZXN0KGJhc2VVcmwgKyAnLycgKyB4LCByLCBzLCBvKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbiIsIlxyXG5uYW1lc3BhY2UgSW5kb3RhbGVudC5NZXJjaGFuZGlzZSB7XHJcbiAgICBleHBvcnQgY2xhc3MgU2l6ZUNvbHVtbnMge1xyXG4gICAgICAgIHN0YXRpYyBjb2x1bW5zS2V5ID0gJ01lcmNoYW5kaXNlLlNpemUnO1xyXG4gICAgfVxyXG59IiwibmFtZXNwYWNlIEluZG90YWxlbnQuTWVyY2hhbmRpc2Uge1xuICAgIGV4cG9ydCBpbnRlcmZhY2UgU2l6ZUZvcm0ge1xuICAgICAgICBOYW1lOiBTZXJlbml0eS5TdHJpbmdFZGl0b3I7XG4gICAgICAgIERlc2NyaXB0aW9uOiBTZXJlbml0eS5UZXh0QXJlYUVkaXRvcjtcbiAgICB9XG5cbiAgICBleHBvcnQgY2xhc3MgU2l6ZUZvcm0gZXh0ZW5kcyBTZXJlbml0eS5QcmVmaXhlZENvbnRleHQge1xuICAgICAgICBzdGF0aWMgZm9ybUtleSA9ICdNZXJjaGFuZGlzZS5TaXplJztcbiAgICAgICAgcHJpdmF0ZSBzdGF0aWMgaW5pdDogYm9vbGVhbjtcblxuICAgICAgICBjb25zdHJ1Y3RvcihwcmVmaXg6IHN0cmluZykge1xuICAgICAgICAgICAgc3VwZXIocHJlZml4KTtcblxuICAgICAgICAgICAgaWYgKCFTaXplRm9ybS5pbml0KSAge1xuICAgICAgICAgICAgICAgIFNpemVGb3JtLmluaXQgPSB0cnVlO1xuXG4gICAgICAgICAgICAgICAgdmFyIHMgPSBTZXJlbml0eTtcbiAgICAgICAgICAgICAgICB2YXIgdzAgPSBzLlN0cmluZ0VkaXRvcjtcbiAgICAgICAgICAgICAgICB2YXIgdzEgPSBzLlRleHRBcmVhRWRpdG9yO1xuXG4gICAgICAgICAgICAgICAgUS5pbml0Rm9ybVR5cGUoU2l6ZUZvcm0sIFtcbiAgICAgICAgICAgICAgICAgICAgJ05hbWUnLCB3MCxcbiAgICAgICAgICAgICAgICAgICAgJ0Rlc2NyaXB0aW9uJywgdzFcbiAgICAgICAgICAgICAgICBdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbiIsIm5hbWVzcGFjZSBJbmRvdGFsZW50Lk1lcmNoYW5kaXNlIHtcbiAgICBleHBvcnQgaW50ZXJmYWNlIFNpemVSb3cge1xuICAgICAgICBJZD86IG51bWJlcjtcbiAgICAgICAgTmFtZT86IHN0cmluZztcbiAgICAgICAgRGVzY3JpcHRpb24/OiBzdHJpbmc7XG4gICAgICAgIFRlbmFudElkPzogbnVtYmVyO1xuICAgICAgICBUZW5hbnROYW1lPzogc3RyaW5nO1xuICAgICAgICBJbnNlcnRVc2VySWQ/OiBudW1iZXI7XG4gICAgICAgIEluc2VydERhdGU/OiBzdHJpbmc7XG4gICAgICAgIFVwZGF0ZVVzZXJJZD86IG51bWJlcjtcbiAgICAgICAgVXBkYXRlRGF0ZT86IHN0cmluZztcbiAgICB9XG5cbiAgICBleHBvcnQgbmFtZXNwYWNlIFNpemVSb3cge1xuICAgICAgICBleHBvcnQgY29uc3QgaWRQcm9wZXJ0eSA9ICdJZCc7XG4gICAgICAgIGV4cG9ydCBjb25zdCBuYW1lUHJvcGVydHkgPSAnTmFtZSc7XG4gICAgICAgIGV4cG9ydCBjb25zdCBsb2NhbFRleHRQcmVmaXggPSAnTWVyY2hhbmRpc2UuU2l6ZSc7XG4gICAgICAgIGV4cG9ydCBjb25zdCBsb29rdXBLZXkgPSAnTWVyY2hhbmRpc2UuU2l6ZSc7XG5cbiAgICAgICAgZXhwb3J0IGZ1bmN0aW9uIGdldExvb2t1cCgpOiBRLkxvb2t1cDxTaXplUm93PiB7XG4gICAgICAgICAgICByZXR1cm4gUS5nZXRMb29rdXA8U2l6ZVJvdz4oJ01lcmNoYW5kaXNlLlNpemUnKTtcbiAgICAgICAgfVxuICAgICAgICBleHBvcnQgY29uc3QgZGVsZXRlUGVybWlzc2lvbiA9ICdNZXJjaGFuZGlzZTpTaXplJztcbiAgICAgICAgZXhwb3J0IGNvbnN0IGluc2VydFBlcm1pc3Npb24gPSAnTWVyY2hhbmRpc2U6U2l6ZSc7XG4gICAgICAgIGV4cG9ydCBjb25zdCByZWFkUGVybWlzc2lvbiA9ICdNZXJjaGFuZGlzZTpTaXplJztcbiAgICAgICAgZXhwb3J0IGNvbnN0IHVwZGF0ZVBlcm1pc3Npb24gPSAnTWVyY2hhbmRpc2U6U2l6ZSc7XG5cbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgY29uc3QgZW51bSBGaWVsZHMge1xuICAgICAgICAgICAgSWQgPSBcIklkXCIsXG4gICAgICAgICAgICBOYW1lID0gXCJOYW1lXCIsXG4gICAgICAgICAgICBEZXNjcmlwdGlvbiA9IFwiRGVzY3JpcHRpb25cIixcbiAgICAgICAgICAgIFRlbmFudElkID0gXCJUZW5hbnRJZFwiLFxuICAgICAgICAgICAgVGVuYW50TmFtZSA9IFwiVGVuYW50TmFtZVwiLFxuICAgICAgICAgICAgSW5zZXJ0VXNlcklkID0gXCJJbnNlcnRVc2VySWRcIixcbiAgICAgICAgICAgIEluc2VydERhdGUgPSBcIkluc2VydERhdGVcIixcbiAgICAgICAgICAgIFVwZGF0ZVVzZXJJZCA9IFwiVXBkYXRlVXNlcklkXCIsXG4gICAgICAgICAgICBVcGRhdGVEYXRlID0gXCJVcGRhdGVEYXRlXCJcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsIm5hbWVzcGFjZSBJbmRvdGFsZW50Lk1lcmNoYW5kaXNlIHtcbiAgICBleHBvcnQgbmFtZXNwYWNlIFNpemVTZXJ2aWNlIHtcbiAgICAgICAgZXhwb3J0IGNvbnN0IGJhc2VVcmwgPSAnTWVyY2hhbmRpc2UvU2l6ZSc7XG5cbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gQ3JlYXRlKHJlcXVlc3Q6IFNlcmVuaXR5LlNhdmVSZXF1ZXN0PFNpemVSb3c+LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5LlNhdmVSZXNwb25zZSkgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBVcGRhdGUocmVxdWVzdDogU2VyZW5pdHkuU2F2ZVJlcXVlc3Q8U2l6ZVJvdz4sIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuU2F2ZVJlc3BvbnNlKSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIERlbGV0ZShyZXF1ZXN0OiBTZXJlbml0eS5EZWxldGVSZXF1ZXN0LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5LkRlbGV0ZVJlc3BvbnNlKSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIFJldHJpZXZlKHJlcXVlc3Q6IFNlcmVuaXR5LlJldHJpZXZlUmVxdWVzdCwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5SZXRyaWV2ZVJlc3BvbnNlPFNpemVSb3c+KSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIExpc3QocmVxdWVzdDogU2VyZW5pdHkuTGlzdFJlcXVlc3QsIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuTGlzdFJlc3BvbnNlPFNpemVSb3c+KSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XG5cbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgY29uc3QgZW51bSBNZXRob2RzIHtcbiAgICAgICAgICAgIENyZWF0ZSA9IFwiTWVyY2hhbmRpc2UvU2l6ZS9DcmVhdGVcIixcbiAgICAgICAgICAgIFVwZGF0ZSA9IFwiTWVyY2hhbmRpc2UvU2l6ZS9VcGRhdGVcIixcbiAgICAgICAgICAgIERlbGV0ZSA9IFwiTWVyY2hhbmRpc2UvU2l6ZS9EZWxldGVcIixcbiAgICAgICAgICAgIFJldHJpZXZlID0gXCJNZXJjaGFuZGlzZS9TaXplL1JldHJpZXZlXCIsXG4gICAgICAgICAgICBMaXN0ID0gXCJNZXJjaGFuZGlzZS9TaXplL0xpc3RcIlxuICAgICAgICB9XG5cbiAgICAgICAgW1xuICAgICAgICAgICAgJ0NyZWF0ZScsIFxuICAgICAgICAgICAgJ1VwZGF0ZScsIFxuICAgICAgICAgICAgJ0RlbGV0ZScsIFxuICAgICAgICAgICAgJ1JldHJpZXZlJywgXG4gICAgICAgICAgICAnTGlzdCdcbiAgICAgICAgXS5mb3JFYWNoKHggPT4ge1xuICAgICAgICAgICAgKDxhbnk+U2l6ZVNlcnZpY2UpW3hdID0gZnVuY3Rpb24gKHIsIHMsIG8pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gUS5zZXJ2aWNlUmVxdWVzdChiYXNlVXJsICsgJy8nICsgeCwgciwgcywgbyk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9KTtcbiAgICB9XG59XG4iLCJcclxubmFtZXNwYWNlIEluZG90YWxlbnQuTWVyY2hhbmRpc2Uge1xyXG4gICAgZXhwb3J0IGNsYXNzIFVvbUNvbHVtbnMge1xyXG4gICAgICAgIHN0YXRpYyBjb2x1bW5zS2V5ID0gJ01lcmNoYW5kaXNlLlVvbSc7XHJcbiAgICB9XHJcbn0iLCJuYW1lc3BhY2UgSW5kb3RhbGVudC5NZXJjaGFuZGlzZSB7XG4gICAgZXhwb3J0IGludGVyZmFjZSBVb21Gb3JtIHtcbiAgICAgICAgTmFtZTogU2VyZW5pdHkuU3RyaW5nRWRpdG9yO1xuICAgICAgICBEZXNjcmlwdGlvbjogU2VyZW5pdHkuVGV4dEFyZWFFZGl0b3I7XG4gICAgfVxuXG4gICAgZXhwb3J0IGNsYXNzIFVvbUZvcm0gZXh0ZW5kcyBTZXJlbml0eS5QcmVmaXhlZENvbnRleHQge1xuICAgICAgICBzdGF0aWMgZm9ybUtleSA9ICdNZXJjaGFuZGlzZS5Vb20nO1xuICAgICAgICBwcml2YXRlIHN0YXRpYyBpbml0OiBib29sZWFuO1xuXG4gICAgICAgIGNvbnN0cnVjdG9yKHByZWZpeDogc3RyaW5nKSB7XG4gICAgICAgICAgICBzdXBlcihwcmVmaXgpO1xuXG4gICAgICAgICAgICBpZiAoIVVvbUZvcm0uaW5pdCkgIHtcbiAgICAgICAgICAgICAgICBVb21Gb3JtLmluaXQgPSB0cnVlO1xuXG4gICAgICAgICAgICAgICAgdmFyIHMgPSBTZXJlbml0eTtcbiAgICAgICAgICAgICAgICB2YXIgdzAgPSBzLlN0cmluZ0VkaXRvcjtcbiAgICAgICAgICAgICAgICB2YXIgdzEgPSBzLlRleHRBcmVhRWRpdG9yO1xuXG4gICAgICAgICAgICAgICAgUS5pbml0Rm9ybVR5cGUoVW9tRm9ybSwgW1xuICAgICAgICAgICAgICAgICAgICAnTmFtZScsIHcwLFxuICAgICAgICAgICAgICAgICAgICAnRGVzY3JpcHRpb24nLCB3MVxuICAgICAgICAgICAgICAgIF0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuIiwibmFtZXNwYWNlIEluZG90YWxlbnQuTWVyY2hhbmRpc2Uge1xuICAgIGV4cG9ydCBpbnRlcmZhY2UgVW9tUm93IHtcbiAgICAgICAgSWQ/OiBudW1iZXI7XG4gICAgICAgIE5hbWU/OiBzdHJpbmc7XG4gICAgICAgIERlc2NyaXB0aW9uPzogc3RyaW5nO1xuICAgICAgICBUZW5hbnRJZD86IG51bWJlcjtcbiAgICAgICAgVGVuYW50TmFtZT86IHN0cmluZztcbiAgICAgICAgSW5zZXJ0VXNlcklkPzogbnVtYmVyO1xuICAgICAgICBJbnNlcnREYXRlPzogc3RyaW5nO1xuICAgICAgICBVcGRhdGVVc2VySWQ/OiBudW1iZXI7XG4gICAgICAgIFVwZGF0ZURhdGU/OiBzdHJpbmc7XG4gICAgfVxuXG4gICAgZXhwb3J0IG5hbWVzcGFjZSBVb21Sb3cge1xuICAgICAgICBleHBvcnQgY29uc3QgaWRQcm9wZXJ0eSA9ICdJZCc7XG4gICAgICAgIGV4cG9ydCBjb25zdCBuYW1lUHJvcGVydHkgPSAnTmFtZSc7XG4gICAgICAgIGV4cG9ydCBjb25zdCBsb2NhbFRleHRQcmVmaXggPSAnTWVyY2hhbmRpc2UuVW9tJztcbiAgICAgICAgZXhwb3J0IGNvbnN0IGxvb2t1cEtleSA9ICdNZXJjaGFuZGlzZS5Vb20nO1xuXG4gICAgICAgIGV4cG9ydCBmdW5jdGlvbiBnZXRMb29rdXAoKTogUS5Mb29rdXA8VW9tUm93PiB7XG4gICAgICAgICAgICByZXR1cm4gUS5nZXRMb29rdXA8VW9tUm93PignTWVyY2hhbmRpc2UuVW9tJyk7XG4gICAgICAgIH1cbiAgICAgICAgZXhwb3J0IGNvbnN0IGRlbGV0ZVBlcm1pc3Npb24gPSAnTWVyY2hhbmRpc2U6VW9tJztcbiAgICAgICAgZXhwb3J0IGNvbnN0IGluc2VydFBlcm1pc3Npb24gPSAnTWVyY2hhbmRpc2U6VW9tJztcbiAgICAgICAgZXhwb3J0IGNvbnN0IHJlYWRQZXJtaXNzaW9uID0gJ01lcmNoYW5kaXNlOlVvbSc7XG4gICAgICAgIGV4cG9ydCBjb25zdCB1cGRhdGVQZXJtaXNzaW9uID0gJ01lcmNoYW5kaXNlOlVvbSc7XG5cbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgY29uc3QgZW51bSBGaWVsZHMge1xuICAgICAgICAgICAgSWQgPSBcIklkXCIsXG4gICAgICAgICAgICBOYW1lID0gXCJOYW1lXCIsXG4gICAgICAgICAgICBEZXNjcmlwdGlvbiA9IFwiRGVzY3JpcHRpb25cIixcbiAgICAgICAgICAgIFRlbmFudElkID0gXCJUZW5hbnRJZFwiLFxuICAgICAgICAgICAgVGVuYW50TmFtZSA9IFwiVGVuYW50TmFtZVwiLFxuICAgICAgICAgICAgSW5zZXJ0VXNlcklkID0gXCJJbnNlcnRVc2VySWRcIixcbiAgICAgICAgICAgIEluc2VydERhdGUgPSBcIkluc2VydERhdGVcIixcbiAgICAgICAgICAgIFVwZGF0ZVVzZXJJZCA9IFwiVXBkYXRlVXNlcklkXCIsXG4gICAgICAgICAgICBVcGRhdGVEYXRlID0gXCJVcGRhdGVEYXRlXCJcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsIm5hbWVzcGFjZSBJbmRvdGFsZW50Lk1lcmNoYW5kaXNlIHtcbiAgICBleHBvcnQgbmFtZXNwYWNlIFVvbVNlcnZpY2Uge1xuICAgICAgICBleHBvcnQgY29uc3QgYmFzZVVybCA9ICdNZXJjaGFuZGlzZS9Vb20nO1xuXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIENyZWF0ZShyZXF1ZXN0OiBTZXJlbml0eS5TYXZlUmVxdWVzdDxVb21Sb3c+LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5LlNhdmVSZXNwb25zZSkgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBVcGRhdGUocmVxdWVzdDogU2VyZW5pdHkuU2F2ZVJlcXVlc3Q8VW9tUm93Piwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5TYXZlUmVzcG9uc2UpID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gRGVsZXRlKHJlcXVlc3Q6IFNlcmVuaXR5LkRlbGV0ZVJlcXVlc3QsIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuRGVsZXRlUmVzcG9uc2UpID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gUmV0cmlldmUocmVxdWVzdDogU2VyZW5pdHkuUmV0cmlldmVSZXF1ZXN0LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5LlJldHJpZXZlUmVzcG9uc2U8VW9tUm93PikgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBMaXN0KHJlcXVlc3Q6IFNlcmVuaXR5Lkxpc3RSZXF1ZXN0LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5Lkxpc3RSZXNwb25zZTxVb21Sb3c+KSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XG5cbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgY29uc3QgZW51bSBNZXRob2RzIHtcbiAgICAgICAgICAgIENyZWF0ZSA9IFwiTWVyY2hhbmRpc2UvVW9tL0NyZWF0ZVwiLFxuICAgICAgICAgICAgVXBkYXRlID0gXCJNZXJjaGFuZGlzZS9Vb20vVXBkYXRlXCIsXG4gICAgICAgICAgICBEZWxldGUgPSBcIk1lcmNoYW5kaXNlL1VvbS9EZWxldGVcIixcbiAgICAgICAgICAgIFJldHJpZXZlID0gXCJNZXJjaGFuZGlzZS9Vb20vUmV0cmlldmVcIixcbiAgICAgICAgICAgIExpc3QgPSBcIk1lcmNoYW5kaXNlL1VvbS9MaXN0XCJcbiAgICAgICAgfVxuXG4gICAgICAgIFtcbiAgICAgICAgICAgICdDcmVhdGUnLCBcbiAgICAgICAgICAgICdVcGRhdGUnLCBcbiAgICAgICAgICAgICdEZWxldGUnLCBcbiAgICAgICAgICAgICdSZXRyaWV2ZScsIFxuICAgICAgICAgICAgJ0xpc3QnXG4gICAgICAgIF0uZm9yRWFjaCh4ID0+IHtcbiAgICAgICAgICAgICg8YW55PlVvbVNlcnZpY2UpW3hdID0gZnVuY3Rpb24gKHIsIHMsIG8pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gUS5zZXJ2aWNlUmVxdWVzdChiYXNlVXJsICsgJy8nICsgeCwgciwgcywgbyk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9KTtcbiAgICB9XG59XG4iLCJcclxubmFtZXNwYWNlIEluZG90YWxlbnQuUHVyY2hhc2Uge1xyXG4gICAgZXhwb3J0IGNsYXNzIEJpbGxDb2x1bW5zIHtcclxuICAgICAgICBzdGF0aWMgY29sdW1uc0tleSA9ICdQdXJjaGFzZS5CaWxsJztcclxuICAgIH1cclxufSIsIlxyXG5uYW1lc3BhY2UgSW5kb3RhbGVudC5QdXJjaGFzZSB7XHJcbiAgICBleHBvcnQgY2xhc3MgQmlsbERldGFpbENvbHVtbnMge1xyXG4gICAgICAgIHN0YXRpYyBjb2x1bW5zS2V5ID0gJ1B1cmNoYXNlLkJpbGxEZXRhaWwnO1xyXG4gICAgfVxyXG59IiwibmFtZXNwYWNlIEluZG90YWxlbnQuUHVyY2hhc2Uge1xuICAgIGV4cG9ydCBpbnRlcmZhY2UgQmlsbERldGFpbEZvcm0ge1xuICAgICAgICBCaWxsSWQ6IFNlcmVuaXR5LkludGVnZXJFZGl0b3I7XG4gICAgICAgIFByb2R1Y3RJZDogU2VyZW5pdHkuSW50ZWdlckVkaXRvcjtcbiAgICAgICAgUHJpY2U6IFNlcmVuaXR5LkRlY2ltYWxFZGl0b3I7XG4gICAgICAgIFF0eTogU2VyZW5pdHkuRGVjaW1hbEVkaXRvcjtcbiAgICAgICAgU3ViVG90YWw6IFNlcmVuaXR5LkRlY2ltYWxFZGl0b3I7XG4gICAgICAgIERpc2NvdW50OiBTZXJlbml0eS5EZWNpbWFsRWRpdG9yO1xuICAgICAgICBCZWZvcmVUYXg6IFNlcmVuaXR5LkRlY2ltYWxFZGl0b3I7XG4gICAgICAgIFRheFBlcmNlbnRhZ2U6IFNlcmVuaXR5LkRlY2ltYWxFZGl0b3I7XG4gICAgICAgIFRheEFtb3VudDogU2VyZW5pdHkuRGVjaW1hbEVkaXRvcjtcbiAgICAgICAgVG90YWw6IFNlcmVuaXR5LkRlY2ltYWxFZGl0b3I7XG4gICAgICAgIEluc2VydERhdGU6IFNlcmVuaXR5LkRhdGVFZGl0b3I7XG4gICAgICAgIEluc2VydFVzZXJJZDogU2VyZW5pdHkuSW50ZWdlckVkaXRvcjtcbiAgICAgICAgVXBkYXRlRGF0ZTogU2VyZW5pdHkuRGF0ZUVkaXRvcjtcbiAgICAgICAgVXBkYXRlVXNlcklkOiBTZXJlbml0eS5JbnRlZ2VyRWRpdG9yO1xuICAgICAgICBUZW5hbnRJZDogU2VyZW5pdHkuSW50ZWdlckVkaXRvcjtcbiAgICB9XG5cbiAgICBleHBvcnQgY2xhc3MgQmlsbERldGFpbEZvcm0gZXh0ZW5kcyBTZXJlbml0eS5QcmVmaXhlZENvbnRleHQge1xuICAgICAgICBzdGF0aWMgZm9ybUtleSA9ICdQdXJjaGFzZS5CaWxsRGV0YWlsJztcbiAgICAgICAgcHJpdmF0ZSBzdGF0aWMgaW5pdDogYm9vbGVhbjtcblxuICAgICAgICBjb25zdHJ1Y3RvcihwcmVmaXg6IHN0cmluZykge1xuICAgICAgICAgICAgc3VwZXIocHJlZml4KTtcblxuICAgICAgICAgICAgaWYgKCFCaWxsRGV0YWlsRm9ybS5pbml0KSAge1xuICAgICAgICAgICAgICAgIEJpbGxEZXRhaWxGb3JtLmluaXQgPSB0cnVlO1xuXG4gICAgICAgICAgICAgICAgdmFyIHMgPSBTZXJlbml0eTtcbiAgICAgICAgICAgICAgICB2YXIgdzAgPSBzLkludGVnZXJFZGl0b3I7XG4gICAgICAgICAgICAgICAgdmFyIHcxID0gcy5EZWNpbWFsRWRpdG9yO1xuICAgICAgICAgICAgICAgIHZhciB3MiA9IHMuRGF0ZUVkaXRvcjtcblxuICAgICAgICAgICAgICAgIFEuaW5pdEZvcm1UeXBlKEJpbGxEZXRhaWxGb3JtLCBbXG4gICAgICAgICAgICAgICAgICAgICdCaWxsSWQnLCB3MCxcbiAgICAgICAgICAgICAgICAgICAgJ1Byb2R1Y3RJZCcsIHcwLFxuICAgICAgICAgICAgICAgICAgICAnUHJpY2UnLCB3MSxcbiAgICAgICAgICAgICAgICAgICAgJ1F0eScsIHcxLFxuICAgICAgICAgICAgICAgICAgICAnU3ViVG90YWwnLCB3MSxcbiAgICAgICAgICAgICAgICAgICAgJ0Rpc2NvdW50JywgdzEsXG4gICAgICAgICAgICAgICAgICAgICdCZWZvcmVUYXgnLCB3MSxcbiAgICAgICAgICAgICAgICAgICAgJ1RheFBlcmNlbnRhZ2UnLCB3MSxcbiAgICAgICAgICAgICAgICAgICAgJ1RheEFtb3VudCcsIHcxLFxuICAgICAgICAgICAgICAgICAgICAnVG90YWwnLCB3MSxcbiAgICAgICAgICAgICAgICAgICAgJ0luc2VydERhdGUnLCB3MixcbiAgICAgICAgICAgICAgICAgICAgJ0luc2VydFVzZXJJZCcsIHcwLFxuICAgICAgICAgICAgICAgICAgICAnVXBkYXRlRGF0ZScsIHcyLFxuICAgICAgICAgICAgICAgICAgICAnVXBkYXRlVXNlcklkJywgdzAsXG4gICAgICAgICAgICAgICAgICAgICdUZW5hbnRJZCcsIHcwXG4gICAgICAgICAgICAgICAgXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJuYW1lc3BhY2UgSW5kb3RhbGVudC5QdXJjaGFzZSB7XG4gICAgZXhwb3J0IGludGVyZmFjZSBCaWxsRGV0YWlsUm93IHtcbiAgICAgICAgSWQ/OiBudW1iZXI7XG4gICAgICAgIEJpbGxJZD86IG51bWJlcjtcbiAgICAgICAgUHJvZHVjdElkPzogbnVtYmVyO1xuICAgICAgICBQcmljZT86IG51bWJlcjtcbiAgICAgICAgUXR5PzogbnVtYmVyO1xuICAgICAgICBTdWJUb3RhbD86IG51bWJlcjtcbiAgICAgICAgRGlzY291bnQ/OiBudW1iZXI7XG4gICAgICAgIEJlZm9yZVRheD86IG51bWJlcjtcbiAgICAgICAgVGF4UGVyY2VudGFnZT86IG51bWJlcjtcbiAgICAgICAgVGF4QW1vdW50PzogbnVtYmVyO1xuICAgICAgICBUb3RhbD86IG51bWJlcjtcbiAgICAgICAgSW5zZXJ0RGF0ZT86IHN0cmluZztcbiAgICAgICAgSW5zZXJ0VXNlcklkPzogbnVtYmVyO1xuICAgICAgICBVcGRhdGVEYXRlPzogc3RyaW5nO1xuICAgICAgICBVcGRhdGVVc2VySWQ/OiBudW1iZXI7XG4gICAgICAgIFRlbmFudElkPzogbnVtYmVyO1xuICAgIH1cblxuICAgIGV4cG9ydCBuYW1lc3BhY2UgQmlsbERldGFpbFJvdyB7XG4gICAgICAgIGV4cG9ydCBjb25zdCBpZFByb3BlcnR5ID0gJ0lkJztcbiAgICAgICAgZXhwb3J0IGNvbnN0IGxvY2FsVGV4dFByZWZpeCA9ICdQdXJjaGFzZS5CaWxsRGV0YWlsJztcbiAgICAgICAgZXhwb3J0IGNvbnN0IGRlbGV0ZVBlcm1pc3Npb24gPSAnQWRtaW5pc3RyYXRpb246R2VuZXJhbCc7XG4gICAgICAgIGV4cG9ydCBjb25zdCBpbnNlcnRQZXJtaXNzaW9uID0gJ0FkbWluaXN0cmF0aW9uOkdlbmVyYWwnO1xuICAgICAgICBleHBvcnQgY29uc3QgcmVhZFBlcm1pc3Npb24gPSAnQWRtaW5pc3RyYXRpb246R2VuZXJhbCc7XG4gICAgICAgIGV4cG9ydCBjb25zdCB1cGRhdGVQZXJtaXNzaW9uID0gJ0FkbWluaXN0cmF0aW9uOkdlbmVyYWwnO1xuXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGNvbnN0IGVudW0gRmllbGRzIHtcbiAgICAgICAgICAgIElkID0gXCJJZFwiLFxuICAgICAgICAgICAgQmlsbElkID0gXCJCaWxsSWRcIixcbiAgICAgICAgICAgIFByb2R1Y3RJZCA9IFwiUHJvZHVjdElkXCIsXG4gICAgICAgICAgICBQcmljZSA9IFwiUHJpY2VcIixcbiAgICAgICAgICAgIFF0eSA9IFwiUXR5XCIsXG4gICAgICAgICAgICBTdWJUb3RhbCA9IFwiU3ViVG90YWxcIixcbiAgICAgICAgICAgIERpc2NvdW50ID0gXCJEaXNjb3VudFwiLFxuICAgICAgICAgICAgQmVmb3JlVGF4ID0gXCJCZWZvcmVUYXhcIixcbiAgICAgICAgICAgIFRheFBlcmNlbnRhZ2UgPSBcIlRheFBlcmNlbnRhZ2VcIixcbiAgICAgICAgICAgIFRheEFtb3VudCA9IFwiVGF4QW1vdW50XCIsXG4gICAgICAgICAgICBUb3RhbCA9IFwiVG90YWxcIixcbiAgICAgICAgICAgIEluc2VydERhdGUgPSBcIkluc2VydERhdGVcIixcbiAgICAgICAgICAgIEluc2VydFVzZXJJZCA9IFwiSW5zZXJ0VXNlcklkXCIsXG4gICAgICAgICAgICBVcGRhdGVEYXRlID0gXCJVcGRhdGVEYXRlXCIsXG4gICAgICAgICAgICBVcGRhdGVVc2VySWQgPSBcIlVwZGF0ZVVzZXJJZFwiLFxuICAgICAgICAgICAgVGVuYW50SWQgPSBcIlRlbmFudElkXCJcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsIm5hbWVzcGFjZSBJbmRvdGFsZW50LlB1cmNoYXNlIHtcbiAgICBleHBvcnQgbmFtZXNwYWNlIEJpbGxEZXRhaWxTZXJ2aWNlIHtcbiAgICAgICAgZXhwb3J0IGNvbnN0IGJhc2VVcmwgPSAnUHVyY2hhc2UvQmlsbERldGFpbCc7XG5cbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gQ3JlYXRlKHJlcXVlc3Q6IFNlcmVuaXR5LlNhdmVSZXF1ZXN0PEJpbGxEZXRhaWxSb3c+LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5LlNhdmVSZXNwb25zZSkgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBVcGRhdGUocmVxdWVzdDogU2VyZW5pdHkuU2F2ZVJlcXVlc3Q8QmlsbERldGFpbFJvdz4sIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuU2F2ZVJlc3BvbnNlKSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIERlbGV0ZShyZXF1ZXN0OiBTZXJlbml0eS5EZWxldGVSZXF1ZXN0LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5LkRlbGV0ZVJlc3BvbnNlKSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIFJldHJpZXZlKHJlcXVlc3Q6IFNlcmVuaXR5LlJldHJpZXZlUmVxdWVzdCwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5SZXRyaWV2ZVJlc3BvbnNlPEJpbGxEZXRhaWxSb3c+KSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIExpc3QocmVxdWVzdDogU2VyZW5pdHkuTGlzdFJlcXVlc3QsIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuTGlzdFJlc3BvbnNlPEJpbGxEZXRhaWxSb3c+KSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XG5cbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgY29uc3QgZW51bSBNZXRob2RzIHtcbiAgICAgICAgICAgIENyZWF0ZSA9IFwiUHVyY2hhc2UvQmlsbERldGFpbC9DcmVhdGVcIixcbiAgICAgICAgICAgIFVwZGF0ZSA9IFwiUHVyY2hhc2UvQmlsbERldGFpbC9VcGRhdGVcIixcbiAgICAgICAgICAgIERlbGV0ZSA9IFwiUHVyY2hhc2UvQmlsbERldGFpbC9EZWxldGVcIixcbiAgICAgICAgICAgIFJldHJpZXZlID0gXCJQdXJjaGFzZS9CaWxsRGV0YWlsL1JldHJpZXZlXCIsXG4gICAgICAgICAgICBMaXN0ID0gXCJQdXJjaGFzZS9CaWxsRGV0YWlsL0xpc3RcIlxuICAgICAgICB9XG5cbiAgICAgICAgW1xuICAgICAgICAgICAgJ0NyZWF0ZScsIFxuICAgICAgICAgICAgJ1VwZGF0ZScsIFxuICAgICAgICAgICAgJ0RlbGV0ZScsIFxuICAgICAgICAgICAgJ1JldHJpZXZlJywgXG4gICAgICAgICAgICAnTGlzdCdcbiAgICAgICAgXS5mb3JFYWNoKHggPT4ge1xuICAgICAgICAgICAgKDxhbnk+QmlsbERldGFpbFNlcnZpY2UpW3hdID0gZnVuY3Rpb24gKHIsIHMsIG8pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gUS5zZXJ2aWNlUmVxdWVzdChiYXNlVXJsICsgJy8nICsgeCwgciwgcywgbyk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9KTtcbiAgICB9XG59XG4iLCJuYW1lc3BhY2UgSW5kb3RhbGVudC5QdXJjaGFzZSB7XG4gICAgZXhwb3J0IGludGVyZmFjZSBCaWxsRm9ybSB7XG4gICAgICAgIE51bWJlcjogU2VyZW5pdHkuU3RyaW5nRWRpdG9yO1xuICAgICAgICBEZXNjcmlwdGlvbjogU2VyZW5pdHkuU3RyaW5nRWRpdG9yO1xuICAgICAgICBFeHRlcm5hbFJlZmVyZW5jZU51bWJlcjogU2VyZW5pdHkuU3RyaW5nRWRpdG9yO1xuICAgICAgICBQcm9jdXJlbWVudEdyb3VwOiBTZXJlbml0eS5TdHJpbmdFZGl0b3I7XG4gICAgICAgIEJpbGxEYXRlOiBTZXJlbml0eS5EYXRlRWRpdG9yO1xuICAgICAgICBQdXJjaGFzZU9yZGVySWQ6IFNlcmVuaXR5LkludGVnZXJFZGl0b3I7XG4gICAgICAgIFN1YlRvdGFsOiBTZXJlbml0eS5EZWNpbWFsRWRpdG9yO1xuICAgICAgICBEaXNjb3VudDogU2VyZW5pdHkuRGVjaW1hbEVkaXRvcjtcbiAgICAgICAgQmVmb3JlVGF4OiBTZXJlbml0eS5EZWNpbWFsRWRpdG9yO1xuICAgICAgICBUYXhBbW91bnQ6IFNlcmVuaXR5LkRlY2ltYWxFZGl0b3I7XG4gICAgICAgIFRvdGFsOiBTZXJlbml0eS5EZWNpbWFsRWRpdG9yO1xuICAgICAgICBPdGhlckNoYXJnZTogU2VyZW5pdHkuRGVjaW1hbEVkaXRvcjtcbiAgICAgICAgSW5zZXJ0RGF0ZTogU2VyZW5pdHkuRGF0ZUVkaXRvcjtcbiAgICAgICAgSW5zZXJ0VXNlcklkOiBTZXJlbml0eS5JbnRlZ2VyRWRpdG9yO1xuICAgICAgICBVcGRhdGVEYXRlOiBTZXJlbml0eS5EYXRlRWRpdG9yO1xuICAgICAgICBVcGRhdGVVc2VySWQ6IFNlcmVuaXR5LkludGVnZXJFZGl0b3I7XG4gICAgICAgIFRlbmFudElkOiBTZXJlbml0eS5JbnRlZ2VyRWRpdG9yO1xuICAgIH1cblxuICAgIGV4cG9ydCBjbGFzcyBCaWxsRm9ybSBleHRlbmRzIFNlcmVuaXR5LlByZWZpeGVkQ29udGV4dCB7XG4gICAgICAgIHN0YXRpYyBmb3JtS2V5ID0gJ1B1cmNoYXNlLkJpbGwnO1xuICAgICAgICBwcml2YXRlIHN0YXRpYyBpbml0OiBib29sZWFuO1xuXG4gICAgICAgIGNvbnN0cnVjdG9yKHByZWZpeDogc3RyaW5nKSB7XG4gICAgICAgICAgICBzdXBlcihwcmVmaXgpO1xuXG4gICAgICAgICAgICBpZiAoIUJpbGxGb3JtLmluaXQpICB7XG4gICAgICAgICAgICAgICAgQmlsbEZvcm0uaW5pdCA9IHRydWU7XG5cbiAgICAgICAgICAgICAgICB2YXIgcyA9IFNlcmVuaXR5O1xuICAgICAgICAgICAgICAgIHZhciB3MCA9IHMuU3RyaW5nRWRpdG9yO1xuICAgICAgICAgICAgICAgIHZhciB3MSA9IHMuRGF0ZUVkaXRvcjtcbiAgICAgICAgICAgICAgICB2YXIgdzIgPSBzLkludGVnZXJFZGl0b3I7XG4gICAgICAgICAgICAgICAgdmFyIHczID0gcy5EZWNpbWFsRWRpdG9yO1xuXG4gICAgICAgICAgICAgICAgUS5pbml0Rm9ybVR5cGUoQmlsbEZvcm0sIFtcbiAgICAgICAgICAgICAgICAgICAgJ051bWJlcicsIHcwLFxuICAgICAgICAgICAgICAgICAgICAnRGVzY3JpcHRpb24nLCB3MCxcbiAgICAgICAgICAgICAgICAgICAgJ0V4dGVybmFsUmVmZXJlbmNlTnVtYmVyJywgdzAsXG4gICAgICAgICAgICAgICAgICAgICdQcm9jdXJlbWVudEdyb3VwJywgdzAsXG4gICAgICAgICAgICAgICAgICAgICdCaWxsRGF0ZScsIHcxLFxuICAgICAgICAgICAgICAgICAgICAnUHVyY2hhc2VPcmRlcklkJywgdzIsXG4gICAgICAgICAgICAgICAgICAgICdTdWJUb3RhbCcsIHczLFxuICAgICAgICAgICAgICAgICAgICAnRGlzY291bnQnLCB3MyxcbiAgICAgICAgICAgICAgICAgICAgJ0JlZm9yZVRheCcsIHczLFxuICAgICAgICAgICAgICAgICAgICAnVGF4QW1vdW50JywgdzMsXG4gICAgICAgICAgICAgICAgICAgICdUb3RhbCcsIHczLFxuICAgICAgICAgICAgICAgICAgICAnT3RoZXJDaGFyZ2UnLCB3MyxcbiAgICAgICAgICAgICAgICAgICAgJ0luc2VydERhdGUnLCB3MSxcbiAgICAgICAgICAgICAgICAgICAgJ0luc2VydFVzZXJJZCcsIHcyLFxuICAgICAgICAgICAgICAgICAgICAnVXBkYXRlRGF0ZScsIHcxLFxuICAgICAgICAgICAgICAgICAgICAnVXBkYXRlVXNlcklkJywgdzIsXG4gICAgICAgICAgICAgICAgICAgICdUZW5hbnRJZCcsIHcyXG4gICAgICAgICAgICAgICAgXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJcclxubmFtZXNwYWNlIEluZG90YWxlbnQuUHVyY2hhc2Uge1xyXG4gICAgZXhwb3J0IGNsYXNzIEJpbGxQYXltZW50Q29sdW1ucyB7XHJcbiAgICAgICAgc3RhdGljIGNvbHVtbnNLZXkgPSAnUHVyY2hhc2UuQmlsbFBheW1lbnQnO1xyXG4gICAgfVxyXG59IiwibmFtZXNwYWNlIEluZG90YWxlbnQuUHVyY2hhc2Uge1xuICAgIGV4cG9ydCBpbnRlcmZhY2UgQmlsbFBheW1lbnRGb3JtIHtcbiAgICAgICAgQmlsbElkOiBTZXJlbml0eS5JbnRlZ2VyRWRpdG9yO1xuICAgICAgICBOdW1iZXI6IFNlcmVuaXR5LlN0cmluZ0VkaXRvcjtcbiAgICAgICAgRGVzY3JpcHRpb246IFNlcmVuaXR5LlN0cmluZ0VkaXRvcjtcbiAgICAgICAgUHJvY3VyZW1lbnRHcm91cDogU2VyZW5pdHkuU3RyaW5nRWRpdG9yO1xuICAgICAgICBQYXltZW50RGF0ZTogU2VyZW5pdHkuRGF0ZUVkaXRvcjtcbiAgICAgICAgQ2FzaEJhbmtJZDogU2VyZW5pdHkuSW50ZWdlckVkaXRvcjtcbiAgICAgICAgQmlsbEFtb3VudDogU2VyZW5pdHkuRGVjaW1hbEVkaXRvcjtcbiAgICAgICAgUGF5bWVudEFtb3VudDogU2VyZW5pdHkuRGVjaW1hbEVkaXRvcjtcbiAgICAgICAgSW5zZXJ0RGF0ZTogU2VyZW5pdHkuRGF0ZUVkaXRvcjtcbiAgICAgICAgSW5zZXJ0VXNlcklkOiBTZXJlbml0eS5JbnRlZ2VyRWRpdG9yO1xuICAgICAgICBVcGRhdGVEYXRlOiBTZXJlbml0eS5EYXRlRWRpdG9yO1xuICAgICAgICBVcGRhdGVVc2VySWQ6IFNlcmVuaXR5LkludGVnZXJFZGl0b3I7XG4gICAgICAgIFRlbmFudElkOiBTZXJlbml0eS5JbnRlZ2VyRWRpdG9yO1xuICAgIH1cblxuICAgIGV4cG9ydCBjbGFzcyBCaWxsUGF5bWVudEZvcm0gZXh0ZW5kcyBTZXJlbml0eS5QcmVmaXhlZENvbnRleHQge1xuICAgICAgICBzdGF0aWMgZm9ybUtleSA9ICdQdXJjaGFzZS5CaWxsUGF5bWVudCc7XG4gICAgICAgIHByaXZhdGUgc3RhdGljIGluaXQ6IGJvb2xlYW47XG5cbiAgICAgICAgY29uc3RydWN0b3IocHJlZml4OiBzdHJpbmcpIHtcbiAgICAgICAgICAgIHN1cGVyKHByZWZpeCk7XG5cbiAgICAgICAgICAgIGlmICghQmlsbFBheW1lbnRGb3JtLmluaXQpICB7XG4gICAgICAgICAgICAgICAgQmlsbFBheW1lbnRGb3JtLmluaXQgPSB0cnVlO1xuXG4gICAgICAgICAgICAgICAgdmFyIHMgPSBTZXJlbml0eTtcbiAgICAgICAgICAgICAgICB2YXIgdzAgPSBzLkludGVnZXJFZGl0b3I7XG4gICAgICAgICAgICAgICAgdmFyIHcxID0gcy5TdHJpbmdFZGl0b3I7XG4gICAgICAgICAgICAgICAgdmFyIHcyID0gcy5EYXRlRWRpdG9yO1xuICAgICAgICAgICAgICAgIHZhciB3MyA9IHMuRGVjaW1hbEVkaXRvcjtcblxuICAgICAgICAgICAgICAgIFEuaW5pdEZvcm1UeXBlKEJpbGxQYXltZW50Rm9ybSwgW1xuICAgICAgICAgICAgICAgICAgICAnQmlsbElkJywgdzAsXG4gICAgICAgICAgICAgICAgICAgICdOdW1iZXInLCB3MSxcbiAgICAgICAgICAgICAgICAgICAgJ0Rlc2NyaXB0aW9uJywgdzEsXG4gICAgICAgICAgICAgICAgICAgICdQcm9jdXJlbWVudEdyb3VwJywgdzEsXG4gICAgICAgICAgICAgICAgICAgICdQYXltZW50RGF0ZScsIHcyLFxuICAgICAgICAgICAgICAgICAgICAnQ2FzaEJhbmtJZCcsIHcwLFxuICAgICAgICAgICAgICAgICAgICAnQmlsbEFtb3VudCcsIHczLFxuICAgICAgICAgICAgICAgICAgICAnUGF5bWVudEFtb3VudCcsIHczLFxuICAgICAgICAgICAgICAgICAgICAnSW5zZXJ0RGF0ZScsIHcyLFxuICAgICAgICAgICAgICAgICAgICAnSW5zZXJ0VXNlcklkJywgdzAsXG4gICAgICAgICAgICAgICAgICAgICdVcGRhdGVEYXRlJywgdzIsXG4gICAgICAgICAgICAgICAgICAgICdVcGRhdGVVc2VySWQnLCB3MCxcbiAgICAgICAgICAgICAgICAgICAgJ1RlbmFudElkJywgdzBcbiAgICAgICAgICAgICAgICBdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbiIsIm5hbWVzcGFjZSBJbmRvdGFsZW50LlB1cmNoYXNlIHtcbiAgICBleHBvcnQgaW50ZXJmYWNlIEJpbGxQYXltZW50Um93IHtcbiAgICAgICAgSWQ/OiBudW1iZXI7XG4gICAgICAgIEJpbGxJZD86IG51bWJlcjtcbiAgICAgICAgTnVtYmVyPzogc3RyaW5nO1xuICAgICAgICBEZXNjcmlwdGlvbj86IHN0cmluZztcbiAgICAgICAgUHJvY3VyZW1lbnRHcm91cD86IHN0cmluZztcbiAgICAgICAgUGF5bWVudERhdGU/OiBzdHJpbmc7XG4gICAgICAgIENhc2hCYW5rSWQ/OiBudW1iZXI7XG4gICAgICAgIEJpbGxBbW91bnQ/OiBudW1iZXI7XG4gICAgICAgIFBheW1lbnRBbW91bnQ/OiBudW1iZXI7XG4gICAgICAgIEluc2VydERhdGU/OiBzdHJpbmc7XG4gICAgICAgIEluc2VydFVzZXJJZD86IG51bWJlcjtcbiAgICAgICAgVXBkYXRlRGF0ZT86IHN0cmluZztcbiAgICAgICAgVXBkYXRlVXNlcklkPzogbnVtYmVyO1xuICAgICAgICBUZW5hbnRJZD86IG51bWJlcjtcbiAgICB9XG5cbiAgICBleHBvcnQgbmFtZXNwYWNlIEJpbGxQYXltZW50Um93IHtcbiAgICAgICAgZXhwb3J0IGNvbnN0IGlkUHJvcGVydHkgPSAnSWQnO1xuICAgICAgICBleHBvcnQgY29uc3QgbmFtZVByb3BlcnR5ID0gJ051bWJlcic7XG4gICAgICAgIGV4cG9ydCBjb25zdCBsb2NhbFRleHRQcmVmaXggPSAnUHVyY2hhc2UuQmlsbFBheW1lbnQnO1xuICAgICAgICBleHBvcnQgY29uc3QgZGVsZXRlUGVybWlzc2lvbiA9ICdBZG1pbmlzdHJhdGlvbjpHZW5lcmFsJztcbiAgICAgICAgZXhwb3J0IGNvbnN0IGluc2VydFBlcm1pc3Npb24gPSAnQWRtaW5pc3RyYXRpb246R2VuZXJhbCc7XG4gICAgICAgIGV4cG9ydCBjb25zdCByZWFkUGVybWlzc2lvbiA9ICdBZG1pbmlzdHJhdGlvbjpHZW5lcmFsJztcbiAgICAgICAgZXhwb3J0IGNvbnN0IHVwZGF0ZVBlcm1pc3Npb24gPSAnQWRtaW5pc3RyYXRpb246R2VuZXJhbCc7XG5cbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgY29uc3QgZW51bSBGaWVsZHMge1xuICAgICAgICAgICAgSWQgPSBcIklkXCIsXG4gICAgICAgICAgICBCaWxsSWQgPSBcIkJpbGxJZFwiLFxuICAgICAgICAgICAgTnVtYmVyID0gXCJOdW1iZXJcIixcbiAgICAgICAgICAgIERlc2NyaXB0aW9uID0gXCJEZXNjcmlwdGlvblwiLFxuICAgICAgICAgICAgUHJvY3VyZW1lbnRHcm91cCA9IFwiUHJvY3VyZW1lbnRHcm91cFwiLFxuICAgICAgICAgICAgUGF5bWVudERhdGUgPSBcIlBheW1lbnREYXRlXCIsXG4gICAgICAgICAgICBDYXNoQmFua0lkID0gXCJDYXNoQmFua0lkXCIsXG4gICAgICAgICAgICBCaWxsQW1vdW50ID0gXCJCaWxsQW1vdW50XCIsXG4gICAgICAgICAgICBQYXltZW50QW1vdW50ID0gXCJQYXltZW50QW1vdW50XCIsXG4gICAgICAgICAgICBJbnNlcnREYXRlID0gXCJJbnNlcnREYXRlXCIsXG4gICAgICAgICAgICBJbnNlcnRVc2VySWQgPSBcIkluc2VydFVzZXJJZFwiLFxuICAgICAgICAgICAgVXBkYXRlRGF0ZSA9IFwiVXBkYXRlRGF0ZVwiLFxuICAgICAgICAgICAgVXBkYXRlVXNlcklkID0gXCJVcGRhdGVVc2VySWRcIixcbiAgICAgICAgICAgIFRlbmFudElkID0gXCJUZW5hbnRJZFwiXG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJuYW1lc3BhY2UgSW5kb3RhbGVudC5QdXJjaGFzZSB7XG4gICAgZXhwb3J0IG5hbWVzcGFjZSBCaWxsUGF5bWVudFNlcnZpY2Uge1xuICAgICAgICBleHBvcnQgY29uc3QgYmFzZVVybCA9ICdQdXJjaGFzZS9CaWxsUGF5bWVudCc7XG5cbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gQ3JlYXRlKHJlcXVlc3Q6IFNlcmVuaXR5LlNhdmVSZXF1ZXN0PEJpbGxQYXltZW50Um93Piwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5TYXZlUmVzcG9uc2UpID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gVXBkYXRlKHJlcXVlc3Q6IFNlcmVuaXR5LlNhdmVSZXF1ZXN0PEJpbGxQYXltZW50Um93Piwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5TYXZlUmVzcG9uc2UpID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gRGVsZXRlKHJlcXVlc3Q6IFNlcmVuaXR5LkRlbGV0ZVJlcXVlc3QsIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuRGVsZXRlUmVzcG9uc2UpID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gUmV0cmlldmUocmVxdWVzdDogU2VyZW5pdHkuUmV0cmlldmVSZXF1ZXN0LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5LlJldHJpZXZlUmVzcG9uc2U8QmlsbFBheW1lbnRSb3c+KSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIExpc3QocmVxdWVzdDogU2VyZW5pdHkuTGlzdFJlcXVlc3QsIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuTGlzdFJlc3BvbnNlPEJpbGxQYXltZW50Um93PikgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xuXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGNvbnN0IGVudW0gTWV0aG9kcyB7XG4gICAgICAgICAgICBDcmVhdGUgPSBcIlB1cmNoYXNlL0JpbGxQYXltZW50L0NyZWF0ZVwiLFxuICAgICAgICAgICAgVXBkYXRlID0gXCJQdXJjaGFzZS9CaWxsUGF5bWVudC9VcGRhdGVcIixcbiAgICAgICAgICAgIERlbGV0ZSA9IFwiUHVyY2hhc2UvQmlsbFBheW1lbnQvRGVsZXRlXCIsXG4gICAgICAgICAgICBSZXRyaWV2ZSA9IFwiUHVyY2hhc2UvQmlsbFBheW1lbnQvUmV0cmlldmVcIixcbiAgICAgICAgICAgIExpc3QgPSBcIlB1cmNoYXNlL0JpbGxQYXltZW50L0xpc3RcIlxuICAgICAgICB9XG5cbiAgICAgICAgW1xuICAgICAgICAgICAgJ0NyZWF0ZScsIFxuICAgICAgICAgICAgJ1VwZGF0ZScsIFxuICAgICAgICAgICAgJ0RlbGV0ZScsIFxuICAgICAgICAgICAgJ1JldHJpZXZlJywgXG4gICAgICAgICAgICAnTGlzdCdcbiAgICAgICAgXS5mb3JFYWNoKHggPT4ge1xuICAgICAgICAgICAgKDxhbnk+QmlsbFBheW1lbnRTZXJ2aWNlKVt4XSA9IGZ1bmN0aW9uIChyLCBzLCBvKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFEuc2VydmljZVJlcXVlc3QoYmFzZVVybCArICcvJyArIHgsIHIsIHMsIG8pO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuIiwibmFtZXNwYWNlIEluZG90YWxlbnQuUHVyY2hhc2Uge1xuICAgIGV4cG9ydCBpbnRlcmZhY2UgQmlsbFJvdyB7XG4gICAgICAgIElkPzogbnVtYmVyO1xuICAgICAgICBOdW1iZXI/OiBzdHJpbmc7XG4gICAgICAgIERlc2NyaXB0aW9uPzogc3RyaW5nO1xuICAgICAgICBFeHRlcm5hbFJlZmVyZW5jZU51bWJlcj86IHN0cmluZztcbiAgICAgICAgUHJvY3VyZW1lbnRHcm91cD86IHN0cmluZztcbiAgICAgICAgQmlsbERhdGU/OiBzdHJpbmc7XG4gICAgICAgIFB1cmNoYXNlT3JkZXJJZD86IG51bWJlcjtcbiAgICAgICAgU3ViVG90YWw/OiBudW1iZXI7XG4gICAgICAgIERpc2NvdW50PzogbnVtYmVyO1xuICAgICAgICBCZWZvcmVUYXg/OiBudW1iZXI7XG4gICAgICAgIFRheEFtb3VudD86IG51bWJlcjtcbiAgICAgICAgVG90YWw/OiBudW1iZXI7XG4gICAgICAgIE90aGVyQ2hhcmdlPzogbnVtYmVyO1xuICAgICAgICBJbnNlcnREYXRlPzogc3RyaW5nO1xuICAgICAgICBJbnNlcnRVc2VySWQ/OiBudW1iZXI7XG4gICAgICAgIFVwZGF0ZURhdGU/OiBzdHJpbmc7XG4gICAgICAgIFVwZGF0ZVVzZXJJZD86IG51bWJlcjtcbiAgICAgICAgVGVuYW50SWQ/OiBudW1iZXI7XG4gICAgfVxuXG4gICAgZXhwb3J0IG5hbWVzcGFjZSBCaWxsUm93IHtcbiAgICAgICAgZXhwb3J0IGNvbnN0IGlkUHJvcGVydHkgPSAnSWQnO1xuICAgICAgICBleHBvcnQgY29uc3QgbmFtZVByb3BlcnR5ID0gJ051bWJlcic7XG4gICAgICAgIGV4cG9ydCBjb25zdCBsb2NhbFRleHRQcmVmaXggPSAnUHVyY2hhc2UuQmlsbCc7XG4gICAgICAgIGV4cG9ydCBjb25zdCBkZWxldGVQZXJtaXNzaW9uID0gJ0FkbWluaXN0cmF0aW9uOkdlbmVyYWwnO1xuICAgICAgICBleHBvcnQgY29uc3QgaW5zZXJ0UGVybWlzc2lvbiA9ICdBZG1pbmlzdHJhdGlvbjpHZW5lcmFsJztcbiAgICAgICAgZXhwb3J0IGNvbnN0IHJlYWRQZXJtaXNzaW9uID0gJ0FkbWluaXN0cmF0aW9uOkdlbmVyYWwnO1xuICAgICAgICBleHBvcnQgY29uc3QgdXBkYXRlUGVybWlzc2lvbiA9ICdBZG1pbmlzdHJhdGlvbjpHZW5lcmFsJztcblxuICAgICAgICBleHBvcnQgZGVjbGFyZSBjb25zdCBlbnVtIEZpZWxkcyB7XG4gICAgICAgICAgICBJZCA9IFwiSWRcIixcbiAgICAgICAgICAgIE51bWJlciA9IFwiTnVtYmVyXCIsXG4gICAgICAgICAgICBEZXNjcmlwdGlvbiA9IFwiRGVzY3JpcHRpb25cIixcbiAgICAgICAgICAgIEV4dGVybmFsUmVmZXJlbmNlTnVtYmVyID0gXCJFeHRlcm5hbFJlZmVyZW5jZU51bWJlclwiLFxuICAgICAgICAgICAgUHJvY3VyZW1lbnRHcm91cCA9IFwiUHJvY3VyZW1lbnRHcm91cFwiLFxuICAgICAgICAgICAgQmlsbERhdGUgPSBcIkJpbGxEYXRlXCIsXG4gICAgICAgICAgICBQdXJjaGFzZU9yZGVySWQgPSBcIlB1cmNoYXNlT3JkZXJJZFwiLFxuICAgICAgICAgICAgU3ViVG90YWwgPSBcIlN1YlRvdGFsXCIsXG4gICAgICAgICAgICBEaXNjb3VudCA9IFwiRGlzY291bnRcIixcbiAgICAgICAgICAgIEJlZm9yZVRheCA9IFwiQmVmb3JlVGF4XCIsXG4gICAgICAgICAgICBUYXhBbW91bnQgPSBcIlRheEFtb3VudFwiLFxuICAgICAgICAgICAgVG90YWwgPSBcIlRvdGFsXCIsXG4gICAgICAgICAgICBPdGhlckNoYXJnZSA9IFwiT3RoZXJDaGFyZ2VcIixcbiAgICAgICAgICAgIEluc2VydERhdGUgPSBcIkluc2VydERhdGVcIixcbiAgICAgICAgICAgIEluc2VydFVzZXJJZCA9IFwiSW5zZXJ0VXNlcklkXCIsXG4gICAgICAgICAgICBVcGRhdGVEYXRlID0gXCJVcGRhdGVEYXRlXCIsXG4gICAgICAgICAgICBVcGRhdGVVc2VySWQgPSBcIlVwZGF0ZVVzZXJJZFwiLFxuICAgICAgICAgICAgVGVuYW50SWQgPSBcIlRlbmFudElkXCJcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsIm5hbWVzcGFjZSBJbmRvdGFsZW50LlB1cmNoYXNlIHtcbiAgICBleHBvcnQgbmFtZXNwYWNlIEJpbGxTZXJ2aWNlIHtcbiAgICAgICAgZXhwb3J0IGNvbnN0IGJhc2VVcmwgPSAnUHVyY2hhc2UvQmlsbCc7XG5cbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gQ3JlYXRlKHJlcXVlc3Q6IFNlcmVuaXR5LlNhdmVSZXF1ZXN0PEJpbGxSb3c+LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5LlNhdmVSZXNwb25zZSkgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBVcGRhdGUocmVxdWVzdDogU2VyZW5pdHkuU2F2ZVJlcXVlc3Q8QmlsbFJvdz4sIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuU2F2ZVJlc3BvbnNlKSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIERlbGV0ZShyZXF1ZXN0OiBTZXJlbml0eS5EZWxldGVSZXF1ZXN0LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5LkRlbGV0ZVJlc3BvbnNlKSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIFJldHJpZXZlKHJlcXVlc3Q6IFNlcmVuaXR5LlJldHJpZXZlUmVxdWVzdCwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5SZXRyaWV2ZVJlc3BvbnNlPEJpbGxSb3c+KSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIExpc3QocmVxdWVzdDogU2VyZW5pdHkuTGlzdFJlcXVlc3QsIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuTGlzdFJlc3BvbnNlPEJpbGxSb3c+KSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XG5cbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgY29uc3QgZW51bSBNZXRob2RzIHtcbiAgICAgICAgICAgIENyZWF0ZSA9IFwiUHVyY2hhc2UvQmlsbC9DcmVhdGVcIixcbiAgICAgICAgICAgIFVwZGF0ZSA9IFwiUHVyY2hhc2UvQmlsbC9VcGRhdGVcIixcbiAgICAgICAgICAgIERlbGV0ZSA9IFwiUHVyY2hhc2UvQmlsbC9EZWxldGVcIixcbiAgICAgICAgICAgIFJldHJpZXZlID0gXCJQdXJjaGFzZS9CaWxsL1JldHJpZXZlXCIsXG4gICAgICAgICAgICBMaXN0ID0gXCJQdXJjaGFzZS9CaWxsL0xpc3RcIlxuICAgICAgICB9XG5cbiAgICAgICAgW1xuICAgICAgICAgICAgJ0NyZWF0ZScsIFxuICAgICAgICAgICAgJ1VwZGF0ZScsIFxuICAgICAgICAgICAgJ0RlbGV0ZScsIFxuICAgICAgICAgICAgJ1JldHJpZXZlJywgXG4gICAgICAgICAgICAnTGlzdCdcbiAgICAgICAgXS5mb3JFYWNoKHggPT4ge1xuICAgICAgICAgICAgKDxhbnk+QmlsbFNlcnZpY2UpW3hdID0gZnVuY3Rpb24gKHIsIHMsIG8pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gUS5zZXJ2aWNlUmVxdWVzdChiYXNlVXJsICsgJy8nICsgeCwgciwgcywgbyk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9KTtcbiAgICB9XG59XG4iLCJcclxubmFtZXNwYWNlIEluZG90YWxlbnQuUHVyY2hhc2Uge1xyXG4gICAgZXhwb3J0IGNsYXNzIFB1cmNoYXNlT3JkZXJDb2x1bW5zIHtcclxuICAgICAgICBzdGF0aWMgY29sdW1uc0tleSA9ICdQdXJjaGFzZS5QdXJjaGFzZU9yZGVyJztcclxuICAgIH1cclxufSIsIlxyXG5uYW1lc3BhY2UgSW5kb3RhbGVudC5QdXJjaGFzZSB7XHJcbiAgICBleHBvcnQgY2xhc3MgUHVyY2hhc2VPcmRlckRldGFpbENvbHVtbnMge1xyXG4gICAgICAgIHN0YXRpYyBjb2x1bW5zS2V5ID0gJ1B1cmNoYXNlLlB1cmNoYXNlT3JkZXJEZXRhaWwnO1xyXG4gICAgfVxyXG59IiwibmFtZXNwYWNlIEluZG90YWxlbnQuUHVyY2hhc2Uge1xuICAgIGV4cG9ydCBpbnRlcmZhY2UgUHVyY2hhc2VPcmRlckRldGFpbEZvcm0ge1xuICAgICAgICBQdXJjaGFzZU9yZGVySWQ6IFNlcmVuaXR5LkludGVnZXJFZGl0b3I7XG4gICAgICAgIFByb2R1Y3RJZDogU2VyZW5pdHkuSW50ZWdlckVkaXRvcjtcbiAgICAgICAgUHJpY2U6IFNlcmVuaXR5LkRlY2ltYWxFZGl0b3I7XG4gICAgICAgIFF0eTogU2VyZW5pdHkuRGVjaW1hbEVkaXRvcjtcbiAgICAgICAgU3ViVG90YWw6IFNlcmVuaXR5LkRlY2ltYWxFZGl0b3I7XG4gICAgICAgIERpc2NvdW50OiBTZXJlbml0eS5EZWNpbWFsRWRpdG9yO1xuICAgICAgICBCZWZvcmVUYXg6IFNlcmVuaXR5LkRlY2ltYWxFZGl0b3I7XG4gICAgICAgIFRheFBlcmNlbnRhZ2U6IFNlcmVuaXR5LkRlY2ltYWxFZGl0b3I7XG4gICAgICAgIFRheEFtb3VudDogU2VyZW5pdHkuRGVjaW1hbEVkaXRvcjtcbiAgICAgICAgVG90YWw6IFNlcmVuaXR5LkRlY2ltYWxFZGl0b3I7XG4gICAgICAgIEluc2VydERhdGU6IFNlcmVuaXR5LkRhdGVFZGl0b3I7XG4gICAgICAgIEluc2VydFVzZXJJZDogU2VyZW5pdHkuSW50ZWdlckVkaXRvcjtcbiAgICAgICAgVXBkYXRlRGF0ZTogU2VyZW5pdHkuRGF0ZUVkaXRvcjtcbiAgICAgICAgVXBkYXRlVXNlcklkOiBTZXJlbml0eS5JbnRlZ2VyRWRpdG9yO1xuICAgICAgICBUZW5hbnRJZDogU2VyZW5pdHkuSW50ZWdlckVkaXRvcjtcbiAgICB9XG5cbiAgICBleHBvcnQgY2xhc3MgUHVyY2hhc2VPcmRlckRldGFpbEZvcm0gZXh0ZW5kcyBTZXJlbml0eS5QcmVmaXhlZENvbnRleHQge1xuICAgICAgICBzdGF0aWMgZm9ybUtleSA9ICdQdXJjaGFzZS5QdXJjaGFzZU9yZGVyRGV0YWlsJztcbiAgICAgICAgcHJpdmF0ZSBzdGF0aWMgaW5pdDogYm9vbGVhbjtcblxuICAgICAgICBjb25zdHJ1Y3RvcihwcmVmaXg6IHN0cmluZykge1xuICAgICAgICAgICAgc3VwZXIocHJlZml4KTtcblxuICAgICAgICAgICAgaWYgKCFQdXJjaGFzZU9yZGVyRGV0YWlsRm9ybS5pbml0KSAge1xuICAgICAgICAgICAgICAgIFB1cmNoYXNlT3JkZXJEZXRhaWxGb3JtLmluaXQgPSB0cnVlO1xuXG4gICAgICAgICAgICAgICAgdmFyIHMgPSBTZXJlbml0eTtcbiAgICAgICAgICAgICAgICB2YXIgdzAgPSBzLkludGVnZXJFZGl0b3I7XG4gICAgICAgICAgICAgICAgdmFyIHcxID0gcy5EZWNpbWFsRWRpdG9yO1xuICAgICAgICAgICAgICAgIHZhciB3MiA9IHMuRGF0ZUVkaXRvcjtcblxuICAgICAgICAgICAgICAgIFEuaW5pdEZvcm1UeXBlKFB1cmNoYXNlT3JkZXJEZXRhaWxGb3JtLCBbXG4gICAgICAgICAgICAgICAgICAgICdQdXJjaGFzZU9yZGVySWQnLCB3MCxcbiAgICAgICAgICAgICAgICAgICAgJ1Byb2R1Y3RJZCcsIHcwLFxuICAgICAgICAgICAgICAgICAgICAnUHJpY2UnLCB3MSxcbiAgICAgICAgICAgICAgICAgICAgJ1F0eScsIHcxLFxuICAgICAgICAgICAgICAgICAgICAnU3ViVG90YWwnLCB3MSxcbiAgICAgICAgICAgICAgICAgICAgJ0Rpc2NvdW50JywgdzEsXG4gICAgICAgICAgICAgICAgICAgICdCZWZvcmVUYXgnLCB3MSxcbiAgICAgICAgICAgICAgICAgICAgJ1RheFBlcmNlbnRhZ2UnLCB3MSxcbiAgICAgICAgICAgICAgICAgICAgJ1RheEFtb3VudCcsIHcxLFxuICAgICAgICAgICAgICAgICAgICAnVG90YWwnLCB3MSxcbiAgICAgICAgICAgICAgICAgICAgJ0luc2VydERhdGUnLCB3MixcbiAgICAgICAgICAgICAgICAgICAgJ0luc2VydFVzZXJJZCcsIHcwLFxuICAgICAgICAgICAgICAgICAgICAnVXBkYXRlRGF0ZScsIHcyLFxuICAgICAgICAgICAgICAgICAgICAnVXBkYXRlVXNlcklkJywgdzAsXG4gICAgICAgICAgICAgICAgICAgICdUZW5hbnRJZCcsIHcwXG4gICAgICAgICAgICAgICAgXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJuYW1lc3BhY2UgSW5kb3RhbGVudC5QdXJjaGFzZSB7XG4gICAgZXhwb3J0IGludGVyZmFjZSBQdXJjaGFzZU9yZGVyRGV0YWlsUm93IHtcbiAgICAgICAgSWQ/OiBudW1iZXI7XG4gICAgICAgIFB1cmNoYXNlT3JkZXJJZD86IG51bWJlcjtcbiAgICAgICAgUHJvZHVjdElkPzogbnVtYmVyO1xuICAgICAgICBQcmljZT86IG51bWJlcjtcbiAgICAgICAgUXR5PzogbnVtYmVyO1xuICAgICAgICBTdWJUb3RhbD86IG51bWJlcjtcbiAgICAgICAgRGlzY291bnQ/OiBudW1iZXI7XG4gICAgICAgIEJlZm9yZVRheD86IG51bWJlcjtcbiAgICAgICAgVGF4UGVyY2VudGFnZT86IG51bWJlcjtcbiAgICAgICAgVGF4QW1vdW50PzogbnVtYmVyO1xuICAgICAgICBUb3RhbD86IG51bWJlcjtcbiAgICAgICAgSW5zZXJ0RGF0ZT86IHN0cmluZztcbiAgICAgICAgSW5zZXJ0VXNlcklkPzogbnVtYmVyO1xuICAgICAgICBVcGRhdGVEYXRlPzogc3RyaW5nO1xuICAgICAgICBVcGRhdGVVc2VySWQ/OiBudW1iZXI7XG4gICAgICAgIFRlbmFudElkPzogbnVtYmVyO1xuICAgIH1cblxuICAgIGV4cG9ydCBuYW1lc3BhY2UgUHVyY2hhc2VPcmRlckRldGFpbFJvdyB7XG4gICAgICAgIGV4cG9ydCBjb25zdCBpZFByb3BlcnR5ID0gJ0lkJztcbiAgICAgICAgZXhwb3J0IGNvbnN0IGxvY2FsVGV4dFByZWZpeCA9ICdQdXJjaGFzZS5QdXJjaGFzZU9yZGVyRGV0YWlsJztcbiAgICAgICAgZXhwb3J0IGNvbnN0IGRlbGV0ZVBlcm1pc3Npb24gPSAnQWRtaW5pc3RyYXRpb246R2VuZXJhbCc7XG4gICAgICAgIGV4cG9ydCBjb25zdCBpbnNlcnRQZXJtaXNzaW9uID0gJ0FkbWluaXN0cmF0aW9uOkdlbmVyYWwnO1xuICAgICAgICBleHBvcnQgY29uc3QgcmVhZFBlcm1pc3Npb24gPSAnQWRtaW5pc3RyYXRpb246R2VuZXJhbCc7XG4gICAgICAgIGV4cG9ydCBjb25zdCB1cGRhdGVQZXJtaXNzaW9uID0gJ0FkbWluaXN0cmF0aW9uOkdlbmVyYWwnO1xuXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGNvbnN0IGVudW0gRmllbGRzIHtcbiAgICAgICAgICAgIElkID0gXCJJZFwiLFxuICAgICAgICAgICAgUHVyY2hhc2VPcmRlcklkID0gXCJQdXJjaGFzZU9yZGVySWRcIixcbiAgICAgICAgICAgIFByb2R1Y3RJZCA9IFwiUHJvZHVjdElkXCIsXG4gICAgICAgICAgICBQcmljZSA9IFwiUHJpY2VcIixcbiAgICAgICAgICAgIFF0eSA9IFwiUXR5XCIsXG4gICAgICAgICAgICBTdWJUb3RhbCA9IFwiU3ViVG90YWxcIixcbiAgICAgICAgICAgIERpc2NvdW50ID0gXCJEaXNjb3VudFwiLFxuICAgICAgICAgICAgQmVmb3JlVGF4ID0gXCJCZWZvcmVUYXhcIixcbiAgICAgICAgICAgIFRheFBlcmNlbnRhZ2UgPSBcIlRheFBlcmNlbnRhZ2VcIixcbiAgICAgICAgICAgIFRheEFtb3VudCA9IFwiVGF4QW1vdW50XCIsXG4gICAgICAgICAgICBUb3RhbCA9IFwiVG90YWxcIixcbiAgICAgICAgICAgIEluc2VydERhdGUgPSBcIkluc2VydERhdGVcIixcbiAgICAgICAgICAgIEluc2VydFVzZXJJZCA9IFwiSW5zZXJ0VXNlcklkXCIsXG4gICAgICAgICAgICBVcGRhdGVEYXRlID0gXCJVcGRhdGVEYXRlXCIsXG4gICAgICAgICAgICBVcGRhdGVVc2VySWQgPSBcIlVwZGF0ZVVzZXJJZFwiLFxuICAgICAgICAgICAgVGVuYW50SWQgPSBcIlRlbmFudElkXCJcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsIm5hbWVzcGFjZSBJbmRvdGFsZW50LlB1cmNoYXNlIHtcbiAgICBleHBvcnQgbmFtZXNwYWNlIFB1cmNoYXNlT3JkZXJEZXRhaWxTZXJ2aWNlIHtcbiAgICAgICAgZXhwb3J0IGNvbnN0IGJhc2VVcmwgPSAnUHVyY2hhc2UvUHVyY2hhc2VPcmRlckRldGFpbCc7XG5cbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gQ3JlYXRlKHJlcXVlc3Q6IFNlcmVuaXR5LlNhdmVSZXF1ZXN0PFB1cmNoYXNlT3JkZXJEZXRhaWxSb3c+LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5LlNhdmVSZXNwb25zZSkgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBVcGRhdGUocmVxdWVzdDogU2VyZW5pdHkuU2F2ZVJlcXVlc3Q8UHVyY2hhc2VPcmRlckRldGFpbFJvdz4sIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuU2F2ZVJlc3BvbnNlKSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIERlbGV0ZShyZXF1ZXN0OiBTZXJlbml0eS5EZWxldGVSZXF1ZXN0LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5LkRlbGV0ZVJlc3BvbnNlKSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIFJldHJpZXZlKHJlcXVlc3Q6IFNlcmVuaXR5LlJldHJpZXZlUmVxdWVzdCwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5SZXRyaWV2ZVJlc3BvbnNlPFB1cmNoYXNlT3JkZXJEZXRhaWxSb3c+KSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIExpc3QocmVxdWVzdDogU2VyZW5pdHkuTGlzdFJlcXVlc3QsIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuTGlzdFJlc3BvbnNlPFB1cmNoYXNlT3JkZXJEZXRhaWxSb3c+KSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XG5cbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgY29uc3QgZW51bSBNZXRob2RzIHtcbiAgICAgICAgICAgIENyZWF0ZSA9IFwiUHVyY2hhc2UvUHVyY2hhc2VPcmRlckRldGFpbC9DcmVhdGVcIixcbiAgICAgICAgICAgIFVwZGF0ZSA9IFwiUHVyY2hhc2UvUHVyY2hhc2VPcmRlckRldGFpbC9VcGRhdGVcIixcbiAgICAgICAgICAgIERlbGV0ZSA9IFwiUHVyY2hhc2UvUHVyY2hhc2VPcmRlckRldGFpbC9EZWxldGVcIixcbiAgICAgICAgICAgIFJldHJpZXZlID0gXCJQdXJjaGFzZS9QdXJjaGFzZU9yZGVyRGV0YWlsL1JldHJpZXZlXCIsXG4gICAgICAgICAgICBMaXN0ID0gXCJQdXJjaGFzZS9QdXJjaGFzZU9yZGVyRGV0YWlsL0xpc3RcIlxuICAgICAgICB9XG5cbiAgICAgICAgW1xuICAgICAgICAgICAgJ0NyZWF0ZScsIFxuICAgICAgICAgICAgJ1VwZGF0ZScsIFxuICAgICAgICAgICAgJ0RlbGV0ZScsIFxuICAgICAgICAgICAgJ1JldHJpZXZlJywgXG4gICAgICAgICAgICAnTGlzdCdcbiAgICAgICAgXS5mb3JFYWNoKHggPT4ge1xuICAgICAgICAgICAgKDxhbnk+UHVyY2hhc2VPcmRlckRldGFpbFNlcnZpY2UpW3hdID0gZnVuY3Rpb24gKHIsIHMsIG8pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gUS5zZXJ2aWNlUmVxdWVzdChiYXNlVXJsICsgJy8nICsgeCwgciwgcywgbyk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9KTtcbiAgICB9XG59XG4iLCJuYW1lc3BhY2UgSW5kb3RhbGVudC5QdXJjaGFzZSB7XG4gICAgZXhwb3J0IGludGVyZmFjZSBQdXJjaGFzZU9yZGVyRm9ybSB7XG4gICAgICAgIE51bWJlcjogU2VyZW5pdHkuU3RyaW5nRWRpdG9yO1xuICAgICAgICBEZXNjcmlwdGlvbjogU2VyZW5pdHkuU3RyaW5nRWRpdG9yO1xuICAgICAgICBQcm9jdXJlbWVudEdyb3VwOiBTZXJlbml0eS5TdHJpbmdFZGl0b3I7XG4gICAgICAgIE9yZGVyRGF0ZTogU2VyZW5pdHkuRGF0ZUVkaXRvcjtcbiAgICAgICAgVmVuZG9ySWQ6IFNlcmVuaXR5LkludGVnZXJFZGl0b3I7XG4gICAgICAgIFN1YlRvdGFsOiBTZXJlbml0eS5EZWNpbWFsRWRpdG9yO1xuICAgICAgICBEaXNjb3VudDogU2VyZW5pdHkuRGVjaW1hbEVkaXRvcjtcbiAgICAgICAgQmVmb3JlVGF4OiBTZXJlbml0eS5EZWNpbWFsRWRpdG9yO1xuICAgICAgICBUYXhBbW91bnQ6IFNlcmVuaXR5LkRlY2ltYWxFZGl0b3I7XG4gICAgICAgIFRvdGFsOiBTZXJlbml0eS5EZWNpbWFsRWRpdG9yO1xuICAgICAgICBPdGhlckNoYXJnZTogU2VyZW5pdHkuRGVjaW1hbEVkaXRvcjtcbiAgICAgICAgSW5zZXJ0RGF0ZTogU2VyZW5pdHkuRGF0ZUVkaXRvcjtcbiAgICAgICAgSW5zZXJ0VXNlcklkOiBTZXJlbml0eS5JbnRlZ2VyRWRpdG9yO1xuICAgICAgICBVcGRhdGVEYXRlOiBTZXJlbml0eS5EYXRlRWRpdG9yO1xuICAgICAgICBVcGRhdGVVc2VySWQ6IFNlcmVuaXR5LkludGVnZXJFZGl0b3I7XG4gICAgICAgIFRlbmFudElkOiBTZXJlbml0eS5JbnRlZ2VyRWRpdG9yO1xuICAgIH1cblxuICAgIGV4cG9ydCBjbGFzcyBQdXJjaGFzZU9yZGVyRm9ybSBleHRlbmRzIFNlcmVuaXR5LlByZWZpeGVkQ29udGV4dCB7XG4gICAgICAgIHN0YXRpYyBmb3JtS2V5ID0gJ1B1cmNoYXNlLlB1cmNoYXNlT3JkZXInO1xuICAgICAgICBwcml2YXRlIHN0YXRpYyBpbml0OiBib29sZWFuO1xuXG4gICAgICAgIGNvbnN0cnVjdG9yKHByZWZpeDogc3RyaW5nKSB7XG4gICAgICAgICAgICBzdXBlcihwcmVmaXgpO1xuXG4gICAgICAgICAgICBpZiAoIVB1cmNoYXNlT3JkZXJGb3JtLmluaXQpICB7XG4gICAgICAgICAgICAgICAgUHVyY2hhc2VPcmRlckZvcm0uaW5pdCA9IHRydWU7XG5cbiAgICAgICAgICAgICAgICB2YXIgcyA9IFNlcmVuaXR5O1xuICAgICAgICAgICAgICAgIHZhciB3MCA9IHMuU3RyaW5nRWRpdG9yO1xuICAgICAgICAgICAgICAgIHZhciB3MSA9IHMuRGF0ZUVkaXRvcjtcbiAgICAgICAgICAgICAgICB2YXIgdzIgPSBzLkludGVnZXJFZGl0b3I7XG4gICAgICAgICAgICAgICAgdmFyIHczID0gcy5EZWNpbWFsRWRpdG9yO1xuXG4gICAgICAgICAgICAgICAgUS5pbml0Rm9ybVR5cGUoUHVyY2hhc2VPcmRlckZvcm0sIFtcbiAgICAgICAgICAgICAgICAgICAgJ051bWJlcicsIHcwLFxuICAgICAgICAgICAgICAgICAgICAnRGVzY3JpcHRpb24nLCB3MCxcbiAgICAgICAgICAgICAgICAgICAgJ1Byb2N1cmVtZW50R3JvdXAnLCB3MCxcbiAgICAgICAgICAgICAgICAgICAgJ09yZGVyRGF0ZScsIHcxLFxuICAgICAgICAgICAgICAgICAgICAnVmVuZG9ySWQnLCB3MixcbiAgICAgICAgICAgICAgICAgICAgJ1N1YlRvdGFsJywgdzMsXG4gICAgICAgICAgICAgICAgICAgICdEaXNjb3VudCcsIHczLFxuICAgICAgICAgICAgICAgICAgICAnQmVmb3JlVGF4JywgdzMsXG4gICAgICAgICAgICAgICAgICAgICdUYXhBbW91bnQnLCB3MyxcbiAgICAgICAgICAgICAgICAgICAgJ1RvdGFsJywgdzMsXG4gICAgICAgICAgICAgICAgICAgICdPdGhlckNoYXJnZScsIHczLFxuICAgICAgICAgICAgICAgICAgICAnSW5zZXJ0RGF0ZScsIHcxLFxuICAgICAgICAgICAgICAgICAgICAnSW5zZXJ0VXNlcklkJywgdzIsXG4gICAgICAgICAgICAgICAgICAgICdVcGRhdGVEYXRlJywgdzEsXG4gICAgICAgICAgICAgICAgICAgICdVcGRhdGVVc2VySWQnLCB3MixcbiAgICAgICAgICAgICAgICAgICAgJ1RlbmFudElkJywgdzJcbiAgICAgICAgICAgICAgICBdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbiIsIm5hbWVzcGFjZSBJbmRvdGFsZW50LlB1cmNoYXNlIHtcbiAgICBleHBvcnQgaW50ZXJmYWNlIFB1cmNoYXNlT3JkZXJSb3cge1xuICAgICAgICBJZD86IG51bWJlcjtcbiAgICAgICAgTnVtYmVyPzogc3RyaW5nO1xuICAgICAgICBEZXNjcmlwdGlvbj86IHN0cmluZztcbiAgICAgICAgUHJvY3VyZW1lbnRHcm91cD86IHN0cmluZztcbiAgICAgICAgT3JkZXJEYXRlPzogc3RyaW5nO1xuICAgICAgICBWZW5kb3JJZD86IG51bWJlcjtcbiAgICAgICAgU3ViVG90YWw/OiBudW1iZXI7XG4gICAgICAgIERpc2NvdW50PzogbnVtYmVyO1xuICAgICAgICBCZWZvcmVUYXg/OiBudW1iZXI7XG4gICAgICAgIFRheEFtb3VudD86IG51bWJlcjtcbiAgICAgICAgVG90YWw/OiBudW1iZXI7XG4gICAgICAgIE90aGVyQ2hhcmdlPzogbnVtYmVyO1xuICAgICAgICBJbnNlcnREYXRlPzogc3RyaW5nO1xuICAgICAgICBJbnNlcnRVc2VySWQ/OiBudW1iZXI7XG4gICAgICAgIFVwZGF0ZURhdGU/OiBzdHJpbmc7XG4gICAgICAgIFVwZGF0ZVVzZXJJZD86IG51bWJlcjtcbiAgICAgICAgVGVuYW50SWQ/OiBudW1iZXI7XG4gICAgfVxuXG4gICAgZXhwb3J0IG5hbWVzcGFjZSBQdXJjaGFzZU9yZGVyUm93IHtcbiAgICAgICAgZXhwb3J0IGNvbnN0IGlkUHJvcGVydHkgPSAnSWQnO1xuICAgICAgICBleHBvcnQgY29uc3QgbmFtZVByb3BlcnR5ID0gJ051bWJlcic7XG4gICAgICAgIGV4cG9ydCBjb25zdCBsb2NhbFRleHRQcmVmaXggPSAnUHVyY2hhc2UuUHVyY2hhc2VPcmRlcic7XG4gICAgICAgIGV4cG9ydCBjb25zdCBkZWxldGVQZXJtaXNzaW9uID0gJ0FkbWluaXN0cmF0aW9uOkdlbmVyYWwnO1xuICAgICAgICBleHBvcnQgY29uc3QgaW5zZXJ0UGVybWlzc2lvbiA9ICdBZG1pbmlzdHJhdGlvbjpHZW5lcmFsJztcbiAgICAgICAgZXhwb3J0IGNvbnN0IHJlYWRQZXJtaXNzaW9uID0gJ0FkbWluaXN0cmF0aW9uOkdlbmVyYWwnO1xuICAgICAgICBleHBvcnQgY29uc3QgdXBkYXRlUGVybWlzc2lvbiA9ICdBZG1pbmlzdHJhdGlvbjpHZW5lcmFsJztcblxuICAgICAgICBleHBvcnQgZGVjbGFyZSBjb25zdCBlbnVtIEZpZWxkcyB7XG4gICAgICAgICAgICBJZCA9IFwiSWRcIixcbiAgICAgICAgICAgIE51bWJlciA9IFwiTnVtYmVyXCIsXG4gICAgICAgICAgICBEZXNjcmlwdGlvbiA9IFwiRGVzY3JpcHRpb25cIixcbiAgICAgICAgICAgIFByb2N1cmVtZW50R3JvdXAgPSBcIlByb2N1cmVtZW50R3JvdXBcIixcbiAgICAgICAgICAgIE9yZGVyRGF0ZSA9IFwiT3JkZXJEYXRlXCIsXG4gICAgICAgICAgICBWZW5kb3JJZCA9IFwiVmVuZG9ySWRcIixcbiAgICAgICAgICAgIFN1YlRvdGFsID0gXCJTdWJUb3RhbFwiLFxuICAgICAgICAgICAgRGlzY291bnQgPSBcIkRpc2NvdW50XCIsXG4gICAgICAgICAgICBCZWZvcmVUYXggPSBcIkJlZm9yZVRheFwiLFxuICAgICAgICAgICAgVGF4QW1vdW50ID0gXCJUYXhBbW91bnRcIixcbiAgICAgICAgICAgIFRvdGFsID0gXCJUb3RhbFwiLFxuICAgICAgICAgICAgT3RoZXJDaGFyZ2UgPSBcIk90aGVyQ2hhcmdlXCIsXG4gICAgICAgICAgICBJbnNlcnREYXRlID0gXCJJbnNlcnREYXRlXCIsXG4gICAgICAgICAgICBJbnNlcnRVc2VySWQgPSBcIkluc2VydFVzZXJJZFwiLFxuICAgICAgICAgICAgVXBkYXRlRGF0ZSA9IFwiVXBkYXRlRGF0ZVwiLFxuICAgICAgICAgICAgVXBkYXRlVXNlcklkID0gXCJVcGRhdGVVc2VySWRcIixcbiAgICAgICAgICAgIFRlbmFudElkID0gXCJUZW5hbnRJZFwiXG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJuYW1lc3BhY2UgSW5kb3RhbGVudC5QdXJjaGFzZSB7XG4gICAgZXhwb3J0IG5hbWVzcGFjZSBQdXJjaGFzZU9yZGVyU2VydmljZSB7XG4gICAgICAgIGV4cG9ydCBjb25zdCBiYXNlVXJsID0gJ1B1cmNoYXNlL1B1cmNoYXNlT3JkZXInO1xuXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIENyZWF0ZShyZXF1ZXN0OiBTZXJlbml0eS5TYXZlUmVxdWVzdDxQdXJjaGFzZU9yZGVyUm93Piwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5TYXZlUmVzcG9uc2UpID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gVXBkYXRlKHJlcXVlc3Q6IFNlcmVuaXR5LlNhdmVSZXF1ZXN0PFB1cmNoYXNlT3JkZXJSb3c+LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5LlNhdmVSZXNwb25zZSkgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBEZWxldGUocmVxdWVzdDogU2VyZW5pdHkuRGVsZXRlUmVxdWVzdCwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5EZWxldGVSZXNwb25zZSkgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBSZXRyaWV2ZShyZXF1ZXN0OiBTZXJlbml0eS5SZXRyaWV2ZVJlcXVlc3QsIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuUmV0cmlldmVSZXNwb25zZTxQdXJjaGFzZU9yZGVyUm93PikgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBMaXN0KHJlcXVlc3Q6IFNlcmVuaXR5Lkxpc3RSZXF1ZXN0LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5Lkxpc3RSZXNwb25zZTxQdXJjaGFzZU9yZGVyUm93PikgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xuXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGNvbnN0IGVudW0gTWV0aG9kcyB7XG4gICAgICAgICAgICBDcmVhdGUgPSBcIlB1cmNoYXNlL1B1cmNoYXNlT3JkZXIvQ3JlYXRlXCIsXG4gICAgICAgICAgICBVcGRhdGUgPSBcIlB1cmNoYXNlL1B1cmNoYXNlT3JkZXIvVXBkYXRlXCIsXG4gICAgICAgICAgICBEZWxldGUgPSBcIlB1cmNoYXNlL1B1cmNoYXNlT3JkZXIvRGVsZXRlXCIsXG4gICAgICAgICAgICBSZXRyaWV2ZSA9IFwiUHVyY2hhc2UvUHVyY2hhc2VPcmRlci9SZXRyaWV2ZVwiLFxuICAgICAgICAgICAgTGlzdCA9IFwiUHVyY2hhc2UvUHVyY2hhc2VPcmRlci9MaXN0XCJcbiAgICAgICAgfVxuXG4gICAgICAgIFtcbiAgICAgICAgICAgICdDcmVhdGUnLCBcbiAgICAgICAgICAgICdVcGRhdGUnLCBcbiAgICAgICAgICAgICdEZWxldGUnLCBcbiAgICAgICAgICAgICdSZXRyaWV2ZScsIFxuICAgICAgICAgICAgJ0xpc3QnXG4gICAgICAgIF0uZm9yRWFjaCh4ID0+IHtcbiAgICAgICAgICAgICg8YW55PlB1cmNoYXNlT3JkZXJTZXJ2aWNlKVt4XSA9IGZ1bmN0aW9uIChyLCBzLCBvKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFEuc2VydmljZVJlcXVlc3QoYmFzZVVybCArICcvJyArIHgsIHIsIHMsIG8pO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuIiwiXHJcbm5hbWVzcGFjZSBJbmRvdGFsZW50LlB1cmNoYXNlIHtcclxuICAgIGV4cG9ydCBjbGFzcyBWZW5kb3JDb2x1bW5zIHtcclxuICAgICAgICBzdGF0aWMgY29sdW1uc0tleSA9ICdQdXJjaGFzZS5WZW5kb3InO1xyXG4gICAgfVxyXG59IiwiXHJcbm5hbWVzcGFjZSBJbmRvdGFsZW50LlB1cmNoYXNlIHtcclxuICAgIGV4cG9ydCBjbGFzcyBWZW5kb3JDb250YWN0Q29sdW1ucyB7XHJcbiAgICAgICAgc3RhdGljIGNvbHVtbnNLZXkgPSAnUHVyY2hhc2UuVmVuZG9yQ29udGFjdCc7XHJcbiAgICB9XHJcbn0iLCJuYW1lc3BhY2UgSW5kb3RhbGVudC5QdXJjaGFzZSB7XG4gICAgZXhwb3J0IGludGVyZmFjZSBWZW5kb3JDb250YWN0Rm9ybSB7XG4gICAgICAgIFZlbmRvcklkOiBTZXJlbml0eS5JbnRlZ2VyRWRpdG9yO1xuICAgICAgICBOYW1lOiBTZXJlbml0eS5TdHJpbmdFZGl0b3I7XG4gICAgICAgIERlc2NyaXB0aW9uOiBTZXJlbml0eS5TdHJpbmdFZGl0b3I7XG4gICAgICAgIFN0cmVldDogU2VyZW5pdHkuU3RyaW5nRWRpdG9yO1xuICAgICAgICBDaXR5OiBTZXJlbml0eS5TdHJpbmdFZGl0b3I7XG4gICAgICAgIFN0YXRlOiBTZXJlbml0eS5TdHJpbmdFZGl0b3I7XG4gICAgICAgIFppcENvZGU6IFNlcmVuaXR5LlN0cmluZ0VkaXRvcjtcbiAgICAgICAgUGhvbmU6IFNlcmVuaXR5LlN0cmluZ0VkaXRvcjtcbiAgICAgICAgRW1haWw6IFNlcmVuaXR5LlN0cmluZ0VkaXRvcjtcbiAgICAgICAgSW5zZXJ0RGF0ZTogU2VyZW5pdHkuRGF0ZUVkaXRvcjtcbiAgICAgICAgSW5zZXJ0VXNlcklkOiBTZXJlbml0eS5JbnRlZ2VyRWRpdG9yO1xuICAgICAgICBVcGRhdGVEYXRlOiBTZXJlbml0eS5EYXRlRWRpdG9yO1xuICAgICAgICBVcGRhdGVVc2VySWQ6IFNlcmVuaXR5LkludGVnZXJFZGl0b3I7XG4gICAgICAgIFRlbmFudElkOiBTZXJlbml0eS5JbnRlZ2VyRWRpdG9yO1xuICAgIH1cblxuICAgIGV4cG9ydCBjbGFzcyBWZW5kb3JDb250YWN0Rm9ybSBleHRlbmRzIFNlcmVuaXR5LlByZWZpeGVkQ29udGV4dCB7XG4gICAgICAgIHN0YXRpYyBmb3JtS2V5ID0gJ1B1cmNoYXNlLlZlbmRvckNvbnRhY3QnO1xuICAgICAgICBwcml2YXRlIHN0YXRpYyBpbml0OiBib29sZWFuO1xuXG4gICAgICAgIGNvbnN0cnVjdG9yKHByZWZpeDogc3RyaW5nKSB7XG4gICAgICAgICAgICBzdXBlcihwcmVmaXgpO1xuXG4gICAgICAgICAgICBpZiAoIVZlbmRvckNvbnRhY3RGb3JtLmluaXQpICB7XG4gICAgICAgICAgICAgICAgVmVuZG9yQ29udGFjdEZvcm0uaW5pdCA9IHRydWU7XG5cbiAgICAgICAgICAgICAgICB2YXIgcyA9IFNlcmVuaXR5O1xuICAgICAgICAgICAgICAgIHZhciB3MCA9IHMuSW50ZWdlckVkaXRvcjtcbiAgICAgICAgICAgICAgICB2YXIgdzEgPSBzLlN0cmluZ0VkaXRvcjtcbiAgICAgICAgICAgICAgICB2YXIgdzIgPSBzLkRhdGVFZGl0b3I7XG5cbiAgICAgICAgICAgICAgICBRLmluaXRGb3JtVHlwZShWZW5kb3JDb250YWN0Rm9ybSwgW1xuICAgICAgICAgICAgICAgICAgICAnVmVuZG9ySWQnLCB3MCxcbiAgICAgICAgICAgICAgICAgICAgJ05hbWUnLCB3MSxcbiAgICAgICAgICAgICAgICAgICAgJ0Rlc2NyaXB0aW9uJywgdzEsXG4gICAgICAgICAgICAgICAgICAgICdTdHJlZXQnLCB3MSxcbiAgICAgICAgICAgICAgICAgICAgJ0NpdHknLCB3MSxcbiAgICAgICAgICAgICAgICAgICAgJ1N0YXRlJywgdzEsXG4gICAgICAgICAgICAgICAgICAgICdaaXBDb2RlJywgdzEsXG4gICAgICAgICAgICAgICAgICAgICdQaG9uZScsIHcxLFxuICAgICAgICAgICAgICAgICAgICAnRW1haWwnLCB3MSxcbiAgICAgICAgICAgICAgICAgICAgJ0luc2VydERhdGUnLCB3MixcbiAgICAgICAgICAgICAgICAgICAgJ0luc2VydFVzZXJJZCcsIHcwLFxuICAgICAgICAgICAgICAgICAgICAnVXBkYXRlRGF0ZScsIHcyLFxuICAgICAgICAgICAgICAgICAgICAnVXBkYXRlVXNlcklkJywgdzAsXG4gICAgICAgICAgICAgICAgICAgICdUZW5hbnRJZCcsIHcwXG4gICAgICAgICAgICAgICAgXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJuYW1lc3BhY2UgSW5kb3RhbGVudC5QdXJjaGFzZSB7XG4gICAgZXhwb3J0IGludGVyZmFjZSBWZW5kb3JDb250YWN0Um93IHtcbiAgICAgICAgSWQ/OiBudW1iZXI7XG4gICAgICAgIFZlbmRvcklkPzogbnVtYmVyO1xuICAgICAgICBOYW1lPzogc3RyaW5nO1xuICAgICAgICBEZXNjcmlwdGlvbj86IHN0cmluZztcbiAgICAgICAgU3RyZWV0Pzogc3RyaW5nO1xuICAgICAgICBDaXR5Pzogc3RyaW5nO1xuICAgICAgICBTdGF0ZT86IHN0cmluZztcbiAgICAgICAgWmlwQ29kZT86IHN0cmluZztcbiAgICAgICAgUGhvbmU/OiBzdHJpbmc7XG4gICAgICAgIEVtYWlsPzogc3RyaW5nO1xuICAgICAgICBJbnNlcnREYXRlPzogc3RyaW5nO1xuICAgICAgICBJbnNlcnRVc2VySWQ/OiBudW1iZXI7XG4gICAgICAgIFVwZGF0ZURhdGU/OiBzdHJpbmc7XG4gICAgICAgIFVwZGF0ZVVzZXJJZD86IG51bWJlcjtcbiAgICAgICAgVGVuYW50SWQ/OiBudW1iZXI7XG4gICAgfVxuXG4gICAgZXhwb3J0IG5hbWVzcGFjZSBWZW5kb3JDb250YWN0Um93IHtcbiAgICAgICAgZXhwb3J0IGNvbnN0IGlkUHJvcGVydHkgPSAnSWQnO1xuICAgICAgICBleHBvcnQgY29uc3QgbmFtZVByb3BlcnR5ID0gJ05hbWUnO1xuICAgICAgICBleHBvcnQgY29uc3QgbG9jYWxUZXh0UHJlZml4ID0gJ1B1cmNoYXNlLlZlbmRvckNvbnRhY3QnO1xuICAgICAgICBleHBvcnQgY29uc3QgZGVsZXRlUGVybWlzc2lvbiA9ICdBZG1pbmlzdHJhdGlvbjpHZW5lcmFsJztcbiAgICAgICAgZXhwb3J0IGNvbnN0IGluc2VydFBlcm1pc3Npb24gPSAnQWRtaW5pc3RyYXRpb246R2VuZXJhbCc7XG4gICAgICAgIGV4cG9ydCBjb25zdCByZWFkUGVybWlzc2lvbiA9ICdBZG1pbmlzdHJhdGlvbjpHZW5lcmFsJztcbiAgICAgICAgZXhwb3J0IGNvbnN0IHVwZGF0ZVBlcm1pc3Npb24gPSAnQWRtaW5pc3RyYXRpb246R2VuZXJhbCc7XG5cbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgY29uc3QgZW51bSBGaWVsZHMge1xuICAgICAgICAgICAgSWQgPSBcIklkXCIsXG4gICAgICAgICAgICBWZW5kb3JJZCA9IFwiVmVuZG9ySWRcIixcbiAgICAgICAgICAgIE5hbWUgPSBcIk5hbWVcIixcbiAgICAgICAgICAgIERlc2NyaXB0aW9uID0gXCJEZXNjcmlwdGlvblwiLFxuICAgICAgICAgICAgU3RyZWV0ID0gXCJTdHJlZXRcIixcbiAgICAgICAgICAgIENpdHkgPSBcIkNpdHlcIixcbiAgICAgICAgICAgIFN0YXRlID0gXCJTdGF0ZVwiLFxuICAgICAgICAgICAgWmlwQ29kZSA9IFwiWmlwQ29kZVwiLFxuICAgICAgICAgICAgUGhvbmUgPSBcIlBob25lXCIsXG4gICAgICAgICAgICBFbWFpbCA9IFwiRW1haWxcIixcbiAgICAgICAgICAgIEluc2VydERhdGUgPSBcIkluc2VydERhdGVcIixcbiAgICAgICAgICAgIEluc2VydFVzZXJJZCA9IFwiSW5zZXJ0VXNlcklkXCIsXG4gICAgICAgICAgICBVcGRhdGVEYXRlID0gXCJVcGRhdGVEYXRlXCIsXG4gICAgICAgICAgICBVcGRhdGVVc2VySWQgPSBcIlVwZGF0ZVVzZXJJZFwiLFxuICAgICAgICAgICAgVGVuYW50SWQgPSBcIlRlbmFudElkXCJcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsIm5hbWVzcGFjZSBJbmRvdGFsZW50LlB1cmNoYXNlIHtcbiAgICBleHBvcnQgbmFtZXNwYWNlIFZlbmRvckNvbnRhY3RTZXJ2aWNlIHtcbiAgICAgICAgZXhwb3J0IGNvbnN0IGJhc2VVcmwgPSAnUHVyY2hhc2UvVmVuZG9yQ29udGFjdCc7XG5cbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gQ3JlYXRlKHJlcXVlc3Q6IFNlcmVuaXR5LlNhdmVSZXF1ZXN0PFZlbmRvckNvbnRhY3RSb3c+LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5LlNhdmVSZXNwb25zZSkgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBVcGRhdGUocmVxdWVzdDogU2VyZW5pdHkuU2F2ZVJlcXVlc3Q8VmVuZG9yQ29udGFjdFJvdz4sIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuU2F2ZVJlc3BvbnNlKSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIERlbGV0ZShyZXF1ZXN0OiBTZXJlbml0eS5EZWxldGVSZXF1ZXN0LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5LkRlbGV0ZVJlc3BvbnNlKSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIFJldHJpZXZlKHJlcXVlc3Q6IFNlcmVuaXR5LlJldHJpZXZlUmVxdWVzdCwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5SZXRyaWV2ZVJlc3BvbnNlPFZlbmRvckNvbnRhY3RSb3c+KSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIExpc3QocmVxdWVzdDogU2VyZW5pdHkuTGlzdFJlcXVlc3QsIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuTGlzdFJlc3BvbnNlPFZlbmRvckNvbnRhY3RSb3c+KSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XG5cbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgY29uc3QgZW51bSBNZXRob2RzIHtcbiAgICAgICAgICAgIENyZWF0ZSA9IFwiUHVyY2hhc2UvVmVuZG9yQ29udGFjdC9DcmVhdGVcIixcbiAgICAgICAgICAgIFVwZGF0ZSA9IFwiUHVyY2hhc2UvVmVuZG9yQ29udGFjdC9VcGRhdGVcIixcbiAgICAgICAgICAgIERlbGV0ZSA9IFwiUHVyY2hhc2UvVmVuZG9yQ29udGFjdC9EZWxldGVcIixcbiAgICAgICAgICAgIFJldHJpZXZlID0gXCJQdXJjaGFzZS9WZW5kb3JDb250YWN0L1JldHJpZXZlXCIsXG4gICAgICAgICAgICBMaXN0ID0gXCJQdXJjaGFzZS9WZW5kb3JDb250YWN0L0xpc3RcIlxuICAgICAgICB9XG5cbiAgICAgICAgW1xuICAgICAgICAgICAgJ0NyZWF0ZScsIFxuICAgICAgICAgICAgJ1VwZGF0ZScsIFxuICAgICAgICAgICAgJ0RlbGV0ZScsIFxuICAgICAgICAgICAgJ1JldHJpZXZlJywgXG4gICAgICAgICAgICAnTGlzdCdcbiAgICAgICAgXS5mb3JFYWNoKHggPT4ge1xuICAgICAgICAgICAgKDxhbnk+VmVuZG9yQ29udGFjdFNlcnZpY2UpW3hdID0gZnVuY3Rpb24gKHIsIHMsIG8pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gUS5zZXJ2aWNlUmVxdWVzdChiYXNlVXJsICsgJy8nICsgeCwgciwgcywgbyk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9KTtcbiAgICB9XG59XG4iLCJuYW1lc3BhY2UgSW5kb3RhbGVudC5QdXJjaGFzZSB7XG4gICAgZXhwb3J0IGludGVyZmFjZSBWZW5kb3JGb3JtIHtcbiAgICAgICAgTmFtZTogU2VyZW5pdHkuU3RyaW5nRWRpdG9yO1xuICAgICAgICBEZXNjcmlwdGlvbjogU2VyZW5pdHkuU3RyaW5nRWRpdG9yO1xuICAgICAgICBTdHJlZXQ6IFNlcmVuaXR5LlN0cmluZ0VkaXRvcjtcbiAgICAgICAgQ2l0eTogU2VyZW5pdHkuU3RyaW5nRWRpdG9yO1xuICAgICAgICBTdGF0ZTogU2VyZW5pdHkuU3RyaW5nRWRpdG9yO1xuICAgICAgICBaaXBDb2RlOiBTZXJlbml0eS5TdHJpbmdFZGl0b3I7XG4gICAgICAgIFBob25lOiBTZXJlbml0eS5TdHJpbmdFZGl0b3I7XG4gICAgICAgIEVtYWlsOiBTZXJlbml0eS5TdHJpbmdFZGl0b3I7XG4gICAgICAgIEluc2VydERhdGU6IFNlcmVuaXR5LkRhdGVFZGl0b3I7XG4gICAgICAgIEluc2VydFVzZXJJZDogU2VyZW5pdHkuSW50ZWdlckVkaXRvcjtcbiAgICAgICAgVXBkYXRlRGF0ZTogU2VyZW5pdHkuRGF0ZUVkaXRvcjtcbiAgICAgICAgVXBkYXRlVXNlcklkOiBTZXJlbml0eS5JbnRlZ2VyRWRpdG9yO1xuICAgICAgICBUZW5hbnRJZDogU2VyZW5pdHkuSW50ZWdlckVkaXRvcjtcbiAgICB9XG5cbiAgICBleHBvcnQgY2xhc3MgVmVuZG9yRm9ybSBleHRlbmRzIFNlcmVuaXR5LlByZWZpeGVkQ29udGV4dCB7XG4gICAgICAgIHN0YXRpYyBmb3JtS2V5ID0gJ1B1cmNoYXNlLlZlbmRvcic7XG4gICAgICAgIHByaXZhdGUgc3RhdGljIGluaXQ6IGJvb2xlYW47XG5cbiAgICAgICAgY29uc3RydWN0b3IocHJlZml4OiBzdHJpbmcpIHtcbiAgICAgICAgICAgIHN1cGVyKHByZWZpeCk7XG5cbiAgICAgICAgICAgIGlmICghVmVuZG9yRm9ybS5pbml0KSAge1xuICAgICAgICAgICAgICAgIFZlbmRvckZvcm0uaW5pdCA9IHRydWU7XG5cbiAgICAgICAgICAgICAgICB2YXIgcyA9IFNlcmVuaXR5O1xuICAgICAgICAgICAgICAgIHZhciB3MCA9IHMuU3RyaW5nRWRpdG9yO1xuICAgICAgICAgICAgICAgIHZhciB3MSA9IHMuRGF0ZUVkaXRvcjtcbiAgICAgICAgICAgICAgICB2YXIgdzIgPSBzLkludGVnZXJFZGl0b3I7XG5cbiAgICAgICAgICAgICAgICBRLmluaXRGb3JtVHlwZShWZW5kb3JGb3JtLCBbXG4gICAgICAgICAgICAgICAgICAgICdOYW1lJywgdzAsXG4gICAgICAgICAgICAgICAgICAgICdEZXNjcmlwdGlvbicsIHcwLFxuICAgICAgICAgICAgICAgICAgICAnU3RyZWV0JywgdzAsXG4gICAgICAgICAgICAgICAgICAgICdDaXR5JywgdzAsXG4gICAgICAgICAgICAgICAgICAgICdTdGF0ZScsIHcwLFxuICAgICAgICAgICAgICAgICAgICAnWmlwQ29kZScsIHcwLFxuICAgICAgICAgICAgICAgICAgICAnUGhvbmUnLCB3MCxcbiAgICAgICAgICAgICAgICAgICAgJ0VtYWlsJywgdzAsXG4gICAgICAgICAgICAgICAgICAgICdJbnNlcnREYXRlJywgdzEsXG4gICAgICAgICAgICAgICAgICAgICdJbnNlcnRVc2VySWQnLCB3MixcbiAgICAgICAgICAgICAgICAgICAgJ1VwZGF0ZURhdGUnLCB3MSxcbiAgICAgICAgICAgICAgICAgICAgJ1VwZGF0ZVVzZXJJZCcsIHcyLFxuICAgICAgICAgICAgICAgICAgICAnVGVuYW50SWQnLCB3MlxuICAgICAgICAgICAgICAgIF0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuIiwibmFtZXNwYWNlIEluZG90YWxlbnQuUHVyY2hhc2Uge1xuICAgIGV4cG9ydCBpbnRlcmZhY2UgVmVuZG9yUm93IHtcbiAgICAgICAgSWQ/OiBudW1iZXI7XG4gICAgICAgIE5hbWU/OiBzdHJpbmc7XG4gICAgICAgIERlc2NyaXB0aW9uPzogc3RyaW5nO1xuICAgICAgICBTdHJlZXQ/OiBzdHJpbmc7XG4gICAgICAgIENpdHk/OiBzdHJpbmc7XG4gICAgICAgIFN0YXRlPzogc3RyaW5nO1xuICAgICAgICBaaXBDb2RlPzogc3RyaW5nO1xuICAgICAgICBQaG9uZT86IHN0cmluZztcbiAgICAgICAgRW1haWw/OiBzdHJpbmc7XG4gICAgICAgIEluc2VydERhdGU/OiBzdHJpbmc7XG4gICAgICAgIEluc2VydFVzZXJJZD86IG51bWJlcjtcbiAgICAgICAgVXBkYXRlRGF0ZT86IHN0cmluZztcbiAgICAgICAgVXBkYXRlVXNlcklkPzogbnVtYmVyO1xuICAgICAgICBUZW5hbnRJZD86IG51bWJlcjtcbiAgICB9XG5cbiAgICBleHBvcnQgbmFtZXNwYWNlIFZlbmRvclJvdyB7XG4gICAgICAgIGV4cG9ydCBjb25zdCBpZFByb3BlcnR5ID0gJ0lkJztcbiAgICAgICAgZXhwb3J0IGNvbnN0IG5hbWVQcm9wZXJ0eSA9ICdOYW1lJztcbiAgICAgICAgZXhwb3J0IGNvbnN0IGxvY2FsVGV4dFByZWZpeCA9ICdQdXJjaGFzZS5WZW5kb3InO1xuICAgICAgICBleHBvcnQgY29uc3QgZGVsZXRlUGVybWlzc2lvbiA9ICdBZG1pbmlzdHJhdGlvbjpHZW5lcmFsJztcbiAgICAgICAgZXhwb3J0IGNvbnN0IGluc2VydFBlcm1pc3Npb24gPSAnQWRtaW5pc3RyYXRpb246R2VuZXJhbCc7XG4gICAgICAgIGV4cG9ydCBjb25zdCByZWFkUGVybWlzc2lvbiA9ICdBZG1pbmlzdHJhdGlvbjpHZW5lcmFsJztcbiAgICAgICAgZXhwb3J0IGNvbnN0IHVwZGF0ZVBlcm1pc3Npb24gPSAnQWRtaW5pc3RyYXRpb246R2VuZXJhbCc7XG5cbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgY29uc3QgZW51bSBGaWVsZHMge1xuICAgICAgICAgICAgSWQgPSBcIklkXCIsXG4gICAgICAgICAgICBOYW1lID0gXCJOYW1lXCIsXG4gICAgICAgICAgICBEZXNjcmlwdGlvbiA9IFwiRGVzY3JpcHRpb25cIixcbiAgICAgICAgICAgIFN0cmVldCA9IFwiU3RyZWV0XCIsXG4gICAgICAgICAgICBDaXR5ID0gXCJDaXR5XCIsXG4gICAgICAgICAgICBTdGF0ZSA9IFwiU3RhdGVcIixcbiAgICAgICAgICAgIFppcENvZGUgPSBcIlppcENvZGVcIixcbiAgICAgICAgICAgIFBob25lID0gXCJQaG9uZVwiLFxuICAgICAgICAgICAgRW1haWwgPSBcIkVtYWlsXCIsXG4gICAgICAgICAgICBJbnNlcnREYXRlID0gXCJJbnNlcnREYXRlXCIsXG4gICAgICAgICAgICBJbnNlcnRVc2VySWQgPSBcIkluc2VydFVzZXJJZFwiLFxuICAgICAgICAgICAgVXBkYXRlRGF0ZSA9IFwiVXBkYXRlRGF0ZVwiLFxuICAgICAgICAgICAgVXBkYXRlVXNlcklkID0gXCJVcGRhdGVVc2VySWRcIixcbiAgICAgICAgICAgIFRlbmFudElkID0gXCJUZW5hbnRJZFwiXG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJuYW1lc3BhY2UgSW5kb3RhbGVudC5QdXJjaGFzZSB7XG4gICAgZXhwb3J0IG5hbWVzcGFjZSBWZW5kb3JTZXJ2aWNlIHtcbiAgICAgICAgZXhwb3J0IGNvbnN0IGJhc2VVcmwgPSAnUHVyY2hhc2UvVmVuZG9yJztcblxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBDcmVhdGUocmVxdWVzdDogU2VyZW5pdHkuU2F2ZVJlcXVlc3Q8VmVuZG9yUm93Piwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5TYXZlUmVzcG9uc2UpID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gVXBkYXRlKHJlcXVlc3Q6IFNlcmVuaXR5LlNhdmVSZXF1ZXN0PFZlbmRvclJvdz4sIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuU2F2ZVJlc3BvbnNlKSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIERlbGV0ZShyZXF1ZXN0OiBTZXJlbml0eS5EZWxldGVSZXF1ZXN0LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5LkRlbGV0ZVJlc3BvbnNlKSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIFJldHJpZXZlKHJlcXVlc3Q6IFNlcmVuaXR5LlJldHJpZXZlUmVxdWVzdCwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5SZXRyaWV2ZVJlc3BvbnNlPFZlbmRvclJvdz4pID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gTGlzdChyZXF1ZXN0OiBTZXJlbml0eS5MaXN0UmVxdWVzdCwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5MaXN0UmVzcG9uc2U8VmVuZG9yUm93PikgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xuXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGNvbnN0IGVudW0gTWV0aG9kcyB7XG4gICAgICAgICAgICBDcmVhdGUgPSBcIlB1cmNoYXNlL1ZlbmRvci9DcmVhdGVcIixcbiAgICAgICAgICAgIFVwZGF0ZSA9IFwiUHVyY2hhc2UvVmVuZG9yL1VwZGF0ZVwiLFxuICAgICAgICAgICAgRGVsZXRlID0gXCJQdXJjaGFzZS9WZW5kb3IvRGVsZXRlXCIsXG4gICAgICAgICAgICBSZXRyaWV2ZSA9IFwiUHVyY2hhc2UvVmVuZG9yL1JldHJpZXZlXCIsXG4gICAgICAgICAgICBMaXN0ID0gXCJQdXJjaGFzZS9WZW5kb3IvTGlzdFwiXG4gICAgICAgIH1cblxuICAgICAgICBbXG4gICAgICAgICAgICAnQ3JlYXRlJywgXG4gICAgICAgICAgICAnVXBkYXRlJywgXG4gICAgICAgICAgICAnRGVsZXRlJywgXG4gICAgICAgICAgICAnUmV0cmlldmUnLCBcbiAgICAgICAgICAgICdMaXN0J1xuICAgICAgICBdLmZvckVhY2goeCA9PiB7XG4gICAgICAgICAgICAoPGFueT5WZW5kb3JTZXJ2aWNlKVt4XSA9IGZ1bmN0aW9uIChyLCBzLCBvKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFEuc2VydmljZVJlcXVlc3QoYmFzZVVybCArICcvJyArIHgsIHIsIHMsIG8pO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuIiwiXHJcbm5hbWVzcGFjZSBJbmRvdGFsZW50LlNhbGVzIHtcclxuICAgIGV4cG9ydCBjbGFzcyBDdXN0b21lckNvbHVtbnMge1xyXG4gICAgICAgIHN0YXRpYyBjb2x1bW5zS2V5ID0gJ1NhbGVzLkN1c3RvbWVyJztcclxuICAgIH1cclxufSIsIlxyXG5uYW1lc3BhY2UgSW5kb3RhbGVudC5TYWxlcyB7XHJcbiAgICBleHBvcnQgY2xhc3MgQ3VzdG9tZXJDb250YWN0Q29sdW1ucyB7XHJcbiAgICAgICAgc3RhdGljIGNvbHVtbnNLZXkgPSAnU2FsZXMuQ3VzdG9tZXJDb250YWN0JztcclxuICAgIH1cclxufSIsIm5hbWVzcGFjZSBJbmRvdGFsZW50LlNhbGVzIHtcbiAgICBleHBvcnQgaW50ZXJmYWNlIEN1c3RvbWVyQ29udGFjdEZvcm0ge1xuICAgICAgICBDdXN0b21lcklkOiBTZXJlbml0eS5JbnRlZ2VyRWRpdG9yO1xuICAgICAgICBOYW1lOiBTZXJlbml0eS5TdHJpbmdFZGl0b3I7XG4gICAgICAgIERlc2NyaXB0aW9uOiBTZXJlbml0eS5TdHJpbmdFZGl0b3I7XG4gICAgICAgIFN0cmVldDogU2VyZW5pdHkuU3RyaW5nRWRpdG9yO1xuICAgICAgICBDaXR5OiBTZXJlbml0eS5TdHJpbmdFZGl0b3I7XG4gICAgICAgIFN0YXRlOiBTZXJlbml0eS5TdHJpbmdFZGl0b3I7XG4gICAgICAgIFppcENvZGU6IFNlcmVuaXR5LlN0cmluZ0VkaXRvcjtcbiAgICAgICAgUGhvbmU6IFNlcmVuaXR5LlN0cmluZ0VkaXRvcjtcbiAgICAgICAgRW1haWw6IFNlcmVuaXR5LlN0cmluZ0VkaXRvcjtcbiAgICAgICAgSW5zZXJ0RGF0ZTogU2VyZW5pdHkuRGF0ZUVkaXRvcjtcbiAgICAgICAgSW5zZXJ0VXNlcklkOiBTZXJlbml0eS5JbnRlZ2VyRWRpdG9yO1xuICAgICAgICBVcGRhdGVEYXRlOiBTZXJlbml0eS5EYXRlRWRpdG9yO1xuICAgICAgICBVcGRhdGVVc2VySWQ6IFNlcmVuaXR5LkludGVnZXJFZGl0b3I7XG4gICAgICAgIFRlbmFudElkOiBTZXJlbml0eS5JbnRlZ2VyRWRpdG9yO1xuICAgIH1cblxuICAgIGV4cG9ydCBjbGFzcyBDdXN0b21lckNvbnRhY3RGb3JtIGV4dGVuZHMgU2VyZW5pdHkuUHJlZml4ZWRDb250ZXh0IHtcbiAgICAgICAgc3RhdGljIGZvcm1LZXkgPSAnU2FsZXMuQ3VzdG9tZXJDb250YWN0JztcbiAgICAgICAgcHJpdmF0ZSBzdGF0aWMgaW5pdDogYm9vbGVhbjtcblxuICAgICAgICBjb25zdHJ1Y3RvcihwcmVmaXg6IHN0cmluZykge1xuICAgICAgICAgICAgc3VwZXIocHJlZml4KTtcblxuICAgICAgICAgICAgaWYgKCFDdXN0b21lckNvbnRhY3RGb3JtLmluaXQpICB7XG4gICAgICAgICAgICAgICAgQ3VzdG9tZXJDb250YWN0Rm9ybS5pbml0ID0gdHJ1ZTtcblxuICAgICAgICAgICAgICAgIHZhciBzID0gU2VyZW5pdHk7XG4gICAgICAgICAgICAgICAgdmFyIHcwID0gcy5JbnRlZ2VyRWRpdG9yO1xuICAgICAgICAgICAgICAgIHZhciB3MSA9IHMuU3RyaW5nRWRpdG9yO1xuICAgICAgICAgICAgICAgIHZhciB3MiA9IHMuRGF0ZUVkaXRvcjtcblxuICAgICAgICAgICAgICAgIFEuaW5pdEZvcm1UeXBlKEN1c3RvbWVyQ29udGFjdEZvcm0sIFtcbiAgICAgICAgICAgICAgICAgICAgJ0N1c3RvbWVySWQnLCB3MCxcbiAgICAgICAgICAgICAgICAgICAgJ05hbWUnLCB3MSxcbiAgICAgICAgICAgICAgICAgICAgJ0Rlc2NyaXB0aW9uJywgdzEsXG4gICAgICAgICAgICAgICAgICAgICdTdHJlZXQnLCB3MSxcbiAgICAgICAgICAgICAgICAgICAgJ0NpdHknLCB3MSxcbiAgICAgICAgICAgICAgICAgICAgJ1N0YXRlJywgdzEsXG4gICAgICAgICAgICAgICAgICAgICdaaXBDb2RlJywgdzEsXG4gICAgICAgICAgICAgICAgICAgICdQaG9uZScsIHcxLFxuICAgICAgICAgICAgICAgICAgICAnRW1haWwnLCB3MSxcbiAgICAgICAgICAgICAgICAgICAgJ0luc2VydERhdGUnLCB3MixcbiAgICAgICAgICAgICAgICAgICAgJ0luc2VydFVzZXJJZCcsIHcwLFxuICAgICAgICAgICAgICAgICAgICAnVXBkYXRlRGF0ZScsIHcyLFxuICAgICAgICAgICAgICAgICAgICAnVXBkYXRlVXNlcklkJywgdzAsXG4gICAgICAgICAgICAgICAgICAgICdUZW5hbnRJZCcsIHcwXG4gICAgICAgICAgICAgICAgXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJuYW1lc3BhY2UgSW5kb3RhbGVudC5TYWxlcyB7XG4gICAgZXhwb3J0IGludGVyZmFjZSBDdXN0b21lckNvbnRhY3RSb3cge1xuICAgICAgICBJZD86IG51bWJlcjtcbiAgICAgICAgQ3VzdG9tZXJJZD86IG51bWJlcjtcbiAgICAgICAgTmFtZT86IHN0cmluZztcbiAgICAgICAgRGVzY3JpcHRpb24/OiBzdHJpbmc7XG4gICAgICAgIFN0cmVldD86IHN0cmluZztcbiAgICAgICAgQ2l0eT86IHN0cmluZztcbiAgICAgICAgU3RhdGU/OiBzdHJpbmc7XG4gICAgICAgIFppcENvZGU/OiBzdHJpbmc7XG4gICAgICAgIFBob25lPzogc3RyaW5nO1xuICAgICAgICBFbWFpbD86IHN0cmluZztcbiAgICAgICAgVGVuYW50SWQ/OiBudW1iZXI7XG4gICAgICAgIFRlbmFudE5hbWU/OiBzdHJpbmc7XG4gICAgICAgIEluc2VydFVzZXJJZD86IG51bWJlcjtcbiAgICAgICAgSW5zZXJ0RGF0ZT86IHN0cmluZztcbiAgICAgICAgVXBkYXRlVXNlcklkPzogbnVtYmVyO1xuICAgICAgICBVcGRhdGVEYXRlPzogc3RyaW5nO1xuICAgIH1cblxuICAgIGV4cG9ydCBuYW1lc3BhY2UgQ3VzdG9tZXJDb250YWN0Um93IHtcbiAgICAgICAgZXhwb3J0IGNvbnN0IGlkUHJvcGVydHkgPSAnSWQnO1xuICAgICAgICBleHBvcnQgY29uc3QgbmFtZVByb3BlcnR5ID0gJ05hbWUnO1xuICAgICAgICBleHBvcnQgY29uc3QgbG9jYWxUZXh0UHJlZml4ID0gJ1NhbGVzLkN1c3RvbWVyQ29udGFjdCc7XG4gICAgICAgIGV4cG9ydCBjb25zdCBsb29rdXBLZXkgPSAnU2FsZXMuQ3VzdG9tZXJDb250YWN0JztcblxuICAgICAgICBleHBvcnQgZnVuY3Rpb24gZ2V0TG9va3VwKCk6IFEuTG9va3VwPEN1c3RvbWVyQ29udGFjdFJvdz4ge1xuICAgICAgICAgICAgcmV0dXJuIFEuZ2V0TG9va3VwPEN1c3RvbWVyQ29udGFjdFJvdz4oJ1NhbGVzLkN1c3RvbWVyQ29udGFjdCcpO1xuICAgICAgICB9XG4gICAgICAgIGV4cG9ydCBjb25zdCBkZWxldGVQZXJtaXNzaW9uID0gJ1NhbGVzOkN1c3RvbWVyJztcbiAgICAgICAgZXhwb3J0IGNvbnN0IGluc2VydFBlcm1pc3Npb24gPSAnU2FsZXM6Q3VzdG9tZXInO1xuICAgICAgICBleHBvcnQgY29uc3QgcmVhZFBlcm1pc3Npb24gPSAnU2FsZXM6Q3VzdG9tZXInO1xuICAgICAgICBleHBvcnQgY29uc3QgdXBkYXRlUGVybWlzc2lvbiA9ICdTYWxlczpDdXN0b21lcic7XG5cbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgY29uc3QgZW51bSBGaWVsZHMge1xuICAgICAgICAgICAgSWQgPSBcIklkXCIsXG4gICAgICAgICAgICBDdXN0b21lcklkID0gXCJDdXN0b21lcklkXCIsXG4gICAgICAgICAgICBOYW1lID0gXCJOYW1lXCIsXG4gICAgICAgICAgICBEZXNjcmlwdGlvbiA9IFwiRGVzY3JpcHRpb25cIixcbiAgICAgICAgICAgIFN0cmVldCA9IFwiU3RyZWV0XCIsXG4gICAgICAgICAgICBDaXR5ID0gXCJDaXR5XCIsXG4gICAgICAgICAgICBTdGF0ZSA9IFwiU3RhdGVcIixcbiAgICAgICAgICAgIFppcENvZGUgPSBcIlppcENvZGVcIixcbiAgICAgICAgICAgIFBob25lID0gXCJQaG9uZVwiLFxuICAgICAgICAgICAgRW1haWwgPSBcIkVtYWlsXCIsXG4gICAgICAgICAgICBUZW5hbnRJZCA9IFwiVGVuYW50SWRcIixcbiAgICAgICAgICAgIFRlbmFudE5hbWUgPSBcIlRlbmFudE5hbWVcIixcbiAgICAgICAgICAgIEluc2VydFVzZXJJZCA9IFwiSW5zZXJ0VXNlcklkXCIsXG4gICAgICAgICAgICBJbnNlcnREYXRlID0gXCJJbnNlcnREYXRlXCIsXG4gICAgICAgICAgICBVcGRhdGVVc2VySWQgPSBcIlVwZGF0ZVVzZXJJZFwiLFxuICAgICAgICAgICAgVXBkYXRlRGF0ZSA9IFwiVXBkYXRlRGF0ZVwiXG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJuYW1lc3BhY2UgSW5kb3RhbGVudC5TYWxlcyB7XG4gICAgZXhwb3J0IG5hbWVzcGFjZSBDdXN0b21lckNvbnRhY3RTZXJ2aWNlIHtcbiAgICAgICAgZXhwb3J0IGNvbnN0IGJhc2VVcmwgPSAnU2FsZXMvQ3VzdG9tZXJDb250YWN0JztcblxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBDcmVhdGUocmVxdWVzdDogU2VyZW5pdHkuU2F2ZVJlcXVlc3Q8Q3VzdG9tZXJDb250YWN0Um93Piwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5TYXZlUmVzcG9uc2UpID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gVXBkYXRlKHJlcXVlc3Q6IFNlcmVuaXR5LlNhdmVSZXF1ZXN0PEN1c3RvbWVyQ29udGFjdFJvdz4sIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuU2F2ZVJlc3BvbnNlKSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIERlbGV0ZShyZXF1ZXN0OiBTZXJlbml0eS5EZWxldGVSZXF1ZXN0LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5LkRlbGV0ZVJlc3BvbnNlKSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIFJldHJpZXZlKHJlcXVlc3Q6IFNlcmVuaXR5LlJldHJpZXZlUmVxdWVzdCwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5SZXRyaWV2ZVJlc3BvbnNlPEN1c3RvbWVyQ29udGFjdFJvdz4pID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gTGlzdChyZXF1ZXN0OiBTZXJlbml0eS5MaXN0UmVxdWVzdCwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5MaXN0UmVzcG9uc2U8Q3VzdG9tZXJDb250YWN0Um93PikgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xuXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGNvbnN0IGVudW0gTWV0aG9kcyB7XG4gICAgICAgICAgICBDcmVhdGUgPSBcIlNhbGVzL0N1c3RvbWVyQ29udGFjdC9DcmVhdGVcIixcbiAgICAgICAgICAgIFVwZGF0ZSA9IFwiU2FsZXMvQ3VzdG9tZXJDb250YWN0L1VwZGF0ZVwiLFxuICAgICAgICAgICAgRGVsZXRlID0gXCJTYWxlcy9DdXN0b21lckNvbnRhY3QvRGVsZXRlXCIsXG4gICAgICAgICAgICBSZXRyaWV2ZSA9IFwiU2FsZXMvQ3VzdG9tZXJDb250YWN0L1JldHJpZXZlXCIsXG4gICAgICAgICAgICBMaXN0ID0gXCJTYWxlcy9DdXN0b21lckNvbnRhY3QvTGlzdFwiXG4gICAgICAgIH1cblxuICAgICAgICBbXG4gICAgICAgICAgICAnQ3JlYXRlJywgXG4gICAgICAgICAgICAnVXBkYXRlJywgXG4gICAgICAgICAgICAnRGVsZXRlJywgXG4gICAgICAgICAgICAnUmV0cmlldmUnLCBcbiAgICAgICAgICAgICdMaXN0J1xuICAgICAgICBdLmZvckVhY2goeCA9PiB7XG4gICAgICAgICAgICAoPGFueT5DdXN0b21lckNvbnRhY3RTZXJ2aWNlKVt4XSA9IGZ1bmN0aW9uIChyLCBzLCBvKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFEuc2VydmljZVJlcXVlc3QoYmFzZVVybCArICcvJyArIHgsIHIsIHMsIG8pO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuIiwibmFtZXNwYWNlIEluZG90YWxlbnQuU2FsZXMge1xuICAgIGV4cG9ydCBpbnRlcmZhY2UgQ3VzdG9tZXJGb3JtIHtcbiAgICAgICAgTmFtZTogU2VyZW5pdHkuU3RyaW5nRWRpdG9yO1xuICAgICAgICBEZXNjcmlwdGlvbjogU2VyZW5pdHkuVGV4dEFyZWFFZGl0b3I7XG4gICAgICAgIFN0cmVldDogU2VyZW5pdHkuU3RyaW5nRWRpdG9yO1xuICAgICAgICBDaXR5OiBTZXJlbml0eS5TdHJpbmdFZGl0b3I7XG4gICAgICAgIFN0YXRlOiBTZXJlbml0eS5TdHJpbmdFZGl0b3I7XG4gICAgICAgIFppcENvZGU6IFNlcmVuaXR5LlN0cmluZ0VkaXRvcjtcbiAgICAgICAgUGhvbmU6IFNlcmVuaXR5LlN0cmluZ0VkaXRvcjtcbiAgICAgICAgRW1haWw6IFNlcmVuaXR5LlN0cmluZ0VkaXRvcjtcbiAgICAgICAgQ29udGFjdExpc3Q6IEN1c3RvbWVyQ29udGFjdEVkaXRvcjtcbiAgICB9XG5cbiAgICBleHBvcnQgY2xhc3MgQ3VzdG9tZXJGb3JtIGV4dGVuZHMgU2VyZW5pdHkuUHJlZml4ZWRDb250ZXh0IHtcbiAgICAgICAgc3RhdGljIGZvcm1LZXkgPSAnU2FsZXMuQ3VzdG9tZXInO1xuICAgICAgICBwcml2YXRlIHN0YXRpYyBpbml0OiBib29sZWFuO1xuXG4gICAgICAgIGNvbnN0cnVjdG9yKHByZWZpeDogc3RyaW5nKSB7XG4gICAgICAgICAgICBzdXBlcihwcmVmaXgpO1xuXG4gICAgICAgICAgICBpZiAoIUN1c3RvbWVyRm9ybS5pbml0KSAge1xuICAgICAgICAgICAgICAgIEN1c3RvbWVyRm9ybS5pbml0ID0gdHJ1ZTtcblxuICAgICAgICAgICAgICAgIHZhciBzID0gU2VyZW5pdHk7XG4gICAgICAgICAgICAgICAgdmFyIHcwID0gcy5TdHJpbmdFZGl0b3I7XG4gICAgICAgICAgICAgICAgdmFyIHcxID0gcy5UZXh0QXJlYUVkaXRvcjtcbiAgICAgICAgICAgICAgICB2YXIgdzIgPSBDdXN0b21lckNvbnRhY3RFZGl0b3I7XG5cbiAgICAgICAgICAgICAgICBRLmluaXRGb3JtVHlwZShDdXN0b21lckZvcm0sIFtcbiAgICAgICAgICAgICAgICAgICAgJ05hbWUnLCB3MCxcbiAgICAgICAgICAgICAgICAgICAgJ0Rlc2NyaXB0aW9uJywgdzEsXG4gICAgICAgICAgICAgICAgICAgICdTdHJlZXQnLCB3MCxcbiAgICAgICAgICAgICAgICAgICAgJ0NpdHknLCB3MCxcbiAgICAgICAgICAgICAgICAgICAgJ1N0YXRlJywgdzAsXG4gICAgICAgICAgICAgICAgICAgICdaaXBDb2RlJywgdzAsXG4gICAgICAgICAgICAgICAgICAgICdQaG9uZScsIHcwLFxuICAgICAgICAgICAgICAgICAgICAnRW1haWwnLCB3MCxcbiAgICAgICAgICAgICAgICAgICAgJ0NvbnRhY3RMaXN0JywgdzJcbiAgICAgICAgICAgICAgICBdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbiIsIm5hbWVzcGFjZSBJbmRvdGFsZW50LlNhbGVzIHtcbiAgICBleHBvcnQgaW50ZXJmYWNlIEN1c3RvbWVyUm93IHtcbiAgICAgICAgSWQ/OiBudW1iZXI7XG4gICAgICAgIE5hbWU/OiBzdHJpbmc7XG4gICAgICAgIERlc2NyaXB0aW9uPzogc3RyaW5nO1xuICAgICAgICBTdHJlZXQ/OiBzdHJpbmc7XG4gICAgICAgIENpdHk/OiBzdHJpbmc7XG4gICAgICAgIFN0YXRlPzogc3RyaW5nO1xuICAgICAgICBaaXBDb2RlPzogc3RyaW5nO1xuICAgICAgICBQaG9uZT86IHN0cmluZztcbiAgICAgICAgRW1haWw/OiBzdHJpbmc7XG4gICAgICAgIFRlbmFudElkPzogbnVtYmVyO1xuICAgICAgICBUZW5hbnROYW1lPzogc3RyaW5nO1xuICAgICAgICBDb250YWN0TGlzdD86IEN1c3RvbWVyQ29udGFjdFJvd1tdO1xuICAgIH1cblxuICAgIGV4cG9ydCBuYW1lc3BhY2UgQ3VzdG9tZXJSb3cge1xuICAgICAgICBleHBvcnQgY29uc3QgaWRQcm9wZXJ0eSA9ICdJZCc7XG4gICAgICAgIGV4cG9ydCBjb25zdCBuYW1lUHJvcGVydHkgPSAnTmFtZSc7XG4gICAgICAgIGV4cG9ydCBjb25zdCBsb2NhbFRleHRQcmVmaXggPSAnU2FsZXMuQ3VzdG9tZXInO1xuICAgICAgICBleHBvcnQgY29uc3QgZGVsZXRlUGVybWlzc2lvbiA9ICdTYWxlczpDdXN0b21lcic7XG4gICAgICAgIGV4cG9ydCBjb25zdCBpbnNlcnRQZXJtaXNzaW9uID0gJ1NhbGVzOkN1c3RvbWVyJztcbiAgICAgICAgZXhwb3J0IGNvbnN0IHJlYWRQZXJtaXNzaW9uID0gJ1NhbGVzOkN1c3RvbWVyJztcbiAgICAgICAgZXhwb3J0IGNvbnN0IHVwZGF0ZVBlcm1pc3Npb24gPSAnU2FsZXM6Q3VzdG9tZXInO1xuXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGNvbnN0IGVudW0gRmllbGRzIHtcbiAgICAgICAgICAgIElkID0gXCJJZFwiLFxuICAgICAgICAgICAgTmFtZSA9IFwiTmFtZVwiLFxuICAgICAgICAgICAgRGVzY3JpcHRpb24gPSBcIkRlc2NyaXB0aW9uXCIsXG4gICAgICAgICAgICBTdHJlZXQgPSBcIlN0cmVldFwiLFxuICAgICAgICAgICAgQ2l0eSA9IFwiQ2l0eVwiLFxuICAgICAgICAgICAgU3RhdGUgPSBcIlN0YXRlXCIsXG4gICAgICAgICAgICBaaXBDb2RlID0gXCJaaXBDb2RlXCIsXG4gICAgICAgICAgICBQaG9uZSA9IFwiUGhvbmVcIixcbiAgICAgICAgICAgIEVtYWlsID0gXCJFbWFpbFwiLFxuICAgICAgICAgICAgVGVuYW50SWQgPSBcIlRlbmFudElkXCIsXG4gICAgICAgICAgICBUZW5hbnROYW1lID0gXCJUZW5hbnROYW1lXCIsXG4gICAgICAgICAgICBDb250YWN0TGlzdCA9IFwiQ29udGFjdExpc3RcIlxuICAgICAgICB9XG4gICAgfVxufVxuIiwibmFtZXNwYWNlIEluZG90YWxlbnQuU2FsZXMge1xuICAgIGV4cG9ydCBuYW1lc3BhY2UgQ3VzdG9tZXJTZXJ2aWNlIHtcbiAgICAgICAgZXhwb3J0IGNvbnN0IGJhc2VVcmwgPSAnU2FsZXMvQ3VzdG9tZXInO1xuXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIENyZWF0ZShyZXF1ZXN0OiBTZXJlbml0eS5TYXZlUmVxdWVzdDxDdXN0b21lclJvdz4sIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuU2F2ZVJlc3BvbnNlKSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIFVwZGF0ZShyZXF1ZXN0OiBTZXJlbml0eS5TYXZlUmVxdWVzdDxDdXN0b21lclJvdz4sIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuU2F2ZVJlc3BvbnNlKSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIERlbGV0ZShyZXF1ZXN0OiBTZXJlbml0eS5EZWxldGVSZXF1ZXN0LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5LkRlbGV0ZVJlc3BvbnNlKSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIFJldHJpZXZlKHJlcXVlc3Q6IFNlcmVuaXR5LlJldHJpZXZlUmVxdWVzdCwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5SZXRyaWV2ZVJlc3BvbnNlPEN1c3RvbWVyUm93PikgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBMaXN0KHJlcXVlc3Q6IFNlcmVuaXR5Lkxpc3RSZXF1ZXN0LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5Lkxpc3RSZXNwb25zZTxDdXN0b21lclJvdz4pID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcblxuICAgICAgICBleHBvcnQgZGVjbGFyZSBjb25zdCBlbnVtIE1ldGhvZHMge1xuICAgICAgICAgICAgQ3JlYXRlID0gXCJTYWxlcy9DdXN0b21lci9DcmVhdGVcIixcbiAgICAgICAgICAgIFVwZGF0ZSA9IFwiU2FsZXMvQ3VzdG9tZXIvVXBkYXRlXCIsXG4gICAgICAgICAgICBEZWxldGUgPSBcIlNhbGVzL0N1c3RvbWVyL0RlbGV0ZVwiLFxuICAgICAgICAgICAgUmV0cmlldmUgPSBcIlNhbGVzL0N1c3RvbWVyL1JldHJpZXZlXCIsXG4gICAgICAgICAgICBMaXN0ID0gXCJTYWxlcy9DdXN0b21lci9MaXN0XCJcbiAgICAgICAgfVxuXG4gICAgICAgIFtcbiAgICAgICAgICAgICdDcmVhdGUnLCBcbiAgICAgICAgICAgICdVcGRhdGUnLCBcbiAgICAgICAgICAgICdEZWxldGUnLCBcbiAgICAgICAgICAgICdSZXRyaWV2ZScsIFxuICAgICAgICAgICAgJ0xpc3QnXG4gICAgICAgIF0uZm9yRWFjaCh4ID0+IHtcbiAgICAgICAgICAgICg8YW55PkN1c3RvbWVyU2VydmljZSlbeF0gPSBmdW5jdGlvbiAociwgcywgbykge1xuICAgICAgICAgICAgICAgIHJldHVybiBRLnNlcnZpY2VSZXF1ZXN0KGJhc2VVcmwgKyAnLycgKyB4LCByLCBzLCBvKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbiIsIlxyXG5uYW1lc3BhY2UgSW5kb3RhbGVudC5TYWxlcyB7XHJcbiAgICBleHBvcnQgY2xhc3MgSW52b2ljZUNvbHVtbnMge1xyXG4gICAgICAgIHN0YXRpYyBjb2x1bW5zS2V5ID0gJ1NhbGVzLkludm9pY2UnO1xyXG4gICAgfVxyXG59IiwiXHJcbm5hbWVzcGFjZSBJbmRvdGFsZW50LlNhbGVzIHtcclxuICAgIGV4cG9ydCBjbGFzcyBJbnZvaWNlRGV0YWlsQ29sdW1ucyB7XHJcbiAgICAgICAgc3RhdGljIGNvbHVtbnNLZXkgPSAnU2FsZXMuSW52b2ljZURldGFpbCc7XHJcbiAgICB9XHJcbn0iLCJuYW1lc3BhY2UgSW5kb3RhbGVudC5TYWxlcyB7XG4gICAgZXhwb3J0IGludGVyZmFjZSBJbnZvaWNlRGV0YWlsRm9ybSB7XG4gICAgICAgIEludm9pY2VJZDogU2VyZW5pdHkuSW50ZWdlckVkaXRvcjtcbiAgICAgICAgUHJvZHVjdElkOiBTZXJlbml0eS5JbnRlZ2VyRWRpdG9yO1xuICAgICAgICBQcmljZTogU2VyZW5pdHkuRGVjaW1hbEVkaXRvcjtcbiAgICAgICAgUXR5OiBTZXJlbml0eS5EZWNpbWFsRWRpdG9yO1xuICAgICAgICBTdWJUb3RhbDogU2VyZW5pdHkuRGVjaW1hbEVkaXRvcjtcbiAgICAgICAgRGlzY291bnQ6IFNlcmVuaXR5LkRlY2ltYWxFZGl0b3I7XG4gICAgICAgIEJlZm9yZVRheDogU2VyZW5pdHkuRGVjaW1hbEVkaXRvcjtcbiAgICAgICAgVGF4UGVyY2VudGFnZTogU2VyZW5pdHkuRGVjaW1hbEVkaXRvcjtcbiAgICAgICAgVGF4QW1vdW50OiBTZXJlbml0eS5EZWNpbWFsRWRpdG9yO1xuICAgICAgICBUb3RhbDogU2VyZW5pdHkuRGVjaW1hbEVkaXRvcjtcbiAgICAgICAgSW5zZXJ0RGF0ZTogU2VyZW5pdHkuRGF0ZUVkaXRvcjtcbiAgICAgICAgSW5zZXJ0VXNlcklkOiBTZXJlbml0eS5JbnRlZ2VyRWRpdG9yO1xuICAgICAgICBVcGRhdGVEYXRlOiBTZXJlbml0eS5EYXRlRWRpdG9yO1xuICAgICAgICBVcGRhdGVVc2VySWQ6IFNlcmVuaXR5LkludGVnZXJFZGl0b3I7XG4gICAgICAgIFRlbmFudElkOiBTZXJlbml0eS5JbnRlZ2VyRWRpdG9yO1xuICAgIH1cblxuICAgIGV4cG9ydCBjbGFzcyBJbnZvaWNlRGV0YWlsRm9ybSBleHRlbmRzIFNlcmVuaXR5LlByZWZpeGVkQ29udGV4dCB7XG4gICAgICAgIHN0YXRpYyBmb3JtS2V5ID0gJ1NhbGVzLkludm9pY2VEZXRhaWwnO1xuICAgICAgICBwcml2YXRlIHN0YXRpYyBpbml0OiBib29sZWFuO1xuXG4gICAgICAgIGNvbnN0cnVjdG9yKHByZWZpeDogc3RyaW5nKSB7XG4gICAgICAgICAgICBzdXBlcihwcmVmaXgpO1xuXG4gICAgICAgICAgICBpZiAoIUludm9pY2VEZXRhaWxGb3JtLmluaXQpICB7XG4gICAgICAgICAgICAgICAgSW52b2ljZURldGFpbEZvcm0uaW5pdCA9IHRydWU7XG5cbiAgICAgICAgICAgICAgICB2YXIgcyA9IFNlcmVuaXR5O1xuICAgICAgICAgICAgICAgIHZhciB3MCA9IHMuSW50ZWdlckVkaXRvcjtcbiAgICAgICAgICAgICAgICB2YXIgdzEgPSBzLkRlY2ltYWxFZGl0b3I7XG4gICAgICAgICAgICAgICAgdmFyIHcyID0gcy5EYXRlRWRpdG9yO1xuXG4gICAgICAgICAgICAgICAgUS5pbml0Rm9ybVR5cGUoSW52b2ljZURldGFpbEZvcm0sIFtcbiAgICAgICAgICAgICAgICAgICAgJ0ludm9pY2VJZCcsIHcwLFxuICAgICAgICAgICAgICAgICAgICAnUHJvZHVjdElkJywgdzAsXG4gICAgICAgICAgICAgICAgICAgICdQcmljZScsIHcxLFxuICAgICAgICAgICAgICAgICAgICAnUXR5JywgdzEsXG4gICAgICAgICAgICAgICAgICAgICdTdWJUb3RhbCcsIHcxLFxuICAgICAgICAgICAgICAgICAgICAnRGlzY291bnQnLCB3MSxcbiAgICAgICAgICAgICAgICAgICAgJ0JlZm9yZVRheCcsIHcxLFxuICAgICAgICAgICAgICAgICAgICAnVGF4UGVyY2VudGFnZScsIHcxLFxuICAgICAgICAgICAgICAgICAgICAnVGF4QW1vdW50JywgdzEsXG4gICAgICAgICAgICAgICAgICAgICdUb3RhbCcsIHcxLFxuICAgICAgICAgICAgICAgICAgICAnSW5zZXJ0RGF0ZScsIHcyLFxuICAgICAgICAgICAgICAgICAgICAnSW5zZXJ0VXNlcklkJywgdzAsXG4gICAgICAgICAgICAgICAgICAgICdVcGRhdGVEYXRlJywgdzIsXG4gICAgICAgICAgICAgICAgICAgICdVcGRhdGVVc2VySWQnLCB3MCxcbiAgICAgICAgICAgICAgICAgICAgJ1RlbmFudElkJywgdzBcbiAgICAgICAgICAgICAgICBdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbiIsIm5hbWVzcGFjZSBJbmRvdGFsZW50LlNhbGVzIHtcbiAgICBleHBvcnQgaW50ZXJmYWNlIEludm9pY2VEZXRhaWxSb3cge1xuICAgICAgICBJZD86IG51bWJlcjtcbiAgICAgICAgSW52b2ljZUlkPzogbnVtYmVyO1xuICAgICAgICBQcm9kdWN0SWQ/OiBudW1iZXI7XG4gICAgICAgIFByaWNlPzogbnVtYmVyO1xuICAgICAgICBRdHk/OiBudW1iZXI7XG4gICAgICAgIFN1YlRvdGFsPzogbnVtYmVyO1xuICAgICAgICBEaXNjb3VudD86IG51bWJlcjtcbiAgICAgICAgQmVmb3JlVGF4PzogbnVtYmVyO1xuICAgICAgICBUYXhQZXJjZW50YWdlPzogbnVtYmVyO1xuICAgICAgICBUYXhBbW91bnQ/OiBudW1iZXI7XG4gICAgICAgIFRvdGFsPzogbnVtYmVyO1xuICAgICAgICBJbnNlcnREYXRlPzogc3RyaW5nO1xuICAgICAgICBJbnNlcnRVc2VySWQ/OiBudW1iZXI7XG4gICAgICAgIFVwZGF0ZURhdGU/OiBzdHJpbmc7XG4gICAgICAgIFVwZGF0ZVVzZXJJZD86IG51bWJlcjtcbiAgICAgICAgVGVuYW50SWQ/OiBudW1iZXI7XG4gICAgfVxuXG4gICAgZXhwb3J0IG5hbWVzcGFjZSBJbnZvaWNlRGV0YWlsUm93IHtcbiAgICAgICAgZXhwb3J0IGNvbnN0IGlkUHJvcGVydHkgPSAnSWQnO1xuICAgICAgICBleHBvcnQgY29uc3QgbG9jYWxUZXh0UHJlZml4ID0gJ1NhbGVzLkludm9pY2VEZXRhaWwnO1xuICAgICAgICBleHBvcnQgY29uc3QgZGVsZXRlUGVybWlzc2lvbiA9ICdTYWxlczpJbnZvaWNlJztcbiAgICAgICAgZXhwb3J0IGNvbnN0IGluc2VydFBlcm1pc3Npb24gPSAnU2FsZXM6SW52b2ljZSc7XG4gICAgICAgIGV4cG9ydCBjb25zdCByZWFkUGVybWlzc2lvbiA9ICdTYWxlczpJbnZvaWNlJztcbiAgICAgICAgZXhwb3J0IGNvbnN0IHVwZGF0ZVBlcm1pc3Npb24gPSAnU2FsZXM6SW52b2ljZSc7XG5cbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgY29uc3QgZW51bSBGaWVsZHMge1xuICAgICAgICAgICAgSWQgPSBcIklkXCIsXG4gICAgICAgICAgICBJbnZvaWNlSWQgPSBcIkludm9pY2VJZFwiLFxuICAgICAgICAgICAgUHJvZHVjdElkID0gXCJQcm9kdWN0SWRcIixcbiAgICAgICAgICAgIFByaWNlID0gXCJQcmljZVwiLFxuICAgICAgICAgICAgUXR5ID0gXCJRdHlcIixcbiAgICAgICAgICAgIFN1YlRvdGFsID0gXCJTdWJUb3RhbFwiLFxuICAgICAgICAgICAgRGlzY291bnQgPSBcIkRpc2NvdW50XCIsXG4gICAgICAgICAgICBCZWZvcmVUYXggPSBcIkJlZm9yZVRheFwiLFxuICAgICAgICAgICAgVGF4UGVyY2VudGFnZSA9IFwiVGF4UGVyY2VudGFnZVwiLFxuICAgICAgICAgICAgVGF4QW1vdW50ID0gXCJUYXhBbW91bnRcIixcbiAgICAgICAgICAgIFRvdGFsID0gXCJUb3RhbFwiLFxuICAgICAgICAgICAgSW5zZXJ0RGF0ZSA9IFwiSW5zZXJ0RGF0ZVwiLFxuICAgICAgICAgICAgSW5zZXJ0VXNlcklkID0gXCJJbnNlcnRVc2VySWRcIixcbiAgICAgICAgICAgIFVwZGF0ZURhdGUgPSBcIlVwZGF0ZURhdGVcIixcbiAgICAgICAgICAgIFVwZGF0ZVVzZXJJZCA9IFwiVXBkYXRlVXNlcklkXCIsXG4gICAgICAgICAgICBUZW5hbnRJZCA9IFwiVGVuYW50SWRcIlxuICAgICAgICB9XG4gICAgfVxufVxuIiwibmFtZXNwYWNlIEluZG90YWxlbnQuU2FsZXMge1xuICAgIGV4cG9ydCBuYW1lc3BhY2UgSW52b2ljZURldGFpbFNlcnZpY2Uge1xuICAgICAgICBleHBvcnQgY29uc3QgYmFzZVVybCA9ICdTYWxlcy9JbnZvaWNlRGV0YWlsJztcblxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBDcmVhdGUocmVxdWVzdDogU2VyZW5pdHkuU2F2ZVJlcXVlc3Q8SW52b2ljZURldGFpbFJvdz4sIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuU2F2ZVJlc3BvbnNlKSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIFVwZGF0ZShyZXF1ZXN0OiBTZXJlbml0eS5TYXZlUmVxdWVzdDxJbnZvaWNlRGV0YWlsUm93Piwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5TYXZlUmVzcG9uc2UpID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gRGVsZXRlKHJlcXVlc3Q6IFNlcmVuaXR5LkRlbGV0ZVJlcXVlc3QsIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuRGVsZXRlUmVzcG9uc2UpID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gUmV0cmlldmUocmVxdWVzdDogU2VyZW5pdHkuUmV0cmlldmVSZXF1ZXN0LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5LlJldHJpZXZlUmVzcG9uc2U8SW52b2ljZURldGFpbFJvdz4pID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gTGlzdChyZXF1ZXN0OiBTZXJlbml0eS5MaXN0UmVxdWVzdCwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5MaXN0UmVzcG9uc2U8SW52b2ljZURldGFpbFJvdz4pID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcblxuICAgICAgICBleHBvcnQgZGVjbGFyZSBjb25zdCBlbnVtIE1ldGhvZHMge1xuICAgICAgICAgICAgQ3JlYXRlID0gXCJTYWxlcy9JbnZvaWNlRGV0YWlsL0NyZWF0ZVwiLFxuICAgICAgICAgICAgVXBkYXRlID0gXCJTYWxlcy9JbnZvaWNlRGV0YWlsL1VwZGF0ZVwiLFxuICAgICAgICAgICAgRGVsZXRlID0gXCJTYWxlcy9JbnZvaWNlRGV0YWlsL0RlbGV0ZVwiLFxuICAgICAgICAgICAgUmV0cmlldmUgPSBcIlNhbGVzL0ludm9pY2VEZXRhaWwvUmV0cmlldmVcIixcbiAgICAgICAgICAgIExpc3QgPSBcIlNhbGVzL0ludm9pY2VEZXRhaWwvTGlzdFwiXG4gICAgICAgIH1cblxuICAgICAgICBbXG4gICAgICAgICAgICAnQ3JlYXRlJywgXG4gICAgICAgICAgICAnVXBkYXRlJywgXG4gICAgICAgICAgICAnRGVsZXRlJywgXG4gICAgICAgICAgICAnUmV0cmlldmUnLCBcbiAgICAgICAgICAgICdMaXN0J1xuICAgICAgICBdLmZvckVhY2goeCA9PiB7XG4gICAgICAgICAgICAoPGFueT5JbnZvaWNlRGV0YWlsU2VydmljZSlbeF0gPSBmdW5jdGlvbiAociwgcywgbykge1xuICAgICAgICAgICAgICAgIHJldHVybiBRLnNlcnZpY2VSZXF1ZXN0KGJhc2VVcmwgKyAnLycgKyB4LCByLCBzLCBvKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbiIsIm5hbWVzcGFjZSBJbmRvdGFsZW50LlNhbGVzIHtcbiAgICBleHBvcnQgaW50ZXJmYWNlIEludm9pY2VGb3JtIHtcbiAgICAgICAgTnVtYmVyOiBTZXJlbml0eS5TdHJpbmdFZGl0b3I7XG4gICAgICAgIERlc2NyaXB0aW9uOiBTZXJlbml0eS5TdHJpbmdFZGl0b3I7XG4gICAgICAgIFNhbGVzR3JvdXA6IFNlcmVuaXR5LlN0cmluZ0VkaXRvcjtcbiAgICAgICAgSW52b2ljZURhdGU6IFNlcmVuaXR5LkRhdGVFZGl0b3I7XG4gICAgICAgIFNhbGVzT3JkZXJJZDogU2VyZW5pdHkuSW50ZWdlckVkaXRvcjtcbiAgICAgICAgU3ViVG90YWw6IFNlcmVuaXR5LkRlY2ltYWxFZGl0b3I7XG4gICAgICAgIERpc2NvdW50OiBTZXJlbml0eS5EZWNpbWFsRWRpdG9yO1xuICAgICAgICBCZWZvcmVUYXg6IFNlcmVuaXR5LkRlY2ltYWxFZGl0b3I7XG4gICAgICAgIFRheEFtb3VudDogU2VyZW5pdHkuRGVjaW1hbEVkaXRvcjtcbiAgICAgICAgVG90YWw6IFNlcmVuaXR5LkRlY2ltYWxFZGl0b3I7XG4gICAgICAgIE90aGVyQ2hhcmdlOiBTZXJlbml0eS5EZWNpbWFsRWRpdG9yO1xuICAgICAgICBJbnNlcnREYXRlOiBTZXJlbml0eS5EYXRlRWRpdG9yO1xuICAgICAgICBJbnNlcnRVc2VySWQ6IFNlcmVuaXR5LkludGVnZXJFZGl0b3I7XG4gICAgICAgIFVwZGF0ZURhdGU6IFNlcmVuaXR5LkRhdGVFZGl0b3I7XG4gICAgICAgIFVwZGF0ZVVzZXJJZDogU2VyZW5pdHkuSW50ZWdlckVkaXRvcjtcbiAgICAgICAgVGVuYW50SWQ6IFNlcmVuaXR5LkludGVnZXJFZGl0b3I7XG4gICAgfVxuXG4gICAgZXhwb3J0IGNsYXNzIEludm9pY2VGb3JtIGV4dGVuZHMgU2VyZW5pdHkuUHJlZml4ZWRDb250ZXh0IHtcbiAgICAgICAgc3RhdGljIGZvcm1LZXkgPSAnU2FsZXMuSW52b2ljZSc7XG4gICAgICAgIHByaXZhdGUgc3RhdGljIGluaXQ6IGJvb2xlYW47XG5cbiAgICAgICAgY29uc3RydWN0b3IocHJlZml4OiBzdHJpbmcpIHtcbiAgICAgICAgICAgIHN1cGVyKHByZWZpeCk7XG5cbiAgICAgICAgICAgIGlmICghSW52b2ljZUZvcm0uaW5pdCkgIHtcbiAgICAgICAgICAgICAgICBJbnZvaWNlRm9ybS5pbml0ID0gdHJ1ZTtcblxuICAgICAgICAgICAgICAgIHZhciBzID0gU2VyZW5pdHk7XG4gICAgICAgICAgICAgICAgdmFyIHcwID0gcy5TdHJpbmdFZGl0b3I7XG4gICAgICAgICAgICAgICAgdmFyIHcxID0gcy5EYXRlRWRpdG9yO1xuICAgICAgICAgICAgICAgIHZhciB3MiA9IHMuSW50ZWdlckVkaXRvcjtcbiAgICAgICAgICAgICAgICB2YXIgdzMgPSBzLkRlY2ltYWxFZGl0b3I7XG5cbiAgICAgICAgICAgICAgICBRLmluaXRGb3JtVHlwZShJbnZvaWNlRm9ybSwgW1xuICAgICAgICAgICAgICAgICAgICAnTnVtYmVyJywgdzAsXG4gICAgICAgICAgICAgICAgICAgICdEZXNjcmlwdGlvbicsIHcwLFxuICAgICAgICAgICAgICAgICAgICAnU2FsZXNHcm91cCcsIHcwLFxuICAgICAgICAgICAgICAgICAgICAnSW52b2ljZURhdGUnLCB3MSxcbiAgICAgICAgICAgICAgICAgICAgJ1NhbGVzT3JkZXJJZCcsIHcyLFxuICAgICAgICAgICAgICAgICAgICAnU3ViVG90YWwnLCB3MyxcbiAgICAgICAgICAgICAgICAgICAgJ0Rpc2NvdW50JywgdzMsXG4gICAgICAgICAgICAgICAgICAgICdCZWZvcmVUYXgnLCB3MyxcbiAgICAgICAgICAgICAgICAgICAgJ1RheEFtb3VudCcsIHczLFxuICAgICAgICAgICAgICAgICAgICAnVG90YWwnLCB3MyxcbiAgICAgICAgICAgICAgICAgICAgJ090aGVyQ2hhcmdlJywgdzMsXG4gICAgICAgICAgICAgICAgICAgICdJbnNlcnREYXRlJywgdzEsXG4gICAgICAgICAgICAgICAgICAgICdJbnNlcnRVc2VySWQnLCB3MixcbiAgICAgICAgICAgICAgICAgICAgJ1VwZGF0ZURhdGUnLCB3MSxcbiAgICAgICAgICAgICAgICAgICAgJ1VwZGF0ZVVzZXJJZCcsIHcyLFxuICAgICAgICAgICAgICAgICAgICAnVGVuYW50SWQnLCB3MlxuICAgICAgICAgICAgICAgIF0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuIiwiXHJcbm5hbWVzcGFjZSBJbmRvdGFsZW50LlNhbGVzIHtcclxuICAgIGV4cG9ydCBjbGFzcyBJbnZvaWNlUGF5bWVudENvbHVtbnMge1xyXG4gICAgICAgIHN0YXRpYyBjb2x1bW5zS2V5ID0gJ1NhbGVzLkludm9pY2VQYXltZW50JztcclxuICAgIH1cclxufSIsIm5hbWVzcGFjZSBJbmRvdGFsZW50LlNhbGVzIHtcbiAgICBleHBvcnQgaW50ZXJmYWNlIEludm9pY2VQYXltZW50Rm9ybSB7XG4gICAgICAgIEludm9pY2VJZDogU2VyZW5pdHkuSW50ZWdlckVkaXRvcjtcbiAgICAgICAgTnVtYmVyOiBTZXJlbml0eS5TdHJpbmdFZGl0b3I7XG4gICAgICAgIERlc2NyaXB0aW9uOiBTZXJlbml0eS5TdHJpbmdFZGl0b3I7XG4gICAgICAgIFNhbGVzR3JvdXA6IFNlcmVuaXR5LlN0cmluZ0VkaXRvcjtcbiAgICAgICAgUGF5bWVudERhdGU6IFNlcmVuaXR5LkRhdGVFZGl0b3I7XG4gICAgICAgIENhc2hCYW5rSWQ6IFNlcmVuaXR5LkludGVnZXJFZGl0b3I7XG4gICAgICAgIEludm9pY2VBbW91bnQ6IFNlcmVuaXR5LkRlY2ltYWxFZGl0b3I7XG4gICAgICAgIFBheW1lbnRBbW91bnQ6IFNlcmVuaXR5LkRlY2ltYWxFZGl0b3I7XG4gICAgICAgIEluc2VydERhdGU6IFNlcmVuaXR5LkRhdGVFZGl0b3I7XG4gICAgICAgIEluc2VydFVzZXJJZDogU2VyZW5pdHkuSW50ZWdlckVkaXRvcjtcbiAgICAgICAgVXBkYXRlRGF0ZTogU2VyZW5pdHkuRGF0ZUVkaXRvcjtcbiAgICAgICAgVXBkYXRlVXNlcklkOiBTZXJlbml0eS5JbnRlZ2VyRWRpdG9yO1xuICAgICAgICBUZW5hbnRJZDogU2VyZW5pdHkuSW50ZWdlckVkaXRvcjtcbiAgICB9XG5cbiAgICBleHBvcnQgY2xhc3MgSW52b2ljZVBheW1lbnRGb3JtIGV4dGVuZHMgU2VyZW5pdHkuUHJlZml4ZWRDb250ZXh0IHtcbiAgICAgICAgc3RhdGljIGZvcm1LZXkgPSAnU2FsZXMuSW52b2ljZVBheW1lbnQnO1xuICAgICAgICBwcml2YXRlIHN0YXRpYyBpbml0OiBib29sZWFuO1xuXG4gICAgICAgIGNvbnN0cnVjdG9yKHByZWZpeDogc3RyaW5nKSB7XG4gICAgICAgICAgICBzdXBlcihwcmVmaXgpO1xuXG4gICAgICAgICAgICBpZiAoIUludm9pY2VQYXltZW50Rm9ybS5pbml0KSAge1xuICAgICAgICAgICAgICAgIEludm9pY2VQYXltZW50Rm9ybS5pbml0ID0gdHJ1ZTtcblxuICAgICAgICAgICAgICAgIHZhciBzID0gU2VyZW5pdHk7XG4gICAgICAgICAgICAgICAgdmFyIHcwID0gcy5JbnRlZ2VyRWRpdG9yO1xuICAgICAgICAgICAgICAgIHZhciB3MSA9IHMuU3RyaW5nRWRpdG9yO1xuICAgICAgICAgICAgICAgIHZhciB3MiA9IHMuRGF0ZUVkaXRvcjtcbiAgICAgICAgICAgICAgICB2YXIgdzMgPSBzLkRlY2ltYWxFZGl0b3I7XG5cbiAgICAgICAgICAgICAgICBRLmluaXRGb3JtVHlwZShJbnZvaWNlUGF5bWVudEZvcm0sIFtcbiAgICAgICAgICAgICAgICAgICAgJ0ludm9pY2VJZCcsIHcwLFxuICAgICAgICAgICAgICAgICAgICAnTnVtYmVyJywgdzEsXG4gICAgICAgICAgICAgICAgICAgICdEZXNjcmlwdGlvbicsIHcxLFxuICAgICAgICAgICAgICAgICAgICAnU2FsZXNHcm91cCcsIHcxLFxuICAgICAgICAgICAgICAgICAgICAnUGF5bWVudERhdGUnLCB3MixcbiAgICAgICAgICAgICAgICAgICAgJ0Nhc2hCYW5rSWQnLCB3MCxcbiAgICAgICAgICAgICAgICAgICAgJ0ludm9pY2VBbW91bnQnLCB3MyxcbiAgICAgICAgICAgICAgICAgICAgJ1BheW1lbnRBbW91bnQnLCB3MyxcbiAgICAgICAgICAgICAgICAgICAgJ0luc2VydERhdGUnLCB3MixcbiAgICAgICAgICAgICAgICAgICAgJ0luc2VydFVzZXJJZCcsIHcwLFxuICAgICAgICAgICAgICAgICAgICAnVXBkYXRlRGF0ZScsIHcyLFxuICAgICAgICAgICAgICAgICAgICAnVXBkYXRlVXNlcklkJywgdzAsXG4gICAgICAgICAgICAgICAgICAgICdUZW5hbnRJZCcsIHcwXG4gICAgICAgICAgICAgICAgXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJuYW1lc3BhY2UgSW5kb3RhbGVudC5TYWxlcyB7XG4gICAgZXhwb3J0IGludGVyZmFjZSBJbnZvaWNlUGF5bWVudFJvdyB7XG4gICAgICAgIElkPzogbnVtYmVyO1xuICAgICAgICBJbnZvaWNlSWQ/OiBudW1iZXI7XG4gICAgICAgIE51bWJlcj86IHN0cmluZztcbiAgICAgICAgRGVzY3JpcHRpb24/OiBzdHJpbmc7XG4gICAgICAgIFNhbGVzR3JvdXA/OiBzdHJpbmc7XG4gICAgICAgIFBheW1lbnREYXRlPzogc3RyaW5nO1xuICAgICAgICBDYXNoQmFua0lkPzogbnVtYmVyO1xuICAgICAgICBJbnZvaWNlQW1vdW50PzogbnVtYmVyO1xuICAgICAgICBQYXltZW50QW1vdW50PzogbnVtYmVyO1xuICAgICAgICBJbnNlcnREYXRlPzogc3RyaW5nO1xuICAgICAgICBJbnNlcnRVc2VySWQ/OiBudW1iZXI7XG4gICAgICAgIFVwZGF0ZURhdGU/OiBzdHJpbmc7XG4gICAgICAgIFVwZGF0ZVVzZXJJZD86IG51bWJlcjtcbiAgICAgICAgVGVuYW50SWQ/OiBudW1iZXI7XG4gICAgfVxuXG4gICAgZXhwb3J0IG5hbWVzcGFjZSBJbnZvaWNlUGF5bWVudFJvdyB7XG4gICAgICAgIGV4cG9ydCBjb25zdCBpZFByb3BlcnR5ID0gJ0lkJztcbiAgICAgICAgZXhwb3J0IGNvbnN0IG5hbWVQcm9wZXJ0eSA9ICdOdW1iZXInO1xuICAgICAgICBleHBvcnQgY29uc3QgbG9jYWxUZXh0UHJlZml4ID0gJ1NhbGVzLkludm9pY2VQYXltZW50JztcbiAgICAgICAgZXhwb3J0IGNvbnN0IGRlbGV0ZVBlcm1pc3Npb24gPSAnU2FsZXM6SW52b2ljZSc7XG4gICAgICAgIGV4cG9ydCBjb25zdCBpbnNlcnRQZXJtaXNzaW9uID0gJ1NhbGVzOkludm9pY2UnO1xuICAgICAgICBleHBvcnQgY29uc3QgcmVhZFBlcm1pc3Npb24gPSAnU2FsZXM6SW52b2ljZSc7XG4gICAgICAgIGV4cG9ydCBjb25zdCB1cGRhdGVQZXJtaXNzaW9uID0gJ1NhbGVzOkludm9pY2UnO1xuXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGNvbnN0IGVudW0gRmllbGRzIHtcbiAgICAgICAgICAgIElkID0gXCJJZFwiLFxuICAgICAgICAgICAgSW52b2ljZUlkID0gXCJJbnZvaWNlSWRcIixcbiAgICAgICAgICAgIE51bWJlciA9IFwiTnVtYmVyXCIsXG4gICAgICAgICAgICBEZXNjcmlwdGlvbiA9IFwiRGVzY3JpcHRpb25cIixcbiAgICAgICAgICAgIFNhbGVzR3JvdXAgPSBcIlNhbGVzR3JvdXBcIixcbiAgICAgICAgICAgIFBheW1lbnREYXRlID0gXCJQYXltZW50RGF0ZVwiLFxuICAgICAgICAgICAgQ2FzaEJhbmtJZCA9IFwiQ2FzaEJhbmtJZFwiLFxuICAgICAgICAgICAgSW52b2ljZUFtb3VudCA9IFwiSW52b2ljZUFtb3VudFwiLFxuICAgICAgICAgICAgUGF5bWVudEFtb3VudCA9IFwiUGF5bWVudEFtb3VudFwiLFxuICAgICAgICAgICAgSW5zZXJ0RGF0ZSA9IFwiSW5zZXJ0RGF0ZVwiLFxuICAgICAgICAgICAgSW5zZXJ0VXNlcklkID0gXCJJbnNlcnRVc2VySWRcIixcbiAgICAgICAgICAgIFVwZGF0ZURhdGUgPSBcIlVwZGF0ZURhdGVcIixcbiAgICAgICAgICAgIFVwZGF0ZVVzZXJJZCA9IFwiVXBkYXRlVXNlcklkXCIsXG4gICAgICAgICAgICBUZW5hbnRJZCA9IFwiVGVuYW50SWRcIlxuICAgICAgICB9XG4gICAgfVxufVxuIiwibmFtZXNwYWNlIEluZG90YWxlbnQuU2FsZXMge1xuICAgIGV4cG9ydCBuYW1lc3BhY2UgSW52b2ljZVBheW1lbnRTZXJ2aWNlIHtcbiAgICAgICAgZXhwb3J0IGNvbnN0IGJhc2VVcmwgPSAnU2FsZXMvSW52b2ljZVBheW1lbnQnO1xuXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIENyZWF0ZShyZXF1ZXN0OiBTZXJlbml0eS5TYXZlUmVxdWVzdDxJbnZvaWNlUGF5bWVudFJvdz4sIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuU2F2ZVJlc3BvbnNlKSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIFVwZGF0ZShyZXF1ZXN0OiBTZXJlbml0eS5TYXZlUmVxdWVzdDxJbnZvaWNlUGF5bWVudFJvdz4sIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuU2F2ZVJlc3BvbnNlKSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIERlbGV0ZShyZXF1ZXN0OiBTZXJlbml0eS5EZWxldGVSZXF1ZXN0LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5LkRlbGV0ZVJlc3BvbnNlKSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIFJldHJpZXZlKHJlcXVlc3Q6IFNlcmVuaXR5LlJldHJpZXZlUmVxdWVzdCwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5SZXRyaWV2ZVJlc3BvbnNlPEludm9pY2VQYXltZW50Um93PikgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBMaXN0KHJlcXVlc3Q6IFNlcmVuaXR5Lkxpc3RSZXF1ZXN0LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5Lkxpc3RSZXNwb25zZTxJbnZvaWNlUGF5bWVudFJvdz4pID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcblxuICAgICAgICBleHBvcnQgZGVjbGFyZSBjb25zdCBlbnVtIE1ldGhvZHMge1xuICAgICAgICAgICAgQ3JlYXRlID0gXCJTYWxlcy9JbnZvaWNlUGF5bWVudC9DcmVhdGVcIixcbiAgICAgICAgICAgIFVwZGF0ZSA9IFwiU2FsZXMvSW52b2ljZVBheW1lbnQvVXBkYXRlXCIsXG4gICAgICAgICAgICBEZWxldGUgPSBcIlNhbGVzL0ludm9pY2VQYXltZW50L0RlbGV0ZVwiLFxuICAgICAgICAgICAgUmV0cmlldmUgPSBcIlNhbGVzL0ludm9pY2VQYXltZW50L1JldHJpZXZlXCIsXG4gICAgICAgICAgICBMaXN0ID0gXCJTYWxlcy9JbnZvaWNlUGF5bWVudC9MaXN0XCJcbiAgICAgICAgfVxuXG4gICAgICAgIFtcbiAgICAgICAgICAgICdDcmVhdGUnLCBcbiAgICAgICAgICAgICdVcGRhdGUnLCBcbiAgICAgICAgICAgICdEZWxldGUnLCBcbiAgICAgICAgICAgICdSZXRyaWV2ZScsIFxuICAgICAgICAgICAgJ0xpc3QnXG4gICAgICAgIF0uZm9yRWFjaCh4ID0+IHtcbiAgICAgICAgICAgICg8YW55Pkludm9pY2VQYXltZW50U2VydmljZSlbeF0gPSBmdW5jdGlvbiAociwgcywgbykge1xuICAgICAgICAgICAgICAgIHJldHVybiBRLnNlcnZpY2VSZXF1ZXN0KGJhc2VVcmwgKyAnLycgKyB4LCByLCBzLCBvKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbiIsIm5hbWVzcGFjZSBJbmRvdGFsZW50LlNhbGVzIHtcbiAgICBleHBvcnQgaW50ZXJmYWNlIEludm9pY2VSb3cge1xuICAgICAgICBJZD86IG51bWJlcjtcbiAgICAgICAgTnVtYmVyPzogc3RyaW5nO1xuICAgICAgICBEZXNjcmlwdGlvbj86IHN0cmluZztcbiAgICAgICAgU2FsZXNHcm91cD86IHN0cmluZztcbiAgICAgICAgSW52b2ljZURhdGU/OiBzdHJpbmc7XG4gICAgICAgIFNhbGVzT3JkZXJJZD86IG51bWJlcjtcbiAgICAgICAgU3ViVG90YWw/OiBudW1iZXI7XG4gICAgICAgIERpc2NvdW50PzogbnVtYmVyO1xuICAgICAgICBCZWZvcmVUYXg/OiBudW1iZXI7XG4gICAgICAgIFRheEFtb3VudD86IG51bWJlcjtcbiAgICAgICAgVG90YWw/OiBudW1iZXI7XG4gICAgICAgIE90aGVyQ2hhcmdlPzogbnVtYmVyO1xuICAgICAgICBJbnNlcnREYXRlPzogc3RyaW5nO1xuICAgICAgICBJbnNlcnRVc2VySWQ/OiBudW1iZXI7XG4gICAgICAgIFVwZGF0ZURhdGU/OiBzdHJpbmc7XG4gICAgICAgIFVwZGF0ZVVzZXJJZD86IG51bWJlcjtcbiAgICAgICAgVGVuYW50SWQ/OiBudW1iZXI7XG4gICAgfVxuXG4gICAgZXhwb3J0IG5hbWVzcGFjZSBJbnZvaWNlUm93IHtcbiAgICAgICAgZXhwb3J0IGNvbnN0IGlkUHJvcGVydHkgPSAnSWQnO1xuICAgICAgICBleHBvcnQgY29uc3QgbmFtZVByb3BlcnR5ID0gJ051bWJlcic7XG4gICAgICAgIGV4cG9ydCBjb25zdCBsb2NhbFRleHRQcmVmaXggPSAnU2FsZXMuSW52b2ljZSc7XG4gICAgICAgIGV4cG9ydCBjb25zdCBkZWxldGVQZXJtaXNzaW9uID0gJ1NhbGVzOkludm9pY2UnO1xuICAgICAgICBleHBvcnQgY29uc3QgaW5zZXJ0UGVybWlzc2lvbiA9ICdTYWxlczpJbnZvaWNlJztcbiAgICAgICAgZXhwb3J0IGNvbnN0IHJlYWRQZXJtaXNzaW9uID0gJ1NhbGVzOkludm9pY2UnO1xuICAgICAgICBleHBvcnQgY29uc3QgdXBkYXRlUGVybWlzc2lvbiA9ICdTYWxlczpJbnZvaWNlJztcblxuICAgICAgICBleHBvcnQgZGVjbGFyZSBjb25zdCBlbnVtIEZpZWxkcyB7XG4gICAgICAgICAgICBJZCA9IFwiSWRcIixcbiAgICAgICAgICAgIE51bWJlciA9IFwiTnVtYmVyXCIsXG4gICAgICAgICAgICBEZXNjcmlwdGlvbiA9IFwiRGVzY3JpcHRpb25cIixcbiAgICAgICAgICAgIFNhbGVzR3JvdXAgPSBcIlNhbGVzR3JvdXBcIixcbiAgICAgICAgICAgIEludm9pY2VEYXRlID0gXCJJbnZvaWNlRGF0ZVwiLFxuICAgICAgICAgICAgU2FsZXNPcmRlcklkID0gXCJTYWxlc09yZGVySWRcIixcbiAgICAgICAgICAgIFN1YlRvdGFsID0gXCJTdWJUb3RhbFwiLFxuICAgICAgICAgICAgRGlzY291bnQgPSBcIkRpc2NvdW50XCIsXG4gICAgICAgICAgICBCZWZvcmVUYXggPSBcIkJlZm9yZVRheFwiLFxuICAgICAgICAgICAgVGF4QW1vdW50ID0gXCJUYXhBbW91bnRcIixcbiAgICAgICAgICAgIFRvdGFsID0gXCJUb3RhbFwiLFxuICAgICAgICAgICAgT3RoZXJDaGFyZ2UgPSBcIk90aGVyQ2hhcmdlXCIsXG4gICAgICAgICAgICBJbnNlcnREYXRlID0gXCJJbnNlcnREYXRlXCIsXG4gICAgICAgICAgICBJbnNlcnRVc2VySWQgPSBcIkluc2VydFVzZXJJZFwiLFxuICAgICAgICAgICAgVXBkYXRlRGF0ZSA9IFwiVXBkYXRlRGF0ZVwiLFxuICAgICAgICAgICAgVXBkYXRlVXNlcklkID0gXCJVcGRhdGVVc2VySWRcIixcbiAgICAgICAgICAgIFRlbmFudElkID0gXCJUZW5hbnRJZFwiXG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJuYW1lc3BhY2UgSW5kb3RhbGVudC5TYWxlcyB7XG4gICAgZXhwb3J0IG5hbWVzcGFjZSBJbnZvaWNlU2VydmljZSB7XG4gICAgICAgIGV4cG9ydCBjb25zdCBiYXNlVXJsID0gJ1NhbGVzL0ludm9pY2UnO1xuXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIENyZWF0ZShyZXF1ZXN0OiBTZXJlbml0eS5TYXZlUmVxdWVzdDxJbnZvaWNlUm93Piwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5TYXZlUmVzcG9uc2UpID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gVXBkYXRlKHJlcXVlc3Q6IFNlcmVuaXR5LlNhdmVSZXF1ZXN0PEludm9pY2VSb3c+LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5LlNhdmVSZXNwb25zZSkgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBEZWxldGUocmVxdWVzdDogU2VyZW5pdHkuRGVsZXRlUmVxdWVzdCwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5EZWxldGVSZXNwb25zZSkgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBSZXRyaWV2ZShyZXF1ZXN0OiBTZXJlbml0eS5SZXRyaWV2ZVJlcXVlc3QsIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuUmV0cmlldmVSZXNwb25zZTxJbnZvaWNlUm93PikgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBMaXN0KHJlcXVlc3Q6IFNlcmVuaXR5Lkxpc3RSZXF1ZXN0LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5Lkxpc3RSZXNwb25zZTxJbnZvaWNlUm93PikgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xuXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGNvbnN0IGVudW0gTWV0aG9kcyB7XG4gICAgICAgICAgICBDcmVhdGUgPSBcIlNhbGVzL0ludm9pY2UvQ3JlYXRlXCIsXG4gICAgICAgICAgICBVcGRhdGUgPSBcIlNhbGVzL0ludm9pY2UvVXBkYXRlXCIsXG4gICAgICAgICAgICBEZWxldGUgPSBcIlNhbGVzL0ludm9pY2UvRGVsZXRlXCIsXG4gICAgICAgICAgICBSZXRyaWV2ZSA9IFwiU2FsZXMvSW52b2ljZS9SZXRyaWV2ZVwiLFxuICAgICAgICAgICAgTGlzdCA9IFwiU2FsZXMvSW52b2ljZS9MaXN0XCJcbiAgICAgICAgfVxuXG4gICAgICAgIFtcbiAgICAgICAgICAgICdDcmVhdGUnLCBcbiAgICAgICAgICAgICdVcGRhdGUnLCBcbiAgICAgICAgICAgICdEZWxldGUnLCBcbiAgICAgICAgICAgICdSZXRyaWV2ZScsIFxuICAgICAgICAgICAgJ0xpc3QnXG4gICAgICAgIF0uZm9yRWFjaCh4ID0+IHtcbiAgICAgICAgICAgICg8YW55Pkludm9pY2VTZXJ2aWNlKVt4XSA9IGZ1bmN0aW9uIChyLCBzLCBvKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFEuc2VydmljZVJlcXVlc3QoYmFzZVVybCArICcvJyArIHgsIHIsIHMsIG8pO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuIiwiXHJcbm5hbWVzcGFjZSBJbmRvdGFsZW50LlNhbGVzIHtcclxuICAgIGV4cG9ydCBjbGFzcyBTYWxlc0NoYW5uZWxDb2x1bW5zIHtcclxuICAgICAgICBzdGF0aWMgY29sdW1uc0tleSA9ICdTYWxlcy5TYWxlc0NoYW5uZWwnO1xyXG4gICAgfVxyXG59IiwibmFtZXNwYWNlIEluZG90YWxlbnQuU2FsZXMge1xuICAgIGV4cG9ydCBpbnRlcmZhY2UgU2FsZXNDaGFubmVsRm9ybSB7XG4gICAgICAgIE5hbWU6IFNlcmVuaXR5LlN0cmluZ0VkaXRvcjtcbiAgICAgICAgRGVzY3JpcHRpb246IFNlcmVuaXR5LlN0cmluZ0VkaXRvcjtcbiAgICAgICAgSW5zZXJ0RGF0ZTogU2VyZW5pdHkuRGF0ZUVkaXRvcjtcbiAgICAgICAgSW5zZXJ0VXNlcklkOiBTZXJlbml0eS5JbnRlZ2VyRWRpdG9yO1xuICAgICAgICBVcGRhdGVEYXRlOiBTZXJlbml0eS5EYXRlRWRpdG9yO1xuICAgICAgICBVcGRhdGVVc2VySWQ6IFNlcmVuaXR5LkludGVnZXJFZGl0b3I7XG4gICAgICAgIFRlbmFudElkOiBTZXJlbml0eS5JbnRlZ2VyRWRpdG9yO1xuICAgIH1cblxuICAgIGV4cG9ydCBjbGFzcyBTYWxlc0NoYW5uZWxGb3JtIGV4dGVuZHMgU2VyZW5pdHkuUHJlZml4ZWRDb250ZXh0IHtcbiAgICAgICAgc3RhdGljIGZvcm1LZXkgPSAnU2FsZXMuU2FsZXNDaGFubmVsJztcbiAgICAgICAgcHJpdmF0ZSBzdGF0aWMgaW5pdDogYm9vbGVhbjtcblxuICAgICAgICBjb25zdHJ1Y3RvcihwcmVmaXg6IHN0cmluZykge1xuICAgICAgICAgICAgc3VwZXIocHJlZml4KTtcblxuICAgICAgICAgICAgaWYgKCFTYWxlc0NoYW5uZWxGb3JtLmluaXQpICB7XG4gICAgICAgICAgICAgICAgU2FsZXNDaGFubmVsRm9ybS5pbml0ID0gdHJ1ZTtcblxuICAgICAgICAgICAgICAgIHZhciBzID0gU2VyZW5pdHk7XG4gICAgICAgICAgICAgICAgdmFyIHcwID0gcy5TdHJpbmdFZGl0b3I7XG4gICAgICAgICAgICAgICAgdmFyIHcxID0gcy5EYXRlRWRpdG9yO1xuICAgICAgICAgICAgICAgIHZhciB3MiA9IHMuSW50ZWdlckVkaXRvcjtcblxuICAgICAgICAgICAgICAgIFEuaW5pdEZvcm1UeXBlKFNhbGVzQ2hhbm5lbEZvcm0sIFtcbiAgICAgICAgICAgICAgICAgICAgJ05hbWUnLCB3MCxcbiAgICAgICAgICAgICAgICAgICAgJ0Rlc2NyaXB0aW9uJywgdzAsXG4gICAgICAgICAgICAgICAgICAgICdJbnNlcnREYXRlJywgdzEsXG4gICAgICAgICAgICAgICAgICAgICdJbnNlcnRVc2VySWQnLCB3MixcbiAgICAgICAgICAgICAgICAgICAgJ1VwZGF0ZURhdGUnLCB3MSxcbiAgICAgICAgICAgICAgICAgICAgJ1VwZGF0ZVVzZXJJZCcsIHcyLFxuICAgICAgICAgICAgICAgICAgICAnVGVuYW50SWQnLCB3MlxuICAgICAgICAgICAgICAgIF0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuIiwibmFtZXNwYWNlIEluZG90YWxlbnQuU2FsZXMge1xuICAgIGV4cG9ydCBpbnRlcmZhY2UgU2FsZXNDaGFubmVsUm93IHtcbiAgICAgICAgSWQ/OiBudW1iZXI7XG4gICAgICAgIE5hbWU/OiBzdHJpbmc7XG4gICAgICAgIERlc2NyaXB0aW9uPzogc3RyaW5nO1xuICAgICAgICBJbnNlcnREYXRlPzogc3RyaW5nO1xuICAgICAgICBJbnNlcnRVc2VySWQ/OiBudW1iZXI7XG4gICAgICAgIFVwZGF0ZURhdGU/OiBzdHJpbmc7XG4gICAgICAgIFVwZGF0ZVVzZXJJZD86IG51bWJlcjtcbiAgICAgICAgVGVuYW50SWQ/OiBudW1iZXI7XG4gICAgfVxuXG4gICAgZXhwb3J0IG5hbWVzcGFjZSBTYWxlc0NoYW5uZWxSb3cge1xuICAgICAgICBleHBvcnQgY29uc3QgaWRQcm9wZXJ0eSA9ICdJZCc7XG4gICAgICAgIGV4cG9ydCBjb25zdCBuYW1lUHJvcGVydHkgPSAnTmFtZSc7XG4gICAgICAgIGV4cG9ydCBjb25zdCBsb2NhbFRleHRQcmVmaXggPSAnU2FsZXMuU2FsZXNDaGFubmVsJztcbiAgICAgICAgZXhwb3J0IGNvbnN0IGRlbGV0ZVBlcm1pc3Npb24gPSAnU2FsZXM6U2FsZXNDaGFubmVsJztcbiAgICAgICAgZXhwb3J0IGNvbnN0IGluc2VydFBlcm1pc3Npb24gPSAnU2FsZXM6U2FsZXNDaGFubmVsJztcbiAgICAgICAgZXhwb3J0IGNvbnN0IHJlYWRQZXJtaXNzaW9uID0gJ1NhbGVzOlNhbGVzQ2hhbm5lbCc7XG4gICAgICAgIGV4cG9ydCBjb25zdCB1cGRhdGVQZXJtaXNzaW9uID0gJ1NhbGVzOlNhbGVzQ2hhbm5lbCc7XG5cbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgY29uc3QgZW51bSBGaWVsZHMge1xuICAgICAgICAgICAgSWQgPSBcIklkXCIsXG4gICAgICAgICAgICBOYW1lID0gXCJOYW1lXCIsXG4gICAgICAgICAgICBEZXNjcmlwdGlvbiA9IFwiRGVzY3JpcHRpb25cIixcbiAgICAgICAgICAgIEluc2VydERhdGUgPSBcIkluc2VydERhdGVcIixcbiAgICAgICAgICAgIEluc2VydFVzZXJJZCA9IFwiSW5zZXJ0VXNlcklkXCIsXG4gICAgICAgICAgICBVcGRhdGVEYXRlID0gXCJVcGRhdGVEYXRlXCIsXG4gICAgICAgICAgICBVcGRhdGVVc2VySWQgPSBcIlVwZGF0ZVVzZXJJZFwiLFxuICAgICAgICAgICAgVGVuYW50SWQgPSBcIlRlbmFudElkXCJcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsIm5hbWVzcGFjZSBJbmRvdGFsZW50LlNhbGVzIHtcbiAgICBleHBvcnQgbmFtZXNwYWNlIFNhbGVzQ2hhbm5lbFNlcnZpY2Uge1xuICAgICAgICBleHBvcnQgY29uc3QgYmFzZVVybCA9ICdTYWxlcy9TYWxlc0NoYW5uZWwnO1xuXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIENyZWF0ZShyZXF1ZXN0OiBTZXJlbml0eS5TYXZlUmVxdWVzdDxTYWxlc0NoYW5uZWxSb3c+LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5LlNhdmVSZXNwb25zZSkgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBVcGRhdGUocmVxdWVzdDogU2VyZW5pdHkuU2F2ZVJlcXVlc3Q8U2FsZXNDaGFubmVsUm93Piwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5TYXZlUmVzcG9uc2UpID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gRGVsZXRlKHJlcXVlc3Q6IFNlcmVuaXR5LkRlbGV0ZVJlcXVlc3QsIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuRGVsZXRlUmVzcG9uc2UpID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gUmV0cmlldmUocmVxdWVzdDogU2VyZW5pdHkuUmV0cmlldmVSZXF1ZXN0LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5LlJldHJpZXZlUmVzcG9uc2U8U2FsZXNDaGFubmVsUm93PikgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBMaXN0KHJlcXVlc3Q6IFNlcmVuaXR5Lkxpc3RSZXF1ZXN0LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5Lkxpc3RSZXNwb25zZTxTYWxlc0NoYW5uZWxSb3c+KSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XG5cbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgY29uc3QgZW51bSBNZXRob2RzIHtcbiAgICAgICAgICAgIENyZWF0ZSA9IFwiU2FsZXMvU2FsZXNDaGFubmVsL0NyZWF0ZVwiLFxuICAgICAgICAgICAgVXBkYXRlID0gXCJTYWxlcy9TYWxlc0NoYW5uZWwvVXBkYXRlXCIsXG4gICAgICAgICAgICBEZWxldGUgPSBcIlNhbGVzL1NhbGVzQ2hhbm5lbC9EZWxldGVcIixcbiAgICAgICAgICAgIFJldHJpZXZlID0gXCJTYWxlcy9TYWxlc0NoYW5uZWwvUmV0cmlldmVcIixcbiAgICAgICAgICAgIExpc3QgPSBcIlNhbGVzL1NhbGVzQ2hhbm5lbC9MaXN0XCJcbiAgICAgICAgfVxuXG4gICAgICAgIFtcbiAgICAgICAgICAgICdDcmVhdGUnLCBcbiAgICAgICAgICAgICdVcGRhdGUnLCBcbiAgICAgICAgICAgICdEZWxldGUnLCBcbiAgICAgICAgICAgICdSZXRyaWV2ZScsIFxuICAgICAgICAgICAgJ0xpc3QnXG4gICAgICAgIF0uZm9yRWFjaCh4ID0+IHtcbiAgICAgICAgICAgICg8YW55PlNhbGVzQ2hhbm5lbFNlcnZpY2UpW3hdID0gZnVuY3Rpb24gKHIsIHMsIG8pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gUS5zZXJ2aWNlUmVxdWVzdChiYXNlVXJsICsgJy8nICsgeCwgciwgcywgbyk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9KTtcbiAgICB9XG59XG4iLCJcclxubmFtZXNwYWNlIEluZG90YWxlbnQuU2FsZXMge1xyXG4gICAgZXhwb3J0IGNsYXNzIFNhbGVzT3JkZXJDb2x1bW5zIHtcclxuICAgICAgICBzdGF0aWMgY29sdW1uc0tleSA9ICdTYWxlcy5TYWxlc09yZGVyJztcclxuICAgIH1cclxufSIsIlxyXG5uYW1lc3BhY2UgSW5kb3RhbGVudC5TYWxlcyB7XHJcbiAgICBleHBvcnQgY2xhc3MgU2FsZXNPcmRlckRldGFpbENvbHVtbnMge1xyXG4gICAgICAgIHN0YXRpYyBjb2x1bW5zS2V5ID0gJ1NhbGVzLlNhbGVzT3JkZXJEZXRhaWwnO1xyXG4gICAgfVxyXG59IiwibmFtZXNwYWNlIEluZG90YWxlbnQuU2FsZXMge1xuICAgIGV4cG9ydCBpbnRlcmZhY2UgU2FsZXNPcmRlckRldGFpbEZvcm0ge1xuICAgICAgICBTYWxlc09yZGVySWQ6IFNlcmVuaXR5LkludGVnZXJFZGl0b3I7XG4gICAgICAgIFByb2R1Y3RJZDogU2VyZW5pdHkuSW50ZWdlckVkaXRvcjtcbiAgICAgICAgUHJpY2U6IFNlcmVuaXR5LkRlY2ltYWxFZGl0b3I7XG4gICAgICAgIFF0eTogU2VyZW5pdHkuRGVjaW1hbEVkaXRvcjtcbiAgICAgICAgU3ViVG90YWw6IFNlcmVuaXR5LkRlY2ltYWxFZGl0b3I7XG4gICAgICAgIERpc2NvdW50OiBTZXJlbml0eS5EZWNpbWFsRWRpdG9yO1xuICAgICAgICBCZWZvcmVUYXg6IFNlcmVuaXR5LkRlY2ltYWxFZGl0b3I7XG4gICAgICAgIFRheFBlcmNlbnRhZ2U6IFNlcmVuaXR5LkRlY2ltYWxFZGl0b3I7XG4gICAgICAgIFRheEFtb3VudDogU2VyZW5pdHkuRGVjaW1hbEVkaXRvcjtcbiAgICAgICAgVG90YWw6IFNlcmVuaXR5LkRlY2ltYWxFZGl0b3I7XG4gICAgICAgIEluc2VydERhdGU6IFNlcmVuaXR5LkRhdGVFZGl0b3I7XG4gICAgICAgIEluc2VydFVzZXJJZDogU2VyZW5pdHkuSW50ZWdlckVkaXRvcjtcbiAgICAgICAgVXBkYXRlRGF0ZTogU2VyZW5pdHkuRGF0ZUVkaXRvcjtcbiAgICAgICAgVXBkYXRlVXNlcklkOiBTZXJlbml0eS5JbnRlZ2VyRWRpdG9yO1xuICAgICAgICBUZW5hbnRJZDogU2VyZW5pdHkuSW50ZWdlckVkaXRvcjtcbiAgICB9XG5cbiAgICBleHBvcnQgY2xhc3MgU2FsZXNPcmRlckRldGFpbEZvcm0gZXh0ZW5kcyBTZXJlbml0eS5QcmVmaXhlZENvbnRleHQge1xuICAgICAgICBzdGF0aWMgZm9ybUtleSA9ICdTYWxlcy5TYWxlc09yZGVyRGV0YWlsJztcbiAgICAgICAgcHJpdmF0ZSBzdGF0aWMgaW5pdDogYm9vbGVhbjtcblxuICAgICAgICBjb25zdHJ1Y3RvcihwcmVmaXg6IHN0cmluZykge1xuICAgICAgICAgICAgc3VwZXIocHJlZml4KTtcblxuICAgICAgICAgICAgaWYgKCFTYWxlc09yZGVyRGV0YWlsRm9ybS5pbml0KSAge1xuICAgICAgICAgICAgICAgIFNhbGVzT3JkZXJEZXRhaWxGb3JtLmluaXQgPSB0cnVlO1xuXG4gICAgICAgICAgICAgICAgdmFyIHMgPSBTZXJlbml0eTtcbiAgICAgICAgICAgICAgICB2YXIgdzAgPSBzLkludGVnZXJFZGl0b3I7XG4gICAgICAgICAgICAgICAgdmFyIHcxID0gcy5EZWNpbWFsRWRpdG9yO1xuICAgICAgICAgICAgICAgIHZhciB3MiA9IHMuRGF0ZUVkaXRvcjtcblxuICAgICAgICAgICAgICAgIFEuaW5pdEZvcm1UeXBlKFNhbGVzT3JkZXJEZXRhaWxGb3JtLCBbXG4gICAgICAgICAgICAgICAgICAgICdTYWxlc09yZGVySWQnLCB3MCxcbiAgICAgICAgICAgICAgICAgICAgJ1Byb2R1Y3RJZCcsIHcwLFxuICAgICAgICAgICAgICAgICAgICAnUHJpY2UnLCB3MSxcbiAgICAgICAgICAgICAgICAgICAgJ1F0eScsIHcxLFxuICAgICAgICAgICAgICAgICAgICAnU3ViVG90YWwnLCB3MSxcbiAgICAgICAgICAgICAgICAgICAgJ0Rpc2NvdW50JywgdzEsXG4gICAgICAgICAgICAgICAgICAgICdCZWZvcmVUYXgnLCB3MSxcbiAgICAgICAgICAgICAgICAgICAgJ1RheFBlcmNlbnRhZ2UnLCB3MSxcbiAgICAgICAgICAgICAgICAgICAgJ1RheEFtb3VudCcsIHcxLFxuICAgICAgICAgICAgICAgICAgICAnVG90YWwnLCB3MSxcbiAgICAgICAgICAgICAgICAgICAgJ0luc2VydERhdGUnLCB3MixcbiAgICAgICAgICAgICAgICAgICAgJ0luc2VydFVzZXJJZCcsIHcwLFxuICAgICAgICAgICAgICAgICAgICAnVXBkYXRlRGF0ZScsIHcyLFxuICAgICAgICAgICAgICAgICAgICAnVXBkYXRlVXNlcklkJywgdzAsXG4gICAgICAgICAgICAgICAgICAgICdUZW5hbnRJZCcsIHcwXG4gICAgICAgICAgICAgICAgXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJuYW1lc3BhY2UgSW5kb3RhbGVudC5TYWxlcyB7XG4gICAgZXhwb3J0IGludGVyZmFjZSBTYWxlc09yZGVyRGV0YWlsUm93IHtcbiAgICAgICAgSWQ/OiBudW1iZXI7XG4gICAgICAgIFNhbGVzT3JkZXJJZD86IG51bWJlcjtcbiAgICAgICAgUHJvZHVjdElkPzogbnVtYmVyO1xuICAgICAgICBQcmljZT86IG51bWJlcjtcbiAgICAgICAgUXR5PzogbnVtYmVyO1xuICAgICAgICBTdWJUb3RhbD86IG51bWJlcjtcbiAgICAgICAgRGlzY291bnQ/OiBudW1iZXI7XG4gICAgICAgIEJlZm9yZVRheD86IG51bWJlcjtcbiAgICAgICAgVGF4UGVyY2VudGFnZT86IG51bWJlcjtcbiAgICAgICAgVGF4QW1vdW50PzogbnVtYmVyO1xuICAgICAgICBUb3RhbD86IG51bWJlcjtcbiAgICAgICAgSW5zZXJ0RGF0ZT86IHN0cmluZztcbiAgICAgICAgSW5zZXJ0VXNlcklkPzogbnVtYmVyO1xuICAgICAgICBVcGRhdGVEYXRlPzogc3RyaW5nO1xuICAgICAgICBVcGRhdGVVc2VySWQ/OiBudW1iZXI7XG4gICAgICAgIFRlbmFudElkPzogbnVtYmVyO1xuICAgIH1cblxuICAgIGV4cG9ydCBuYW1lc3BhY2UgU2FsZXNPcmRlckRldGFpbFJvdyB7XG4gICAgICAgIGV4cG9ydCBjb25zdCBpZFByb3BlcnR5ID0gJ0lkJztcbiAgICAgICAgZXhwb3J0IGNvbnN0IGxvY2FsVGV4dFByZWZpeCA9ICdTYWxlcy5TYWxlc09yZGVyRGV0YWlsJztcbiAgICAgICAgZXhwb3J0IGNvbnN0IGRlbGV0ZVBlcm1pc3Npb24gPSAnU2FsZXM6U2FsZXNPcmRlcic7XG4gICAgICAgIGV4cG9ydCBjb25zdCBpbnNlcnRQZXJtaXNzaW9uID0gJ1NhbGVzOlNhbGVzT3JkZXInO1xuICAgICAgICBleHBvcnQgY29uc3QgcmVhZFBlcm1pc3Npb24gPSAnU2FsZXM6U2FsZXNPcmRlcic7XG4gICAgICAgIGV4cG9ydCBjb25zdCB1cGRhdGVQZXJtaXNzaW9uID0gJ1NhbGVzOlNhbGVzT3JkZXInO1xuXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGNvbnN0IGVudW0gRmllbGRzIHtcbiAgICAgICAgICAgIElkID0gXCJJZFwiLFxuICAgICAgICAgICAgU2FsZXNPcmRlcklkID0gXCJTYWxlc09yZGVySWRcIixcbiAgICAgICAgICAgIFByb2R1Y3RJZCA9IFwiUHJvZHVjdElkXCIsXG4gICAgICAgICAgICBQcmljZSA9IFwiUHJpY2VcIixcbiAgICAgICAgICAgIFF0eSA9IFwiUXR5XCIsXG4gICAgICAgICAgICBTdWJUb3RhbCA9IFwiU3ViVG90YWxcIixcbiAgICAgICAgICAgIERpc2NvdW50ID0gXCJEaXNjb3VudFwiLFxuICAgICAgICAgICAgQmVmb3JlVGF4ID0gXCJCZWZvcmVUYXhcIixcbiAgICAgICAgICAgIFRheFBlcmNlbnRhZ2UgPSBcIlRheFBlcmNlbnRhZ2VcIixcbiAgICAgICAgICAgIFRheEFtb3VudCA9IFwiVGF4QW1vdW50XCIsXG4gICAgICAgICAgICBUb3RhbCA9IFwiVG90YWxcIixcbiAgICAgICAgICAgIEluc2VydERhdGUgPSBcIkluc2VydERhdGVcIixcbiAgICAgICAgICAgIEluc2VydFVzZXJJZCA9IFwiSW5zZXJ0VXNlcklkXCIsXG4gICAgICAgICAgICBVcGRhdGVEYXRlID0gXCJVcGRhdGVEYXRlXCIsXG4gICAgICAgICAgICBVcGRhdGVVc2VySWQgPSBcIlVwZGF0ZVVzZXJJZFwiLFxuICAgICAgICAgICAgVGVuYW50SWQgPSBcIlRlbmFudElkXCJcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsIm5hbWVzcGFjZSBJbmRvdGFsZW50LlNhbGVzIHtcbiAgICBleHBvcnQgbmFtZXNwYWNlIFNhbGVzT3JkZXJEZXRhaWxTZXJ2aWNlIHtcbiAgICAgICAgZXhwb3J0IGNvbnN0IGJhc2VVcmwgPSAnU2FsZXMvU2FsZXNPcmRlckRldGFpbCc7XG5cbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gQ3JlYXRlKHJlcXVlc3Q6IFNlcmVuaXR5LlNhdmVSZXF1ZXN0PFNhbGVzT3JkZXJEZXRhaWxSb3c+LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5LlNhdmVSZXNwb25zZSkgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBVcGRhdGUocmVxdWVzdDogU2VyZW5pdHkuU2F2ZVJlcXVlc3Q8U2FsZXNPcmRlckRldGFpbFJvdz4sIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuU2F2ZVJlc3BvbnNlKSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIERlbGV0ZShyZXF1ZXN0OiBTZXJlbml0eS5EZWxldGVSZXF1ZXN0LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5LkRlbGV0ZVJlc3BvbnNlKSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIFJldHJpZXZlKHJlcXVlc3Q6IFNlcmVuaXR5LlJldHJpZXZlUmVxdWVzdCwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5SZXRyaWV2ZVJlc3BvbnNlPFNhbGVzT3JkZXJEZXRhaWxSb3c+KSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIExpc3QocmVxdWVzdDogU2VyZW5pdHkuTGlzdFJlcXVlc3QsIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuTGlzdFJlc3BvbnNlPFNhbGVzT3JkZXJEZXRhaWxSb3c+KSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XG5cbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgY29uc3QgZW51bSBNZXRob2RzIHtcbiAgICAgICAgICAgIENyZWF0ZSA9IFwiU2FsZXMvU2FsZXNPcmRlckRldGFpbC9DcmVhdGVcIixcbiAgICAgICAgICAgIFVwZGF0ZSA9IFwiU2FsZXMvU2FsZXNPcmRlckRldGFpbC9VcGRhdGVcIixcbiAgICAgICAgICAgIERlbGV0ZSA9IFwiU2FsZXMvU2FsZXNPcmRlckRldGFpbC9EZWxldGVcIixcbiAgICAgICAgICAgIFJldHJpZXZlID0gXCJTYWxlcy9TYWxlc09yZGVyRGV0YWlsL1JldHJpZXZlXCIsXG4gICAgICAgICAgICBMaXN0ID0gXCJTYWxlcy9TYWxlc09yZGVyRGV0YWlsL0xpc3RcIlxuICAgICAgICB9XG5cbiAgICAgICAgW1xuICAgICAgICAgICAgJ0NyZWF0ZScsIFxuICAgICAgICAgICAgJ1VwZGF0ZScsIFxuICAgICAgICAgICAgJ0RlbGV0ZScsIFxuICAgICAgICAgICAgJ1JldHJpZXZlJywgXG4gICAgICAgICAgICAnTGlzdCdcbiAgICAgICAgXS5mb3JFYWNoKHggPT4ge1xuICAgICAgICAgICAgKDxhbnk+U2FsZXNPcmRlckRldGFpbFNlcnZpY2UpW3hdID0gZnVuY3Rpb24gKHIsIHMsIG8pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gUS5zZXJ2aWNlUmVxdWVzdChiYXNlVXJsICsgJy8nICsgeCwgciwgcywgbyk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9KTtcbiAgICB9XG59XG4iLCJuYW1lc3BhY2UgSW5kb3RhbGVudC5TYWxlcyB7XG4gICAgZXhwb3J0IGludGVyZmFjZSBTYWxlc09yZGVyRm9ybSB7XG4gICAgICAgIE51bWJlcjogU2VyZW5pdHkuU3RyaW5nRWRpdG9yO1xuICAgICAgICBEZXNjcmlwdGlvbjogU2VyZW5pdHkuU3RyaW5nRWRpdG9yO1xuICAgICAgICBTYWxlc0dyb3VwOiBTZXJlbml0eS5TdHJpbmdFZGl0b3I7XG4gICAgICAgIE9yZGVyRGF0ZTogU2VyZW5pdHkuRGF0ZUVkaXRvcjtcbiAgICAgICAgQ3VzdG9tZXJJZDogU2VyZW5pdHkuSW50ZWdlckVkaXRvcjtcbiAgICAgICAgU2FsZXNDaGFubmVsSWQ6IFNlcmVuaXR5LkludGVnZXJFZGl0b3I7XG4gICAgICAgIFN1YlRvdGFsOiBTZXJlbml0eS5EZWNpbWFsRWRpdG9yO1xuICAgICAgICBEaXNjb3VudDogU2VyZW5pdHkuRGVjaW1hbEVkaXRvcjtcbiAgICAgICAgQmVmb3JlVGF4OiBTZXJlbml0eS5EZWNpbWFsRWRpdG9yO1xuICAgICAgICBUYXhBbW91bnQ6IFNlcmVuaXR5LkRlY2ltYWxFZGl0b3I7XG4gICAgICAgIFRvdGFsOiBTZXJlbml0eS5EZWNpbWFsRWRpdG9yO1xuICAgICAgICBPdGhlckNoYXJnZTogU2VyZW5pdHkuRGVjaW1hbEVkaXRvcjtcbiAgICAgICAgSW5zZXJ0RGF0ZTogU2VyZW5pdHkuRGF0ZUVkaXRvcjtcbiAgICAgICAgSW5zZXJ0VXNlcklkOiBTZXJlbml0eS5JbnRlZ2VyRWRpdG9yO1xuICAgICAgICBVcGRhdGVEYXRlOiBTZXJlbml0eS5EYXRlRWRpdG9yO1xuICAgICAgICBVcGRhdGVVc2VySWQ6IFNlcmVuaXR5LkludGVnZXJFZGl0b3I7XG4gICAgICAgIFRlbmFudElkOiBTZXJlbml0eS5JbnRlZ2VyRWRpdG9yO1xuICAgIH1cblxuICAgIGV4cG9ydCBjbGFzcyBTYWxlc09yZGVyRm9ybSBleHRlbmRzIFNlcmVuaXR5LlByZWZpeGVkQ29udGV4dCB7XG4gICAgICAgIHN0YXRpYyBmb3JtS2V5ID0gJ1NhbGVzLlNhbGVzT3JkZXInO1xuICAgICAgICBwcml2YXRlIHN0YXRpYyBpbml0OiBib29sZWFuO1xuXG4gICAgICAgIGNvbnN0cnVjdG9yKHByZWZpeDogc3RyaW5nKSB7XG4gICAgICAgICAgICBzdXBlcihwcmVmaXgpO1xuXG4gICAgICAgICAgICBpZiAoIVNhbGVzT3JkZXJGb3JtLmluaXQpICB7XG4gICAgICAgICAgICAgICAgU2FsZXNPcmRlckZvcm0uaW5pdCA9IHRydWU7XG5cbiAgICAgICAgICAgICAgICB2YXIgcyA9IFNlcmVuaXR5O1xuICAgICAgICAgICAgICAgIHZhciB3MCA9IHMuU3RyaW5nRWRpdG9yO1xuICAgICAgICAgICAgICAgIHZhciB3MSA9IHMuRGF0ZUVkaXRvcjtcbiAgICAgICAgICAgICAgICB2YXIgdzIgPSBzLkludGVnZXJFZGl0b3I7XG4gICAgICAgICAgICAgICAgdmFyIHczID0gcy5EZWNpbWFsRWRpdG9yO1xuXG4gICAgICAgICAgICAgICAgUS5pbml0Rm9ybVR5cGUoU2FsZXNPcmRlckZvcm0sIFtcbiAgICAgICAgICAgICAgICAgICAgJ051bWJlcicsIHcwLFxuICAgICAgICAgICAgICAgICAgICAnRGVzY3JpcHRpb24nLCB3MCxcbiAgICAgICAgICAgICAgICAgICAgJ1NhbGVzR3JvdXAnLCB3MCxcbiAgICAgICAgICAgICAgICAgICAgJ09yZGVyRGF0ZScsIHcxLFxuICAgICAgICAgICAgICAgICAgICAnQ3VzdG9tZXJJZCcsIHcyLFxuICAgICAgICAgICAgICAgICAgICAnU2FsZXNDaGFubmVsSWQnLCB3MixcbiAgICAgICAgICAgICAgICAgICAgJ1N1YlRvdGFsJywgdzMsXG4gICAgICAgICAgICAgICAgICAgICdEaXNjb3VudCcsIHczLFxuICAgICAgICAgICAgICAgICAgICAnQmVmb3JlVGF4JywgdzMsXG4gICAgICAgICAgICAgICAgICAgICdUYXhBbW91bnQnLCB3MyxcbiAgICAgICAgICAgICAgICAgICAgJ1RvdGFsJywgdzMsXG4gICAgICAgICAgICAgICAgICAgICdPdGhlckNoYXJnZScsIHczLFxuICAgICAgICAgICAgICAgICAgICAnSW5zZXJ0RGF0ZScsIHcxLFxuICAgICAgICAgICAgICAgICAgICAnSW5zZXJ0VXNlcklkJywgdzIsXG4gICAgICAgICAgICAgICAgICAgICdVcGRhdGVEYXRlJywgdzEsXG4gICAgICAgICAgICAgICAgICAgICdVcGRhdGVVc2VySWQnLCB3MixcbiAgICAgICAgICAgICAgICAgICAgJ1RlbmFudElkJywgdzJcbiAgICAgICAgICAgICAgICBdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbiIsIm5hbWVzcGFjZSBJbmRvdGFsZW50LlNhbGVzIHtcbiAgICBleHBvcnQgaW50ZXJmYWNlIFNhbGVzT3JkZXJSb3cge1xuICAgICAgICBJZD86IG51bWJlcjtcbiAgICAgICAgTnVtYmVyPzogc3RyaW5nO1xuICAgICAgICBEZXNjcmlwdGlvbj86IHN0cmluZztcbiAgICAgICAgU2FsZXNHcm91cD86IHN0cmluZztcbiAgICAgICAgT3JkZXJEYXRlPzogc3RyaW5nO1xuICAgICAgICBDdXN0b21lcklkPzogbnVtYmVyO1xuICAgICAgICBTYWxlc0NoYW5uZWxJZD86IG51bWJlcjtcbiAgICAgICAgU3ViVG90YWw/OiBudW1iZXI7XG4gICAgICAgIERpc2NvdW50PzogbnVtYmVyO1xuICAgICAgICBCZWZvcmVUYXg/OiBudW1iZXI7XG4gICAgICAgIFRheEFtb3VudD86IG51bWJlcjtcbiAgICAgICAgVG90YWw/OiBudW1iZXI7XG4gICAgICAgIE90aGVyQ2hhcmdlPzogbnVtYmVyO1xuICAgICAgICBJbnNlcnREYXRlPzogc3RyaW5nO1xuICAgICAgICBJbnNlcnRVc2VySWQ/OiBudW1iZXI7XG4gICAgICAgIFVwZGF0ZURhdGU/OiBzdHJpbmc7XG4gICAgICAgIFVwZGF0ZVVzZXJJZD86IG51bWJlcjtcbiAgICAgICAgVGVuYW50SWQ/OiBudW1iZXI7XG4gICAgfVxuXG4gICAgZXhwb3J0IG5hbWVzcGFjZSBTYWxlc09yZGVyUm93IHtcbiAgICAgICAgZXhwb3J0IGNvbnN0IGlkUHJvcGVydHkgPSAnSWQnO1xuICAgICAgICBleHBvcnQgY29uc3QgbmFtZVByb3BlcnR5ID0gJ051bWJlcic7XG4gICAgICAgIGV4cG9ydCBjb25zdCBsb2NhbFRleHRQcmVmaXggPSAnU2FsZXMuU2FsZXNPcmRlcic7XG4gICAgICAgIGV4cG9ydCBjb25zdCBkZWxldGVQZXJtaXNzaW9uID0gJ1NhbGVzOlNhbGVzT3JkZXInO1xuICAgICAgICBleHBvcnQgY29uc3QgaW5zZXJ0UGVybWlzc2lvbiA9ICdTYWxlczpTYWxlc09yZGVyJztcbiAgICAgICAgZXhwb3J0IGNvbnN0IHJlYWRQZXJtaXNzaW9uID0gJ1NhbGVzOlNhbGVzT3JkZXInO1xuICAgICAgICBleHBvcnQgY29uc3QgdXBkYXRlUGVybWlzc2lvbiA9ICdTYWxlczpTYWxlc09yZGVyJztcblxuICAgICAgICBleHBvcnQgZGVjbGFyZSBjb25zdCBlbnVtIEZpZWxkcyB7XG4gICAgICAgICAgICBJZCA9IFwiSWRcIixcbiAgICAgICAgICAgIE51bWJlciA9IFwiTnVtYmVyXCIsXG4gICAgICAgICAgICBEZXNjcmlwdGlvbiA9IFwiRGVzY3JpcHRpb25cIixcbiAgICAgICAgICAgIFNhbGVzR3JvdXAgPSBcIlNhbGVzR3JvdXBcIixcbiAgICAgICAgICAgIE9yZGVyRGF0ZSA9IFwiT3JkZXJEYXRlXCIsXG4gICAgICAgICAgICBDdXN0b21lcklkID0gXCJDdXN0b21lcklkXCIsXG4gICAgICAgICAgICBTYWxlc0NoYW5uZWxJZCA9IFwiU2FsZXNDaGFubmVsSWRcIixcbiAgICAgICAgICAgIFN1YlRvdGFsID0gXCJTdWJUb3RhbFwiLFxuICAgICAgICAgICAgRGlzY291bnQgPSBcIkRpc2NvdW50XCIsXG4gICAgICAgICAgICBCZWZvcmVUYXggPSBcIkJlZm9yZVRheFwiLFxuICAgICAgICAgICAgVGF4QW1vdW50ID0gXCJUYXhBbW91bnRcIixcbiAgICAgICAgICAgIFRvdGFsID0gXCJUb3RhbFwiLFxuICAgICAgICAgICAgT3RoZXJDaGFyZ2UgPSBcIk90aGVyQ2hhcmdlXCIsXG4gICAgICAgICAgICBJbnNlcnREYXRlID0gXCJJbnNlcnREYXRlXCIsXG4gICAgICAgICAgICBJbnNlcnRVc2VySWQgPSBcIkluc2VydFVzZXJJZFwiLFxuICAgICAgICAgICAgVXBkYXRlRGF0ZSA9IFwiVXBkYXRlRGF0ZVwiLFxuICAgICAgICAgICAgVXBkYXRlVXNlcklkID0gXCJVcGRhdGVVc2VySWRcIixcbiAgICAgICAgICAgIFRlbmFudElkID0gXCJUZW5hbnRJZFwiXG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJuYW1lc3BhY2UgSW5kb3RhbGVudC5TYWxlcyB7XG4gICAgZXhwb3J0IG5hbWVzcGFjZSBTYWxlc09yZGVyU2VydmljZSB7XG4gICAgICAgIGV4cG9ydCBjb25zdCBiYXNlVXJsID0gJ1NhbGVzL1NhbGVzT3JkZXInO1xuXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIENyZWF0ZShyZXF1ZXN0OiBTZXJlbml0eS5TYXZlUmVxdWVzdDxTYWxlc09yZGVyUm93Piwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5TYXZlUmVzcG9uc2UpID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gVXBkYXRlKHJlcXVlc3Q6IFNlcmVuaXR5LlNhdmVSZXF1ZXN0PFNhbGVzT3JkZXJSb3c+LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5LlNhdmVSZXNwb25zZSkgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBEZWxldGUocmVxdWVzdDogU2VyZW5pdHkuRGVsZXRlUmVxdWVzdCwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5EZWxldGVSZXNwb25zZSkgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBSZXRyaWV2ZShyZXF1ZXN0OiBTZXJlbml0eS5SZXRyaWV2ZVJlcXVlc3QsIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuUmV0cmlldmVSZXNwb25zZTxTYWxlc09yZGVyUm93PikgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBMaXN0KHJlcXVlc3Q6IFNlcmVuaXR5Lkxpc3RSZXF1ZXN0LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5Lkxpc3RSZXNwb25zZTxTYWxlc09yZGVyUm93PikgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xuXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGNvbnN0IGVudW0gTWV0aG9kcyB7XG4gICAgICAgICAgICBDcmVhdGUgPSBcIlNhbGVzL1NhbGVzT3JkZXIvQ3JlYXRlXCIsXG4gICAgICAgICAgICBVcGRhdGUgPSBcIlNhbGVzL1NhbGVzT3JkZXIvVXBkYXRlXCIsXG4gICAgICAgICAgICBEZWxldGUgPSBcIlNhbGVzL1NhbGVzT3JkZXIvRGVsZXRlXCIsXG4gICAgICAgICAgICBSZXRyaWV2ZSA9IFwiU2FsZXMvU2FsZXNPcmRlci9SZXRyaWV2ZVwiLFxuICAgICAgICAgICAgTGlzdCA9IFwiU2FsZXMvU2FsZXNPcmRlci9MaXN0XCJcbiAgICAgICAgfVxuXG4gICAgICAgIFtcbiAgICAgICAgICAgICdDcmVhdGUnLCBcbiAgICAgICAgICAgICdVcGRhdGUnLCBcbiAgICAgICAgICAgICdEZWxldGUnLCBcbiAgICAgICAgICAgICdSZXRyaWV2ZScsIFxuICAgICAgICAgICAgJ0xpc3QnXG4gICAgICAgIF0uZm9yRWFjaCh4ID0+IHtcbiAgICAgICAgICAgICg8YW55PlNhbGVzT3JkZXJTZXJ2aWNlKVt4XSA9IGZ1bmN0aW9uIChyLCBzLCBvKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFEuc2VydmljZVJlcXVlc3QoYmFzZVVybCArICcvJyArIHgsIHIsIHMsIG8pO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuIiwibmFtZXNwYWNlIEluZG90YWxlbnQge1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBTY3JpcHRVc2VyRGVmaW5pdGlvbiB7XHJcbiAgICAgICAgVXNlcm5hbWU/OiBzdHJpbmc7XHJcbiAgICAgICAgRGlzcGxheU5hbWU/OiBzdHJpbmc7XHJcbiAgICAgICAgSXNBZG1pbj86IGJvb2xlYW47XHJcbiAgICAgICAgUGVybWlzc2lvbnM/OiB7IFtrZXk6IHN0cmluZ106IGJvb2xlYW4gfTtcclxuICAgIH1cclxufVxyXG5cclxuIiwiXHJcbm5hbWVzcGFjZSBJbmRvdGFsZW50LlNldHRpbmdzIHtcclxuICAgIGV4cG9ydCBjbGFzcyBDYXNoQmFua0NvbHVtbnMge1xyXG4gICAgICAgIHN0YXRpYyBjb2x1bW5zS2V5ID0gJ1NldHRpbmdzLkNhc2hCYW5rJztcclxuICAgIH1cclxufSIsIm5hbWVzcGFjZSBJbmRvdGFsZW50LlNldHRpbmdzIHtcbiAgICBleHBvcnQgaW50ZXJmYWNlIENhc2hCYW5rRm9ybSB7XG4gICAgICAgIE5hbWU6IFNlcmVuaXR5LlN0cmluZ0VkaXRvcjtcbiAgICAgICAgRGVzY3JpcHRpb246IFNlcmVuaXR5LlN0cmluZ0VkaXRvcjtcbiAgICAgICAgQWNjb3VudE51bWJlcjogU2VyZW5pdHkuU3RyaW5nRWRpdG9yO1xuICAgICAgICBTdHJlZXQ6IFNlcmVuaXR5LlN0cmluZ0VkaXRvcjtcbiAgICAgICAgQ2l0eTogU2VyZW5pdHkuU3RyaW5nRWRpdG9yO1xuICAgICAgICBTdGF0ZTogU2VyZW5pdHkuU3RyaW5nRWRpdG9yO1xuICAgICAgICBaaXBDb2RlOiBTZXJlbml0eS5TdHJpbmdFZGl0b3I7XG4gICAgICAgIFBob25lOiBTZXJlbml0eS5TdHJpbmdFZGl0b3I7XG4gICAgICAgIEVtYWlsOiBTZXJlbml0eS5TdHJpbmdFZGl0b3I7XG4gICAgICAgIEluc2VydERhdGU6IFNlcmVuaXR5LkRhdGVFZGl0b3I7XG4gICAgICAgIEluc2VydFVzZXJJZDogU2VyZW5pdHkuSW50ZWdlckVkaXRvcjtcbiAgICAgICAgVXBkYXRlRGF0ZTogU2VyZW5pdHkuRGF0ZUVkaXRvcjtcbiAgICAgICAgVXBkYXRlVXNlcklkOiBTZXJlbml0eS5JbnRlZ2VyRWRpdG9yO1xuICAgICAgICBUZW5hbnRJZDogU2VyZW5pdHkuSW50ZWdlckVkaXRvcjtcbiAgICB9XG5cbiAgICBleHBvcnQgY2xhc3MgQ2FzaEJhbmtGb3JtIGV4dGVuZHMgU2VyZW5pdHkuUHJlZml4ZWRDb250ZXh0IHtcbiAgICAgICAgc3RhdGljIGZvcm1LZXkgPSAnU2V0dGluZ3MuQ2FzaEJhbmsnO1xuICAgICAgICBwcml2YXRlIHN0YXRpYyBpbml0OiBib29sZWFuO1xuXG4gICAgICAgIGNvbnN0cnVjdG9yKHByZWZpeDogc3RyaW5nKSB7XG4gICAgICAgICAgICBzdXBlcihwcmVmaXgpO1xuXG4gICAgICAgICAgICBpZiAoIUNhc2hCYW5rRm9ybS5pbml0KSAge1xuICAgICAgICAgICAgICAgIENhc2hCYW5rRm9ybS5pbml0ID0gdHJ1ZTtcblxuICAgICAgICAgICAgICAgIHZhciBzID0gU2VyZW5pdHk7XG4gICAgICAgICAgICAgICAgdmFyIHcwID0gcy5TdHJpbmdFZGl0b3I7XG4gICAgICAgICAgICAgICAgdmFyIHcxID0gcy5EYXRlRWRpdG9yO1xuICAgICAgICAgICAgICAgIHZhciB3MiA9IHMuSW50ZWdlckVkaXRvcjtcblxuICAgICAgICAgICAgICAgIFEuaW5pdEZvcm1UeXBlKENhc2hCYW5rRm9ybSwgW1xuICAgICAgICAgICAgICAgICAgICAnTmFtZScsIHcwLFxuICAgICAgICAgICAgICAgICAgICAnRGVzY3JpcHRpb24nLCB3MCxcbiAgICAgICAgICAgICAgICAgICAgJ0FjY291bnROdW1iZXInLCB3MCxcbiAgICAgICAgICAgICAgICAgICAgJ1N0cmVldCcsIHcwLFxuICAgICAgICAgICAgICAgICAgICAnQ2l0eScsIHcwLFxuICAgICAgICAgICAgICAgICAgICAnU3RhdGUnLCB3MCxcbiAgICAgICAgICAgICAgICAgICAgJ1ppcENvZGUnLCB3MCxcbiAgICAgICAgICAgICAgICAgICAgJ1Bob25lJywgdzAsXG4gICAgICAgICAgICAgICAgICAgICdFbWFpbCcsIHcwLFxuICAgICAgICAgICAgICAgICAgICAnSW5zZXJ0RGF0ZScsIHcxLFxuICAgICAgICAgICAgICAgICAgICAnSW5zZXJ0VXNlcklkJywgdzIsXG4gICAgICAgICAgICAgICAgICAgICdVcGRhdGVEYXRlJywgdzEsXG4gICAgICAgICAgICAgICAgICAgICdVcGRhdGVVc2VySWQnLCB3MixcbiAgICAgICAgICAgICAgICAgICAgJ1RlbmFudElkJywgdzJcbiAgICAgICAgICAgICAgICBdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbiIsIm5hbWVzcGFjZSBJbmRvdGFsZW50LlNldHRpbmdzIHtcbiAgICBleHBvcnQgaW50ZXJmYWNlIENhc2hCYW5rUm93IHtcbiAgICAgICAgSWQ/OiBudW1iZXI7XG4gICAgICAgIE5hbWU/OiBzdHJpbmc7XG4gICAgICAgIERlc2NyaXB0aW9uPzogc3RyaW5nO1xuICAgICAgICBBY2NvdW50TnVtYmVyPzogc3RyaW5nO1xuICAgICAgICBTdHJlZXQ/OiBzdHJpbmc7XG4gICAgICAgIENpdHk/OiBzdHJpbmc7XG4gICAgICAgIFN0YXRlPzogc3RyaW5nO1xuICAgICAgICBaaXBDb2RlPzogc3RyaW5nO1xuICAgICAgICBQaG9uZT86IHN0cmluZztcbiAgICAgICAgRW1haWw/OiBzdHJpbmc7XG4gICAgICAgIEluc2VydERhdGU/OiBzdHJpbmc7XG4gICAgICAgIEluc2VydFVzZXJJZD86IG51bWJlcjtcbiAgICAgICAgVXBkYXRlRGF0ZT86IHN0cmluZztcbiAgICAgICAgVXBkYXRlVXNlcklkPzogbnVtYmVyO1xuICAgICAgICBUZW5hbnRJZD86IG51bWJlcjtcbiAgICB9XG5cbiAgICBleHBvcnQgbmFtZXNwYWNlIENhc2hCYW5rUm93IHtcbiAgICAgICAgZXhwb3J0IGNvbnN0IGlkUHJvcGVydHkgPSAnSWQnO1xuICAgICAgICBleHBvcnQgY29uc3QgbmFtZVByb3BlcnR5ID0gJ05hbWUnO1xuICAgICAgICBleHBvcnQgY29uc3QgbG9jYWxUZXh0UHJlZml4ID0gJ1NldHRpbmdzLkNhc2hCYW5rJztcbiAgICAgICAgZXhwb3J0IGNvbnN0IGRlbGV0ZVBlcm1pc3Npb24gPSAnQWRtaW5pc3RyYXRpb246R2VuZXJhbCc7XG4gICAgICAgIGV4cG9ydCBjb25zdCBpbnNlcnRQZXJtaXNzaW9uID0gJ0FkbWluaXN0cmF0aW9uOkdlbmVyYWwnO1xuICAgICAgICBleHBvcnQgY29uc3QgcmVhZFBlcm1pc3Npb24gPSAnQWRtaW5pc3RyYXRpb246R2VuZXJhbCc7XG4gICAgICAgIGV4cG9ydCBjb25zdCB1cGRhdGVQZXJtaXNzaW9uID0gJ0FkbWluaXN0cmF0aW9uOkdlbmVyYWwnO1xuXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGNvbnN0IGVudW0gRmllbGRzIHtcbiAgICAgICAgICAgIElkID0gXCJJZFwiLFxuICAgICAgICAgICAgTmFtZSA9IFwiTmFtZVwiLFxuICAgICAgICAgICAgRGVzY3JpcHRpb24gPSBcIkRlc2NyaXB0aW9uXCIsXG4gICAgICAgICAgICBBY2NvdW50TnVtYmVyID0gXCJBY2NvdW50TnVtYmVyXCIsXG4gICAgICAgICAgICBTdHJlZXQgPSBcIlN0cmVldFwiLFxuICAgICAgICAgICAgQ2l0eSA9IFwiQ2l0eVwiLFxuICAgICAgICAgICAgU3RhdGUgPSBcIlN0YXRlXCIsXG4gICAgICAgICAgICBaaXBDb2RlID0gXCJaaXBDb2RlXCIsXG4gICAgICAgICAgICBQaG9uZSA9IFwiUGhvbmVcIixcbiAgICAgICAgICAgIEVtYWlsID0gXCJFbWFpbFwiLFxuICAgICAgICAgICAgSW5zZXJ0RGF0ZSA9IFwiSW5zZXJ0RGF0ZVwiLFxuICAgICAgICAgICAgSW5zZXJ0VXNlcklkID0gXCJJbnNlcnRVc2VySWRcIixcbiAgICAgICAgICAgIFVwZGF0ZURhdGUgPSBcIlVwZGF0ZURhdGVcIixcbiAgICAgICAgICAgIFVwZGF0ZVVzZXJJZCA9IFwiVXBkYXRlVXNlcklkXCIsXG4gICAgICAgICAgICBUZW5hbnRJZCA9IFwiVGVuYW50SWRcIlxuICAgICAgICB9XG4gICAgfVxufVxuIiwibmFtZXNwYWNlIEluZG90YWxlbnQuU2V0dGluZ3Mge1xuICAgIGV4cG9ydCBuYW1lc3BhY2UgQ2FzaEJhbmtTZXJ2aWNlIHtcbiAgICAgICAgZXhwb3J0IGNvbnN0IGJhc2VVcmwgPSAnU2V0dGluZ3MvQ2FzaEJhbmsnO1xuXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIENyZWF0ZShyZXF1ZXN0OiBTZXJlbml0eS5TYXZlUmVxdWVzdDxDYXNoQmFua1Jvdz4sIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuU2F2ZVJlc3BvbnNlKSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIFVwZGF0ZShyZXF1ZXN0OiBTZXJlbml0eS5TYXZlUmVxdWVzdDxDYXNoQmFua1Jvdz4sIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuU2F2ZVJlc3BvbnNlKSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIERlbGV0ZShyZXF1ZXN0OiBTZXJlbml0eS5EZWxldGVSZXF1ZXN0LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5LkRlbGV0ZVJlc3BvbnNlKSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIFJldHJpZXZlKHJlcXVlc3Q6IFNlcmVuaXR5LlJldHJpZXZlUmVxdWVzdCwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5SZXRyaWV2ZVJlc3BvbnNlPENhc2hCYW5rUm93PikgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBMaXN0KHJlcXVlc3Q6IFNlcmVuaXR5Lkxpc3RSZXF1ZXN0LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5Lkxpc3RSZXNwb25zZTxDYXNoQmFua1Jvdz4pID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcblxuICAgICAgICBleHBvcnQgZGVjbGFyZSBjb25zdCBlbnVtIE1ldGhvZHMge1xuICAgICAgICAgICAgQ3JlYXRlID0gXCJTZXR0aW5ncy9DYXNoQmFuay9DcmVhdGVcIixcbiAgICAgICAgICAgIFVwZGF0ZSA9IFwiU2V0dGluZ3MvQ2FzaEJhbmsvVXBkYXRlXCIsXG4gICAgICAgICAgICBEZWxldGUgPSBcIlNldHRpbmdzL0Nhc2hCYW5rL0RlbGV0ZVwiLFxuICAgICAgICAgICAgUmV0cmlldmUgPSBcIlNldHRpbmdzL0Nhc2hCYW5rL1JldHJpZXZlXCIsXG4gICAgICAgICAgICBMaXN0ID0gXCJTZXR0aW5ncy9DYXNoQmFuay9MaXN0XCJcbiAgICAgICAgfVxuXG4gICAgICAgIFtcbiAgICAgICAgICAgICdDcmVhdGUnLCBcbiAgICAgICAgICAgICdVcGRhdGUnLCBcbiAgICAgICAgICAgICdEZWxldGUnLCBcbiAgICAgICAgICAgICdSZXRyaWV2ZScsIFxuICAgICAgICAgICAgJ0xpc3QnXG4gICAgICAgIF0uZm9yRWFjaCh4ID0+IHtcbiAgICAgICAgICAgICg8YW55PkNhc2hCYW5rU2VydmljZSlbeF0gPSBmdW5jdGlvbiAociwgcywgbykge1xuICAgICAgICAgICAgICAgIHJldHVybiBRLnNlcnZpY2VSZXF1ZXN0KGJhc2VVcmwgKyAnLycgKyB4LCByLCBzLCBvKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbiIsIlxyXG5uYW1lc3BhY2UgSW5kb3RhbGVudC5TZXR0aW5ncyB7XHJcbiAgICBleHBvcnQgY2xhc3MgTXlDb21wYW55Q29sdW1ucyB7XHJcbiAgICAgICAgc3RhdGljIGNvbHVtbnNLZXkgPSAnU2V0dGluZ3MuTXlDb21wYW55JztcclxuICAgIH1cclxufSIsIm5hbWVzcGFjZSBJbmRvdGFsZW50LlNldHRpbmdzIHtcbiAgICBleHBvcnQgaW50ZXJmYWNlIE15Q29tcGFueUZvcm0ge1xuICAgICAgICBUZW5hbnROYW1lOiBTZXJlbml0eS5TdHJpbmdFZGl0b3I7XG4gICAgICAgIERlc2NyaXB0aW9uOiBTZXJlbml0eS5TdHJpbmdFZGl0b3I7XG4gICAgICAgIEN1cnJlbmN5OiBTZXJlbml0eS5TdHJpbmdFZGl0b3I7XG4gICAgICAgIFN0cmVldDogU2VyZW5pdHkuU3RyaW5nRWRpdG9yO1xuICAgICAgICBDaXR5OiBTZXJlbml0eS5TdHJpbmdFZGl0b3I7XG4gICAgICAgIFN0YXRlOiBTZXJlbml0eS5TdHJpbmdFZGl0b3I7XG4gICAgICAgIFppcENvZGU6IFNlcmVuaXR5LlN0cmluZ0VkaXRvcjtcbiAgICAgICAgUGhvbmU6IFNlcmVuaXR5LlN0cmluZ0VkaXRvcjtcbiAgICAgICAgRW1haWw6IFNlcmVuaXR5LlN0cmluZ0VkaXRvcjtcbiAgICAgICAgUHJvZHVjdE51bWJlclByZWZpeDogU2VyZW5pdHkuU3RyaW5nRWRpdG9yO1xuICAgICAgICBQcm9kdWN0TnVtYmVyVXNlRGF0ZTogU2VyZW5pdHkuSW50ZWdlckVkaXRvcjtcbiAgICAgICAgUHJvZHVjdE51bWJlckxlbmd0aDogU2VyZW5pdHkuSW50ZWdlckVkaXRvcjtcbiAgICAgICAgQ3VzdG9tZXJOdW1iZXJQcmVmaXg6IFNlcmVuaXR5LlN0cmluZ0VkaXRvcjtcbiAgICAgICAgQ3VzdG9tZXJOdW1iZXJVc2VEYXRlOiBTZXJlbml0eS5JbnRlZ2VyRWRpdG9yO1xuICAgICAgICBDdXN0b21lck51bWJlckxlbmd0aDogU2VyZW5pdHkuSW50ZWdlckVkaXRvcjtcbiAgICAgICAgU2FsZXNOdW1iZXJQcmVmaXg6IFNlcmVuaXR5LlN0cmluZ0VkaXRvcjtcbiAgICAgICAgU2FsZXNOdW1iZXJVc2VEYXRlOiBTZXJlbml0eS5JbnRlZ2VyRWRpdG9yO1xuICAgICAgICBTYWxlc051bWJlckxlbmd0aDogU2VyZW5pdHkuSW50ZWdlckVkaXRvcjtcbiAgICAgICAgSW52b2ljZU51bWJlclByZWZpeDogU2VyZW5pdHkuU3RyaW5nRWRpdG9yO1xuICAgICAgICBJbnZvaWNlTnVtYmVyVXNlRGF0ZTogU2VyZW5pdHkuSW50ZWdlckVkaXRvcjtcbiAgICAgICAgSW52b2ljZU51bWJlckxlbmd0aDogU2VyZW5pdHkuSW50ZWdlckVkaXRvcjtcbiAgICAgICAgSW52b2ljZVBheW1lbnROdW1iZXJQcmVmaXg6IFNlcmVuaXR5LlN0cmluZ0VkaXRvcjtcbiAgICAgICAgSW52b2ljZVBheW1lbnROdW1iZXJVc2VEYXRlOiBTZXJlbml0eS5JbnRlZ2VyRWRpdG9yO1xuICAgICAgICBJbnZvaWNlUGF5bWVudE51bWJlckxlbmd0aDogU2VyZW5pdHkuSW50ZWdlckVkaXRvcjtcbiAgICAgICAgVmVuZG9yTnVtYmVyUHJlZml4OiBTZXJlbml0eS5TdHJpbmdFZGl0b3I7XG4gICAgICAgIFZlbmRvck51bWJlclVzZURhdGU6IFNlcmVuaXR5LkludGVnZXJFZGl0b3I7XG4gICAgICAgIFZlbmRvck51bWJlckxlbmd0aDogU2VyZW5pdHkuSW50ZWdlckVkaXRvcjtcbiAgICAgICAgUHVyY2hhc2VOdW1iZXJQcmVmaXg6IFNlcmVuaXR5LlN0cmluZ0VkaXRvcjtcbiAgICAgICAgUHVyY2hhc2VOdW1iZXJVc2VEYXRlOiBTZXJlbml0eS5JbnRlZ2VyRWRpdG9yO1xuICAgICAgICBQdXJjaGFzZU51bWJlckxlbmd0aDogU2VyZW5pdHkuSW50ZWdlckVkaXRvcjtcbiAgICAgICAgQmlsbE51bWJlclByZWZpeDogU2VyZW5pdHkuU3RyaW5nRWRpdG9yO1xuICAgICAgICBCaWxsTnVtYmVyVXNlRGF0ZTogU2VyZW5pdHkuSW50ZWdlckVkaXRvcjtcbiAgICAgICAgQmlsbE51bWJlckxlbmd0aDogU2VyZW5pdHkuSW50ZWdlckVkaXRvcjtcbiAgICAgICAgQmlsbFBheW1lbnROdW1iZXJQcmVmaXg6IFNlcmVuaXR5LlN0cmluZ0VkaXRvcjtcbiAgICAgICAgQmlsbFBheW1lbnROdW1iZXJVc2VEYXRlOiBTZXJlbml0eS5JbnRlZ2VyRWRpdG9yO1xuICAgICAgICBCaWxsUGF5bWVudE51bWJlckxlbmd0aDogU2VyZW5pdHkuSW50ZWdlckVkaXRvcjtcbiAgICAgICAgTWF4aW11bVVzZXI6IFNlcmVuaXR5LkludGVnZXJFZGl0b3I7XG4gICAgICAgIEluc2VydERhdGU6IFNlcmVuaXR5LkRhdGVFZGl0b3I7XG4gICAgICAgIEluc2VydFVzZXJJZDogU2VyZW5pdHkuSW50ZWdlckVkaXRvcjtcbiAgICAgICAgVXBkYXRlRGF0ZTogU2VyZW5pdHkuRGF0ZUVkaXRvcjtcbiAgICAgICAgVXBkYXRlVXNlcklkOiBTZXJlbml0eS5JbnRlZ2VyRWRpdG9yO1xuICAgIH1cblxuICAgIGV4cG9ydCBjbGFzcyBNeUNvbXBhbnlGb3JtIGV4dGVuZHMgU2VyZW5pdHkuUHJlZml4ZWRDb250ZXh0IHtcbiAgICAgICAgc3RhdGljIGZvcm1LZXkgPSAnU2V0dGluZ3MuTXlDb21wYW55JztcbiAgICAgICAgcHJpdmF0ZSBzdGF0aWMgaW5pdDogYm9vbGVhbjtcblxuICAgICAgICBjb25zdHJ1Y3RvcihwcmVmaXg6IHN0cmluZykge1xuICAgICAgICAgICAgc3VwZXIocHJlZml4KTtcblxuICAgICAgICAgICAgaWYgKCFNeUNvbXBhbnlGb3JtLmluaXQpICB7XG4gICAgICAgICAgICAgICAgTXlDb21wYW55Rm9ybS5pbml0ID0gdHJ1ZTtcblxuICAgICAgICAgICAgICAgIHZhciBzID0gU2VyZW5pdHk7XG4gICAgICAgICAgICAgICAgdmFyIHcwID0gcy5TdHJpbmdFZGl0b3I7XG4gICAgICAgICAgICAgICAgdmFyIHcxID0gcy5JbnRlZ2VyRWRpdG9yO1xuICAgICAgICAgICAgICAgIHZhciB3MiA9IHMuRGF0ZUVkaXRvcjtcblxuICAgICAgICAgICAgICAgIFEuaW5pdEZvcm1UeXBlKE15Q29tcGFueUZvcm0sIFtcbiAgICAgICAgICAgICAgICAgICAgJ1RlbmFudE5hbWUnLCB3MCxcbiAgICAgICAgICAgICAgICAgICAgJ0Rlc2NyaXB0aW9uJywgdzAsXG4gICAgICAgICAgICAgICAgICAgICdDdXJyZW5jeScsIHcwLFxuICAgICAgICAgICAgICAgICAgICAnU3RyZWV0JywgdzAsXG4gICAgICAgICAgICAgICAgICAgICdDaXR5JywgdzAsXG4gICAgICAgICAgICAgICAgICAgICdTdGF0ZScsIHcwLFxuICAgICAgICAgICAgICAgICAgICAnWmlwQ29kZScsIHcwLFxuICAgICAgICAgICAgICAgICAgICAnUGhvbmUnLCB3MCxcbiAgICAgICAgICAgICAgICAgICAgJ0VtYWlsJywgdzAsXG4gICAgICAgICAgICAgICAgICAgICdQcm9kdWN0TnVtYmVyUHJlZml4JywgdzAsXG4gICAgICAgICAgICAgICAgICAgICdQcm9kdWN0TnVtYmVyVXNlRGF0ZScsIHcxLFxuICAgICAgICAgICAgICAgICAgICAnUHJvZHVjdE51bWJlckxlbmd0aCcsIHcxLFxuICAgICAgICAgICAgICAgICAgICAnQ3VzdG9tZXJOdW1iZXJQcmVmaXgnLCB3MCxcbiAgICAgICAgICAgICAgICAgICAgJ0N1c3RvbWVyTnVtYmVyVXNlRGF0ZScsIHcxLFxuICAgICAgICAgICAgICAgICAgICAnQ3VzdG9tZXJOdW1iZXJMZW5ndGgnLCB3MSxcbiAgICAgICAgICAgICAgICAgICAgJ1NhbGVzTnVtYmVyUHJlZml4JywgdzAsXG4gICAgICAgICAgICAgICAgICAgICdTYWxlc051bWJlclVzZURhdGUnLCB3MSxcbiAgICAgICAgICAgICAgICAgICAgJ1NhbGVzTnVtYmVyTGVuZ3RoJywgdzEsXG4gICAgICAgICAgICAgICAgICAgICdJbnZvaWNlTnVtYmVyUHJlZml4JywgdzAsXG4gICAgICAgICAgICAgICAgICAgICdJbnZvaWNlTnVtYmVyVXNlRGF0ZScsIHcxLFxuICAgICAgICAgICAgICAgICAgICAnSW52b2ljZU51bWJlckxlbmd0aCcsIHcxLFxuICAgICAgICAgICAgICAgICAgICAnSW52b2ljZVBheW1lbnROdW1iZXJQcmVmaXgnLCB3MCxcbiAgICAgICAgICAgICAgICAgICAgJ0ludm9pY2VQYXltZW50TnVtYmVyVXNlRGF0ZScsIHcxLFxuICAgICAgICAgICAgICAgICAgICAnSW52b2ljZVBheW1lbnROdW1iZXJMZW5ndGgnLCB3MSxcbiAgICAgICAgICAgICAgICAgICAgJ1ZlbmRvck51bWJlclByZWZpeCcsIHcwLFxuICAgICAgICAgICAgICAgICAgICAnVmVuZG9yTnVtYmVyVXNlRGF0ZScsIHcxLFxuICAgICAgICAgICAgICAgICAgICAnVmVuZG9yTnVtYmVyTGVuZ3RoJywgdzEsXG4gICAgICAgICAgICAgICAgICAgICdQdXJjaGFzZU51bWJlclByZWZpeCcsIHcwLFxuICAgICAgICAgICAgICAgICAgICAnUHVyY2hhc2VOdW1iZXJVc2VEYXRlJywgdzEsXG4gICAgICAgICAgICAgICAgICAgICdQdXJjaGFzZU51bWJlckxlbmd0aCcsIHcxLFxuICAgICAgICAgICAgICAgICAgICAnQmlsbE51bWJlclByZWZpeCcsIHcwLFxuICAgICAgICAgICAgICAgICAgICAnQmlsbE51bWJlclVzZURhdGUnLCB3MSxcbiAgICAgICAgICAgICAgICAgICAgJ0JpbGxOdW1iZXJMZW5ndGgnLCB3MSxcbiAgICAgICAgICAgICAgICAgICAgJ0JpbGxQYXltZW50TnVtYmVyUHJlZml4JywgdzAsXG4gICAgICAgICAgICAgICAgICAgICdCaWxsUGF5bWVudE51bWJlclVzZURhdGUnLCB3MSxcbiAgICAgICAgICAgICAgICAgICAgJ0JpbGxQYXltZW50TnVtYmVyTGVuZ3RoJywgdzEsXG4gICAgICAgICAgICAgICAgICAgICdNYXhpbXVtVXNlcicsIHcxLFxuICAgICAgICAgICAgICAgICAgICAnSW5zZXJ0RGF0ZScsIHcyLFxuICAgICAgICAgICAgICAgICAgICAnSW5zZXJ0VXNlcklkJywgdzEsXG4gICAgICAgICAgICAgICAgICAgICdVcGRhdGVEYXRlJywgdzIsXG4gICAgICAgICAgICAgICAgICAgICdVcGRhdGVVc2VySWQnLCB3MVxuICAgICAgICAgICAgICAgIF0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuIiwibmFtZXNwYWNlIEluZG90YWxlbnQuU2V0dGluZ3Mge1xuICAgIGV4cG9ydCBpbnRlcmZhY2UgTXlDb21wYW55Um93IHtcbiAgICAgICAgVGVuYW50SWQ/OiBudW1iZXI7XG4gICAgICAgIFRlbmFudE5hbWU/OiBzdHJpbmc7XG4gICAgICAgIERlc2NyaXB0aW9uPzogc3RyaW5nO1xuICAgICAgICBDdXJyZW5jeT86IHN0cmluZztcbiAgICAgICAgU3RyZWV0Pzogc3RyaW5nO1xuICAgICAgICBDaXR5Pzogc3RyaW5nO1xuICAgICAgICBTdGF0ZT86IHN0cmluZztcbiAgICAgICAgWmlwQ29kZT86IHN0cmluZztcbiAgICAgICAgUGhvbmU/OiBzdHJpbmc7XG4gICAgICAgIEVtYWlsPzogc3RyaW5nO1xuICAgICAgICBQcm9kdWN0TnVtYmVyUHJlZml4Pzogc3RyaW5nO1xuICAgICAgICBQcm9kdWN0TnVtYmVyVXNlRGF0ZT86IG51bWJlcjtcbiAgICAgICAgUHJvZHVjdE51bWJlckxlbmd0aD86IG51bWJlcjtcbiAgICAgICAgQ3VzdG9tZXJOdW1iZXJQcmVmaXg/OiBzdHJpbmc7XG4gICAgICAgIEN1c3RvbWVyTnVtYmVyVXNlRGF0ZT86IG51bWJlcjtcbiAgICAgICAgQ3VzdG9tZXJOdW1iZXJMZW5ndGg/OiBudW1iZXI7XG4gICAgICAgIFNhbGVzTnVtYmVyUHJlZml4Pzogc3RyaW5nO1xuICAgICAgICBTYWxlc051bWJlclVzZURhdGU/OiBudW1iZXI7XG4gICAgICAgIFNhbGVzTnVtYmVyTGVuZ3RoPzogbnVtYmVyO1xuICAgICAgICBJbnZvaWNlTnVtYmVyUHJlZml4Pzogc3RyaW5nO1xuICAgICAgICBJbnZvaWNlTnVtYmVyVXNlRGF0ZT86IG51bWJlcjtcbiAgICAgICAgSW52b2ljZU51bWJlckxlbmd0aD86IG51bWJlcjtcbiAgICAgICAgSW52b2ljZVBheW1lbnROdW1iZXJQcmVmaXg/OiBzdHJpbmc7XG4gICAgICAgIEludm9pY2VQYXltZW50TnVtYmVyVXNlRGF0ZT86IG51bWJlcjtcbiAgICAgICAgSW52b2ljZVBheW1lbnROdW1iZXJMZW5ndGg/OiBudW1iZXI7XG4gICAgICAgIFZlbmRvck51bWJlclByZWZpeD86IHN0cmluZztcbiAgICAgICAgVmVuZG9yTnVtYmVyVXNlRGF0ZT86IG51bWJlcjtcbiAgICAgICAgVmVuZG9yTnVtYmVyTGVuZ3RoPzogbnVtYmVyO1xuICAgICAgICBQdXJjaGFzZU51bWJlclByZWZpeD86IHN0cmluZztcbiAgICAgICAgUHVyY2hhc2VOdW1iZXJVc2VEYXRlPzogbnVtYmVyO1xuICAgICAgICBQdXJjaGFzZU51bWJlckxlbmd0aD86IG51bWJlcjtcbiAgICAgICAgQmlsbE51bWJlclByZWZpeD86IHN0cmluZztcbiAgICAgICAgQmlsbE51bWJlclVzZURhdGU/OiBudW1iZXI7XG4gICAgICAgIEJpbGxOdW1iZXJMZW5ndGg/OiBudW1iZXI7XG4gICAgICAgIEJpbGxQYXltZW50TnVtYmVyUHJlZml4Pzogc3RyaW5nO1xuICAgICAgICBCaWxsUGF5bWVudE51bWJlclVzZURhdGU/OiBudW1iZXI7XG4gICAgICAgIEJpbGxQYXltZW50TnVtYmVyTGVuZ3RoPzogbnVtYmVyO1xuICAgICAgICBNYXhpbXVtVXNlcj86IG51bWJlcjtcbiAgICAgICAgSW5zZXJ0RGF0ZT86IHN0cmluZztcbiAgICAgICAgSW5zZXJ0VXNlcklkPzogbnVtYmVyO1xuICAgICAgICBVcGRhdGVEYXRlPzogc3RyaW5nO1xuICAgICAgICBVcGRhdGVVc2VySWQ/OiBudW1iZXI7XG4gICAgfVxuXG4gICAgZXhwb3J0IG5hbWVzcGFjZSBNeUNvbXBhbnlSb3cge1xuICAgICAgICBleHBvcnQgY29uc3QgaWRQcm9wZXJ0eSA9ICdUZW5hbnRJZCc7XG4gICAgICAgIGV4cG9ydCBjb25zdCBuYW1lUHJvcGVydHkgPSAnVGVuYW50TmFtZSc7XG4gICAgICAgIGV4cG9ydCBjb25zdCBsb2NhbFRleHRQcmVmaXggPSAnU2V0dGluZ3MuTXlDb21wYW55JztcbiAgICAgICAgZXhwb3J0IGNvbnN0IGRlbGV0ZVBlcm1pc3Npb24gPSAnU2V0dGluZ3M6TXlDb21wYW55JztcbiAgICAgICAgZXhwb3J0IGNvbnN0IGluc2VydFBlcm1pc3Npb24gPSAnU2V0dGluZ3M6TXlDb21wYW55JztcbiAgICAgICAgZXhwb3J0IGNvbnN0IHJlYWRQZXJtaXNzaW9uID0gJ1NldHRpbmdzOk15Q29tcGFueSc7XG4gICAgICAgIGV4cG9ydCBjb25zdCB1cGRhdGVQZXJtaXNzaW9uID0gJ1NldHRpbmdzOk15Q29tcGFueSc7XG5cbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgY29uc3QgZW51bSBGaWVsZHMge1xuICAgICAgICAgICAgVGVuYW50SWQgPSBcIlRlbmFudElkXCIsXG4gICAgICAgICAgICBUZW5hbnROYW1lID0gXCJUZW5hbnROYW1lXCIsXG4gICAgICAgICAgICBEZXNjcmlwdGlvbiA9IFwiRGVzY3JpcHRpb25cIixcbiAgICAgICAgICAgIEN1cnJlbmN5ID0gXCJDdXJyZW5jeVwiLFxuICAgICAgICAgICAgU3RyZWV0ID0gXCJTdHJlZXRcIixcbiAgICAgICAgICAgIENpdHkgPSBcIkNpdHlcIixcbiAgICAgICAgICAgIFN0YXRlID0gXCJTdGF0ZVwiLFxuICAgICAgICAgICAgWmlwQ29kZSA9IFwiWmlwQ29kZVwiLFxuICAgICAgICAgICAgUGhvbmUgPSBcIlBob25lXCIsXG4gICAgICAgICAgICBFbWFpbCA9IFwiRW1haWxcIixcbiAgICAgICAgICAgIFByb2R1Y3ROdW1iZXJQcmVmaXggPSBcIlByb2R1Y3ROdW1iZXJQcmVmaXhcIixcbiAgICAgICAgICAgIFByb2R1Y3ROdW1iZXJVc2VEYXRlID0gXCJQcm9kdWN0TnVtYmVyVXNlRGF0ZVwiLFxuICAgICAgICAgICAgUHJvZHVjdE51bWJlckxlbmd0aCA9IFwiUHJvZHVjdE51bWJlckxlbmd0aFwiLFxuICAgICAgICAgICAgQ3VzdG9tZXJOdW1iZXJQcmVmaXggPSBcIkN1c3RvbWVyTnVtYmVyUHJlZml4XCIsXG4gICAgICAgICAgICBDdXN0b21lck51bWJlclVzZURhdGUgPSBcIkN1c3RvbWVyTnVtYmVyVXNlRGF0ZVwiLFxuICAgICAgICAgICAgQ3VzdG9tZXJOdW1iZXJMZW5ndGggPSBcIkN1c3RvbWVyTnVtYmVyTGVuZ3RoXCIsXG4gICAgICAgICAgICBTYWxlc051bWJlclByZWZpeCA9IFwiU2FsZXNOdW1iZXJQcmVmaXhcIixcbiAgICAgICAgICAgIFNhbGVzTnVtYmVyVXNlRGF0ZSA9IFwiU2FsZXNOdW1iZXJVc2VEYXRlXCIsXG4gICAgICAgICAgICBTYWxlc051bWJlckxlbmd0aCA9IFwiU2FsZXNOdW1iZXJMZW5ndGhcIixcbiAgICAgICAgICAgIEludm9pY2VOdW1iZXJQcmVmaXggPSBcIkludm9pY2VOdW1iZXJQcmVmaXhcIixcbiAgICAgICAgICAgIEludm9pY2VOdW1iZXJVc2VEYXRlID0gXCJJbnZvaWNlTnVtYmVyVXNlRGF0ZVwiLFxuICAgICAgICAgICAgSW52b2ljZU51bWJlckxlbmd0aCA9IFwiSW52b2ljZU51bWJlckxlbmd0aFwiLFxuICAgICAgICAgICAgSW52b2ljZVBheW1lbnROdW1iZXJQcmVmaXggPSBcIkludm9pY2VQYXltZW50TnVtYmVyUHJlZml4XCIsXG4gICAgICAgICAgICBJbnZvaWNlUGF5bWVudE51bWJlclVzZURhdGUgPSBcIkludm9pY2VQYXltZW50TnVtYmVyVXNlRGF0ZVwiLFxuICAgICAgICAgICAgSW52b2ljZVBheW1lbnROdW1iZXJMZW5ndGggPSBcIkludm9pY2VQYXltZW50TnVtYmVyTGVuZ3RoXCIsXG4gICAgICAgICAgICBWZW5kb3JOdW1iZXJQcmVmaXggPSBcIlZlbmRvck51bWJlclByZWZpeFwiLFxuICAgICAgICAgICAgVmVuZG9yTnVtYmVyVXNlRGF0ZSA9IFwiVmVuZG9yTnVtYmVyVXNlRGF0ZVwiLFxuICAgICAgICAgICAgVmVuZG9yTnVtYmVyTGVuZ3RoID0gXCJWZW5kb3JOdW1iZXJMZW5ndGhcIixcbiAgICAgICAgICAgIFB1cmNoYXNlTnVtYmVyUHJlZml4ID0gXCJQdXJjaGFzZU51bWJlclByZWZpeFwiLFxuICAgICAgICAgICAgUHVyY2hhc2VOdW1iZXJVc2VEYXRlID0gXCJQdXJjaGFzZU51bWJlclVzZURhdGVcIixcbiAgICAgICAgICAgIFB1cmNoYXNlTnVtYmVyTGVuZ3RoID0gXCJQdXJjaGFzZU51bWJlckxlbmd0aFwiLFxuICAgICAgICAgICAgQmlsbE51bWJlclByZWZpeCA9IFwiQmlsbE51bWJlclByZWZpeFwiLFxuICAgICAgICAgICAgQmlsbE51bWJlclVzZURhdGUgPSBcIkJpbGxOdW1iZXJVc2VEYXRlXCIsXG4gICAgICAgICAgICBCaWxsTnVtYmVyTGVuZ3RoID0gXCJCaWxsTnVtYmVyTGVuZ3RoXCIsXG4gICAgICAgICAgICBCaWxsUGF5bWVudE51bWJlclByZWZpeCA9IFwiQmlsbFBheW1lbnROdW1iZXJQcmVmaXhcIixcbiAgICAgICAgICAgIEJpbGxQYXltZW50TnVtYmVyVXNlRGF0ZSA9IFwiQmlsbFBheW1lbnROdW1iZXJVc2VEYXRlXCIsXG4gICAgICAgICAgICBCaWxsUGF5bWVudE51bWJlckxlbmd0aCA9IFwiQmlsbFBheW1lbnROdW1iZXJMZW5ndGhcIixcbiAgICAgICAgICAgIE1heGltdW1Vc2VyID0gXCJNYXhpbXVtVXNlclwiLFxuICAgICAgICAgICAgSW5zZXJ0RGF0ZSA9IFwiSW5zZXJ0RGF0ZVwiLFxuICAgICAgICAgICAgSW5zZXJ0VXNlcklkID0gXCJJbnNlcnRVc2VySWRcIixcbiAgICAgICAgICAgIFVwZGF0ZURhdGUgPSBcIlVwZGF0ZURhdGVcIixcbiAgICAgICAgICAgIFVwZGF0ZVVzZXJJZCA9IFwiVXBkYXRlVXNlcklkXCJcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsIm5hbWVzcGFjZSBJbmRvdGFsZW50LlNldHRpbmdzIHtcbiAgICBleHBvcnQgbmFtZXNwYWNlIE15Q29tcGFueVNlcnZpY2Uge1xuICAgICAgICBleHBvcnQgY29uc3QgYmFzZVVybCA9ICdTZXR0aW5ncy9NeUNvbXBhbnknO1xuXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIENyZWF0ZShyZXF1ZXN0OiBTZXJlbml0eS5TYXZlUmVxdWVzdDxNeUNvbXBhbnlSb3c+LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5LlNhdmVSZXNwb25zZSkgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBVcGRhdGUocmVxdWVzdDogU2VyZW5pdHkuU2F2ZVJlcXVlc3Q8TXlDb21wYW55Um93Piwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5TYXZlUmVzcG9uc2UpID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gRGVsZXRlKHJlcXVlc3Q6IFNlcmVuaXR5LkRlbGV0ZVJlcXVlc3QsIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuRGVsZXRlUmVzcG9uc2UpID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gUmV0cmlldmUocmVxdWVzdDogU2VyZW5pdHkuUmV0cmlldmVSZXF1ZXN0LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5LlJldHJpZXZlUmVzcG9uc2U8TXlDb21wYW55Um93PikgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBMaXN0KHJlcXVlc3Q6IFNlcmVuaXR5Lkxpc3RSZXF1ZXN0LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5Lkxpc3RSZXNwb25zZTxNeUNvbXBhbnlSb3c+KSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XG5cbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgY29uc3QgZW51bSBNZXRob2RzIHtcbiAgICAgICAgICAgIENyZWF0ZSA9IFwiU2V0dGluZ3MvTXlDb21wYW55L0NyZWF0ZVwiLFxuICAgICAgICAgICAgVXBkYXRlID0gXCJTZXR0aW5ncy9NeUNvbXBhbnkvVXBkYXRlXCIsXG4gICAgICAgICAgICBEZWxldGUgPSBcIlNldHRpbmdzL015Q29tcGFueS9EZWxldGVcIixcbiAgICAgICAgICAgIFJldHJpZXZlID0gXCJTZXR0aW5ncy9NeUNvbXBhbnkvUmV0cmlldmVcIixcbiAgICAgICAgICAgIExpc3QgPSBcIlNldHRpbmdzL015Q29tcGFueS9MaXN0XCJcbiAgICAgICAgfVxuXG4gICAgICAgIFtcbiAgICAgICAgICAgICdDcmVhdGUnLCBcbiAgICAgICAgICAgICdVcGRhdGUnLCBcbiAgICAgICAgICAgICdEZWxldGUnLCBcbiAgICAgICAgICAgICdSZXRyaWV2ZScsIFxuICAgICAgICAgICAgJ0xpc3QnXG4gICAgICAgIF0uZm9yRWFjaCh4ID0+IHtcbiAgICAgICAgICAgICg8YW55Pk15Q29tcGFueVNlcnZpY2UpW3hdID0gZnVuY3Rpb24gKHIsIHMsIG8pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gUS5zZXJ2aWNlUmVxdWVzdChiYXNlVXJsICsgJy8nICsgeCwgciwgcywgbyk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9KTtcbiAgICB9XG59XG4iLCJcclxubmFtZXNwYWNlIEluZG90YWxlbnQuU2V0dGluZ3Mge1xyXG4gICAgZXhwb3J0IGNsYXNzIFB1cmNoYXNlVGF4Q29sdW1ucyB7XHJcbiAgICAgICAgc3RhdGljIGNvbHVtbnNLZXkgPSAnU2V0dGluZ3MuUHVyY2hhc2VUYXgnO1xyXG4gICAgfVxyXG59IiwibmFtZXNwYWNlIEluZG90YWxlbnQuU2V0dGluZ3Mge1xuICAgIGV4cG9ydCBpbnRlcmZhY2UgUHVyY2hhc2VUYXhGb3JtIHtcbiAgICAgICAgTmFtZTogU2VyZW5pdHkuU3RyaW5nRWRpdG9yO1xuICAgICAgICBEZXNjcmlwdGlvbjogU2VyZW5pdHkuU3RyaW5nRWRpdG9yO1xuICAgICAgICBUYXhSYXRlUGVyY2VudGFnZTogU2VyZW5pdHkuRGVjaW1hbEVkaXRvcjtcbiAgICAgICAgSW5zZXJ0RGF0ZTogU2VyZW5pdHkuRGF0ZUVkaXRvcjtcbiAgICAgICAgSW5zZXJ0VXNlcklkOiBTZXJlbml0eS5JbnRlZ2VyRWRpdG9yO1xuICAgICAgICBVcGRhdGVEYXRlOiBTZXJlbml0eS5EYXRlRWRpdG9yO1xuICAgICAgICBVcGRhdGVVc2VySWQ6IFNlcmVuaXR5LkludGVnZXJFZGl0b3I7XG4gICAgICAgIFRlbmFudElkOiBTZXJlbml0eS5JbnRlZ2VyRWRpdG9yO1xuICAgIH1cblxuICAgIGV4cG9ydCBjbGFzcyBQdXJjaGFzZVRheEZvcm0gZXh0ZW5kcyBTZXJlbml0eS5QcmVmaXhlZENvbnRleHQge1xuICAgICAgICBzdGF0aWMgZm9ybUtleSA9ICdTZXR0aW5ncy5QdXJjaGFzZVRheCc7XG4gICAgICAgIHByaXZhdGUgc3RhdGljIGluaXQ6IGJvb2xlYW47XG5cbiAgICAgICAgY29uc3RydWN0b3IocHJlZml4OiBzdHJpbmcpIHtcbiAgICAgICAgICAgIHN1cGVyKHByZWZpeCk7XG5cbiAgICAgICAgICAgIGlmICghUHVyY2hhc2VUYXhGb3JtLmluaXQpICB7XG4gICAgICAgICAgICAgICAgUHVyY2hhc2VUYXhGb3JtLmluaXQgPSB0cnVlO1xuXG4gICAgICAgICAgICAgICAgdmFyIHMgPSBTZXJlbml0eTtcbiAgICAgICAgICAgICAgICB2YXIgdzAgPSBzLlN0cmluZ0VkaXRvcjtcbiAgICAgICAgICAgICAgICB2YXIgdzEgPSBzLkRlY2ltYWxFZGl0b3I7XG4gICAgICAgICAgICAgICAgdmFyIHcyID0gcy5EYXRlRWRpdG9yO1xuICAgICAgICAgICAgICAgIHZhciB3MyA9IHMuSW50ZWdlckVkaXRvcjtcblxuICAgICAgICAgICAgICAgIFEuaW5pdEZvcm1UeXBlKFB1cmNoYXNlVGF4Rm9ybSwgW1xuICAgICAgICAgICAgICAgICAgICAnTmFtZScsIHcwLFxuICAgICAgICAgICAgICAgICAgICAnRGVzY3JpcHRpb24nLCB3MCxcbiAgICAgICAgICAgICAgICAgICAgJ1RheFJhdGVQZXJjZW50YWdlJywgdzEsXG4gICAgICAgICAgICAgICAgICAgICdJbnNlcnREYXRlJywgdzIsXG4gICAgICAgICAgICAgICAgICAgICdJbnNlcnRVc2VySWQnLCB3MyxcbiAgICAgICAgICAgICAgICAgICAgJ1VwZGF0ZURhdGUnLCB3MixcbiAgICAgICAgICAgICAgICAgICAgJ1VwZGF0ZVVzZXJJZCcsIHczLFxuICAgICAgICAgICAgICAgICAgICAnVGVuYW50SWQnLCB3M1xuICAgICAgICAgICAgICAgIF0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuIiwibmFtZXNwYWNlIEluZG90YWxlbnQuU2V0dGluZ3Mge1xuICAgIGV4cG9ydCBpbnRlcmZhY2UgUHVyY2hhc2VUYXhSb3cge1xuICAgICAgICBJZD86IG51bWJlcjtcbiAgICAgICAgTmFtZT86IHN0cmluZztcbiAgICAgICAgRGVzY3JpcHRpb24/OiBzdHJpbmc7XG4gICAgICAgIFRheFJhdGVQZXJjZW50YWdlPzogbnVtYmVyO1xuICAgICAgICBJbnNlcnREYXRlPzogc3RyaW5nO1xuICAgICAgICBJbnNlcnRVc2VySWQ/OiBudW1iZXI7XG4gICAgICAgIFVwZGF0ZURhdGU/OiBzdHJpbmc7XG4gICAgICAgIFVwZGF0ZVVzZXJJZD86IG51bWJlcjtcbiAgICAgICAgVGVuYW50SWQ/OiBudW1iZXI7XG4gICAgfVxuXG4gICAgZXhwb3J0IG5hbWVzcGFjZSBQdXJjaGFzZVRheFJvdyB7XG4gICAgICAgIGV4cG9ydCBjb25zdCBpZFByb3BlcnR5ID0gJ0lkJztcbiAgICAgICAgZXhwb3J0IGNvbnN0IG5hbWVQcm9wZXJ0eSA9ICdOYW1lJztcbiAgICAgICAgZXhwb3J0IGNvbnN0IGxvY2FsVGV4dFByZWZpeCA9ICdTZXR0aW5ncy5QdXJjaGFzZVRheCc7XG4gICAgICAgIGV4cG9ydCBjb25zdCBkZWxldGVQZXJtaXNzaW9uID0gJ0FkbWluaXN0cmF0aW9uOkdlbmVyYWwnO1xuICAgICAgICBleHBvcnQgY29uc3QgaW5zZXJ0UGVybWlzc2lvbiA9ICdBZG1pbmlzdHJhdGlvbjpHZW5lcmFsJztcbiAgICAgICAgZXhwb3J0IGNvbnN0IHJlYWRQZXJtaXNzaW9uID0gJ0FkbWluaXN0cmF0aW9uOkdlbmVyYWwnO1xuICAgICAgICBleHBvcnQgY29uc3QgdXBkYXRlUGVybWlzc2lvbiA9ICdBZG1pbmlzdHJhdGlvbjpHZW5lcmFsJztcblxuICAgICAgICBleHBvcnQgZGVjbGFyZSBjb25zdCBlbnVtIEZpZWxkcyB7XG4gICAgICAgICAgICBJZCA9IFwiSWRcIixcbiAgICAgICAgICAgIE5hbWUgPSBcIk5hbWVcIixcbiAgICAgICAgICAgIERlc2NyaXB0aW9uID0gXCJEZXNjcmlwdGlvblwiLFxuICAgICAgICAgICAgVGF4UmF0ZVBlcmNlbnRhZ2UgPSBcIlRheFJhdGVQZXJjZW50YWdlXCIsXG4gICAgICAgICAgICBJbnNlcnREYXRlID0gXCJJbnNlcnREYXRlXCIsXG4gICAgICAgICAgICBJbnNlcnRVc2VySWQgPSBcIkluc2VydFVzZXJJZFwiLFxuICAgICAgICAgICAgVXBkYXRlRGF0ZSA9IFwiVXBkYXRlRGF0ZVwiLFxuICAgICAgICAgICAgVXBkYXRlVXNlcklkID0gXCJVcGRhdGVVc2VySWRcIixcbiAgICAgICAgICAgIFRlbmFudElkID0gXCJUZW5hbnRJZFwiXG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJuYW1lc3BhY2UgSW5kb3RhbGVudC5TZXR0aW5ncyB7XG4gICAgZXhwb3J0IG5hbWVzcGFjZSBQdXJjaGFzZVRheFNlcnZpY2Uge1xuICAgICAgICBleHBvcnQgY29uc3QgYmFzZVVybCA9ICdTZXR0aW5ncy9QdXJjaGFzZVRheCc7XG5cbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gQ3JlYXRlKHJlcXVlc3Q6IFNlcmVuaXR5LlNhdmVSZXF1ZXN0PFB1cmNoYXNlVGF4Um93Piwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5TYXZlUmVzcG9uc2UpID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gVXBkYXRlKHJlcXVlc3Q6IFNlcmVuaXR5LlNhdmVSZXF1ZXN0PFB1cmNoYXNlVGF4Um93Piwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5TYXZlUmVzcG9uc2UpID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gRGVsZXRlKHJlcXVlc3Q6IFNlcmVuaXR5LkRlbGV0ZVJlcXVlc3QsIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuRGVsZXRlUmVzcG9uc2UpID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gUmV0cmlldmUocmVxdWVzdDogU2VyZW5pdHkuUmV0cmlldmVSZXF1ZXN0LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5LlJldHJpZXZlUmVzcG9uc2U8UHVyY2hhc2VUYXhSb3c+KSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIExpc3QocmVxdWVzdDogU2VyZW5pdHkuTGlzdFJlcXVlc3QsIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuTGlzdFJlc3BvbnNlPFB1cmNoYXNlVGF4Um93PikgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xuXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGNvbnN0IGVudW0gTWV0aG9kcyB7XG4gICAgICAgICAgICBDcmVhdGUgPSBcIlNldHRpbmdzL1B1cmNoYXNlVGF4L0NyZWF0ZVwiLFxuICAgICAgICAgICAgVXBkYXRlID0gXCJTZXR0aW5ncy9QdXJjaGFzZVRheC9VcGRhdGVcIixcbiAgICAgICAgICAgIERlbGV0ZSA9IFwiU2V0dGluZ3MvUHVyY2hhc2VUYXgvRGVsZXRlXCIsXG4gICAgICAgICAgICBSZXRyaWV2ZSA9IFwiU2V0dGluZ3MvUHVyY2hhc2VUYXgvUmV0cmlldmVcIixcbiAgICAgICAgICAgIExpc3QgPSBcIlNldHRpbmdzL1B1cmNoYXNlVGF4L0xpc3RcIlxuICAgICAgICB9XG5cbiAgICAgICAgW1xuICAgICAgICAgICAgJ0NyZWF0ZScsIFxuICAgICAgICAgICAgJ1VwZGF0ZScsIFxuICAgICAgICAgICAgJ0RlbGV0ZScsIFxuICAgICAgICAgICAgJ1JldHJpZXZlJywgXG4gICAgICAgICAgICAnTGlzdCdcbiAgICAgICAgXS5mb3JFYWNoKHggPT4ge1xuICAgICAgICAgICAgKDxhbnk+UHVyY2hhc2VUYXhTZXJ2aWNlKVt4XSA9IGZ1bmN0aW9uIChyLCBzLCBvKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFEuc2VydmljZVJlcXVlc3QoYmFzZVVybCArICcvJyArIHgsIHIsIHMsIG8pO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuIiwiXHJcbm5hbWVzcGFjZSBJbmRvdGFsZW50LlNldHRpbmdzIHtcclxuICAgIGV4cG9ydCBjbGFzcyBTYWxlc1RheENvbHVtbnMge1xyXG4gICAgICAgIHN0YXRpYyBjb2x1bW5zS2V5ID0gJ1NldHRpbmdzLlNhbGVzVGF4JztcclxuICAgIH1cclxufSIsIm5hbWVzcGFjZSBJbmRvdGFsZW50LlNldHRpbmdzIHtcbiAgICBleHBvcnQgaW50ZXJmYWNlIFNhbGVzVGF4Rm9ybSB7XG4gICAgICAgIE5hbWU6IFNlcmVuaXR5LlN0cmluZ0VkaXRvcjtcbiAgICAgICAgRGVzY3JpcHRpb246IFNlcmVuaXR5LlN0cmluZ0VkaXRvcjtcbiAgICAgICAgVGF4UmF0ZVBlcmNlbnRhZ2U6IFNlcmVuaXR5LkRlY2ltYWxFZGl0b3I7XG4gICAgICAgIEluc2VydERhdGU6IFNlcmVuaXR5LkRhdGVFZGl0b3I7XG4gICAgICAgIEluc2VydFVzZXJJZDogU2VyZW5pdHkuSW50ZWdlckVkaXRvcjtcbiAgICAgICAgVXBkYXRlRGF0ZTogU2VyZW5pdHkuRGF0ZUVkaXRvcjtcbiAgICAgICAgVXBkYXRlVXNlcklkOiBTZXJlbml0eS5JbnRlZ2VyRWRpdG9yO1xuICAgICAgICBUZW5hbnRJZDogU2VyZW5pdHkuSW50ZWdlckVkaXRvcjtcbiAgICB9XG5cbiAgICBleHBvcnQgY2xhc3MgU2FsZXNUYXhGb3JtIGV4dGVuZHMgU2VyZW5pdHkuUHJlZml4ZWRDb250ZXh0IHtcbiAgICAgICAgc3RhdGljIGZvcm1LZXkgPSAnU2V0dGluZ3MuU2FsZXNUYXgnO1xuICAgICAgICBwcml2YXRlIHN0YXRpYyBpbml0OiBib29sZWFuO1xuXG4gICAgICAgIGNvbnN0cnVjdG9yKHByZWZpeDogc3RyaW5nKSB7XG4gICAgICAgICAgICBzdXBlcihwcmVmaXgpO1xuXG4gICAgICAgICAgICBpZiAoIVNhbGVzVGF4Rm9ybS5pbml0KSAge1xuICAgICAgICAgICAgICAgIFNhbGVzVGF4Rm9ybS5pbml0ID0gdHJ1ZTtcblxuICAgICAgICAgICAgICAgIHZhciBzID0gU2VyZW5pdHk7XG4gICAgICAgICAgICAgICAgdmFyIHcwID0gcy5TdHJpbmdFZGl0b3I7XG4gICAgICAgICAgICAgICAgdmFyIHcxID0gcy5EZWNpbWFsRWRpdG9yO1xuICAgICAgICAgICAgICAgIHZhciB3MiA9IHMuRGF0ZUVkaXRvcjtcbiAgICAgICAgICAgICAgICB2YXIgdzMgPSBzLkludGVnZXJFZGl0b3I7XG5cbiAgICAgICAgICAgICAgICBRLmluaXRGb3JtVHlwZShTYWxlc1RheEZvcm0sIFtcbiAgICAgICAgICAgICAgICAgICAgJ05hbWUnLCB3MCxcbiAgICAgICAgICAgICAgICAgICAgJ0Rlc2NyaXB0aW9uJywgdzAsXG4gICAgICAgICAgICAgICAgICAgICdUYXhSYXRlUGVyY2VudGFnZScsIHcxLFxuICAgICAgICAgICAgICAgICAgICAnSW5zZXJ0RGF0ZScsIHcyLFxuICAgICAgICAgICAgICAgICAgICAnSW5zZXJ0VXNlcklkJywgdzMsXG4gICAgICAgICAgICAgICAgICAgICdVcGRhdGVEYXRlJywgdzIsXG4gICAgICAgICAgICAgICAgICAgICdVcGRhdGVVc2VySWQnLCB3MyxcbiAgICAgICAgICAgICAgICAgICAgJ1RlbmFudElkJywgdzNcbiAgICAgICAgICAgICAgICBdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbiIsIm5hbWVzcGFjZSBJbmRvdGFsZW50LlNldHRpbmdzIHtcbiAgICBleHBvcnQgaW50ZXJmYWNlIFNhbGVzVGF4Um93IHtcbiAgICAgICAgSWQ/OiBudW1iZXI7XG4gICAgICAgIE5hbWU/OiBzdHJpbmc7XG4gICAgICAgIERlc2NyaXB0aW9uPzogc3RyaW5nO1xuICAgICAgICBUYXhSYXRlUGVyY2VudGFnZT86IG51bWJlcjtcbiAgICAgICAgSW5zZXJ0RGF0ZT86IHN0cmluZztcbiAgICAgICAgSW5zZXJ0VXNlcklkPzogbnVtYmVyO1xuICAgICAgICBVcGRhdGVEYXRlPzogc3RyaW5nO1xuICAgICAgICBVcGRhdGVVc2VySWQ/OiBudW1iZXI7XG4gICAgICAgIFRlbmFudElkPzogbnVtYmVyO1xuICAgIH1cblxuICAgIGV4cG9ydCBuYW1lc3BhY2UgU2FsZXNUYXhSb3cge1xuICAgICAgICBleHBvcnQgY29uc3QgaWRQcm9wZXJ0eSA9ICdJZCc7XG4gICAgICAgIGV4cG9ydCBjb25zdCBuYW1lUHJvcGVydHkgPSAnTmFtZSc7XG4gICAgICAgIGV4cG9ydCBjb25zdCBsb2NhbFRleHRQcmVmaXggPSAnU2V0dGluZ3MuU2FsZXNUYXgnO1xuICAgICAgICBleHBvcnQgY29uc3QgZGVsZXRlUGVybWlzc2lvbiA9ICdTYWxlczpTYWxlc09yZGVyJztcbiAgICAgICAgZXhwb3J0IGNvbnN0IGluc2VydFBlcm1pc3Npb24gPSAnU2FsZXM6U2FsZXNPcmRlcic7XG4gICAgICAgIGV4cG9ydCBjb25zdCByZWFkUGVybWlzc2lvbiA9ICdTYWxlczpTYWxlc09yZGVyJztcbiAgICAgICAgZXhwb3J0IGNvbnN0IHVwZGF0ZVBlcm1pc3Npb24gPSAnU2FsZXM6U2FsZXNPcmRlcic7XG5cbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgY29uc3QgZW51bSBGaWVsZHMge1xuICAgICAgICAgICAgSWQgPSBcIklkXCIsXG4gICAgICAgICAgICBOYW1lID0gXCJOYW1lXCIsXG4gICAgICAgICAgICBEZXNjcmlwdGlvbiA9IFwiRGVzY3JpcHRpb25cIixcbiAgICAgICAgICAgIFRheFJhdGVQZXJjZW50YWdlID0gXCJUYXhSYXRlUGVyY2VudGFnZVwiLFxuICAgICAgICAgICAgSW5zZXJ0RGF0ZSA9IFwiSW5zZXJ0RGF0ZVwiLFxuICAgICAgICAgICAgSW5zZXJ0VXNlcklkID0gXCJJbnNlcnRVc2VySWRcIixcbiAgICAgICAgICAgIFVwZGF0ZURhdGUgPSBcIlVwZGF0ZURhdGVcIixcbiAgICAgICAgICAgIFVwZGF0ZVVzZXJJZCA9IFwiVXBkYXRlVXNlcklkXCIsXG4gICAgICAgICAgICBUZW5hbnRJZCA9IFwiVGVuYW50SWRcIlxuICAgICAgICB9XG4gICAgfVxufVxuIiwibmFtZXNwYWNlIEluZG90YWxlbnQuU2V0dGluZ3Mge1xuICAgIGV4cG9ydCBuYW1lc3BhY2UgU2FsZXNUYXhTZXJ2aWNlIHtcbiAgICAgICAgZXhwb3J0IGNvbnN0IGJhc2VVcmwgPSAnU2V0dGluZ3MvU2FsZXNUYXgnO1xuXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIENyZWF0ZShyZXF1ZXN0OiBTZXJlbml0eS5TYXZlUmVxdWVzdDxTYWxlc1RheFJvdz4sIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuU2F2ZVJlc3BvbnNlKSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIFVwZGF0ZShyZXF1ZXN0OiBTZXJlbml0eS5TYXZlUmVxdWVzdDxTYWxlc1RheFJvdz4sIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuU2F2ZVJlc3BvbnNlKSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIERlbGV0ZShyZXF1ZXN0OiBTZXJlbml0eS5EZWxldGVSZXF1ZXN0LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5LkRlbGV0ZVJlc3BvbnNlKSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIFJldHJpZXZlKHJlcXVlc3Q6IFNlcmVuaXR5LlJldHJpZXZlUmVxdWVzdCwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5SZXRyaWV2ZVJlc3BvbnNlPFNhbGVzVGF4Um93PikgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBMaXN0KHJlcXVlc3Q6IFNlcmVuaXR5Lkxpc3RSZXF1ZXN0LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5Lkxpc3RSZXNwb25zZTxTYWxlc1RheFJvdz4pID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcblxuICAgICAgICBleHBvcnQgZGVjbGFyZSBjb25zdCBlbnVtIE1ldGhvZHMge1xuICAgICAgICAgICAgQ3JlYXRlID0gXCJTZXR0aW5ncy9TYWxlc1RheC9DcmVhdGVcIixcbiAgICAgICAgICAgIFVwZGF0ZSA9IFwiU2V0dGluZ3MvU2FsZXNUYXgvVXBkYXRlXCIsXG4gICAgICAgICAgICBEZWxldGUgPSBcIlNldHRpbmdzL1NhbGVzVGF4L0RlbGV0ZVwiLFxuICAgICAgICAgICAgUmV0cmlldmUgPSBcIlNldHRpbmdzL1NhbGVzVGF4L1JldHJpZXZlXCIsXG4gICAgICAgICAgICBMaXN0ID0gXCJTZXR0aW5ncy9TYWxlc1RheC9MaXN0XCJcbiAgICAgICAgfVxuXG4gICAgICAgIFtcbiAgICAgICAgICAgICdDcmVhdGUnLCBcbiAgICAgICAgICAgICdVcGRhdGUnLCBcbiAgICAgICAgICAgICdEZWxldGUnLCBcbiAgICAgICAgICAgICdSZXRyaWV2ZScsIFxuICAgICAgICAgICAgJ0xpc3QnXG4gICAgICAgIF0uZm9yRWFjaCh4ID0+IHtcbiAgICAgICAgICAgICg8YW55PlNhbGVzVGF4U2VydmljZSlbeF0gPSBmdW5jdGlvbiAociwgcywgbykge1xuICAgICAgICAgICAgICAgIHJldHVybiBRLnNlcnZpY2VSZXF1ZXN0KGJhc2VVcmwgKyAnLycgKyB4LCByLCBzLCBvKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbiIsIm5hbWVzcGFjZSBJbmRvdGFsZW50LlRleHRzIHtcblxuICAgIGRlY2xhcmUgbmFtZXNwYWNlIERiIHtcblxuICAgICAgICBuYW1lc3BhY2UgQWRtaW5pc3RyYXRpb24ge1xuXG4gICAgICAgICAgICBuYW1lc3BhY2UgTGFuZ3VhZ2Uge1xuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBJZDogc3RyaW5nO1xuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBJbnNlcnREYXRlOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEluc2VydFVzZXJJZDogc3RyaW5nO1xuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBMYW5ndWFnZUlkOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IExhbmd1YWdlTmFtZTogc3RyaW5nO1xuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBVcGRhdGVEYXRlOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFVwZGF0ZVVzZXJJZDogc3RyaW5nO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBuYW1lc3BhY2UgUm9sZSB7XG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEluc2VydERhdGU6IHN0cmluZztcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgSW5zZXJ0VXNlcklkOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFJvbGVJZDogc3RyaW5nO1xuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBSb2xlTmFtZTogc3RyaW5nO1xuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBVcGRhdGVEYXRlOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFVwZGF0ZVVzZXJJZDogc3RyaW5nO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBuYW1lc3BhY2UgUm9sZVBlcm1pc3Npb24ge1xuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBQZXJtaXNzaW9uS2V5OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFJvbGVJZDogc3RyaW5nO1xuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBSb2xlUGVybWlzc2lvbklkOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFJvbGVSb2xlTmFtZTogc3RyaW5nO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBuYW1lc3BhY2UgVGVuYW50IHtcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgQmlsbE51bWJlckxlbmd0aDogc3RyaW5nO1xuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBCaWxsTnVtYmVyUHJlZml4OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEJpbGxOdW1iZXJVc2VEYXRlOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEJpbGxQYXltZW50TnVtYmVyTGVuZ3RoOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEJpbGxQYXltZW50TnVtYmVyUHJlZml4OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEJpbGxQYXltZW50TnVtYmVyVXNlRGF0ZTogc3RyaW5nO1xuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBDaXR5OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEN1cnJlbmN5OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEN1c3RvbWVyTnVtYmVyTGVuZ3RoOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEN1c3RvbWVyTnVtYmVyUHJlZml4OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEN1c3RvbWVyTnVtYmVyVXNlRGF0ZTogc3RyaW5nO1xuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBEZXNjcmlwdGlvbjogc3RyaW5nO1xuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBFbWFpbDogc3RyaW5nO1xuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBJbnNlcnREYXRlOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEluc2VydFVzZXJJZDogc3RyaW5nO1xuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBJbnZvaWNlTnVtYmVyTGVuZ3RoOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEludm9pY2VOdW1iZXJQcmVmaXg6IHN0cmluZztcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgSW52b2ljZU51bWJlclVzZURhdGU6IHN0cmluZztcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgSW52b2ljZVBheW1lbnROdW1iZXJMZW5ndGg6IHN0cmluZztcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgSW52b2ljZVBheW1lbnROdW1iZXJQcmVmaXg6IHN0cmluZztcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgSW52b2ljZVBheW1lbnROdW1iZXJVc2VEYXRlOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IE1heGltdW1Vc2VyOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFBob25lOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFByb2R1Y3ROdW1iZXJMZW5ndGg6IHN0cmluZztcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgUHJvZHVjdE51bWJlclByZWZpeDogc3RyaW5nO1xuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBQcm9kdWN0TnVtYmVyVXNlRGF0ZTogc3RyaW5nO1xuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBQdXJjaGFzZU51bWJlckxlbmd0aDogc3RyaW5nO1xuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBQdXJjaGFzZU51bWJlclByZWZpeDogc3RyaW5nO1xuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBQdXJjaGFzZU51bWJlclVzZURhdGU6IHN0cmluZztcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgU2FsZXNOdW1iZXJMZW5ndGg6IHN0cmluZztcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgU2FsZXNOdW1iZXJQcmVmaXg6IHN0cmluZztcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgU2FsZXNOdW1iZXJVc2VEYXRlOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFN0YXRlOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFN0cmVldDogc3RyaW5nO1xuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBUZW5hbnRJZDogc3RyaW5nO1xuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBUZW5hbnROYW1lOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFVwZGF0ZURhdGU6IHN0cmluZztcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgVXBkYXRlVXNlcklkOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFZlbmRvck51bWJlckxlbmd0aDogc3RyaW5nO1xuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBWZW5kb3JOdW1iZXJQcmVmaXg6IHN0cmluZztcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgVmVuZG9yTnVtYmVyVXNlRGF0ZTogc3RyaW5nO1xuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBaaXBDb2RlOiBzdHJpbmc7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIG5hbWVzcGFjZSBUcmFuc2xhdGlvbiB7XG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEN1c3RvbVRleHQ6IHN0cmluZztcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgRW50aXR5UGx1cmFsOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEtleTogc3RyaW5nO1xuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBPdmVycmlkZUNvbmZpcm1hdGlvbjogc3RyaW5nO1xuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBTYXZlQ2hhbmdlc0J1dHRvbjogc3RyaW5nO1xuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBTb3VyY2VMYW5ndWFnZTogc3RyaW5nO1xuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBTb3VyY2VUZXh0OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFRhcmdldExhbmd1YWdlOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFRhcmdldFRleHQ6IHN0cmluZztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbmFtZXNwYWNlIFVzZXIge1xuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBEaXNwbGF5TmFtZTogc3RyaW5nO1xuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBFbWFpbDogc3RyaW5nO1xuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBJbnNlcnREYXRlOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEluc2VydFVzZXJJZDogc3RyaW5nO1xuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBJc0FjdGl2ZTogc3RyaW5nO1xuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBJc1RlbmFudEFkbWluOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IExhc3REaXJlY3RvcnlVcGRhdGU6IHN0cmluZztcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgUGFzc3dvcmQ6IHN0cmluZztcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgUGFzc3dvcmRDb25maXJtOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFBhc3N3b3JkSGFzaDogc3RyaW5nO1xuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBQYXNzd29yZFNhbHQ6IHN0cmluZztcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgU291cmNlOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFRlbmFudElkOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFRlbmFudE5hbWU6IHN0cmluZztcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgVXBkYXRlRGF0ZTogc3RyaW5nO1xuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBVcGRhdGVVc2VySWQ6IHN0cmluZztcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgVXNlcklkOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFVzZXJJbWFnZTogc3RyaW5nO1xuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBVc2VybmFtZTogc3RyaW5nO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBuYW1lc3BhY2UgVXNlclBlcm1pc3Npb24ge1xuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBHcmFudGVkOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFBlcm1pc3Npb25LZXk6IHN0cmluZztcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgVXNlcjogc3RyaW5nO1xuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBVc2VySWQ6IHN0cmluZztcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgVXNlclBlcm1pc3Npb25JZDogc3RyaW5nO1xuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBVc2VybmFtZTogc3RyaW5nO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBuYW1lc3BhY2UgVXNlclJvbGUge1xuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBSb2xlSWQ6IHN0cmluZztcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgVXNlcjogc3RyaW5nO1xuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBVc2VySWQ6IHN0cmluZztcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgVXNlclJvbGVJZDogc3RyaW5nO1xuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBVc2VybmFtZTogc3RyaW5nO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgbmFtZXNwYWNlIE1lcmNoYW5kaXNlIHtcblxuICAgICAgICAgICAgbmFtZXNwYWNlIEJyYW5kIHtcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgRGVzY3JpcHRpb246IHN0cmluZztcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgSWQ6IHN0cmluZztcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgSW5zZXJ0RGF0ZTogc3RyaW5nO1xuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBJbnNlcnRVc2VySWQ6IHN0cmluZztcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgTmFtZTogc3RyaW5nO1xuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBUZW5hbnRJZDogc3RyaW5nO1xuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBVcGRhdGVEYXRlOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFVwZGF0ZVVzZXJJZDogc3RyaW5nO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBuYW1lc3BhY2UgQ2F0ZWdvcnkge1xuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBEZXNjcmlwdGlvbjogc3RyaW5nO1xuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBJZDogc3RyaW5nO1xuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBJbnNlcnREYXRlOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEluc2VydFVzZXJJZDogc3RyaW5nO1xuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBOYW1lOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFRlbmFudElkOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFVwZGF0ZURhdGU6IHN0cmluZztcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgVXBkYXRlVXNlcklkOiBzdHJpbmc7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIG5hbWVzcGFjZSBDb2xvdXIge1xuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBEZXNjcmlwdGlvbjogc3RyaW5nO1xuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBJZDogc3RyaW5nO1xuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBJbnNlcnREYXRlOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEluc2VydFVzZXJJZDogc3RyaW5nO1xuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBOYW1lOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFRlbmFudElkOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFVwZGF0ZURhdGU6IHN0cmluZztcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgVXBkYXRlVXNlcklkOiBzdHJpbmc7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIG5hbWVzcGFjZSBGbGF2b3VyIHtcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgRGVzY3JpcHRpb246IHN0cmluZztcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgSWQ6IHN0cmluZztcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgSW5zZXJ0RGF0ZTogc3RyaW5nO1xuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBJbnNlcnRVc2VySWQ6IHN0cmluZztcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgTmFtZTogc3RyaW5nO1xuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBUZW5hbnRJZDogc3RyaW5nO1xuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBVcGRhdGVEYXRlOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFVwZGF0ZVVzZXJJZDogc3RyaW5nO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBuYW1lc3BhY2UgUHJvZHVjdCB7XG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEJhcmNvZGU6IHN0cmluZztcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgQnJhbmRJZDogc3RyaW5nO1xuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBDYXRlZ29yeUlkOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IENvbG91cklkOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IERlc2NyaXB0aW9uOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEZsYXZvdXJJZDogc3RyaW5nO1xuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBJZDogc3RyaW5nO1xuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBJbnNlcnREYXRlOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEluc2VydFVzZXJJZDogc3RyaW5nO1xuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBJbnRlcm5hbENvZGU6IHN0cmluZztcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgTmFtZTogc3RyaW5nO1xuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBQaWN0dXJlOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFB1cmNoYXNlUHJpY2U6IHN0cmluZztcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgUHVyY2hhc2VUYXhJZDogc3RyaW5nO1xuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBTYWxlc1ByaWNlOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFNhbGVzVGF4SWQ6IHN0cmluZztcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgU2l6ZUlkOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFRlbmFudElkOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFVvbUlkOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFVwZGF0ZURhdGU6IHN0cmluZztcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgVXBkYXRlVXNlcklkOiBzdHJpbmc7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIG5hbWVzcGFjZSBTaXplIHtcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgRGVzY3JpcHRpb246IHN0cmluZztcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgSWQ6IHN0cmluZztcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgSW5zZXJ0RGF0ZTogc3RyaW5nO1xuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBJbnNlcnRVc2VySWQ6IHN0cmluZztcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgTmFtZTogc3RyaW5nO1xuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBUZW5hbnRJZDogc3RyaW5nO1xuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBUZW5hbnROYW1lOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFVwZGF0ZURhdGU6IHN0cmluZztcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgVXBkYXRlVXNlcklkOiBzdHJpbmc7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIG5hbWVzcGFjZSBVb20ge1xuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBEZXNjcmlwdGlvbjogc3RyaW5nO1xuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBJZDogc3RyaW5nO1xuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBJbnNlcnREYXRlOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEluc2VydFVzZXJJZDogc3RyaW5nO1xuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBOYW1lOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFRlbmFudElkOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFRlbmFudE5hbWU6IHN0cmluZztcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgVXBkYXRlRGF0ZTogc3RyaW5nO1xuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBVcGRhdGVVc2VySWQ6IHN0cmluZztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIG5hbWVzcGFjZSBQdXJjaGFzZSB7XG5cbiAgICAgICAgICAgIG5hbWVzcGFjZSBCaWxsIHtcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgQmVmb3JlVGF4OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEJpbGxEYXRlOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IERlc2NyaXB0aW9uOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IERpc2NvdW50OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEV4dGVybmFsUmVmZXJlbmNlTnVtYmVyOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IElkOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEluc2VydERhdGU6IHN0cmluZztcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgSW5zZXJ0VXNlcklkOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IE51bWJlcjogc3RyaW5nO1xuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBPdGhlckNoYXJnZTogc3RyaW5nO1xuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBQcm9jdXJlbWVudEdyb3VwOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFB1cmNoYXNlT3JkZXJJZDogc3RyaW5nO1xuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBTdWJUb3RhbDogc3RyaW5nO1xuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBUYXhBbW91bnQ6IHN0cmluZztcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgVGVuYW50SWQ6IHN0cmluZztcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgVG90YWw6IHN0cmluZztcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgVXBkYXRlRGF0ZTogc3RyaW5nO1xuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBVcGRhdGVVc2VySWQ6IHN0cmluZztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbmFtZXNwYWNlIEJpbGxEZXRhaWwge1xuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBCZWZvcmVUYXg6IHN0cmluZztcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgQmlsbElkOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IERpc2NvdW50OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IElkOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEluc2VydERhdGU6IHN0cmluZztcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgSW5zZXJ0VXNlcklkOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFByaWNlOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFByb2R1Y3RJZDogc3RyaW5nO1xuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBRdHk6IHN0cmluZztcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgU3ViVG90YWw6IHN0cmluZztcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgVGF4QW1vdW50OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFRheFBlcmNlbnRhZ2U6IHN0cmluZztcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgVGVuYW50SWQ6IHN0cmluZztcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgVG90YWw6IHN0cmluZztcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgVXBkYXRlRGF0ZTogc3RyaW5nO1xuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBVcGRhdGVVc2VySWQ6IHN0cmluZztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbmFtZXNwYWNlIEJpbGxQYXltZW50IHtcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgQmlsbEFtb3VudDogc3RyaW5nO1xuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBCaWxsSWQ6IHN0cmluZztcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgQ2FzaEJhbmtJZDogc3RyaW5nO1xuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBEZXNjcmlwdGlvbjogc3RyaW5nO1xuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBJZDogc3RyaW5nO1xuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBJbnNlcnREYXRlOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEluc2VydFVzZXJJZDogc3RyaW5nO1xuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBOdW1iZXI6IHN0cmluZztcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgUGF5bWVudEFtb3VudDogc3RyaW5nO1xuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBQYXltZW50RGF0ZTogc3RyaW5nO1xuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBQcm9jdXJlbWVudEdyb3VwOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFRlbmFudElkOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFVwZGF0ZURhdGU6IHN0cmluZztcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgVXBkYXRlVXNlcklkOiBzdHJpbmc7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIG5hbWVzcGFjZSBQdXJjaGFzZU9yZGVyIHtcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgQmVmb3JlVGF4OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IERlc2NyaXB0aW9uOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IERpc2NvdW50OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IElkOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEluc2VydERhdGU6IHN0cmluZztcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgSW5zZXJ0VXNlcklkOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IE51bWJlcjogc3RyaW5nO1xuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBPcmRlckRhdGU6IHN0cmluZztcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgT3RoZXJDaGFyZ2U6IHN0cmluZztcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgUHJvY3VyZW1lbnRHcm91cDogc3RyaW5nO1xuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBTdWJUb3RhbDogc3RyaW5nO1xuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBUYXhBbW91bnQ6IHN0cmluZztcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgVGVuYW50SWQ6IHN0cmluZztcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgVG90YWw6IHN0cmluZztcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgVXBkYXRlRGF0ZTogc3RyaW5nO1xuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBVcGRhdGVVc2VySWQ6IHN0cmluZztcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgVmVuZG9ySWQ6IHN0cmluZztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbmFtZXNwYWNlIFB1cmNoYXNlT3JkZXJEZXRhaWwge1xuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBCZWZvcmVUYXg6IHN0cmluZztcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgRGlzY291bnQ6IHN0cmluZztcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgSWQ6IHN0cmluZztcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgSW5zZXJ0RGF0ZTogc3RyaW5nO1xuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBJbnNlcnRVc2VySWQ6IHN0cmluZztcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgUHJpY2U6IHN0cmluZztcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgUHJvZHVjdElkOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFB1cmNoYXNlT3JkZXJJZDogc3RyaW5nO1xuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBRdHk6IHN0cmluZztcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgU3ViVG90YWw6IHN0cmluZztcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgVGF4QW1vdW50OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFRheFBlcmNlbnRhZ2U6IHN0cmluZztcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgVGVuYW50SWQ6IHN0cmluZztcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgVG90YWw6IHN0cmluZztcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgVXBkYXRlRGF0ZTogc3RyaW5nO1xuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBVcGRhdGVVc2VySWQ6IHN0cmluZztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbmFtZXNwYWNlIFZlbmRvciB7XG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IENpdHk6IHN0cmluZztcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgRGVzY3JpcHRpb246IHN0cmluZztcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgRW1haWw6IHN0cmluZztcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgSWQ6IHN0cmluZztcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgSW5zZXJ0RGF0ZTogc3RyaW5nO1xuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBJbnNlcnRVc2VySWQ6IHN0cmluZztcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgTmFtZTogc3RyaW5nO1xuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBQaG9uZTogc3RyaW5nO1xuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBTdGF0ZTogc3RyaW5nO1xuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBTdHJlZXQ6IHN0cmluZztcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgVGVuYW50SWQ6IHN0cmluZztcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgVXBkYXRlRGF0ZTogc3RyaW5nO1xuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBVcGRhdGVVc2VySWQ6IHN0cmluZztcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgWmlwQ29kZTogc3RyaW5nO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBuYW1lc3BhY2UgVmVuZG9yQ29udGFjdCB7XG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IENpdHk6IHN0cmluZztcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgRGVzY3JpcHRpb246IHN0cmluZztcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgRW1haWw6IHN0cmluZztcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgSWQ6IHN0cmluZztcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgSW5zZXJ0RGF0ZTogc3RyaW5nO1xuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBJbnNlcnRVc2VySWQ6IHN0cmluZztcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgTmFtZTogc3RyaW5nO1xuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBQaG9uZTogc3RyaW5nO1xuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBTdGF0ZTogc3RyaW5nO1xuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBTdHJlZXQ6IHN0cmluZztcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgVGVuYW50SWQ6IHN0cmluZztcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgVXBkYXRlRGF0ZTogc3RyaW5nO1xuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBVcGRhdGVVc2VySWQ6IHN0cmluZztcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgVmVuZG9ySWQ6IHN0cmluZztcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgWmlwQ29kZTogc3RyaW5nO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgbmFtZXNwYWNlIFNhbGVzIHtcblxuICAgICAgICAgICAgbmFtZXNwYWNlIEN1c3RvbWVyIHtcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgQ2l0eTogc3RyaW5nO1xuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBDb250YWN0TGlzdDogc3RyaW5nO1xuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBEZXNjcmlwdGlvbjogc3RyaW5nO1xuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBFbWFpbDogc3RyaW5nO1xuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBJZDogc3RyaW5nO1xuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBOYW1lOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFBob25lOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFN0YXRlOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFN0cmVldDogc3RyaW5nO1xuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBUZW5hbnRJZDogc3RyaW5nO1xuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBUZW5hbnROYW1lOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFppcENvZGU6IHN0cmluZztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbmFtZXNwYWNlIEN1c3RvbWVyQ29udGFjdCB7XG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IENpdHk6IHN0cmluZztcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgQ3VzdG9tZXJJZDogc3RyaW5nO1xuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBEZXNjcmlwdGlvbjogc3RyaW5nO1xuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBFbWFpbDogc3RyaW5nO1xuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBJZDogc3RyaW5nO1xuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBJbnNlcnREYXRlOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEluc2VydFVzZXJJZDogc3RyaW5nO1xuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBOYW1lOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFBob25lOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFN0YXRlOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFN0cmVldDogc3RyaW5nO1xuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBUZW5hbnRJZDogc3RyaW5nO1xuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBUZW5hbnROYW1lOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFVwZGF0ZURhdGU6IHN0cmluZztcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgVXBkYXRlVXNlcklkOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFppcENvZGU6IHN0cmluZztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbmFtZXNwYWNlIEludm9pY2Uge1xuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBCZWZvcmVUYXg6IHN0cmluZztcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgRGVzY3JpcHRpb246IHN0cmluZztcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgRGlzY291bnQ6IHN0cmluZztcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgSWQ6IHN0cmluZztcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgSW5zZXJ0RGF0ZTogc3RyaW5nO1xuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBJbnNlcnRVc2VySWQ6IHN0cmluZztcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgSW52b2ljZURhdGU6IHN0cmluZztcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgTnVtYmVyOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IE90aGVyQ2hhcmdlOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFNhbGVzR3JvdXA6IHN0cmluZztcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgU2FsZXNPcmRlcklkOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFN1YlRvdGFsOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFRheEFtb3VudDogc3RyaW5nO1xuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBUZW5hbnRJZDogc3RyaW5nO1xuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBUb3RhbDogc3RyaW5nO1xuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBVcGRhdGVEYXRlOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFVwZGF0ZVVzZXJJZDogc3RyaW5nO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBuYW1lc3BhY2UgSW52b2ljZURldGFpbCB7XG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEJlZm9yZVRheDogc3RyaW5nO1xuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBEaXNjb3VudDogc3RyaW5nO1xuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBJZDogc3RyaW5nO1xuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBJbnNlcnREYXRlOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEluc2VydFVzZXJJZDogc3RyaW5nO1xuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBJbnZvaWNlSWQ6IHN0cmluZztcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgUHJpY2U6IHN0cmluZztcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgUHJvZHVjdElkOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFF0eTogc3RyaW5nO1xuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBTdWJUb3RhbDogc3RyaW5nO1xuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBUYXhBbW91bnQ6IHN0cmluZztcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgVGF4UGVyY2VudGFnZTogc3RyaW5nO1xuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBUZW5hbnRJZDogc3RyaW5nO1xuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBUb3RhbDogc3RyaW5nO1xuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBVcGRhdGVEYXRlOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFVwZGF0ZVVzZXJJZDogc3RyaW5nO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBuYW1lc3BhY2UgSW52b2ljZVBheW1lbnQge1xuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBDYXNoQmFua0lkOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IERlc2NyaXB0aW9uOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IElkOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEluc2VydERhdGU6IHN0cmluZztcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgSW5zZXJ0VXNlcklkOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEludm9pY2VBbW91bnQ6IHN0cmluZztcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgSW52b2ljZUlkOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IE51bWJlcjogc3RyaW5nO1xuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBQYXltZW50QW1vdW50OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFBheW1lbnREYXRlOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFNhbGVzR3JvdXA6IHN0cmluZztcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgVGVuYW50SWQ6IHN0cmluZztcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgVXBkYXRlRGF0ZTogc3RyaW5nO1xuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBVcGRhdGVVc2VySWQ6IHN0cmluZztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbmFtZXNwYWNlIFNhbGVzQ2hhbm5lbCB7XG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IERlc2NyaXB0aW9uOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IElkOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEluc2VydERhdGU6IHN0cmluZztcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgSW5zZXJ0VXNlcklkOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IE5hbWU6IHN0cmluZztcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgVGVuYW50SWQ6IHN0cmluZztcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgVXBkYXRlRGF0ZTogc3RyaW5nO1xuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBVcGRhdGVVc2VySWQ6IHN0cmluZztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbmFtZXNwYWNlIFNhbGVzT3JkZXIge1xuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBCZWZvcmVUYXg6IHN0cmluZztcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgQ3VzdG9tZXJJZDogc3RyaW5nO1xuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBEZXNjcmlwdGlvbjogc3RyaW5nO1xuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBEaXNjb3VudDogc3RyaW5nO1xuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBJZDogc3RyaW5nO1xuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBJbnNlcnREYXRlOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEluc2VydFVzZXJJZDogc3RyaW5nO1xuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBOdW1iZXI6IHN0cmluZztcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgT3JkZXJEYXRlOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IE90aGVyQ2hhcmdlOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFNhbGVzQ2hhbm5lbElkOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFNhbGVzR3JvdXA6IHN0cmluZztcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgU3ViVG90YWw6IHN0cmluZztcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgVGF4QW1vdW50OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFRlbmFudElkOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFRvdGFsOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFVwZGF0ZURhdGU6IHN0cmluZztcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgVXBkYXRlVXNlcklkOiBzdHJpbmc7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIG5hbWVzcGFjZSBTYWxlc09yZGVyRGV0YWlsIHtcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgQmVmb3JlVGF4OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IERpc2NvdW50OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IElkOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEluc2VydERhdGU6IHN0cmluZztcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgSW5zZXJ0VXNlcklkOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFByaWNlOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFByb2R1Y3RJZDogc3RyaW5nO1xuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBRdHk6IHN0cmluZztcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgU2FsZXNPcmRlcklkOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFN1YlRvdGFsOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFRheEFtb3VudDogc3RyaW5nO1xuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBUYXhQZXJjZW50YWdlOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFRlbmFudElkOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFRvdGFsOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFVwZGF0ZURhdGU6IHN0cmluZztcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgVXBkYXRlVXNlcklkOiBzdHJpbmc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBuYW1lc3BhY2UgU2V0dGluZ3Mge1xuXG4gICAgICAgICAgICBuYW1lc3BhY2UgQ2FzaEJhbmsge1xuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBBY2NvdW50TnVtYmVyOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IENpdHk6IHN0cmluZztcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgRGVzY3JpcHRpb246IHN0cmluZztcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgRW1haWw6IHN0cmluZztcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgSWQ6IHN0cmluZztcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgSW5zZXJ0RGF0ZTogc3RyaW5nO1xuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBJbnNlcnRVc2VySWQ6IHN0cmluZztcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgTmFtZTogc3RyaW5nO1xuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBQaG9uZTogc3RyaW5nO1xuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBTdGF0ZTogc3RyaW5nO1xuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBTdHJlZXQ6IHN0cmluZztcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgVGVuYW50SWQ6IHN0cmluZztcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgVXBkYXRlRGF0ZTogc3RyaW5nO1xuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBVcGRhdGVVc2VySWQ6IHN0cmluZztcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgWmlwQ29kZTogc3RyaW5nO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBuYW1lc3BhY2UgTXlDb21wYW55IHtcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgQmlsbE51bWJlckxlbmd0aDogc3RyaW5nO1xuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBCaWxsTnVtYmVyUHJlZml4OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEJpbGxOdW1iZXJVc2VEYXRlOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEJpbGxQYXltZW50TnVtYmVyTGVuZ3RoOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEJpbGxQYXltZW50TnVtYmVyUHJlZml4OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEJpbGxQYXltZW50TnVtYmVyVXNlRGF0ZTogc3RyaW5nO1xuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBDaXR5OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEN1cnJlbmN5OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEN1c3RvbWVyTnVtYmVyTGVuZ3RoOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEN1c3RvbWVyTnVtYmVyUHJlZml4OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEN1c3RvbWVyTnVtYmVyVXNlRGF0ZTogc3RyaW5nO1xuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBEZXNjcmlwdGlvbjogc3RyaW5nO1xuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBFbWFpbDogc3RyaW5nO1xuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBJbnNlcnREYXRlOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEluc2VydFVzZXJJZDogc3RyaW5nO1xuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBJbnZvaWNlTnVtYmVyTGVuZ3RoOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEludm9pY2VOdW1iZXJQcmVmaXg6IHN0cmluZztcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgSW52b2ljZU51bWJlclVzZURhdGU6IHN0cmluZztcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgSW52b2ljZVBheW1lbnROdW1iZXJMZW5ndGg6IHN0cmluZztcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgSW52b2ljZVBheW1lbnROdW1iZXJQcmVmaXg6IHN0cmluZztcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgSW52b2ljZVBheW1lbnROdW1iZXJVc2VEYXRlOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IE1heGltdW1Vc2VyOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFBob25lOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFByb2R1Y3ROdW1iZXJMZW5ndGg6IHN0cmluZztcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgUHJvZHVjdE51bWJlclByZWZpeDogc3RyaW5nO1xuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBQcm9kdWN0TnVtYmVyVXNlRGF0ZTogc3RyaW5nO1xuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBQdXJjaGFzZU51bWJlckxlbmd0aDogc3RyaW5nO1xuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBQdXJjaGFzZU51bWJlclByZWZpeDogc3RyaW5nO1xuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBQdXJjaGFzZU51bWJlclVzZURhdGU6IHN0cmluZztcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgU2FsZXNOdW1iZXJMZW5ndGg6IHN0cmluZztcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgU2FsZXNOdW1iZXJQcmVmaXg6IHN0cmluZztcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgU2FsZXNOdW1iZXJVc2VEYXRlOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFN0YXRlOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFN0cmVldDogc3RyaW5nO1xuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBUZW5hbnRJZDogc3RyaW5nO1xuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBUZW5hbnROYW1lOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFVwZGF0ZURhdGU6IHN0cmluZztcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgVXBkYXRlVXNlcklkOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFZlbmRvck51bWJlckxlbmd0aDogc3RyaW5nO1xuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBWZW5kb3JOdW1iZXJQcmVmaXg6IHN0cmluZztcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgVmVuZG9yTnVtYmVyVXNlRGF0ZTogc3RyaW5nO1xuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBaaXBDb2RlOiBzdHJpbmc7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIG5hbWVzcGFjZSBQdXJjaGFzZVRheCB7XG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IERlc2NyaXB0aW9uOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IElkOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEluc2VydERhdGU6IHN0cmluZztcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgSW5zZXJ0VXNlcklkOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IE5hbWU6IHN0cmluZztcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgVGF4UmF0ZVBlcmNlbnRhZ2U6IHN0cmluZztcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgVGVuYW50SWQ6IHN0cmluZztcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgVXBkYXRlRGF0ZTogc3RyaW5nO1xuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBVcGRhdGVVc2VySWQ6IHN0cmluZztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbmFtZXNwYWNlIFNhbGVzVGF4IHtcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgRGVzY3JpcHRpb246IHN0cmluZztcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgSWQ6IHN0cmluZztcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgSW5zZXJ0RGF0ZTogc3RyaW5nO1xuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBJbnNlcnRVc2VySWQ6IHN0cmluZztcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgTmFtZTogc3RyaW5nO1xuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBUYXhSYXRlUGVyY2VudGFnZTogc3RyaW5nO1xuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBUZW5hbnRJZDogc3RyaW5nO1xuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBVcGRhdGVEYXRlOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFVwZGF0ZVVzZXJJZDogc3RyaW5nO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZGVjbGFyZSBuYW1lc3BhY2UgRm9ybXMge1xuXG4gICAgICAgIG5hbWVzcGFjZSBNZW1iZXJzaGlwIHtcblxuICAgICAgICAgICAgbmFtZXNwYWNlIENoYW5nZVBhc3N3b3JkIHtcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgRm9ybVRpdGxlOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFN1Ym1pdEJ1dHRvbjogc3RyaW5nO1xuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBTdWNjZXNzOiBzdHJpbmc7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIG5hbWVzcGFjZSBGb3Jnb3RQYXNzd29yZCB7XG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEJhY2tUb0xvZ2luOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEZvcm1JbmZvOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEZvcm1UaXRsZTogc3RyaW5nO1xuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBTdWJtaXRCdXR0b246IHN0cmluZztcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgU3VjY2Vzczogc3RyaW5nO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBuYW1lc3BhY2UgTG9naW4ge1xuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBGYWNlYm9va0J1dHRvbjogc3RyaW5nO1xuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBGb3Jnb3RQYXNzd29yZDogc3RyaW5nO1xuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBHb29nbGVCdXR0b246IHN0cmluZztcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgTG9naW5Ub1lvdXJBY2NvdW50OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IE9SOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFJlbWVtYmVyTWU6IHN0cmluZztcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgU2lnbkluQnV0dG9uOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFNpZ25VcEJ1dHRvbjogc3RyaW5nO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBuYW1lc3BhY2UgUmVzZXRQYXNzd29yZCB7XG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEJhY2tUb0xvZ2luOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEVtYWlsU3ViamVjdDogc3RyaW5nO1xuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBGb3JtVGl0bGU6IHN0cmluZztcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgU3VibWl0QnV0dG9uOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFN1Y2Nlc3M6IHN0cmluZztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbmFtZXNwYWNlIFNpZ25VcCB7XG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEFjY2VwdFRlcm1zOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEFjdGl2YXRlRW1haWxTdWJqZWN0OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEFjdGl2YXRpb25Db21wbGV0ZU1lc3NhZ2U6IHN0cmluZztcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgQmFja1RvTG9naW46IHN0cmluZztcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgQ29uZmlybUVtYWlsOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IENvbmZpcm1QYXNzd29yZDogc3RyaW5nO1xuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBEaXNwbGF5TmFtZTogc3RyaW5nO1xuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBFbWFpbDogc3RyaW5nO1xuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBGb3JtSW5mbzogc3RyaW5nO1xuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBGb3JtVGl0bGU6IHN0cmluZztcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgUGFzc3dvcmQ6IHN0cmluZztcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgU3VibWl0QnV0dG9uOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFN1Y2Nlc3M6IHN0cmluZztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGRlY2xhcmUgbmFtZXNwYWNlIE5hdmlnYXRpb24ge1xuICAgICAgICBleHBvcnQgY29uc3QgTG9nb3V0TGluazogc3RyaW5nO1xuICAgICAgICBleHBvcnQgY29uc3QgU2l0ZVRpdGxlOiBzdHJpbmc7XG4gICAgfVxuXG4gICAgZGVjbGFyZSBuYW1lc3BhY2UgU2l0ZSB7XG5cbiAgICAgICAgbmFtZXNwYWNlIEFjY2Vzc0RlbmllZCB7XG4gICAgICAgICAgICBleHBvcnQgY29uc3QgQ2xpY2tUb0NoYW5nZVVzZXI6IHN0cmluZztcbiAgICAgICAgICAgIGV4cG9ydCBjb25zdCBDbGlja1RvTG9naW46IHN0cmluZztcbiAgICAgICAgICAgIGV4cG9ydCBjb25zdCBMYWNrUGVybWlzc2lvbnM6IHN0cmluZztcbiAgICAgICAgICAgIGV4cG9ydCBjb25zdCBOb3RMb2dnZWRJbjogc3RyaW5nO1xuICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFBhZ2VUaXRsZTogc3RyaW5nO1xuICAgICAgICB9XG5cbiAgICAgICAgbmFtZXNwYWNlIEJhc2ljUHJvZ3Jlc3NEaWFsb2cge1xuICAgICAgICAgICAgZXhwb3J0IGNvbnN0IENhbmNlbFRpdGxlOiBzdHJpbmc7XG4gICAgICAgICAgICBleHBvcnQgY29uc3QgUGxlYXNlV2FpdDogc3RyaW5nO1xuICAgICAgICB9XG5cbiAgICAgICAgbmFtZXNwYWNlIEJ1bGtTZXJ2aWNlQWN0aW9uIHtcbiAgICAgICAgICAgIGV4cG9ydCBjb25zdCBBbGxIYWRFcnJvcnNGb3JtYXQ6IHN0cmluZztcbiAgICAgICAgICAgIGV4cG9ydCBjb25zdCBBbGxTdWNjZXNzRm9ybWF0OiBzdHJpbmc7XG4gICAgICAgICAgICBleHBvcnQgY29uc3QgQ29uZmlybWF0aW9uRm9ybWF0OiBzdHJpbmc7XG4gICAgICAgICAgICBleHBvcnQgY29uc3QgRXJyb3JDb3VudDogc3RyaW5nO1xuICAgICAgICAgICAgZXhwb3J0IGNvbnN0IE5vdGhpbmdUb1Byb2Nlc3M6IHN0cmluZztcbiAgICAgICAgICAgIGV4cG9ydCBjb25zdCBTb21lSGFkRXJyb3JzRm9ybWF0OiBzdHJpbmc7XG4gICAgICAgICAgICBleHBvcnQgY29uc3QgU3VjY2Vzc0NvdW50OiBzdHJpbmc7XG4gICAgICAgIH1cblxuICAgICAgICBuYW1lc3BhY2UgRGFzaGJvYXJkIHtcbiAgICAgICAgICAgIGV4cG9ydCBjb25zdCBDb250ZW50RGVzY3JpcHRpb246IHN0cmluZztcbiAgICAgICAgfVxuXG4gICAgICAgIG5hbWVzcGFjZSBMYXlvdXQge1xuICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEZvb3RlckNvcHlyaWdodDogc3RyaW5nO1xuICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEZvb3RlckluZm86IHN0cmluZztcbiAgICAgICAgICAgIGV4cG9ydCBjb25zdCBGb290ZXJSaWdodHM6IHN0cmluZztcbiAgICAgICAgICAgIGV4cG9ydCBjb25zdCBHZW5lcmFsU2V0dGluZ3M6IHN0cmluZztcbiAgICAgICAgICAgIGV4cG9ydCBjb25zdCBMYW5ndWFnZTogc3RyaW5nO1xuICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFRoZW1lOiBzdHJpbmc7XG4gICAgICAgICAgICBleHBvcnQgY29uc3QgVGhlbWVCbGFjazogc3RyaW5nO1xuICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFRoZW1lQmxhY2tMaWdodDogc3RyaW5nO1xuICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFRoZW1lQmx1ZTogc3RyaW5nO1xuICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFRoZW1lQmx1ZUxpZ2h0OiBzdHJpbmc7XG4gICAgICAgICAgICBleHBvcnQgY29uc3QgVGhlbWVHcmVlbjogc3RyaW5nO1xuICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFRoZW1lR3JlZW5MaWdodDogc3RyaW5nO1xuICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFRoZW1lUHVycGxlOiBzdHJpbmc7XG4gICAgICAgICAgICBleHBvcnQgY29uc3QgVGhlbWVQdXJwbGVMaWdodDogc3RyaW5nO1xuICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFRoZW1lUmVkOiBzdHJpbmc7XG4gICAgICAgICAgICBleHBvcnQgY29uc3QgVGhlbWVSZWRMaWdodDogc3RyaW5nO1xuICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFRoZW1lWWVsbG93OiBzdHJpbmc7XG4gICAgICAgICAgICBleHBvcnQgY29uc3QgVGhlbWVZZWxsb3dMaWdodDogc3RyaW5nO1xuICAgICAgICB9XG5cbiAgICAgICAgbmFtZXNwYWNlIFJvbGVQZXJtaXNzaW9uRGlhbG9nIHtcbiAgICAgICAgICAgIGV4cG9ydCBjb25zdCBEaWFsb2dUaXRsZTogc3RyaW5nO1xuICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEVkaXRCdXR0b246IHN0cmluZztcbiAgICAgICAgICAgIGV4cG9ydCBjb25zdCBTYXZlU3VjY2Vzczogc3RyaW5nO1xuICAgICAgICB9XG5cbiAgICAgICAgbmFtZXNwYWNlIFVzZXJEaWFsb2cge1xuICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEVkaXRQZXJtaXNzaW9uc0J1dHRvbjogc3RyaW5nO1xuICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEVkaXRSb2xlc0J1dHRvbjogc3RyaW5nO1xuICAgICAgICB9XG5cbiAgICAgICAgbmFtZXNwYWNlIFVzZXJQZXJtaXNzaW9uRGlhbG9nIHtcbiAgICAgICAgICAgIGV4cG9ydCBjb25zdCBEaWFsb2dUaXRsZTogc3RyaW5nO1xuICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEdyYW50OiBzdHJpbmc7XG4gICAgICAgICAgICBleHBvcnQgY29uc3QgUGVybWlzc2lvbjogc3RyaW5nO1xuICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFJldm9rZTogc3RyaW5nO1xuICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFNhdmVTdWNjZXNzOiBzdHJpbmc7XG4gICAgICAgIH1cblxuICAgICAgICBuYW1lc3BhY2UgVXNlclJvbGVEaWFsb2cge1xuICAgICAgICAgICAgZXhwb3J0IGNvbnN0IERpYWxvZ1RpdGxlOiBzdHJpbmc7XG4gICAgICAgICAgICBleHBvcnQgY29uc3QgU2F2ZVN1Y2Nlc3M6IHN0cmluZztcbiAgICAgICAgfVxuXG4gICAgICAgIG5hbWVzcGFjZSBWYWxpZGF0aW9uRXJyb3Ige1xuICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFRpdGxlOiBzdHJpbmc7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBkZWNsYXJlIG5hbWVzcGFjZSBWYWxpZGF0aW9uIHtcbiAgICAgICAgZXhwb3J0IGNvbnN0IEF1dGhlbnRpY2F0aW9uRXJyb3I6IHN0cmluZztcbiAgICAgICAgZXhwb3J0IGNvbnN0IENhbnRGaW5kVXNlcldpdGhFbWFpbDogc3RyaW5nO1xuICAgICAgICBleHBvcnQgY29uc3QgQ3VycmVudFBhc3N3b3JkTWlzbWF0Y2g6IHN0cmluZztcbiAgICAgICAgZXhwb3J0IGNvbnN0IERlbGV0ZUZvcmVpZ25LZXlFcnJvcjogc3RyaW5nO1xuICAgICAgICBleHBvcnQgY29uc3QgRW1haWxDb25maXJtOiBzdHJpbmc7XG4gICAgICAgIGV4cG9ydCBjb25zdCBFbWFpbEluVXNlOiBzdHJpbmc7XG4gICAgICAgIGV4cG9ydCBjb25zdCBJbnZhbGlkQWN0aXZhdGVUb2tlbjogc3RyaW5nO1xuICAgICAgICBleHBvcnQgY29uc3QgSW52YWxpZFJlc2V0VG9rZW46IHN0cmluZztcbiAgICAgICAgZXhwb3J0IGNvbnN0IE1pblJlcXVpcmVkUGFzc3dvcmRMZW5ndGg6IHN0cmluZztcbiAgICAgICAgZXhwb3J0IGNvbnN0IFNhdmVQcmltYXJ5S2V5RXJyb3I6IHN0cmluZztcbiAgICB9XG5cbiAgICBJbmRvdGFsZW50WydUZXh0cyddID0gUS5wcm94eVRleHRzKFRleHRzLCAnJywge0RiOntBZG1pbmlzdHJhdGlvbjp7TGFuZ3VhZ2U6e0lkOjEsSW5zZXJ0RGF0ZToxLEluc2VydFVzZXJJZDoxLExhbmd1YWdlSWQ6MSxMYW5ndWFnZU5hbWU6MSxVcGRhdGVEYXRlOjEsVXBkYXRlVXNlcklkOjF9LFJvbGU6e0luc2VydERhdGU6MSxJbnNlcnRVc2VySWQ6MSxSb2xlSWQ6MSxSb2xlTmFtZToxLFVwZGF0ZURhdGU6MSxVcGRhdGVVc2VySWQ6MX0sUm9sZVBlcm1pc3Npb246e1Blcm1pc3Npb25LZXk6MSxSb2xlSWQ6MSxSb2xlUGVybWlzc2lvbklkOjEsUm9sZVJvbGVOYW1lOjF9LFRlbmFudDp7QmlsbE51bWJlckxlbmd0aDoxLEJpbGxOdW1iZXJQcmVmaXg6MSxCaWxsTnVtYmVyVXNlRGF0ZToxLEJpbGxQYXltZW50TnVtYmVyTGVuZ3RoOjEsQmlsbFBheW1lbnROdW1iZXJQcmVmaXg6MSxCaWxsUGF5bWVudE51bWJlclVzZURhdGU6MSxDaXR5OjEsQ3VycmVuY3k6MSxDdXN0b21lck51bWJlckxlbmd0aDoxLEN1c3RvbWVyTnVtYmVyUHJlZml4OjEsQ3VzdG9tZXJOdW1iZXJVc2VEYXRlOjEsRGVzY3JpcHRpb246MSxFbWFpbDoxLEluc2VydERhdGU6MSxJbnNlcnRVc2VySWQ6MSxJbnZvaWNlTnVtYmVyTGVuZ3RoOjEsSW52b2ljZU51bWJlclByZWZpeDoxLEludm9pY2VOdW1iZXJVc2VEYXRlOjEsSW52b2ljZVBheW1lbnROdW1iZXJMZW5ndGg6MSxJbnZvaWNlUGF5bWVudE51bWJlclByZWZpeDoxLEludm9pY2VQYXltZW50TnVtYmVyVXNlRGF0ZToxLE1heGltdW1Vc2VyOjEsUGhvbmU6MSxQcm9kdWN0TnVtYmVyTGVuZ3RoOjEsUHJvZHVjdE51bWJlclByZWZpeDoxLFByb2R1Y3ROdW1iZXJVc2VEYXRlOjEsUHVyY2hhc2VOdW1iZXJMZW5ndGg6MSxQdXJjaGFzZU51bWJlclByZWZpeDoxLFB1cmNoYXNlTnVtYmVyVXNlRGF0ZToxLFNhbGVzTnVtYmVyTGVuZ3RoOjEsU2FsZXNOdW1iZXJQcmVmaXg6MSxTYWxlc051bWJlclVzZURhdGU6MSxTdGF0ZToxLFN0cmVldDoxLFRlbmFudElkOjEsVGVuYW50TmFtZToxLFVwZGF0ZURhdGU6MSxVcGRhdGVVc2VySWQ6MSxWZW5kb3JOdW1iZXJMZW5ndGg6MSxWZW5kb3JOdW1iZXJQcmVmaXg6MSxWZW5kb3JOdW1iZXJVc2VEYXRlOjEsWmlwQ29kZToxfSxUcmFuc2xhdGlvbjp7Q3VzdG9tVGV4dDoxLEVudGl0eVBsdXJhbDoxLEtleToxLE92ZXJyaWRlQ29uZmlybWF0aW9uOjEsU2F2ZUNoYW5nZXNCdXR0b246MSxTb3VyY2VMYW5ndWFnZToxLFNvdXJjZVRleHQ6MSxUYXJnZXRMYW5ndWFnZToxLFRhcmdldFRleHQ6MX0sVXNlcjp7RGlzcGxheU5hbWU6MSxFbWFpbDoxLEluc2VydERhdGU6MSxJbnNlcnRVc2VySWQ6MSxJc0FjdGl2ZToxLElzVGVuYW50QWRtaW46MSxMYXN0RGlyZWN0b3J5VXBkYXRlOjEsUGFzc3dvcmQ6MSxQYXNzd29yZENvbmZpcm06MSxQYXNzd29yZEhhc2g6MSxQYXNzd29yZFNhbHQ6MSxTb3VyY2U6MSxUZW5hbnRJZDoxLFRlbmFudE5hbWU6MSxVcGRhdGVEYXRlOjEsVXBkYXRlVXNlcklkOjEsVXNlcklkOjEsVXNlckltYWdlOjEsVXNlcm5hbWU6MX0sVXNlclBlcm1pc3Npb246e0dyYW50ZWQ6MSxQZXJtaXNzaW9uS2V5OjEsVXNlcjoxLFVzZXJJZDoxLFVzZXJQZXJtaXNzaW9uSWQ6MSxVc2VybmFtZToxfSxVc2VyUm9sZTp7Um9sZUlkOjEsVXNlcjoxLFVzZXJJZDoxLFVzZXJSb2xlSWQ6MSxVc2VybmFtZToxfX0sTWVyY2hhbmRpc2U6e0JyYW5kOntEZXNjcmlwdGlvbjoxLElkOjEsSW5zZXJ0RGF0ZToxLEluc2VydFVzZXJJZDoxLE5hbWU6MSxUZW5hbnRJZDoxLFVwZGF0ZURhdGU6MSxVcGRhdGVVc2VySWQ6MX0sQ2F0ZWdvcnk6e0Rlc2NyaXB0aW9uOjEsSWQ6MSxJbnNlcnREYXRlOjEsSW5zZXJ0VXNlcklkOjEsTmFtZToxLFRlbmFudElkOjEsVXBkYXRlRGF0ZToxLFVwZGF0ZVVzZXJJZDoxfSxDb2xvdXI6e0Rlc2NyaXB0aW9uOjEsSWQ6MSxJbnNlcnREYXRlOjEsSW5zZXJ0VXNlcklkOjEsTmFtZToxLFRlbmFudElkOjEsVXBkYXRlRGF0ZToxLFVwZGF0ZVVzZXJJZDoxfSxGbGF2b3VyOntEZXNjcmlwdGlvbjoxLElkOjEsSW5zZXJ0RGF0ZToxLEluc2VydFVzZXJJZDoxLE5hbWU6MSxUZW5hbnRJZDoxLFVwZGF0ZURhdGU6MSxVcGRhdGVVc2VySWQ6MX0sUHJvZHVjdDp7QmFyY29kZToxLEJyYW5kSWQ6MSxDYXRlZ29yeUlkOjEsQ29sb3VySWQ6MSxEZXNjcmlwdGlvbjoxLEZsYXZvdXJJZDoxLElkOjEsSW5zZXJ0RGF0ZToxLEluc2VydFVzZXJJZDoxLEludGVybmFsQ29kZToxLE5hbWU6MSxQaWN0dXJlOjEsUHVyY2hhc2VQcmljZToxLFB1cmNoYXNlVGF4SWQ6MSxTYWxlc1ByaWNlOjEsU2FsZXNUYXhJZDoxLFNpemVJZDoxLFRlbmFudElkOjEsVW9tSWQ6MSxVcGRhdGVEYXRlOjEsVXBkYXRlVXNlcklkOjF9LFNpemU6e0Rlc2NyaXB0aW9uOjEsSWQ6MSxJbnNlcnREYXRlOjEsSW5zZXJ0VXNlcklkOjEsTmFtZToxLFRlbmFudElkOjEsVGVuYW50TmFtZToxLFVwZGF0ZURhdGU6MSxVcGRhdGVVc2VySWQ6MX0sVW9tOntEZXNjcmlwdGlvbjoxLElkOjEsSW5zZXJ0RGF0ZToxLEluc2VydFVzZXJJZDoxLE5hbWU6MSxUZW5hbnRJZDoxLFRlbmFudE5hbWU6MSxVcGRhdGVEYXRlOjEsVXBkYXRlVXNlcklkOjF9fSxQdXJjaGFzZTp7QmlsbDp7QmVmb3JlVGF4OjEsQmlsbERhdGU6MSxEZXNjcmlwdGlvbjoxLERpc2NvdW50OjEsRXh0ZXJuYWxSZWZlcmVuY2VOdW1iZXI6MSxJZDoxLEluc2VydERhdGU6MSxJbnNlcnRVc2VySWQ6MSxOdW1iZXI6MSxPdGhlckNoYXJnZToxLFByb2N1cmVtZW50R3JvdXA6MSxQdXJjaGFzZU9yZGVySWQ6MSxTdWJUb3RhbDoxLFRheEFtb3VudDoxLFRlbmFudElkOjEsVG90YWw6MSxVcGRhdGVEYXRlOjEsVXBkYXRlVXNlcklkOjF9LEJpbGxEZXRhaWw6e0JlZm9yZVRheDoxLEJpbGxJZDoxLERpc2NvdW50OjEsSWQ6MSxJbnNlcnREYXRlOjEsSW5zZXJ0VXNlcklkOjEsUHJpY2U6MSxQcm9kdWN0SWQ6MSxRdHk6MSxTdWJUb3RhbDoxLFRheEFtb3VudDoxLFRheFBlcmNlbnRhZ2U6MSxUZW5hbnRJZDoxLFRvdGFsOjEsVXBkYXRlRGF0ZToxLFVwZGF0ZVVzZXJJZDoxfSxCaWxsUGF5bWVudDp7QmlsbEFtb3VudDoxLEJpbGxJZDoxLENhc2hCYW5rSWQ6MSxEZXNjcmlwdGlvbjoxLElkOjEsSW5zZXJ0RGF0ZToxLEluc2VydFVzZXJJZDoxLE51bWJlcjoxLFBheW1lbnRBbW91bnQ6MSxQYXltZW50RGF0ZToxLFByb2N1cmVtZW50R3JvdXA6MSxUZW5hbnRJZDoxLFVwZGF0ZURhdGU6MSxVcGRhdGVVc2VySWQ6MX0sUHVyY2hhc2VPcmRlcjp7QmVmb3JlVGF4OjEsRGVzY3JpcHRpb246MSxEaXNjb3VudDoxLElkOjEsSW5zZXJ0RGF0ZToxLEluc2VydFVzZXJJZDoxLE51bWJlcjoxLE9yZGVyRGF0ZToxLE90aGVyQ2hhcmdlOjEsUHJvY3VyZW1lbnRHcm91cDoxLFN1YlRvdGFsOjEsVGF4QW1vdW50OjEsVGVuYW50SWQ6MSxUb3RhbDoxLFVwZGF0ZURhdGU6MSxVcGRhdGVVc2VySWQ6MSxWZW5kb3JJZDoxfSxQdXJjaGFzZU9yZGVyRGV0YWlsOntCZWZvcmVUYXg6MSxEaXNjb3VudDoxLElkOjEsSW5zZXJ0RGF0ZToxLEluc2VydFVzZXJJZDoxLFByaWNlOjEsUHJvZHVjdElkOjEsUHVyY2hhc2VPcmRlcklkOjEsUXR5OjEsU3ViVG90YWw6MSxUYXhBbW91bnQ6MSxUYXhQZXJjZW50YWdlOjEsVGVuYW50SWQ6MSxUb3RhbDoxLFVwZGF0ZURhdGU6MSxVcGRhdGVVc2VySWQ6MX0sVmVuZG9yOntDaXR5OjEsRGVzY3JpcHRpb246MSxFbWFpbDoxLElkOjEsSW5zZXJ0RGF0ZToxLEluc2VydFVzZXJJZDoxLE5hbWU6MSxQaG9uZToxLFN0YXRlOjEsU3RyZWV0OjEsVGVuYW50SWQ6MSxVcGRhdGVEYXRlOjEsVXBkYXRlVXNlcklkOjEsWmlwQ29kZToxfSxWZW5kb3JDb250YWN0OntDaXR5OjEsRGVzY3JpcHRpb246MSxFbWFpbDoxLElkOjEsSW5zZXJ0RGF0ZToxLEluc2VydFVzZXJJZDoxLE5hbWU6MSxQaG9uZToxLFN0YXRlOjEsU3RyZWV0OjEsVGVuYW50SWQ6MSxVcGRhdGVEYXRlOjEsVXBkYXRlVXNlcklkOjEsVmVuZG9ySWQ6MSxaaXBDb2RlOjF9fSxTYWxlczp7Q3VzdG9tZXI6e0NpdHk6MSxDb250YWN0TGlzdDoxLERlc2NyaXB0aW9uOjEsRW1haWw6MSxJZDoxLE5hbWU6MSxQaG9uZToxLFN0YXRlOjEsU3RyZWV0OjEsVGVuYW50SWQ6MSxUZW5hbnROYW1lOjEsWmlwQ29kZToxfSxDdXN0b21lckNvbnRhY3Q6e0NpdHk6MSxDdXN0b21lcklkOjEsRGVzY3JpcHRpb246MSxFbWFpbDoxLElkOjEsSW5zZXJ0RGF0ZToxLEluc2VydFVzZXJJZDoxLE5hbWU6MSxQaG9uZToxLFN0YXRlOjEsU3RyZWV0OjEsVGVuYW50SWQ6MSxUZW5hbnROYW1lOjEsVXBkYXRlRGF0ZToxLFVwZGF0ZVVzZXJJZDoxLFppcENvZGU6MX0sSW52b2ljZTp7QmVmb3JlVGF4OjEsRGVzY3JpcHRpb246MSxEaXNjb3VudDoxLElkOjEsSW5zZXJ0RGF0ZToxLEluc2VydFVzZXJJZDoxLEludm9pY2VEYXRlOjEsTnVtYmVyOjEsT3RoZXJDaGFyZ2U6MSxTYWxlc0dyb3VwOjEsU2FsZXNPcmRlcklkOjEsU3ViVG90YWw6MSxUYXhBbW91bnQ6MSxUZW5hbnRJZDoxLFRvdGFsOjEsVXBkYXRlRGF0ZToxLFVwZGF0ZVVzZXJJZDoxfSxJbnZvaWNlRGV0YWlsOntCZWZvcmVUYXg6MSxEaXNjb3VudDoxLElkOjEsSW5zZXJ0RGF0ZToxLEluc2VydFVzZXJJZDoxLEludm9pY2VJZDoxLFByaWNlOjEsUHJvZHVjdElkOjEsUXR5OjEsU3ViVG90YWw6MSxUYXhBbW91bnQ6MSxUYXhQZXJjZW50YWdlOjEsVGVuYW50SWQ6MSxUb3RhbDoxLFVwZGF0ZURhdGU6MSxVcGRhdGVVc2VySWQ6MX0sSW52b2ljZVBheW1lbnQ6e0Nhc2hCYW5rSWQ6MSxEZXNjcmlwdGlvbjoxLElkOjEsSW5zZXJ0RGF0ZToxLEluc2VydFVzZXJJZDoxLEludm9pY2VBbW91bnQ6MSxJbnZvaWNlSWQ6MSxOdW1iZXI6MSxQYXltZW50QW1vdW50OjEsUGF5bWVudERhdGU6MSxTYWxlc0dyb3VwOjEsVGVuYW50SWQ6MSxVcGRhdGVEYXRlOjEsVXBkYXRlVXNlcklkOjF9LFNhbGVzQ2hhbm5lbDp7RGVzY3JpcHRpb246MSxJZDoxLEluc2VydERhdGU6MSxJbnNlcnRVc2VySWQ6MSxOYW1lOjEsVGVuYW50SWQ6MSxVcGRhdGVEYXRlOjEsVXBkYXRlVXNlcklkOjF9LFNhbGVzT3JkZXI6e0JlZm9yZVRheDoxLEN1c3RvbWVySWQ6MSxEZXNjcmlwdGlvbjoxLERpc2NvdW50OjEsSWQ6MSxJbnNlcnREYXRlOjEsSW5zZXJ0VXNlcklkOjEsTnVtYmVyOjEsT3JkZXJEYXRlOjEsT3RoZXJDaGFyZ2U6MSxTYWxlc0NoYW5uZWxJZDoxLFNhbGVzR3JvdXA6MSxTdWJUb3RhbDoxLFRheEFtb3VudDoxLFRlbmFudElkOjEsVG90YWw6MSxVcGRhdGVEYXRlOjEsVXBkYXRlVXNlcklkOjF9LFNhbGVzT3JkZXJEZXRhaWw6e0JlZm9yZVRheDoxLERpc2NvdW50OjEsSWQ6MSxJbnNlcnREYXRlOjEsSW5zZXJ0VXNlcklkOjEsUHJpY2U6MSxQcm9kdWN0SWQ6MSxRdHk6MSxTYWxlc09yZGVySWQ6MSxTdWJUb3RhbDoxLFRheEFtb3VudDoxLFRheFBlcmNlbnRhZ2U6MSxUZW5hbnRJZDoxLFRvdGFsOjEsVXBkYXRlRGF0ZToxLFVwZGF0ZVVzZXJJZDoxfX0sU2V0dGluZ3M6e0Nhc2hCYW5rOntBY2NvdW50TnVtYmVyOjEsQ2l0eToxLERlc2NyaXB0aW9uOjEsRW1haWw6MSxJZDoxLEluc2VydERhdGU6MSxJbnNlcnRVc2VySWQ6MSxOYW1lOjEsUGhvbmU6MSxTdGF0ZToxLFN0cmVldDoxLFRlbmFudElkOjEsVXBkYXRlRGF0ZToxLFVwZGF0ZVVzZXJJZDoxLFppcENvZGU6MX0sTXlDb21wYW55OntCaWxsTnVtYmVyTGVuZ3RoOjEsQmlsbE51bWJlclByZWZpeDoxLEJpbGxOdW1iZXJVc2VEYXRlOjEsQmlsbFBheW1lbnROdW1iZXJMZW5ndGg6MSxCaWxsUGF5bWVudE51bWJlclByZWZpeDoxLEJpbGxQYXltZW50TnVtYmVyVXNlRGF0ZToxLENpdHk6MSxDdXJyZW5jeToxLEN1c3RvbWVyTnVtYmVyTGVuZ3RoOjEsQ3VzdG9tZXJOdW1iZXJQcmVmaXg6MSxDdXN0b21lck51bWJlclVzZURhdGU6MSxEZXNjcmlwdGlvbjoxLEVtYWlsOjEsSW5zZXJ0RGF0ZToxLEluc2VydFVzZXJJZDoxLEludm9pY2VOdW1iZXJMZW5ndGg6MSxJbnZvaWNlTnVtYmVyUHJlZml4OjEsSW52b2ljZU51bWJlclVzZURhdGU6MSxJbnZvaWNlUGF5bWVudE51bWJlckxlbmd0aDoxLEludm9pY2VQYXltZW50TnVtYmVyUHJlZml4OjEsSW52b2ljZVBheW1lbnROdW1iZXJVc2VEYXRlOjEsTWF4aW11bVVzZXI6MSxQaG9uZToxLFByb2R1Y3ROdW1iZXJMZW5ndGg6MSxQcm9kdWN0TnVtYmVyUHJlZml4OjEsUHJvZHVjdE51bWJlclVzZURhdGU6MSxQdXJjaGFzZU51bWJlckxlbmd0aDoxLFB1cmNoYXNlTnVtYmVyUHJlZml4OjEsUHVyY2hhc2VOdW1iZXJVc2VEYXRlOjEsU2FsZXNOdW1iZXJMZW5ndGg6MSxTYWxlc051bWJlclByZWZpeDoxLFNhbGVzTnVtYmVyVXNlRGF0ZToxLFN0YXRlOjEsU3RyZWV0OjEsVGVuYW50SWQ6MSxUZW5hbnROYW1lOjEsVXBkYXRlRGF0ZToxLFVwZGF0ZVVzZXJJZDoxLFZlbmRvck51bWJlckxlbmd0aDoxLFZlbmRvck51bWJlclByZWZpeDoxLFZlbmRvck51bWJlclVzZURhdGU6MSxaaXBDb2RlOjF9LFB1cmNoYXNlVGF4OntEZXNjcmlwdGlvbjoxLElkOjEsSW5zZXJ0RGF0ZToxLEluc2VydFVzZXJJZDoxLE5hbWU6MSxUYXhSYXRlUGVyY2VudGFnZToxLFRlbmFudElkOjEsVXBkYXRlRGF0ZToxLFVwZGF0ZVVzZXJJZDoxfSxTYWxlc1RheDp7RGVzY3JpcHRpb246MSxJZDoxLEluc2VydERhdGU6MSxJbnNlcnRVc2VySWQ6MSxOYW1lOjEsVGF4UmF0ZVBlcmNlbnRhZ2U6MSxUZW5hbnRJZDoxLFVwZGF0ZURhdGU6MSxVcGRhdGVVc2VySWQ6MX19fSxGb3Jtczp7TWVtYmVyc2hpcDp7Q2hhbmdlUGFzc3dvcmQ6e0Zvcm1UaXRsZToxLFN1Ym1pdEJ1dHRvbjoxLFN1Y2Nlc3M6MX0sRm9yZ290UGFzc3dvcmQ6e0JhY2tUb0xvZ2luOjEsRm9ybUluZm86MSxGb3JtVGl0bGU6MSxTdWJtaXRCdXR0b246MSxTdWNjZXNzOjF9LExvZ2luOntGYWNlYm9va0J1dHRvbjoxLEZvcmdvdFBhc3N3b3JkOjEsR29vZ2xlQnV0dG9uOjEsTG9naW5Ub1lvdXJBY2NvdW50OjEsT1I6MSxSZW1lbWJlck1lOjEsU2lnbkluQnV0dG9uOjEsU2lnblVwQnV0dG9uOjF9LFJlc2V0UGFzc3dvcmQ6e0JhY2tUb0xvZ2luOjEsRW1haWxTdWJqZWN0OjEsRm9ybVRpdGxlOjEsU3VibWl0QnV0dG9uOjEsU3VjY2VzczoxfSxTaWduVXA6e0FjY2VwdFRlcm1zOjEsQWN0aXZhdGVFbWFpbFN1YmplY3Q6MSxBY3RpdmF0aW9uQ29tcGxldGVNZXNzYWdlOjEsQmFja1RvTG9naW46MSxDb25maXJtRW1haWw6MSxDb25maXJtUGFzc3dvcmQ6MSxEaXNwbGF5TmFtZToxLEVtYWlsOjEsRm9ybUluZm86MSxGb3JtVGl0bGU6MSxQYXNzd29yZDoxLFN1Ym1pdEJ1dHRvbjoxLFN1Y2Nlc3M6MX19fSxOYXZpZ2F0aW9uOntMb2dvdXRMaW5rOjEsU2l0ZVRpdGxlOjF9LFNpdGU6e0FjY2Vzc0RlbmllZDp7Q2xpY2tUb0NoYW5nZVVzZXI6MSxDbGlja1RvTG9naW46MSxMYWNrUGVybWlzc2lvbnM6MSxOb3RMb2dnZWRJbjoxLFBhZ2VUaXRsZToxfSxCYXNpY1Byb2dyZXNzRGlhbG9nOntDYW5jZWxUaXRsZToxLFBsZWFzZVdhaXQ6MX0sQnVsa1NlcnZpY2VBY3Rpb246e0FsbEhhZEVycm9yc0Zvcm1hdDoxLEFsbFN1Y2Nlc3NGb3JtYXQ6MSxDb25maXJtYXRpb25Gb3JtYXQ6MSxFcnJvckNvdW50OjEsTm90aGluZ1RvUHJvY2VzczoxLFNvbWVIYWRFcnJvcnNGb3JtYXQ6MSxTdWNjZXNzQ291bnQ6MX0sRGFzaGJvYXJkOntDb250ZW50RGVzY3JpcHRpb246MX0sTGF5b3V0OntGb290ZXJDb3B5cmlnaHQ6MSxGb290ZXJJbmZvOjEsRm9vdGVyUmlnaHRzOjEsR2VuZXJhbFNldHRpbmdzOjEsTGFuZ3VhZ2U6MSxUaGVtZToxLFRoZW1lQmxhY2s6MSxUaGVtZUJsYWNrTGlnaHQ6MSxUaGVtZUJsdWU6MSxUaGVtZUJsdWVMaWdodDoxLFRoZW1lR3JlZW46MSxUaGVtZUdyZWVuTGlnaHQ6MSxUaGVtZVB1cnBsZToxLFRoZW1lUHVycGxlTGlnaHQ6MSxUaGVtZVJlZDoxLFRoZW1lUmVkTGlnaHQ6MSxUaGVtZVllbGxvdzoxLFRoZW1lWWVsbG93TGlnaHQ6MX0sUm9sZVBlcm1pc3Npb25EaWFsb2c6e0RpYWxvZ1RpdGxlOjEsRWRpdEJ1dHRvbjoxLFNhdmVTdWNjZXNzOjF9LFVzZXJEaWFsb2c6e0VkaXRQZXJtaXNzaW9uc0J1dHRvbjoxLEVkaXRSb2xlc0J1dHRvbjoxfSxVc2VyUGVybWlzc2lvbkRpYWxvZzp7RGlhbG9nVGl0bGU6MSxHcmFudDoxLFBlcm1pc3Npb246MSxSZXZva2U6MSxTYXZlU3VjY2VzczoxfSxVc2VyUm9sZURpYWxvZzp7RGlhbG9nVGl0bGU6MSxTYXZlU3VjY2VzczoxfSxWYWxpZGF0aW9uRXJyb3I6e1RpdGxlOjF9fSxWYWxpZGF0aW9uOntBdXRoZW50aWNhdGlvbkVycm9yOjEsQ2FudEZpbmRVc2VyV2l0aEVtYWlsOjEsQ3VycmVudFBhc3N3b3JkTWlzbWF0Y2g6MSxEZWxldGVGb3JlaWduS2V5RXJyb3I6MSxFbWFpbENvbmZpcm06MSxFbWFpbEluVXNlOjEsSW52YWxpZEFjdGl2YXRlVG9rZW46MSxJbnZhbGlkUmVzZXRUb2tlbjoxLE1pblJlcXVpcmVkUGFzc3dvcmRMZW5ndGg6MSxTYXZlUHJpbWFyeUtleUVycm9yOjF9fSk7XG59XG4iLCJuYW1lc3BhY2UgSW5kb3RhbGVudC5EaWFsb2dVdGlscyB7XHJcbiAgICBleHBvcnQgZnVuY3Rpb24gcGVuZGluZ0NoYW5nZXNDb25maXJtYXRpb24oZWxlbWVudDogSlF1ZXJ5LCBoYXNQZW5kaW5nQ2hhbmdlczogKCkgPT4gYm9vbGVhbikge1xyXG4gICAgICAgIGVsZW1lbnQub24oJ2RpYWxvZ2JlZm9yZWNsb3NlIHBhbmVsYmVmb3JlY2xvc2UnLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICBpZiAoIVNlcmVuaXR5LldYLmhhc09yaWdpbmFsRXZlbnQoZSkgfHwgIWhhc1BlbmRpbmdDaGFuZ2VzKCkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBRLmNvbmZpcm0oJ1lvdSBoYXZlIHBlbmRpbmcgY2hhbmdlcy4gU2F2ZSB0aGVtPycsXHJcbiAgICAgICAgICAgICAgICAoKSA9PiBlbGVtZW50LmZpbmQoJ2Rpdi5zYXZlLWFuZC1jbG9zZS1idXR0b24nKS5jbGljaygpLFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG9uTm86IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQuaGFzQ2xhc3MoJ3VpLWRpYWxvZy1jb250ZW50JykpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmRpYWxvZygnY2xvc2UnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoZWxlbWVudC5oYXNDbGFzcygncy1QYW5lbCcpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgU2VyZW5pdHkuVGVtcGxhdGVkRGlhbG9nLmNsb3NlUGFuZWwoZWxlbWVudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuIiwibmFtZXNwYWNlIEluZG90YWxlbnQuQWRtaW5pc3RyYXRpb24ge1xyXG5cclxuICAgIEBTZXJlbml0eS5EZWNvcmF0b3JzLnJlZ2lzdGVyQ2xhc3MoKVxyXG4gICAgZXhwb3J0IGNsYXNzIExhbmd1YWdlRGlhbG9nIGV4dGVuZHMgU2VyZW5pdHkuRW50aXR5RGlhbG9nPExhbmd1YWdlUm93LCBhbnk+IHtcclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0Rm9ybUtleSgpIHsgcmV0dXJuIExhbmd1YWdlRm9ybS5mb3JtS2V5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldElkUHJvcGVydHkoKSB7IHJldHVybiBMYW5ndWFnZVJvdy5pZFByb3BlcnR5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldExvY2FsVGV4dFByZWZpeCgpIHsgcmV0dXJuIExhbmd1YWdlUm93LmxvY2FsVGV4dFByZWZpeDsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXROYW1lUHJvcGVydHkoKSB7IHJldHVybiBMYW5ndWFnZVJvdy5uYW1lUHJvcGVydHk7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0U2VydmljZSgpIHsgcmV0dXJuIExhbmd1YWdlU2VydmljZS5iYXNlVXJsOyB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBmb3JtID0gbmV3IExhbmd1YWdlRm9ybSh0aGlzLmlkUHJlZml4KTtcclxuICAgIH1cclxufSIsIm5hbWVzcGFjZSBJbmRvdGFsZW50LkFkbWluaXN0cmF0aW9uIHtcclxuXHJcbiAgICBAU2VyZW5pdHkuRGVjb3JhdG9ycy5yZWdpc3RlckNsYXNzKClcclxuICAgIGV4cG9ydCBjbGFzcyBMYW5ndWFnZUdyaWQgZXh0ZW5kcyBTZXJlbml0eS5FbnRpdHlHcmlkPExhbmd1YWdlUm93LCBhbnk+IHtcclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0Q29sdW1uc0tleSgpIHsgcmV0dXJuIFwiQWRtaW5pc3RyYXRpb24uTGFuZ3VhZ2VcIjsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXREaWFsb2dUeXBlKCkgeyByZXR1cm4gTGFuZ3VhZ2VEaWFsb2c7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0SWRQcm9wZXJ0eSgpIHsgcmV0dXJuIExhbmd1YWdlUm93LmlkUHJvcGVydHk7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0TG9jYWxUZXh0UHJlZml4KCkgeyByZXR1cm4gTGFuZ3VhZ2VSb3cubG9jYWxUZXh0UHJlZml4OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldFNlcnZpY2UoKSB7IHJldHVybiBMYW5ndWFnZVNlcnZpY2UuYmFzZVVybDsgfVxyXG5cclxuICAgICAgICBjb25zdHJ1Y3Rvcihjb250YWluZXI6IEpRdWVyeSkge1xyXG4gICAgICAgICAgICBzdXBlcihjb250YWluZXIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIGdldERlZmF1bHRTb3J0QnkoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBbTGFuZ3VhZ2VSb3cuRmllbGRzLkxhbmd1YWdlTmFtZV07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwibmFtZXNwYWNlIEluZG90YWxlbnQuQWRtaW5pc3RyYXRpb24ge1xyXG5cclxuICAgIEBTZXJlbml0eS5EZWNvcmF0b3JzLnJlZ2lzdGVyQ2xhc3MoKVxyXG4gICAgZXhwb3J0IGNsYXNzIFJvbGVEaWFsb2cgZXh0ZW5kcyBTZXJlbml0eS5FbnRpdHlEaWFsb2c8Um9sZVJvdywgYW55PiB7XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldEZvcm1LZXkoKSB7IHJldHVybiBSb2xlRm9ybS5mb3JtS2V5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldElkUHJvcGVydHkoKSB7IHJldHVybiBSb2xlUm93LmlkUHJvcGVydHk7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0TG9jYWxUZXh0UHJlZml4KCkgeyByZXR1cm4gUm9sZVJvdy5sb2NhbFRleHRQcmVmaXg7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0TmFtZVByb3BlcnR5KCkgeyByZXR1cm4gUm9sZVJvdy5uYW1lUHJvcGVydHk7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0U2VydmljZSgpIHsgcmV0dXJuIFJvbGVTZXJ2aWNlLmJhc2VVcmw7IH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIGZvcm0gPSBuZXcgUm9sZUZvcm0odGhpcy5pZFByZWZpeCk7XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRUb29sYmFyQnV0dG9ucygpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsZXQgYnV0dG9ucyA9IHN1cGVyLmdldFRvb2xiYXJCdXR0b25zKCk7XHJcblxyXG4gICAgICAgICAgICBidXR0b25zLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6IFEudGV4dCgnU2l0ZS5Sb2xlUGVybWlzc2lvbkRpYWxvZy5FZGl0QnV0dG9uJyksXHJcbiAgICAgICAgICAgICAgICBjc3NDbGFzczogJ2VkaXQtcGVybWlzc2lvbnMtYnV0dG9uJyxcclxuICAgICAgICAgICAgICAgIGljb246ICdmYS1sb2NrIHRleHQtZ3JlZW4nLFxyXG4gICAgICAgICAgICAgICAgb25DbGljazogKCkgPT5cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBuZXcgUm9sZVBlcm1pc3Npb25EaWFsb2coe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByb2xlSUQ6IHRoaXMuZW50aXR5LlJvbGVJZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IHRoaXMuZW50aXR5LlJvbGVOYW1lXHJcbiAgICAgICAgICAgICAgICAgICAgfSkuZGlhbG9nT3BlbigpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiBidXR0b25zO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIHVwZGF0ZUludGVyZmFjZSgpIHtcclxuICAgICAgICAgICAgc3VwZXIudXBkYXRlSW50ZXJmYWNlKCk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnRvb2xiYXIuZmluZEJ1dHRvbihcImVkaXQtcGVybWlzc2lvbnMtYnV0dG9uXCIpLnRvZ2dsZUNsYXNzKFwiZGlzYWJsZWRcIiwgdGhpcy5pc05ld09yRGVsZXRlZCgpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJuYW1lc3BhY2UgSW5kb3RhbGVudC5BZG1pbmlzdHJhdGlvbiB7XHJcblxyXG4gICAgQFNlcmVuaXR5LkRlY29yYXRvcnMucmVnaXN0ZXJDbGFzcygpXHJcbiAgICBleHBvcnQgY2xhc3MgUm9sZUdyaWQgZXh0ZW5kcyBTZXJlbml0eS5FbnRpdHlHcmlkPFJvbGVSb3csIGFueT4ge1xyXG4gICAgICAgIHByb3RlY3RlZCBnZXRDb2x1bW5zS2V5KCkgeyByZXR1cm4gXCJBZG1pbmlzdHJhdGlvbi5Sb2xlXCI7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0RGlhbG9nVHlwZSgpIHsgcmV0dXJuIFJvbGVEaWFsb2c7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0SWRQcm9wZXJ0eSgpIHsgcmV0dXJuIFJvbGVSb3cuaWRQcm9wZXJ0eTsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRMb2NhbFRleHRQcmVmaXgoKSB7IHJldHVybiBSb2xlUm93LmxvY2FsVGV4dFByZWZpeDsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRTZXJ2aWNlKCkgeyByZXR1cm4gUm9sZVNlcnZpY2UuYmFzZVVybDsgfVxyXG5cclxuICAgICAgICBjb25zdHJ1Y3Rvcihjb250YWluZXI6IEpRdWVyeSkge1xyXG4gICAgICAgICAgICBzdXBlcihjb250YWluZXIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIGdldERlZmF1bHRTb3J0QnkoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBbUm9sZVJvdy5GaWVsZHMuUm9sZU5hbWVdO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIm5hbWVzcGFjZSBJbmRvdGFsZW50LkFkbWluaXN0cmF0aW9uIHtcclxuXHJcbiAgICBAU2VyZW5pdHkuRGVjb3JhdG9ycy5yZWdpc3RlckNsYXNzKClcclxuICAgIGV4cG9ydCBjbGFzcyBSb2xlUGVybWlzc2lvbkRpYWxvZyBleHRlbmRzIFNlcmVuaXR5LlRlbXBsYXRlZERpYWxvZzxSb2xlUGVybWlzc2lvbkRpYWxvZ09wdGlvbnM+IHtcclxuXHJcbiAgICAgICAgcHJpdmF0ZSBwZXJtaXNzaW9uczogUGVybWlzc2lvbkNoZWNrRWRpdG9yO1xyXG5cclxuICAgICAgICBjb25zdHJ1Y3RvcihvcHQ6IFJvbGVQZXJtaXNzaW9uRGlhbG9nT3B0aW9ucykge1xyXG4gICAgICAgICAgICBzdXBlcihvcHQpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5wZXJtaXNzaW9ucyA9IG5ldyBQZXJtaXNzaW9uQ2hlY2tFZGl0b3IodGhpcy5ieUlkKCdQZXJtaXNzaW9ucycpLCB7XHJcbiAgICAgICAgICAgICAgICBzaG93UmV2b2tlOiBmYWxzZVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIFJvbGVQZXJtaXNzaW9uU2VydmljZS5MaXN0KHtcclxuICAgICAgICAgICAgICAgIFJvbGVJRDogdGhpcy5vcHRpb25zLnJvbGVJRCxcclxuICAgICAgICAgICAgICAgIE1vZHVsZTogbnVsbCxcclxuICAgICAgICAgICAgICAgIFN1Ym1vZHVsZTogbnVsbFxyXG4gICAgICAgICAgICB9LCByZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBlcm1pc3Npb25zLnZhbHVlID0gcmVzcG9uc2UuRW50aXRpZXMubWFwKHggPT4gKDxVc2VyUGVybWlzc2lvblJvdz57IFBlcm1pc3Npb25LZXk6IHggfSkpO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMucGVybWlzc2lvbnMuaW1wbGljaXRQZXJtaXNzaW9ucyA9IFEuZ2V0UmVtb3RlRGF0YSgnQWRtaW5pc3RyYXRpb24uSW1wbGljaXRQZXJtaXNzaW9ucycpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIGdldERpYWxvZ09wdGlvbnMoKTogSlF1ZXJ5VUkuRGlhbG9nT3B0aW9ucyB7XHJcbiAgICAgICAgICAgIGxldCBvcHQgPSBzdXBlci5nZXREaWFsb2dPcHRpb25zKCk7XHJcblxyXG4gICAgICAgICAgICBvcHQuYnV0dG9ucyA9IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0OiBRLnRleHQoJ0RpYWxvZ3MuT2tCdXR0b24nKSxcclxuICAgICAgICAgICAgICAgICAgICBjbGljazogZSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFJvbGVQZXJtaXNzaW9uU2VydmljZS5VcGRhdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUm9sZUlEOiB0aGlzLm9wdGlvbnMucm9sZUlELFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUGVybWlzc2lvbnM6IHRoaXMucGVybWlzc2lvbnMudmFsdWUubWFwKHggPT4geC5QZXJtaXNzaW9uS2V5KSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1vZHVsZTogbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFN1Ym1vZHVsZTogbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LCByZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRpYWxvZ0Nsb3NlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiBRLm5vdGlmeVN1Y2Nlc3MoUS50ZXh0KCdTaXRlLlJvbGVQZXJtaXNzaW9uRGlhbG9nLlNhdmVTdWNjZXNzJykpLCAwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQ6IFEudGV4dCgnRGlhbG9ncy5DYW5jZWxCdXR0b24nKSxcclxuICAgICAgICAgICAgICAgICAgICBjbGljazogKCkgPT4gdGhpcy5kaWFsb2dDbG9zZSgpXHJcbiAgICAgICAgICAgICAgICB9XTtcclxuXHJcbiAgICAgICAgICAgIG9wdC50aXRsZSA9IFEuZm9ybWF0KFEudGV4dCgnU2l0ZS5Sb2xlUGVybWlzc2lvbkRpYWxvZy5EaWFsb2dUaXRsZScpLFxyXG4gICAgICAgICAgICAgICAgdGhpcy5vcHRpb25zLnRpdGxlKTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiBvcHQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0VGVtcGxhdGUoKTogc3RyaW5nIHtcclxuICAgICAgICAgICAgcmV0dXJuICc8ZGl2IGlkPVwifl9QZXJtaXNzaW9uc1wiPjwvZGl2Pic7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgUm9sZVBlcm1pc3Npb25EaWFsb2dPcHRpb25zIHtcclxuICAgICAgICByb2xlSUQ/OiBudW1iZXI7XHJcbiAgICAgICAgdGl0bGU/OiBzdHJpbmc7XHJcbiAgICB9XHJcbn0iLCJcclxubmFtZXNwYWNlIEluZG90YWxlbnQuQWRtaW5pc3RyYXRpb24ge1xyXG5cclxuICAgIEBTZXJlbml0eS5EZWNvcmF0b3JzLnJlZ2lzdGVyQ2xhc3MoKVxyXG4gICAgZXhwb3J0IGNsYXNzIFRlbmFudERpYWxvZyBleHRlbmRzIFNlcmVuaXR5LkVudGl0eURpYWxvZzxUZW5hbnRSb3csIGFueT4ge1xyXG4gICAgICAgIHByb3RlY3RlZCBnZXRGb3JtS2V5KCkgeyByZXR1cm4gVGVuYW50Rm9ybS5mb3JtS2V5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldElkUHJvcGVydHkoKSB7IHJldHVybiBUZW5hbnRSb3cuaWRQcm9wZXJ0eTsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRMb2NhbFRleHRQcmVmaXgoKSB7IHJldHVybiBUZW5hbnRSb3cubG9jYWxUZXh0UHJlZml4OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldE5hbWVQcm9wZXJ0eSgpIHsgcmV0dXJuIFRlbmFudFJvdy5uYW1lUHJvcGVydHk7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0U2VydmljZSgpIHsgcmV0dXJuIFRlbmFudFNlcnZpY2UuYmFzZVVybDsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXREZWxldGVQZXJtaXNzaW9uKCkgeyByZXR1cm4gVGVuYW50Um93LmRlbGV0ZVBlcm1pc3Npb247IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0SW5zZXJ0UGVybWlzc2lvbigpIHsgcmV0dXJuIFRlbmFudFJvdy5pbnNlcnRQZXJtaXNzaW9uOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldFVwZGF0ZVBlcm1pc3Npb24oKSB7IHJldHVybiBUZW5hbnRSb3cudXBkYXRlUGVybWlzc2lvbjsgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgZm9ybSA9IG5ldyBUZW5hbnRGb3JtKHRoaXMuaWRQcmVmaXgpO1xyXG5cclxuICAgIH1cclxufSIsIlxyXG5uYW1lc3BhY2UgSW5kb3RhbGVudC5BZG1pbmlzdHJhdGlvbiB7XHJcblxyXG4gICAgQFNlcmVuaXR5LkRlY29yYXRvcnMucmVnaXN0ZXJDbGFzcygpXHJcbiAgICBleHBvcnQgY2xhc3MgVGVuYW50R3JpZCBleHRlbmRzIFNlcmVuaXR5LkVudGl0eUdyaWQ8VGVuYW50Um93LCBhbnk+IHtcclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0Q29sdW1uc0tleSgpIHsgcmV0dXJuIFRlbmFudENvbHVtbnMuY29sdW1uc0tleTsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXREaWFsb2dUeXBlKCkgeyByZXR1cm4gVGVuYW50RGlhbG9nOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldElkUHJvcGVydHkoKSB7IHJldHVybiBUZW5hbnRSb3cuaWRQcm9wZXJ0eTsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRJbnNlcnRQZXJtaXNzaW9uKCkgeyByZXR1cm4gVGVuYW50Um93Lmluc2VydFBlcm1pc3Npb247IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0TG9jYWxUZXh0UHJlZml4KCkgeyByZXR1cm4gVGVuYW50Um93LmxvY2FsVGV4dFByZWZpeDsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRTZXJ2aWNlKCkgeyByZXR1cm4gVGVuYW50U2VydmljZS5iYXNlVXJsOyB9XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKGNvbnRhaW5lcjogSlF1ZXJ5KSB7XHJcbiAgICAgICAgICAgIHN1cGVyKGNvbnRhaW5lcik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0QnV0dG9ucygpIHtcclxuICAgICAgICAgICAgdmFyIGJ1dHRvbnMgPSBzdXBlci5nZXRCdXR0b25zKCk7XHJcblxyXG4gICAgICAgICAgICBidXR0b25zLnB1c2goU2VyZW5pdHkuRXh0ZW5zaW9ucy5FeGNlbEV4cG9ydEhlbHBlci5jcmVhdGVUb29sQnV0dG9uKHtcclxuICAgICAgICAgICAgICAgIGdyaWQ6IHRoaXMsXHJcbiAgICAgICAgICAgICAgICBzZXJ2aWNlOiB0aGlzLmdldFNlcnZpY2UoKSArICcvTGlzdEV4Y2VsJyxcclxuICAgICAgICAgICAgICAgIG9uVmlld1N1Ym1pdDogKCkgPT4gdGhpcy5vblZpZXdTdWJtaXQoKSxcclxuICAgICAgICAgICAgICAgIHNlcGFyYXRvcjogdHJ1ZVxyXG4gICAgICAgICAgICB9KSk7XHJcblxyXG4gICAgICAgICAgICBidXR0b25zLnB1c2goU2VyZW5pdHkuRXh0ZW5zaW9ucy5QZGZFeHBvcnRIZWxwZXIuY3JlYXRlVG9vbEJ1dHRvbih7XHJcbiAgICAgICAgICAgICAgICBncmlkOiB0aGlzLFxyXG4gICAgICAgICAgICAgICAgb25WaWV3U3VibWl0OiAoKSA9PiB0aGlzLm9uVmlld1N1Ym1pdCgpXHJcbiAgICAgICAgICAgIH0pKTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiBidXR0b25zO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIm5hbWVzcGFjZSBJbmRvdGFsZW50LkFkbWluaXN0cmF0aW9uIHtcclxuXHJcbiAgICBAU2VyZW5pdHkuRGVjb3JhdG9ycy5yZWdpc3RlckNsYXNzKClcclxuICAgIGV4cG9ydCBjbGFzcyBUcmFuc2xhdGlvbkdyaWQgZXh0ZW5kcyBTZXJlbml0eS5FbnRpdHlHcmlkPFRyYW5zbGF0aW9uSXRlbSwgYW55PiB7XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldElkUHJvcGVydHkoKSB7IHJldHVybiBcIktleVwiOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldExvY2FsVGV4dFByZWZpeCgpIHsgcmV0dXJuIFwiQWRtaW5pc3RyYXRpb24uVHJhbnNsYXRpb25cIjsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRTZXJ2aWNlKCkgeyByZXR1cm4gVHJhbnNsYXRpb25TZXJ2aWNlLmJhc2VVcmw7IH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSBoYXNDaGFuZ2VzOiBib29sZWFuO1xyXG4gICAgICAgIHByaXZhdGUgc2VhcmNoVGV4dDogc3RyaW5nO1xyXG4gICAgICAgIHByaXZhdGUgc291cmNlTGFuZ3VhZ2U6IFNlcmVuaXR5Lkxvb2t1cEVkaXRvcjsgXHJcbiAgICAgICAgcHJpdmF0ZSB0YXJnZXRMYW5ndWFnZTogU2VyZW5pdHkuTG9va3VwRWRpdG9yO1xyXG4gICAgICAgIHByaXZhdGUgdGFyZ2V0TGFuZ3VhZ2VLZXk6IHN0cmluZztcclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IoY29udGFpbmVyOiBKUXVlcnkpIHtcclxuICAgICAgICAgICAgc3VwZXIoY29udGFpbmVyKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5vbigna2V5dXAuJyArIHRoaXMudW5pcXVlTmFtZSArICcgY2hhbmdlLicgKyB0aGlzLnVuaXF1ZU5hbWUsXHJcbiAgICAgICAgICAgICAgICAnaW5wdXQuY3VzdG9tLXRleHQnLCBlID0+XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHZhciB2YWx1ZSA9IFEudHJpbVRvTnVsbCgkKGUudGFyZ2V0KS52YWwoKSk7XHJcbiAgICAgICAgICAgICAgICBpZiAodmFsdWUgPT09ICcnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy52aWV3LmdldEl0ZW1CeUlkKCQoZS50YXJnZXQpLmRhdGEoJ2tleScpKS5DdXN0b21UZXh0ID0gdmFsdWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmhhc0NoYW5nZXMgPSB0cnVlO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBvbkNsaWNrKGU6IEpRdWVyeUV2ZW50T2JqZWN0LCByb3c6IG51bWJlciwgY2VsbDogbnVtYmVyKTogYW55IHtcclxuICAgICAgICAgICAgc3VwZXIub25DbGljayhlLCByb3csIGNlbGwpO1xyXG5cclxuICAgICAgICAgICAgaWYgKGUuaXNEZWZhdWx0UHJldmVudGVkKCkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbGV0IGl0ZW0gPSB0aGlzLml0ZW1BdChyb3cpO1xyXG4gICAgICAgICAgICBsZXQgZG9uZTogKCkgPT4gdm9pZDtcclxuXHJcbiAgICAgICAgICAgIGlmICgkKGUudGFyZ2V0KS5oYXNDbGFzcygnc291cmNlLXRleHQnKSkge1xyXG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBkb25lID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW0uQ3VzdG9tVGV4dCA9IGl0ZW0uU291cmNlVGV4dDtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnZpZXcudXBkYXRlSXRlbShpdGVtLktleSwgaXRlbSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5oYXNDaGFuZ2VzID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKFEuaXNUcmltbWVkRW1wdHkoaXRlbS5DdXN0b21UZXh0KSB8fFxyXG4gICAgICAgICAgICAgICAgICAgIChRLnRyaW1Ub0VtcHR5KGl0ZW0uQ3VzdG9tVGV4dCkgPT09IFEudHJpbVRvRW1wdHkoaXRlbS5Tb3VyY2VUZXh0KSkpIHtcclxuICAgICAgICAgICAgICAgICAgICBkb25lKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIFEuY29uZmlybShRLnRleHQoJ0RiLkFkbWluaXN0cmF0aW9uLlRyYW5zbGF0aW9uLk92ZXJyaWRlQ29uZmlybWF0aW9uJyksIGRvbmUpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoJChlLnRhcmdldCkuaGFzQ2xhc3MoJ3RhcmdldC10ZXh0JykpIHtcclxuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgICAgICAgICBkb25lID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW0uQ3VzdG9tVGV4dCA9IGl0ZW0uVGFyZ2V0VGV4dDtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnZpZXcudXBkYXRlSXRlbShpdGVtLktleSwgaXRlbSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5oYXNDaGFuZ2VzID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKFEuaXNUcmltbWVkRW1wdHkoaXRlbS5DdXN0b21UZXh0KSB8fFxyXG4gICAgICAgICAgICAgICAgICAgIChRLnRyaW1Ub0VtcHR5KGl0ZW0uQ3VzdG9tVGV4dCkgPT09IFEudHJpbVRvRW1wdHkoaXRlbS5UYXJnZXRUZXh0KSkpIHtcclxuICAgICAgICAgICAgICAgICAgICBkb25lKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIFEuY29uZmlybShRLnRleHQoJ0RiLkFkbWluaXN0cmF0aW9uLlRyYW5zbGF0aW9uLk92ZXJyaWRlQ29uZmlybWF0aW9uJyksIGRvbmUpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0Q29sdW1ucygpOiBTbGljay5Db2x1bW5bXSB7XHJcblxyXG4gICAgICAgICAgICB2YXIgY29sdW1uczogU2xpY2suQ29sdW1uW10gPSBbXTtcclxuICAgICAgICAgICAgY29sdW1ucy5wdXNoKHsgZmllbGQ6ICdLZXknLCB3aWR0aDogMzAwLCBzb3J0YWJsZTogZmFsc2UgfSk7XHJcblxyXG4gICAgICAgICAgICBjb2x1bW5zLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgZmllbGQ6ICdTb3VyY2VUZXh0JyxcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAzMDAsXHJcbiAgICAgICAgICAgICAgICBzb3J0YWJsZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBmb3JtYXQ6IGN0eCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFEub3V0ZXJIdG1sKCQoJzxhLz4nKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoJ3NvdXJjZS10ZXh0JylcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnRleHQoY3R4LnZhbHVlIHx8ICcnKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgY29sdW1ucy5wdXNoKHtcclxuICAgICAgICAgICAgICAgIGZpZWxkOiAnQ3VzdG9tVGV4dCcsXHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMzAwLFxyXG4gICAgICAgICAgICAgICAgc29ydGFibGU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgZm9ybWF0OiBjdHggPT4gUS5vdXRlckh0bWwoJCgnPGlucHV0Lz4nKVxyXG4gICAgICAgICAgICAgICAgICAgIC5hZGRDbGFzcygnY3VzdG9tLXRleHQnKVxyXG4gICAgICAgICAgICAgICAgICAgIC5hdHRyKCd2YWx1ZScsIGN0eC52YWx1ZSlcclxuICAgICAgICAgICAgICAgICAgICAuYXR0cigndHlwZScsICd0ZXh0JylcclxuICAgICAgICAgICAgICAgICAgICAuYXR0cignZGF0YS1rZXknLCBjdHguaXRlbS5LZXkpKVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGNvbHVtbnMucHVzaCh7XHJcbiAgICAgICAgICAgICAgICBmaWVsZDogJ1RhcmdldFRleHQnLFxyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDMwMCxcclxuICAgICAgICAgICAgICAgIHNvcnRhYmxlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGZvcm1hdDogY3R4ID0+IFEub3V0ZXJIdG1sKCQoJzxhLz4nKVxyXG4gICAgICAgICAgICAgICAgICAgIC5hZGRDbGFzcygndGFyZ2V0LXRleHQnKVxyXG4gICAgICAgICAgICAgICAgICAgIC50ZXh0KGN0eC52YWx1ZSB8fCAnJykpXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIGNvbHVtbnM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgY3JlYXRlVG9vbGJhckV4dGVuc2lvbnMoKTogdm9pZCB7XHJcbiAgICAgICAgICAgIHN1cGVyLmNyZWF0ZVRvb2xiYXJFeHRlbnNpb25zKCk7XHJcblxyXG4gICAgICAgICAgICBsZXQgb3B0OiBTZXJlbml0eS5Mb29rdXBFZGl0b3JPcHRpb25zID0ge1xyXG4gICAgICAgICAgICAgICAgbG9va3VwS2V5OiAnQWRtaW5pc3RyYXRpb24uTGFuZ3VhZ2UnXHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICB0aGlzLnNvdXJjZUxhbmd1YWdlID0gU2VyZW5pdHkuV2lkZ2V0LmNyZWF0ZSh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBTZXJlbml0eS5Mb29rdXBFZGl0b3IsXHJcbiAgICAgICAgICAgICAgICBlbGVtZW50OiBlbCA9PiBlbC5hcHBlbmRUbyh0aGlzLnRvb2xiYXIuZWxlbWVudCkuYXR0cigncGxhY2Vob2xkZXInLCAnLS0tICcgK1xyXG4gICAgICAgICAgICAgICAgICAgIFEudGV4dCgnRGIuQWRtaW5pc3RyYXRpb24uVHJhbnNsYXRpb24uU291cmNlTGFuZ3VhZ2UnKSArICcgLS0tJyksXHJcbiAgICAgICAgICAgICAgICBvcHRpb25zOiBvcHRcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnNvdXJjZUxhbmd1YWdlLmNoYW5nZVNlbGVjdDIoZSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5oYXNDaGFuZ2VzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zYXZlQ2hhbmdlcyh0aGlzLnRhcmdldExhbmd1YWdlS2V5KS50aGVuKCgpID0+IHRoaXMucmVmcmVzaCgpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVmcmVzaCgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMudGFyZ2V0TGFuZ3VhZ2UgPSBTZXJlbml0eS5XaWRnZXQuY3JlYXRlKHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IFNlcmVuaXR5Lkxvb2t1cEVkaXRvcixcclxuICAgICAgICAgICAgICAgIGVsZW1lbnQ6IGVsID0+IGVsLmFwcGVuZFRvKHRoaXMudG9vbGJhci5lbGVtZW50KS5hdHRyKCdwbGFjZWhvbGRlcicsICctLS0gJyArXHJcbiAgICAgICAgICAgICAgICAgICAgUS50ZXh0KCdEYi5BZG1pbmlzdHJhdGlvbi5UcmFuc2xhdGlvbi5UYXJnZXRMYW5ndWFnZScpICsgJyAtLS0nKSxcclxuICAgICAgICAgICAgICAgIG9wdGlvbnM6IG9wdFxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMudGFyZ2V0TGFuZ3VhZ2UuY2hhbmdlU2VsZWN0MihlID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmhhc0NoYW5nZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNhdmVDaGFuZ2VzKHRoaXMudGFyZ2V0TGFuZ3VhZ2VLZXkpLnRoZW4oKCkgPT4gdGhpcy5yZWZyZXNoKCkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZWZyZXNoKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIHNhdmVDaGFuZ2VzKGxhbmd1YWdlOiBzdHJpbmcpOiBQcm9taXNlTGlrZTxhbnk+IHtcclxuICAgICAgICAgICAgdmFyIHRyYW5zbGF0aW9uczogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSA9IHt9O1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpdGVtIG9mIHRoaXMuZ2V0SXRlbXMoKSkge1xyXG4gICAgICAgICAgICAgICAgdHJhbnNsYXRpb25zW2l0ZW0uS2V5XSA9IGl0ZW0uQ3VzdG9tVGV4dDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShUcmFuc2xhdGlvblNlcnZpY2UuVXBkYXRlKHtcclxuICAgICAgICAgICAgICAgIFRhcmdldExhbmd1YWdlSUQ6IGxhbmd1YWdlLFxyXG4gICAgICAgICAgICAgICAgVHJhbnNsYXRpb25zOiB0cmFuc2xhdGlvbnNcclxuICAgICAgICAgICAgfSkpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5oYXNDaGFuZ2VzID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBsYW5ndWFnZSA9IFEudHJpbVRvTnVsbChsYW5ndWFnZSkgfHwgJ2ludmFyaWFudCc7XHJcbiAgICAgICAgICAgICAgICBRLm5vdGlmeVN1Y2Nlc3MoJ1VzZXIgdHJhbnNsYXRpb25zIGluIFwiJyArIGxhbmd1YWdlICtcclxuICAgICAgICAgICAgICAgICAgICAnXCIgbGFuZ3VhZ2UgYXJlIHNhdmVkIHRvIFwidXNlci50ZXh0cy4nICtcclxuICAgICAgICAgICAgICAgICAgICBsYW5ndWFnZSArICcuanNvblwiICcgKyAnZmlsZSB1bmRlciBcIn4vQXBwX0RhdGEvdGV4dHMvXCInLCAnJyk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIG9uVmlld1N1Ym1pdCgpOiBib29sZWFuIHtcclxuICAgICAgICAgICAgdmFyIHJlcXVlc3QgPSB0aGlzLnZpZXcucGFyYW1zO1xyXG4gICAgICAgICAgICByZXF1ZXN0LlNvdXJjZUxhbmd1YWdlSUQgPSB0aGlzLnNvdXJjZUxhbmd1YWdlLnZhbHVlO1xyXG4gICAgICAgICAgICB0aGlzLnRhcmdldExhbmd1YWdlS2V5ID0gdGhpcy50YXJnZXRMYW5ndWFnZS52YWx1ZSB8fCAnJztcclxuICAgICAgICAgICAgcmVxdWVzdC5UYXJnZXRMYW5ndWFnZUlEID0gdGhpcy50YXJnZXRMYW5ndWFnZUtleTtcclxuICAgICAgICAgICAgdGhpcy5oYXNDaGFuZ2VzID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHJldHVybiBzdXBlci5vblZpZXdTdWJtaXQoKTtcclxuICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0QnV0dG9ucygpOiBTZXJlbml0eS5Ub29sQnV0dG9uW10ge1xyXG4gICAgICAgICAgICByZXR1cm4gW3tcclxuICAgICAgICAgICAgICAgIHRpdGxlOiBRLnRleHQoJ0RiLkFkbWluaXN0cmF0aW9uLlRyYW5zbGF0aW9uLlNhdmVDaGFuZ2VzQnV0dG9uJyksXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrOiBlID0+IHRoaXMuc2F2ZUNoYW5nZXModGhpcy50YXJnZXRMYW5ndWFnZUtleSkudGhlbigoKSA9PiB0aGlzLnJlZnJlc2goKSksXHJcbiAgICAgICAgICAgICAgICBjc3NDbGFzczogJ2FwcGx5LWNoYW5nZXMtYnV0dG9uJ1xyXG4gICAgICAgICAgICB9XTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBjcmVhdGVRdWlja1NlYXJjaElucHV0KCkge1xyXG4gICAgICAgICAgICBTZXJlbml0eS5HcmlkVXRpbHMuYWRkUXVpY2tTZWFyY2hJbnB1dEN1c3RvbSh0aGlzLnRvb2xiYXIuZWxlbWVudCxcclxuICAgICAgICAgICAgICAgIChmaWVsZCwgc2VhcmNoVGV4dCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VhcmNoVGV4dCA9IHNlYXJjaFRleHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy52aWV3LnNldEl0ZW1zKHRoaXMudmlldy5nZXRJdGVtcygpLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIG9uVmlld0ZpbHRlcihpdGVtOiBUcmFuc2xhdGlvbkl0ZW0pIHtcclxuICAgICAgICAgICAgaWYgKCFzdXBlci5vblZpZXdGaWx0ZXIoaXRlbSkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKCF0aGlzLnNlYXJjaFRleHQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB2YXIgc2QgPSBTZWxlY3QyLnV0aWwuc3RyaXBEaWFjcml0aWNzO1xyXG4gICAgICAgICAgICB2YXIgc2VhcmNoaW5nID0gc2QodGhpcy5zZWFyY2hUZXh0KS50b0xvd2VyQ2FzZSgpO1xyXG5cclxuICAgICAgICAgICAgZnVuY3Rpb24gbWF0Y2goc3RyOiBzdHJpbmcpIHtcclxuICAgICAgICAgICAgICAgIGlmICghc3RyKVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gc3RyLnRvTG93ZXJDYXNlKCkuaW5kZXhPZihzZWFyY2hpbmcpID49IDA7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiBRLmlzRW1wdHlPck51bGwoc2VhcmNoaW5nKSB8fCBtYXRjaChpdGVtLktleSkgfHwgbWF0Y2goaXRlbS5Tb3VyY2VUZXh0KSB8fFxyXG4gICAgICAgICAgICAgICAgbWF0Y2goaXRlbS5UYXJnZXRUZXh0KSB8fCBtYXRjaChpdGVtLkN1c3RvbVRleHQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIHVzZVBhZ2VyKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwibmFtZXNwYWNlIEluZG90YWxlbnQuQWRtaW5pc3RyYXRpb24ge1xyXG5cclxuICAgIEBTZXJlbml0eS5EZWNvcmF0b3JzLnJlZ2lzdGVyQ2xhc3MoKVxyXG4gICAgZXhwb3J0IGNsYXNzIFVzZXJEaWFsb2cgZXh0ZW5kcyBTZXJlbml0eS5FbnRpdHlEaWFsb2c8VXNlclJvdywgYW55PiB7XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldEZvcm1LZXkoKSB7IHJldHVybiBVc2VyRm9ybS5mb3JtS2V5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldElkUHJvcGVydHkoKSB7IHJldHVybiBVc2VyUm93LmlkUHJvcGVydHk7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0SXNBY3RpdmVQcm9wZXJ0eSgpIHsgcmV0dXJuIFVzZXJSb3cuaXNBY3RpdmVQcm9wZXJ0eTsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRMb2NhbFRleHRQcmVmaXgoKSB7IHJldHVybiBVc2VyUm93LmxvY2FsVGV4dFByZWZpeDsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXROYW1lUHJvcGVydHkoKSB7IHJldHVybiBVc2VyUm93Lm5hbWVQcm9wZXJ0eTsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRTZXJ2aWNlKCkgeyByZXR1cm4gVXNlclNlcnZpY2UuYmFzZVVybDsgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgZm9ybSA9IG5ldyBVc2VyRm9ybSh0aGlzLmlkUHJlZml4KTtcclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgICAgIHN1cGVyKCk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmZvcm0uUGFzc3dvcmQuYWRkVmFsaWRhdGlvblJ1bGUodGhpcy51bmlxdWVOYW1lLCBlID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmZvcm0uUGFzc3dvcmQudmFsdWUubGVuZ3RoIDwgNylcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJQYXNzd29yZCBtdXN0IGJlIGF0IGxlYXN0IDcgY2hhcmFjdGVycyFcIjtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmZvcm0uUGFzc3dvcmRDb25maXJtLmFkZFZhbGlkYXRpb25SdWxlKHRoaXMudW5pcXVlTmFtZSwgZSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5mb3JtLlBhc3N3b3JkLnZhbHVlICE9IHRoaXMuZm9ybS5QYXNzd29yZENvbmZpcm0udmFsdWUpXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiVGhlIHBhc3N3b3JkcyBlbnRlcmVkIGRvZXNuJ3QgbWF0Y2ghXCI7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIGdldFRvb2xiYXJCdXR0b25zKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxldCBidXR0b25zID0gc3VwZXIuZ2V0VG9vbGJhckJ1dHRvbnMoKTtcclxuXHJcbiAgICAgICAgICAgIGJ1dHRvbnMucHVzaCh7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogUS50ZXh0KCdTaXRlLlVzZXJEaWFsb2cuRWRpdFJvbGVzQnV0dG9uJyksXHJcbiAgICAgICAgICAgICAgICBjc3NDbGFzczogJ2VkaXQtcm9sZXMtYnV0dG9uJyxcclxuICAgICAgICAgICAgICAgIGljb246ICdmYS11c2VycyB0ZXh0LWJsdWUnLFxyXG4gICAgICAgICAgICAgICAgb25DbGljazogKCkgPT5cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBuZXcgVXNlclJvbGVEaWFsb2coe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB1c2VySUQ6IHRoaXMuZW50aXR5LlVzZXJJZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXNlcm5hbWU6IHRoaXMuZW50aXR5LlVzZXJuYW1lXHJcbiAgICAgICAgICAgICAgICAgICAgfSkuZGlhbG9nT3BlbigpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGJ1dHRvbnMucHVzaCh7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogUS50ZXh0KCdTaXRlLlVzZXJEaWFsb2cuRWRpdFBlcm1pc3Npb25zQnV0dG9uJyksXHJcbiAgICAgICAgICAgICAgICBjc3NDbGFzczogJ2VkaXQtcGVybWlzc2lvbnMtYnV0dG9uJyxcclxuICAgICAgICAgICAgICAgIGljb246ICdmYS1sb2NrIHRleHQtZ3JlZW4nLFxyXG4gICAgICAgICAgICAgICAgb25DbGljazogKCkgPT5cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBuZXcgVXNlclBlcm1pc3Npb25EaWFsb2coe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB1c2VySUQ6IHRoaXMuZW50aXR5LlVzZXJJZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXNlcm5hbWU6IHRoaXMuZW50aXR5LlVzZXJuYW1lXHJcbiAgICAgICAgICAgICAgICAgICAgfSkuZGlhbG9nT3BlbigpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiBidXR0b25zO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIHVwZGF0ZUludGVyZmFjZSgpIHtcclxuICAgICAgICAgICAgc3VwZXIudXBkYXRlSW50ZXJmYWNlKCk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnRvb2xiYXIuZmluZEJ1dHRvbignZWRpdC1yb2xlcy1idXR0b24nKS50b2dnbGVDbGFzcygnZGlzYWJsZWQnLCB0aGlzLmlzTmV3T3JEZWxldGVkKCkpO1xyXG4gICAgICAgICAgICB0aGlzLnRvb2xiYXIuZmluZEJ1dHRvbihcImVkaXQtcGVybWlzc2lvbnMtYnV0dG9uXCIpLnRvZ2dsZUNsYXNzKFwiZGlzYWJsZWRcIiwgdGhpcy5pc05ld09yRGVsZXRlZCgpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBhZnRlckxvYWRFbnRpdHkoKSB7XHJcbiAgICAgICAgICAgIHN1cGVyLmFmdGVyTG9hZEVudGl0eSgpO1xyXG5cclxuICAgICAgICAgICAgLy8gdGhlc2UgZmllbGRzIGFyZSBvbmx5IHJlcXVpcmVkIGluIG5ldyByZWNvcmQgbW9kZVxyXG4gICAgICAgICAgICB0aGlzLmZvcm0uUGFzc3dvcmQuZWxlbWVudC50b2dnbGVDbGFzcygncmVxdWlyZWQnLCB0aGlzLmlzTmV3KCkpXHJcbiAgICAgICAgICAgICAgICAuY2xvc2VzdCgnLmZpZWxkJykuZmluZCgnc3VwJykudG9nZ2xlKHRoaXMuaXNOZXcoKSk7XHJcbiAgICAgICAgICAgIHRoaXMuZm9ybS5QYXNzd29yZENvbmZpcm0uZWxlbWVudC50b2dnbGVDbGFzcygncmVxdWlyZWQnLCB0aGlzLmlzTmV3KCkpXHJcbiAgICAgICAgICAgICAgICAuY2xvc2VzdCgnLmZpZWxkJykuZmluZCgnc3VwJykudG9nZ2xlKHRoaXMuaXNOZXcoKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwibmFtZXNwYWNlIEluZG90YWxlbnQuQWRtaW5pc3RyYXRpb24ge1xyXG5cclxuICAgIEBTZXJlbml0eS5EZWNvcmF0b3JzLnJlZ2lzdGVyQ2xhc3MoKVxyXG4gICAgZXhwb3J0IGNsYXNzIFVzZXJHcmlkIGV4dGVuZHMgU2VyZW5pdHkuRW50aXR5R3JpZDxVc2VyUm93LCBhbnk+IHtcclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0Q29sdW1uc0tleSgpIHsgcmV0dXJuIFwiQWRtaW5pc3RyYXRpb24uVXNlclwiOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldERpYWxvZ1R5cGUoKSB7IHJldHVybiBVc2VyRGlhbG9nOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldElkUHJvcGVydHkoKSB7IHJldHVybiBVc2VyUm93LmlkUHJvcGVydHk7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0SXNBY3RpdmVQcm9wZXJ0eSgpIHsgcmV0dXJuIFVzZXJSb3cuaXNBY3RpdmVQcm9wZXJ0eTsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRMb2NhbFRleHRQcmVmaXgoKSB7IHJldHVybiBVc2VyUm93LmxvY2FsVGV4dFByZWZpeDsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRTZXJ2aWNlKCkgeyByZXR1cm4gVXNlclNlcnZpY2UuYmFzZVVybDsgfVxyXG5cclxuICAgICAgICBjb25zdHJ1Y3Rvcihjb250YWluZXI6IEpRdWVyeSkge1xyXG4gICAgICAgICAgICBzdXBlcihjb250YWluZXIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIGdldERlZmF1bHRTb3J0QnkoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBbVXNlclJvdy5GaWVsZHMuVXNlcm5hbWVdO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIm5hbWVzcGFjZSBJbmRvdGFsZW50LkF1dGhvcml6YXRpb24ge1xyXG4gICAgZXhwb3J0IGRlY2xhcmUgbGV0IHVzZXJEZWZpbml0aW9uOiBTY3JpcHRVc2VyRGVmaW5pdGlvbjtcclxuXHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQXV0aG9yaXphdGlvbiwgJ3VzZXJEZWZpbml0aW9uJywge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gUS5nZXRSZW1vdGVEYXRhKCdVc2VyRGF0YScpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIGV4cG9ydCBmdW5jdGlvbiBoYXNQZXJtaXNzaW9uKHBlcm1pc3Npb25LZXk6IHN0cmluZykge1xyXG4gICAgICAgIHJldHVybiBRLkF1dGhvcml6YXRpb24uaGFzUGVybWlzc2lvbihwZXJtaXNzaW9uS2V5KTtcclxuICAgIH1cclxufVxyXG4iLCJuYW1lc3BhY2UgSW5kb3RhbGVudC5BZG1pbmlzdHJhdGlvbiB7XHJcblxyXG4gICAgQFNlcmVuaXR5LkRlY29yYXRvcnMucmVnaXN0ZXJFZGl0b3IoW1NlcmVuaXR5LklHZXRFZGl0VmFsdWUsIFNlcmVuaXR5LklTZXRFZGl0VmFsdWVdKVxyXG4gICAgZXhwb3J0IGNsYXNzIFBlcm1pc3Npb25DaGVja0VkaXRvciBleHRlbmRzIFNlcmVuaXR5LkRhdGFHcmlkPFBlcm1pc3Npb25DaGVja0l0ZW0sIFBlcm1pc3Npb25DaGVja0VkaXRvck9wdGlvbnM+IHtcclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIGdldElkUHJvcGVydHkoKSB7IHJldHVybiBcIktleVwiOyB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgc2VhcmNoVGV4dDogc3RyaW5nO1xyXG4gICAgICAgIHByaXZhdGUgYnlQYXJlbnRLZXk6IFEuR3JvdXBpbmc8UGVybWlzc2lvbkNoZWNrSXRlbT47XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKGNvbnRhaW5lcjogSlF1ZXJ5LCBvcHQ6IFBlcm1pc3Npb25DaGVja0VkaXRvck9wdGlvbnMpIHtcclxuICAgICAgICAgICAgc3VwZXIoY29udGFpbmVyLCBvcHQpO1xyXG5cclxuICAgICAgICAgICAgbGV0IHRpdGxlQnlLZXk6IFEuRGljdGlvbmFyeTxzdHJpbmc+ID0ge307XHJcbiAgICAgICAgICAgIGxldCBwZXJtaXNzaW9uS2V5cyA9IHRoaXMuZ2V0U29ydGVkR3JvdXBBbmRQZXJtaXNzaW9uS2V5cyh0aXRsZUJ5S2V5KTtcclxuICAgICAgICAgICAgbGV0IGl0ZW1zID0gcGVybWlzc2lvbktleXMubWFwKGtleSA9PiA8UGVybWlzc2lvbkNoZWNrSXRlbT57XHJcbiAgICAgICAgICAgICAgICBLZXk6IGtleSxcclxuICAgICAgICAgICAgICAgIFBhcmVudEtleTogdGhpcy5nZXRQYXJlbnRLZXkoa2V5KSxcclxuICAgICAgICAgICAgICAgIFRpdGxlOiB0aXRsZUJ5S2V5W2tleV0sXHJcbiAgICAgICAgICAgICAgICBHcmFudFJldm9rZTogbnVsbCxcclxuICAgICAgICAgICAgICAgIElzR3JvdXA6IGtleS5jaGFyQXQoa2V5Lmxlbmd0aCAtIDEpID09PSAnOidcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmJ5UGFyZW50S2V5ID0gUS50b0dyb3VwaW5nKGl0ZW1zLCB4ID0+IHguUGFyZW50S2V5KTtcclxuICAgICAgICAgICAgdGhpcy5zZXRJdGVtcyhpdGVtcyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIGdldEl0ZW1HcmFudFJldm9rZUNsYXNzKGl0ZW06IFBlcm1pc3Npb25DaGVja0l0ZW0sIGdyYW50OiBib29sZWFuKTogc3RyaW5nIHtcclxuICAgICAgICAgICAgaWYgKCFpdGVtLklzR3JvdXApIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAoKGl0ZW0uR3JhbnRSZXZva2UgPT09IGdyYW50KSA/ICcgY2hlY2tlZCcgOiAnJyk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGxldCBkZXNjID0gdGhpcy5nZXREZXNjZW5kYW50cyhpdGVtLCB0cnVlKTtcclxuICAgICAgICAgICAgbGV0IGdyYW50ZWQgPSBkZXNjLmZpbHRlcih4ID0+IHguR3JhbnRSZXZva2UgPT09IGdyYW50KTtcclxuXHJcbiAgICAgICAgICAgIGlmICghZ3JhbnRlZC5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAnJztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKGRlc2MubGVuZ3RoID09PSBncmFudGVkLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuICdjaGVja2VkJztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuICdjaGVja2VkIHBhcnRpYWwnO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSByb2xlT3JJbXBsaWNpdChrZXkpOiBib29sZWFuIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuX3JvbGVQZXJtaXNzaW9uc1trZXldKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcblxyXG4gICAgICAgICAgICBmb3IgKHZhciBrIG9mIE9iamVjdC5rZXlzKHRoaXMuX3JvbGVQZXJtaXNzaW9ucykpIHtcclxuICAgICAgICAgICAgICAgIHZhciBkID0gdGhpcy5faW1wbGljaXRQZXJtaXNzaW9uc1trXTtcclxuICAgICAgICAgICAgICAgIGlmIChkICYmIGRba2V5XSlcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZm9yICh2YXIgaSBvZiBPYmplY3Qua2V5cyh0aGlzLl9pbXBsaWNpdFBlcm1pc3Npb25zKSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGl0ZW0gPSB0aGlzLnZpZXcuZ2V0SXRlbUJ5SWQoaSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoaXRlbSAmJiBpdGVtLkdyYW50UmV2b2tlID09IHRydWUpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgZCA9IHRoaXMuX2ltcGxpY2l0UGVybWlzc2lvbnNbaV07XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGQgJiYgZFtrZXldKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSBnZXRJdGVtRWZmZWN0aXZlQ2xhc3MoaXRlbTogUGVybWlzc2lvbkNoZWNrSXRlbSk6IHN0cmluZyB7XHJcblxyXG4gICAgICAgICAgICBpZiAoaXRlbS5Jc0dyb3VwKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgZGVzYyA9IHRoaXMuZ2V0RGVzY2VuZGFudHMoaXRlbSwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICBsZXQgZ3JhbnRDb3VudCA9IFEuY291bnQoZGVzYywgeCA9PiB4LkdyYW50UmV2b2tlID09PSB0cnVlIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgKHguR3JhbnRSZXZva2UgPT0gbnVsbCAmJiB0aGlzLnJvbGVPckltcGxpY2l0KHguS2V5KSkpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChncmFudENvdW50ID09PSBkZXNjLmxlbmd0aCB8fCBkZXNjLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAnYWxsb3cnO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmIChncmFudENvdW50ID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICdkZW55JztcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gJ3BhcnRpYWwnO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBsZXQgZ3JhbnRlZCA9IGl0ZW0uR3JhbnRSZXZva2UgPT09IHRydWUgfHxcclxuICAgICAgICAgICAgICAgIChpdGVtLkdyYW50UmV2b2tlID09IG51bGwgJiYgdGhpcy5yb2xlT3JJbXBsaWNpdChpdGVtLktleSkpO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIChncmFudGVkID8gJyBhbGxvdycgOiAnIGRlbnknKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRDb2x1bW5zKCk6IFNsaWNrLkNvbHVtbltdIHtcclxuICAgICAgICAgICAgbGV0IGNvbHVtbnM6IFNsaWNrLkNvbHVtbltdID0gW3tcclxuICAgICAgICAgICAgICAgIG5hbWU6IFEudGV4dCgnU2l0ZS5Vc2VyUGVybWlzc2lvbkRpYWxvZy5QZXJtaXNzaW9uJyksXHJcbiAgICAgICAgICAgICAgICBmaWVsZDogJ1RpdGxlJyxcclxuICAgICAgICAgICAgICAgIGZvcm1hdDogU2VyZW5pdHkuU2xpY2tGb3JtYXR0aW5nLnRyZWVUb2dnbGUoKCkgPT4gdGhpcy52aWV3LCB4ID0+IHguS2V5LCBjdHggPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBpdGVtID0gY3R4Lml0ZW07XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGtsYXNzID0gdGhpcy5nZXRJdGVtRWZmZWN0aXZlQ2xhc3MoaXRlbSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICc8c3BhbiBjbGFzcz1cImVmZmVjdGl2ZS1wZXJtaXNzaW9uICcgKyBrbGFzcyArICdcIj4nICsgUS5odG1sRW5jb2RlKGN0eC52YWx1ZSkgKyAnPC9zcGFuPic7XHJcbiAgICAgICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA0OTUsXHJcbiAgICAgICAgICAgICAgICBzb3J0YWJsZTogZmFsc2VcclxuICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogUS50ZXh0KCdTaXRlLlVzZXJQZXJtaXNzaW9uRGlhbG9nLkdyYW50JyksIGZpZWxkOiAnR3JhbnQnLFxyXG4gICAgICAgICAgICAgICAgZm9ybWF0OiBjdHggPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBpdGVtMSA9IGN0eC5pdGVtO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBrbGFzczEgPSB0aGlzLmdldEl0ZW1HcmFudFJldm9rZUNsYXNzKGl0ZW0xLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCI8c3BhbiBjbGFzcz0nY2hlY2stYm94IGdyYW50IG5vLWZsb2F0IFwiICsga2xhc3MxICsgXCInPjwvc3Bhbj5cIjtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB3aWR0aDogNjUsXHJcbiAgICAgICAgICAgICAgICBzb3J0YWJsZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBoZWFkZXJDc3NDbGFzczogJ2FsaWduLWNlbnRlcicsXHJcbiAgICAgICAgICAgICAgICBjc3NDbGFzczogJ2FsaWduLWNlbnRlcidcclxuICAgICAgICAgICAgfV07XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5vcHRpb25zLnNob3dSZXZva2UpIHtcclxuICAgICAgICAgICAgICAgIGNvbHVtbnMucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogUS50ZXh0KCdTaXRlLlVzZXJQZXJtaXNzaW9uRGlhbG9nLlJldm9rZScpLCBmaWVsZDogJ1Jldm9rZScsXHJcbiAgICAgICAgICAgICAgICAgICAgZm9ybWF0OiBjdHggPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgaXRlbTIgPSBjdHguaXRlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGtsYXNzMiA9IHRoaXMuZ2V0SXRlbUdyYW50UmV2b2tlQ2xhc3MoaXRlbTIsIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICc8c3BhbiBjbGFzcz1cImNoZWNrLWJveCByZXZva2Ugbm8tZmxvYXQgJyArIGtsYXNzMiArICdcIj48L3NwYW4+JztcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA2NSxcclxuICAgICAgICAgICAgICAgICAgICBzb3J0YWJsZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyQ3NzQ2xhc3M6ICdhbGlnbi1jZW50ZXInLFxyXG4gICAgICAgICAgICAgICAgICAgIGNzc0NsYXNzOiAnYWxpZ24tY2VudGVyJ1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiBjb2x1bW5zO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHNldEl0ZW1zKGl0ZW1zOiBQZXJtaXNzaW9uQ2hlY2tJdGVtW10pOiB2b2lkIHtcclxuICAgICAgICAgICAgU2VyZW5pdHkuU2xpY2tUcmVlSGVscGVyLnNldEluZGVudHMoaXRlbXMsIHggPT4geC5LZXksIHggPT4geC5QYXJlbnRLZXksIGZhbHNlKTtcclxuICAgICAgICAgICAgdGhpcy52aWV3LnNldEl0ZW1zKGl0ZW1zLCB0cnVlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBvblZpZXdTdWJtaXQoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBvblZpZXdGaWx0ZXIoaXRlbTogUGVybWlzc2lvbkNoZWNrSXRlbSk6IGJvb2xlYW4ge1xyXG4gICAgICAgICAgICBpZiAoIXN1cGVyLm9uVmlld0ZpbHRlcihpdGVtKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoIVNlcmVuaXR5LlNsaWNrVHJlZUhlbHBlci5maWx0ZXJCeUlkKGl0ZW0sIHRoaXMudmlldywgeCA9PiB4LlBhcmVudEtleSkpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5zZWFyY2hUZXh0KSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tYXRjaENvbnRhaW5zKGl0ZW0pIHx8IGl0ZW0uSXNHcm91cCAmJiBRLmFueSh0aGlzLmdldERlc2NlbmRhbnRzKGl0ZW0sIGZhbHNlKSwgeCA9PiB0aGlzLm1hdGNoQ29udGFpbnMoeCkpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgbWF0Y2hDb250YWlucyhpdGVtOiBQZXJtaXNzaW9uQ2hlY2tJdGVtKTogYm9vbGVhbiB7XHJcbiAgICAgICAgICAgIHJldHVybiBTZWxlY3QyLnV0aWwuc3RyaXBEaWFjcml0aWNzKGl0ZW0uVGl0bGUgfHwgJycpLnRvTG93ZXJDYXNlKCkuaW5kZXhPZih0aGlzLnNlYXJjaFRleHQpID49IDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIGdldERlc2NlbmRhbnRzKGl0ZW06IFBlcm1pc3Npb25DaGVja0l0ZW0sIGV4Y2x1ZGVHcm91cHM6IGJvb2xlYW4pOiBQZXJtaXNzaW9uQ2hlY2tJdGVtW10ge1xyXG4gICAgICAgICAgICBsZXQgcmVzdWx0OiBQZXJtaXNzaW9uQ2hlY2tJdGVtW10gPSBbXTtcclxuICAgICAgICAgICAgbGV0IHN0YWNrID0gW2l0ZW1dO1xyXG4gICAgICAgICAgICB3aGlsZSAoc3RhY2subGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgbGV0IGkgPSBzdGFjay5wb3AoKTtcclxuICAgICAgICAgICAgICAgIGxldCBjaGlsZHJlbiA9IHRoaXMuYnlQYXJlbnRLZXlbaS5LZXldO1xyXG4gICAgICAgICAgICAgICAgaWYgKCFjaGlsZHJlbilcclxuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuXHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBjaGlsZCBvZiBjaGlsZHJlbikge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghZXhjbHVkZUdyb3VwcyB8fCAhY2hpbGQuSXNHcm91cCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQucHVzaChjaGlsZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBzdGFjay5wdXNoKGNoaWxkKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBvbkNsaWNrKGUsIHJvdywgY2VsbCk6IHZvaWQge1xyXG4gICAgICAgICAgICBzdXBlci5vbkNsaWNrKGUsIHJvdywgY2VsbCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoIWUuaXNEZWZhdWx0UHJldmVudGVkKCkpIHtcclxuICAgICAgICAgICAgICAgIFNlcmVuaXR5LlNsaWNrVHJlZUhlbHBlci50b2dnbGVDbGljayhlLCByb3csIGNlbGwsIHRoaXMudmlldywgeCA9PiB4LktleSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChlLmlzRGVmYXVsdFByZXZlbnRlZCgpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGxldCB0YXJnZXQgPSAkKGUudGFyZ2V0KTtcclxuICAgICAgICAgICAgbGV0IGdyYW50ID0gdGFyZ2V0Lmhhc0NsYXNzKCdncmFudCcpO1xyXG5cclxuICAgICAgICAgICAgaWYgKGdyYW50IHx8IHRhcmdldC5oYXNDbGFzcygncmV2b2tlJykpIHtcclxuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgaXRlbSA9IHRoaXMuaXRlbUF0KHJvdyk7XHJcbiAgICAgICAgICAgICAgICBsZXQgY2hlY2tlZE9yUGFydGlhbCA9IHRhcmdldC5oYXNDbGFzcygnY2hlY2tlZCcpIHx8IHRhcmdldC5oYXNDbGFzcygncGFydGlhbCcpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChjaGVja2VkT3JQYXJ0aWFsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZ3JhbnQgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZ3JhbnQgPSBncmFudCAhPT0gY2hlY2tlZE9yUGFydGlhbDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoaXRlbS5Jc0dyb3VwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgZCBvZiB0aGlzLmdldERlc2NlbmRhbnRzKGl0ZW0sIHRydWUpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGQuR3JhbnRSZXZva2UgPSBncmFudDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5HcmFudFJldm9rZSA9IGdyYW50O1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuc2xpY2tHcmlkLmludmFsaWRhdGUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSBnZXRQYXJlbnRLZXkoa2V5KTogc3RyaW5nIHtcclxuICAgICAgICAgICAgaWYgKGtleS5jaGFyQXQoa2V5Lmxlbmd0aCAtIDEpID09PSAnOicpIHtcclxuICAgICAgICAgICAgICAgIGtleSA9IGtleS5zdWJzdHIoMCwga2V5Lmxlbmd0aCAtIDEpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBsZXQgaWR4ID0ga2V5Lmxhc3RJbmRleE9mKCc6Jyk7XHJcbiAgICAgICAgICAgIGlmIChpZHggPj0gMCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGtleS5zdWJzdHIoMCwgaWR4ICsgMSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0QnV0dG9ucygpOiBTZXJlbml0eS5Ub29sQnV0dG9uW10ge1xyXG4gICAgICAgICAgICByZXR1cm4gW107XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgY3JlYXRlVG9vbGJhckV4dGVuc2lvbnMoKTogdm9pZCB7XHJcbiAgICAgICAgICAgIHN1cGVyLmNyZWF0ZVRvb2xiYXJFeHRlbnNpb25zKCk7XHJcbiAgICAgICAgICAgIFNlcmVuaXR5LkdyaWRVdGlscy5hZGRRdWlja1NlYXJjaElucHV0Q3VzdG9tKHRoaXMudG9vbGJhci5lbGVtZW50LCAoZmllbGQsIHRleHQpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2VhcmNoVGV4dCA9IFNlbGVjdDIudXRpbC5zdHJpcERpYWNyaXRpY3MoUS50cmltVG9OdWxsKHRleHQpIHx8ICcnKS50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy52aWV3LnNldEl0ZW1zKHRoaXMudmlldy5nZXRJdGVtcygpLCB0cnVlKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIGdldFNvcnRlZEdyb3VwQW5kUGVybWlzc2lvbktleXModGl0bGVCeUtleTogUS5EaWN0aW9uYXJ5PHN0cmluZz4pOiBzdHJpbmdbXSB7XHJcbiAgICAgICAgICAgIGxldCBrZXlzID0gPHN0cmluZ1tdPlEuZ2V0UmVtb3RlRGF0YSgnQWRtaW5pc3RyYXRpb24uUGVybWlzc2lvbktleXMnKTtcclxuICAgICAgICAgICAgbGV0IHRpdGxlV2l0aEdyb3VwID0ge307XHJcbiAgICAgICAgICAgIGZvciAodmFyIGsgb2Yga2V5cykge1xyXG4gICAgICAgICAgICAgICAgbGV0IHMgPSBrO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICghcykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmIChzLmNoYXJBdChzLmxlbmd0aCAtIDEpID09ICc6Jykge1xyXG4gICAgICAgICAgICAgICAgICAgIHMgPSBzLnN1YnN0cigwLCBzLmxlbmd0aCAtIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHRpdGxlQnlLZXlbc10pIHtcclxuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB0aXRsZUJ5S2V5W3NdID0gUS5jb2FsZXNjZShRLnRyeUdldFRleHQoJ1Blcm1pc3Npb24uJyArIHMpLCBzKTtcclxuICAgICAgICAgICAgICAgIGxldCBwYXJ0cyA9IHMuc3BsaXQoJzonKTtcclxuICAgICAgICAgICAgICAgIGxldCBncm91cCA9ICcnO1xyXG4gICAgICAgICAgICAgICAgbGV0IGdyb3VwVGl0bGUgPSAnJztcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGFydHMubGVuZ3RoIC0gMTsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZ3JvdXAgPSBncm91cCArIHBhcnRzW2ldICsgJzonO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCB0eHQgPSBRLnRyeUdldFRleHQoJ1Blcm1pc3Npb24uJyArIGdyb3VwKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodHh0ID09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHh0ID0gcGFydHNbaV07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlQnlLZXlbZ3JvdXBdID0gdHh0O1xyXG4gICAgICAgICAgICAgICAgICAgIGdyb3VwVGl0bGUgPSBncm91cFRpdGxlICsgdGl0bGVCeUtleVtncm91cF0gKyAnOic7XHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGVXaXRoR3JvdXBbZ3JvdXBdID0gZ3JvdXBUaXRsZTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB0aXRsZVdpdGhHcm91cFtzXSA9IGdyb3VwVGl0bGUgKyB0aXRsZUJ5S2V5W3NdO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBrZXlzID0gT2JqZWN0LmtleXModGl0bGVCeUtleSk7XHJcbiAgICAgICAgICAgIGtleXMgPSBrZXlzLnNvcnQoKHgsIHkpID0+IFEudHVya2lzaExvY2FsZUNvbXBhcmUodGl0bGVXaXRoR3JvdXBbeF0sIHRpdGxlV2l0aEdyb3VwW3ldKSk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4ga2V5cztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGdldCB2YWx1ZSgpOiBVc2VyUGVybWlzc2lvblJvd1tdIHtcclxuXHJcbiAgICAgICAgICAgIGxldCByZXN1bHQ6IFVzZXJQZXJtaXNzaW9uUm93W10gPSBbXTtcclxuXHJcbiAgICAgICAgICAgIGZvciAobGV0IGl0ZW0gb2YgdGhpcy52aWV3LmdldEl0ZW1zKCkpIHtcclxuICAgICAgICAgICAgICAgIGlmIChpdGVtLkdyYW50UmV2b2tlICE9IG51bGwgJiYgaXRlbS5LZXkuY2hhckF0KGl0ZW0uS2V5Lmxlbmd0aCAtIDEpICE9ICc6Jykge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKHsgUGVybWlzc2lvbktleTogaXRlbS5LZXksIEdyYW50ZWQ6IGl0ZW0uR3JhbnRSZXZva2UgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzZXQgdmFsdWUodmFsdWU6IFVzZXJQZXJtaXNzaW9uUm93W10pIHtcclxuXHJcbiAgICAgICAgICAgIGZvciAobGV0IGl0ZW0gb2YgdGhpcy52aWV3LmdldEl0ZW1zKCkpIHtcclxuICAgICAgICAgICAgICAgIGl0ZW0uR3JhbnRSZXZva2UgPSBudWxsO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAodmFsdWUgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgcm93IG9mIHZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHIgPSB0aGlzLnZpZXcuZ2V0SXRlbUJ5SWQocm93LlBlcm1pc3Npb25LZXkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHIuR3JhbnRSZXZva2UgPSBRLmNvYWxlc2NlKHJvdy5HcmFudGVkLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRoaXMuc2V0SXRlbXModGhpcy5nZXRJdGVtcygpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgX3JvbGVQZXJtaXNzaW9uczogUS5EaWN0aW9uYXJ5PGJvb2xlYW4+ID0ge307XHJcblxyXG4gICAgICAgIGdldCByb2xlUGVybWlzc2lvbnMoKTogc3RyaW5nW10ge1xyXG4gICAgICAgICAgICByZXR1cm4gT2JqZWN0LmtleXModGhpcy5fcm9sZVBlcm1pc3Npb25zKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHNldCByb2xlUGVybWlzc2lvbnModmFsdWU6IHN0cmluZ1tdKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3JvbGVQZXJtaXNzaW9ucyA9IHt9O1xyXG5cclxuICAgICAgICAgICAgaWYgKHZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBrIG9mIHZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fcm9sZVBlcm1pc3Npb25zW2tdID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdGhpcy5zZXRJdGVtcyh0aGlzLmdldEl0ZW1zKCkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSBfaW1wbGljaXRQZXJtaXNzaW9uczogUS5EaWN0aW9uYXJ5PFEuRGljdGlvbmFyeTxib29sZWFuPj4gPSB7fTtcclxuXHJcbiAgICAgICAgc2V0IGltcGxpY2l0UGVybWlzc2lvbnModmFsdWU6IFEuRGljdGlvbmFyeTxzdHJpbmdbXT4pIHtcclxuICAgICAgICAgICAgdGhpcy5faW1wbGljaXRQZXJtaXNzaW9ucyA9IHt9O1xyXG5cclxuICAgICAgICAgICAgaWYgKHZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBrIG9mIE9iamVjdC5rZXlzKHZhbHVlKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2ltcGxpY2l0UGVybWlzc2lvbnNba10gPSB0aGlzLl9pbXBsaWNpdFBlcm1pc3Npb25zW2tdIHx8IHt9O1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBsID0gdmFsdWVba107XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgcyBvZiBsKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5faW1wbGljaXRQZXJtaXNzaW9uc1trXVtzXSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgUGVybWlzc2lvbkNoZWNrRWRpdG9yT3B0aW9ucyB7XHJcbiAgICAgICAgc2hvd1Jldm9rZT86IGJvb2xlYW47XHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IGludGVyZmFjZSBQZXJtaXNzaW9uQ2hlY2tJdGVtIHtcclxuICAgICAgICBQYXJlbnRLZXk/OiBzdHJpbmc7XHJcbiAgICAgICAgS2V5Pzogc3RyaW5nO1xyXG4gICAgICAgIFRpdGxlPzogc3RyaW5nO1xyXG4gICAgICAgIElzR3JvdXA/OiBib29sZWFuO1xyXG4gICAgICAgIEdyYW50UmV2b2tlPzogYm9vbGVhbjtcclxuICAgIH1cclxufSIsIm5hbWVzcGFjZSBJbmRvdGFsZW50LkFkbWluaXN0cmF0aW9uIHtcclxuXHJcbiAgICBAU2VyZW5pdHkuRGVjb3JhdG9ycy5yZWdpc3RlckNsYXNzKClcclxuICAgIGV4cG9ydCBjbGFzcyBVc2VyUGVybWlzc2lvbkRpYWxvZyBleHRlbmRzIFNlcmVuaXR5LlRlbXBsYXRlZERpYWxvZzxVc2VyUGVybWlzc2lvbkRpYWxvZ09wdGlvbnM+IHtcclxuXHJcbiAgICAgICAgcHJpdmF0ZSBwZXJtaXNzaW9uczogUGVybWlzc2lvbkNoZWNrRWRpdG9yO1xyXG5cclxuICAgICAgICBjb25zdHJ1Y3RvcihvcHQ6IFVzZXJQZXJtaXNzaW9uRGlhbG9nT3B0aW9ucykge1xyXG4gICAgICAgICAgICBzdXBlcihvcHQpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5wZXJtaXNzaW9ucyA9IG5ldyBQZXJtaXNzaW9uQ2hlY2tFZGl0b3IodGhpcy5ieUlkKCdQZXJtaXNzaW9ucycpLCB7XHJcbiAgICAgICAgICAgICAgICBzaG93UmV2b2tlOiB0cnVlXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgVXNlclBlcm1pc3Npb25TZXJ2aWNlLkxpc3Qoe1xyXG4gICAgICAgICAgICAgICAgVXNlcklEOiB0aGlzLm9wdGlvbnMudXNlcklELFxyXG4gICAgICAgICAgICAgICAgTW9kdWxlOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgU3VibW9kdWxlOiBudWxsXHJcbiAgICAgICAgICAgIH0sIHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMucGVybWlzc2lvbnMudmFsdWUgPSByZXNwb25zZS5FbnRpdGllcztcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBVc2VyUGVybWlzc2lvblNlcnZpY2UuTGlzdFJvbGVQZXJtaXNzaW9ucyh7XHJcbiAgICAgICAgICAgICAgICBVc2VySUQ6IHRoaXMub3B0aW9ucy51c2VySUQsXHJcbiAgICAgICAgICAgICAgICBNb2R1bGU6IG51bGwsXHJcbiAgICAgICAgICAgICAgICBTdWJtb2R1bGU6IG51bGwsXHJcbiAgICAgICAgICAgIH0sIHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMucGVybWlzc2lvbnMucm9sZVBlcm1pc3Npb25zID0gcmVzcG9uc2UuRW50aXRpZXM7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5wZXJtaXNzaW9ucy5pbXBsaWNpdFBlcm1pc3Npb25zID0gUS5nZXRSZW1vdGVEYXRhKCdBZG1pbmlzdHJhdGlvbi5JbXBsaWNpdFBlcm1pc3Npb25zJyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0RGlhbG9nT3B0aW9ucygpOiBKUXVlcnlVSS5EaWFsb2dPcHRpb25zIHtcclxuICAgICAgICAgICAgbGV0IG9wdCA9IHN1cGVyLmdldERpYWxvZ09wdGlvbnMoKTtcclxuXHJcbiAgICAgICAgICAgIG9wdC5idXR0b25zID0gW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQ6IFEudGV4dCgnRGlhbG9ncy5Pa0J1dHRvbicpLFxyXG4gICAgICAgICAgICAgICAgICAgIGNzc0NsYXNzOiAnYnRuIGJ0bi1wcmltYXJ5JyxcclxuICAgICAgICAgICAgICAgICAgICBjbGljazogZSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFVzZXJQZXJtaXNzaW9uU2VydmljZS5VcGRhdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgVXNlcklEOiB0aGlzLm9wdGlvbnMudXNlcklELFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUGVybWlzc2lvbnM6IHRoaXMucGVybWlzc2lvbnMudmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBNb2R1bGU6IG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBTdWJtb2R1bGU6IG51bGxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSwgcmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kaWFsb2dDbG9zZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LnNldFRpbWVvdXQoKCkgPT4gUS5ub3RpZnlTdWNjZXNzKFEudGV4dCgnU2l0ZS5Vc2VyUGVybWlzc2lvbkRpYWxvZy5TYXZlU3VjY2VzcycpKSwgMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0OiBRLnRleHQoJ0RpYWxvZ3MuQ2FuY2VsQnV0dG9uJyksXHJcbiAgICAgICAgICAgICAgICAgICAgY2xpY2s6ICgpID0+IHRoaXMuZGlhbG9nQ2xvc2UoKVxyXG4gICAgICAgICAgICAgICAgfV07XHJcblxyXG4gICAgICAgICAgICBvcHQudGl0bGUgPSBRLmZvcm1hdChRLnRleHQoJ1NpdGUuVXNlclBlcm1pc3Npb25EaWFsb2cuRGlhbG9nVGl0bGUnKSxcclxuICAgICAgICAgICAgICAgIHRoaXMub3B0aW9ucy51c2VybmFtZSk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gb3B0O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIGdldFRlbXBsYXRlKCk6IHN0cmluZyB7XHJcbiAgICAgICAgICAgIHJldHVybiAnPGRpdiBpZD1cIn5fUGVybWlzc2lvbnNcIj48L2Rpdj4nO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIFVzZXJQZXJtaXNzaW9uRGlhbG9nT3B0aW9ucyB7XHJcbiAgICAgICAgdXNlcklEPzogbnVtYmVyO1xyXG4gICAgICAgIHVzZXJuYW1lPzogc3RyaW5nO1xyXG4gICAgfVxyXG59IiwibmFtZXNwYWNlIEluZG90YWxlbnQuQWRtaW5pc3RyYXRpb24ge1xyXG5cclxuICAgIEBTZXJlbml0eS5EZWNvcmF0b3JzLnJlZ2lzdGVyRWRpdG9yKClcclxuICAgIGV4cG9ydCBjbGFzcyBSb2xlQ2hlY2tFZGl0b3IgZXh0ZW5kcyBTZXJlbml0eS5DaGVja1RyZWVFZGl0b3I8U2VyZW5pdHkuQ2hlY2tUcmVlSXRlbTxhbnk+LCBhbnk+IHtcclxuXHJcbiAgICAgICAgcHJpdmF0ZSBzZWFyY2hUZXh0OiBzdHJpbmc7XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKGRpdjogSlF1ZXJ5KSB7XHJcbiAgICAgICAgICAgIHN1cGVyKGRpdik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgY3JlYXRlVG9vbGJhckV4dGVuc2lvbnMoKSB7XHJcbiAgICAgICAgICAgIHN1cGVyLmNyZWF0ZVRvb2xiYXJFeHRlbnNpb25zKCk7XHJcblxyXG4gICAgICAgICAgICBTZXJlbml0eS5HcmlkVXRpbHMuYWRkUXVpY2tTZWFyY2hJbnB1dEN1c3RvbSh0aGlzLnRvb2xiYXIuZWxlbWVudCwgKGZpZWxkLCB0ZXh0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNlYXJjaFRleHQgPSBTZWxlY3QyLnV0aWwuc3RyaXBEaWFjcml0aWNzKHRleHQgfHwgJycpLnRvVXBwZXJDYXNlKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnZpZXcuc2V0SXRlbXModGhpcy52aWV3LmdldEl0ZW1zKCksIHRydWUpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRCdXR0b25zKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gW107XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0VHJlZUl0ZW1zKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gUm9sZVJvdy5nZXRMb29rdXAoKS5pdGVtcy5tYXAocm9sZSA9PiA8U2VyZW5pdHkuQ2hlY2tUcmVlSXRlbTxhbnk+PntcclxuICAgICAgICAgICAgICAgIGlkOiByb2xlLlJvbGVJZC50b1N0cmluZygpLFxyXG4gICAgICAgICAgICAgICAgdGV4dDogcm9sZS5Sb2xlTmFtZVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBvblZpZXdGaWx0ZXIoaXRlbSkge1xyXG4gICAgICAgICAgICByZXR1cm4gc3VwZXIub25WaWV3RmlsdGVyKGl0ZW0pICYmXHJcbiAgICAgICAgICAgICAgICAoUS5pc0VtcHR5T3JOdWxsKHRoaXMuc2VhcmNoVGV4dCkgfHxcclxuICAgICAgICAgICAgICAgICBTZWxlY3QyLnV0aWwuc3RyaXBEaWFjcml0aWNzKGl0ZW0udGV4dCB8fCAnJylcclxuICAgICAgICAgICAgICAgICAgICAgLnRvVXBwZXJDYXNlKCkuaW5kZXhPZih0aGlzLnNlYXJjaFRleHQpID49IDApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIm5hbWVzcGFjZSBJbmRvdGFsZW50LkFkbWluaXN0cmF0aW9uIHtcclxuXHJcbiAgICBAU2VyZW5pdHkuRGVjb3JhdG9ycy5yZWdpc3RlckNsYXNzKClcclxuICAgIGV4cG9ydCBjbGFzcyBVc2VyUm9sZURpYWxvZyBleHRlbmRzIFNlcmVuaXR5LlRlbXBsYXRlZERpYWxvZzxVc2VyUm9sZURpYWxvZ09wdGlvbnM+IHtcclxuXHJcbiAgICAgICAgcHJpdmF0ZSBwZXJtaXNzaW9uczogUm9sZUNoZWNrRWRpdG9yO1xyXG5cclxuICAgICAgICBjb25zdHJ1Y3RvcihvcHQ6IFVzZXJSb2xlRGlhbG9nT3B0aW9ucykge1xyXG4gICAgICAgICAgICBzdXBlcihvcHQpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5wZXJtaXNzaW9ucyA9IG5ldyBSb2xlQ2hlY2tFZGl0b3IodGhpcy5ieUlkKCdSb2xlcycpKTtcclxuXHJcbiAgICAgICAgICAgIFVzZXJSb2xlU2VydmljZS5MaXN0KHtcclxuICAgICAgICAgICAgICAgIFVzZXJJRDogdGhpcy5vcHRpb25zLnVzZXJJRFxyXG4gICAgICAgICAgICB9LCByZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBlcm1pc3Npb25zLnZhbHVlID0gcmVzcG9uc2UuRW50aXRpZXMubWFwKHggPT4geC50b1N0cmluZygpKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0RGlhbG9nT3B0aW9ucygpIHtcclxuICAgICAgICAgICAgdmFyIG9wdCA9IHN1cGVyLmdldERpYWxvZ09wdGlvbnMoKTtcclxuXHJcbiAgICAgICAgICAgIG9wdC5idXR0b25zID0gW3tcclxuICAgICAgICAgICAgICAgIHRleHQ6IFEudGV4dCgnRGlhbG9ncy5Pa0J1dHRvbicpLFxyXG4gICAgICAgICAgICAgICAgY3NzQ2xhc3M6ICdidG4gYnRuLXByaW1hcnknLFxyXG4gICAgICAgICAgICAgICAgY2xpY2s6ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBRLnNlcnZpY2VSZXF1ZXN0KCdBZG1pbmlzdHJhdGlvbi9Vc2VyUm9sZS9VcGRhdGUnLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFVzZXJJRDogdGhpcy5vcHRpb25zLnVzZXJJRCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgUm9sZXM6IHRoaXMucGVybWlzc2lvbnMudmFsdWUubWFwKHggPT4gcGFyc2VJbnQoeCwgMTApKVxyXG4gICAgICAgICAgICAgICAgICAgIH0sIHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kaWFsb2dDbG9zZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBRLm5vdGlmeVN1Y2Nlc3MoUS50ZXh0KCdTaXRlLlVzZXJSb2xlRGlhbG9nLlNhdmVTdWNjZXNzJykpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICB0ZXh0OiBRLnRleHQoJ0RpYWxvZ3MuQ2FuY2VsQnV0dG9uJyksXHJcbiAgICAgICAgICAgICAgICBjbGljazogKCkgPT4gdGhpcy5kaWFsb2dDbG9zZSgpXHJcbiAgICAgICAgICAgIH1dO1xyXG5cclxuICAgICAgICAgICAgb3B0LnRpdGxlID0gUS5mb3JtYXQoUS50ZXh0KCdTaXRlLlVzZXJSb2xlRGlhbG9nLkRpYWxvZ1RpdGxlJyksIHRoaXMub3B0aW9ucy51c2VybmFtZSk7XHJcbiAgICAgICAgICAgIHJldHVybiBvcHQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0VGVtcGxhdGUoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBcIjxkaXYgaWQ9J35fUm9sZXMnPjwvZGl2PlwiO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIFVzZXJSb2xlRGlhbG9nT3B0aW9ucyB7XHJcbiAgICAgICAgdXNlcklEOiBudW1iZXI7XHJcbiAgICAgICAgdXNlcm5hbWU6IHN0cmluZztcclxuICAgIH1cclxufSIsIm5hbWVzcGFjZSBJbmRvdGFsZW50Lkxhbmd1YWdlTGlzdCB7XHJcbiAgICBleHBvcnQgZnVuY3Rpb24gZ2V0VmFsdWUoKSB7XHJcbiAgICAgICAgdmFyIHJlc3VsdDogc3RyaW5nW11bXSA9IFtdO1xyXG4gICAgICAgIGZvciAodmFyIGsgb2YgQWRtaW5pc3RyYXRpb24uTGFuZ3VhZ2VSb3cuZ2V0TG9va3VwKCkuaXRlbXMpIHtcclxuICAgICAgICAgICAgaWYgKGsuTGFuZ3VhZ2VJZCAhPT0gJ2VuJykge1xyXG4gICAgICAgICAgICAgICAgcmVzdWx0LnB1c2goW2suSWQudG9TdHJpbmcoKSwgay5MYW5ndWFnZU5hbWVdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfVxyXG59XHJcbiIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9Db21tb24vSGVscGVycy9MYW5ndWFnZUxpc3QudHNcIiAvPlxyXG5cclxubmFtZXNwYWNlIEluZG90YWxlbnQuU2NyaXB0SW5pdGlhbGl6YXRpb24ge1xyXG4gICAgUS5Db25maWcucmVzcG9uc2l2ZURpYWxvZ3MgPSB0cnVlO1xyXG4gICAgUS5Db25maWcucm9vdE5hbWVzcGFjZXMucHVzaCgnSW5kb3RhbGVudCcpO1xyXG4gICAgU2VyZW5pdHkuRW50aXR5RGlhbG9nLmRlZmF1bHRMYW5ndWFnZUxpc3QgPSBMYW5ndWFnZUxpc3QuZ2V0VmFsdWU7XHJcbiAgICBTZXJlbml0eS5IdG1sQ29udGVudEVkaXRvci5DS0VkaXRvckJhc2VQYXRoID0gXCJ+L1NlcmVuaXR5LkFzc2V0cy9TY3JpcHRzL2NrZWRpdG9yL1wiO1xyXG5cclxuICAgIGlmICgkLmZuWydjb2xvcmJveCddKSB7XHJcbiAgICAgICAgJC5mblsnY29sb3Jib3gnXS5zZXR0aW5ncy5tYXhXaWR0aCA9IFwiOTUlXCI7XHJcbiAgICAgICAgJC5mblsnY29sb3Jib3gnXS5zZXR0aW5ncy5tYXhIZWlnaHQgPSBcIjk1JVwiO1xyXG4gICAgfVxyXG5cclxuICAgIHdpbmRvdy5vbmVycm9yID0gUS5FcnJvckhhbmRsaW5nLnJ1bnRpbWVFcnJvckhhbmRsZXI7XHJcbn0iLCJuYW1lc3BhY2UgSW5kb3RhbGVudC5Db21tb24ge1xyXG4gICAgZXhwb3J0IGNsYXNzIFNpZGViYXJTZWFyY2ggZXh0ZW5kcyBTZXJlbml0eS5XaWRnZXQ8YW55PiB7XHJcbiAgICAgICAgcHJpdmF0ZSBtZW51VUw6IEpRdWVyeTtcclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IoaW5wdXQ6IEpRdWVyeSwgbWVudVVMOiBKUXVlcnkpIHtcclxuICAgICAgICAgICAgc3VwZXIoaW5wdXQpO1xyXG5cclxuICAgICAgICAgICAgbmV3IFNlcmVuaXR5LlF1aWNrU2VhcmNoSW5wdXQoaW5wdXQsIHtcclxuICAgICAgICAgICAgICAgIG9uU2VhcmNoOiAoZmllbGQsIHRleHQsIHN1Y2Nlc3MpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZU1hdGNoRmxhZ3ModGV4dCk7XHJcbiAgICAgICAgICAgICAgICAgICAgc3VjY2Vzcyh0cnVlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLm1lbnVVTCA9IG1lbnVVTDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCB1cGRhdGVNYXRjaEZsYWdzKHRleHQ6IHN0cmluZykge1xyXG4gICAgICAgICAgICB2YXIgbGlMaXN0ID0gdGhpcy5tZW51VUwuZmluZCgnbGknKS5yZW1vdmVDbGFzcygnbm9uLW1hdGNoJyk7XHJcblxyXG4gICAgICAgICAgICB0ZXh0ID0gUS50cmltVG9OdWxsKHRleHQpO1xyXG5cclxuICAgICAgICAgICAgaWYgKHRleHQgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgbGlMaXN0LnNob3coKTtcclxuICAgICAgICAgICAgICAgIGxpTGlzdC5yZW1vdmVDbGFzcygnZXhwYW5kZWQnKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdmFyIHBhcnRzID0gdGV4dC5yZXBsYWNlKCcsJywgJyAnKS5zcGxpdCgnICcpLmZpbHRlcih4ID0+ICFRLmlzVHJpbW1lZEVtcHR5KHgpKTtcclxuXHJcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcGFydHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIHBhcnRzW2ldID0gUS50cmltVG9OdWxsKFNlbGVjdDIudXRpbC5zdHJpcERpYWNyaXRpY3MocGFydHNbaV0pLnRvVXBwZXJDYXNlKCkpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB2YXIgaXRlbXMgPSBsaUxpc3Q7XHJcbiAgICAgICAgICAgIGl0ZW1zLmVhY2goZnVuY3Rpb24gKGlkeCwgZSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHggPSAkKGUpO1xyXG4gICAgICAgICAgICAgICAgdmFyIHRpdGxlID0gU2VsZWN0Mi51dGlsLnN0cmlwRGlhY3JpdGljcyhRLmNvYWxlc2NlKHgudGV4dCgpLCAnJykudG9VcHBlckNhc2UoKSk7XHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBwIG9mIHBhcnRzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHAgIT0gbnVsbCAmJiAhKHRpdGxlLmluZGV4T2YocCkgIT09IC0xKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB4LmFkZENsYXNzKCdub24tbWF0Y2gnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHZhciBtYXRjaGluZ0l0ZW1zID0gaXRlbXMubm90KCcubm9uLW1hdGNoJyk7XHJcblxyXG4gICAgICAgICAgICB2YXIgdmlzaWJsZXMgPSBtYXRjaGluZ0l0ZW1zLnBhcmVudHMoJ2xpJykuYWRkKG1hdGNoaW5nSXRlbXMpO1xyXG5cclxuICAgICAgICAgICAgdmFyIG5vblZpc2libGVzID0gbGlMaXN0Lm5vdCh2aXNpYmxlcyk7XHJcbiAgICAgICAgICAgIG5vblZpc2libGVzLmhpZGUoKS5hZGRDbGFzcygnbm9uLW1hdGNoJyk7XHJcblxyXG4gICAgICAgICAgICB2aXNpYmxlcy5zaG93KCk7XHJcbiAgICAgICAgICAgIGxpTGlzdC5hZGRDbGFzcygnZXhwYW5kZWQnKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJuYW1lc3BhY2UgSW5kb3RhbGVudC5NZW1iZXJzaGlwIHtcclxuXHJcbiAgICBAU2VyZW5pdHkuRGVjb3JhdG9ycy5yZWdpc3RlckNsYXNzKClcclxuICAgIGV4cG9ydCBjbGFzcyBMb2dpblBhbmVsIGV4dGVuZHMgU2VyZW5pdHkuUHJvcGVydHlQYW5lbDxMb2dpblJlcXVlc3QsIGFueT4ge1xyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0Rm9ybUtleSgpIHsgcmV0dXJuIExvZ2luRm9ybS5mb3JtS2V5OyB9XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKGNvbnRhaW5lcjogSlF1ZXJ5KSB7XHJcbiAgICAgICAgICAgIHN1cGVyKGNvbnRhaW5lcik7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmJ5SWQoJ0xvZ2luQnV0dG9uJykuY2xpY2soZSA9PiB7XHJcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLnZhbGlkYXRlRm9ybSgpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHZhciByZXF1ZXN0ID0gdGhpcy5nZXRTYXZlRW50aXR5KCk7XHJcblxyXG4gICAgICAgICAgICAgICAgUS5zZXJ2aWNlQ2FsbCh7XHJcbiAgICAgICAgICAgICAgICAgICAgdXJsOiBRLnJlc29sdmVVcmwoJ34vQWNjb3VudC9Mb2dpbicpLFxyXG4gICAgICAgICAgICAgICAgICAgIHJlcXVlc3Q6IHJlcXVlc3QsXHJcbiAgICAgICAgICAgICAgICAgICAgb25TdWNjZXNzOiByZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVkaXJlY3RUb1JldHVyblVybCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgb25FcnJvcjogKHJlc3BvbnNlOiBTZXJlbml0eS5TZXJ2aWNlUmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlICE9IG51bGwgJiYgcmVzcG9uc2UuRXJyb3IgIT0gbnVsbCAmJiByZXNwb25zZS5FcnJvci5Db2RlID09IFwiUmVkaXJlY3RVc2VyVG9cIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSByZXNwb25zZS5FcnJvci5Bcmd1bWVudHM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZSAhPSBudWxsICYmIHJlc3BvbnNlLkVycm9yICE9IG51bGwgJiYgIVEuaXNFbXB0eU9yTnVsbChyZXNwb25zZS5FcnJvci5NZXNzYWdlKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUS5ub3RpZnlFcnJvcihyZXNwb25zZS5FcnJvci5NZXNzYWdlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoJyNQYXNzd29yZCcpLmZvY3VzKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBRLkVycm9ySGFuZGxpbmcuc2hvd1NlcnZpY2VFcnJvcihyZXNwb25zZS5FcnJvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIHJlZGlyZWN0VG9SZXR1cm5VcmwoKSB7XHJcbiAgICAgICAgICAgIHZhciBxID0gUS5wYXJzZVF1ZXJ5U3RyaW5nKCk7XHJcbiAgICAgICAgICAgIHZhciByZXR1cm5VcmwgPSBxWydyZXR1cm5VcmwnXSB8fCBxWydSZXR1cm5VcmwnXTtcclxuICAgICAgICAgICAgaWYgKHJldHVyblVybCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGhhc2ggPSB3aW5kb3cubG9jYXRpb24uaGFzaDtcclxuICAgICAgICAgICAgICAgIGlmIChoYXNoICE9IG51bGwgJiYgaGFzaCAhPSAnIycpXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuVXJsICs9IGhhc2g7XHJcbiAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHJldHVyblVybDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gUS5yZXNvbHZlVXJsKCd+LycpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0VGVtcGxhdGUoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBgXHJcbiAgICA8aDIgY2xhc3M9XCJ0ZXh0LWNlbnRlciBwLTRcIj5cclxuICAgICAgICA8aW1nIHNyYz1cIiR7US5yZXNvbHZlVXJsKFwifi9Db250ZW50L3NpdGUvaW1hZ2VzL3NlcmVuaXR5LWxvZ28tdy0xMjgucG5nXCIpfVwiXHJcbiAgICAgICAgICAgIGNsYXNzPVwicm91bmRlZC1jaXJjbGUgcC0xXCIgc3R5bGU9XCJiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zLXNpZGViYXItYmFuZC1iZylcIlxyXG4gICAgICAgICAgICB3aWR0aD1cIjUwXCIgaGVpZ2h0PVwiNTBcIiAvPiBJbmRvdGFsZW50XHJcbiAgICA8L2gyPlxyXG5cclxuICAgIDxkaXYgY2xhc3M9XCJzLVBhbmVsIHAtNFwiPlxyXG4gICAgICAgIDxoNSBjbGFzcz1cInRleHQtY2VudGVyIG15LTRcIj4ke1EudGV4dChcIkZvcm1zLk1lbWJlcnNoaXAuTG9naW4uTG9naW5Ub1lvdXJBY2NvdW50XCIpfTwvaDU+XHJcbiAgICAgICAgPGZvcm0gaWQ9XCJ+X0Zvcm1cIiBhY3Rpb249XCJcIj5cclxuICAgICAgICAgICAgPGRpdiBpZD1cIn5fUHJvcGVydHlHcmlkXCI+PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJweC1maWVsZFwiPlxyXG4gICAgICAgICAgICAgICAgPGEgY2xhc3M9XCJmbG9hdC1lbmQgdGV4dC1kZWNvcmF0aW9uLW5vbmVcIiBocmVmPVwiJHtRLnJlc29sdmVVcmwoJ34vQWNjb3VudC9Gb3Jnb3RQYXNzd29yZCcpfVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICR7US50ZXh0KFwiRm9ybXMuTWVtYmVyc2hpcC5Mb2dpbi5Gb3Jnb3RQYXNzd29yZFwiKX1cclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJweC1maWVsZFwiPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBpZD1cIn5fTG9naW5CdXR0b25cIiB0eXBlPVwic3VibWl0XCIgY2xhc3M9XCJidG4gYnRuLXByaW1hcnkgbXktMyB3LTEwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICR7US50ZXh0KFwiRm9ybXMuTWVtYmVyc2hpcC5Mb2dpbi5TaWduSW5CdXR0b25cIil9XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9mb3JtPlxyXG4gICAgPC9kaXY+XHJcblxyXG4gICAgPGRpdiBjbGFzcz1cInRleHQtY2VudGVyIG10LTJcIj5cclxuICAgICAgICA8YSBjbGFzcz1cInRleHQtZGVjb3JhdGlvbi1ub25lXCIgaHJlZj1cIiR7US5yZXNvbHZlVXJsKCd+L0FjY291bnQvU2lnblVwJyl9XCI+JHtRLnRleHQoXCJGb3Jtcy5NZW1iZXJzaGlwLkxvZ2luLlNpZ25VcEJ1dHRvblwiKX08L2E+XHJcbiAgICA8L2Rpdj4gICBcclxuYDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJuYW1lc3BhY2UgSW5kb3RhbGVudC5NZW1iZXJzaGlwIHtcclxuXHJcbiAgICBAU2VyZW5pdHkuRGVjb3JhdG9ycy5yZWdpc3RlckNsYXNzKClcclxuICAgIGV4cG9ydCBjbGFzcyBDaGFuZ2VQYXNzd29yZFBhbmVsIGV4dGVuZHMgU2VyZW5pdHkuUHJvcGVydHlQYW5lbDxDaGFuZ2VQYXNzd29yZFJlcXVlc3QsIGFueT4ge1xyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0Rm9ybUtleSgpIHsgcmV0dXJuIENoYW5nZVBhc3N3b3JkRm9ybS5mb3JtS2V5OyB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgZm9ybTogQ2hhbmdlUGFzc3dvcmRGb3JtO1xyXG5cclxuICAgICAgICBjb25zdHJ1Y3Rvcihjb250YWluZXI6IEpRdWVyeSkge1xyXG4gICAgICAgICAgICBzdXBlcihjb250YWluZXIpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5mb3JtID0gbmV3IENoYW5nZVBhc3N3b3JkRm9ybSh0aGlzLmlkUHJlZml4KTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuZm9ybS5OZXdQYXNzd29yZC5hZGRWYWxpZGF0aW9uUnVsZSh0aGlzLnVuaXF1ZU5hbWUsIGUgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZm9ybS53KCdDb25maXJtUGFzc3dvcmQnLCBTZXJlbml0eS5QYXNzd29yZEVkaXRvcikudmFsdWUubGVuZ3RoIDwgNykge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBRLmZvcm1hdChRLnRleHQoJ1ZhbGlkYXRpb24uTWluUmVxdWlyZWRQYXNzd29yZExlbmd0aCcpLCA3KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmZvcm0uQ29uZmlybVBhc3N3b3JkLmFkZFZhbGlkYXRpb25SdWxlKHRoaXMudW5pcXVlTmFtZSwgZSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5mb3JtLkNvbmZpcm1QYXNzd29yZC52YWx1ZSAhPT0gdGhpcy5mb3JtLk5ld1Bhc3N3b3JkLnZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFEudGV4dCgnVmFsaWRhdGlvbi5QYXNzd29yZENvbmZpcm0nKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmJ5SWQoJ1N1Ym1pdEJ1dHRvbicpLmNsaWNrKGUgPT4ge1xyXG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICghdGhpcy52YWxpZGF0ZUZvcm0oKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgcmVxdWVzdCA9IHRoaXMuZ2V0U2F2ZUVudGl0eSgpO1xyXG4gICAgICAgICAgICAgICAgUS5zZXJ2aWNlQ2FsbCh7XHJcbiAgICAgICAgICAgICAgICAgICAgdXJsOiBRLnJlc29sdmVVcmwoJ34vQWNjb3VudC9DaGFuZ2VQYXNzd29yZCcpLFxyXG4gICAgICAgICAgICAgICAgICAgIHJlcXVlc3Q6IHJlcXVlc3QsXHJcbiAgICAgICAgICAgICAgICAgICAgb25TdWNjZXNzOiByZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFEuaW5mb3JtYXRpb24oUS50ZXh0KCdGb3Jtcy5NZW1iZXJzaGlwLkNoYW5nZVBhc3N3b3JkLlN1Y2Nlc3MnKSwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBRLnJlc29sdmVVcmwoJ34vJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGdldFRlbXBsYXRlKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gYDxkaXYgY2xhc3M9XCJzLVBhbmVsXCI+XHJcbiAgICA8aDMgY2xhc3M9XCJwYWdlLXRpdGxlIG1iLTQgdGV4dC1jZW50ZXJcIj4ke1EudGV4dChcIkZvcm1zLk1lbWJlcnNoaXAuQ2hhbmdlUGFzc3dvcmQuRm9ybVRpdGxlXCIpfTwvaDM+XHJcbiAgICA8Zm9ybSBpZD1cIn5fRm9ybVwiIGFjdGlvbj1cIlwiPlxyXG4gICAgICAgIDxkaXYgaWQ9XCJ+X1Byb3BlcnR5R3JpZFwiPjwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJweC1maWVsZCBtdC00XCI+XHJcbiAgICAgICAgICAgIDxidXR0b24gaWQ9XCJ+X1N1Ym1pdEJ1dHRvblwiIHR5cGU9XCJzdWJtaXRcIiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeSB3LTEwMFwiPlxyXG4gICAgICAgICAgICAgICAgJHtRLnRleHQoXCJGb3Jtcy5NZW1iZXJzaGlwLkNoYW5nZVBhc3N3b3JkLlN1Ym1pdEJ1dHRvblwiKX1cclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Zvcm0+XHJcbjwvZGl2PmA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwibmFtZXNwYWNlIEluZG90YWxlbnQuTWVtYmVyc2hpcCB7XHJcblxyXG4gICAgQFNlcmVuaXR5LkRlY29yYXRvcnMucmVnaXN0ZXJDbGFzcygpXHJcbiAgICBleHBvcnQgY2xhc3MgRm9yZ290UGFzc3dvcmRQYW5lbCBleHRlbmRzIFNlcmVuaXR5LlByb3BlcnR5UGFuZWw8Rm9yZ290UGFzc3dvcmRSZXF1ZXN0LCBhbnk+IHtcclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIGdldEZvcm1LZXkoKSB7IHJldHVybiBGb3Jnb3RQYXNzd29yZEZvcm0uZm9ybUtleTsgfVxyXG5cclxuICAgICAgICBwcml2YXRlIGZvcm06IEZvcmdvdFBhc3N3b3JkRm9ybTtcclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IoY29udGFpbmVyOiBKUXVlcnkpIHtcclxuICAgICAgICAgICAgc3VwZXIoY29udGFpbmVyKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuZm9ybSA9IG5ldyBGb3Jnb3RQYXNzd29yZEZvcm0odGhpcy5pZFByZWZpeCk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmJ5SWQoJ1N1Ym1pdEJ1dHRvbicpLmNsaWNrKGUgPT4ge1xyXG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICghdGhpcy52YWxpZGF0ZUZvcm0oKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgcmVxdWVzdCA9IHRoaXMuZ2V0U2F2ZUVudGl0eSgpO1xyXG4gICAgICAgICAgICAgICAgUS5zZXJ2aWNlQ2FsbCh7XHJcbiAgICAgICAgICAgICAgICAgICAgdXJsOiBRLnJlc29sdmVVcmwoJ34vQWNjb3VudC9Gb3Jnb3RQYXNzd29yZCcpLFxyXG4gICAgICAgICAgICAgICAgICAgIHJlcXVlc3Q6IHJlcXVlc3QsXHJcbiAgICAgICAgICAgICAgICAgICAgb25TdWNjZXNzOiByZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFEuaW5mb3JtYXRpb24oUS50ZXh0KCdGb3Jtcy5NZW1iZXJzaGlwLkZvcmdvdFBhc3N3b3JkLlN1Y2Nlc3MnKSwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBRLnJlc29sdmVVcmwoJ34vJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJuYW1lc3BhY2UgSW5kb3RhbGVudC5NZW1iZXJzaGlwIHtcclxuXHJcbiAgICBAU2VyZW5pdHkuRGVjb3JhdG9ycy5yZWdpc3RlckNsYXNzKClcclxuICAgIGV4cG9ydCBjbGFzcyBSZXNldFBhc3N3b3JkUGFuZWwgZXh0ZW5kcyBTZXJlbml0eS5Qcm9wZXJ0eVBhbmVsPFJlc2V0UGFzc3dvcmRSZXF1ZXN0LCBhbnk+IHtcclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIGdldEZvcm1LZXkoKSB7IHJldHVybiBSZXNldFBhc3N3b3JkRm9ybS5mb3JtS2V5OyB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgZm9ybTogUmVzZXRQYXNzd29yZEZvcm07XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKGNvbnRhaW5lcjogSlF1ZXJ5KSB7XHJcbiAgICAgICAgICAgIHN1cGVyKGNvbnRhaW5lcik7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmZvcm0gPSBuZXcgUmVzZXRQYXNzd29yZEZvcm0odGhpcy5pZFByZWZpeCk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmZvcm0uTmV3UGFzc3dvcmQuYWRkVmFsaWRhdGlvblJ1bGUodGhpcy51bmlxdWVOYW1lLCBlID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmZvcm0uTmV3UGFzc3dvcmQudmFsdWUubGVuZ3RoIDwgNykge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBRLmZvcm1hdChRLnRleHQoJ1ZhbGlkYXRpb24uTWluUmVxdWlyZWRQYXNzd29yZExlbmd0aCcpLCA3KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmZvcm0uQ29uZmlybVBhc3N3b3JkLmFkZFZhbGlkYXRpb25SdWxlKHRoaXMudW5pcXVlTmFtZSwgZSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5mb3JtLkNvbmZpcm1QYXNzd29yZC52YWx1ZSAhPT0gdGhpcy5mb3JtLk5ld1Bhc3N3b3JkLnZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFEudGV4dCgnVmFsaWRhdGlvbi5QYXNzd29yZENvbmZpcm0nKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmJ5SWQoJ1N1Ym1pdEJ1dHRvbicpLmNsaWNrKGUgPT4ge1xyXG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICghdGhpcy52YWxpZGF0ZUZvcm0oKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgcmVxdWVzdCA9IHRoaXMuZ2V0U2F2ZUVudGl0eSgpO1xyXG4gICAgICAgICAgICAgICAgcmVxdWVzdC5Ub2tlbiA9IHRoaXMuYnlJZCgnVG9rZW4nKS52YWwoKTtcclxuICAgICAgICAgICAgICAgIFEuc2VydmljZUNhbGwoe1xyXG4gICAgICAgICAgICAgICAgICAgIHVybDogUS5yZXNvbHZlVXJsKCd+L0FjY291bnQvUmVzZXRQYXNzd29yZCcpLFxyXG4gICAgICAgICAgICAgICAgICAgIHJlcXVlc3Q6IHJlcXVlc3QsXHJcbiAgICAgICAgICAgICAgICAgICAgb25TdWNjZXNzOiByZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFEuaW5mb3JtYXRpb24oUS50ZXh0KCdGb3Jtcy5NZW1iZXJzaGlwLlJlc2V0UGFzc3dvcmQuU3VjY2VzcycpLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IFEucmVzb2x2ZVVybCgnfi9BY2NvdW50L0xvZ2luJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwibmFtZXNwYWNlIEluZG90YWxlbnQuTWVtYmVyc2hpcCB7XHJcblxyXG4gICAgQFNlcmVuaXR5LkRlY29yYXRvcnMucmVnaXN0ZXJDbGFzcygpXHJcbiAgICBleHBvcnQgY2xhc3MgU2lnblVwUGFuZWwgZXh0ZW5kcyBTZXJlbml0eS5Qcm9wZXJ0eVBhbmVsPFNpZ25VcFJlcXVlc3QsIGFueT4ge1xyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0Rm9ybUtleSgpIHsgcmV0dXJuIFNpZ25VcEZvcm0uZm9ybUtleTsgfVxyXG5cclxuICAgICAgICBwcml2YXRlIGZvcm06IFNpZ25VcEZvcm07XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKGNvbnRhaW5lcjogSlF1ZXJ5KSB7XHJcbiAgICAgICAgICAgIHN1cGVyKGNvbnRhaW5lcik7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmZvcm0gPSBuZXcgU2lnblVwRm9ybSh0aGlzLmlkUHJlZml4KTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuZm9ybS5Db25maXJtRW1haWwuYWRkVmFsaWRhdGlvblJ1bGUodGhpcy51bmlxdWVOYW1lLCBlID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmZvcm0uQ29uZmlybUVtYWlsLnZhbHVlICE9PSB0aGlzLmZvcm0uRW1haWwudmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gUS50ZXh0KCdWYWxpZGF0aW9uLkVtYWlsQ29uZmlybScpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuZm9ybS5Db25maXJtUGFzc3dvcmQuYWRkVmFsaWRhdGlvblJ1bGUodGhpcy51bmlxdWVOYW1lLCBlID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmZvcm0uQ29uZmlybVBhc3N3b3JkLnZhbHVlICE9PSB0aGlzLmZvcm0uUGFzc3dvcmQudmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gUS50ZXh0KCdWYWxpZGF0aW9uLlBhc3N3b3JkQ29uZmlybScpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuYnlJZCgnU3VibWl0QnV0dG9uJykuY2xpY2soZSA9PiB7XHJcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLnZhbGlkYXRlRm9ybSgpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIFEuc2VydmljZUNhbGwoe1xyXG4gICAgICAgICAgICAgICAgICAgIHVybDogUS5yZXNvbHZlVXJsKCd+L0FjY291bnQvU2lnblVwJyksXHJcbiAgICAgICAgICAgICAgICAgICAgcmVxdWVzdDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBEaXNwbGF5TmFtZTogdGhpcy5mb3JtLkRpc3BsYXlOYW1lLnZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBFbWFpbDogdGhpcy5mb3JtLkVtYWlsLnZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBQYXNzd29yZDogdGhpcy5mb3JtLlBhc3N3b3JkLnZhbHVlXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBvblN1Y2Nlc3M6IHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgUS5pbmZvcm1hdGlvbihRLnRleHQoJ0Zvcm1zLk1lbWJlcnNoaXAuU2lnblVwLlN1Y2Nlc3MnKSwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBRLnJlc29sdmVVcmwoJ34vJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiXHJcbm5hbWVzcGFjZSBJbmRvdGFsZW50Lk1lcmNoYW5kaXNlIHtcclxuXHJcbiAgICBAU2VyZW5pdHkuRGVjb3JhdG9ycy5yZWdpc3RlckNsYXNzKClcclxuICAgIGV4cG9ydCBjbGFzcyBCcmFuZERpYWxvZyBleHRlbmRzIFNlcmVuaXR5LkVudGl0eURpYWxvZzxCcmFuZFJvdywgYW55PiB7XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldEZvcm1LZXkoKSB7IHJldHVybiBCcmFuZEZvcm0uZm9ybUtleTsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRJZFByb3BlcnR5KCkgeyByZXR1cm4gQnJhbmRSb3cuaWRQcm9wZXJ0eTsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRMb2NhbFRleHRQcmVmaXgoKSB7IHJldHVybiBCcmFuZFJvdy5sb2NhbFRleHRQcmVmaXg7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0TmFtZVByb3BlcnR5KCkgeyByZXR1cm4gQnJhbmRSb3cubmFtZVByb3BlcnR5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldFNlcnZpY2UoKSB7IHJldHVybiBCcmFuZFNlcnZpY2UuYmFzZVVybDsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXREZWxldGVQZXJtaXNzaW9uKCkgeyByZXR1cm4gQnJhbmRSb3cuZGVsZXRlUGVybWlzc2lvbjsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRJbnNlcnRQZXJtaXNzaW9uKCkgeyByZXR1cm4gQnJhbmRSb3cuaW5zZXJ0UGVybWlzc2lvbjsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRVcGRhdGVQZXJtaXNzaW9uKCkgeyByZXR1cm4gQnJhbmRSb3cudXBkYXRlUGVybWlzc2lvbjsgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgZm9ybSA9IG5ldyBCcmFuZEZvcm0odGhpcy5pZFByZWZpeCk7XHJcblxyXG4gICAgfVxyXG59IiwiXHJcbm5hbWVzcGFjZSBJbmRvdGFsZW50Lk1lcmNoYW5kaXNlIHtcclxuXHJcbiAgICBAU2VyZW5pdHkuRGVjb3JhdG9ycy5yZWdpc3RlckNsYXNzKClcclxuICAgIGV4cG9ydCBjbGFzcyBCcmFuZEdyaWQgZXh0ZW5kcyBTZXJlbml0eS5FbnRpdHlHcmlkPEJyYW5kUm93LCBhbnk+IHtcclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0Q29sdW1uc0tleSgpIHsgcmV0dXJuIEJyYW5kQ29sdW1ucy5jb2x1bW5zS2V5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldERpYWxvZ1R5cGUoKSB7IHJldHVybiBCcmFuZERpYWxvZzsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRJZFByb3BlcnR5KCkgeyByZXR1cm4gQnJhbmRSb3cuaWRQcm9wZXJ0eTsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRJbnNlcnRQZXJtaXNzaW9uKCkgeyByZXR1cm4gQnJhbmRSb3cuaW5zZXJ0UGVybWlzc2lvbjsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRMb2NhbFRleHRQcmVmaXgoKSB7IHJldHVybiBCcmFuZFJvdy5sb2NhbFRleHRQcmVmaXg7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0U2VydmljZSgpIHsgcmV0dXJuIEJyYW5kU2VydmljZS5iYXNlVXJsOyB9XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKGNvbnRhaW5lcjogSlF1ZXJ5KSB7XHJcbiAgICAgICAgICAgIHN1cGVyKGNvbnRhaW5lcik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiXHJcbm5hbWVzcGFjZSBJbmRvdGFsZW50Lk1lcmNoYW5kaXNlIHtcclxuXHJcbiAgICBAU2VyZW5pdHkuRGVjb3JhdG9ycy5yZWdpc3RlckNsYXNzKClcclxuICAgIGV4cG9ydCBjbGFzcyBDYXRlZ29yeURpYWxvZyBleHRlbmRzIFNlcmVuaXR5LkVudGl0eURpYWxvZzxDYXRlZ29yeVJvdywgYW55PiB7XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldEZvcm1LZXkoKSB7IHJldHVybiBDYXRlZ29yeUZvcm0uZm9ybUtleTsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRJZFByb3BlcnR5KCkgeyByZXR1cm4gQ2F0ZWdvcnlSb3cuaWRQcm9wZXJ0eTsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRMb2NhbFRleHRQcmVmaXgoKSB7IHJldHVybiBDYXRlZ29yeVJvdy5sb2NhbFRleHRQcmVmaXg7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0TmFtZVByb3BlcnR5KCkgeyByZXR1cm4gQ2F0ZWdvcnlSb3cubmFtZVByb3BlcnR5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldFNlcnZpY2UoKSB7IHJldHVybiBDYXRlZ29yeVNlcnZpY2UuYmFzZVVybDsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXREZWxldGVQZXJtaXNzaW9uKCkgeyByZXR1cm4gQ2F0ZWdvcnlSb3cuZGVsZXRlUGVybWlzc2lvbjsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRJbnNlcnRQZXJtaXNzaW9uKCkgeyByZXR1cm4gQ2F0ZWdvcnlSb3cuaW5zZXJ0UGVybWlzc2lvbjsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRVcGRhdGVQZXJtaXNzaW9uKCkgeyByZXR1cm4gQ2F0ZWdvcnlSb3cudXBkYXRlUGVybWlzc2lvbjsgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgZm9ybSA9IG5ldyBDYXRlZ29yeUZvcm0odGhpcy5pZFByZWZpeCk7XHJcblxyXG4gICAgfVxyXG59IiwiXHJcbm5hbWVzcGFjZSBJbmRvdGFsZW50Lk1lcmNoYW5kaXNlIHtcclxuXHJcbiAgICBAU2VyZW5pdHkuRGVjb3JhdG9ycy5yZWdpc3RlckNsYXNzKClcclxuICAgIGV4cG9ydCBjbGFzcyBDYXRlZ29yeUdyaWQgZXh0ZW5kcyBTZXJlbml0eS5FbnRpdHlHcmlkPENhdGVnb3J5Um93LCBhbnk+IHtcclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0Q29sdW1uc0tleSgpIHsgcmV0dXJuIENhdGVnb3J5Q29sdW1ucy5jb2x1bW5zS2V5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldERpYWxvZ1R5cGUoKSB7IHJldHVybiBDYXRlZ29yeURpYWxvZzsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRJZFByb3BlcnR5KCkgeyByZXR1cm4gQ2F0ZWdvcnlSb3cuaWRQcm9wZXJ0eTsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRJbnNlcnRQZXJtaXNzaW9uKCkgeyByZXR1cm4gQ2F0ZWdvcnlSb3cuaW5zZXJ0UGVybWlzc2lvbjsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRMb2NhbFRleHRQcmVmaXgoKSB7IHJldHVybiBDYXRlZ29yeVJvdy5sb2NhbFRleHRQcmVmaXg7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0U2VydmljZSgpIHsgcmV0dXJuIENhdGVnb3J5U2VydmljZS5iYXNlVXJsOyB9XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKGNvbnRhaW5lcjogSlF1ZXJ5KSB7XHJcbiAgICAgICAgICAgIHN1cGVyKGNvbnRhaW5lcik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiXHJcbm5hbWVzcGFjZSBJbmRvdGFsZW50Lk1lcmNoYW5kaXNlIHtcclxuXHJcbiAgICBAU2VyZW5pdHkuRGVjb3JhdG9ycy5yZWdpc3RlckNsYXNzKClcclxuICAgIGV4cG9ydCBjbGFzcyBDb2xvdXJEaWFsb2cgZXh0ZW5kcyBTZXJlbml0eS5FbnRpdHlEaWFsb2c8Q29sb3VyUm93LCBhbnk+IHtcclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0Rm9ybUtleSgpIHsgcmV0dXJuIENvbG91ckZvcm0uZm9ybUtleTsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRJZFByb3BlcnR5KCkgeyByZXR1cm4gQ29sb3VyUm93LmlkUHJvcGVydHk7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0TG9jYWxUZXh0UHJlZml4KCkgeyByZXR1cm4gQ29sb3VyUm93LmxvY2FsVGV4dFByZWZpeDsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXROYW1lUHJvcGVydHkoKSB7IHJldHVybiBDb2xvdXJSb3cubmFtZVByb3BlcnR5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldFNlcnZpY2UoKSB7IHJldHVybiBDb2xvdXJTZXJ2aWNlLmJhc2VVcmw7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0RGVsZXRlUGVybWlzc2lvbigpIHsgcmV0dXJuIENvbG91clJvdy5kZWxldGVQZXJtaXNzaW9uOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldEluc2VydFBlcm1pc3Npb24oKSB7IHJldHVybiBDb2xvdXJSb3cuaW5zZXJ0UGVybWlzc2lvbjsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRVcGRhdGVQZXJtaXNzaW9uKCkgeyByZXR1cm4gQ29sb3VyUm93LnVwZGF0ZVBlcm1pc3Npb247IH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIGZvcm0gPSBuZXcgQ29sb3VyRm9ybSh0aGlzLmlkUHJlZml4KTtcclxuXHJcbiAgICB9XHJcbn0iLCJcclxubmFtZXNwYWNlIEluZG90YWxlbnQuTWVyY2hhbmRpc2Uge1xyXG5cclxuICAgIEBTZXJlbml0eS5EZWNvcmF0b3JzLnJlZ2lzdGVyQ2xhc3MoKVxyXG4gICAgZXhwb3J0IGNsYXNzIENvbG91ckdyaWQgZXh0ZW5kcyBTZXJlbml0eS5FbnRpdHlHcmlkPENvbG91clJvdywgYW55PiB7XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldENvbHVtbnNLZXkoKSB7IHJldHVybiBDb2xvdXJDb2x1bW5zLmNvbHVtbnNLZXk7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0RGlhbG9nVHlwZSgpIHsgcmV0dXJuIENvbG91ckRpYWxvZzsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRJZFByb3BlcnR5KCkgeyByZXR1cm4gQ29sb3VyUm93LmlkUHJvcGVydHk7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0SW5zZXJ0UGVybWlzc2lvbigpIHsgcmV0dXJuIENvbG91clJvdy5pbnNlcnRQZXJtaXNzaW9uOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldExvY2FsVGV4dFByZWZpeCgpIHsgcmV0dXJuIENvbG91clJvdy5sb2NhbFRleHRQcmVmaXg7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0U2VydmljZSgpIHsgcmV0dXJuIENvbG91clNlcnZpY2UuYmFzZVVybDsgfVxyXG5cclxuICAgICAgICBjb25zdHJ1Y3Rvcihjb250YWluZXI6IEpRdWVyeSkge1xyXG4gICAgICAgICAgICBzdXBlcihjb250YWluZXIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIlxyXG5uYW1lc3BhY2UgSW5kb3RhbGVudC5NZXJjaGFuZGlzZSB7XHJcblxyXG4gICAgQFNlcmVuaXR5LkRlY29yYXRvcnMucmVnaXN0ZXJDbGFzcygpXHJcbiAgICBleHBvcnQgY2xhc3MgRmxhdm91ckRpYWxvZyBleHRlbmRzIFNlcmVuaXR5LkVudGl0eURpYWxvZzxGbGF2b3VyUm93LCBhbnk+IHtcclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0Rm9ybUtleSgpIHsgcmV0dXJuIEZsYXZvdXJGb3JtLmZvcm1LZXk7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0SWRQcm9wZXJ0eSgpIHsgcmV0dXJuIEZsYXZvdXJSb3cuaWRQcm9wZXJ0eTsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRMb2NhbFRleHRQcmVmaXgoKSB7IHJldHVybiBGbGF2b3VyUm93LmxvY2FsVGV4dFByZWZpeDsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXROYW1lUHJvcGVydHkoKSB7IHJldHVybiBGbGF2b3VyUm93Lm5hbWVQcm9wZXJ0eTsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRTZXJ2aWNlKCkgeyByZXR1cm4gRmxhdm91clNlcnZpY2UuYmFzZVVybDsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXREZWxldGVQZXJtaXNzaW9uKCkgeyByZXR1cm4gRmxhdm91clJvdy5kZWxldGVQZXJtaXNzaW9uOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldEluc2VydFBlcm1pc3Npb24oKSB7IHJldHVybiBGbGF2b3VyUm93Lmluc2VydFBlcm1pc3Npb247IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0VXBkYXRlUGVybWlzc2lvbigpIHsgcmV0dXJuIEZsYXZvdXJSb3cudXBkYXRlUGVybWlzc2lvbjsgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgZm9ybSA9IG5ldyBGbGF2b3VyRm9ybSh0aGlzLmlkUHJlZml4KTtcclxuXHJcbiAgICB9XHJcbn0iLCJcclxubmFtZXNwYWNlIEluZG90YWxlbnQuTWVyY2hhbmRpc2Uge1xyXG5cclxuICAgIEBTZXJlbml0eS5EZWNvcmF0b3JzLnJlZ2lzdGVyQ2xhc3MoKVxyXG4gICAgZXhwb3J0IGNsYXNzIEZsYXZvdXJHcmlkIGV4dGVuZHMgU2VyZW5pdHkuRW50aXR5R3JpZDxGbGF2b3VyUm93LCBhbnk+IHtcclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0Q29sdW1uc0tleSgpIHsgcmV0dXJuIEZsYXZvdXJDb2x1bW5zLmNvbHVtbnNLZXk7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0RGlhbG9nVHlwZSgpIHsgcmV0dXJuIEZsYXZvdXJEaWFsb2c7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0SWRQcm9wZXJ0eSgpIHsgcmV0dXJuIEZsYXZvdXJSb3cuaWRQcm9wZXJ0eTsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRJbnNlcnRQZXJtaXNzaW9uKCkgeyByZXR1cm4gRmxhdm91clJvdy5pbnNlcnRQZXJtaXNzaW9uOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldExvY2FsVGV4dFByZWZpeCgpIHsgcmV0dXJuIEZsYXZvdXJSb3cubG9jYWxUZXh0UHJlZml4OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldFNlcnZpY2UoKSB7IHJldHVybiBGbGF2b3VyU2VydmljZS5iYXNlVXJsOyB9XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKGNvbnRhaW5lcjogSlF1ZXJ5KSB7XHJcbiAgICAgICAgICAgIHN1cGVyKGNvbnRhaW5lcik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiXHJcbm5hbWVzcGFjZSBJbmRvdGFsZW50Lk1lcmNoYW5kaXNlIHtcclxuXHJcbiAgICBAU2VyZW5pdHkuRGVjb3JhdG9ycy5yZWdpc3RlckNsYXNzKClcclxuICAgIGV4cG9ydCBjbGFzcyBQcm9kdWN0RGlhbG9nIGV4dGVuZHMgU2VyZW5pdHkuRW50aXR5RGlhbG9nPFByb2R1Y3RSb3csIGFueT4ge1xyXG4gICAgICAgIHByb3RlY3RlZCBnZXRGb3JtS2V5KCkgeyByZXR1cm4gUHJvZHVjdEZvcm0uZm9ybUtleTsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRJZFByb3BlcnR5KCkgeyByZXR1cm4gUHJvZHVjdFJvdy5pZFByb3BlcnR5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldExvY2FsVGV4dFByZWZpeCgpIHsgcmV0dXJuIFByb2R1Y3RSb3cubG9jYWxUZXh0UHJlZml4OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldE5hbWVQcm9wZXJ0eSgpIHsgcmV0dXJuIFByb2R1Y3RSb3cubmFtZVByb3BlcnR5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldFNlcnZpY2UoKSB7IHJldHVybiBQcm9kdWN0U2VydmljZS5iYXNlVXJsOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldERlbGV0ZVBlcm1pc3Npb24oKSB7IHJldHVybiBQcm9kdWN0Um93LmRlbGV0ZVBlcm1pc3Npb247IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0SW5zZXJ0UGVybWlzc2lvbigpIHsgcmV0dXJuIFByb2R1Y3RSb3cuaW5zZXJ0UGVybWlzc2lvbjsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRVcGRhdGVQZXJtaXNzaW9uKCkgeyByZXR1cm4gUHJvZHVjdFJvdy51cGRhdGVQZXJtaXNzaW9uOyB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBmb3JtID0gbmV3IFByb2R1Y3RGb3JtKHRoaXMuaWRQcmVmaXgpO1xyXG5cclxuICAgIH1cclxufSIsIlxyXG5uYW1lc3BhY2UgSW5kb3RhbGVudC5NZXJjaGFuZGlzZSB7XHJcblxyXG4gICAgQFNlcmVuaXR5LkRlY29yYXRvcnMucmVnaXN0ZXJDbGFzcygpXHJcbiAgICBleHBvcnQgY2xhc3MgUHJvZHVjdEdyaWQgZXh0ZW5kcyBTZXJlbml0eS5FbnRpdHlHcmlkPFByb2R1Y3RSb3csIGFueT4ge1xyXG4gICAgICAgIHByb3RlY3RlZCBnZXRDb2x1bW5zS2V5KCkgeyByZXR1cm4gUHJvZHVjdENvbHVtbnMuY29sdW1uc0tleTsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXREaWFsb2dUeXBlKCkgeyByZXR1cm4gUHJvZHVjdERpYWxvZzsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRJZFByb3BlcnR5KCkgeyByZXR1cm4gUHJvZHVjdFJvdy5pZFByb3BlcnR5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldEluc2VydFBlcm1pc3Npb24oKSB7IHJldHVybiBQcm9kdWN0Um93Lmluc2VydFBlcm1pc3Npb247IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0TG9jYWxUZXh0UHJlZml4KCkgeyByZXR1cm4gUHJvZHVjdFJvdy5sb2NhbFRleHRQcmVmaXg7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0U2VydmljZSgpIHsgcmV0dXJuIFByb2R1Y3RTZXJ2aWNlLmJhc2VVcmw7IH1cclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IoY29udGFpbmVyOiBKUXVlcnkpIHtcclxuICAgICAgICAgICAgc3VwZXIoY29udGFpbmVyKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJcclxubmFtZXNwYWNlIEluZG90YWxlbnQuTWVyY2hhbmRpc2Uge1xyXG5cclxuICAgIEBTZXJlbml0eS5EZWNvcmF0b3JzLnJlZ2lzdGVyQ2xhc3MoKVxyXG4gICAgZXhwb3J0IGNsYXNzIFNpemVEaWFsb2cgZXh0ZW5kcyBTZXJlbml0eS5FbnRpdHlEaWFsb2c8U2l6ZVJvdywgYW55PiB7XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldEZvcm1LZXkoKSB7IHJldHVybiBTaXplRm9ybS5mb3JtS2V5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldElkUHJvcGVydHkoKSB7IHJldHVybiBTaXplUm93LmlkUHJvcGVydHk7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0TG9jYWxUZXh0UHJlZml4KCkgeyByZXR1cm4gU2l6ZVJvdy5sb2NhbFRleHRQcmVmaXg7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0TmFtZVByb3BlcnR5KCkgeyByZXR1cm4gU2l6ZVJvdy5uYW1lUHJvcGVydHk7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0U2VydmljZSgpIHsgcmV0dXJuIFNpemVTZXJ2aWNlLmJhc2VVcmw7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0RGVsZXRlUGVybWlzc2lvbigpIHsgcmV0dXJuIFNpemVSb3cuZGVsZXRlUGVybWlzc2lvbjsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRJbnNlcnRQZXJtaXNzaW9uKCkgeyByZXR1cm4gU2l6ZVJvdy5pbnNlcnRQZXJtaXNzaW9uOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldFVwZGF0ZVBlcm1pc3Npb24oKSB7IHJldHVybiBTaXplUm93LnVwZGF0ZVBlcm1pc3Npb247IH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIGZvcm0gPSBuZXcgU2l6ZUZvcm0odGhpcy5pZFByZWZpeCk7XHJcbiAgICAgICAgcHJpdmF0ZSBsb2FkZWRTdGF0ZTogc3RyaW5nO1xyXG5cclxuICAgICAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICAgICAgc3VwZXIoKTtcclxuXHJcbiAgICAgICAgICAgIEluZG90YWxlbnQuRGlhbG9nVXRpbHMucGVuZGluZ0NoYW5nZXNDb25maXJtYXRpb24odGhpcy5lbGVtZW50LCAoKSA9PiB0aGlzLmdldFNhdmVTdGF0ZSgpICE9IHRoaXMubG9hZGVkU3RhdGUpO1xyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIGdldFNhdmVTdGF0ZSgpIHtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAkLnRvSlNPTih0aGlzLmdldFNhdmVFbnRpdHkoKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsb2FkUmVzcG9uc2UoZGF0YSkge1xyXG4gICAgICAgICAgICBzdXBlci5sb2FkUmVzcG9uc2UoZGF0YSk7XHJcbiAgICAgICAgICAgIHRoaXMubG9hZGVkU3RhdGUgPSB0aGlzLmdldFNhdmVTdGF0ZSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcbn0iLCJcclxubmFtZXNwYWNlIEluZG90YWxlbnQuTWVyY2hhbmRpc2Uge1xyXG5cclxuICAgIEBTZXJlbml0eS5EZWNvcmF0b3JzLnJlZ2lzdGVyQ2xhc3MoKVxyXG4gICAgZXhwb3J0IGNsYXNzIFNpemVHcmlkIGV4dGVuZHMgU2VyZW5pdHkuRW50aXR5R3JpZDxTaXplUm93LCBhbnk+IHtcclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0Q29sdW1uc0tleSgpIHsgcmV0dXJuIFNpemVDb2x1bW5zLmNvbHVtbnNLZXk7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0RGlhbG9nVHlwZSgpIHsgcmV0dXJuIFNpemVEaWFsb2c7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0SWRQcm9wZXJ0eSgpIHsgcmV0dXJuIFNpemVSb3cuaWRQcm9wZXJ0eTsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRJbnNlcnRQZXJtaXNzaW9uKCkgeyByZXR1cm4gU2l6ZVJvdy5pbnNlcnRQZXJtaXNzaW9uOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldExvY2FsVGV4dFByZWZpeCgpIHsgcmV0dXJuIFNpemVSb3cubG9jYWxUZXh0UHJlZml4OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldFNlcnZpY2UoKSB7IHJldHVybiBTaXplU2VydmljZS5iYXNlVXJsOyB9XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKGNvbnRhaW5lcjogSlF1ZXJ5KSB7XHJcbiAgICAgICAgICAgIHN1cGVyKGNvbnRhaW5lcik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0Q29sdW1ucygpIHtcclxuICAgICAgICAgICAgbGV0IGNvbHVtbnMgPSBzdXBlci5nZXRDb2x1bW5zKCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoIVEuQXV0aG9yaXphdGlvbi5oYXNQZXJtaXNzaW9uKFwiQWRtaW5pc3RyYXRpb246VGVuYW50XCIpKSB7XHJcbiAgICAgICAgICAgICAgICBjb2x1bW5zID0gY29sdW1ucy5maWx0ZXIoeCA9PiB4LmZpZWxkICE9IFNpemVSb3cuRmllbGRzLlRlbmFudE5hbWUgJiYgeC5maWVsZCAhPSBTaXplUm93LkZpZWxkcy5JZCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiBjb2x1bW5zO1xyXG4gICAgICAgIH1cclxuXHJcblxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0QnV0dG9ucygpIHtcclxuICAgICAgICAgICAgdmFyIGJ1dHRvbnMgPSBzdXBlci5nZXRCdXR0b25zKCk7XHJcblxyXG4gICAgICAgICAgICBidXR0b25zLnB1c2goU2VyZW5pdHkuRXh0ZW5zaW9ucy5FeGNlbEV4cG9ydEhlbHBlci5jcmVhdGVUb29sQnV0dG9uKHtcclxuICAgICAgICAgICAgICAgIGdyaWQ6IHRoaXMsXHJcbiAgICAgICAgICAgICAgICBzZXJ2aWNlOiB0aGlzLmdldFNlcnZpY2UoKSArICcvTGlzdEV4Y2VsJyxcclxuICAgICAgICAgICAgICAgIG9uVmlld1N1Ym1pdDogKCkgPT4gdGhpcy5vblZpZXdTdWJtaXQoKSxcclxuICAgICAgICAgICAgICAgIHNlcGFyYXRvcjogdHJ1ZVxyXG4gICAgICAgICAgICB9KSk7XHJcblxyXG4gICAgICAgICAgICBidXR0b25zLnB1c2goU2VyZW5pdHkuRXh0ZW5zaW9ucy5QZGZFeHBvcnRIZWxwZXIuY3JlYXRlVG9vbEJ1dHRvbih7XHJcbiAgICAgICAgICAgICAgICBncmlkOiB0aGlzLFxyXG4gICAgICAgICAgICAgICAgb25WaWV3U3VibWl0OiAoKSA9PiB0aGlzLm9uVmlld1N1Ym1pdCgpXHJcbiAgICAgICAgICAgIH0pKTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiBidXR0b25zO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIlxyXG5uYW1lc3BhY2UgSW5kb3RhbGVudC5NZXJjaGFuZGlzZSB7XHJcblxyXG4gICAgQFNlcmVuaXR5LkRlY29yYXRvcnMucmVnaXN0ZXJDbGFzcygpXHJcbiAgICBleHBvcnQgY2xhc3MgVW9tRGlhbG9nIGV4dGVuZHMgU2VyZW5pdHkuRW50aXR5RGlhbG9nPFVvbVJvdywgYW55PiB7XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldEZvcm1LZXkoKSB7IHJldHVybiBVb21Gb3JtLmZvcm1LZXk7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0SWRQcm9wZXJ0eSgpIHsgcmV0dXJuIFVvbVJvdy5pZFByb3BlcnR5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldExvY2FsVGV4dFByZWZpeCgpIHsgcmV0dXJuIFVvbVJvdy5sb2NhbFRleHRQcmVmaXg7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0TmFtZVByb3BlcnR5KCkgeyByZXR1cm4gVW9tUm93Lm5hbWVQcm9wZXJ0eTsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRTZXJ2aWNlKCkgeyByZXR1cm4gVW9tU2VydmljZS5iYXNlVXJsOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldERlbGV0ZVBlcm1pc3Npb24oKSB7IHJldHVybiBVb21Sb3cuZGVsZXRlUGVybWlzc2lvbjsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRJbnNlcnRQZXJtaXNzaW9uKCkgeyByZXR1cm4gVW9tUm93Lmluc2VydFBlcm1pc3Npb247IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0VXBkYXRlUGVybWlzc2lvbigpIHsgcmV0dXJuIFVvbVJvdy51cGRhdGVQZXJtaXNzaW9uOyB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBmb3JtID0gbmV3IFVvbUZvcm0odGhpcy5pZFByZWZpeCk7XHJcbiAgICAgICAgcHJpdmF0ZSBsb2FkZWRTdGF0ZTogc3RyaW5nO1xyXG5cclxuICAgICAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICAgICAgc3VwZXIoKTtcclxuXHJcbiAgICAgICAgICAgIEluZG90YWxlbnQuRGlhbG9nVXRpbHMucGVuZGluZ0NoYW5nZXNDb25maXJtYXRpb24odGhpcy5lbGVtZW50LCAoKSA9PiB0aGlzLmdldFNhdmVTdGF0ZSgpICE9IHRoaXMubG9hZGVkU3RhdGUpO1xyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIGdldFNhdmVTdGF0ZSgpIHtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAkLnRvSlNPTih0aGlzLmdldFNhdmVFbnRpdHkoKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsb2FkUmVzcG9uc2UoZGF0YSkge1xyXG4gICAgICAgICAgICBzdXBlci5sb2FkUmVzcG9uc2UoZGF0YSk7XHJcbiAgICAgICAgICAgIHRoaXMubG9hZGVkU3RhdGUgPSB0aGlzLmdldFNhdmVTdGF0ZSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcbn0iLCJcclxubmFtZXNwYWNlIEluZG90YWxlbnQuTWVyY2hhbmRpc2Uge1xyXG5cclxuICAgIEBTZXJlbml0eS5EZWNvcmF0b3JzLnJlZ2lzdGVyQ2xhc3MoKVxyXG4gICAgZXhwb3J0IGNsYXNzIFVvbUdyaWQgZXh0ZW5kcyBTZXJlbml0eS5FbnRpdHlHcmlkPFVvbVJvdywgYW55PiB7XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldENvbHVtbnNLZXkoKSB7IHJldHVybiBVb21Db2x1bW5zLmNvbHVtbnNLZXk7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0RGlhbG9nVHlwZSgpIHsgcmV0dXJuIFVvbURpYWxvZzsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRJZFByb3BlcnR5KCkgeyByZXR1cm4gVW9tUm93LmlkUHJvcGVydHk7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0SW5zZXJ0UGVybWlzc2lvbigpIHsgcmV0dXJuIFVvbVJvdy5pbnNlcnRQZXJtaXNzaW9uOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldExvY2FsVGV4dFByZWZpeCgpIHsgcmV0dXJuIFVvbVJvdy5sb2NhbFRleHRQcmVmaXg7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0U2VydmljZSgpIHsgcmV0dXJuIFVvbVNlcnZpY2UuYmFzZVVybDsgfVxyXG5cclxuICAgICAgICBjb25zdHJ1Y3Rvcihjb250YWluZXI6IEpRdWVyeSkge1xyXG4gICAgICAgICAgICBzdXBlcihjb250YWluZXIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIGdldENvbHVtbnMoKSB7XHJcbiAgICAgICAgICAgIGxldCBjb2x1bW5zID0gc3VwZXIuZ2V0Q29sdW1ucygpO1xyXG5cclxuICAgICAgICAgICAgaWYgKCFRLkF1dGhvcml6YXRpb24uaGFzUGVybWlzc2lvbihcIkFkbWluaXN0cmF0aW9uOlRlbmFudFwiKSkge1xyXG4gICAgICAgICAgICAgICAgY29sdW1ucyA9IGNvbHVtbnMuZmlsdGVyKHggPT4geC5maWVsZCAhPSBVb21Sb3cuRmllbGRzLlRlbmFudE5hbWUgJiYgeC5maWVsZCAhPSBVb21Sb3cuRmllbGRzLklkKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIGNvbHVtbnM7XHJcbiAgICAgICAgfVxyXG5cclxuXHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRCdXR0b25zKCkge1xyXG4gICAgICAgICAgICB2YXIgYnV0dG9ucyA9IHN1cGVyLmdldEJ1dHRvbnMoKTtcclxuXHJcbiAgICAgICAgICAgIGJ1dHRvbnMucHVzaChTZXJlbml0eS5FeHRlbnNpb25zLkV4Y2VsRXhwb3J0SGVscGVyLmNyZWF0ZVRvb2xCdXR0b24oe1xyXG4gICAgICAgICAgICAgICAgZ3JpZDogdGhpcyxcclxuICAgICAgICAgICAgICAgIHNlcnZpY2U6IHRoaXMuZ2V0U2VydmljZSgpICsgJy9MaXN0RXhjZWwnLFxyXG4gICAgICAgICAgICAgICAgb25WaWV3U3VibWl0OiAoKSA9PiB0aGlzLm9uVmlld1N1Ym1pdCgpLFxyXG4gICAgICAgICAgICAgICAgc2VwYXJhdG9yOiB0cnVlXHJcbiAgICAgICAgICAgIH0pKTtcclxuXHJcbiAgICAgICAgICAgIGJ1dHRvbnMucHVzaChTZXJlbml0eS5FeHRlbnNpb25zLlBkZkV4cG9ydEhlbHBlci5jcmVhdGVUb29sQnV0dG9uKHtcclxuICAgICAgICAgICAgICAgIGdyaWQ6IHRoaXMsXHJcbiAgICAgICAgICAgICAgICBvblZpZXdTdWJtaXQ6ICgpID0+IHRoaXMub25WaWV3U3VibWl0KClcclxuICAgICAgICAgICAgfSkpO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIGJ1dHRvbnM7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiXHJcbm5hbWVzcGFjZSBJbmRvdGFsZW50LlB1cmNoYXNlIHtcclxuXHJcbiAgICBAU2VyZW5pdHkuRGVjb3JhdG9ycy5yZWdpc3RlckNsYXNzKClcclxuICAgIGV4cG9ydCBjbGFzcyBCaWxsRGlhbG9nIGV4dGVuZHMgU2VyZW5pdHkuRW50aXR5RGlhbG9nPEJpbGxSb3csIGFueT4ge1xyXG4gICAgICAgIHByb3RlY3RlZCBnZXRGb3JtS2V5KCkgeyByZXR1cm4gQmlsbEZvcm0uZm9ybUtleTsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRJZFByb3BlcnR5KCkgeyByZXR1cm4gQmlsbFJvdy5pZFByb3BlcnR5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldExvY2FsVGV4dFByZWZpeCgpIHsgcmV0dXJuIEJpbGxSb3cubG9jYWxUZXh0UHJlZml4OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldE5hbWVQcm9wZXJ0eSgpIHsgcmV0dXJuIEJpbGxSb3cubmFtZVByb3BlcnR5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldFNlcnZpY2UoKSB7IHJldHVybiBCaWxsU2VydmljZS5iYXNlVXJsOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldERlbGV0ZVBlcm1pc3Npb24oKSB7IHJldHVybiBCaWxsUm93LmRlbGV0ZVBlcm1pc3Npb247IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0SW5zZXJ0UGVybWlzc2lvbigpIHsgcmV0dXJuIEJpbGxSb3cuaW5zZXJ0UGVybWlzc2lvbjsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRVcGRhdGVQZXJtaXNzaW9uKCkgeyByZXR1cm4gQmlsbFJvdy51cGRhdGVQZXJtaXNzaW9uOyB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBmb3JtID0gbmV3IEJpbGxGb3JtKHRoaXMuaWRQcmVmaXgpO1xyXG5cclxuICAgIH1cclxufSIsIlxyXG5uYW1lc3BhY2UgSW5kb3RhbGVudC5QdXJjaGFzZSB7XHJcblxyXG4gICAgQFNlcmVuaXR5LkRlY29yYXRvcnMucmVnaXN0ZXJDbGFzcygpXHJcbiAgICBleHBvcnQgY2xhc3MgQmlsbEdyaWQgZXh0ZW5kcyBTZXJlbml0eS5FbnRpdHlHcmlkPEJpbGxSb3csIGFueT4ge1xyXG4gICAgICAgIHByb3RlY3RlZCBnZXRDb2x1bW5zS2V5KCkgeyByZXR1cm4gQmlsbENvbHVtbnMuY29sdW1uc0tleTsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXREaWFsb2dUeXBlKCkgeyByZXR1cm4gQmlsbERpYWxvZzsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRJZFByb3BlcnR5KCkgeyByZXR1cm4gQmlsbFJvdy5pZFByb3BlcnR5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldEluc2VydFBlcm1pc3Npb24oKSB7IHJldHVybiBCaWxsUm93Lmluc2VydFBlcm1pc3Npb247IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0TG9jYWxUZXh0UHJlZml4KCkgeyByZXR1cm4gQmlsbFJvdy5sb2NhbFRleHRQcmVmaXg7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0U2VydmljZSgpIHsgcmV0dXJuIEJpbGxTZXJ2aWNlLmJhc2VVcmw7IH1cclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IoY29udGFpbmVyOiBKUXVlcnkpIHtcclxuICAgICAgICAgICAgc3VwZXIoY29udGFpbmVyKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJcclxubmFtZXNwYWNlIEluZG90YWxlbnQuUHVyY2hhc2Uge1xyXG5cclxuICAgIEBTZXJlbml0eS5EZWNvcmF0b3JzLnJlZ2lzdGVyQ2xhc3MoKVxyXG4gICAgZXhwb3J0IGNsYXNzIEJpbGxEZXRhaWxEaWFsb2cgZXh0ZW5kcyBTZXJlbml0eS5FbnRpdHlEaWFsb2c8QmlsbERldGFpbFJvdywgYW55PiB7XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldEZvcm1LZXkoKSB7IHJldHVybiBCaWxsRGV0YWlsRm9ybS5mb3JtS2V5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldElkUHJvcGVydHkoKSB7IHJldHVybiBCaWxsRGV0YWlsUm93LmlkUHJvcGVydHk7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0TG9jYWxUZXh0UHJlZml4KCkgeyByZXR1cm4gQmlsbERldGFpbFJvdy5sb2NhbFRleHRQcmVmaXg7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0U2VydmljZSgpIHsgcmV0dXJuIEJpbGxEZXRhaWxTZXJ2aWNlLmJhc2VVcmw7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0RGVsZXRlUGVybWlzc2lvbigpIHsgcmV0dXJuIEJpbGxEZXRhaWxSb3cuZGVsZXRlUGVybWlzc2lvbjsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRJbnNlcnRQZXJtaXNzaW9uKCkgeyByZXR1cm4gQmlsbERldGFpbFJvdy5pbnNlcnRQZXJtaXNzaW9uOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldFVwZGF0ZVBlcm1pc3Npb24oKSB7IHJldHVybiBCaWxsRGV0YWlsUm93LnVwZGF0ZVBlcm1pc3Npb247IH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIGZvcm0gPSBuZXcgQmlsbERldGFpbEZvcm0odGhpcy5pZFByZWZpeCk7XHJcblxyXG4gICAgfVxyXG59IiwiXHJcbm5hbWVzcGFjZSBJbmRvdGFsZW50LlB1cmNoYXNlIHtcclxuXHJcbiAgICBAU2VyZW5pdHkuRGVjb3JhdG9ycy5yZWdpc3RlckNsYXNzKClcclxuICAgIGV4cG9ydCBjbGFzcyBCaWxsRGV0YWlsR3JpZCBleHRlbmRzIFNlcmVuaXR5LkVudGl0eUdyaWQ8QmlsbERldGFpbFJvdywgYW55PiB7XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldENvbHVtbnNLZXkoKSB7IHJldHVybiBCaWxsRGV0YWlsQ29sdW1ucy5jb2x1bW5zS2V5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldERpYWxvZ1R5cGUoKSB7IHJldHVybiBCaWxsRGV0YWlsRGlhbG9nOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldElkUHJvcGVydHkoKSB7IHJldHVybiBCaWxsRGV0YWlsUm93LmlkUHJvcGVydHk7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0SW5zZXJ0UGVybWlzc2lvbigpIHsgcmV0dXJuIEJpbGxEZXRhaWxSb3cuaW5zZXJ0UGVybWlzc2lvbjsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRMb2NhbFRleHRQcmVmaXgoKSB7IHJldHVybiBCaWxsRGV0YWlsUm93LmxvY2FsVGV4dFByZWZpeDsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRTZXJ2aWNlKCkgeyByZXR1cm4gQmlsbERldGFpbFNlcnZpY2UuYmFzZVVybDsgfVxyXG5cclxuICAgICAgICBjb25zdHJ1Y3Rvcihjb250YWluZXI6IEpRdWVyeSkge1xyXG4gICAgICAgICAgICBzdXBlcihjb250YWluZXIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIlxyXG5uYW1lc3BhY2UgSW5kb3RhbGVudC5QdXJjaGFzZSB7XHJcblxyXG4gICAgQFNlcmVuaXR5LkRlY29yYXRvcnMucmVnaXN0ZXJDbGFzcygpXHJcbiAgICBleHBvcnQgY2xhc3MgQmlsbFBheW1lbnREaWFsb2cgZXh0ZW5kcyBTZXJlbml0eS5FbnRpdHlEaWFsb2c8QmlsbFBheW1lbnRSb3csIGFueT4ge1xyXG4gICAgICAgIHByb3RlY3RlZCBnZXRGb3JtS2V5KCkgeyByZXR1cm4gQmlsbFBheW1lbnRGb3JtLmZvcm1LZXk7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0SWRQcm9wZXJ0eSgpIHsgcmV0dXJuIEJpbGxQYXltZW50Um93LmlkUHJvcGVydHk7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0TG9jYWxUZXh0UHJlZml4KCkgeyByZXR1cm4gQmlsbFBheW1lbnRSb3cubG9jYWxUZXh0UHJlZml4OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldE5hbWVQcm9wZXJ0eSgpIHsgcmV0dXJuIEJpbGxQYXltZW50Um93Lm5hbWVQcm9wZXJ0eTsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRTZXJ2aWNlKCkgeyByZXR1cm4gQmlsbFBheW1lbnRTZXJ2aWNlLmJhc2VVcmw7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0RGVsZXRlUGVybWlzc2lvbigpIHsgcmV0dXJuIEJpbGxQYXltZW50Um93LmRlbGV0ZVBlcm1pc3Npb247IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0SW5zZXJ0UGVybWlzc2lvbigpIHsgcmV0dXJuIEJpbGxQYXltZW50Um93Lmluc2VydFBlcm1pc3Npb247IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0VXBkYXRlUGVybWlzc2lvbigpIHsgcmV0dXJuIEJpbGxQYXltZW50Um93LnVwZGF0ZVBlcm1pc3Npb247IH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIGZvcm0gPSBuZXcgQmlsbFBheW1lbnRGb3JtKHRoaXMuaWRQcmVmaXgpO1xyXG5cclxuICAgIH1cclxufSIsIlxyXG5uYW1lc3BhY2UgSW5kb3RhbGVudC5QdXJjaGFzZSB7XHJcblxyXG4gICAgQFNlcmVuaXR5LkRlY29yYXRvcnMucmVnaXN0ZXJDbGFzcygpXHJcbiAgICBleHBvcnQgY2xhc3MgQmlsbFBheW1lbnRHcmlkIGV4dGVuZHMgU2VyZW5pdHkuRW50aXR5R3JpZDxCaWxsUGF5bWVudFJvdywgYW55PiB7XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldENvbHVtbnNLZXkoKSB7IHJldHVybiBCaWxsUGF5bWVudENvbHVtbnMuY29sdW1uc0tleTsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXREaWFsb2dUeXBlKCkgeyByZXR1cm4gQmlsbFBheW1lbnREaWFsb2c7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0SWRQcm9wZXJ0eSgpIHsgcmV0dXJuIEJpbGxQYXltZW50Um93LmlkUHJvcGVydHk7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0SW5zZXJ0UGVybWlzc2lvbigpIHsgcmV0dXJuIEJpbGxQYXltZW50Um93Lmluc2VydFBlcm1pc3Npb247IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0TG9jYWxUZXh0UHJlZml4KCkgeyByZXR1cm4gQmlsbFBheW1lbnRSb3cubG9jYWxUZXh0UHJlZml4OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldFNlcnZpY2UoKSB7IHJldHVybiBCaWxsUGF5bWVudFNlcnZpY2UuYmFzZVVybDsgfVxyXG5cclxuICAgICAgICBjb25zdHJ1Y3Rvcihjb250YWluZXI6IEpRdWVyeSkge1xyXG4gICAgICAgICAgICBzdXBlcihjb250YWluZXIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIlxyXG5uYW1lc3BhY2UgSW5kb3RhbGVudC5QdXJjaGFzZSB7XHJcblxyXG4gICAgQFNlcmVuaXR5LkRlY29yYXRvcnMucmVnaXN0ZXJDbGFzcygpXHJcbiAgICBleHBvcnQgY2xhc3MgUHVyY2hhc2VPcmRlckRpYWxvZyBleHRlbmRzIFNlcmVuaXR5LkVudGl0eURpYWxvZzxQdXJjaGFzZU9yZGVyUm93LCBhbnk+IHtcclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0Rm9ybUtleSgpIHsgcmV0dXJuIFB1cmNoYXNlT3JkZXJGb3JtLmZvcm1LZXk7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0SWRQcm9wZXJ0eSgpIHsgcmV0dXJuIFB1cmNoYXNlT3JkZXJSb3cuaWRQcm9wZXJ0eTsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRMb2NhbFRleHRQcmVmaXgoKSB7IHJldHVybiBQdXJjaGFzZU9yZGVyUm93LmxvY2FsVGV4dFByZWZpeDsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXROYW1lUHJvcGVydHkoKSB7IHJldHVybiBQdXJjaGFzZU9yZGVyUm93Lm5hbWVQcm9wZXJ0eTsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRTZXJ2aWNlKCkgeyByZXR1cm4gUHVyY2hhc2VPcmRlclNlcnZpY2UuYmFzZVVybDsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXREZWxldGVQZXJtaXNzaW9uKCkgeyByZXR1cm4gUHVyY2hhc2VPcmRlclJvdy5kZWxldGVQZXJtaXNzaW9uOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldEluc2VydFBlcm1pc3Npb24oKSB7IHJldHVybiBQdXJjaGFzZU9yZGVyUm93Lmluc2VydFBlcm1pc3Npb247IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0VXBkYXRlUGVybWlzc2lvbigpIHsgcmV0dXJuIFB1cmNoYXNlT3JkZXJSb3cudXBkYXRlUGVybWlzc2lvbjsgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgZm9ybSA9IG5ldyBQdXJjaGFzZU9yZGVyRm9ybSh0aGlzLmlkUHJlZml4KTtcclxuXHJcbiAgICB9XHJcbn0iLCJcclxubmFtZXNwYWNlIEluZG90YWxlbnQuUHVyY2hhc2Uge1xyXG5cclxuICAgIEBTZXJlbml0eS5EZWNvcmF0b3JzLnJlZ2lzdGVyQ2xhc3MoKVxyXG4gICAgZXhwb3J0IGNsYXNzIFB1cmNoYXNlT3JkZXJHcmlkIGV4dGVuZHMgU2VyZW5pdHkuRW50aXR5R3JpZDxQdXJjaGFzZU9yZGVyUm93LCBhbnk+IHtcclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0Q29sdW1uc0tleSgpIHsgcmV0dXJuIFB1cmNoYXNlT3JkZXJDb2x1bW5zLmNvbHVtbnNLZXk7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0RGlhbG9nVHlwZSgpIHsgcmV0dXJuIFB1cmNoYXNlT3JkZXJEaWFsb2c7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0SWRQcm9wZXJ0eSgpIHsgcmV0dXJuIFB1cmNoYXNlT3JkZXJSb3cuaWRQcm9wZXJ0eTsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRJbnNlcnRQZXJtaXNzaW9uKCkgeyByZXR1cm4gUHVyY2hhc2VPcmRlclJvdy5pbnNlcnRQZXJtaXNzaW9uOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldExvY2FsVGV4dFByZWZpeCgpIHsgcmV0dXJuIFB1cmNoYXNlT3JkZXJSb3cubG9jYWxUZXh0UHJlZml4OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldFNlcnZpY2UoKSB7IHJldHVybiBQdXJjaGFzZU9yZGVyU2VydmljZS5iYXNlVXJsOyB9XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKGNvbnRhaW5lcjogSlF1ZXJ5KSB7XHJcbiAgICAgICAgICAgIHN1cGVyKGNvbnRhaW5lcik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiXHJcbm5hbWVzcGFjZSBJbmRvdGFsZW50LlB1cmNoYXNlIHtcclxuXHJcbiAgICBAU2VyZW5pdHkuRGVjb3JhdG9ycy5yZWdpc3RlckNsYXNzKClcclxuICAgIGV4cG9ydCBjbGFzcyBQdXJjaGFzZU9yZGVyRGV0YWlsRGlhbG9nIGV4dGVuZHMgU2VyZW5pdHkuRW50aXR5RGlhbG9nPFB1cmNoYXNlT3JkZXJEZXRhaWxSb3csIGFueT4ge1xyXG4gICAgICAgIHByb3RlY3RlZCBnZXRGb3JtS2V5KCkgeyByZXR1cm4gUHVyY2hhc2VPcmRlckRldGFpbEZvcm0uZm9ybUtleTsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRJZFByb3BlcnR5KCkgeyByZXR1cm4gUHVyY2hhc2VPcmRlckRldGFpbFJvdy5pZFByb3BlcnR5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldExvY2FsVGV4dFByZWZpeCgpIHsgcmV0dXJuIFB1cmNoYXNlT3JkZXJEZXRhaWxSb3cubG9jYWxUZXh0UHJlZml4OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldFNlcnZpY2UoKSB7IHJldHVybiBQdXJjaGFzZU9yZGVyRGV0YWlsU2VydmljZS5iYXNlVXJsOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldERlbGV0ZVBlcm1pc3Npb24oKSB7IHJldHVybiBQdXJjaGFzZU9yZGVyRGV0YWlsUm93LmRlbGV0ZVBlcm1pc3Npb247IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0SW5zZXJ0UGVybWlzc2lvbigpIHsgcmV0dXJuIFB1cmNoYXNlT3JkZXJEZXRhaWxSb3cuaW5zZXJ0UGVybWlzc2lvbjsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRVcGRhdGVQZXJtaXNzaW9uKCkgeyByZXR1cm4gUHVyY2hhc2VPcmRlckRldGFpbFJvdy51cGRhdGVQZXJtaXNzaW9uOyB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBmb3JtID0gbmV3IFB1cmNoYXNlT3JkZXJEZXRhaWxGb3JtKHRoaXMuaWRQcmVmaXgpO1xyXG5cclxuICAgIH1cclxufSIsIlxyXG5uYW1lc3BhY2UgSW5kb3RhbGVudC5QdXJjaGFzZSB7XHJcblxyXG4gICAgQFNlcmVuaXR5LkRlY29yYXRvcnMucmVnaXN0ZXJDbGFzcygpXHJcbiAgICBleHBvcnQgY2xhc3MgUHVyY2hhc2VPcmRlckRldGFpbEdyaWQgZXh0ZW5kcyBTZXJlbml0eS5FbnRpdHlHcmlkPFB1cmNoYXNlT3JkZXJEZXRhaWxSb3csIGFueT4ge1xyXG4gICAgICAgIHByb3RlY3RlZCBnZXRDb2x1bW5zS2V5KCkgeyByZXR1cm4gUHVyY2hhc2VPcmRlckRldGFpbENvbHVtbnMuY29sdW1uc0tleTsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXREaWFsb2dUeXBlKCkgeyByZXR1cm4gUHVyY2hhc2VPcmRlckRldGFpbERpYWxvZzsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRJZFByb3BlcnR5KCkgeyByZXR1cm4gUHVyY2hhc2VPcmRlckRldGFpbFJvdy5pZFByb3BlcnR5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldEluc2VydFBlcm1pc3Npb24oKSB7IHJldHVybiBQdXJjaGFzZU9yZGVyRGV0YWlsUm93Lmluc2VydFBlcm1pc3Npb247IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0TG9jYWxUZXh0UHJlZml4KCkgeyByZXR1cm4gUHVyY2hhc2VPcmRlckRldGFpbFJvdy5sb2NhbFRleHRQcmVmaXg7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0U2VydmljZSgpIHsgcmV0dXJuIFB1cmNoYXNlT3JkZXJEZXRhaWxTZXJ2aWNlLmJhc2VVcmw7IH1cclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IoY29udGFpbmVyOiBKUXVlcnkpIHtcclxuICAgICAgICAgICAgc3VwZXIoY29udGFpbmVyKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJcclxubmFtZXNwYWNlIEluZG90YWxlbnQuUHVyY2hhc2Uge1xyXG5cclxuICAgIEBTZXJlbml0eS5EZWNvcmF0b3JzLnJlZ2lzdGVyQ2xhc3MoKVxyXG4gICAgZXhwb3J0IGNsYXNzIFZlbmRvckRpYWxvZyBleHRlbmRzIFNlcmVuaXR5LkVudGl0eURpYWxvZzxWZW5kb3JSb3csIGFueT4ge1xyXG4gICAgICAgIHByb3RlY3RlZCBnZXRGb3JtS2V5KCkgeyByZXR1cm4gVmVuZG9yRm9ybS5mb3JtS2V5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldElkUHJvcGVydHkoKSB7IHJldHVybiBWZW5kb3JSb3cuaWRQcm9wZXJ0eTsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRMb2NhbFRleHRQcmVmaXgoKSB7IHJldHVybiBWZW5kb3JSb3cubG9jYWxUZXh0UHJlZml4OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldE5hbWVQcm9wZXJ0eSgpIHsgcmV0dXJuIFZlbmRvclJvdy5uYW1lUHJvcGVydHk7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0U2VydmljZSgpIHsgcmV0dXJuIFZlbmRvclNlcnZpY2UuYmFzZVVybDsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXREZWxldGVQZXJtaXNzaW9uKCkgeyByZXR1cm4gVmVuZG9yUm93LmRlbGV0ZVBlcm1pc3Npb247IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0SW5zZXJ0UGVybWlzc2lvbigpIHsgcmV0dXJuIFZlbmRvclJvdy5pbnNlcnRQZXJtaXNzaW9uOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldFVwZGF0ZVBlcm1pc3Npb24oKSB7IHJldHVybiBWZW5kb3JSb3cudXBkYXRlUGVybWlzc2lvbjsgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgZm9ybSA9IG5ldyBWZW5kb3JGb3JtKHRoaXMuaWRQcmVmaXgpO1xyXG5cclxuICAgIH1cclxufSIsIlxyXG5uYW1lc3BhY2UgSW5kb3RhbGVudC5QdXJjaGFzZSB7XHJcblxyXG4gICAgQFNlcmVuaXR5LkRlY29yYXRvcnMucmVnaXN0ZXJDbGFzcygpXHJcbiAgICBleHBvcnQgY2xhc3MgVmVuZG9yR3JpZCBleHRlbmRzIFNlcmVuaXR5LkVudGl0eUdyaWQ8VmVuZG9yUm93LCBhbnk+IHtcclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0Q29sdW1uc0tleSgpIHsgcmV0dXJuIFZlbmRvckNvbHVtbnMuY29sdW1uc0tleTsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXREaWFsb2dUeXBlKCkgeyByZXR1cm4gVmVuZG9yRGlhbG9nOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldElkUHJvcGVydHkoKSB7IHJldHVybiBWZW5kb3JSb3cuaWRQcm9wZXJ0eTsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRJbnNlcnRQZXJtaXNzaW9uKCkgeyByZXR1cm4gVmVuZG9yUm93Lmluc2VydFBlcm1pc3Npb247IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0TG9jYWxUZXh0UHJlZml4KCkgeyByZXR1cm4gVmVuZG9yUm93LmxvY2FsVGV4dFByZWZpeDsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRTZXJ2aWNlKCkgeyByZXR1cm4gVmVuZG9yU2VydmljZS5iYXNlVXJsOyB9XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKGNvbnRhaW5lcjogSlF1ZXJ5KSB7XHJcbiAgICAgICAgICAgIHN1cGVyKGNvbnRhaW5lcik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiXHJcbm5hbWVzcGFjZSBJbmRvdGFsZW50LlB1cmNoYXNlIHtcclxuXHJcbiAgICBAU2VyZW5pdHkuRGVjb3JhdG9ycy5yZWdpc3RlckNsYXNzKClcclxuICAgIGV4cG9ydCBjbGFzcyBWZW5kb3JDb250YWN0RGlhbG9nIGV4dGVuZHMgU2VyZW5pdHkuRW50aXR5RGlhbG9nPFZlbmRvckNvbnRhY3RSb3csIGFueT4ge1xyXG4gICAgICAgIHByb3RlY3RlZCBnZXRGb3JtS2V5KCkgeyByZXR1cm4gVmVuZG9yQ29udGFjdEZvcm0uZm9ybUtleTsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRJZFByb3BlcnR5KCkgeyByZXR1cm4gVmVuZG9yQ29udGFjdFJvdy5pZFByb3BlcnR5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldExvY2FsVGV4dFByZWZpeCgpIHsgcmV0dXJuIFZlbmRvckNvbnRhY3RSb3cubG9jYWxUZXh0UHJlZml4OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldE5hbWVQcm9wZXJ0eSgpIHsgcmV0dXJuIFZlbmRvckNvbnRhY3RSb3cubmFtZVByb3BlcnR5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldFNlcnZpY2UoKSB7IHJldHVybiBWZW5kb3JDb250YWN0U2VydmljZS5iYXNlVXJsOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldERlbGV0ZVBlcm1pc3Npb24oKSB7IHJldHVybiBWZW5kb3JDb250YWN0Um93LmRlbGV0ZVBlcm1pc3Npb247IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0SW5zZXJ0UGVybWlzc2lvbigpIHsgcmV0dXJuIFZlbmRvckNvbnRhY3RSb3cuaW5zZXJ0UGVybWlzc2lvbjsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRVcGRhdGVQZXJtaXNzaW9uKCkgeyByZXR1cm4gVmVuZG9yQ29udGFjdFJvdy51cGRhdGVQZXJtaXNzaW9uOyB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBmb3JtID0gbmV3IFZlbmRvckNvbnRhY3RGb3JtKHRoaXMuaWRQcmVmaXgpO1xyXG5cclxuICAgIH1cclxufSIsIlxyXG5uYW1lc3BhY2UgSW5kb3RhbGVudC5QdXJjaGFzZSB7XHJcblxyXG4gICAgQFNlcmVuaXR5LkRlY29yYXRvcnMucmVnaXN0ZXJDbGFzcygpXHJcbiAgICBleHBvcnQgY2xhc3MgVmVuZG9yQ29udGFjdEdyaWQgZXh0ZW5kcyBTZXJlbml0eS5FbnRpdHlHcmlkPFZlbmRvckNvbnRhY3RSb3csIGFueT4ge1xyXG4gICAgICAgIHByb3RlY3RlZCBnZXRDb2x1bW5zS2V5KCkgeyByZXR1cm4gVmVuZG9yQ29udGFjdENvbHVtbnMuY29sdW1uc0tleTsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXREaWFsb2dUeXBlKCkgeyByZXR1cm4gVmVuZG9yQ29udGFjdERpYWxvZzsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRJZFByb3BlcnR5KCkgeyByZXR1cm4gVmVuZG9yQ29udGFjdFJvdy5pZFByb3BlcnR5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldEluc2VydFBlcm1pc3Npb24oKSB7IHJldHVybiBWZW5kb3JDb250YWN0Um93Lmluc2VydFBlcm1pc3Npb247IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0TG9jYWxUZXh0UHJlZml4KCkgeyByZXR1cm4gVmVuZG9yQ29udGFjdFJvdy5sb2NhbFRleHRQcmVmaXg7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0U2VydmljZSgpIHsgcmV0dXJuIFZlbmRvckNvbnRhY3RTZXJ2aWNlLmJhc2VVcmw7IH1cclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IoY29udGFpbmVyOiBKUXVlcnkpIHtcclxuICAgICAgICAgICAgc3VwZXIoY29udGFpbmVyKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJcclxubmFtZXNwYWNlIEluZG90YWxlbnQuU2FsZXMge1xyXG5cclxuICAgIEBTZXJlbml0eS5EZWNvcmF0b3JzLnJlZ2lzdGVyQ2xhc3MoKVxyXG4gICAgZXhwb3J0IGNsYXNzIEN1c3RvbWVyRGlhbG9nIGV4dGVuZHMgU2VyZW5pdHkuRW50aXR5RGlhbG9nPEN1c3RvbWVyUm93LCBhbnk+IHtcclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0Rm9ybUtleSgpIHsgcmV0dXJuIEN1c3RvbWVyRm9ybS5mb3JtS2V5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldElkUHJvcGVydHkoKSB7IHJldHVybiBDdXN0b21lclJvdy5pZFByb3BlcnR5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldExvY2FsVGV4dFByZWZpeCgpIHsgcmV0dXJuIEN1c3RvbWVyUm93LmxvY2FsVGV4dFByZWZpeDsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXROYW1lUHJvcGVydHkoKSB7IHJldHVybiBDdXN0b21lclJvdy5uYW1lUHJvcGVydHk7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0U2VydmljZSgpIHsgcmV0dXJuIEN1c3RvbWVyU2VydmljZS5iYXNlVXJsOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldERlbGV0ZVBlcm1pc3Npb24oKSB7IHJldHVybiBDdXN0b21lclJvdy5kZWxldGVQZXJtaXNzaW9uOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldEluc2VydFBlcm1pc3Npb24oKSB7IHJldHVybiBDdXN0b21lclJvdy5pbnNlcnRQZXJtaXNzaW9uOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldFVwZGF0ZVBlcm1pc3Npb24oKSB7IHJldHVybiBDdXN0b21lclJvdy51cGRhdGVQZXJtaXNzaW9uOyB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBmb3JtID0gbmV3IEN1c3RvbWVyRm9ybSh0aGlzLmlkUHJlZml4KTtcclxuXHJcbiAgICB9XHJcbn0iLCJcclxubmFtZXNwYWNlIEluZG90YWxlbnQuU2FsZXMge1xyXG5cclxuICAgIEBTZXJlbml0eS5EZWNvcmF0b3JzLnJlZ2lzdGVyQ2xhc3MoKVxyXG4gICAgZXhwb3J0IGNsYXNzIEN1c3RvbWVyR3JpZCBleHRlbmRzIFNlcmVuaXR5LkVudGl0eUdyaWQ8Q3VzdG9tZXJSb3csIGFueT4ge1xyXG4gICAgICAgIHByb3RlY3RlZCBnZXRDb2x1bW5zS2V5KCkgeyByZXR1cm4gQ3VzdG9tZXJDb2x1bW5zLmNvbHVtbnNLZXk7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0RGlhbG9nVHlwZSgpIHsgcmV0dXJuIEN1c3RvbWVyRGlhbG9nOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldElkUHJvcGVydHkoKSB7IHJldHVybiBDdXN0b21lclJvdy5pZFByb3BlcnR5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldEluc2VydFBlcm1pc3Npb24oKSB7IHJldHVybiBDdXN0b21lclJvdy5pbnNlcnRQZXJtaXNzaW9uOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldExvY2FsVGV4dFByZWZpeCgpIHsgcmV0dXJuIEN1c3RvbWVyUm93LmxvY2FsVGV4dFByZWZpeDsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRTZXJ2aWNlKCkgeyByZXR1cm4gQ3VzdG9tZXJTZXJ2aWNlLmJhc2VVcmw7IH1cclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IoY29udGFpbmVyOiBKUXVlcnkpIHtcclxuICAgICAgICAgICAgc3VwZXIoY29udGFpbmVyKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRDb2x1bW5zKCkge1xyXG4gICAgICAgICAgICBsZXQgY29sdW1ucyA9IHN1cGVyLmdldENvbHVtbnMoKTtcclxuXHJcbiAgICAgICAgICAgIGlmICghUS5BdXRob3JpemF0aW9uLmhhc1Blcm1pc3Npb24oXCJBZG1pbmlzdHJhdGlvbjpUZW5hbnRcIikpIHtcclxuICAgICAgICAgICAgICAgIGNvbHVtbnMgPSBjb2x1bW5zLmZpbHRlcih4ID0+IHguZmllbGQgIT0gQ3VzdG9tZXJSb3cuRmllbGRzLlRlbmFudE5hbWUgJiYgeC5maWVsZCAhPSBDdXN0b21lclJvdy5GaWVsZHMuSWQpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gY29sdW1ucztcclxuICAgICAgICB9XHJcblxyXG5cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIGdldEJ1dHRvbnMoKSB7XHJcbiAgICAgICAgICAgIHZhciBidXR0b25zID0gc3VwZXIuZ2V0QnV0dG9ucygpO1xyXG5cclxuICAgICAgICAgICAgYnV0dG9ucy5wdXNoKFNlcmVuaXR5LkV4dGVuc2lvbnMuRXhjZWxFeHBvcnRIZWxwZXIuY3JlYXRlVG9vbEJ1dHRvbih7XHJcbiAgICAgICAgICAgICAgICBncmlkOiB0aGlzLFxyXG4gICAgICAgICAgICAgICAgc2VydmljZTogdGhpcy5nZXRTZXJ2aWNlKCkgKyAnL0xpc3RFeGNlbCcsXHJcbiAgICAgICAgICAgICAgICBvblZpZXdTdWJtaXQ6ICgpID0+IHRoaXMub25WaWV3U3VibWl0KCksXHJcbiAgICAgICAgICAgICAgICBzZXBhcmF0b3I6IHRydWVcclxuICAgICAgICAgICAgfSkpO1xyXG5cclxuICAgICAgICAgICAgYnV0dG9ucy5wdXNoKFNlcmVuaXR5LkV4dGVuc2lvbnMuUGRmRXhwb3J0SGVscGVyLmNyZWF0ZVRvb2xCdXR0b24oe1xyXG4gICAgICAgICAgICAgICAgZ3JpZDogdGhpcyxcclxuICAgICAgICAgICAgICAgIG9uVmlld1N1Ym1pdDogKCkgPT4gdGhpcy5vblZpZXdTdWJtaXQoKVxyXG4gICAgICAgICAgICB9KSk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gYnV0dG9ucztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJcclxubmFtZXNwYWNlIEluZG90YWxlbnQuU2FsZXMge1xyXG5cclxuICAgIEBTZXJlbml0eS5EZWNvcmF0b3JzLnJlZ2lzdGVyQ2xhc3MoKVxyXG4gICAgZXhwb3J0IGNsYXNzIEN1c3RvbWVyQ29udGFjdERpYWxvZyBleHRlbmRzIFNlcmVuaXR5LkVudGl0eURpYWxvZzxDdXN0b21lckNvbnRhY3RSb3csIGFueT4ge1xyXG4gICAgICAgIHByb3RlY3RlZCBnZXRGb3JtS2V5KCkgeyByZXR1cm4gQ3VzdG9tZXJDb250YWN0Rm9ybS5mb3JtS2V5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldElkUHJvcGVydHkoKSB7IHJldHVybiBDdXN0b21lckNvbnRhY3RSb3cuaWRQcm9wZXJ0eTsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRMb2NhbFRleHRQcmVmaXgoKSB7IHJldHVybiBDdXN0b21lckNvbnRhY3RSb3cubG9jYWxUZXh0UHJlZml4OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldE5hbWVQcm9wZXJ0eSgpIHsgcmV0dXJuIEN1c3RvbWVyQ29udGFjdFJvdy5uYW1lUHJvcGVydHk7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0U2VydmljZSgpIHsgcmV0dXJuIEN1c3RvbWVyQ29udGFjdFNlcnZpY2UuYmFzZVVybDsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXREZWxldGVQZXJtaXNzaW9uKCkgeyByZXR1cm4gQ3VzdG9tZXJDb250YWN0Um93LmRlbGV0ZVBlcm1pc3Npb247IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0SW5zZXJ0UGVybWlzc2lvbigpIHsgcmV0dXJuIEN1c3RvbWVyQ29udGFjdFJvdy5pbnNlcnRQZXJtaXNzaW9uOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldFVwZGF0ZVBlcm1pc3Npb24oKSB7IHJldHVybiBDdXN0b21lckNvbnRhY3RSb3cudXBkYXRlUGVybWlzc2lvbjsgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgZm9ybSA9IG5ldyBDdXN0b21lckNvbnRhY3RGb3JtKHRoaXMuaWRQcmVmaXgpO1xyXG5cclxuICAgIH1cclxufSIsIlxyXG5uYW1lc3BhY2UgSW5kb3RhbGVudC5TYWxlcyB7XHJcblxyXG4gICAgQFNlcmVuaXR5LkRlY29yYXRvcnMucmVnaXN0ZXJDbGFzcygpXHJcbiAgICBleHBvcnQgY2xhc3MgQ3VzdG9tZXJDb250YWN0RWRpdG9yIGV4dGVuZHMgU2VyZW5pdHkuRXh0ZW5zaW9ucy5HcmlkRWRpdG9yQmFzZTxDdXN0b21lckNvbnRhY3RSb3c+IHtcclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0Q29sdW1uc0tleSgpIHsgcmV0dXJuIEN1c3RvbWVyQ29udGFjdENvbHVtbnMuY29sdW1uc0tleTsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXREaWFsb2dUeXBlKCkgeyByZXR1cm4gQ3VzdG9tZXJDb250YWN0RGlhbG9nOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldExvY2FsVGV4dFByZWZpeCgpIHsgcmV0dXJuIEN1c3RvbWVyQ29udGFjdFJvdy5sb2NhbFRleHRQcmVmaXg7IH1cclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IoY29udGFpbmVyOiBKUXVlcnkpIHtcclxuICAgICAgICAgICAgc3VwZXIoY29udGFpbmVyKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRDb2x1bW5zKCkge1xyXG4gICAgICAgICAgICBsZXQgY29sdW1ucyA9IHN1cGVyLmdldENvbHVtbnMoKTtcclxuXHJcbiAgICAgICAgICAgIGlmICghUS5BdXRob3JpemF0aW9uLmhhc1Blcm1pc3Npb24oXCJBZG1pbmlzdHJhdGlvbjpUZW5hbnRcIikpIHtcclxuICAgICAgICAgICAgICAgIGNvbHVtbnMgPSBjb2x1bW5zLmZpbHRlcih4ID0+IHguZmllbGQgIT0gQ3VzdG9tZXJDb250YWN0Um93LkZpZWxkcy5UZW5hbnROYW1lICYmIHguZmllbGQgIT0gQ3VzdG9tZXJDb250YWN0Um93LkZpZWxkcy5JZCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiBjb2x1bW5zO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcbn0iLCJcclxubmFtZXNwYWNlIEluZG90YWxlbnQuU2FsZXMge1xyXG5cclxuICAgIEBTZXJlbml0eS5EZWNvcmF0b3JzLnJlZ2lzdGVyQ2xhc3MoKVxyXG4gICAgZXhwb3J0IGNsYXNzIEN1c3RvbWVyQ29udGFjdEdyaWQgZXh0ZW5kcyBTZXJlbml0eS5FbnRpdHlHcmlkPEN1c3RvbWVyQ29udGFjdFJvdywgYW55PiB7XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldENvbHVtbnNLZXkoKSB7IHJldHVybiBDdXN0b21lckNvbnRhY3RDb2x1bW5zLmNvbHVtbnNLZXk7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0RGlhbG9nVHlwZSgpIHsgcmV0dXJuIEN1c3RvbWVyQ29udGFjdERpYWxvZzsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRJZFByb3BlcnR5KCkgeyByZXR1cm4gQ3VzdG9tZXJDb250YWN0Um93LmlkUHJvcGVydHk7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0SW5zZXJ0UGVybWlzc2lvbigpIHsgcmV0dXJuIEN1c3RvbWVyQ29udGFjdFJvdy5pbnNlcnRQZXJtaXNzaW9uOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldExvY2FsVGV4dFByZWZpeCgpIHsgcmV0dXJuIEN1c3RvbWVyQ29udGFjdFJvdy5sb2NhbFRleHRQcmVmaXg7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0U2VydmljZSgpIHsgcmV0dXJuIEN1c3RvbWVyQ29udGFjdFNlcnZpY2UuYmFzZVVybDsgfVxyXG5cclxuICAgICAgICBjb25zdHJ1Y3Rvcihjb250YWluZXI6IEpRdWVyeSkge1xyXG4gICAgICAgICAgICBzdXBlcihjb250YWluZXIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIlxyXG5uYW1lc3BhY2UgSW5kb3RhbGVudC5TYWxlcyB7XHJcblxyXG4gICAgQFNlcmVuaXR5LkRlY29yYXRvcnMucmVnaXN0ZXJDbGFzcygpXHJcbiAgICBleHBvcnQgY2xhc3MgSW52b2ljZURpYWxvZyBleHRlbmRzIFNlcmVuaXR5LkVudGl0eURpYWxvZzxJbnZvaWNlUm93LCBhbnk+IHtcclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0Rm9ybUtleSgpIHsgcmV0dXJuIEludm9pY2VGb3JtLmZvcm1LZXk7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0SWRQcm9wZXJ0eSgpIHsgcmV0dXJuIEludm9pY2VSb3cuaWRQcm9wZXJ0eTsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRMb2NhbFRleHRQcmVmaXgoKSB7IHJldHVybiBJbnZvaWNlUm93LmxvY2FsVGV4dFByZWZpeDsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXROYW1lUHJvcGVydHkoKSB7IHJldHVybiBJbnZvaWNlUm93Lm5hbWVQcm9wZXJ0eTsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRTZXJ2aWNlKCkgeyByZXR1cm4gSW52b2ljZVNlcnZpY2UuYmFzZVVybDsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXREZWxldGVQZXJtaXNzaW9uKCkgeyByZXR1cm4gSW52b2ljZVJvdy5kZWxldGVQZXJtaXNzaW9uOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldEluc2VydFBlcm1pc3Npb24oKSB7IHJldHVybiBJbnZvaWNlUm93Lmluc2VydFBlcm1pc3Npb247IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0VXBkYXRlUGVybWlzc2lvbigpIHsgcmV0dXJuIEludm9pY2VSb3cudXBkYXRlUGVybWlzc2lvbjsgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgZm9ybSA9IG5ldyBJbnZvaWNlRm9ybSh0aGlzLmlkUHJlZml4KTtcclxuXHJcbiAgICB9XHJcbn0iLCJcclxubmFtZXNwYWNlIEluZG90YWxlbnQuU2FsZXMge1xyXG5cclxuICAgIEBTZXJlbml0eS5EZWNvcmF0b3JzLnJlZ2lzdGVyQ2xhc3MoKVxyXG4gICAgZXhwb3J0IGNsYXNzIEludm9pY2VHcmlkIGV4dGVuZHMgU2VyZW5pdHkuRW50aXR5R3JpZDxJbnZvaWNlUm93LCBhbnk+IHtcclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0Q29sdW1uc0tleSgpIHsgcmV0dXJuIEludm9pY2VDb2x1bW5zLmNvbHVtbnNLZXk7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0RGlhbG9nVHlwZSgpIHsgcmV0dXJuIEludm9pY2VEaWFsb2c7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0SWRQcm9wZXJ0eSgpIHsgcmV0dXJuIEludm9pY2VSb3cuaWRQcm9wZXJ0eTsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRJbnNlcnRQZXJtaXNzaW9uKCkgeyByZXR1cm4gSW52b2ljZVJvdy5pbnNlcnRQZXJtaXNzaW9uOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldExvY2FsVGV4dFByZWZpeCgpIHsgcmV0dXJuIEludm9pY2VSb3cubG9jYWxUZXh0UHJlZml4OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldFNlcnZpY2UoKSB7IHJldHVybiBJbnZvaWNlU2VydmljZS5iYXNlVXJsOyB9XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKGNvbnRhaW5lcjogSlF1ZXJ5KSB7XHJcbiAgICAgICAgICAgIHN1cGVyKGNvbnRhaW5lcik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiXHJcbm5hbWVzcGFjZSBJbmRvdGFsZW50LlNhbGVzIHtcclxuXHJcbiAgICBAU2VyZW5pdHkuRGVjb3JhdG9ycy5yZWdpc3RlckNsYXNzKClcclxuICAgIGV4cG9ydCBjbGFzcyBJbnZvaWNlRGV0YWlsRGlhbG9nIGV4dGVuZHMgU2VyZW5pdHkuRW50aXR5RGlhbG9nPEludm9pY2VEZXRhaWxSb3csIGFueT4ge1xyXG4gICAgICAgIHByb3RlY3RlZCBnZXRGb3JtS2V5KCkgeyByZXR1cm4gSW52b2ljZURldGFpbEZvcm0uZm9ybUtleTsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRJZFByb3BlcnR5KCkgeyByZXR1cm4gSW52b2ljZURldGFpbFJvdy5pZFByb3BlcnR5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldExvY2FsVGV4dFByZWZpeCgpIHsgcmV0dXJuIEludm9pY2VEZXRhaWxSb3cubG9jYWxUZXh0UHJlZml4OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldFNlcnZpY2UoKSB7IHJldHVybiBJbnZvaWNlRGV0YWlsU2VydmljZS5iYXNlVXJsOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldERlbGV0ZVBlcm1pc3Npb24oKSB7IHJldHVybiBJbnZvaWNlRGV0YWlsUm93LmRlbGV0ZVBlcm1pc3Npb247IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0SW5zZXJ0UGVybWlzc2lvbigpIHsgcmV0dXJuIEludm9pY2VEZXRhaWxSb3cuaW5zZXJ0UGVybWlzc2lvbjsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRVcGRhdGVQZXJtaXNzaW9uKCkgeyByZXR1cm4gSW52b2ljZURldGFpbFJvdy51cGRhdGVQZXJtaXNzaW9uOyB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBmb3JtID0gbmV3IEludm9pY2VEZXRhaWxGb3JtKHRoaXMuaWRQcmVmaXgpO1xyXG5cclxuICAgIH1cclxufSIsIlxyXG5uYW1lc3BhY2UgSW5kb3RhbGVudC5TYWxlcyB7XHJcblxyXG4gICAgQFNlcmVuaXR5LkRlY29yYXRvcnMucmVnaXN0ZXJDbGFzcygpXHJcbiAgICBleHBvcnQgY2xhc3MgSW52b2ljZURldGFpbEdyaWQgZXh0ZW5kcyBTZXJlbml0eS5FbnRpdHlHcmlkPEludm9pY2VEZXRhaWxSb3csIGFueT4ge1xyXG4gICAgICAgIHByb3RlY3RlZCBnZXRDb2x1bW5zS2V5KCkgeyByZXR1cm4gSW52b2ljZURldGFpbENvbHVtbnMuY29sdW1uc0tleTsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXREaWFsb2dUeXBlKCkgeyByZXR1cm4gSW52b2ljZURldGFpbERpYWxvZzsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRJZFByb3BlcnR5KCkgeyByZXR1cm4gSW52b2ljZURldGFpbFJvdy5pZFByb3BlcnR5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldEluc2VydFBlcm1pc3Npb24oKSB7IHJldHVybiBJbnZvaWNlRGV0YWlsUm93Lmluc2VydFBlcm1pc3Npb247IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0TG9jYWxUZXh0UHJlZml4KCkgeyByZXR1cm4gSW52b2ljZURldGFpbFJvdy5sb2NhbFRleHRQcmVmaXg7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0U2VydmljZSgpIHsgcmV0dXJuIEludm9pY2VEZXRhaWxTZXJ2aWNlLmJhc2VVcmw7IH1cclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IoY29udGFpbmVyOiBKUXVlcnkpIHtcclxuICAgICAgICAgICAgc3VwZXIoY29udGFpbmVyKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJcclxubmFtZXNwYWNlIEluZG90YWxlbnQuU2FsZXMge1xyXG5cclxuICAgIEBTZXJlbml0eS5EZWNvcmF0b3JzLnJlZ2lzdGVyQ2xhc3MoKVxyXG4gICAgZXhwb3J0IGNsYXNzIEludm9pY2VQYXltZW50RGlhbG9nIGV4dGVuZHMgU2VyZW5pdHkuRW50aXR5RGlhbG9nPEludm9pY2VQYXltZW50Um93LCBhbnk+IHtcclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0Rm9ybUtleSgpIHsgcmV0dXJuIEludm9pY2VQYXltZW50Rm9ybS5mb3JtS2V5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldElkUHJvcGVydHkoKSB7IHJldHVybiBJbnZvaWNlUGF5bWVudFJvdy5pZFByb3BlcnR5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldExvY2FsVGV4dFByZWZpeCgpIHsgcmV0dXJuIEludm9pY2VQYXltZW50Um93LmxvY2FsVGV4dFByZWZpeDsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXROYW1lUHJvcGVydHkoKSB7IHJldHVybiBJbnZvaWNlUGF5bWVudFJvdy5uYW1lUHJvcGVydHk7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0U2VydmljZSgpIHsgcmV0dXJuIEludm9pY2VQYXltZW50U2VydmljZS5iYXNlVXJsOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldERlbGV0ZVBlcm1pc3Npb24oKSB7IHJldHVybiBJbnZvaWNlUGF5bWVudFJvdy5kZWxldGVQZXJtaXNzaW9uOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldEluc2VydFBlcm1pc3Npb24oKSB7IHJldHVybiBJbnZvaWNlUGF5bWVudFJvdy5pbnNlcnRQZXJtaXNzaW9uOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldFVwZGF0ZVBlcm1pc3Npb24oKSB7IHJldHVybiBJbnZvaWNlUGF5bWVudFJvdy51cGRhdGVQZXJtaXNzaW9uOyB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBmb3JtID0gbmV3IEludm9pY2VQYXltZW50Rm9ybSh0aGlzLmlkUHJlZml4KTtcclxuXHJcbiAgICB9XHJcbn0iLCJcclxubmFtZXNwYWNlIEluZG90YWxlbnQuU2FsZXMge1xyXG5cclxuICAgIEBTZXJlbml0eS5EZWNvcmF0b3JzLnJlZ2lzdGVyQ2xhc3MoKVxyXG4gICAgZXhwb3J0IGNsYXNzIEludm9pY2VQYXltZW50R3JpZCBleHRlbmRzIFNlcmVuaXR5LkVudGl0eUdyaWQ8SW52b2ljZVBheW1lbnRSb3csIGFueT4ge1xyXG4gICAgICAgIHByb3RlY3RlZCBnZXRDb2x1bW5zS2V5KCkgeyByZXR1cm4gSW52b2ljZVBheW1lbnRDb2x1bW5zLmNvbHVtbnNLZXk7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0RGlhbG9nVHlwZSgpIHsgcmV0dXJuIEludm9pY2VQYXltZW50RGlhbG9nOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldElkUHJvcGVydHkoKSB7IHJldHVybiBJbnZvaWNlUGF5bWVudFJvdy5pZFByb3BlcnR5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldEluc2VydFBlcm1pc3Npb24oKSB7IHJldHVybiBJbnZvaWNlUGF5bWVudFJvdy5pbnNlcnRQZXJtaXNzaW9uOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldExvY2FsVGV4dFByZWZpeCgpIHsgcmV0dXJuIEludm9pY2VQYXltZW50Um93LmxvY2FsVGV4dFByZWZpeDsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRTZXJ2aWNlKCkgeyByZXR1cm4gSW52b2ljZVBheW1lbnRTZXJ2aWNlLmJhc2VVcmw7IH1cclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IoY29udGFpbmVyOiBKUXVlcnkpIHtcclxuICAgICAgICAgICAgc3VwZXIoY29udGFpbmVyKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJcclxubmFtZXNwYWNlIEluZG90YWxlbnQuU2FsZXMge1xyXG5cclxuICAgIEBTZXJlbml0eS5EZWNvcmF0b3JzLnJlZ2lzdGVyQ2xhc3MoKVxyXG4gICAgZXhwb3J0IGNsYXNzIFNhbGVzQ2hhbm5lbERpYWxvZyBleHRlbmRzIFNlcmVuaXR5LkVudGl0eURpYWxvZzxTYWxlc0NoYW5uZWxSb3csIGFueT4ge1xyXG4gICAgICAgIHByb3RlY3RlZCBnZXRGb3JtS2V5KCkgeyByZXR1cm4gU2FsZXNDaGFubmVsRm9ybS5mb3JtS2V5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldElkUHJvcGVydHkoKSB7IHJldHVybiBTYWxlc0NoYW5uZWxSb3cuaWRQcm9wZXJ0eTsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRMb2NhbFRleHRQcmVmaXgoKSB7IHJldHVybiBTYWxlc0NoYW5uZWxSb3cubG9jYWxUZXh0UHJlZml4OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldE5hbWVQcm9wZXJ0eSgpIHsgcmV0dXJuIFNhbGVzQ2hhbm5lbFJvdy5uYW1lUHJvcGVydHk7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0U2VydmljZSgpIHsgcmV0dXJuIFNhbGVzQ2hhbm5lbFNlcnZpY2UuYmFzZVVybDsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXREZWxldGVQZXJtaXNzaW9uKCkgeyByZXR1cm4gU2FsZXNDaGFubmVsUm93LmRlbGV0ZVBlcm1pc3Npb247IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0SW5zZXJ0UGVybWlzc2lvbigpIHsgcmV0dXJuIFNhbGVzQ2hhbm5lbFJvdy5pbnNlcnRQZXJtaXNzaW9uOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldFVwZGF0ZVBlcm1pc3Npb24oKSB7IHJldHVybiBTYWxlc0NoYW5uZWxSb3cudXBkYXRlUGVybWlzc2lvbjsgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgZm9ybSA9IG5ldyBTYWxlc0NoYW5uZWxGb3JtKHRoaXMuaWRQcmVmaXgpO1xyXG5cclxuICAgIH1cclxufSIsIlxyXG5uYW1lc3BhY2UgSW5kb3RhbGVudC5TYWxlcyB7XHJcblxyXG4gICAgQFNlcmVuaXR5LkRlY29yYXRvcnMucmVnaXN0ZXJDbGFzcygpXHJcbiAgICBleHBvcnQgY2xhc3MgU2FsZXNDaGFubmVsR3JpZCBleHRlbmRzIFNlcmVuaXR5LkVudGl0eUdyaWQ8U2FsZXNDaGFubmVsUm93LCBhbnk+IHtcclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0Q29sdW1uc0tleSgpIHsgcmV0dXJuIFNhbGVzQ2hhbm5lbENvbHVtbnMuY29sdW1uc0tleTsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXREaWFsb2dUeXBlKCkgeyByZXR1cm4gU2FsZXNDaGFubmVsRGlhbG9nOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldElkUHJvcGVydHkoKSB7IHJldHVybiBTYWxlc0NoYW5uZWxSb3cuaWRQcm9wZXJ0eTsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRJbnNlcnRQZXJtaXNzaW9uKCkgeyByZXR1cm4gU2FsZXNDaGFubmVsUm93Lmluc2VydFBlcm1pc3Npb247IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0TG9jYWxUZXh0UHJlZml4KCkgeyByZXR1cm4gU2FsZXNDaGFubmVsUm93LmxvY2FsVGV4dFByZWZpeDsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRTZXJ2aWNlKCkgeyByZXR1cm4gU2FsZXNDaGFubmVsU2VydmljZS5iYXNlVXJsOyB9XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKGNvbnRhaW5lcjogSlF1ZXJ5KSB7XHJcbiAgICAgICAgICAgIHN1cGVyKGNvbnRhaW5lcik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiXHJcbm5hbWVzcGFjZSBJbmRvdGFsZW50LlNhbGVzIHtcclxuXHJcbiAgICBAU2VyZW5pdHkuRGVjb3JhdG9ycy5yZWdpc3RlckNsYXNzKClcclxuICAgIGV4cG9ydCBjbGFzcyBTYWxlc09yZGVyRGlhbG9nIGV4dGVuZHMgU2VyZW5pdHkuRW50aXR5RGlhbG9nPFNhbGVzT3JkZXJSb3csIGFueT4ge1xyXG4gICAgICAgIHByb3RlY3RlZCBnZXRGb3JtS2V5KCkgeyByZXR1cm4gU2FsZXNPcmRlckZvcm0uZm9ybUtleTsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRJZFByb3BlcnR5KCkgeyByZXR1cm4gU2FsZXNPcmRlclJvdy5pZFByb3BlcnR5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldExvY2FsVGV4dFByZWZpeCgpIHsgcmV0dXJuIFNhbGVzT3JkZXJSb3cubG9jYWxUZXh0UHJlZml4OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldE5hbWVQcm9wZXJ0eSgpIHsgcmV0dXJuIFNhbGVzT3JkZXJSb3cubmFtZVByb3BlcnR5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldFNlcnZpY2UoKSB7IHJldHVybiBTYWxlc09yZGVyU2VydmljZS5iYXNlVXJsOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldERlbGV0ZVBlcm1pc3Npb24oKSB7IHJldHVybiBTYWxlc09yZGVyUm93LmRlbGV0ZVBlcm1pc3Npb247IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0SW5zZXJ0UGVybWlzc2lvbigpIHsgcmV0dXJuIFNhbGVzT3JkZXJSb3cuaW5zZXJ0UGVybWlzc2lvbjsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRVcGRhdGVQZXJtaXNzaW9uKCkgeyByZXR1cm4gU2FsZXNPcmRlclJvdy51cGRhdGVQZXJtaXNzaW9uOyB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBmb3JtID0gbmV3IFNhbGVzT3JkZXJGb3JtKHRoaXMuaWRQcmVmaXgpO1xyXG5cclxuICAgIH1cclxufSIsIlxyXG5uYW1lc3BhY2UgSW5kb3RhbGVudC5TYWxlcyB7XHJcblxyXG4gICAgQFNlcmVuaXR5LkRlY29yYXRvcnMucmVnaXN0ZXJDbGFzcygpXHJcbiAgICBleHBvcnQgY2xhc3MgU2FsZXNPcmRlckdyaWQgZXh0ZW5kcyBTZXJlbml0eS5FbnRpdHlHcmlkPFNhbGVzT3JkZXJSb3csIGFueT4ge1xyXG4gICAgICAgIHByb3RlY3RlZCBnZXRDb2x1bW5zS2V5KCkgeyByZXR1cm4gU2FsZXNPcmRlckNvbHVtbnMuY29sdW1uc0tleTsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXREaWFsb2dUeXBlKCkgeyByZXR1cm4gU2FsZXNPcmRlckRpYWxvZzsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRJZFByb3BlcnR5KCkgeyByZXR1cm4gU2FsZXNPcmRlclJvdy5pZFByb3BlcnR5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldEluc2VydFBlcm1pc3Npb24oKSB7IHJldHVybiBTYWxlc09yZGVyUm93Lmluc2VydFBlcm1pc3Npb247IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0TG9jYWxUZXh0UHJlZml4KCkgeyByZXR1cm4gU2FsZXNPcmRlclJvdy5sb2NhbFRleHRQcmVmaXg7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0U2VydmljZSgpIHsgcmV0dXJuIFNhbGVzT3JkZXJTZXJ2aWNlLmJhc2VVcmw7IH1cclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IoY29udGFpbmVyOiBKUXVlcnkpIHtcclxuICAgICAgICAgICAgc3VwZXIoY29udGFpbmVyKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJcclxubmFtZXNwYWNlIEluZG90YWxlbnQuU2FsZXMge1xyXG5cclxuICAgIEBTZXJlbml0eS5EZWNvcmF0b3JzLnJlZ2lzdGVyQ2xhc3MoKVxyXG4gICAgZXhwb3J0IGNsYXNzIFNhbGVzT3JkZXJEZXRhaWxEaWFsb2cgZXh0ZW5kcyBTZXJlbml0eS5FbnRpdHlEaWFsb2c8U2FsZXNPcmRlckRldGFpbFJvdywgYW55PiB7XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldEZvcm1LZXkoKSB7IHJldHVybiBTYWxlc09yZGVyRGV0YWlsRm9ybS5mb3JtS2V5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldElkUHJvcGVydHkoKSB7IHJldHVybiBTYWxlc09yZGVyRGV0YWlsUm93LmlkUHJvcGVydHk7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0TG9jYWxUZXh0UHJlZml4KCkgeyByZXR1cm4gU2FsZXNPcmRlckRldGFpbFJvdy5sb2NhbFRleHRQcmVmaXg7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0U2VydmljZSgpIHsgcmV0dXJuIFNhbGVzT3JkZXJEZXRhaWxTZXJ2aWNlLmJhc2VVcmw7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0RGVsZXRlUGVybWlzc2lvbigpIHsgcmV0dXJuIFNhbGVzT3JkZXJEZXRhaWxSb3cuZGVsZXRlUGVybWlzc2lvbjsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRJbnNlcnRQZXJtaXNzaW9uKCkgeyByZXR1cm4gU2FsZXNPcmRlckRldGFpbFJvdy5pbnNlcnRQZXJtaXNzaW9uOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldFVwZGF0ZVBlcm1pc3Npb24oKSB7IHJldHVybiBTYWxlc09yZGVyRGV0YWlsUm93LnVwZGF0ZVBlcm1pc3Npb247IH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIGZvcm0gPSBuZXcgU2FsZXNPcmRlckRldGFpbEZvcm0odGhpcy5pZFByZWZpeCk7XHJcblxyXG4gICAgfVxyXG59IiwiXHJcbm5hbWVzcGFjZSBJbmRvdGFsZW50LlNhbGVzIHtcclxuXHJcbiAgICBAU2VyZW5pdHkuRGVjb3JhdG9ycy5yZWdpc3RlckNsYXNzKClcclxuICAgIGV4cG9ydCBjbGFzcyBTYWxlc09yZGVyRGV0YWlsR3JpZCBleHRlbmRzIFNlcmVuaXR5LkVudGl0eUdyaWQ8U2FsZXNPcmRlckRldGFpbFJvdywgYW55PiB7XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldENvbHVtbnNLZXkoKSB7IHJldHVybiBTYWxlc09yZGVyRGV0YWlsQ29sdW1ucy5jb2x1bW5zS2V5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldERpYWxvZ1R5cGUoKSB7IHJldHVybiBTYWxlc09yZGVyRGV0YWlsRGlhbG9nOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldElkUHJvcGVydHkoKSB7IHJldHVybiBTYWxlc09yZGVyRGV0YWlsUm93LmlkUHJvcGVydHk7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0SW5zZXJ0UGVybWlzc2lvbigpIHsgcmV0dXJuIFNhbGVzT3JkZXJEZXRhaWxSb3cuaW5zZXJ0UGVybWlzc2lvbjsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRMb2NhbFRleHRQcmVmaXgoKSB7IHJldHVybiBTYWxlc09yZGVyRGV0YWlsUm93LmxvY2FsVGV4dFByZWZpeDsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRTZXJ2aWNlKCkgeyByZXR1cm4gU2FsZXNPcmRlckRldGFpbFNlcnZpY2UuYmFzZVVybDsgfVxyXG5cclxuICAgICAgICBjb25zdHJ1Y3Rvcihjb250YWluZXI6IEpRdWVyeSkge1xyXG4gICAgICAgICAgICBzdXBlcihjb250YWluZXIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIlxyXG5uYW1lc3BhY2UgSW5kb3RhbGVudC5TZXR0aW5ncyB7XHJcblxyXG4gICAgQFNlcmVuaXR5LkRlY29yYXRvcnMucmVnaXN0ZXJDbGFzcygpXHJcbiAgICBleHBvcnQgY2xhc3MgQ2FzaEJhbmtEaWFsb2cgZXh0ZW5kcyBTZXJlbml0eS5FbnRpdHlEaWFsb2c8Q2FzaEJhbmtSb3csIGFueT4ge1xyXG4gICAgICAgIHByb3RlY3RlZCBnZXRGb3JtS2V5KCkgeyByZXR1cm4gQ2FzaEJhbmtGb3JtLmZvcm1LZXk7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0SWRQcm9wZXJ0eSgpIHsgcmV0dXJuIENhc2hCYW5rUm93LmlkUHJvcGVydHk7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0TG9jYWxUZXh0UHJlZml4KCkgeyByZXR1cm4gQ2FzaEJhbmtSb3cubG9jYWxUZXh0UHJlZml4OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldE5hbWVQcm9wZXJ0eSgpIHsgcmV0dXJuIENhc2hCYW5rUm93Lm5hbWVQcm9wZXJ0eTsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRTZXJ2aWNlKCkgeyByZXR1cm4gQ2FzaEJhbmtTZXJ2aWNlLmJhc2VVcmw7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0RGVsZXRlUGVybWlzc2lvbigpIHsgcmV0dXJuIENhc2hCYW5rUm93LmRlbGV0ZVBlcm1pc3Npb247IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0SW5zZXJ0UGVybWlzc2lvbigpIHsgcmV0dXJuIENhc2hCYW5rUm93Lmluc2VydFBlcm1pc3Npb247IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0VXBkYXRlUGVybWlzc2lvbigpIHsgcmV0dXJuIENhc2hCYW5rUm93LnVwZGF0ZVBlcm1pc3Npb247IH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIGZvcm0gPSBuZXcgQ2FzaEJhbmtGb3JtKHRoaXMuaWRQcmVmaXgpO1xyXG5cclxuICAgIH1cclxufSIsIlxyXG5uYW1lc3BhY2UgSW5kb3RhbGVudC5TZXR0aW5ncyB7XHJcblxyXG4gICAgQFNlcmVuaXR5LkRlY29yYXRvcnMucmVnaXN0ZXJDbGFzcygpXHJcbiAgICBleHBvcnQgY2xhc3MgQ2FzaEJhbmtHcmlkIGV4dGVuZHMgU2VyZW5pdHkuRW50aXR5R3JpZDxDYXNoQmFua1JvdywgYW55PiB7XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldENvbHVtbnNLZXkoKSB7IHJldHVybiBDYXNoQmFua0NvbHVtbnMuY29sdW1uc0tleTsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXREaWFsb2dUeXBlKCkgeyByZXR1cm4gQ2FzaEJhbmtEaWFsb2c7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0SWRQcm9wZXJ0eSgpIHsgcmV0dXJuIENhc2hCYW5rUm93LmlkUHJvcGVydHk7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0SW5zZXJ0UGVybWlzc2lvbigpIHsgcmV0dXJuIENhc2hCYW5rUm93Lmluc2VydFBlcm1pc3Npb247IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0TG9jYWxUZXh0UHJlZml4KCkgeyByZXR1cm4gQ2FzaEJhbmtSb3cubG9jYWxUZXh0UHJlZml4OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldFNlcnZpY2UoKSB7IHJldHVybiBDYXNoQmFua1NlcnZpY2UuYmFzZVVybDsgfVxyXG5cclxuICAgICAgICBjb25zdHJ1Y3Rvcihjb250YWluZXI6IEpRdWVyeSkge1xyXG4gICAgICAgICAgICBzdXBlcihjb250YWluZXIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIlxyXG5uYW1lc3BhY2UgSW5kb3RhbGVudC5TZXR0aW5ncyB7XHJcblxyXG4gICAgQFNlcmVuaXR5LkRlY29yYXRvcnMucmVnaXN0ZXJDbGFzcygpXHJcbiAgICBleHBvcnQgY2xhc3MgTXlDb21wYW55RGlhbG9nIGV4dGVuZHMgU2VyZW5pdHkuRW50aXR5RGlhbG9nPE15Q29tcGFueVJvdywgYW55PiB7XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldEZvcm1LZXkoKSB7IHJldHVybiBNeUNvbXBhbnlGb3JtLmZvcm1LZXk7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0SWRQcm9wZXJ0eSgpIHsgcmV0dXJuIE15Q29tcGFueVJvdy5pZFByb3BlcnR5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldExvY2FsVGV4dFByZWZpeCgpIHsgcmV0dXJuIE15Q29tcGFueVJvdy5sb2NhbFRleHRQcmVmaXg7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0TmFtZVByb3BlcnR5KCkgeyByZXR1cm4gTXlDb21wYW55Um93Lm5hbWVQcm9wZXJ0eTsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRTZXJ2aWNlKCkgeyByZXR1cm4gTXlDb21wYW55U2VydmljZS5iYXNlVXJsOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldERlbGV0ZVBlcm1pc3Npb24oKSB7IHJldHVybiBNeUNvbXBhbnlSb3cuZGVsZXRlUGVybWlzc2lvbjsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRJbnNlcnRQZXJtaXNzaW9uKCkgeyByZXR1cm4gTXlDb21wYW55Um93Lmluc2VydFBlcm1pc3Npb247IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0VXBkYXRlUGVybWlzc2lvbigpIHsgcmV0dXJuIE15Q29tcGFueVJvdy51cGRhdGVQZXJtaXNzaW9uOyB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBmb3JtID0gbmV3IE15Q29tcGFueUZvcm0odGhpcy5pZFByZWZpeCk7XHJcblxyXG4gICAgfVxyXG59IiwiXHJcbm5hbWVzcGFjZSBJbmRvdGFsZW50LlNldHRpbmdzIHtcclxuXHJcbiAgICBAU2VyZW5pdHkuRGVjb3JhdG9ycy5yZWdpc3RlckNsYXNzKClcclxuICAgIGV4cG9ydCBjbGFzcyBNeUNvbXBhbnlHcmlkIGV4dGVuZHMgU2VyZW5pdHkuRW50aXR5R3JpZDxNeUNvbXBhbnlSb3csIGFueT4ge1xyXG4gICAgICAgIHByb3RlY3RlZCBnZXRDb2x1bW5zS2V5KCkgeyByZXR1cm4gTXlDb21wYW55Q29sdW1ucy5jb2x1bW5zS2V5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldERpYWxvZ1R5cGUoKSB7IHJldHVybiBNeUNvbXBhbnlEaWFsb2c7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0SWRQcm9wZXJ0eSgpIHsgcmV0dXJuIE15Q29tcGFueVJvdy5pZFByb3BlcnR5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldEluc2VydFBlcm1pc3Npb24oKSB7IHJldHVybiBNeUNvbXBhbnlSb3cuaW5zZXJ0UGVybWlzc2lvbjsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRMb2NhbFRleHRQcmVmaXgoKSB7IHJldHVybiBNeUNvbXBhbnlSb3cubG9jYWxUZXh0UHJlZml4OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldFNlcnZpY2UoKSB7IHJldHVybiBNeUNvbXBhbnlTZXJ2aWNlLmJhc2VVcmw7IH1cclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IoY29udGFpbmVyOiBKUXVlcnkpIHtcclxuICAgICAgICAgICAgc3VwZXIoY29udGFpbmVyKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJcclxubmFtZXNwYWNlIEluZG90YWxlbnQuU2V0dGluZ3Mge1xyXG5cclxuICAgIEBTZXJlbml0eS5EZWNvcmF0b3JzLnJlZ2lzdGVyQ2xhc3MoKVxyXG4gICAgZXhwb3J0IGNsYXNzIFB1cmNoYXNlVGF4RGlhbG9nIGV4dGVuZHMgU2VyZW5pdHkuRW50aXR5RGlhbG9nPFB1cmNoYXNlVGF4Um93LCBhbnk+IHtcclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0Rm9ybUtleSgpIHsgcmV0dXJuIFB1cmNoYXNlVGF4Rm9ybS5mb3JtS2V5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldElkUHJvcGVydHkoKSB7IHJldHVybiBQdXJjaGFzZVRheFJvdy5pZFByb3BlcnR5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldExvY2FsVGV4dFByZWZpeCgpIHsgcmV0dXJuIFB1cmNoYXNlVGF4Um93LmxvY2FsVGV4dFByZWZpeDsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXROYW1lUHJvcGVydHkoKSB7IHJldHVybiBQdXJjaGFzZVRheFJvdy5uYW1lUHJvcGVydHk7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0U2VydmljZSgpIHsgcmV0dXJuIFB1cmNoYXNlVGF4U2VydmljZS5iYXNlVXJsOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldERlbGV0ZVBlcm1pc3Npb24oKSB7IHJldHVybiBQdXJjaGFzZVRheFJvdy5kZWxldGVQZXJtaXNzaW9uOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldEluc2VydFBlcm1pc3Npb24oKSB7IHJldHVybiBQdXJjaGFzZVRheFJvdy5pbnNlcnRQZXJtaXNzaW9uOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldFVwZGF0ZVBlcm1pc3Npb24oKSB7IHJldHVybiBQdXJjaGFzZVRheFJvdy51cGRhdGVQZXJtaXNzaW9uOyB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBmb3JtID0gbmV3IFB1cmNoYXNlVGF4Rm9ybSh0aGlzLmlkUHJlZml4KTtcclxuXHJcbiAgICB9XHJcbn0iLCJcclxubmFtZXNwYWNlIEluZG90YWxlbnQuU2V0dGluZ3Mge1xyXG5cclxuICAgIEBTZXJlbml0eS5EZWNvcmF0b3JzLnJlZ2lzdGVyQ2xhc3MoKVxyXG4gICAgZXhwb3J0IGNsYXNzIFB1cmNoYXNlVGF4R3JpZCBleHRlbmRzIFNlcmVuaXR5LkVudGl0eUdyaWQ8UHVyY2hhc2VUYXhSb3csIGFueT4ge1xyXG4gICAgICAgIHByb3RlY3RlZCBnZXRDb2x1bW5zS2V5KCkgeyByZXR1cm4gUHVyY2hhc2VUYXhDb2x1bW5zLmNvbHVtbnNLZXk7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0RGlhbG9nVHlwZSgpIHsgcmV0dXJuIFB1cmNoYXNlVGF4RGlhbG9nOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldElkUHJvcGVydHkoKSB7IHJldHVybiBQdXJjaGFzZVRheFJvdy5pZFByb3BlcnR5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldEluc2VydFBlcm1pc3Npb24oKSB7IHJldHVybiBQdXJjaGFzZVRheFJvdy5pbnNlcnRQZXJtaXNzaW9uOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldExvY2FsVGV4dFByZWZpeCgpIHsgcmV0dXJuIFB1cmNoYXNlVGF4Um93LmxvY2FsVGV4dFByZWZpeDsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRTZXJ2aWNlKCkgeyByZXR1cm4gUHVyY2hhc2VUYXhTZXJ2aWNlLmJhc2VVcmw7IH1cclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IoY29udGFpbmVyOiBKUXVlcnkpIHtcclxuICAgICAgICAgICAgc3VwZXIoY29udGFpbmVyKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJcclxubmFtZXNwYWNlIEluZG90YWxlbnQuU2V0dGluZ3Mge1xyXG5cclxuICAgIEBTZXJlbml0eS5EZWNvcmF0b3JzLnJlZ2lzdGVyQ2xhc3MoKVxyXG4gICAgZXhwb3J0IGNsYXNzIFNhbGVzVGF4RGlhbG9nIGV4dGVuZHMgU2VyZW5pdHkuRW50aXR5RGlhbG9nPFNhbGVzVGF4Um93LCBhbnk+IHtcclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0Rm9ybUtleSgpIHsgcmV0dXJuIFNhbGVzVGF4Rm9ybS5mb3JtS2V5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldElkUHJvcGVydHkoKSB7IHJldHVybiBTYWxlc1RheFJvdy5pZFByb3BlcnR5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldExvY2FsVGV4dFByZWZpeCgpIHsgcmV0dXJuIFNhbGVzVGF4Um93LmxvY2FsVGV4dFByZWZpeDsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXROYW1lUHJvcGVydHkoKSB7IHJldHVybiBTYWxlc1RheFJvdy5uYW1lUHJvcGVydHk7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0U2VydmljZSgpIHsgcmV0dXJuIFNhbGVzVGF4U2VydmljZS5iYXNlVXJsOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldERlbGV0ZVBlcm1pc3Npb24oKSB7IHJldHVybiBTYWxlc1RheFJvdy5kZWxldGVQZXJtaXNzaW9uOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldEluc2VydFBlcm1pc3Npb24oKSB7IHJldHVybiBTYWxlc1RheFJvdy5pbnNlcnRQZXJtaXNzaW9uOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldFVwZGF0ZVBlcm1pc3Npb24oKSB7IHJldHVybiBTYWxlc1RheFJvdy51cGRhdGVQZXJtaXNzaW9uOyB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBmb3JtID0gbmV3IFNhbGVzVGF4Rm9ybSh0aGlzLmlkUHJlZml4KTtcclxuXHJcbiAgICB9XHJcbn0iLCJcclxubmFtZXNwYWNlIEluZG90YWxlbnQuU2V0dGluZ3Mge1xyXG5cclxuICAgIEBTZXJlbml0eS5EZWNvcmF0b3JzLnJlZ2lzdGVyQ2xhc3MoKVxyXG4gICAgZXhwb3J0IGNsYXNzIFNhbGVzVGF4R3JpZCBleHRlbmRzIFNlcmVuaXR5LkVudGl0eUdyaWQ8U2FsZXNUYXhSb3csIGFueT4ge1xyXG4gICAgICAgIHByb3RlY3RlZCBnZXRDb2x1bW5zS2V5KCkgeyByZXR1cm4gU2FsZXNUYXhDb2x1bW5zLmNvbHVtbnNLZXk7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0RGlhbG9nVHlwZSgpIHsgcmV0dXJuIFNhbGVzVGF4RGlhbG9nOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldElkUHJvcGVydHkoKSB7IHJldHVybiBTYWxlc1RheFJvdy5pZFByb3BlcnR5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldEluc2VydFBlcm1pc3Npb24oKSB7IHJldHVybiBTYWxlc1RheFJvdy5pbnNlcnRQZXJtaXNzaW9uOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldExvY2FsVGV4dFByZWZpeCgpIHsgcmV0dXJuIFNhbGVzVGF4Um93LmxvY2FsVGV4dFByZWZpeDsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRTZXJ2aWNlKCkgeyByZXR1cm4gU2FsZXNUYXhTZXJ2aWNlLmJhc2VVcmw7IH1cclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IoY29udGFpbmVyOiBKUXVlcnkpIHtcclxuICAgICAgICAgICAgc3VwZXIoY29udGFpbmVyKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXX0=