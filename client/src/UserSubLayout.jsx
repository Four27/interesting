import React from 'react';
import {Switch, Route, NavLink } from 'react-router-dom';

import UserNav from './UserNav.jsx';

import BrowseUsersPage from './BrowseUsersPage.jsx';
import AddUserPage from './AddUserPage.jsx';
import UserProfilePage from './UserProfilePage.jsx';

class UserSubLayout extends React.Component {
    render() {
        const { match } = this.props;

        return(
            <div>
                <aside>
                    <UserNav />
                 </aside>
                <div>
                    <Switch>
                        <Route exact path={match.path} component = {BrowseUsersPage} />
                        <Route exact path={`${match.path}/add`} component = {AddUserPage} />
                        <Route exact path={`${match.path}/:userId`} component = {UserProfilePage} />
                    </Switch>
                </div>
            </div>
        )
    }
};

export default UserSubLayout;