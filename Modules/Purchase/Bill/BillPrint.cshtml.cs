using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Reporting;
using System;
using System.Collections.Generic;

namespace Indotalent.Purchase
{
    [Report("BillPrint")]
    [ReportDesign(MVC.Views.Purchase.Bill.BillPrint)]
    [RequiredPermission("Purchase:Bill")]
    public class BillPrintModel : IReport, ICustomizeHtmlToPdf
    {
        public BillPrintModel(ISqlConnections sqlConnections)
        {
            SqlConnections = sqlConnections ?? throw new ArgumentNullException(nameof(sqlConnections));
        }

        public int Id { get; set; }

        protected ISqlConnections SqlConnections { get; }

        public object GetData()
        {
            var data = new BillPrintData();

            using (var connection = SqlConnections.NewFor<BillRow>())
            {
                var h = BillRow.Fields;
                data.Header = connection.TryById<BillRow>(Id, q => q
                     .SelectTableFields()
                     .Select(h.PurchaseOrderNumber)
                     .Select(h.VendorId));

                var d = BillDetailRow.Fields;
                data.Details = connection.List<BillDetailRow>(q => q
                    .SelectTableFields()
                    .Select(d.ProductName)
                    .Where(d.BillId == Id));

                data.Vendor = connection.TryById<VendorRow>(data.Header.VendorId, q => q
                     .SelectTableFields());

                var c = Settings.MyCompanyRow.Fields;
                data.Company = connection.TryById<Settings.MyCompanyRow>(data.Header.TenantId, q => q
                     .SelectTableFields());
            }

            return data;
        }

        public void Customize(IHtmlToPdfOptions options)
        {
        }
    }

    public class BillPrintData
    {
        public BillRow Header { get; set; }
        public List<BillDetailRow> Details { get; set; }
        public VendorRow Vendor { get; set; }
        public Settings.MyCompanyRow Company { get; set; }
    }
}
