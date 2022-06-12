using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace Indotalent.Purchase.Pages
{

    [PageAuthorize(typeof(PurchaseOrderDetailRow))]
    public class PurchaseOrderDetailController : Controller
    {
        [Route("Purchase/PurchaseOrderDetail")]
        public ActionResult Index()
        {
            return View("~/Modules/Purchase/PurchaseOrderDetail/PurchaseOrderDetailIndex.cshtml");
        }
    }
}