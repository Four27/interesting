import React from 'react';
import { Input, Icon } from 'antd';

import '../TestInput.css';

class TestInput extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            userName: "",
            userPwd: ""
        };
    }

    emitEmptyName = () => {
        this.userNameInput.focus();
        this.setState({ userName: '' });
    }
    emitEmptyPwd = () => {
        this.userPwdInput.focus();
        this.setState({ userPwd: '' });
    }
    onChangeUserName = (e) => {
        this.setState({ userName: e.target.value });
    }
    onChangeUserPwd = (e) => {
        this.setState({ userPwd: e.target.value });
    }
    render() {
        const { userName, userPwd } = this.state;
        const suffixName = userName ? <Icon type="close-circle" onClick={this.emitEmptyName } /> : null;   // 用后缀图标实现输入框值的切换
        const suffixPwd = userPwd ? <Icon type="close-circle" onClick={this.emitEmptyPwd} /> : null;   // 用后缀图标实现输入框值的切换
        return (
            <div className="user">
                <div className="userLogin">
                    <div className="userName">
                        <Input
                            placeholder="Enter your userName"
                            prefix={<Icon type="user" />}    // 前缀图标
                            suffix={suffixName}                  // 后缀图标
                            value={userName}
                            onChange={this.onChangeUserName}
                            ref={node => this.userNameInput = node}
                        />
                    </div>
                    <div className="userPwd">
                        <Input
                            placeholder="Enter your password"
                            prefix={<Icon type="lock" />}    // 前缀图标
                            suffix={suffixPwd}                  // 后缀图标
                            value={userPwd}
                            onChange={this.onChangeUserPwd}
                            ref={node => this.userPwdInput = node}
                            type="password"
                        />
                    </div>
                </div>
            </div>

        );
    }
}

export default TestInput;