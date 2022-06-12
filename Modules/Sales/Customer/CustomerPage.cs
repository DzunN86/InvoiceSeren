using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace Indotalent.Sales.Pages
{

    [PageAuthorize(typeof(CustomerRow))]
    public class CustomerController : Controller
    {
        [Route("Sales/Customer")]
        public ActionResult Index()
        {
            return View("~/Modules/Sales/Customer/CustomerIndex.cshtml");
        }
    }
}