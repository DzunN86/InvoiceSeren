using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Reporting;
using System;
using System.Collections.Generic;

namespace Indotalent.Merchandise
{
    [Report("ProductPrint")]
    [ReportDesign(MVC.Views.Merchandise.Product.ProductPrint)]
    [RequiredPermission("Merchandise:Product")]
    public class ProductPrintModel : IReport, ICustomizeHtmlToPdf
    {
        public ProductPrintModel(ISqlConnections sqlConnections)
        {
            SqlConnections = sqlConnections ?? throw new ArgumentNullException(nameof(sqlConnections));
        }

        public int Id { get; set; }

        protected ISqlConnections SqlConnections { get; }

        public object GetData()
        {
            var data = new ProductPrintData();

            using (var connection = SqlConnections.NewFor<ProductRow>())
            {
                var h = ProductRow.Fields;
                data.Header = connection.TryById<ProductRow>(Id, q => q
                     .SelectTableFields()
                     .Select(h.CurrencyName)
                     .Select(h.PurchaseTaxName)
                     .Select(h.SalesTaxName)
                     .Select(h.UomName)
                     .Select(h.BrandName)
                     .Select(h.CategoryName)
                     .Select(h.SizeName)
                     .Select(h.ColourName)
                     .Select(h.FlavourName));

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

    public class ProductPrintData
    {
        public ProductRow Header { get; set; }
        public Settings.MyCompanyRow Company { get; set; }
    }
}
