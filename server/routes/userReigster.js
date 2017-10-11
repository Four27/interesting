var express = require('express');
var router = express.Router();

var pool = require('../dao/pool');
var userSQL = require('../dao/userSql');

router.post('/', function(req, res) {
  pool.getConnection(function (err, connection) {
    if (err) {             // 这里的错误是指数据库未连接成功
      response = {
        status: 403,
        errMsg: '数据库连接出现错误',
      }
      res.end(JSON.stringify(response));
    } else {
      connection.query()
    }
  })
});

module.exports = router;