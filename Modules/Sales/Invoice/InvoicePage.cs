using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace Indotalent.Sales.Pages
{

    [PageAuthorize(typeof(InvoiceRow))]
    public class InvoiceController : Controller
    {
        [Route("Sales/Invoice")]
        public ActionResult Index()
        {
            return View("~/Modules/Sales/Invoice/InvoiceIndex.cshtml");
        }
    }
}