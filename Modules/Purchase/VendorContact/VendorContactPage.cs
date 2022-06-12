using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace Indotalent.Purchase.Pages
{

    [PageAuthorize(typeof(VendorContactRow))]
    public class VendorContactController : Controller
    {
        [Route("Purchase/VendorContact")]
        public ActionResult Index()
        {
            return View("~/Modules/Purchase/VendorContact/VendorContactIndex.cshtml");
        }
    }
}