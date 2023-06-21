const express = require('express');
const router = express.Router();

const path = require('path');
const fs = require('fs');

//db文件
const handleDB = require("../db/handleDB"); 

//患者管理界面
router.get("/view/system/patient.html", (req, res) => {
    const page = fs.readFileSync(path.join(__dirname, "../views/view/system/", "patient.html"));
    res.end(page);
})
//患者添加
router.get("/view/system/operatePatient/add.html", (req, res) => {
    const page = fs.readFileSync(path.join(__dirname, "../views/view/system/operatePatient/", "add.html"));
    res.end(page);
})
//患者修改
router.get("/view/system/operatePatient/edit.html", (req, res) => {
    (async function () {
        let { patientid } = req.query
        let results1 = await handleDB(res, "patient", "find", "查询失败！", " patientid = " + patientid);
        res.render("view/system/operatePatient/edit", results1[0])
    })()
})


//就诊记录
router.get("/view/system/record.html", (req, res) => {
    const page = fs.readFileSync(path.join(__dirname, "../views/view/system/", "record.html"));
    res.end(page);
})
//添加
router.get("/view/system/operateRecord/add.html", (req, res) => {
    const page = fs.readFileSync(path.join(__dirname, "../views/view/system/operateRecord/", "add.html"));
    res.end(page);
})
//修改
router.get("/view/system/operateRecord/edit.html", (req, res) => {
    (async function () {
        let { id } = req.query
        let results1 = await handleDB(res, "record", "find", "查询失败！", " id = " + id);
        // console.log(results1);
        res.render("view/system/operateRecord/edit", results1[0])
    })()
})

module.exports = router;