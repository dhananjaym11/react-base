import React from 'react';
import { Link } from "react-router-dom";

import './Header.css';

const Header = (props) => (
    <header className="app-header">
        <Link to="/" className="app-logo">
            <span>Logo</span>
        </Link>

        {props.isAuthenticated ?
            <div className="float-right">
                <ul className="header-links clearfix">
                    <li>
                        <Link to="/">
                            <span>Home</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/logout">
                            <span>Logout</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/heroes">
                            <span>Heroes</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/users">
                            <span>Users</span>
                        </Link>
                    </li>
                </ul>
            </div>
            : null}
    </header>
);

export default Header;