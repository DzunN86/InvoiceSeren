using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Reporting;
using System;
using System.Collections.Generic;

namespace Indotalent.Sales
{
    [Report("InvoicePrint")]
    [ReportDesign(MVC.Views.Sales.Invoice.InvoicePrint)]
    [RequiredPermission("Sales:Invoice")]
    public class InvoicePrintModel : IReport, ICustomizeHtmlToPdf
    {
        public InvoicePrintModel(ISqlConnections sqlConnections)
        {
            SqlConnections = sqlConnections ?? throw new ArgumentNullException(nameof(sqlConnections));
        }

        public int Id { get; set; }

        protected ISqlConnections SqlConnections { get; }

        public object GetData()
        {
            var data = new InvoicePrintData();

            using (var connection = SqlConnections.NewFor<InvoiceRow>())
            {
                var h = InvoiceRow.Fields;
                data.Header = connection.TryById<InvoiceRow>(Id, q => q
                     .SelectTableFields()
                     .Select(h.SalesOrderNumber)
                     .Select(h.CustomerId));

                var d = InvoiceDetailRow.Fields;
                data.Details = connection.List<InvoiceDetailRow>(q => q
                    .SelectTableFields()
                    .Select(d.ProductName)
                    .Where(d.InvoiceId == Id));

                data.Customer = connection.TryById<CustomerRow>(data.Header.CustomerId, q => q
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

    public class InvoicePrintData
    {
        public InvoiceRow Header { get; set; }
        public List<InvoiceDetailRow> Details { get; set; }
        public CustomerRow Customer { get; set; }
        public Settings.MyCompanyRow Company { get; set; }
    }
}
