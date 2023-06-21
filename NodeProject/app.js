const express = require('express');
const app = express();

//导入配置文件config
const config = require('./config');
config(app);

//监听端口，启动服务
app.listen(8080, () => {
    console.log("服务器启动成功！");
});