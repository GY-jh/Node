const db = require('./index');

function handleDB(res, tableName, methodName, errorMsg, n1, n2) {
    //指定表名
    let model = db.model(tableName);
    let results;
    try {
        results = new Promise((resolve, reject) => {
            if (!n1) {
                model[methodName]((err, data) => {
                    if (err) {
                        reject(err);
                    }
                    resolve(data);
                })
                return;
            }
            if (!n2) {
                model[methodName](n1, (err, data) => {
                    if (err) {
                        reject(err);
                    }
                    resolve(data);
                })
                return;
            }
            model[methodName](n1, n2, (err, data) => {
                if (err) {
                    reject(err);
                }
                resolve(data);
            })
        })
    } catch (error) {
        console.log(error);//后端查看结果
        res.send({ errorMsg: error })
        return;
    }
    return results;
}

module.exports = handleDB;
