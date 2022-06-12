using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace Indotalent.Purchase.Pages
{

    [PageAuthorize(typeof(VendorRow))]
    public class VendorController : Controller
    {
        [Route("Purchase/Vendor")]
        public ActionResult Index()
        {
            return View("~/Modules/Purchase/Vendor/VendorIndex.cshtml");
        }
    }
}