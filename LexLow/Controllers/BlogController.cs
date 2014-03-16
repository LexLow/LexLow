using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.UI.WebControls;
using RTE;

namespace rtedemo.Controllers
{
    public class BlogController : Controller
    {


        public ActionResult rte()
        {
            Editor Editor1 = new Editor(System.Web.HttpContext.Current, "Editor1");
            Editor1.LoadFormData("Type Here...");
            Editor1.Width = Unit.Percentage(100);
            Editor1.Height = Unit.Pixel(500);
            Editor1.Skin = "office2010black";
             
            Editor1.MvcInit();
            ViewBag.Editor = Editor1.MvcGetString();
            return View();
        }

    }
}
