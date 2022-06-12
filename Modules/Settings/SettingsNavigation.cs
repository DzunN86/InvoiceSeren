using Serenity.Navigation;
using MyPages = Indotalent.Settings.Pages;

[assembly: NavigationMenu(8900, "Settings", icon: "fa-gear")]
[assembly: NavigationLink(8900, "Settings/My Company", typeof(MyPages.MyCompanyController), icon: "fa-home")]
[assembly: NavigationLink(8900, "Settings/Cash Bank", typeof(MyPages.CashBankController), icon: "fa-bank")]
[assembly: NavigationLink(8900, "Settings/Purchase Tax", typeof(MyPages.PurchaseTaxController), icon: "fa-folder")]
[assembly: NavigationLink(8900, "Settings/Sales Tax", typeof(MyPages.SalesTaxController), icon: "fa-folder")]