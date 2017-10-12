var express = require('express');
var router = express.Router();

var pool = require('../dao/pool');
var userSQL = require('../dao/userSQL');

router.post('/', function (req, res) {
  pool.getConnection(function (err, connection) {
    if (err) {             // 这里的错误是指数据库未连接成功
      response = {
        status: 403,
        msg: '数据库连接出现错误',
      }
      res.end(JSON.stringify(response));
    } else {
      connection.query(userSQL.userRegisterInsert, [req.body.userId, req.body.userName, req.body.userPwd], function (err, result) {
        if (err) {
          response = {
            status: 403,
            msg: '插入数据失败！'
          }
          res.end(JSON.stringify(response));
          connection.release();
        } else {
          response = {
            status: 200,
            msg: '账户创建成功！'
          };
          res.end(JSON.stringify(response));
          connection.release();
        }
      })
    }
  })
});

module.exports = router;