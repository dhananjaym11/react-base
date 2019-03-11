import React, { Component } from 'react';
import { connect } from 'react-redux';

import homeService from '../../core/services/home.service';

class HomeContainer extends Component {

    componentDidMount() {
        this.props.loadDashboard();
    }

    render() {
        return (
            <div>
                <h1>Home</h1>
                {this.props.data.result ?
                    this.props.data.result.key : null
                }
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        loadDashboard: () => {
            dispatch(homeService.load())
        }
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        data: state.homeReducer
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer)