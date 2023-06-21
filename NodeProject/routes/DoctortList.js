const express = require("express");
const router = express.Router();

//db文件
const handleDB = require("../db/handleDB");

//获取全部列表
router.get("/getDoctors", (req, res) => {
    (async function () {
        let { name, page, limit } = req.query;
        let tjObj = "1=1"
        if (name) {
            tjObj += " and name like '%" + name + "%'";
        }
        let results1 = await handleDB(res, "doctor", "limit", "查询失败",
            { where: tjObj, number: page, count: limit });
        let results2 = await handleDB(res, "doctor", "find", "查询总条数失败", tjObj);
        let obj = {
            "count": results2.length,
            "msg": "查询成功",
            "data": results1,
            "code": "0000"
        }
        res.send(obj);
    })()
});
//添加
router.post("/addDoctort", (req, res) => {
    (async function () {
        let { picture, name, gender, age, phone, title } = req.body;
        let results = await handleDB(res, "doctor", "insert", "插入失败！",
            { picture: picture, name: name, gender: gender, age: age, phone: phone, title: title });
        let obj = {};
        if (results.affectedRows == 1) {
            obj = { "code": "200", "msg": "插入成功！" };
        } else {
            obj = { "code": "404", "msg": "插入失败！" };
        }
        res.send(obj);
    })()
})
//修改
router.post("/updateDoctort", (req, res) => {
    (async function () {
        let { picture, name, gender, age, phone, title, id } = req.body;
        let results = await handleDB(res, "doctor", "update", "修改失败！", "id =" + id,
            { picture: picture, name: name, gender: gender, age: age, phone: phone, title: title });
        let obj = {};
        if (results.affectedRows == 1) {
            obj = { "code": "200", "msg": "修改成功！" }
        } else {
            obj = { "code": "404", "msg": "修改失败！" }
        }
        res.send(obj)
    })()
})
//删除单个
router.post("/deleteDoctort", (req, res) => {
    (async function () {
        let { id } = req.body;
        let results = await handleDB(res, "doctor", "delete", "删除失败！", "id=" + id);
        let obj = {};
        if (results.affectedRows == 1) {
            obj = { "code": "200", "msg": "删除成功！" };
        } else {
            obj = { "code": "404", "msg": "删除失败！" };
        }
        res.send(obj);
    })()
})
//批量删除
router.post("/deleteDoctorts", (req, res) => {
    (async function () {
        let { ids } = req.body;
        // console.log(ids);
        var idarr = ids.split(",");
        let count = 0;
        for (var i = 0; i < idarr.length; i++) {
            var id = idarr[i];
            let results = await handleDB(res, "doctor", "delete", "删除失败！", "id=" + id);
            console.log(results);
            count++
        }
        let obj = {};
        if (count > 0) {
            obj = { "code": "200", "msg": "删除成功！" };
        } else {
            obj = { "code": "404", "msg": "删除失败！" };
        }
        res.send(obj);
    })()
})


