using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Reporting;
using System;
using System.Collections.Generic;

namespace Indotalent.Sales
{
    [Report("InvoicePaymentPrint")]
    [ReportDesign(MVC.Views.Sales.InvoicePayment.InvoicePaymentPrint)]
    [RequiredPermission("Sales:InvoicePayment")]
    public class InvoicePaymentPrintModel : IReport, ICustomizeHtmlToPdf
    {
        public InvoicePaymentPrintModel(ISqlConnections sqlConnections)
        {
            SqlConnections = sqlConnections ?? throw new ArgumentNullException(nameof(sqlConnections));
        }

        public int Id { get; set; }

        protected ISqlConnections SqlConnections { get; }

        public object GetData()
        {
            var data = new InvoicePaymentPrintData();

            using (var connection = SqlConnections.NewFor<InvoicePaymentRow>())
            {
                var h = InvoicePaymentRow.Fields;
                data.Header = connection.TryById<InvoicePaymentRow>(Id, q => q
                     .SelectTableFields()
                     .Select(h.CustomerId)
                     .Select(h.CustomerName)
                     .Select(h.InvoiceNumber)
                     .Select(h.CashBankName));

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

    public class InvoicePaymentPrintData
    {
        public InvoicePaymentRow Header { get; set; }
        public CustomerRow Customer { get; set; }
        public Settings.MyCompanyRow Company { get; set; }
    }

}
