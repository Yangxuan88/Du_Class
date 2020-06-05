using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Du_Class.Models;

namespace Du_Class.Controllers
{
    public class TeacherController : Controller
    {
        Du_ClassEntities1 db = new Du_ClassEntities1();
        // GET: Teacher
        public ActionResult Index()
        {
            return View();
        }

        /// <summary>
        /// 查询学生信息
        /// </summary>
        /// <returns></returns>
        public ActionResult StuInfo()
        {
            var stu = db.Student.ToList();

            return View(stu);
        }
    }
}