import React from 'react';

import HomeUser from './HomeUser';

const HomeList = (props) => {
    return (
        <div className="row">
            {props.list.map((user) => <HomeUser key={user.id} user={user} />)}
        </div>
    )
};

export default HomeList;