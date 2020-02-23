import React, { Component } from 'react';
import { connect } from 'react-redux';

import homeService from '../../core/services/home.service';

class HomeContainer extends Component {

    componentDidMount() {
        this.myInput.focus();
    }

    getData = () => {
        this.props.loadDashboard();        
    }

    render() {
        return (
            <div>
                <h1>Home</h1>
                <button onClick={this.getData}>Get Data</button>&nbsp;
                {this.props.data.result ?
                    this.props.data.result.key : null
                }
                <div>
                    <br/>
                    <input ref={input => this.myInput = input } name="home-input" />
                </div>
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