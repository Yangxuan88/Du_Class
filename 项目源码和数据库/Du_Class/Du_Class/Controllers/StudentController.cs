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
        public ActionResult Index(string name = "",int pageIndex = 1, int pageCount = 10)
        {
            Teacher teacher = Session["Teacher"] as Teacher;
            //List<Student> stu = db.Student.Where(p => p.Stu_Name.Contains(name) || p.Stu_Name == "").ToList();
            List<Class> cla = db.Class.ToList();
            ViewBag.CAL=cla;
            ViewBag.Name = name;
            List<Course> course = db.Course.Where(p=>p.Class.TeacherID==teacher.TeacherID).ToList();
            ViewBag.course = course;

            int totalCount = db.Student.OrderBy(p => p.StudentID).Where(p => p.Class.TeacherID == teacher.TeacherID).ToList().Count();
            //总页数
            double totalPage = Math.Ceiling((double)totalCount / pageCount);

            //获得用户集合 , 分页查询Skip（）跳过指定数量的集合 Take() 从过滤后返回的集合中再从第一行取出指定的行数
            List<Student> stu = db.Student.OrderBy(p => p.StudentID).Where((p => p.Stu_Name.Contains(name) || p.Stu_Name == "")).Where(p => p.Class.TeacherID == teacher.TeacherID).Skip((pageIndex - 1) * pageCount).Take(pageCount).ToList();
            //ViewBag.name = name;
            ViewBag.name = name;
            ViewBag.pageIndex = pageIndex;
            ViewBag.pageCount = pageCount;
            ViewBag.totalCount = totalCount;
            ViewBag.totalPage = totalPage;

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
        public ActionResult AddStuGrade(int pageIndex = 1, int pageCount = 5)
        {
            Teacher teacher = Session["Teacher"] as Teacher;
            List<Grade> gra = db.Grade.ToList();
            //List<Student>stu = db.Student.Where(p => p.Class.TeacherID == teacher.TeacherID).ToList();

            //var cal = db.Class.ToList();
            //ViewBag.CAL = cal;
             List<Course> course = db.Course.Where(p => p.Class.TeacherID == teacher.TeacherID).ToList();
            ViewBag.course = course;

   
     

  
            int totalCount = db.Student.OrderBy(p => p.StudentID).Where(p => p.Class.TeacherID == teacher.TeacherID).ToList().Count();
            //总页数
            double totalPage = Math.Ceiling((double)totalCount / pageCount);

            //获得用户集合 , 分页查询Skip（）跳过指定数量的集合 Take() 从过滤后返回的集合中再从第一行取出指定的行数
            List<Student> stu = db.Student.OrderBy(p => p.StudentID).Where(p => p.Class.TeacherID == teacher.TeacherID).Skip((pageIndex - 1) * pageCount).Take(pageCount).ToList();
                  ViewBag.stu = stu;
            ViewBag.pageIndex = pageIndex;
            ViewBag.pageCount = pageCount;
            ViewBag.totalCount = totalCount;
            ViewBag.totalPage = totalPage;


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
        public ActionResult EditStuGrade(string name="", int pageIndex = 1, int pageCount = 10)
        {

            Teacher teacher = Session["Teacher"] as Teacher;
            ViewBag.Name = name;
            List<Course> course = db.Course.Where(p => p.Class.TeacherID == teacher.TeacherID).ToList();
            ViewBag.course = course;
            List<Grade> grade = db.Grade.ToList();
            ViewBag.grade = grade;
            int totalCount = db.Student.OrderBy(p => p.StudentID).Where(p => p.Class.TeacherID == teacher.TeacherID).ToList().Count();
            //总页数
            double totalPage = Math.Ceiling((double)totalCount / pageCount);

            //获得用户集合 , 分页查询Skip（）跳过指定数量的集合 Take() 从过滤后返回的集合中再从第一行取出指定的行数
            List<Student> stu = db.Student.OrderBy(p => p.StudentID).Where((p => p.Stu_Name.Contains(name) || p.Stu_Name == "")).Where(p => p.Class.TeacherID == teacher.TeacherID).Skip((pageIndex - 1) * pageCount).Take(pageCount).ToList();
            ViewBag.name = name;
            ViewBag.name = name;
            ViewBag.pageIndex = pageIndex;
            ViewBag.pageCount = pageCount;
            ViewBag.totalCount = totalCount;
            ViewBag.totalPage = totalPage;

            return View(stu);
        }

        /// <summary>
        /// 删除成绩
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        public ActionResult DeleteGrade(int? id)
        { 
            var stu = db.Student.Find(id);
            var grade = db.Grade.Where(p => p.StudentID == stu.StudentID).FirstOrDefault();
            if(grade!=null)
            {  
                    db.Grade.Remove(grade);
                    db.SaveChanges();
               
                //return Content("<script>alert('删除成功！');history.go(-1)</script>");
                return RedirectToAction("EditStuGrade");
            }
            else
            {
                return Content("<script>alert('删除失败！');history.go(-1)</script>");
            }
           
        }

        /// <summary>
        /// 修改成绩
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        public ActionResult EditGrade(int? id) 
        {
            Student stu = db.Student.Find(id);
            ViewBag.stu = stu;
            List<Grade> grade = db.Grade.Where(p => p.StudentID == stu.StudentID).ToList();
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