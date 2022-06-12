using Indotalent.Administration;
using Serenity;
using Serenity.Abstractions;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.SaveRequest<Indotalent.Merchandise.ProductRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = Indotalent.Merchandise.ProductRow;

namespace Indotalent.Merchandise
{
    public interface IProductSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

    public class ProductSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, IProductSaveHandler
    {
        private IUserRetrieveService UserRetriever { get; }
        public ProductSaveHandler(IRequestContext context, IUserRetrieveService userRetriever)
             : base(context)
        {
            UserRetriever = userRetriever;
        }
        protected override void BeforeSave()
        {
            base.BeforeSave();

            if (this.IsCreate)
            {
                if (Row.Name.ToLower().Equals("auto"))
                {
                    var tenant = UnitOfWork.Connection.ById<TenantRow>(Row.TenantId);
                    var request = new GetNextNumberRequest()
                    {
                        Prefix = tenant.ProductNumberUseDate.Value ? tenant.ProductNumberPrefix + "/" + DateTime.Now.ToString("yyyyMMdd") : tenant.ProductNumberPrefix,
                        Length = tenant.ProductNumberLength.Value
                    };
                    var respone = MultiTenantHelper.GetNextNumber(UnitOfWork.Connection, request, MyRow.Fields.Name, tenant.TenantId);
                    Row.Name = respone.Serial;
                }

            }
        }

        public static string ValidateInternalCode(IDbConnection connection, int? tenantId, string internalCode, ITextLocalizer localizer)
        {
            internalCode = internalCode.TrimToNull();

            if (!String.IsNullOrEmpty(internalCode))
            {
                var existingProduct = connection.TryFirst<ProductRow>(x => x
                                                .SelectTableFields()
                                                .Where(ProductRow.Fields.TenantId == tenantId.Value &&
                                                       ProductRow.Fields.InternalCode == internalCode));
                if (existingProduct != null)
                {
                    throw new ValidationError("UniqueViolation", "InternalCode",
                        "A product with same internal code exists. Please choose another!");
                }
            }

            return internalCode;
        }

        public static string ValidateBarcode(IDbConnection connection, int? tenantId, string barcode, ITextLocalizer localizer)
        {
            barcode = barcode.TrimToNull();

            if (!String.IsNullOrEmpty(barcode))
            {
                var existingProduct = connection.TryFirst<ProductRow>(x => x
                                                .SelectTableFields()
                                                .Where(ProductRow.Fields.TenantId == tenantId.Value &&
                                                       ProductRow.Fields.Barcode == barcode));
                if (existingProduct != null)
                {
                    throw new ValidationError("UniqueViolation", "Barcode",
                        "A product with same barcode exists. Please choose another!");
                }
            }

            return barcode;
        }

        protected override void ValidateRequest()
        {
            base.ValidateRequest();

            var user = User?.GetUserDefinition(UserRetriever) as UserDefinition;
            ValidateInternalCode(this.Connection, user.TenantId, Row.InternalCode, Localizer);
            ValidateBarcode(this.Connection, user.TenantId, Row.Barcode, Localizer);

        }
    }
}