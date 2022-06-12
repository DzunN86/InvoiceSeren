using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using Serenity.Abstractions;
using Serenity.Data;
using Serenity.Reporting;
using Serenity.Services;
using Serenity.Web;
using System;
using System.Data;
using System.Globalization;
using MyRepository = Indotalent.Administration.Repositories.UserRepository;
using MyRow = Indotalent.Administration.Entities.UserRow;

namespace Indotalent.Administration.Endpoints
{
    [Route("Services/Administration/User/[action]")]
    [ConnectionKey(typeof(MyRow)), ServiceAuthorize(typeof(MyRow))]
    public class UserController : ServiceEndpoint
    {
        protected IUserRetrieveService UserRetrieveService { get; }
        protected IOptions<DemoOption> DemoOption { get; }

        public UserController(IUserRetrieveService userRetrieveService, IOptions<DemoOption> demoOption)
        {
            UserRetrieveService = userRetrieveService ?? throw new ArgumentNullException(nameof(userRetrieveService));
            DemoOption = demoOption ?? throw new ArgumentNullException(nameof(demoOption));
        }

        [HttpPost, AuthorizeCreate(typeof(MyRow))]
        public SaveResponse Create(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            return new MyRepository(Context, UserRetrieveService, DemoOption).Create(uow, request);
        }

        [HttpPost, AuthorizeUpdate(typeof(MyRow))]
        public SaveResponse Update(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            return new MyRepository(Context, UserRetrieveService, DemoOption).Update(uow, request);
        }

        [HttpPost, AuthorizeDelete(typeof(MyRow))]
        public DeleteResponse Delete(IUnitOfWork uow, DeleteRequest request)
        {
            return new MyRepository(Context, UserRetrieveService, DemoOption).Delete(uow, request);
        }

        [HttpPost, AuthorizeDelete(typeof(MyRow))]
        public UndeleteResponse Undelete(IUnitOfWork uow, UndeleteRequest request)
        {
            return new MyRepository(Context, UserRetrieveService, DemoOption).Undelete(uow, request);
        }

        public RetrieveResponse<MyRow> Retrieve(IDbConnection connection, RetrieveRequest request)
        {
            return new MyRepository(Context, UserRetrieveService, DemoOption).Retrieve(connection, request);
        }

        public ListResponse<MyRow> List(IDbConnection connection, ListRequest request)
        {
            return new MyRepository(Context, UserRetrieveService, DemoOption).List(connection, request);
        }

        public FileContentResult ListExcel(IDbConnection connection, ListRequest request,
            [FromServices] IExcelExporter exporter)
        {
            var data = List(connection, request).Entities;
            var bytes = exporter.Export(data, typeof(Columns.UserColumns), request.ExportColumns);
            return ExcelContentResult.Create(bytes, "UserList_" +
                DateTime.Now.ToString("yyyyMMdd_HHmmss", CultureInfo.InvariantCulture) + ".xlsx");
        }
    }
}
