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
            ViewBag.Name = name;
            
            return View(stu);



        }

       /// <summary>
       /// 添加学生信息
       /// </summary>
       /// <returns></returns>
        public ActionResult AddStu()
        {

            return View();
        }


        [HttpPost]
        public ActionResult AddStu(Student stu, HttpPostedFileBase Photo)
        {
            //处理图片
            //if (Photo != null)
            //{
            //    string fileName = Path.GetFileName(Photo.FileName);//获得上传文件名字
            //    string e = Path.GetExtension(fileName);
            //    if (e == ".jpg" || e == ".png" || e == ".jif" || e == ".jpeg")
            //    {
            //        //保存到服务器中
            //        Photo.SaveAs(Server.MapPath("~/images/images/users/" + fileName));
            //       stu.Stu_Photo= fileName;
            //    }
            //    else
            //    {
            //        ViewBag.Message = "图片格式上传不正确！";
            //    }

            //}

            //添加用户信息
            //db.Class.Add(c);
            db.Student.Add(stu);
            db.SaveChanges();

            return RedirectToAction("Teacher", "StuInfo");
        }

    }
}