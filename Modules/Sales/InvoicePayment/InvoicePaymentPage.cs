using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace Indotalent.Sales.Pages
{

    [PageAuthorize(typeof(InvoicePaymentRow))]
    public class InvoicePaymentController : Controller
    {
        [Route("Sales/InvoicePayment")]
        public ActionResult Index()
        {
            return View("~/Modules/Sales/InvoicePayment/InvoicePaymentIndex.cshtml");
        }
    }
}