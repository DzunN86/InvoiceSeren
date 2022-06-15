
using System.Collections.Generic;

namespace Indotalent.Common
{

    public class DashboardPageModel
    {
        public class MonthlyAmount
        {
            public string Month { get; set; }
            public double Amount { get; set; }
        }

        public class Kpi
        {
            public string Name { get; set; }
            public int Value { get;set; }
        }

        public class Grouped
		{
            public string Key { get; set; }
            public double Value { get; set; }
		}

        public string Currency { get; set; }
        public MonthlyAmount CurrentMonthSales { get; set; }
        public MonthlyAmount CurrentMonthPurchase { get; set; }
        public MonthlyAmount CurrentMonthMargin { get; set; }
        public int CurrentMonthSalesTransaction { get; set; }
        public int CurrentMonthPurchaseTransaction { get; set; }
        public List<MonthlyAmount> PurchaseGraph { get; set; }
        public List<MonthlyAmount> SalesGraph { get; set; }
        public Kpi PurchaseKPI1 { get; set; }
        public Kpi PurchaseKPI2 { get; set; }
        public Kpi PurchaseKPI3 { get; set; }
        public Kpi SalesKPI1 { get; set; }
        public Kpi SalesKPI2 { get; set; }
        public Kpi SalesKPI3 { get; set; }
    }
}

// namespace Indotalent.Common
// {
//     public class DashboardPageModel
//     {
//         public int ProductTotal { get; set; }
//         public int BrandTotal { get; set; }
//         public int VendorTotal { get; set; }
//         public int SalesChanelTotal { get; set; }
//         public int CustomerTotal { get; set; }
//     }
// }