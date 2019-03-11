import React, { Component } from 'react';
import { connect } from 'react-redux';

import usersService from '../../core/services/users.service';
import UserList from '../../components/users/UserList';

class UsersContainer extends Component {

    componentDidMount() {
        this.props.loadDashboard();
    }

    render() {
        return (
            <div>
                <h1>Users</h1>
                {this.props.data.result ?
                    <UserList list={this.props.data.result} /> : null
                }
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        loadDashboard: () => {
            dispatch(usersService.loadUsers())
        }
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        data: state.usersReducer
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);