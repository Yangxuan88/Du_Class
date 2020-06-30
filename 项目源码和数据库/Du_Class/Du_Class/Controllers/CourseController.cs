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
        public ActionResult Index(string name = "", int pageIndex = 1, int pageCount = 8)
        {
            Teacher tea = Session["Teacher"] as Teacher; 
            Class cla = db.Class.Where(p=>p.TeacherID==tea.TeacherID).FirstOrDefault();
            ViewBag.name = name;
            //List<Course> course = db.Course.Where(p=>p.Class_ID==cla.Class_ID).ToList();
            ViewBag.cla = cla;
            //总行数
            int totalCount = db.Course.OrderBy(p => p.CourseID).Where(p => p.Class_ID == cla.Class_ID).ToList().Count();
            //总页数
            double totalPage = Math.Ceiling((double)totalCount / pageCount);

            //获得用户集合 , 分页查询Skip（）跳过指定数量的集合 Take() 从过滤后返回的集合中再从第一行取出指定的行数
            //List<Course> course = db.Course.Where(p => p.Class_ID == cla.Class_ID).ToList();
            List<Course> course = db.Course.OrderBy(p => p.CourseID).Where((p => p.CourseName.Contains(name) || p.CourseName == "")).Where(p => p.Class.TeacherID == tea.TeacherID).Skip((pageIndex - 1) * pageCount).Take(pageCount).ToList();
       
            ViewBag.pageIndex = pageIndex;
            ViewBag.pageCount = pageCount;
            ViewBag.totalCount = totalCount;
            ViewBag.totalPage = totalPage;
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