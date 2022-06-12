using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Reporting;
using System;
using System.Collections.Generic;

namespace Indotalent.Purchase
{
    [Report("PurchaseOrderPrint")]
    [ReportDesign(MVC.Views.Purchase.PurchaseOrder.PurchaseOrderPrint)]
    [RequiredPermission("Purchase:PurchaseOrder")]
    public class PurchaseOrderPrintModel : IReport, ICustomizeHtmlToPdf
    {
        public PurchaseOrderPrintModel(ISqlConnections sqlConnections)
        {
            SqlConnections = sqlConnections ?? throw new ArgumentNullException(nameof(sqlConnections));
        }

        public int Id { get; set; }

        protected ISqlConnections SqlConnections { get; }

        public object GetData()
        {
            var data = new PurchaseOrderPrintData();

            using (var connection = SqlConnections.NewFor<PurchaseOrderRow>())
            {

                data.Header = connection.TryById<PurchaseOrderRow>(Id, q => q
                     .SelectTableFields());

                var od = PurchaseOrderDetailRow.Fields;
                data.Details = connection.List<PurchaseOrderDetailRow>(q => q
                    .SelectTableFields()
                    .Select(od.ProductName)
                    .Where(od.PurchaseOrderId == Id));

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

    public class PurchaseOrderPrintData
    {
        public PurchaseOrderRow Header { get; set; }
        public List<PurchaseOrderDetailRow> Details { get; set; }
        public VendorRow Vendor { get; set; }
        public Settings.MyCompanyRow Company { get; set; }
    }
}
