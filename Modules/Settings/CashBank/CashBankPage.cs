using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace Indotalent.Settings.Pages
{

    [PageAuthorize(typeof(CashBankRow))]
    public class CashBankController : Controller
    {
        [Route("Settings/CashBank")]
        public ActionResult Index()
        {
            return View("~/Modules/Settings/CashBank/CashBankIndex.cshtml");
        }
    }
}