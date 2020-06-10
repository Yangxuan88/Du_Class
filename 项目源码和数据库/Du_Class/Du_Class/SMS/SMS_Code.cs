using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Remoting;
using System.Web;
using Aliyun.Acs.Core;
using Aliyun.Acs.Core.Exceptions;
using Aliyun.Acs.Core.Http;
using Aliyun.Acs.Core.Profile;

namespace Du_Class.SMS
{
    /// <summary>
    /// 短信帮助类
    /// </summary>
    public static class SMS_Code
    {
        /// <summary>
        /// 阿里短信id
        /// </summary>
        private const string appId = "LTAI4G1h6TiemJzNeHqR7NmV";

        /// <summary>
        /// 阿里短信密码
        /// </summary>
        private const string appPwd = "yTChd92SnN4Pl9CtjAUKdnLKEQmtxE";


        /// <summary>
        /// 发送短信
        /// </summary>
        /// <param name="PhoneNumbers">手机号 (多个用逗号隔开)</param>
        /// <param name="Code">短信模板code(枚举 SMSType) SMS_189761938</param>
        /// <param name="value">模板内容参数(json格式 {"code":"value"})</param>
        /// <returns>返回200 及发送成功</returns>
        public static int SendSms(string PhoneNumbers, int Code, int value)
        {
            //通过枚举获得发送的模板类型
            string TemplateCode = Enum.GetName(typeof(SMSType), Code);
            //生成随机数



            IClientProfile profile = DefaultProfile.GetProfile("cn-hangzhou", appId, appPwd);
            DefaultAcsClient client = new DefaultAcsClient(profile);
            CommonRequest request = new CommonRequest
            {
                Method = MethodType.POST,
                Domain = "dysmsapi.aliyuncs.com",
                Version = "2017-05-25",
                Action = "SendSms"
            };
            // request.Protocol = ProtocolType.HTTP;
            request.AddQueryParameters("PhoneNumbers", PhoneNumbers);
            request.AddQueryParameters("SignName", "十月微凉");
            request.AddQueryParameters("TemplateCode", TemplateCode);
            request.AddQueryParameters("TemplateParam", "{\"code\":\"" + value + "\"}");
            try
            {
                CommonResponse response = client.GetCommonResponse(request);

                //LoggerHelper.Info("SMS|  " + PhoneNumbers + "【" + Params + "】");HttpStatus
                return response.HttpStatus;
                //return System.Text.Encoding.Default.GetString(response.HttpResponse.Content);
            }
            catch 
            {
                throw;
            }
           }
        }
    }