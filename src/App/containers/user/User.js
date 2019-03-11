import React, { Component } from 'react';
import { connect } from 'react-redux';

import './User.css';
import userService from '../../core/services/user.service';
import { removeUser } from '../../core/actions';

class UserContainer extends Component {

    componentDidMount() {
        const username = this.props.match.params.username;
        this.props.loadUser(username);
    }

    componentWillUnmount() {
        this.props.removeUsers()
    }

    render() {
        if (this.props.data.result) {
            const user = this.props.data.result;
            return (
                <div className="user-details">
                    <h1>{user.name}</h1>
                    <div className="clearfix">
                        <img src={user.avatar_url} alt={user.name} className="float-left" />
                        <div className="user-info">
                            <h4>Type : {user.type}</h4>
                            <h4>Location : {user.location}</h4>
                            <h4>Company: {user.company} </h4>
                        </div>
                    </div>
                </div>
            )
        } else {
            return (
                <p>Loaing...</p>
            )
        }
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        loadUser: (username) => {
            dispatch(userService.loadUser(username))
        },
        removeUsers: () => {
            dispatch(removeUser())
        }
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        data: state.userReducer
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);