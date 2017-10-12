var mysql = require('mysql');
var db = require('./db');

var pool = mysql.createPool(db.mySql);   // 创建数据库连接池

module.exports = pool;