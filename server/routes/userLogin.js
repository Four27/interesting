var express = require('express');
var router = express.Router();

var pool = require('../dao/pool');
var userSQL = require('../dao/userSql');

router.post('/', function (req, res) {    //中间件函数，处理ajax请求
    pool.getConnection(function (err, connection) {    // 连接数据池，并处理不同的连接情况
        if (err) {
            response = {
                status: 500,
                msg: '数据库连接失败！'
            };

            console.log(err);
            res.end(JSON.stringify(response));
        } else {
            connection.query(userSQL.userLoginSelect, [req.body.userName, req.body.userPwd], function (err, result) {
                if (err) {    // 数据库查询出错
                    response = {
                        status: 500,
                        msg: '数据库查询操作时出错！'
                    };

                    console.log(err);
                    res.end(JSON.stringify(response));
                    connection.release();   // 释放连接
                } else {
                    if (result !== '') {
                        req.session.userName = req.body.userName;
                        userid = result;
                        response = {
                            status: 200,
                            msg: '登录成功！',
                            userName: 'hello'
                        }

                        console.log(userid);
                        res.end(JSON.stringify(response));
                        connection.release();   // 释放连接
                    } else {
                        response = {
                            status: 500,
                            msg: 'username查询失败！'
                        }

                        res.end(JSON.stringify(response));
                        connection.release();   // 释放连接
                    }
                }
            })
        }
    })
});

// define the about route
router.get('/', function (req, res) {
    res.send('About birds');
});

module.exports = router;