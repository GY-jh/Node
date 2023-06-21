var svgCaptcha = require("svg-captcha");

class verification {
    getCode() { 

        //生成验证码规则
        const codeLength = Math.floor(Math.random() * 6) + 5;//使用验证码随机长度

        var verification = svgCaptcha.create({
            inversed: false,     //翻转颜色
            color : true,       //验证码颜色
            background: '#fff', // 验证码背景色
            fontSize : 72,      //字体大小
            noise : 3,         //噪声线条数
            width : 150,        //宽度
            height : 70,        //高度
            size : codeLength,  //验证码长度
            ignoreChar : '',    //验证码字符中排除某个字符
        })

        return verification;
    }
}

module.exports = verification