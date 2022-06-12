using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace Indotalent.Merchandise.Pages
{

    [PageAuthorize(typeof(SizeRow))]
    public class SizeController : Controller
    {
        [Route("Merchandise/Size")]
        public ActionResult Index()
        {
            return View("~/Modules/Merchandise/Size/SizeIndex.cshtml");
        }
    }
}