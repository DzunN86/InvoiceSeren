using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace Indotalent.Settings.Pages
{

    [PageAuthorize(typeof(MyCompanyRow))]
    public class MyCompanyController : Controller
    {
        [Route("Settings/MyCompany")]
        public ActionResult Index()
        {
            return View("~/Modules/Settings/MyCompany/MyCompanyIndex.cshtml");
        }
    }
}