using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace Indotalent.Sales.Pages
{

    [PageAuthorize(typeof(CustomerContactRow))]
    public class CustomerContactController : Controller
    {
        [Route("Sales/CustomerContact")]
        public ActionResult Index()
        {
            return View("~/Modules/Sales/CustomerContact/CustomerContactIndex.cshtml");
        }
    }
}