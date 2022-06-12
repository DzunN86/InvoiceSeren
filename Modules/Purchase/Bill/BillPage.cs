using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace Indotalent.Purchase.Pages
{

    [PageAuthorize(typeof(BillRow))]
    public class BillController : Controller
    {
        [Route("Purchase/Bill")]
        public ActionResult Index()
        {
            return View("~/Modules/Purchase/Bill/BillIndex.cshtml");
        }
    }
}