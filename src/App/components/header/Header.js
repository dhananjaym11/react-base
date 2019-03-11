import React from 'react';
import { Link } from "react-router-dom";

import './Header.css';

const Header = () => (
    <header className="app-header">
        <Link to="/" className="app-logo">
            <span>Logo</span>
        </Link>

        <div className="float-right">
            <ul className="header-links clearfix">
                <li>
                    <Link to="/">
                        <span>Home</span>
                    </Link>
                </li>
                <li>
                    <Link to="/about">
                        <span>About</span>
                    </Link>
                </li>
                <li>
                    <Link to="/users">
                        <span>Users</span>
                    </Link>
                </li>
            </ul>
        </div>
    </header>
);

export default Header;