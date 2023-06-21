const express = require('express');
const router = express.Router();

const path = require('path');
const fs = require('fs');

//db文件
const handleDB = require("../db/handleDB"); 

//医生管理界面
router.get("/view/system/role.html", (req, res) => {
    const page = fs.readFileSync(path.join(__dirname, "../views/view/system/", "role.html"));
    res.end(page);
})
//添加医生
router.get("/view/system/operateDoctor/add.html", (req, res) => {
    const page = fs.readFileSync(path.join(__dirname, "../views/view/system/operateDoctor/", "add.html"));
    res.end(page);
})
//修改
router.get("/view/system/operateDoctor/edit.html", (req, res) => {
    (async function () {
        let { id } = req.query
        let results1 = await handleDB(res, "doctor", "find", "查询失败！", " id = " + id);
        // console.log(results1[0]);
        res.render("view/system/operateDoctor/edit", results1[0])
    })()
})

//职称管理界面
router.get("/view/system/Rank.html", (req, res) => {
    const page = fs.readFileSync(path.join(__dirname, "../views/view/system/", "Rank.html"));
    res.end(page);
})
//添加
router.get("/view/system/operateRank/add.html", (req, res) => {
    const page = fs.readFileSync(path.join(__dirname, "../views/view/system/operateRank/", "add.html"));
    res.end(page);
})
//修改
router.get("/view/system/operateRank/edit.html", (req, res) => {
    (async function () {
        let { id } = req.query
        let results1 = await handleDB(res, "title", "find", "查询失败！", " id = " + id);
        // console.log(results1[0]);
        res.render("view/system/operateRank/edit", results1[0])
    })()
})

//职称管理界面
router.get("/view/system/department.html", (req, res) => {
    const page = fs.readFileSync(path.join(__dirname, "../views/view/system/", "department.html"));
    res.end(page);
})
//添加
router.get("/view/system/operateDepartment/add.html", (req, res) => {
    const page = fs.readFileSync(path.join(__dirname, "../views/view/system/operateDepartment/", "add.html"));
    res.end(page);
})
//修改
router.get("/view/system/operateDepartment/edit.html", (req, res) => {
    (async function () {
        let { id } = req.query
        let results1 = await handleDB(res, "department", "find", "查询失败！", " id = " + id);
        console.log(results1[0]);
        res.render("view/system/operateDepartment/edit", results1[0])
    })()
})

module.exports = router;