using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Du_Class.Models;
namespace Du_Class.Controllers
{
    public class StudentInfoController : Controller
    {
        Du_ClassEntities db = new Du_ClassEntities();
        // GET: StudnetInfo
        public ActionResult Index()
        {
            return View();
        }

        /// <summary>
        /// 查看个人信息
        /// </summary>
        /// <returns></returns>
        public ActionResult Detail()
        {
            Student student = Session["Student"] as Student;
            return View(student);
        }

        /// <summary>
        /// 修改密码
        /// </summary>
        /// <returns></returns>
        public ActionResult EditPwd()
        {
            Student stu = Session["Student"] as Student;

            return View(stu);
        }

        [HttpPost]
        public ActionResult EditPwd(string NewPwd,string confirmPwd,string Stu_Password)
        {
            var name = Session["name"].ToString();
            var pwd = Session["pwd"].ToString();
            var stu = db.Student.FirstOrDefault(p=>p.Stu_Namber==name&&p.Stu_Password==pwd);
            if (Stu_Password == stu.Stu_Password)
            {
                if (NewPwd != Stu_Password)
                {
                    if (NewPwd == confirmPwd)
                    {
                        stu.Stu_Password = NewPwd;
                        db.Entry(stu).State = System.Data.Entity.EntityState.Modified;
                        db.SaveChanges();
                        return Content("<script>alert('修改成功！请重新登录');history.go(-1)</script>");
                         
                    }
                    else
                    {
                        return Content("<script>alert('两次输入密码不一致！');history.go(-1)</script>");
                    }

            }
            else
                {
                    return Content("<script>alert('修改的密码不能与原密码相同！');history.go(-1)</script>");
                }
            }
            else {
                return Content("<script>alert('原密码不一致！');history.go(-1)</script>");
            }
         

        }

        /// <summary>
        /// 查看学生成绩
        /// </summary>
        /// <returns></returns>
        public ActionResult StuGradeInfo()
        {
            Student student = Session["Student"] as Student;
            List<Grade> grade = db.Grade.Where(p=>p.StudentID==student.StudentID).ToList();
            ViewBag.grade = grade;
            return View(student);
        }

        public ActionResult Tu()
        {
            Student student = Session["Student"] as Student;
            List<Grade> grade = db.Grade.Where(p => p.StudentID == student.StudentID).ToList();
            ViewBag.grade = grade;
            return View(student);
        }

        /// <summary>
        /// 查看发布通知
        /// </summary>
        /// <returns></returns>
        public ActionResult NewsInfo(string Title = "", int pageIndex = 1, int pageCount = 5)
        {
            Student student = Session["Student"] as Student;
            //List<News> news = db.News.Where(p=>p.TeacherID==student.Class.TeacherID).ToList();
            int totalCount = db.News.OrderBy(p => p.NewsID).Where(p => p.TeacherID == student.Class.TeacherID).ToList().Count();
            //总页数
            double totalPage = Math.Ceiling((double)totalCount / pageCount);

            //获得用户集合 , 分页查询Skip（）跳过指定数量的集合 Take() 从过滤后返回的集合中再从第一行取出指定的行数
            List<News> news = db.News.OrderBy(p => p.NewsID).Where((p => p.Title.Contains(Title) || p.Title == "")).Where(p => p.TeacherID == student.Class.TeacherID).Skip((pageIndex - 1) * pageCount).Take(pageCount).ToList();

            ViewBag.Title = Title;
            ViewBag.pageIndex = pageIndex;
            ViewBag.pageCount = pageCount;
            ViewBag.totalCount = totalCount;
            ViewBag.totalPage = totalPage;

            return View(news);
        }

        /// <summary>
        /// 查看信息
        /// </summary>
        /// <returns></returns>
        public ActionResult NewsContent(int? id)
        {
            News news = db.News.Find(id);
            return View(news);
        }
    }
}