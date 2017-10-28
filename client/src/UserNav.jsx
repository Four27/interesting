import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';

class UserNav extends React.Component {
    render() {
        const { match } = this.props;

        return (
            <nav>
                <NavLink exact to={`${match.path}`}>Browse</NavLink>
                <NavLink exact to={`${match.path}/add`}>Add</NavLink>
            </nav>
        )
    }

}

export default withRouter(UserNav);