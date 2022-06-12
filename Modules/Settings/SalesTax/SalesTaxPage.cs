using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace Indotalent.Settings.Pages
{

    [PageAuthorize(typeof(SalesTaxRow))]
    public class SalesTaxController : Controller
    {
        [Route("Settings/SalesTax")]
        public ActionResult Index()
        {
            return View("~/Modules/Settings/SalesTax/SalesTaxIndex.cshtml");
        }
    }
}