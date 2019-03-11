import React from 'react';

import Header from '../../components/header/Header';

const Layout = (props) => (
    <>
        <Header />
        <div className="container">
            {props.children}
        </div>
    </>
);

export default Layout;