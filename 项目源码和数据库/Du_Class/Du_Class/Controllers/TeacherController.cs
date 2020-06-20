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
        public ActionResult StuInfo(string name = "",int pageIndex = 1, int pageCount = 5)
        {
            List<Teacher> tea = db.Teacher.ToList();
            ViewBag.tea = tea;

            //List<Student> stu = db.Student.Where((p => p.Stu_Name.Contains(name) || p.Stu_Name == "")).ToList();
        ViewBag.Name = name;

            List<Class> cla = db.Class.ToList();
       
            ViewBag.cla = cla;
            //总行数
            int totalCount = db.Student.OrderBy(p => p.StudentID).ToList().Count();
            //总页数
            double totalPage = Math.Ceiling((double)totalCount / pageCount);
     
            //获得用户集合 , 分页查询Skip（）跳过指定数量的集合 Take() 从过滤后返回的集合中再从第一行取出指定的行数
            List<Student> stu = db.Student.OrderBy(p => p.StudentID).Where((p => p.Stu_Name.Contains(name) || p.Stu_Name == "")).Skip((pageIndex - 1) * pageCount).Take(pageCount).ToList();
        
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
        public FileContentResult ExportToExcel(List<Student> student)
        {
            student = db.Student.Where(p=>p.Class.ClassName=="2018173802").ToList();
            string[] columns = { "班级", "学号", "姓名", "性别" };
            byte[] filecontent = ExcelExportHelper.ExportExcel(student, "", false, columns);
            return File(filecontent, ExcelExportHelper.ExcelContentType, "MyStudent.xlsx");
        }

        /// <summary>
        /// 用例图
        /// </summary>
        /// <returns></returns>
        public ActionResult Tu()
        {
            var stu = db.Student.ToList();
            return View(stu);
        }

        public ActionResult Picture()
        {
            var stu = db.Student.ToList();
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

            //List<Student> stu = db.Student.Where((p => p.Stu_Name.Contains(name) || p.Stu_Name == "")).ToList();
            ViewBag.Name = name;
            //总行数
            int totalCount = db.Student.OrderBy(p => p.StudentID).ToList().Count();
            //总页数
            double totalPage = Math.Ceiling((double)totalCount / pageCount);

            //获得用户集合 , 分页查询Skip（）跳过指定数量的集合 Take() 从过滤后返回的集合中再从第一行取出指定的行数
            List<Student> stu = db.Student.OrderBy(p => p.StudentID).Where((p => p.Stu_Name.Contains(name) || p.Stu_Name == "")).Skip((pageIndex - 1) * pageCount).Take(pageCount).ToList();
            ViewBag.name = name;
            ViewBag.pageIndex = pageIndex;
            ViewBag.pageCount = pageCount;
            ViewBag.totalCount = totalCount;
            ViewBag.totalPage = totalPage;

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
        public ActionResult StuDelete(int? id)
        { 
            var student=db.Student.Find(id);
            foreach (var item in student.Grade)
            {
                if(item.Stu_Score!=null)
                {
                    return Content("<script>alert('此学生有成绩不可删除！');history.go(-1)</script>");
                }
                else
                {
                    db.Student.Remove(student);
                    db.SaveChanges();
                   
                }
            }     return RedirectToAction("StuAlter");
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
            List<Class> cla = db.Class.ToList();
            ViewBag.CAL = cla;
            return View();
        }


        [HttpPost]
        public ActionResult AddStu(Student stu, HttpPostedFileBase Photo,string Stu_Namber,string IDCard,string Phone)
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
            //stu.Stu_Namber = Stu_Namber;
            //stu.IDCard = IDCard;
            //stu.Phone = Phone;
                //Where(p => p.Stu_Namber == Stu_Namber && p.IDCard == IDCard && p.Phone == Phone).FirstOrDefault();
           //if (stu.Stu_Namber!=Stu_Namber && stu.IDCard!=IDCard && stu.Phone!=Phone)
           // {
                db.Student.Add(stu);
                db.SaveChanges();
                return RedirectToAction("StuInfo");
            //}
            //else
            //{
            //    return Content("<script>alert('学号、身份证、手机号具有唯一性，请重新填写！');history.go(-1)</script>");
            //}

           
        }


        public ActionResult Course()
        {
            List<Class> cla = db.Class.ToList();
            ViewBag.CAL = cla;
            return View();
        }
    }
}


