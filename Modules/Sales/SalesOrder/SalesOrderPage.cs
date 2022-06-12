using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace Indotalent.Sales.Pages
{

    [PageAuthorize(typeof(SalesOrderRow))]
    public class SalesOrderController : Controller
    {
        [Route("Sales/SalesOrder")]
        public ActionResult Index()
        {
            return View("~/Modules/Sales/SalesOrder/SalesOrderIndex.cshtml");
        }
    }
}