import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";

import './User.css';
import userService from '../../core/services/user.service';
import { removeUser } from '../../core/actions';
import UserDetails from '../../components/user/UserDetails';

class UserContainer extends Component {

    componentDidMount() {
        const username = this.props.match.params.username;
        this.props.loadUser(username);
    }

    componentWillUnmount() {
        this.props.removeUsers();
    }

    render() {
        return (
            <div>
                <h1>
                    <Link to="/users">
                        <i class="fa fa-long-arrow-left"></i>
                    </Link>
                    User Details </h1>
                {this.props.data.result ?
                    <UserDetails details={this.props.data.result} /> : null
                }
            </div>
        )
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