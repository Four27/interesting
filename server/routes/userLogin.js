var express = require('express');
var router = express.Router();

var pool = require('../dao/pool');
var userSQL = require('../dao/userSql');

router.post ('/', function (req, res) {    //中间件函数，处理ajax请求
    pool.getConnection(function (err, connection) {    // 连接数据池，并处理不同的连接情况
        if (err) {
            
        }
    })
})
// define the about route
router.get('/about', function(req, res) {
  res.send('About birds');
});

module.exports = router;