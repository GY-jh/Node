const express = require('express');
const router = express.Router();

const path = require('path');
const fs = require('fs');

//db文件
const handleDB = require("../db/handleDB");

//跳转登录
router.get("/login.html", (req, res) => {
    res.render('login');
})

//跳转管理界面主页
router.get("/index.html", (req, res) => {
    let username = req.session["username"];
    let role = req.session["role"];
    res.render('index', { username: username, role: role });
})

//个人基本资料
router.get("/view/system/person.html", (req, res) => {
    const page = fs.readFileSync(path.join(__dirname, "../views/view/system/", "person.html"));
    res.end(page);
})

//个人基本资料
router.get("/view/system/operate/profile.html", (req, res) => {
    const page = fs.readFileSync(path.join(__dirname, "../views/view/system/operateUser/", "profile.html"));
    res.end(page);
})


//首页
router.get("/view/console/console1.html", (req, res) => {
    res.render('view/console/console1.html');
})

//用户管理界面
router.get("/view/system/user.html", (req, res) => {
    const page = fs.readFileSync(path.join(__dirname, "../views/view/system/", "user.html"));
    res.end(page);
})

//添加用户
router.get("/view/system/operateUser/add.html", (req, res) => {
    const page = fs.readFileSync(path.join(__dirname, "../views/view/system/operateUser/", "add.html"));
    res.end(page);
})

//修改用户
router.get("/view/system/operateUser/edit.html", (req, res) => {
    (async function () {
        let { userid } = req.query
        let results1 = await handleDB(res, "user", "find", "查询失败！", " userid = " + userid);
        res.render("view/system/operateUser/edit", results1[0])
    })()
})

//普通用户
router.get("/view/system/role2.html", (req, res) => {
    const page = fs.readFileSync(path.join(__dirname, "../views/view/system/", "role2.html"));
    res.end(page);
})
router.get("/view/system/patient2.html", (req, res) => {
    const page = fs.readFileSync(path.join(__dirname, "../views/view/system/", "patient2.html"));
    res.end(page);
})
router.get("/view/system/record2.html", (req, res) => {
    const page = fs.readFileSync(path.join(__dirname, "../views/view/system/", "record2.html"));
    res.end(page);
})
module.exports = router;