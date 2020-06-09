using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Du_Class.Models;

namespace Du_Class.Controllers
{
    public class CourseController : Controller
    {
        Du_ClassEntities db = new Du_ClassEntities();
        // GET: Course
        public ActionResult Index()
        {
            List<Course> course = db.Course.ToList();

            return View(course);
        }

        /// <summary>
        /// 添加课程
        /// </summary>
        /// <returns></returns>
        public ActionResult AddCourse() {
            return View();
        }
    }
}