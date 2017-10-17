var userSQL = {
    userLogin: 'select userName from user where userId = ?',
    userLoginSelect: 'select userId from user where userName = ? and userPwd = ?',

    userRegisterInsert: 'insert into register values(?,?,?)'    // 插入注册信息
}

module.exports = userSQL;

//存储相关SQL语句