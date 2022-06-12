using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace Indotalent.Sales.Pages
{

    [PageAuthorize(typeof(InvoiceDetailRow))]
    public class InvoiceDetailController : Controller
    {
        [Route("Sales/InvoiceDetail")]
        public ActionResult Index()
        {
            return View("~/Modules/Sales/InvoiceDetail/InvoiceDetailIndex.cshtml");
        }
    }
}