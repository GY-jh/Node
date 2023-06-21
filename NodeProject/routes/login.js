const express = require('express');
const router = express.Router();

const path = require('path');
const fs = require('fs');
const handleDB = require('../db/handleDB');

//跳转登录
router.get("/Logins", (req, res) => {
    const page = fs.readFileSync(path.join(__dirname, "../views", "login.html"));
    res.end(page);
})

//登录请求
router.all("/login", (req, res) => {

    let method = req.method;
    if (method == "POST") {
        //获取请求参数
        let { identification, password, captcha } = req.body;
        //获取服务端验证码
        let ct = req.session["verification"];
        if (ct && ct.toString().toUpperCase() == captcha.toString().toUpperCase()) {
            (async function () {
                let results = await handleDB(res, "user", "find", "服务器发生错误！", "Identification='" + identification + "' and password='" + password + "' ");
                if (results.length > 0) {
                    //设置token值
                    req.session["token"] = results[0].userid + "abc";
                    //服务端保存用户名和ID
                    req.session["userid"] = results[0].userid;
                    req.session["Identification"] = results[0].identification;
                    req.session["username"] = results[0].username;

                    // console.log(req.session["username"]);

                    //保存用户名角色
                    req.session["role"] = results[0].role;

                    let data = {
                        userid: results[0].userid,
                        Identification: results[0].Identification,
                        portrait: results[0].portrait,
                        role: results[0].role,
                        username: results[0].username
                    };

                    res.send({ msg: "查询成功！", code: "200", data: data });
                } else {
                    res.send({ msg: "查询失败，账号密码错误！", code: "404" });
                }
            })()
        } else {
            res.send({ msg: "验证码错误！", code: "500" });
        }
    } else {
        //get 请求
    }

})

module.exports = router