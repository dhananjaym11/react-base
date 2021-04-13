import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import homeService from '../../core/services/home.service';

const PageTitle = styled.h1`
    font-size: 30px;
    color: ${({ isActive }) => isActive ? 'blue' : 'red'};
`

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
                <PageTitle isActive={true}>Home</PageTitle>
                <button onClick={this.getData}>Get Data</button>&nbsp;
                {this.props.data.result ?
                    this.props.data.result.key : null
                }
                <div>
                    <br />
                    <input ref={input => this.myInput = input} name="home-input" />
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