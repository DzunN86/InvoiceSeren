#pragma checksum "/home/anyaspyx/Documents/SantriCode/Project/serin-Invoice/Modules/Membership/Account/ResetPassword/AccountResetPassword.cshtml" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "df24e1efe8fbd0478479d37dfc555d0b6bf787de"
// <auto-generated/>
#pragma warning disable 1591
[assembly: global::Microsoft.AspNetCore.Razor.Hosting.RazorCompiledItemAttribute(typeof(AspNetCore.Modules_Membership_Account_ResetPassword_AccountResetPassword), @"mvc.1.0.view", @"/Modules/Membership/Account/ResetPassword/AccountResetPassword.cshtml")]
namespace AspNetCore
{
    #line hidden
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;
    using Microsoft.AspNetCore.Mvc;
    using Microsoft.AspNetCore.Mvc.Rendering;
    using Microsoft.AspNetCore.Mvc.ViewFeatures;
#nullable restore
#line 1 "/home/anyaspyx/Documents/SantriCode/Project/serin-Invoice/Modules/_ViewImports.cshtml"
using Serenity;

#line default
#line hidden
#nullable disable
#nullable restore
#line 2 "/home/anyaspyx/Documents/SantriCode/Project/serin-Invoice/Modules/_ViewImports.cshtml"
using Serenity.Web;

#line default
#line hidden
#nullable disable
#nullable restore
#line 3 "/home/anyaspyx/Documents/SantriCode/Project/serin-Invoice/Modules/_ViewImports.cshtml"
using Indotalent;

#line default
#line hidden
#nullable disable
#nullable restore
#line 4 "/home/anyaspyx/Documents/SantriCode/Project/serin-Invoice/Modules/_ViewImports.cshtml"
using Microsoft.AspNetCore.Html;

#line default
#line hidden
#nullable disable
#nullable restore
#line 5 "/home/anyaspyx/Documents/SantriCode/Project/serin-Invoice/Modules/_ViewImports.cshtml"
using System.Text;

#line default
#line hidden
#nullable disable
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"df24e1efe8fbd0478479d37dfc555d0b6bf787de", @"/Modules/Membership/Account/ResetPassword/AccountResetPassword.cshtml")]
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"379c0792997c67bfc7f343d9d6c3fed35f906c44", @"/Modules/_ViewImports.cshtml")]
    public class Modules_Membership_Account_ResetPassword_AccountResetPassword : global::Microsoft.AspNetCore.Mvc.Razor.RazorPage<Indotalent.Membership.ResetPasswordModel>
    {
        #pragma warning disable 1998
        public async override global::System.Threading.Tasks.Task ExecuteAsync()
        {
            WriteLiteral("\r\n");
#nullable restore
#line 4 "/home/anyaspyx/Documents/SantriCode/Project/serin-Invoice/Modules/Membership/Account/ResetPassword/AccountResetPassword.cshtml"
  
    ViewData["Title"] = Texts.Forms.Membership.ResetPassword.FormTitle.ToString(Localizer);
    ViewData["PageId"] = "ResetPassword";
    Layout = MVC.Views.Shared._LayoutNoNavigation;

#line default
#line hidden
#nullable disable
            WriteLiteral("\r\n<script id=\"Template_Membership_ResetPasswordPanel\" type=\"text/template\">\r\n<div>\r\n    <h3 class=\"page-title\">");
#nullable restore
#line 12 "/home/anyaspyx/Documents/SantriCode/Project/serin-Invoice/Modules/Membership/Account/ResetPassword/AccountResetPassword.cshtml"
                      Write(Texts.Forms.Membership.ResetPassword.FormTitle.ToString(Localizer));

#line default
#line hidden
#nullable disable
            WriteLiteral(@"</h3>
    <form id=""~_Form"" action="""">
        <div class=""s-Form"">
            <div class=""fieldset ui-widget ui-widget-content ui-corner-all"">
                <div id=""~_PropertyGrid""></div>
                <div class=""clear""></div>
            </div>
            <div class=""buttons"">
                <button id=""~_SubmitButton"" type=""submit"" class=""btn btn-primary"">
                    ");
#nullable restore
#line 21 "/home/anyaspyx/Documents/SantriCode/Project/serin-Invoice/Modules/Membership/Account/ResetPassword/AccountResetPassword.cshtml"
               Write(Texts.Forms.Membership.ResetPassword.SubmitButton.ToString(Localizer));

#line default
#line hidden
#nullable disable
            WriteLiteral("\r\n                </button>\r\n            </div>\r\n            <input type=\"hidden\" id=\"~_Token\" value=\"");
#nullable restore
#line 24 "/home/anyaspyx/Documents/SantriCode/Project/serin-Invoice/Modules/Membership/Account/ResetPassword/AccountResetPassword.cshtml"
                                                Write(Model.Token);

#line default
#line hidden
#nullable disable
            WriteLiteral(@""" />
        </div>
    </form>
</div>
</script>

<div class=""page-content"">
    <div id=""ResetPasswordPanel"" class=""flex-layout"">
    </div>
</div>

<script type=""text/javascript"">
$(function() {
    new Indotalent.Membership.ResetPasswordPanel($('#ResetPasswordPanel')).init();
});
</script>");
        }
        #pragma warning restore 1998
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public Serenity.ITextLocalizer Localizer { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.ViewFeatures.IModelExpressionProvider ModelExpressionProvider { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.IUrlHelper Url { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.IViewComponentHelper Component { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.Rendering.IJsonHelper Json { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.Rendering.IHtmlHelper<Indotalent.Membership.ResetPasswordModel> Html { get; private set; }
    }
}
#pragma warning restore 1591
