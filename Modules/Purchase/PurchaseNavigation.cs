using Serenity.Navigation;
using MyPages = Indotalent.Purchase.Pages;


[assembly: NavigationMenu(6900, "Purchase", icon: "fa-shopping-bag")]
[assembly: NavigationLink(6900, "Purchase/Vendor", typeof(MyPages.VendorController), icon: "fa-folder")]
[assembly: NavigationLink(6900, "Purchase/Purchase Order", typeof(MyPages.PurchaseOrderController), "fa-folder")]
[assembly: NavigationLink(6900, "Purchase/Bill", typeof(MyPages.BillController), icon: "fa-folder")]
[assembly: NavigationLink(6900, "Purchase/Bill Payment", typeof(MyPages.BillPaymentController), "fa-folder")]