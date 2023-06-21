//钩子函数
//验证是否结束
function Intercept(req, res, next) {
    // console.log("登录验证中••••••");

    //获取token的值
    let token = req.session['token'];
    
    if (token || req.url == '/login' || req.url == '/getVerification') {
        next();
    }else {
        console.log("登录验证失败！返回登录页！");
        res.redirect("/Logins");
        return;
     }

}

module.exports = {
    Intercept
}
