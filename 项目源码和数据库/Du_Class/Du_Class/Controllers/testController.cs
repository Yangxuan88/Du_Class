using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Du_Class.Models;
namespace Du_Class.Controllers
{
    public class testController : Controller
    {
        Du_ClassEntities db = new Du_ClassEntities();
        // GET: test
        public ActionResult Index()
        {
            return View();
        }

        [HttpPost]
        public JsonResult GetEchartsIndex()
        {

            //2、不循环添加数据直接数据Json化数据
            //ar result = db.ceshi2.GroupBy(s => new { s.sex }).Select(s => new { Sex = s.Key.sex, Nums = s.Count() }).ToList();
            // /.tb_stu.GroupBy(r => r.stuAddress) .Select(r => new { stuAddr = r.Key, count = r.Count() });
            var result = db.Student.GroupBy(s => new { s.Stu_Sex }).Select(s => new { Sex = s.Key, Nums = s.Count() }).ToList();
            return Json(new { data = result }, JsonRequestBehavior.AllowGet);
        
        }
        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

    }
}