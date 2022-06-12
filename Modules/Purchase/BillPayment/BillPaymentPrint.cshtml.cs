using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Reporting;
using System;
using System.Collections.Generic;

namespace Indotalent.Purchase
{
    [Report("BillPaymentPrint")]
    [ReportDesign(MVC.Views.Purchase.BillPayment.BillPaymentPrint)]
    [RequiredPermission("Purchase:BillPayment")]
    public class BillPaymentPrintModel : IReport, ICustomizeHtmlToPdf
    {
        public BillPaymentPrintModel(ISqlConnections sqlConnections)
        {
            SqlConnections = sqlConnections ?? throw new ArgumentNullException(nameof(sqlConnections));
        }

        public int Id { get; set; }

        protected ISqlConnections SqlConnections { get; }

        public object GetData()
        {
            var data = new BillPaymentPrintData();

            using (var connection = SqlConnections.NewFor<BillPaymentRow>())
            {
                var h = BillPaymentRow.Fields;
                data.Header = connection.TryById<BillPaymentRow>(Id, q => q
                     .SelectTableFields()
                     .Select(h.VendorId)
                     .Select(h.VendorName)
                     .Select(h.BillNumber)
                     .Select(h.CashBankName));

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

    public class BillPaymentPrintData
    {
        public BillPaymentRow Header { get; set; }
        public VendorRow Vendor { get; set; }
        public Settings.MyCompanyRow Company { get; set; }
    }

}
