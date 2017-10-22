import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';

const UserNav = ({match}) => (
    <nav>
        <NavLink exact to={`${match.path}`}>Browse</NavLink>
        <NavLink exact to={`${match.path}/add`}>Add</NavLink>
    </nav>
);

export default withRouter(UserNav);