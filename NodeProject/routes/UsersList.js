const express = require("express");
const router = express.Router();

//db文件
const handleDB = require("../db/handleDB");

//将传回数据库的字段加密，取出解密
// const encrypt = require('../utils/encrypts');
// const decrypt = require('../utils/decodes');

//获取全部用户列表
router.get("/getUsers", (req, res) => {
    (async function () {
        let { Identification, username, page, limit } = req.query;
        let tjObj = "1=1"
        if (Identification) {
            tjObj += " and Identification like '%" + Identification + "%' ";
        }
        if (username) {
            tjObj += " and username like '%" + username + "%' ";
        }
        let results1 = await handleDB(res, "user", "limit", "查询失败",
            { where: tjObj, number: page, count: limit });
        let results2 = await handleDB(res, "user", "find", "查询总条数失败", tjObj);
        let obj = {
            "count": results2.length,
            "msg": "查询成功",
            "data": results1,
            "code": "0000"
        }
        res.send(obj);
    })()
});

//添加用户
router.post("/addUser", (req, res) => {
    (async function () {
        let { Identification, username, password, role, phone, portrait } = req.body;
        // let encryptedPassword = encrypt(password); // 加密password
        let results = await handleDB(res, "user", "insert", "插入失败！",
            { Identification: Identification, username: username, password: password, role: role, phone: phone, portrait: portrait });
        let obj = {};
        if (results.affectedRows == 1) {
            obj = { "code": "200", "msg": "插入成功！" };
        } else {
            obj = { "code": "404", "msg": "插入失败！" };
        }
        res.send(obj);
    })()
})

//修改用户
router.post("/updateUser", (req, res) => {
    (async function () {
        let { Identification, username, password, role, phone, portrait, id } = req.body;
        let results = await handleDB(res, "user", "update", "修改失败！", "userid =" + id,
            { Identification: Identification, username: username, password: password, role: role, phone: phone, portrait: portrait });
        let obj = {};
        if (results.affectedRows == 1) {
            obj = { "code": "200", "msg": "修改成功！" }
        } else {
            obj = { "code": "404", "msg": "修改失败！" }
        }
        res.send(obj)
    })()
})

//修改用户头像
router.post("/updateUserTx", (req, res) => {
    (async function () {
        let { portrait, id } = req.body;
        let results = await handleDB(res, "user", "update", "修改失败！", "userid =" + id,
            { portrait: portrait });
        let obj = {};
        if (results.affectedRows == 1) {
            obj = { "code": "200", "msg": "修改成功！" }
        } else {
            obj = { "code": "404", "msg": "修改失败！" }
        }
        res.send(obj)
    })()
})

//删除单个用户
router.post("/deleteUser", (req, res) => {
    (async function () {
        let { id } = req.body;
        let results = await handleDB(res, "user", "delete", "删除失败！", "userid=" + id);
        let obj = {};
        if (results.affectedRows == 1) {
            obj = { "code": "200", "msg": "删除成功！" };
        } else {
            obj = { "code": "404", "msg": "删除失败！" };
        }
        res.send(obj);
    })()
})

//批量删除用户
router.post("/deleteUsers", (req, res) => {
    (async function () {
        let { ids } = req.body;
        console.log(ids);
        var idarr = ids.split(",");
        let count = 0;
        for (var i = 0; i < idarr.length; i++) {
            var id = idarr[i];
            let results = await handleDB(res, "user", "delete", "删除失败！", "userid=" + id);
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