using Indotalent.Administration;
using Indotalent.Purchase;
using Indotalent.Sales;
using Microsoft.AspNetCore.Mvc;
using Serenity;
using Serenity.Abstractions;
using Serenity.Data;
using Serenity.Web;
using System;
using System.Collections.Generic;
using System.Linq;

namespace Indotalent.Common.Pages
{
    [Route("Dashboard/[action]")]
    public class DashboardController : Controller
    {
        protected ISqlConnections SqlConnections { get; }
        protected IUserRetrieveService UserRetrieveService { get; }

        public DashboardController(ISqlConnections sqlConnections, IUserRetrieveService userRetrieveService)
        {
            SqlConnections = sqlConnections;
            UserRetrieveService = userRetrieveService;
        }

        [PageAuthorize, HttpGet, Route("~/")]
        public ActionResult Index()
        {
            var dashboardPageModel = new DashboardPageModel();
            var currentMonth = DateTime.Now.Month;
            var currentYear = DateTime.Now.Year;
            var currentDay = new DateTime(currentYear, currentMonth, 1);

            var user = (UserDefinition)User.GetUserDefinition(UserRetrieveService);
            using (var connection = SqlConnections.NewFor<TenantRow>())
            {
                var tenant = connection.ById<TenantRow>(user.TenantId);
                dashboardPageModel.Currency = tenant.Currency;

                var sales = connection.List<SalesOrderRow>(x => x
                                        .SelectTableFields()
                                        .Select(SalesOrderRow.Fields.CustomerName)
                                        .Select(SalesOrderRow.Fields.SalesChannelName)
                                        .Where(SalesOrderRow.Fields.TenantId == tenant.TenantId.Value));

                var currentSales = sales.Where(x => 
                                            x.OrderDate.Value.Year == currentYear && 
                                            x.OrderDate.Value.Month == currentMonth);

                var purchase = connection.List<PurchaseOrderRow>(x => x
                                            .SelectTableFields()
                                            .Select(PurchaseOrderRow.Fields.VendorName)
                                            .Where(PurchaseOrderRow.Fields.TenantId == tenant.TenantId.Value));

                var currentPurchase = purchase.Where(x =>
                                                x.OrderDate.Value.Year == currentYear &&
                                                x.OrderDate.Value.Month == currentMonth);


                dashboardPageModel.CurrentMonthPurchase = new DashboardPageModel.MonthlyAmount { Month = currentDay.ToString("yyyy-MM"), Amount = currentPurchase.Sum(x => x.Total.Value) };
                dashboardPageModel.CurrentMonthSales = new DashboardPageModel.MonthlyAmount { Month = currentDay.ToString("yyyy-MM"), Amount = currentSales.Sum(x => x.Total.Value) };
                
                var transSales = currentSales.Count();
                var transPurchase = currentPurchase.Count();
                var transTotal = transSales + transPurchase;

                dashboardPageModel.CurrentMonthPurchaseTransaction = (int)(transPurchase * 100.0 / transTotal);
                dashboardPageModel.CurrentMonthSalesTransaction = (int)(transSales * 100.0 / transTotal);

                var salesGrouped = sales.GroupBy(x => x.SalesChannelName)
                                        .Select(x => new DashboardPageModel.Grouped { Key = x.Key, Value = x.Sum(y => y.Total.Value) })
                                        .OrderByDescending(x => x.Value)
                                        .ToList();
                
                var salesKPI1 = new DashboardPageModel.Kpi
                {
                    Name = "KPI1",
                    Value = 0
                };

                var salesKPI2 = new DashboardPageModel.Kpi
                {
                    Name = "KPI2",
                    Value = 0
                };

                var salesKPI3 = new DashboardPageModel.Kpi
                {
                    Name = "KPI3",
                    Value = 0
                };

                var index = 0;
				foreach (var item in salesGrouped)
				{
					if (index == 0)
                    {
                        salesKPI1.Name = salesGrouped[0].Key;
                        salesKPI1.Value = (int)(salesGrouped[0].Value * 100.0 / salesGrouped.Sum(x => x.Value));
                    }

					if (index == 1)
                    {
                        salesKPI2.Name = salesGrouped[1].Key;
                        salesKPI2.Value = (int)(salesGrouped[1].Value * 100.0 / salesGrouped.Sum(x => x.Value));
                    }

					if (index == 2)
                    {
                        salesKPI3.Name = salesGrouped[2].Key;
                        salesKPI3.Value = (int)(salesGrouped[2].Value * 100.0 / salesGrouped.Sum(x => x.Value));
                    }

                    index++;
				}

                dashboardPageModel.SalesKPI1 = salesKPI1;
                dashboardPageModel.SalesKPI2 = salesKPI2;
                dashboardPageModel.SalesKPI3 = salesKPI3;

                var purchaseGrouped = purchase.GroupBy(x => x.VendorName)
                                        .Select(x => new DashboardPageModel.Grouped { Key = x.Key, Value = x.Sum(y => y.Total.Value) })
                                        .OrderByDescending(x => x.Value)
                                        .ToList();

                var purchaseKPI1 = new DashboardPageModel.Kpi
                {
                    Name = "KPI1",
                    Value = 0
                };

                var purchaseKPI2 = new DashboardPageModel.Kpi
                {
                    Name = "KPI2",
                    Value = 0
                };

                var purchaseKPI3 = new DashboardPageModel.Kpi
                {
                    Name = "KPI3",
                    Value = 0
                };

                index = 0;
                foreach (var item in purchaseGrouped)
                {
                    if (index == 0)
                    {
                        purchaseKPI1.Name = purchaseGrouped[0].Key;
                        purchaseKPI1.Value = (int)(purchaseGrouped[0].Value * 100.0 / purchaseGrouped.Sum(x => x.Value));
                    }

                    if (index == 1)
                    {
                        purchaseKPI2.Name = purchaseGrouped[1].Key;
                        purchaseKPI2.Value = (int)(purchaseGrouped[1].Value * 100.0 / purchaseGrouped.Sum(x => x.Value));
                    }

                    if (index == 2)
                    {
                        purchaseKPI3.Name = purchaseGrouped[2].Key;
                        purchaseKPI3.Value = (int)(purchaseGrouped[2].Value * 100.0 / purchaseGrouped.Sum(x => x.Value));
                    }

                    index++;
                }

                dashboardPageModel.PurchaseKPI1 = purchaseKPI1;
                dashboardPageModel.PurchaseKPI2 = purchaseKPI2;
                dashboardPageModel.PurchaseKPI3 = purchaseKPI3;

                var purchaseMonthly = new List<DashboardPageModel.MonthlyAmount>();
                var salesMonthly = new List<DashboardPageModel.MonthlyAmount>();

                var endDate = new DateTime(currentYear, currentMonth, 1);
                var startDate = endDate.AddMonths(-5);
				while (startDate <= endDate)
                {
                    purchaseMonthly.Add(new DashboardPageModel.MonthlyAmount { Month = startDate.ToString("yyyy-MM"), Amount = purchase.Where(x => x.OrderDate.Value.Year == startDate.Year && x.OrderDate.Value.Month == startDate.Month).Sum(x => x.Total.Value) });
                    salesMonthly.Add(new DashboardPageModel.MonthlyAmount { Month = startDate.ToString("yyyy-MM"), Amount = sales.Where(x => x.OrderDate.Value.Year == startDate.Year && x.OrderDate.Value.Month == startDate.Month).Sum(x => x.Total.Value) });
                    startDate = startDate.AddMonths(1);
                }

                dashboardPageModel.PurchaseGraph = purchaseMonthly;
                dashboardPageModel.SalesGraph = salesMonthly;
                dashboardPageModel.CurrentMonthMargin = new DashboardPageModel.MonthlyAmount { Month = "2022-01", Amount = dashboardPageModel.CurrentMonthSales.Amount - dashboardPageModel.CurrentMonthPurchase.Amount };
            }


            return View(MVC.Views.Common.Dashboard.DashboardIndex, dashboardPageModel);
        }
    }
}


