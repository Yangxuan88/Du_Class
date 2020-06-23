using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Du_Class.Models;
using Du_Class.SMS;

namespace Du_Class.Controllers
{
    public class HomeController : Controller
    {
        Du_ClassEntities db = new Du_ClassEntities();

        public ActionResult Index()
        {
            //SMS_Code.SendSms("18374629376", 2, 88888);
            return View();
        }

        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }

        public ActionResult LoginTeacher()
        {
            return View();
        }


        [HttpPost]
        public ActionResult LoginTeacher(string TeacherName, string passWord, string ValidateCode)
        {
            string code = Request["ValidateCode"];//页面的验证码

            var t = db.Teacher.FirstOrDefault(x => x.TeacherName == TeacherName && x.TeacherPassword == passWord);
            Session["Teacher"] = t;

            if (TeacherName != "" && passWord != "" && code == ValidateCode)
            {
                if (t == null)
                {
                    ViewBag.Error = "账号或密码有误，登录失败！";
                }
                else
                {
                    Session["TeacherName"] = t.TeacherName;
                    Session["Teapwd"] = t.TeacherPassword;
                    return RedirectToAction("Index", "Teacher");
                }
            }
            return View();
        }

        public ActionResult LoginStudent()
        {
            return View();
        }
        [HttpPost]
        public ActionResult LoginStudent(string Stu_Namber, string Stu_Password, string ValidateCode)
        {
            string code = Request["ValidateCode"];//页面的验证码

            var t = db.Student.FirstOrDefault(x => x.Stu_Namber == Stu_Namber && x.Stu_Password == Stu_Password);
            Session["Student"] = t;

            if (Stu_Namber != "" && Stu_Password != "" && code == ValidateCode)
            {
                if (t == null)
                {
                    ViewBag.Error = "账号或密码有误，登录失败！";
                }
                else
                {
                    Session["name"] = Stu_Namber;
                    Session["pwd"] = Stu_Password;
                    return RedirectToAction("Index", "StudentInfo");
                }
            }
            return View();
        }
        //定义全局变量
        public static string vc = "";
        public ActionResult AA(string tel)
        {
            Random r = new Random();
            for (int i = 0; i < 5; i++)
            {
                vc += r.Next(1, 10);
            }

            SMS_Code.SendSms(tel, 2, int.Parse(vc));
            return View();
        }

        /// <summary>
        /// 老师忘记密码
        /// </summary>
        /// <returns></returns>
        public ActionResult ForGetPwdTeacher()
        {
            return View();
        }

        [HttpPost]
        /// <summary>
        /// 老师忘记密码
        /// </summary>
        /// <returns></returns>
        public ActionResult ForGetPwdTeacher(string TeacherPhone, string NewPwd, string confirmPwd, string ValidateCode)
        {

            Teacher tea = db.Teacher.Where(p => p.TeacherPhone == TeacherPhone).FirstOrDefault();
            if (tea != null)
            {
                if (NewPwd != tea.TeacherPassword)
                {
                    if (NewPwd == confirmPwd)
                    {
                        if (vc == ValidateCode)
                        {
                            tea.TeacherPassword = NewPwd;
                            db.Entry(tea).State = System.Data.Entity.EntityState.Modified;
                            db.SaveChanges();
                            return Content("<script>alert('修改成功！请重新登录');location.href='/Home/LoginTeacher'</script>");
                        }
                        else
                        {
                            return Content("<script>alert('修改失败！验证码错误');history.go(-1)</script>");
                        }
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
                return Content("<script>alert('用户不存在');history.go(-1)</script>");
            }
        }




        public static string vc1 = "";
        public ActionResult AAA(string tel)
        {
            Random r = new Random();
            for (int i = 0; i < 5; i++)
            {
                vc1 += r.Next(1, 10);
            }

            SMS_Code.SendSms(tel, 2, int.Parse(vc1));
            return View();
        }

        /// <summary>
        /// 学生忘记密码
        /// </summary>
        /// <returns></returns>
        public ActionResult ForGetPwdStudent()
        {
            return View();
        }

        [HttpPost]
        public ActionResult ForGetPwdStudent(string Phone, string NewPwd, string confirmPwd, string ValidateCode)
        {

            Student stu = db.Student.Where(p => p.Phone == Phone).FirstOrDefault();
            if (stu != null)
            {
                if (NewPwd != stu.Stu_Password)
                {
                    if (NewPwd == confirmPwd)
                    {
                        if (vc1 == ValidateCode)
                        {
                            stu.Stu_Password = NewPwd;
                            db.Entry(stu).State = System.Data.Entity.EntityState.Modified;
                            db.SaveChanges();
                            return Content("<script>alert('修改成功！请重新登录');location.href='/Home/LoginStudent'</script>");
                        }
                        else
                        {
                            return Content("<script>alert('修改失败！验证码错误');history.go(-1)</script>");
                        }
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
                return Content("<script>alert('用户不存在');history.go(-1)</script>");
            }
        }

    }
}