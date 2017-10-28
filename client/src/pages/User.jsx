import React from 'react';
import { BrowserRouter, Route, Switch, Redirect, Link } from 'react-router-dom';

import UserLogin from './UserLogin.jsx';
import UserReg from './UserReg.jsx'
import UserHeader from './UserHeader.jsx'

class User extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <UserHeader />

                    <Switch>
                        <Route exact path="/login" component={UserLogin} />
                        <Route path="/register" component={UserReg} />
                    </Switch>
                </div>
            </BrowserRouter>
        )
    }
}
// 写代码的时候要注意，要把Link相关的代码放在和Switch不同的div里面。让Link和Switch成为两个部分，这样他们才不会在同一行中显示。
export default User;