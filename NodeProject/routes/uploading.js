const express = require("express");
const router = express();
const fs = require("fs");
const path = require("path");

//表单插件
const formidable = require("formidable");
//时间插件
const sd = require("silly-datetime");

router.post("/upload", (req, res) => {

    //创建form对象
    let form = new formidable.IncomingForm();
    //文件上传地址
    form.uploadDir = path.resolve(__dirname, "../public/uploads/");

    console.log(form.uploadDir);

    //表单接收完毕，执行回调函数
    form.parse(req, function (err, fields, files) {
        //自定义一个时间格式
        let t = sd.format(new Date(), "YYYYMMDDHHmmss");
        //自定义一个随机数
        let ran = parseInt(Math.random() * 8999 + 10000)
        //获取文件扩展名
        let extname = path.extname(files.file.originalFilename);
        //设置新路径，存储文件
        let newPath = './public/uploads/' + t + ran + extname;
        //文件改名
        fs.rename(files.file.filepath, newPath, function (err) {
            if (err) {
                console.log(err);
                return
            }
        })
        res.send({ data: { src: '/uploads/' + t + ran + extname }, src: '/uploads/' + t + ran + extname, code: "0000" });
    })
})

module.exports = router