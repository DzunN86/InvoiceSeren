using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace Indotalent.Settings.Pages
{

    [PageAuthorize(typeof(PurchaseTaxRow))]
    public class PurchaseTaxController : Controller
    {
        [Route("Settings/PurchaseTax")]
        public ActionResult Index()
        {
            return View("~/Modules/Settings/PurchaseTax/PurchaseTaxIndex.cshtml");
        }
    }
}