using System;
using System.Collections.Generic;
using System.IO;
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
        public ActionResult Index(string name = "")
        {
           
            List<Student> stu = db.Student.Where(p => p.Stu_Name.Contains(name) || p.Stu_Name == "").ToList();
            List<Class> cla = db.Class.ToList();
            ViewBag.CAL=cla;
            ViewBag.Name = name;
            List<Course> course = db.Course.ToList();
            ViewBag.course = course;
            return View(stu);
        }

        /// <summary>
        /// 查看学生成绩
        /// </summary>
        /// <returns></returns>
        public ActionResult LookStu(int? id)
        {
            var stu = db.Student.Find(id);

            return View(stu);
        }

    

        /// <summary>
        /// 添加学生成绩
        /// </summary>
        /// <returns></returns>
        public ActionResult AddStuGrade()
        {
            List<Grade> gra = db.Grade.ToList();
            List<Student>stu = db.Student.ToList();
            ViewBag.stu = stu;
            //var cal = db.Class.ToList();
            //ViewBag.CAL = cal;
             List<Course> course = db.Course.ToList();
            ViewBag.course = course;
            return View(gra);
        }

        [HttpPost]
        public ActionResult AddStuGrade(Grade grade ) {
           List<Grade> gra = db.Grade.ToList();
            int a = 0;
            foreach (var item in gra)
            {
                    if (item.CourseID==grade.CourseID&&item.StudentID==grade.StudentID)
                    {
                       a = 1;
                    break;
                    }                   
                    else
                    {
                    a = 2;
                    continue; 
                    }
                }

            if (a==2)
            {
                db.Grade.Add(grade);
                db.SaveChanges();
                return RedirectToAction("AddStuGrade");
            }
            else
            {
                return Content("<script>alert('此学生已有该课程成绩！');history.go(-1)</script>");
            }           
        }

        /// <summary>
        /// 修改学生成绩
        /// </summary>
        /// <returns></returns>
        public ActionResult EditStuGrade(string name="")
        {
            List<Student> stu = db.Student.Where(p => p.Stu_Name.Contains(name) || p.Stu_Name == "").ToList();
      
            ViewBag.Name = name;
            List<Course> course = db.Course.ToList();
            ViewBag.course = course;
            List<Grade> grade = db.Grade.ToList();
            ViewBag.grade = grade;
            return View(stu);
        }

        /// <summary>
        /// 删除成绩
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        //public ActionResult StuGradeDelete(int? id)
        //{
        //    var stu = db.Student.Find(id);


        //    db.SaveChanges();
        //    return View();
        //}

        /// <summary>
        /// 修改成绩
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        public ActionResult EditGrade(int? id) 
        {
            Student stu = db.Student.Find(id);
            ViewBag.stu = stu;
            List<Grade> grade = db.Grade.ToList();
            ViewBag.grade = grade;
            return View();
          }
        [HttpPost]
        public ActionResult EditGrade(Grade grade)
        {
         
                db.Entry(grade).State = System.Data.Entity.EntityState.Modified;
                db.SaveChanges();
          
            return RedirectToAction("EditStuGrade");
        }
    }
}