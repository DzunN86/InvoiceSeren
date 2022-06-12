using Indotalent.Administration;
using Indotalent.Administration.Entities;
using Indotalent.Sales;
using Indotalent.Settings;
using Serenity.Data;
using Serenity.Services;
using System.Data;
using System.Globalization;
using System.Linq;

namespace Indotalent
{
    public class GetNextNumberRequest : ServiceRequest
    {
        public string Prefix { get; set; }
        public int Length { get; set; }
    }
    public class GetNextNumberResponse : ServiceResponse
    {
        public long Number { get; set; }
        public string Serial { get; set; }
    }


    public class MultiTenantHelper
    {
        public static GetNextNumberResponse GetNextNumber(IDbConnection connection,
                                                          GetNextNumberRequest request, 
                                                          Field field,
                                                          int? tenantId)
        {
            var prefix = request.Prefix ?? "";

            var max = connection.Query<string>(new SqlQuery()
                .From(field.Fields)
                .Select(Sql.Max(field.Expression))
                .Where("TenantId = " + tenantId)
                .Where(
                    field.StartsWith(prefix) &&
                    field >= prefix.PadRight(request.Length, '0') &&
                    field <= prefix.PadRight(request.Length, '9')))
                .FirstOrDefault();

            var response = new GetNextNumberResponse
            {
                Number = max == null ||
                !long.TryParse(max[prefix.Length..], out long l) ? 1 : l + 1
            };

            if (!(request.Length > prefix.Length))
            {
                request.Length = prefix.Length + response.Number.ToString(CultureInfo.InvariantCulture).Length + 3;
            }

            response.Serial = prefix + response.Number.ToString(CultureInfo.InvariantCulture)
                .PadLeft(request.Length - prefix.Length, '0');

            return response;
        }
        public static int CreateTenant(IDbConnection connection, string name, string currency, int maxUser)
        {
            var tenantId = (int)connection.InsertAndGetID(new TenantRow
            {
                TenantName = name,
                Currency = currency,
                MaximumUser = maxUser,
                ProductNumberPrefix = "ART",
                ProductNumberUseDate = false,
                ProductNumberLength = 16,
                CustomerNumberPrefix = "CST",
                CustomerNumberUseDate = true,
                CustomerNumberLength = 16,
                SalesNumberPrefix = "SO",
                SalesNumberUseDate = true,
                SalesNumberLength = 16,
                InvoiceNumberPrefix = "INV",
                InvoiceNumberUseDate = true,
                InvoiceNumberLength = 16,
                InvoicePaymentNumberPrefix = "IVPY",
                InvoicePaymentNumberUseDate = true,
                InvoicePaymentNumberLength = 16,
                VendorNumberPrefix = "VND",
                VendorNumberUseDate = true,
                VendorNumberLength = 16,
                PurchaseNumberPrefix = "PO",
                PurchaseNumberUseDate = true,
                PurchaseNumberLength = 16,
                BillNumberPrefix = "BLL",
                BillNumberUseDate = true,
                BillNumberLength = 16,
                BillPaymentNumberPrefix = "BLPY",
                BillPaymentNumberUseDate = true,
                BillPaymentNumberLength = 16,
            });

            return tenantId;
        }

        public static void GenerateDefaultBusinessEntity(IDbConnection dbConnection, int? tenantId)
        {
            var connection = dbConnection;

            //purchase tax
            connection.Insert(new PurchaseTaxRow
            {
                Name = "NOTAX",
                TaxRatePercentage = 0,
                TenantId = tenantId
            });

            //sales tax
            connection.Insert(new SalesTaxRow
            {
                Name = "NOTAX",
                TaxRatePercentage = 0,
                TenantId = tenantId
            });

            //sales channel
            connection.Insert(new SalesChannelRow
            {
                Name = "B2B",
                TenantId = tenantId
            });
            connection.Insert(new SalesChannelRow
            {
                Name = "ECommerce",
                TenantId = tenantId
            });
            connection.Insert(new SalesChannelRow
            {
                Name = "Marketplace",
                TenantId = tenantId
            });

            //cash bank
            connection.Insert(new CashBankRow
            {
                Name = "Default Bank",
                AccountNumber = "111-222-333",
                TenantId = tenantId
            });
        }

