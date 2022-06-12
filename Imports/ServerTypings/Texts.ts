namespace Indotalent.Texts {

    declare namespace Db {

        namespace Administration {

            namespace Language {
                export const Id: string;
                export const InsertDate: string;
                export const InsertUserId: string;
                export const LanguageId: string;
                export const LanguageName: string;
                export const UpdateDate: string;
                export const UpdateUserId: string;
            }

            namespace Role {
                export const InsertDate: string;
                export const InsertUserId: string;
                export const RoleId: string;
                export const RoleName: string;
                export const TenantId: string;
                export const TenantName: string;
                export const UpdateDate: string;
                export const UpdateUserId: string;
            }

            namespace RolePermission {
                export const PermissionKey: string;
                export const RoleId: string;
                export const RolePermissionId: string;
                export const RoleRoleName: string;
            }

            namespace Tenant {
                export const BillNumberLength: string;
                export const BillNumberPrefix: string;
                export const BillNumberUseDate: string;
                export const BillPaymentNumberLength: string;
                export const BillPaymentNumberPrefix: string;
                export const BillPaymentNumberUseDate: string;
                export const City: string;
                export const Currency: string;
                export const CustomerNumberLength: string;
                export const CustomerNumberPrefix: string;
                export const CustomerNumberUseDate: string;
                export const Description: string;
                export const Email: string;
                export const InsertDate: string;
                export const InsertUserId: string;
                export const InvoiceNumberLength: string;
                export const InvoiceNumberPrefix: string;
                export const InvoiceNumberUseDate: string;
                export const InvoicePaymentNumberLength: string;
                export const InvoicePaymentNumberPrefix: string;
                export const InvoicePaymentNumberUseDate: string;
                export const MaximumUser: string;
                export const Phone: string;
                export const ProductNumberLength: string;
                export const ProductNumberPrefix: string;
                export const ProductNumberUseDate: string;
                export const PurchaseNumberLength: string;
                export const PurchaseNumberPrefix: string;
                export const PurchaseNumberUseDate: string;
                export const SalesNumberLength: string;
                export const SalesNumberPrefix: string;
                export const SalesNumberUseDate: string;
                export const State: string;
                export const Street: string;
                export const TenantId: string;
                export const TenantName: string;
                export const UpdateDate: string;
                export const UpdateUserId: string;
                export const VendorNumberLength: string;
                export const VendorNumberPrefix: string;
                export const VendorNumberUseDate: string;
                export const ZipCode: string;
            }

            namespace Translation {
                export const CustomText: string;
                export const EntityPlural: string;
                export const Key: string;
                export const OverrideConfirmation: string;
                export const SaveChangesButton: string;
                export const SourceLanguage: string;
                export const SourceText: string;
                export const TargetLanguage: string;
                export const TargetText: string;
            }

            namespace User {
                export const DisplayName: string;
                export const Email: string;
                export const InsertDate: string;
                export const InsertUserId: string;
                export const IsActive: string;
                export const IsTenantAdmin: string;
                export const LastDirectoryUpdate: string;
                export const Password: string;
                export const PasswordConfirm: string;
                export const PasswordHash: string;
                export const PasswordSalt: string;
                export const Source: string;
                export const TenantId: string;
                export const TenantName: string;
                export const UpdateDate: string;
                export const UpdateUserId: string;
                export const UserId: string;
                export const UserImage: string;
                export const Username: string;
            }

            namespace UserPermission {
                export const Granted: string;
                export const PermissionKey: string;
                export const User: string;
                export const UserId: string;
                export const UserPermissionId: string;
                export const Username: string;
            }

            namespace UserRole {
                export const RoleId: string;
                export const User: string;
                export const UserId: string;
                export const UserRoleId: string;
                export const Username: string;
            }
        }

        namespace Merchandise {

            namespace Brand {
                export const Description: string;
                export const Id: string;
                export const InsertDate: string;
                export const InsertUserId: string;
                export const Name: string;
                export const TenantId: string;
                export const TenantName: string;
                export const UpdateDate: string;
                export const UpdateUserId: string;
            }

            namespace Category {
                export const Description: string;
                export const Id: string;
                export const InsertDate: string;
                export const InsertUserId: string;
                export const Name: string;
                export const TenantId: string;
                export const TenantName: string;
                export const UpdateDate: string;
                export const UpdateUserId: string;
            }

            namespace Colour {
                export const Description: string;
                export const Id: string;
                export const InsertDate: string;
                export const InsertUserId: string;
                export const Name: string;
                export const TenantId: string;
                export const TenantName: string;
                export const UpdateDate: string;
                export const UpdateUserId: string;
            }

            namespace Flavour {
                export const Description: string;
                export const Id: string;
                export const InsertDate: string;
                export const InsertUserId: string;
                export const Name: string;
                export const TenantId: string;
                export const TenantName: string;
                export const UpdateDate: string;
                export const UpdateUserId: string;
            }

            namespace Product {
                export const Barcode: string;
                export const BrandId: string;
                export const BrandName: string;
                export const CategoryId: string;
                export const CategoryName: string;
                export const ColourId: string;
                export const ColourName: string;
                export const CurrencyName: string;
                export const Description: string;
                export const FlavourId: string;
                export const FlavourName: string;
                export const Id: string;
                export const InsertDate: string;
                export const InsertUserId: string;
                export const InternalCode: string;
                export const Name: string;
                export const Picture: string;
                export const PurchasePrice: string;
                export const PurchaseTaxId: string;
                export const PurchaseTaxName: string;
                export const SalesPrice: string;
                export const SalesTaxId: string;
                export const SalesTaxName: string;
                export const SizeId: string;
                export const SizeName: string;
                export const TenantId: string;
                export const TenantName: string;
                export const UomId: string;
                export const UomName: string;
                export const UpdateDate: string;
                export const UpdateUserId: string;
            }

            namespace Size {
                export const Description: string;
                export const Id: string;
                export const InsertDate: string;
                export const InsertUserId: string;
                export const Name: string;
                export const TenantId: string;
                export const TenantName: string;
                export const UpdateDate: string;
                export const UpdateUserId: string;
            }

            namespace Uom {
                export const Description: string;
                export const Id: string;
                export const InsertDate: string;
                export const InsertUserId: string;
                export const Name: string;
                export const TenantId: string;
                export const TenantName: string;
                export const UpdateDate: string;
                export const UpdateUserId: string;
            }
        }

        namespace Purchase {

            namespace Bill {
                export const BeforeTax: string;
                export const BillDate: string;
                export const BillPaymentList: string;
                export const CurrencyName: string;
                export const Description: string;
                export const Discount: string;
                export const ExternalReferenceNumber: string;
                export const Id: string;
                export const InsertDate: string;
                export const InsertUserId: string;
                export const ItemList: string;
                export const Number: string;
                export const OtherCharge: string;
                export const ProcurementGroup: string;
                export const PurchaseOrderId: string;
                export const PurchaseOrderNumber: string;
                export const SubTotal: string;
                export const TaxAmount: string;
                export const TenantId: string;
                export const TenantName: string;
                export const Total: string;
                export const UpdateDate: string;
                export const UpdateUserId: string;
                export const VendorCity: string;
                export const VendorEmail: string;
                export const VendorId: string;
                export const VendorName: string;
                export const VendorPhone: string;
                export const VendorState: string;
                export const VendorStreet: string;
                export const VendorZipCode: string;
            }

            namespace BillDetail {
                export const BeforeTax: string;
                export const BillId: string;
                export const Discount: string;
                export const Id: string;
                export const InsertDate: string;
                export const InsertUserId: string;
                export const Price: string;
                export const ProductId: string;
                export const ProductName: string;
                export const Qty: string;
                export const SubTotal: string;
                export const TaxAmount: string;
                export const TaxPercentage: string;
                export const TenantId: string;
                export const TenantName: string;
                export const Total: string;
                export const UpdateDate: string;
                export const UpdateUserId: string;
            }

            namespace BillPayment {
                export const BillAmount: string;
                export const BillId: string;
                export const BillNumber: string;
                export const CashBankId: string;
                export const CashBankName: string;
                export const CurrencyName: string;
                export const Description: string;
                export const Id: string;
                export const InsertDate: string;
                export const InsertUserId: string;
                export const Number: string;
                export const PaymentAmount: string;
                export const PaymentDate: string;
                export const ProcurementGroup: string;
                export const PurchaseOrderId: string;
                export const TenantId: string;
                export const TenantName: string;
                export const UpdateDate: string;
                export const UpdateUserId: string;
                export const VendorCity: string;
                export const VendorEmail: string;
                export const VendorId: string;
                export const VendorName: string;
                export const VendorPhone: string;
                export const VendorState: string;
                export const VendorStreet: string;
                export const VendorZipCode: string;
            }

            namespace PurchaseOrder {
                export const BeforeTax: string;
                export const BillList: string;
                export const CurrencyName: string;
                export const Description: string;
                export const Discount: string;
                export const Id: string;
                export const InsertDate: string;
                export const InsertUserId: string;
                export const ItemList: string;
                export const Number: string;
                export const OrderDate: string;
                export const OtherCharge: string;
                export const ProcurementGroup: string;
                export const SubTotal: string;
                export const TaxAmount: string;
                export const TenantId: string;
                export const TenantName: string;
                export const Total: string;
                export const UpdateDate: string;
                export const UpdateUserId: string;
                export const VendorCity: string;
                export const VendorEmail: string;
                export const VendorId: string;
                export const VendorName: string;
                export const VendorPhone: string;
                export const VendorState: string;
                export const VendorStreet: string;
                export const VendorZipCode: string;
            }

            namespace Vendor {
                export const City: string;
                export const ContactList: string;
                export const Description: string;
                export const Email: string;
                export const Id: string;
                export const InsertDate: string;
                export const InsertUserId: string;
                export const Name: string;
                export const Phone: string;
                export const State: string;
                export const Street: string;
                export const TenantId: string;
                export const TenantName: string;
                export const UpdateDate: string;
                export const UpdateUserId: string;
                export const ZipCode: string;
            }

            namespace VendorContact {
                export const City: string;
                export const Description: string;
                export const Email: string;
                export const Id: string;
                export const InsertDate: string;
                export const InsertUserId: string;
                export const Name: string;
                export const Phone: string;
                export const State: string;
                export const Street: string;
                export const TenantId: string;
                export const TenantName: string;
                export const UpdateDate: string;
                export const UpdateUserId: string;
                export const VendorId: string;
                export const ZipCode: string;
            }
        }

        namespace PurchaseOrder {

            namespace PurchaseOrderDetail {
                export const BeforeTax: string;
                export const Discount: string;
                export const Id: string;
                export const InsertDate: string;
                export const InsertUserId: string;
                export const Price: string;
                export const ProductId: string;
                export const ProductName: string;
                export const PurchaseOrderId: string;
                export const Qty: string;
                export const SubTotal: string;
                export const TaxAmount: string;
                export const TaxPercentage: string;
                export const TenantId: string;
                export const TenantName: string;
                export const Total: string;
                export const UpdateDate: string;
                export const UpdateUserId: string;
            }
        }

        namespace Sales {

            namespace Customer {
                export const City: string;
                export const ContactList: string;
                export const Description: string;
                export const Email: string;
                export const Id: string;
                export const InsertDate: string;
                export const InsertUserId: string;
                export const Name: string;
                export const Phone: string;
                export const State: string;
                export const Street: string;
                export const TenantId: string;
                export const TenantName: string;
                export const UpdateDate: string;
                export const UpdateUserId: string;
                export const ZipCode: string;
            }

            namespace CustomerContact {
                export const City: string;
                export const CustomerId: string;
                export const Description: string;
                export const Email: string;
                export const Id: string;
                export const InsertDate: string;
                export const InsertUserId: string;
                export const Name: string;
                export const Phone: string;
                export const State: string;
                export const Street: string;
                export const TenantId: string;
                export const TenantName: string;
                export const UpdateDate: string;
                export const UpdateUserId: string;
                export const ZipCode: string;
            }

            namespace Invoice {
                export const BeforeTax: string;
                export const CurrencyName: string;
                export const CustomerCity: string;
                export const CustomerEmail: string;
                export const CustomerId: string;
                export const CustomerName: string;
                export const CustomerPhone: string;
                export const CustomerState: string;
                export const CustomerStreet: string;
                export const CustomerZipCode: string;
                export const Description: string;
                export const Discount: string;
                export const Id: string;
                export const InsertDate: string;
                export const InsertUserId: string;
                export const InvoiceDate: string;
                export const InvoicePaymentList: string;
                export const ItemList: string;
                export const Number: string;
                export const OtherCharge: string;
                export const SalesGroup: string;
                export const SalesOrderId: string;
                export const SalesOrderNumber: string;
                export const SubTotal: string;
                export const TaxAmount: string;
                export const TenantId: string;
                export const TenantName: string;
                export const Total: string;
                export const UpdateDate: string;
                export const UpdateUserId: string;
            }

            namespace InvoiceDetail {
                export const BeforeTax: string;
                export const Discount: string;
                export const Id: string;
                export const InsertDate: string;
                export const InsertUserId: string;
                export const InvoiceId: string;
                export const Price: string;
                export const ProductId: string;
                export const ProductName: string;
                export const Qty: string;
                export const SubTotal: string;
                export const TaxAmount: string;
                export const TaxPercentage: string;
                export const TenantId: string;
                export const TenantName: string;
                export const Total: string;
                export const UpdateDate: string;
                export const UpdateUserId: string;
            }

            namespace InvoicePayment {
                export const CashBankId: string;
                export const CashBankName: string;
                export const CurrencyName: string;
                export const CustomerCity: string;
                export const CustomerEmail: string;
                export const CustomerId: string;
                export const CustomerName: string;
                export const CustomerPhone: string;
                export const CustomerState: string;
                export const CustomerStreet: string;
                export const CustomerZipCode: string;
                export const Description: string;
                export const Id: string;
                export const InsertDate: string;
                export const InsertUserId: string;
                export const InvoiceAmount: string;
                export const InvoiceId: string;
                export const InvoiceNumber: string;
                export const Number: string;
                export const PaymentAmount: string;
                export const PaymentDate: string;
                export const SalesGroup: string;
                export const SalesOrderId: string;
                export const TenantId: string;
                export const TenantName: string;
                export const UpdateDate: string;
                export const UpdateUserId: string;
            }

            namespace SalesChannel {
                export const Description: string;
                export const Id: string;
                export const InsertDate: string;
                export const InsertUserId: string;
                export const Name: string;
                export const TenantId: string;
                export const TenantName: string;
                export const UpdateDate: string;
                export const UpdateUserId: string;
            }

            namespace SalesOrder {
                export const BeforeTax: string;
                export const CurrencyName: string;
                export const CustomerCity: string;
                export const CustomerEmail: string;
                export const CustomerId: string;
                export const CustomerName: string;
                export const CustomerPhone: string;
                export const CustomerState: string;
                export const CustomerStreet: string;
                export const CustomerZipCode: string;
                export const Description: string;
                export const Discount: string;
                export const Id: string;
                export const InsertDate: string;
                export const InsertUserId: string;
                export const InvoiceList: string;
                export const ItemList: string;
                export const Number: string;
                export const OrderDate: string;
                export const OtherCharge: string;
                export const SalesChannelId: string;
                export const SalesChannelName: string;
                export const SalesGroup: string;
                export const SubTotal: string;
                export const TaxAmount: string;
                export const TenantId: string;
                export const TenantName: string;
                export const Total: string;
                export const UpdateDate: string;
                export const UpdateUserId: string;
            }

            namespace SalesOrderDetail {
                export const BeforeTax: string;
                export const Discount: string;
                export const Id: string;
                export const InsertDate: string;
                export const InsertUserId: string;
                export const Price: string;
                export const ProductId: string;
                export const ProductName: string;
                export const Qty: string;
                export const SalesOrderId: string;
                export const SubTotal: string;
                export const TaxAmount: string;
                export const TaxPercentage: string;
                export const TenantId: string;
                export const TenantName: string;
                export const Total: string;
                export const UpdateDate: string;
                export const UpdateUserId: string;
            }
        }

        namespace Settings {

            namespace CashBank {
                export const AccountNumber: string;
                export const City: string;
                export const Description: string;
                export const Email: string;
                export const Id: string;
                export const InsertDate: string;
                export const InsertUserId: string;
                export const Name: string;
                export const Phone: string;
                export const State: string;
                export const Street: string;
                export const TenantId: string;
                export const TenantName: string;
                export const UpdateDate: string;
                export const UpdateUserId: string;
                export const ZipCode: string;
            }

            namespace MyCompany {
                export const BillNumberLength: string;
                export const BillNumberPrefix: string;
                export const BillNumberUseDate: string;
                export const BillPaymentNumberLength: string;
                export const BillPaymentNumberPrefix: string;
                export const BillPaymentNumberUseDate: string;
                export const City: string;
                export const Currency: string;
                export const CustomerNumberLength: string;
                export const CustomerNumberPrefix: string;
                export const CustomerNumberUseDate: string;
                export const Description: string;
                export const Email: string;
                export const InsertDate: string;
                export const InsertUserId: string;
                export const InvoiceNumberLength: string;
                export const InvoiceNumberPrefix: string;
                export const InvoiceNumberUseDate: string;
                export const InvoicePaymentNumberLength: string;
                export const InvoicePaymentNumberPrefix: string;
                export const InvoicePaymentNumberUseDate: string;
                export const MaximumUser: string;
                export const Phone: string;
                export const ProductNumberLength: string;
                export const ProductNumberPrefix: string;
                export const ProductNumberUseDate: string;
                export const PurchaseNumberLength: string;
                export const PurchaseNumberPrefix: string;
                export const PurchaseNumberUseDate: string;
                export const SalesNumberLength: string;
                export const SalesNumberPrefix: string;
                export const SalesNumberUseDate: string;
                export const State: string;
                export const Street: string;
                export const TenantId: string;
                export const TenantName: string;
                export const UpdateDate: string;
                export const UpdateUserId: string;
                export const VendorNumberLength: string;
                export const VendorNumberPrefix: string;
                export const VendorNumberUseDate: string;
                export const ZipCode: string;
            }

            namespace PurchaseTax {
                export const Description: string;
                export const Id: string;
                export const InsertDate: string;
                export const InsertUserId: string;
                export const Name: string;
                export const TaxRatePercentage: string;
                export const TenantId: string;
                export const TenantName: string;
                export const UpdateDate: string;
                export const UpdateUserId: string;
            }

            namespace SalesTax {
                export const Description: string;
                export const Id: string;
                export const InsertDate: string;
                export const InsertUserId: string;
                export const Name: string;
                export const TaxRatePercentage: string;
                export const TenantId: string;
                export const TenantName: string;
                export const UpdateDate: string;
                export const UpdateUserId: string;
            }
        }
    }

    declare namespace Forms {

        namespace Membership {

            namespace ChangePassword {
                export const FormTitle: string;
                export const SubmitButton: string;
                export const Success: string;
            }

            namespace ForgotPassword {
                export const BackToLogin: string;
                export const FormInfo: string;
                export const FormTitle: string;
                export const SubmitButton: string;
                export const Success: string;
            }

            namespace Login {
                export const FacebookButton: string;
                export const ForgotPassword: string;
                export const GoogleButton: string;
                export const LoginToYourAccount: string;
                export const OR: string;
                export const RememberMe: string;
                export const SignInButton: string;
                export const SignUpButton: string;
            }

            namespace ResetPassword {
                export const BackToLogin: string;
                export const EmailSubject: string;
                export const FormTitle: string;
                export const SubmitButton: string;
                export const Success: string;
            }

            namespace SignUp {
                export const AcceptTerms: string;
                export const ActivateEmailSubject: string;
                export const ActivationCompleteMessage: string;
                export const BackToLogin: string;
                export const ConfirmEmail: string;
                export const ConfirmPassword: string;
                export const DisplayName: string;
                export const Email: string;
                export const FormInfo: string;
                export const FormTitle: string;
                export const Password: string;
                export const SubmitButton: string;
                export const Success: string;
            }
        }
    }

    declare namespace Navigation {
        export const LogoutLink: string;
        export const SiteTitle: string;
    }

    declare namespace Site {

        namespace AccessDenied {
            export const ClickToChangeUser: string;
            export const ClickToLogin: string;
            export const LackPermissions: string;
            export const NotLoggedIn: string;
            export const PageTitle: string;
        }

        namespace BasicProgressDialog {
            export const CancelTitle: string;
            export const PleaseWait: string;
        }

        namespace BulkServiceAction {
            export const AllHadErrorsFormat: string;
            export const AllSuccessFormat: string;
            export const ConfirmationFormat: string;
            export const ErrorCount: string;
            export const NothingToProcess: string;
            export const SomeHadErrorsFormat: string;
            export const SuccessCount: string;
        }

        namespace Dashboard {
            export const ContentDescription: string;
        }

        namespace Layout {
            export const FooterCopyright: string;
            export const FooterInfo: string;
            export const FooterRights: string;
            export const GeneralSettings: string;
            export const Language: string;
            export const Theme: string;
            export const ThemeBlack: string;
            export const ThemeBlackLight: string;
            export const ThemeBlue: string;
            export const ThemeBlueLight: string;
            export const ThemeGreen: string;
            export const ThemeGreenLight: string;
            export const ThemePurple: string;
            export const ThemePurpleLight: string;
            export const ThemeRed: string;
            export const ThemeRedLight: string;
            export const ThemeYellow: string;
            export const ThemeYellowLight: string;
        }

        namespace RolePermissionDialog {
            export const DialogTitle: string;
            export const EditButton: string;
            export const SaveSuccess: string;
        }

        namespace UserDialog {
            export const EditPermissionsButton: string;
            export const EditRolesButton: string;
        }

        namespace UserPermissionDialog {
            export const DialogTitle: string;
            export const Grant: string;
            export const Permission: string;
            export const Revoke: string;
            export const SaveSuccess: string;
        }

        namespace UserRoleDialog {
            export const DialogTitle: string;
            export const SaveSuccess: string;
        }

        namespace ValidationError {
            export const Title: string;
        }
    }

    declare namespace Validation {
        export const AuthenticationError: string;
        export const CantFindUserWithEmail: string;
        export const CurrentPasswordMismatch: string;
        export const DeleteForeignKeyError: string;
        export const EmailConfirm: string;
        export const EmailInUse: string;
        export const InvalidActivateToken: string;
        export const InvalidResetToken: string;
        export const MinRequiredPasswordLength: string;
        export const SavePrimaryKeyError: string;
    }

    Indotalent['Texts'] = Q.proxyTexts(Texts, '', {Db:{Administration:{Language:{Id:1,InsertDate:1,InsertUserId:1,LanguageId:1,LanguageName:1,UpdateDate:1,UpdateUserId:1},Role:{InsertDate:1,InsertUserId:1,RoleId:1,RoleName:1,TenantId:1,TenantName:1,UpdateDate:1,UpdateUserId:1},RolePermission:{PermissionKey:1,RoleId:1,RolePermissionId:1,RoleRoleName:1},Tenant:{BillNumberLength:1,BillNumberPrefix:1,BillNumberUseDate:1,BillPaymentNumberLength:1,BillPaymentNumberPrefix:1,BillPaymentNumberUseDate:1,City:1,Currency:1,CustomerNumberLength:1,CustomerNumberPrefix:1,CustomerNumberUseDate:1,Description:1,Email:1,InsertDate:1,InsertUserId:1,InvoiceNumberLength:1,InvoiceNumberPrefix:1,InvoiceNumberUseDate:1,InvoicePaymentNumberLength:1,InvoicePaymentNumberPrefix:1,InvoicePaymentNumberUseDate:1,MaximumUser:1,Phone:1,ProductNumberLength:1,ProductNumberPrefix:1,ProductNumberUseDate:1,PurchaseNumberLength:1,PurchaseNumberPrefix:1,PurchaseNumberUseDate:1,SalesNumberLength:1,SalesNumberPrefix:1,SalesNumberUseDate:1,State:1,Street:1,TenantId:1,TenantName:1,UpdateDate:1,UpdateUserId:1,VendorNumberLength:1,VendorNumberPrefix:1,VendorNumberUseDate:1,ZipCode:1},Translation:{CustomText:1,EntityPlural:1,Key:1,OverrideConfirmation:1,SaveChangesButton:1,SourceLanguage:1,SourceText:1,TargetLanguage:1,TargetText:1},User:{DisplayName:1,Email:1,InsertDate:1,InsertUserId:1,IsActive:1,IsTenantAdmin:1,LastDirectoryUpdate:1,Password:1,PasswordConfirm:1,PasswordHash:1,PasswordSalt:1,Source:1,TenantId:1,TenantName:1,UpdateDate:1,UpdateUserId:1,UserId:1,UserImage:1,Username:1},UserPermission:{Granted:1,PermissionKey:1,User:1,UserId:1,UserPermissionId:1,Username:1},UserRole:{RoleId:1,User:1,UserId:1,UserRoleId:1,Username:1}},Merchandise:{Brand:{Description:1,Id:1,InsertDate:1,InsertUserId:1,Name:1,TenantId:1,TenantName:1,UpdateDate:1,UpdateUserId:1},Category:{Description:1,Id:1,InsertDate:1,InsertUserId:1,Name:1,TenantId:1,TenantName:1,UpdateDate:1,UpdateUserId:1},Colour:{Description:1,Id:1,InsertDate:1,InsertUserId:1,Name:1,TenantId:1,TenantName:1,UpdateDate:1,UpdateUserId:1},Flavour:{Description:1,Id:1,InsertDate:1,InsertUserId:1,Name:1,TenantId:1,TenantName:1,UpdateDate:1,UpdateUserId:1},Product:{Barcode:1,BrandId:1,BrandName:1,CategoryId:1,CategoryName:1,ColourId:1,ColourName:1,CurrencyName:1,Description:1,FlavourId:1,FlavourName:1,Id:1,InsertDate:1,InsertUserId:1,InternalCode:1,Name:1,Picture:1,PurchasePrice:1,PurchaseTaxId:1,PurchaseTaxName:1,SalesPrice:1,SalesTaxId:1,SalesTaxName:1,SizeId:1,SizeName:1,TenantId:1,TenantName:1,UomId:1,UomName:1,UpdateDate:1,UpdateUserId:1},Size:{Description:1,Id:1,InsertDate:1,InsertUserId:1,Name:1,TenantId:1,TenantName:1,UpdateDate:1,UpdateUserId:1},Uom:{Description:1,Id:1,InsertDate:1,InsertUserId:1,Name:1,TenantId:1,TenantName:1,UpdateDate:1,UpdateUserId:1}},Purchase:{Bill:{BeforeTax:1,BillDate:1,BillPaymentList:1,CurrencyName:1,Description:1,Discount:1,ExternalReferenceNumber:1,Id:1,InsertDate:1,InsertUserId:1,ItemList:1,Number:1,OtherCharge:1,ProcurementGroup:1,PurchaseOrderId:1,PurchaseOrderNumber:1,SubTotal:1,TaxAmount:1,TenantId:1,TenantName:1,Total:1,UpdateDate:1,UpdateUserId:1,VendorCity:1,VendorEmail:1,VendorId:1,VendorName:1,VendorPhone:1,VendorState:1,VendorStreet:1,VendorZipCode:1},BillDetail:{BeforeTax:1,BillId:1,Discount:1,Id:1,InsertDate:1,InsertUserId:1,Price:1,ProductId:1,ProductName:1,Qty:1,SubTotal:1,TaxAmount:1,TaxPercentage:1,TenantId:1,TenantName:1,Total:1,UpdateDate:1,UpdateUserId:1},BillPayment:{BillAmount:1,BillId:1,BillNumber:1,CashBankId:1,CashBankName:1,CurrencyName:1,Description:1,Id:1,InsertDate:1,InsertUserId:1,Number:1,PaymentAmount:1,PaymentDate:1,ProcurementGroup:1,PurchaseOrderId:1,TenantId:1,TenantName:1,UpdateDate:1,UpdateUserId:1,VendorCity:1,VendorEmail:1,VendorId:1,VendorName:1,VendorPhone:1,VendorState:1,VendorStreet:1,VendorZipCode:1},PurchaseOrder:{BeforeTax:1,BillList:1,CurrencyName:1,Description:1,Discount:1,Id:1,InsertDate:1,InsertUserId:1,ItemList:1,Number:1,OrderDate:1,OtherCharge:1,ProcurementGroup:1,SubTotal:1,TaxAmount:1,TenantId:1,TenantName:1,Total:1,UpdateDate:1,UpdateUserId:1,VendorCity:1,VendorEmail:1,VendorId:1,VendorName:1,VendorPhone:1,VendorState:1,VendorStreet:1,VendorZipCode:1},Vendor:{City:1,ContactList:1,Description:1,Email:1,Id:1,InsertDate:1,InsertUserId:1,Name:1,Phone:1,State:1,Street:1,TenantId:1,TenantName:1,UpdateDate:1,UpdateUserId:1,ZipCode:1},VendorContact:{City:1,Description:1,Email:1,Id:1,InsertDate:1,InsertUserId:1,Name:1,Phone:1,State:1,Street:1,TenantId:1,TenantName:1,UpdateDate:1,UpdateUserId:1,VendorId:1,ZipCode:1}},PurchaseOrder:{PurchaseOrderDetail:{BeforeTax:1,Discount:1,Id:1,InsertDate:1,InsertUserId:1,Price:1,ProductId:1,ProductName:1,PurchaseOrderId:1,Qty:1,SubTotal:1,TaxAmount:1,TaxPercentage:1,TenantId:1,TenantName:1,Total:1,UpdateDate:1,UpdateUserId:1}},Sales:{Customer:{City:1,ContactList:1,Description:1,Email:1,Id:1,InsertDate:1,InsertUserId:1,Name:1,Phone:1,State:1,Street:1,TenantId:1,TenantName:1,UpdateDate:1,UpdateUserId:1,ZipCode:1},CustomerContact:{City:1,CustomerId:1,Description:1,Email:1,Id:1,InsertDate:1,InsertUserId:1,Name:1,Phone:1,State:1,Street:1,TenantId:1,TenantName:1,UpdateDate:1,UpdateUserId:1,ZipCode:1},Invoice:{BeforeTax:1,CurrencyName:1,CustomerCity:1,CustomerEmail:1,CustomerId:1,CustomerName:1,CustomerPhone:1,CustomerState:1,CustomerStreet:1,CustomerZipCode:1,Description:1,Discount:1,Id:1,InsertDate:1,InsertUserId:1,InvoiceDate:1,InvoicePaymentList:1,ItemList:1,Number:1,OtherCharge:1,SalesGroup:1,SalesOrderId:1,SalesOrderNumber:1,SubTotal:1,TaxAmount:1,TenantId:1,TenantName:1,Total:1,UpdateDate:1,UpdateUserId:1},InvoiceDetail:{BeforeTax:1,Discount:1,Id:1,InsertDate:1,InsertUserId:1,InvoiceId:1,Price:1,ProductId:1,ProductName:1,Qty:1,SubTotal:1,TaxAmount:1,TaxPercentage:1,TenantId:1,TenantName:1,Total:1,UpdateDate:1,UpdateUserId:1},InvoicePayment:{CashBankId:1,CashBankName:1,CurrencyName:1,CustomerCity:1,CustomerEmail:1,CustomerId:1,CustomerName:1,CustomerPhone:1,CustomerState:1,CustomerStreet:1,CustomerZipCode:1,Description:1,Id:1,InsertDate:1,InsertUserId:1,InvoiceAmount:1,InvoiceId:1,InvoiceNumber:1,Number:1,PaymentAmount:1,PaymentDate:1,SalesGroup:1,SalesOrderId:1,TenantId:1,TenantName:1,UpdateDate:1,UpdateUserId:1},SalesChannel:{Description:1,Id:1,InsertDate:1,InsertUserId:1,Name:1,TenantId:1,TenantName:1,UpdateDate:1,UpdateUserId:1},SalesOrder:{BeforeTax:1,CurrencyName:1,CustomerCity:1,CustomerEmail:1,CustomerId:1,CustomerName:1,CustomerPhone:1,CustomerState:1,CustomerStreet:1,CustomerZipCode:1,Description:1,Discount:1,Id:1,InsertDate:1,InsertUserId:1,InvoiceList:1,ItemList:1,Number:1,OrderDate:1,OtherCharge:1,SalesChannelId:1,SalesChannelName:1,SalesGroup:1,SubTotal:1,TaxAmount:1,TenantId:1,TenantName:1,Total:1,UpdateDate:1,UpdateUserId:1},SalesOrderDetail:{BeforeTax:1,Discount:1,Id:1,InsertDate:1,InsertUserId:1,Price:1,ProductId:1,ProductName:1,Qty:1,SalesOrderId:1,SubTotal:1,TaxAmount:1,TaxPercentage:1,TenantId:1,TenantName:1,Total:1,UpdateDate:1,UpdateUserId:1}},Settings:{CashBank:{AccountNumber:1,City:1,Description:1,Email:1,Id:1,InsertDate:1,InsertUserId:1,Name:1,Phone:1,State:1,Street:1,TenantId:1,TenantName:1,UpdateDate:1,UpdateUserId:1,ZipCode:1},MyCompany:{BillNumberLength:1,BillNumberPrefix:1,BillNumberUseDate:1,BillPaymentNumberLength:1,BillPaymentNumberPrefix:1,BillPaymentNumberUseDate:1,City:1,Currency:1,CustomerNumberLength:1,CustomerNumberPrefix:1,CustomerNumberUseDate:1,Description:1,Email:1,InsertDate:1,InsertUserId:1,InvoiceNumberLength:1,InvoiceNumberPrefix:1,InvoiceNumberUseDate:1,InvoicePaymentNumberLength:1,InvoicePaymentNumberPrefix:1,InvoicePaymentNumberUseDate:1,MaximumUser:1,Phone:1,ProductNumberLength:1,ProductNumberPrefix:1,ProductNumberUseDate:1,PurchaseNumberLength:1,PurchaseNumberPrefix:1,PurchaseNumberUseDate:1,SalesNumberLength:1,SalesNumberPrefix:1,SalesNumberUseDate:1,State:1,Street:1,TenantId:1,TenantName:1,UpdateDate:1,UpdateUserId:1,VendorNumberLength:1,VendorNumberPrefix:1,VendorNumberUseDate:1,ZipCode:1},PurchaseTax:{Description:1,Id:1,InsertDate:1,InsertUserId:1,Name:1,TaxRatePercentage:1,TenantId:1,TenantName:1,UpdateDate:1,UpdateUserId:1},SalesTax:{Description:1,Id:1,InsertDate:1,InsertUserId:1,Name:1,TaxRatePercentage:1,TenantId:1,TenantName:1,UpdateDate:1,UpdateUserId:1}}},Forms:{Membership:{ChangePassword:{FormTitle:1,SubmitButton:1,Success:1},ForgotPassword:{BackToLogin:1,FormInfo:1,FormTitle:1,SubmitButton:1,Success:1},Login:{FacebookButton:1,ForgotPassword:1,GoogleButton:1,LoginToYourAccount:1,OR:1,RememberMe:1,SignInButton:1,SignUpButton:1},ResetPassword:{BackToLogin:1,EmailSubject:1,FormTitle:1,SubmitButton:1,Success:1},SignUp:{AcceptTerms:1,ActivateEmailSubject:1,ActivationCompleteMessage:1,BackToLogin:1,ConfirmEmail:1,ConfirmPassword:1,DisplayName:1,Email:1,FormInfo:1,FormTitle:1,Password:1,SubmitButton:1,Success:1}}},Navigation:{LogoutLink:1,SiteTitle:1},Site:{AccessDenied:{ClickToChangeUser:1,ClickToLogin:1,LackPermissions:1,NotLoggedIn:1,PageTitle:1},BasicProgressDialog:{CancelTitle:1,PleaseWait:1},BulkServiceAction:{AllHadErrorsFormat:1,AllSuccessFormat:1,ConfirmationFormat:1,ErrorCount:1,NothingToProcess:1,SomeHadErrorsFormat:1,SuccessCount:1},Dashboard:{ContentDescription:1},Layout:{FooterCopyright:1,FooterInfo:1,FooterRights:1,GeneralSettings:1,Language:1,Theme:1,ThemeBlack:1,ThemeBlackLight:1,ThemeBlue:1,ThemeBlueLight:1,ThemeGreen:1,ThemeGreenLight:1,ThemePurple:1,ThemePurpleLight:1,ThemeRed:1,ThemeRedLight:1,ThemeYellow:1,ThemeYellowLight:1},RolePermissionDialog:{DialogTitle:1,EditButton:1,SaveSuccess:1},UserDialog:{EditPermissionsButton:1,EditRolesButton:1},UserPermissionDialog:{DialogTitle:1,Grant:1,Permission:1,Revoke:1,SaveSuccess:1},UserRoleDialog:{DialogTitle:1,SaveSuccess:1},ValidationError:{Title:1}},Validation:{AuthenticationError:1,CantFindUserWithEmail:1,CurrentPasswordMismatch:1,DeleteForeignKeyError:1,EmailConfirm:1,EmailInUse:1,InvalidActivateToken:1,InvalidResetToken:1,MinRequiredPasswordLength:1,SavePrimaryKeyError:1}});
}
