var mysql = require('mysql');
var db = require('./db');

var pool = mysql.createPool(db.mysql);   // 创建数据库连接池

module.exports = pool;