import React, { Component } from 'react';
import { connect } from 'react-redux';

import userService from '../../core/services/user.service';

class UserContainer extends Component {

    componentDidMount() {
        const username = this.props.match.params.username;
        this.props.loadDashboard(username);
    }

    render() {
        return (
            <div>
                <h1>User</h1>
                {this.props.data.result ?
                    this.props.data.result.name
                    : null
                }
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        loadDashboard: (username) => {
            dispatch(userService.loadUser(username))
        }
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        data: state.userReducer
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);