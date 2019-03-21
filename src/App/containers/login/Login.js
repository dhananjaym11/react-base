import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import * as actions from '../../core/actions';

class LoginContainer extends Component {

    handelLoginClick = () => {
        this.props.initLoginSuccess();
    }

    render() {
        return (
            <div>
                {this.props.isAuthenticated ?
                    <Redirect to="/" />
                    :
                    <>
                        <h1>Login</h1>
                        <button className="theme-btn" onClick={this.handelLoginClick}>Login</button>
                    </>
                }
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        initLoginSuccess: () => {
            dispatch(actions.initLoginSuccess(true))
        }
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        isAuthenticated: state.loginReducer.isAuthenticated
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);