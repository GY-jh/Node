const path = require('path');
const express = require('express');
const app = express();

//配置文件
const bodyParser = require('body-parser');
const cookieParser = require("cookie-parser");
const cookieSession = require("cookie-session");

//钩子函数（验证路由）
const Intercept = require('./utils/Intercept');

const title = require('./utils/titlesDB');

//导入路由配置
const logins = require("./routes/login");
const User = require("./routes/UsersList")
const users = require("./routes/userRoute");
const upload = require('./routes/uploading');
const doctor = require("./routes/DoctortList");
const Doctor = require("./routes/DoctortRoute");
const Patuent = require("./routes/PatientList");
const patients = require("./routes/patientRoute");
const verifications = require("./routes/Verification");

var config = app => {

    //数据解析
    app.use(bodyParser.urlencoded({ extended: false }));//表单数据解析
    app.use(bodyParser.json());//JSON格式数据解析

    //静态文件加载
    app.use(express.static("public"));

    //加载模板
    app.engine("html", require("express-art-template"));
    //运行模式为生产模式
    app.set("view options", { debug: process.env.NODE_ENV !== 'production' })
    //模版存放目录：views文件夹
    app.set("views", path.join(__dirname, "views"));
    //引擎后缀为html
    app.set("view engine", "html");

    //cookie
    app.use(cookieParser());
    //session
    app.use(cookieSession({
        name: "my_session",
        keys: ["fsi>:8614erwjw*(&*(*ho&*(^&564*"], //内部加密
        maxAge: 1000 * 60 * 60 * 6  //过期时间
    }))

    //配置路由(路由注册)
    app.use(logins);
    app.use(verifications);
    app.use(Intercept.Intercept, title);
    app.use(Intercept.Intercept, User);
    app.use(Intercept.Intercept, doctor);
    app.use(Intercept.Intercept, Doctor);
    app.use(Intercept.Intercept, users);
    app.use(Intercept.Intercept, upload);
    app.use(Intercept.Intercept, Patuent);
    app.use(Intercept.Intercept, patients);
}

module.exports = config