var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var app = express();
var port = 3000;

app.set('views', path.join(__dirname, '../client/build'));    // 视图加载文件位置，即client中index.html文件的位置
app.set('view engine', 'html');   // 定义文件类型
// app.engine('html', ejs.renderFile); 

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());     // 解析json
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());     // 解析cookie
app.use(express.static(path.join(__dirname, '../client/build')));

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

app.all ("*", function (req, res) {
  res.render("index");
})
app.listen(port, function () {
  console.log("server is running on port 3000");
})

module.exports = app;
