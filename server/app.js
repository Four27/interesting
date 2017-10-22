// 此文件中的中间件即为应用层中间件
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');    // 可以直接利用req.bodu获取转换后的body
var expressJWT = require('express-jwt');    // 用来解码验证token

var secretKey = "interesting";   // 设置密钥

var index = require('./routes/index');
var users = require('./routes/users');
var userLogin = require('./routes/userLogin');
var userRegister = require('./routes/userRegister');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));   // 指定模板文件所在目录
app.set('view engine', 'pug');     // 指定要使用的模板引擎

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());    
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));   // 提供应用程序需要的静态资源，同时是express中的唯一内置的中间件函数，为内置中间件

app.use(expressJWT ({
  secret: secretKey    // 设置token中的密钥
}).unless({
  path:['/userLogin']
}));

app.use('/', index);
app.use('/users', users);
app.use('/userLogin', userLogin);
app.use('/userRegister', userRegister);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
