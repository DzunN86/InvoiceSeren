using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Reporting;
using System;
using System.Collections.Generic;

namespace Indotalent.Sales
{
    [Report("SalesOrderPrint")]
    [ReportDesign(MVC.Views.Sales.SalesOrder.SalesOrderPrint)]
    [RequiredPermission("Sales:SalesOrder")]
    public class SalesOrderPrintModel : IReport, ICustomizeHtmlToPdf
    {
        public SalesOrderPrintModel(ISqlConnections sqlConnections)
        {
            SqlConnections = sqlConnections ?? throw new ArgumentNullException(nameof(sqlConnections));
        }

        public int Id { get; set; }

        protected ISqlConnections SqlConnections { get; }

        public object GetData()
        {
            var data = new SalesOrderPrintData();

            using (var connection = SqlConnections.NewFor<SalesOrderRow>())
            {

                data.Header = connection.TryById<SalesOrderRow>(Id, q => q
                     .SelectTableFields());

                var od = SalesOrderDetailRow.Fields;
                data.Details = connection.List<SalesOrderDetailRow>(q => q
                    .SelectTableFields()
                    .Select(od.ProductName)
                    .Where(od.SalesOrderId == Id));

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

    public class SalesOrderPrintData
    {
        public SalesOrderRow Header { get; set; }
        public List<SalesOrderDetailRow> Details { get; set; }
        public CustomerRow Customer { get; set; }
        public Settings.MyCompanyRow Company { get; set; }
    }
}
