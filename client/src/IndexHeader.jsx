import React from 'react';
import { NavLink } from 'react-router-dom';

class IndexHeader extends React.Component {
    render () {
        return(
            <div>
                <h1>Welcome to our app!</h1>
                <nav>
                    <NavLink exact to='/'>Home</NavLink>
                    <NavLink to='/users'>Users</NavLink>
                    <NavLink to='/products'>Products</NavLink>
                </nav>
            </div>
        )
    }
}

export default IndexHeader;