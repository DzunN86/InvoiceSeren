using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace Indotalent.Purchase.Pages
{

    [PageAuthorize(typeof(BillDetailRow))]
    public class BillDetailController : Controller
    {
        [Route("Purchase/BillDetail")]
        public ActionResult Index()
        {
            return View("~/Modules/Purchase/BillDetail/BillDetailIndex.cshtml");
        }
    }
}