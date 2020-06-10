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
        public ActionResult LoginTeacher(string TeacherName, string passWord,string ValidateCode)
        {
            string code = Request["ValidateCode"];//页面的验证码

            var t = db.Teacher.FirstOrDefault(x => x.TeacherName == TeacherName && x.TeacherPassword == passWord);
            Session["Teacher"] = t;
            if (TeacherName != "" && passWord != "" && code== ValidateCode)
              {
                if (t == null)
                {
                    ViewBag.Error = "账号或密码有误，登录失败！";
                }
                else
                {
                    return RedirectToAction("Index", "Teacher");
                }
            }
            return View();
        }

        /// <summary>
        /// 忘记密码
        /// </summary>
        /// <returns></returns>
        public ActionResult ForGetPwd()
        {
            //string phone = "17346914589";
            //Random rad = new Random();//实例化随机数产生器rad；
            //int value = rad.Next(100000, 1000000);//用rad生成大于等于100000，小于等于999999的随机数；

            //try
            //{
            //    //返回200 及成功
            //    if (SMS_Code.SendSms(phone, 0, value) == 200)
            //    {
            //        //发送成功时 将验证码返回给客户端进行验证判断
            //        return View();
            //    }
            //    else
            //    {
            //        return View();
            //    }
            //}
            //catch
            //{
            //    return View();
            //}
            return View();
        }

        //[HttpPost]
        //public ActionResult LoginTeacher(string TeacherName, string passWord)
        //{
        //    页面提示信息
        //    string str = "";
        //    string userName = tea.TeacherName;
        //    string userPwd = tea.TeacherPassword;
        //    string code = Request["ValidateCode"];//页面的验证码

        //    判断输入信息是否完整
        //    if (TeacherName != "" && passWord != "" && code != "")
        //    {
        //        string vCode; //获取session中保存的验证码
        //        try
        //        {
        //            先获取session中的验证码
        //            vCode = Session["ValidateCode"].ToString();
        //        }
        //        catch (Exception e)
        //        {
        //            错误
        //            Console.WriteLine(e);
        //            throw;
        //        }
        //        判断输入的验证码与保持在session中的验证码是否一致 忽略大小写
        //        if (vCode.ToLower() == code.ToLower())
        //        {
        //            判断实体中是否存在改登录名
        //            Teacher teacher;
        //            try
        //            {
        //                teacher = db.Teacher.FirstOrDefault(x => x.TeacherName == TeacherName && x.TeacherPassword == passWord);
        //            }
        //            catch (Exception e)
        //            {
        //                Console.WriteLine(e);
        //                throw;
        //            }
        //            存在登录名
        //            if (teacher != null)
        //            {
        //                判断密码是否一致
        //                if (teacher.TeacherPassword == passWord)
        //                {
        //                    成功登录
        //                    Session["Teacher"] = teacher;//保存登录
        //                    return RedirectToAction("Index", "Teacher");
        //                }
        //                else
        //                {
        //                    str = "密码错误";
        //                }
        //            }
        //            else
        //            {
        //                str = "不存在该登录名";
        //            }
        //        }
        //        else
        //        {
        //            str = "验证码错误";
        //        }

        //    }
        //    else
        //    {
        //        str = "请填写完整！";
        //    }
        //    @ViewBag.name = tea.TeacherName;
        //    @ViewBag.pwd = tea.TeacherPassword;
        //    @ViewBag.error = str;
        //    return View();
        //}
    }
}