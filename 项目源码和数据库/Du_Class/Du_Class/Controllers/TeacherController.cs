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
        public ActionResult StuInfo(string name = "")
        {
            List<Teacher> tea = db.Teacher.ToList();
                ViewBag.tea = tea;
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
        //public ActionResult TeaClass() {

        //    return View();
        //}

        //[HttpPost]
        //public ActionResult TeaClass(Teacher tea,Class c)
        //{
        //    db.Teacher.Add(tea);
        //    db.Class.Add(c);
        //    db.SaveChanges();
        //    return View();
        //}


        /// <summary>
        /// 删除学生信息
        /// </summary>
        /// <returns></returns>
        public ActionResult StuDelete(int? id) {

           var student=db.Student.Find(id);
            db.Student.Remove(student);
            db.SaveChanges();
            return RedirectToAction("StuEdit");
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
        public ActionResult StuAlter(Student stu,HttpPostedFileBase EPhoto)
        {
            //if (EPhoto != null)
            //{
            //    string fileName = Path.GetFileName(EPhoto.FileName);//获得上传文件名字
            //    string e = Path.GetExtension(fileName);
            //    if (e == ".jpg" || e == ".png" || e == ".jif" || e == ".jpeg")
            //    {
            //        //保存到服务器中
            //        EPhoto.SaveAs(Server.MapPath("~/images/images/users/" + fileName));
            //        user.Photo = fileName;
            //    }
            //    else
            //    {
            //        ViewBag.Message = "图片格式上传不正确！";
            //    }

            //}


            db.Entry(stu).State = System.Data.Entity.EntityState.Modified;
            db.SaveChanges();
            return RedirectToAction("StuEdit");
        }
    }
}