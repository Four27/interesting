var userSQL = {
    userLoginSelect: 'select userName from user where email = ? and userPwd = ?',

    userRegisterInsert: 'insert into user values(?,?,?)'    // 插入注册信息
}

module.exports = userSQL;

//存储相关SQL语句