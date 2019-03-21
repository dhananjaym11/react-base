import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import * as actions from '../../core/actions';

class LogoutContainer extends Component {

    componentDidMount() {
        this.props.initLogoutSuccess();
    }

    render() {
        return (
            <div>
                <Redirect to="/login" />
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        initLogoutSuccess: () => {
            dispatch(actions.initLogoutSuccess(false))
        }
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        isAuthenticated: state.loginReducer.isAuthenticated
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LogoutContainer);