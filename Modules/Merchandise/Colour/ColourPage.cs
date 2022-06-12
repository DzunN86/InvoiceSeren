using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace Indotalent.Merchandise.Pages
{

    [PageAuthorize(typeof(ColourRow))]
    public class ColourController : Controller
    {
        [Route("Merchandise/Colour")]
        public ActionResult Index()
        {
            return View("~/Modules/Merchandise/Colour/ColourIndex.cshtml");
        }
    }
}