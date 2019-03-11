import React from 'react';

const HomeUser = (props) => {
    return (
        <div className="col-sm-3">
            {props.user.login}
        </div>
    )
};

export default HomeUser;