// using Microsoft.AspNetCore.Mvc;
// using Serenity;
// using Serenity.Abstractions;
// using Serenity.Data;
// using Serenity.Web;
// using System;

// namespace Indotalent.Common.Pages
// {
//     [Route("Dashboard/[action]")]
//     public class DashboardController : Controller
//     {
//         [PageAuthorize, HttpGet, Route("~/")]
//         public ActionResult Index(
//         	//<if:Northwind>
//         	[FromServices] ITwoLevelCache cache,
//         	[FromServices] ISqlConnections sqlConnections
//         	//</if:Northwind>
//         	)
//         {
//             //<if:Northwind>
//             if (cache is null)
//             	throw new ArgumentNullException(nameof(cache));

//             if (sqlConnections is null)
//             	throw new ArgumentNullException(nameof(sqlConnections));

//             var o = Indotalent.Merchandise.ProductRow.Fields;

//             var cachedModel = cache.GetLocalStoreOnly("DashboardPageModel", TimeSpan.FromMinutes(5),
//                 o.GenerationKey, () =>
//                 {
//                     var model = new DashboardPageModel();
//                     using (var connection = sqlConnections.NewFor<Merchandise.ProductRow>())
//                     {
//                         model.ProductTotal = connection.Count<Merchandise.ProductRow>(); 
//                         model.BrandTotal = connection.Count<Merchandise.BrandRow>();
//                         model.VendorTotal = connection.Count<Purchase.VendorRow>();
//                         model.CustomerTotal = connection.Count<Sales.CustomerRow>();
//                     }
//                     // using (var connection = sqlConnections.NewFor<Purchase.VendorRow>())
//                     // {
//                     // }
//                     return model;
//                 });
//             return View(MVC.Views.Common.Dashboard.DashboardIndex, cachedModel);
//             //<else>
//             //return View(MVC.Views.Common.Dashboard.DashboardIndex, new DashboardPageModel());
//             //</if:Northwind>
//         }
//     }
// }
