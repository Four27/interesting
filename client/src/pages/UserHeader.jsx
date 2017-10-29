import React from 'react';
import { Link } from 'react-router-dom';

import '../style/UserHeader.css';

class UserHeader extends React.Component {
    render() {
        return (
            <div className="userHeader">
                <div className="header">
                    <p>Make life more interesting!</p>
                </div>
                <div className="userLink">
                    <div className='user'>
                        <Link to="/login">登录</Link>
                        <Link to="/register">注册</Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default UserHeader;