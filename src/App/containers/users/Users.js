import React, { Component } from 'react';
import { connect } from 'react-redux';

import usersService from '../../core/services/users.service';
import HomeList from '../../components/home/HomeList';

class UsersContainer extends Component {

    componentDidMount() {
        this.props.loadDashboard();
    }

    render() {
        return (
            <div>
                <h1>Users</h1>
                {this.props.data.result ?
                    <HomeList list={this.props.data.result} /> : null
                }
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        loadDashboard: () => {
            dispatch(usersService.load())
        }
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        data: state.usersReducer
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);