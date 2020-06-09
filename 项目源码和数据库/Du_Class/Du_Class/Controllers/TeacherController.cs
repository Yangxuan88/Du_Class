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
        Du_ClassEntities db = new Du_ClassEntities();
        // GET: Teacher
        public ActionResult Index()
        {
            return View();
        }

        /// <summary>
        /// 模糊查询学生信息
        /// </summary>
        /// <returns></returns>
        public ActionResult StuInfo(string name = "")
        {
            List<Student> stu = db.Student.Where(p => p.Stu_Name.Contains(name) || p.Stu_Name == "").ToList();
            ViewBag.Name = name;
            return View(stu);
        }

        /// <summary>
        /// 编辑学生信息
        /// </summary>
        /// <returns></returns>
        public ActionResult StuEdit()
        {

            var stu = db.Student.ToList();
            return View(stu);

        }

        /// <summary>
        /// 添加班级
        /// </summary>
        /// <returns></returns>
        public ActionResult TeaClass() {

            return View();
        }

        [HttpPost]
        public ActionResult TeaClass(Teacher tea,Class c)
        {
            db.Teacher.Add(tea);
            db.Class.Add(c);
            db.SaveChanges();
            return View();
        }

    }
}