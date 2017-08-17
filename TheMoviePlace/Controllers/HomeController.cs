using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using TheMoviePlace.Models;

namespace TheMoviePlace.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index(ContactInformations form)
        {
            Session["save"] = form;
            var save = Session["save"];

            
            return View(save);
        }

       
    }
}