//获取全部列表
router.get("/getRanks", (req, res) => {
    (async function () {
        let { page, limit } = req.query;
        let tjObj = "1=1"
        let results1 = await handleDB(res, "title", "limit", "查询失败",
            { where: tjObj, number: page, count: limit });
        let results2 = await handleDB(res, "title", "find", "查询总条数失败", tjObj);
        let obj = {
            "count": results2.length,
            "msg": "查询成功",
            "data": results1,
            "code": "0000"
        }
        res.send(obj);
    })()
});
//添加
router.post("/addRank", (req, res) => {
    (async function () {
        let { id, name } = req.body;
        let results = await handleDB(res, "title", "insert", "插入失败！",
            { id: id, name: name });
        let obj = {};
        if (results.affectedRows == 1) {
            obj = { "code": "200", "msg": "新增职称成功！" };
        } else {
            obj = { "code": "404", "msg": "新增职称失败！" };
        }
        res.send(obj);
    })()
})
//修改
router.post("/updateRank", (req, res) => {
    (async function () {
        let { name, id } = req.body;
        let results = await handleDB(res, "title", "update", "修改失败！", "id =" + id, { name: name });
        let obj = {};
        if (results.affectedRows == 1) {
            obj = { "code": "200", "msg": "修改成功！" }
        } else {
            obj = { "code": "404", "msg": "修改失败！" }
        }
        res.send(obj)
    })()
})
//删除单个
router.post("/deleteRank", (req, res) => {
    (async function () {
        let { id } = req.body;
        let results = await handleDB(res, "title", "delete", "删除失败！", "id=" + id);
        let obj = {};
        if (results.affectedRows == 1) {
            obj = { "code": "200", "msg": "删除成功！" };
        } else {
            obj = { "code": "404", "msg": "删除失败！" };
        }
        res.send(obj);
    })()
})
//批量删除
router.post("/deleteRanks", (req, res) => {
    (async function () {
        let { ids } = req.body;
        // console.log(ids);
        var idarr = ids.split(",");
        let count = 0;
        for (var i = 0; i < idarr.length; i++) {
            var id = idarr[i];
            let results = await handleDB(res, "title", "delete", "删除失败！", "id=" + id);
            console.log(results);
            count++
        }
        let obj = {};
        if (count > 0) {
            obj = { "code": "200", "msg": "删除成功！" };
        } else {
            obj = { "code": "404", "msg": "删除失败！" };
        }
        res.send(obj);
    })()
})


//获取全部列表
router.get("/getDepartment", (req, res) => {
    (async function () {
        let { name, page, limit } = req.query;
        let tjObj = "1=1"
        if (name) {
            tjObj += " and name like '%" + name + "%'";
        }
        let results1 = await handleDB(res, "department", "limit", "查询失败",
            { where: tjObj, number: page, count: limit });
        let results2 = await handleDB(res, "title", "find", "查询总条数失败", tjObj);
        let obj = {
            "count": results2.length,
            "msg": "查询成功",
            "data": results1,
            "code": "0000"
        }
        res.send(obj);
    })()
});
//添加
router.post("/addDepartment", (req, res) => {
    (async function () {
        let { name, director } = req.body;
        let results = await handleDB(res, "department", "insert", "插入失败！",
            { name: name, director: director });
        let obj = {};
        if (results.affectedRows == 1) {
            obj = { "code": "200", "msg": "插入成功！" };
        } else {
            obj = { "code": "404", "msg": "插入失败！" };
        }
        res.send(obj);
    })()
})
//修改
router.post("/updateDepartment", (req, res) => {
    (async function () {
        let { name, director, id } = req.body;
        let results = await handleDB(res, "department", "update", "修改失败！", "id =" + id,
            { name: name, director: director });
        let obj = {};
        if (results.affectedRows == 1) {
            obj = { "code": "200", "msg": "修改成功！" }
        } else {
            obj = { "code": "404", "msg": "修改失败！" }
        }
        res.send(obj)
    })()
})
//删除单个
router.post("/deleteDepartment", (req, res) => {
    (async function () {
        let { id } = req.body;
        let results = await handleDB(res, "department", "delete", "删除失败！", "id=" + id);
        let obj = {};
        if (results.affectedRows == 1) {
            obj = { "code": "200", "msg": "删除成功！" };
        } else {
            obj = { "code": "404", "msg": "删除失败！" };
        }
        res.send(obj);
    })()
})
//批量删除
router.post("/deleteDepartments", (req, res) => {
    (async function () {
        let { ids } = req.body;
        // console.log(ids);
        var idarr = ids.split(",");
        let count = 0;
        for (var i = 0; i < idarr.length; i++) {
            var id = idarr[i];
            let results = await handleDB(res, "department", "delete", "删除失败！", "id=" + id);
            console.log(results);
            count++
        }
        let obj = {};
        if (count > 0) {
            obj = { "code": "200", "msg": "删除成功！" };
        } else {
            obj = { "code": "404", "msg": "删除失败！" };
        }
        res.send(obj);
    })()
})

module.exports = router;