const express = require("express");
const router = express();

const verification = require("../utils/verification");

//专门生产验证码
router.get("/getVerification", (req, res) => {
    //创建captcha对象
    let VerificationObj = new verification();
    //获取验证码
    let verifications = VerificationObj.getCode();
    console.log("当前验证码：" + verifications.text);
    //保存验证码到session里面
    req.session["verification"] = verifications.text;
    //设置图片响应头
    res.setHeader('Content-Type', 'image/svg+xml');
    //添加到浏览器里面
    res.send(verifications.data)
})

module.exports = router;