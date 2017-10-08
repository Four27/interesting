// 此文件中的中间件即为路由器层中间件，和应用层的区别在于绑定的实例不同，应用层为app.
// 路由器曾中间件中也可以出现，router.use()这种形式
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
