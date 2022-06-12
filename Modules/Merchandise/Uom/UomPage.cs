using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace Indotalent.Merchandise.Pages
{

    [PageAuthorize(typeof(UomRow))]
    public class UomController : Controller
    {
        [Route("Merchandise/Uom")]
        public ActionResult Index()
        {
            return View("~/Modules/Merchandise/Uom/UomIndex.cshtml");
        }
    }
}