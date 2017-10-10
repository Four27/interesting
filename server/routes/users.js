var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {   // 中间件函数
  console.log('respond with a resource');
  next();
}, function (req, res) {
  res.send('respond with a resource once more');
});

module.exports = router;
