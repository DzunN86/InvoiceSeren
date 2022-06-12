using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace Indotalent.Administration.Pages
{

    [PageAuthorize(typeof(TenantRow))]
    public class TenantController : Controller
    {
        [Route("Administration/Tenant")]
        public ActionResult Index()
        {
            return View("~/Modules/Administration/Tenant/TenantIndex.cshtml");
        }
    }
}