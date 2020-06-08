using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Du_Class.Models;

namespace Du_Class.Controllers
{
    public class StudentController : Controller
    {
        Du_ClassEntities db = new Du_ClassEntities();
        // GET: Student 
        
         /// <summary>
        /// 查看学生成绩
        /// </summary>
        /// <returns></returns>
        public ActionResult Index()
        {
            List<Student> stu = db.Student.ToList();
            
            return View(stu);
        }

       /// <summary>
       /// 
       /// </summary>
       /// <returns></returns>
        public ActionResult AddStuSCore()
        {
            return View();
        }
    }
}