
namespace MVC
{
    public static class Views
    {
        public static class Administration
        {
            public static class Language
            {
                public const string LanguageIndex = "~/Modules/Administration/Language/LanguageIndex.cshtml";
            }

            public static class Role
            {
                public const string RoleIndex = "~/Modules/Administration/Role/RoleIndex.cshtml";
            }

            public static class Tenant
            {
                public const string TenantIndex = "~/Modules/Administration/Tenant/TenantIndex.cshtml";
            }

            public static class Translation
            {
                public const string TranslationIndex = "~/Modules/Administration/Translation/TranslationIndex.cshtml";
            }

            public static class User
            {
                public const string UserIndex = "~/Modules/Administration/User/UserIndex.cshtml";
            }

        }

        public static class Common
        {
            public static class Dashboard
            {
                public const string DashboardIndex = "~/Modules/Common/Dashboard/DashboardIndex.cshtml";
            }
        }

        public static class Errors
        {
            public const string AccessDenied = "~/Views/Errors/AccessDenied.cshtml";
            public const string ValidationError = "~/Views/Errors/ValidationError.cshtml";
        }

        public static class Membership
        {
            public static class Account
            {
                public const string AccountLogin = "~/Modules/Membership/Account/AccountLogin.cshtml";
                public static class ChangePassword
                {
                    public const string AccountChangePassword = "~/Modules/Membership/Account/ChangePassword/AccountChangePassword.cshtml";
                }

                public static class ForgotPassword
                {
                    public const string AccountForgotPassword = "~/Modules/Membership/Account/ForgotPassword/AccountForgotPassword.cshtml";
                }

                public static class ResetPassword
                {
                    public const string AccountResetPassword = "~/Modules/Membership/Account/ResetPassword/AccountResetPassword.cshtml";
                    public const string AccountResetPasswordEmail = "~/Modules/Membership/Account/ResetPassword/AccountResetPasswordEmail.cshtml";
                }

                public static class SignUp
                {
                    public const string AccountActivateEmail = "~/Modules/Membership/Account/SignUp/AccountActivateEmail.cshtml";
                    public const string AccountSignUp = "~/Modules/Membership/Account/SignUp/AccountSignUp.cshtml";
                }
            }

        }

        public static class Merchandise
        {
            public static class Brand
            {
                public const string BrandIndex = "~/Modules/Merchandise/Brand/BrandIndex.cshtml";
            }

            public static class Category
            {
                public const string CategoryIndex = "~/Modules/Merchandise/Category/CategoryIndex.cshtml";
            }

            public static class Colour
            {
                public const string ColourIndex = "~/Modules/Merchandise/Colour/ColourIndex.cshtml";
            }

            public static class Flavour
            {
                public const string FlavourIndex = "~/Modules/Merchandise/Flavour/FlavourIndex.cshtml";
            }

            public static class Product
            {
                public const string ProductIndex = "~/Modules/Merchandise/Product/ProductIndex.cshtml";
            }

            public static class Size
            {
                public const string SizeIndex = "~/Modules/Merchandise/Size/SizeIndex.cshtml";
            }

            public static class Uom
            {
                public const string UomIndex = "~/Modules/Merchandise/Uom/UomIndex.cshtml";
            }

        }

        public static class Purchase
        {
            public static class Bill
            {
                public const string BillIndex = "~/Modules/Purchase/Bill/BillIndex.cshtml";
            }

            public static class BillDetail
            {
                public const string BillDetailIndex = "~/Modules/Purchase/BillDetail/BillDetailIndex.cshtml";
            }

            public static class BillPayment
            {
                public const string BillPaymentIndex = "~/Modules/Purchase/BillPayment/BillPaymentIndex.cshtml";
            }

            public static class PurchaseOrder
            {
                public const string PurchaseOrderIndex = "~/Modules/Purchase/PurchaseOrder/PurchaseOrderIndex.cshtml";
            }

            public static class PurchaseOrderDetail
            {
                public const string PurchaseOrderDetailIndex = "~/Modules/Purchase/PurchaseOrderDetail/PurchaseOrderDetailIndex.cshtml";
            }

            public static class Vendor
            {
                public const string VendorIndex = "~/Modules/Purchase/Vendor/VendorIndex.cshtml";
            }

            public static class VendorContact
            {
                public const string VendorContactIndex = "~/Modules/Purchase/VendorContact/VendorContactIndex.cshtml";
            }

        }

        public static class Sales
        {
            public static class Customer
            {
                public const string CustomerIndex = "~/Modules/Sales/Customer/CustomerIndex.cshtml";
            }

            public static class CustomerContact
            {
                public const string CustomerContactIndex = "~/Modules/Sales/CustomerContact/CustomerContactIndex.cshtml";
            }

            public static class Invoice
            {
                public const string InvoiceIndex = "~/Modules/Sales/Invoice/InvoiceIndex.cshtml";
            }

            public static class InvoiceDetail
            {
                public const string InvoiceDetailIndex = "~/Modules/Sales/InvoiceDetail/InvoiceDetailIndex.cshtml";
            }

            public static class InvoicePayment
            {
                public const string InvoicePaymentIndex = "~/Modules/Sales/InvoicePayment/InvoicePaymentIndex.cshtml";
            }

            public static class SalesChannel
            {
                public const string SalesChannelIndex = "~/Modules/Sales/SalesChannel/SalesChannelIndex.cshtml";
            }

            public static class SalesOrder
            {
                public const string SalesOrderIndex = "~/Modules/Sales/SalesOrder/SalesOrderIndex.cshtml";
            }

            public static class SalesOrderDetail
            {
                public const string SalesOrderDetailIndex = "~/Modules/Sales/SalesOrderDetail/SalesOrderDetailIndex.cshtml";
            }

        }

        public static class Settings
        {
            public static class CashBank
            {
                public const string CashBankIndex = "~/Modules/Settings/CashBank/CashBankIndex.cshtml";
            }

            public static class MyCompany
            {
                public const string MyCompanyIndex = "~/Modules/Settings/MyCompany/MyCompanyIndex.cshtml";
            }

            public static class PurchaseTax
            {
                public const string PurchaseTaxIndex = "~/Modules/Settings/PurchaseTax/PurchaseTaxIndex.cshtml";
            }

            public static class SalesTax
            {
                public const string SalesTaxIndex = "~/Modules/Settings/SalesTax/SalesTaxIndex.cshtml";
            }
        }

        public static class Shared
        {
            public const string _Layout = "~/Views/Shared/_Layout.cshtml";
            public const string _LayoutHead = "~/Views/Shared/_LayoutHead.cshtml";
            public const string _LayoutNoNavigation = "~/Views/Shared/_LayoutNoNavigation.cshtml";
            public const string _Sidebar = "~/Views/Shared/_Sidebar.cshtml";
            public const string Error = "~/Views/Shared/Error.cshtml";
        }

    }
}
