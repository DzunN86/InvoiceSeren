using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace Indotalent.Merchandise.Pages
{

    [PageAuthorize(typeof(ProductRow))]
    public class ProductController : Controller
    {
        [Route("Merchandise/Product")]
        public ActionResult Index()
        {
            return View("~/Modules/Merchandise/Product/ProductIndex.cshtml");
        }
    }
}