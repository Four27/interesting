var express = require('express');
var jwt = require('jsonwebtoken');
var router = express.Router();

var pool = require('../dao/pool');
var userSQL = require('../dao/userSql');
var secretKey = "interesting";

router.post('/', function (req, res) {    //中间件函数，处理ajax请求
    pool.getConnection(function (err, connection) {    // 连接数据池，并处理不同的连接情况
        if (err) {
            var response = {
                status: 500,
                msg: '数据库连接失败！'
            };

            console.log(err);
            res.end(JSON.stringify(response));
        } else {
            connection.query(userSQL.userLoginSelect, [req.query.userName, req.query.userPwd], function (err, result) {
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
                        var userId = result[0].userId;        // result必须用result[0]这种形式取值，因为result的返回值实际上是：[ RowDataPacket { userId: '2' } ]这种形式   
                        var mytoken = jwt.sign({
                                id: userId
                            }, secretKey, {expiresIn: '1d'});   // expiresIn为token的有效时间，1d表示一天

                        var response = {
                            status: 200,
                            msg: '登录成功！',
                            userId: userId,
                            secret: secretKey,
                            token: mytoken
                        };

                        res.end(JSON.stringify(response));
                        connection.release();   // 释放连接
                    } else {
                        var response = {
                            status: 500,
                            msg: 'username查询失败！'
                        };

                        console.log(err);
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