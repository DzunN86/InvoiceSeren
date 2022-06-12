using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace Indotalent.Purchase.Pages
{

    [PageAuthorize(typeof(BillPaymentRow))]
    public class BillPaymentController : Controller
    {
        [Route("Purchase/BillPayment")]
        public ActionResult Index()
        {
            return View("~/Modules/Purchase/BillPayment/BillPaymentIndex.cshtml");
        }
    }
}