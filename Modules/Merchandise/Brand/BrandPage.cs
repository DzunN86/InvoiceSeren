using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace Indotalent.Merchandise.Pages
{

    [PageAuthorize(typeof(BrandRow))]
    public class BrandController : Controller
    {
        [Route("Merchandise/Brand")]
        public ActionResult Index()
        {
            return View("~/Modules/Merchandise/Brand/BrandIndex.cshtml");
        }
    }
}