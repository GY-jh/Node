const express = require("express");
const router = express.Router();

const mysql = require('mysql');

const dbConfig = {
    host: 'hujiahui.top',
    port: '3306',
    user: 'his',
    password: '123456',
    database: 'his'
};

function query(sql, res) {
    const connection = mysql.createConnection(dbConfig);

    connection.connect();
    connection.query(sql, (err, results) => {
        if (err) {
            console.error(err);
            res.status(500).send('内部服务器错误');
        } else {
            const titles = results.map(result => result.name);
            res.json(titles);
        }
        connection.end();
    });
}

router.get('/api/titles', (req, res) => {
    const sql = 'SELECT DISTINCT name FROM title';
    query(sql, res);
});

router.get('/api/director', (req, res) => {
    const sql = 'SELECT DISTINCT name FROM doctor where title like "主任%"';
    query(sql, res);
});

router.get('/api/patient', (req, res) => {
    const sql = 'SELECT DISTINCT name FROM patient';
    query(sql, res);
});

router.get('/api/doctor', (req, res) => {
    const sql = 'SELECT DISTINCT name FROM doctor';
    query(sql, res);
});

router.get('/api/department', (req, res) => {
    const sql = 'SELECT DISTINCT name FROM department';
    query(sql, res);
});

module.exports = router;