        public static void GenerateDefaultTenantAdminPermission(int tenantAdminId, IDbConnection dbConnection)
        {
            var connection = dbConnection;

            //administration
            connection.Insert(new UserPermissionRow
            {
                UserId = tenantAdminId,
                PermissionKey = "Administration:Security",
                Granted = true
            });

            //settings
            connection.Insert(new UserPermissionRow
            {
                UserId = tenantAdminId,
                PermissionKey = "Settings:MyCompany",
                Granted = true
            });
            connection.Insert(new UserPermissionRow
            {
                UserId = tenantAdminId,
                PermissionKey = "Settings:CashBank",
                Granted = true
            });
            connection.Insert(new UserPermissionRow
            {
                UserId = tenantAdminId,
                PermissionKey = "Settings:PurchaseTax",
                Granted = true
            });
            connection.Insert(new UserPermissionRow
            {
                UserId = tenantAdminId,
                PermissionKey = "Settings:SalesTax",
                Granted = true
            });

            //merchandise
            connection.Insert(new UserPermissionRow
            {
                UserId = tenantAdminId,
                PermissionKey = "Merchandise:Uom",
                Granted = true
            });
            connection.Insert(new UserPermissionRow
            {
                UserId = tenantAdminId,
                PermissionKey = "Merchandise:Size",
                Granted = true
            });
            connection.Insert(new UserPermissionRow
            {
                UserId = tenantAdminId,
                PermissionKey = "Merchandise:Colour",
                Granted = true
            });
            connection.Insert(new UserPermissionRow
            {
                UserId = tenantAdminId,
                PermissionKey = "Merchandise:Flavour",
                Granted = true
            });
            connection.Insert(new UserPermissionRow
            {
                UserId = tenantAdminId,
                PermissionKey = "Merchandise:Brand",
                Granted = true
            });
            connection.Insert(new UserPermissionRow
            {
                UserId = tenantAdminId,
                PermissionKey = "Merchandise:Category",
                Granted = true
            });
            connection.Insert(new UserPermissionRow
            {
                UserId = tenantAdminId,
                PermissionKey = "Merchandise:Product",
                Granted = true
            });

            //purchase
            connection.Insert(new UserPermissionRow
            {
                UserId = tenantAdminId,
                PermissionKey = "Purchase:Vendor",
                Granted = true
            });
            connection.Insert(new UserPermissionRow
            {
                UserId = tenantAdminId,
                PermissionKey = "Purchase:PurchaseOrder",
                Granted = true
            });
            connection.Insert(new UserPermissionRow
            {
                UserId = tenantAdminId,
                PermissionKey = "Purchase:Bill",
                Granted = true
            });
            connection.Insert(new UserPermissionRow
            {
                UserId = tenantAdminId,
                PermissionKey = "Purchase:BillPayment",
                Granted = true
            });

            //sales
            connection.Insert(new UserPermissionRow
            {
                UserId = tenantAdminId,
                PermissionKey = "Sales:SalesChannel",
                Granted = true
            });
            connection.Insert(new UserPermissionRow
            {
                UserId = tenantAdminId,
                PermissionKey = "Sales:Customer",
                Granted = true
            });
            connection.Insert(new UserPermissionRow
            {
                UserId = tenantAdminId,
                PermissionKey = "Sales:SalesOrder",
                Granted = true
            });
            connection.Insert(new UserPermissionRow
            {
                UserId = tenantAdminId,
                PermissionKey = "Sales:Invoice",
                Granted = true
            });
            connection.Insert(new UserPermissionRow
            {
                UserId = tenantAdminId,
                PermissionKey = "Sales:InvoicePayment",
                Granted = true
            });

        }
    }
}
