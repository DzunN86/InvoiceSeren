using Serenity.Navigation;
using MyPages = Indotalent.Sales.Pages;


[assembly: NavigationMenu(5900, "Sales", icon: "fa-shopping-cart")]
[assembly: NavigationLink(5900, "Sales/Sales Channel", typeof(MyPages.SalesChannelController), icon: "fa-folder")]
[assembly: NavigationLink(5900, "Sales/Customer", typeof(MyPages.CustomerController), icon: "fa-folder")]
[assembly: NavigationLink(5900, "Sales/Sales Order", typeof(MyPages.SalesOrderController), icon: "fa-folder")]
[assembly: NavigationLink(5900, "Sales/Invoice", typeof(MyPages.InvoiceController), icon: "fa-folder")]
[assembly: NavigationLink(5900, "Sales/Invoice Payment", typeof(MyPages.InvoicePaymentController), icon: "fa-folder")]