using System;
using System.Collections.Generic;
using System.IO;
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
        public ActionResult StuInfo(string name = "", int pageIndex = 1, int pageCount = 5)
        {
            Teacher teacher = Session["Teacher"] as Teacher;
            List<Teacher> tea = db.Teacher.ToList();
            ViewBag.tea = tea;

            //List<Student> stu = db.Student.Where((p => p.Stu_Name.Contains(name) || p.Stu_Name == "")).ToList();
            ViewBag.Name = name;

            List<Class> cla = db.Class.Where(p => p.TeacherID == teacher.TeacherID).ToList();

            ViewBag.cla = cla;
            //总行数
            int totalCount = db.Student.OrderBy(p => p.StudentID).Where(p => p.Class.TeacherID == teacher.TeacherID).ToList().Count();
            //总页数
            double totalPage = Math.Ceiling((double)totalCount / pageCount);

            //获得用户集合 , 分页查询Skip（）跳过指定数量的集合 Take() 从过滤后返回的集合中再从第一行取出指定的行数
            List<Student> stu = db.Student.OrderBy(p => p.StudentID).Where((p => p.Stu_Name.Contains(name) || p.Stu_Name == "")).Where(p=>p.Class.TeacherID==teacher.TeacherID).Skip((pageIndex - 1) * pageCount).Take(pageCount).ToList();

            ViewBag.name = name;
            ViewBag.pageIndex = pageIndex;
            ViewBag.pageCount = pageCount;
            ViewBag.totalCount = totalCount;
            ViewBag.totalPage = totalPage;

            return View(stu);
        }


        /// <summary>
        /// 导出excel
        /// </summary>
        /// <returns></returns>
        public FileContentResult ExportToExcel()
        {
            List<Student> news = db.Student.ToList();
            string[] columns = { "编号", "学号", "姓名", "性别", "照片", "密码", "身份证", "民族", "籍贯", "政治面貌", "手机号", "入学年份", "学籍状态" };
            byte[] filecontent = ExcelExportHelper.ExportExcel(news, "", false, columns);
            return File(filecontent, ExcelExportHelper.ExcelContentType, "MyStudent.xlsx");
        }

        /// <summary>
        /// 用例图
        /// </summary>
        /// <returns></returns>
        public ActionResult Tu()
        {
            Teacher tea = Session["Teacher"] as Teacher;
            var stu = db.Student.Where(p=>p.Class.TeacherID==tea.TeacherID).ToList();
            return View(stu);
        }
        /// <summary>
        /// 显示用例图
        /// </summary>
        /// <returns></returns>
        public ActionResult Picture()
        {

            Teacher tea = Session["Teacher"] as Teacher;
            var stu = db.Student.Where(p => p.Class.TeacherID == tea.TeacherID).ToList();
            return View(stu);
        }


        /// <summary>
        /// 批量删除
        /// </summary>
        /// <returns></returns>
        [HttpPost]
        public ActionResult BatchDelete(string checkData)
        {
            //string teas = checkData;
            //用数组接受数据
            string[] teaID = { };
            teaID = checkData.Split(',');
            for (int i = 0; i < teaID.Length; i++)
            {

                int teaId = int.Parse(teaID[i]);
                Student stu = db.Student.Find(teaId);
                db.Student.Remove(stu);
            }
            db.SaveChanges();
            return Content("1");
        }


        /// <summary>
        /// 编辑学生信息
        /// </summary>
        /// <returns></returns>
        public ActionResult StuEdit(string name = "", int pageIndex = 1, int pageCount = 5)
        {
            Teacher teacher = Session["Teacher"] as Teacher;
            //List<Student> stu = db.Student.Where((p => p.Stu_Name.Contains(name) || p.Stu_Name == "")).ToList();
            ViewBag.Name = name;
            //总行数
            int totalCount = db.Student.OrderBy(p => p.StudentID).Where(p => p.Class.TeacherID == teacher.TeacherID).ToList().Count();
            //总页数
            double totalPage = Math.Ceiling((double)totalCount / pageCount);

            //获得用户集合 , 分页查询Skip（）跳过指定数量的集合 Take() 从过滤后返回的集合中再从第一行取出指定的行数
            List<Student> stu = db.Student.OrderBy(p => p.StudentID).Where((p => p.Stu_Name.Contains(name) || p.Stu_Name == "")).Where(p => p.Class.TeacherID == teacher.TeacherID).Skip((pageIndex - 1) * pageCount).Take(pageCount).ToList();
            ViewBag.name = name;
            ViewBag.pageIndex = pageIndex;
            ViewBag.pageCount = pageCount;
            ViewBag.totalCount = totalCount;
            ViewBag.totalPage = totalPage;

            return View(stu);

        }



        /// <summary>
        /// 删除学生信息
        /// </summary>
        /// <returns></returns>
        public ActionResult StuDelete(int? id)
        {
            var student = db.Student.Find(id);
            foreach (var item in student.Grade)
            {
                if (item.Stu_Score != null)
                {
                    return Content("<script>alert('此学生有成绩不可删除！');history.go(-1)</script>");
                }
                else
                {
                    db.Student.Remove(student);
                    db.SaveChanges();

                }
            }
            return RedirectToAction("StuAlter");
        }

        /// <summary>
        /// 修改学生信息
        /// </summary>
        /// <returns></returns>
        public ActionResult StuAlter(int? id)
        {
            var stu = db.Student.Find(id);
            List<Class> cla = db.Class.ToList();
            ViewBag.CAL = cla;
            return View(stu);
        }

        [HttpPost]
        public ActionResult StuAlter(Student stu, HttpPostedFileBase EPhoto)
        {
            if (EPhoto != null)
            {
                string fileName = Path.GetFileName(EPhoto.FileName);//获得上传文件名字
                string e = Path.GetExtension(fileName);
                if (e == ".jpg" || e == ".png" || e == ".jif" || e == ".jpeg")
                {
                    //保存到服务器中
                    EPhoto.SaveAs(Server.MapPath("~/Images/" + fileName));
                    stu.Stu_Photo = fileName;
                }
                else
                {
                    ViewBag.Message = "图片格式上传不正确！";
                }

            }


            db.Entry(stu).State = System.Data.Entity.EntityState.Modified;
            db.SaveChanges();
            return RedirectToAction("StuEdit");
        }



        /// <summary>
        /// 添加学生信息
        /// </summary>
        /// <returns></returns>
        public ActionResult AddStu()
        {
            Teacher tea = Session["Teacher"] as Teacher; 


            List<Class> cla = db.Class.Where(p=>p.TeacherID==tea.TeacherID).ToList();
            ViewBag.CAL = cla;
            return View();
        }


        [HttpPost]
        public ActionResult AddStu(Student stu, HttpPostedFileBase Photo)
        {
            //处理图片
            if (Photo != null)
            {
                string fileName = Path.GetFileName(Photo.FileName);//获得上传文件名字
                string e = Path.GetExtension(fileName);
                if (e == ".jpg" || e == ".png" || e == ".jif" || e == ".jpeg")
                {
                    //保存到服务器中
                    Photo.SaveAs(Server.MapPath("~/Images/" + fileName));
                    stu.Stu_Photo = fileName;
                }
                else
                {
                    ViewBag.Message = "图片格式上传不正确！";
                }

            }
            //通过注册时间填写的账号去数据库中查找账号是否存在
            Student student = db.Student.Where(p => p.Stu_Name == stu.Stu_Name).FirstOrDefault();
            if (student == null)
            {
                db.Student.Add(stu);
                db.SaveChanges();
                return RedirectToAction("StuInfo");
            }
            else
            {
                //ModelState.AddModelError("", "该账号已存在");
                //var de = db.Student.ToList();
                //ViewBag.de = de;
                return Content("<script >alert('该员工已存在');history.go(-1)</script >");
            }
        }


        /// <summary>
        /// 添加课程
        /// </summary>
        /// <returns></returns>
        public ActionResult Course()
        {
            List<Class> cla = db.Class.ToList();
            ViewBag.CAL = cla;
            return View();
        }

        [HttpPost]
        public ActionResult AddCourse(Course course)
        {
            db.Course.Add(course);
            db.SaveChanges();
            return RedirectToAction("Index", "Course");
        }



        /// <summary>
        /// 修改密码
        /// </summary>
        /// <returns></returns>
        public ActionResult EditPwd()
        {
            Teacher tea = Session["Teacher"] as Teacher;

            return View(tea);
        }

        [HttpPost]
        public ActionResult EditPwd(string NewPwd, string confirmPwd, string TeacherPassword)
        {
            var name = Session["TeacherName"].ToString();
            var pwd = Session["Teapwd"].ToString();
            var tea = db.Teacher.FirstOrDefault(p => p.TeacherName == name && p.TeacherPassword == pwd);
            if (TeacherPassword == tea.TeacherPassword)
            {
                if (NewPwd != TeacherPassword)
                {
                    if (NewPwd == confirmPwd)
                    {
                        tea.TeacherPassword = NewPwd;
                        db.Entry(tea).State = System.Data.Entity.EntityState.Modified;
                        db.SaveChanges();
                        return Content("<script>alert('修改成功！请重新登录');location.href='/Home/LoginTeacher'</script>");

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
            else
            {
                return Content("<script>alert('原密码不一致！');history.go(-1)</script>");
            }


        }
        [ValidateInput(false)]
        /// <summary>
        /// 发布信息
        /// </summary>
        /// <returns></returns>
        public ActionResult AddInfo()
        {

            return View();
        }

        /// <summary>
        /// 发布信息
        /// </summary>
        /// <param name="news"></param>
        /// <returns></returns>

        [HttpPost]
        public ActionResult AddInfo(News news)
        {
            Teacher tea = Session["Teacher"] as Teacher;
            if (news.TeacherID==tea.TeacherID) {
                news.Publish_time = DateTime.Now;
                db.News.Add(news);
                db.SaveChanges();
                return Content("<script>alert('发布成功');location.href='/Teacher/NewsInfo'</script>");
            }
            else
            {
                return Content("<script>alert('发布失败');history.go(-1)</script>");
            }
       

        }
        /// <summary>
        /// 查看发布通知
        /// </summary>
        /// <returns></returns>
        public ActionResult NewsInfo(string Title = "", int pageIndex = 1, int pageCount = 5)
        {
            Teacher tea = Session["Teacher"] as Teacher;
               //List<News> news = db.News.ToList();
                int totalCount = db.News.OrderBy(p => p.NewsID).Where(p=>p.TeacherID==tea.TeacherID).ToList().Count();
                //总页数
                double totalPage = Math.Ceiling((double)totalCount / pageCount);

                //获得用户集合 , 分页查询Skip（）跳过指定数量的集合 Take() 从过滤后返回的集合中再从第一行取出指定的行数
                List<News> news = db.News.OrderBy(p => p.NewsID).Where((p => p.Title.Contains(Title) || p.Title == "")).Where(p=>p.TeacherID==tea.TeacherID).Skip((pageIndex - 1) * pageCount).Take(pageCount).ToList();

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


