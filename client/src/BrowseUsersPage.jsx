import React from 'react';
import { Link } from 'react-router-dom';

const BrowseUsersPage = ({ match }) => (
    <div>
        <div>Browse Users</div>
        <ul>
            <li><Link to={`${match.url}/1`}>Brad</Link></li>
            <li><Link to={`${match.url}/2`}>Mary</Link></li>
            <li><Link to={`${match.url}/3`}>Tom</Link></li>
            <li><Link to={`${match.url}/4`}>Jack</Link></li>
        </ul>
    </div>
);

export default BrowseUsersPage;