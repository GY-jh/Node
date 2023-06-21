const express = require("express");
const router = express.Router();

//db文件
const handleDB = require("../db/handleDB");

//获取全部患者列表
router.get("/getPsatients", (req, res) => {
  (async function () {
    let { name, page, limit } = req.query;
    let tjObj = "1=1";
    if (name) {
      tjObj += " and name like '%" + name + "%'";
    }
    let results1 = await handleDB(res, "patient", "limit", "查询失败", {
      where: tjObj,
      number: page,
      count: limit,
    });
    let results2 = await handleDB(
      res,
      "patient",
      "find",
      "查询总条数失败",
      tjObj
    );
    let obj = {
      count: results2.length,
      msg: "查询成功",
      data: results1,
      code: "0000",
    };
    res.send(obj);
  })();
});
//添加患者
router.post("/addPsatient", (req, res) => {
  (async function () {
    let { picture, name, gender, age, contact } = req.body;
    let results = await handleDB(res, "patient", "insert", "插入失败！", {
      picture: picture,
      name: name,
      gender: gender,
      age: age,
      contact: contact,
    });
    let obj = {};
    if (results.affectedRows == 1) {
      obj = { code: "200", msg: "插入成功！" };
    } else {
      obj = { code: "404", msg: "插入失败！" };
    }
    res.send(obj);
  })();
});
//修改患者
router.post("/updatePsatient", (req, res) => {
  (async function () {
    let { picture, name, gender, age, contact, patientid } = req.body;
    let results = await handleDB(
      res,
      "patient",
      "update",
      "修改失败！",
      "patientid =" + patientid,
      {
        picture: picture,
        name: name,
        gender: gender,
        age: age,
        contact: contact,
      }
    );
    let obj = {};
    if (results.affectedRows == 1) {
      obj = { code: "200", msg: "修改成功！" };
    } else {
      obj = { code: "404", msg: "修改失败！" };
    }
    res.send(obj);
  })();
});
//删除单个
router.post("/deletePsatient", (req, res) => {
  (async function () {
    let { patientid } = req.body;
    let results = await handleDB(
      res,
      "patient",
      "delete",
      "删除失败！",
      "patientid=" + patientid
    );
    let obj = {};
    if (results.affectedRows == 1) {
      obj = { code: "200", msg: "删除成功！" };
    } else {
      obj = { code: "404", msg: "删除失败！" };
    }
    res.send(obj);
  })();
});
//批量删除
router.post("/deletePsatients", (req, res) => {
  (async function () {
    let { patientids } = req.body;
    // console.log(patientids);
    var idarr = patientids.split(",");
    let count = 0;
    for (var i = 0; i < idarr.length; i++) {
      var id = idarr[i];
      let results = await handleDB(
        res,
        "patient",
        "delete",
        "删除失败！",
        "patientid=" + id
      );
      console.log(results);
      count++;
    }
    let obj = {};
    if (count > 0) {
      obj = { code: "200", msg: "删除成功！" };
    } else {
      obj = { code: "404", msg: "删除失败！" };
    }
    res.send(obj);
  })();
});

//获取全部列表
router.get("/getRecord", (req, res) => {
  (async function () {
    let { patient, doctor, page, limit } = req.query;
    let tjObj = "1=1";
    if (patient) {
      tjObj += " and patient like '%" + patient + "%'";
    }
    if (doctor) {
      tjObj += " and doctor like '%" + doctor + "%'";
    }
    let results1 = await handleDB(res, "record", "limit", "查询失败", {
      where: tjObj,
      number: page,
      count: limit,
    });
    let results2 = await handleDB(
      res,
      "record",
      "find",
      "查询总条数失败",
      tjObj
    );
    // console.log(results2);
    let obj = {
      count: results2.length,
      msg: "查询成功",
      data: results1,
      code: "0000",
    };
    res.send(obj);
  })();
});
//添加
router.post("/addRecord", (req, res) => {
  (async function () {
    let { patient, doctor, department, time, diagnosis, remarks } = req.body;
    let results = await handleDB(res, "record", "insert", "插入失败！", {
      patient: patient,
      doctor: doctor,
      department: department,
      time: time,
      diagnosis: diagnosis,
      remarks: remarks,
    });
    console.log(results);
    let obj = {};
    if (results.affectedRows == 1) {
      obj = { code: "200", msg: "插入成功！" };
    } else {
      obj = { code: "404", msg: "插入失败！" };
    }
    res.send(obj);
  })();
});
//修改
router.post("/updateRecord", (req, res) => {
  (async function () {
    let { patient, doctor, department, time, diagnosis, remarks, id } =
      req.body;
    let results = await handleDB(
      res,
      "record",
      "update",
      "修改失败！",
      "id =" + id,
      {
        patient: patient,
        doctor: doctor,
        department: department,
        time: time,
        diagnosis: diagnosis,
        remarks: remarks,
      }
    );
    let obj = {};
    if (results.affectedRows == 1) {
      obj = { code: "200", msg: "修改成功！" };
    } else {
      obj = { code: "404", msg: "修改失败！" };
    }
    res.send(obj);
  })();
});
//删除单个
router.post("/deleteRecord", (req, res) => {
  (async function () {
    let { id } = req.body;
    let results = await handleDB(
      res,
      "record",
      "delete",
      "删除失败！",
      "id=" + id
    );
    let obj = {};
    if (results.affectedRows == 1) {
      obj = { code: "200", msg: "删除成功！" };
    } else {
      obj = { code: "404", msg: "删除失败！" };
    }
    res.send(obj);
  })();
});
//批量删除
router.post("/deleteRecords", (req, res) => {
  (async function () {
    let { ids } = req.body;
    var idarr = ids.split(",");
    let count = 0;
    for (var i = 0; i < idarr.length; i++) {
      var id = idarr[i];
      let results = await handleDB(
        res,
        "record",
        "delete",
        "删除失败！",
        "id=" + id
      );
      console.log(results);
      count++;
    }
    let obj = {};
    if (count > 0) {
      obj = { code: "200", msg: "删除成功！" };
    } else {
      obj = { code: "404", msg: "删除失败！" };
    }
    res.send(obj);
  })();
});

module.exports = router;
