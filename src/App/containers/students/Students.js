import React, { Component } from 'react';
import { connect } from 'react-redux';

import {addUsers, deleteUser} from '../../core/actions'
import StudentList from '../../components/students/Student-list';
import StudentsAdd from '../../components/students/Student-add';

class StudentsContainer extends Component {
    state = {
        showModal: false,
    }

    onAddClick = () => {
        this.setState({
            showModal: true
        })
    }

    hideModal = () => {
        this.setState({
            showModal: false
        })
    }

    onDeleteClick = (id) => {
        this.props.deleteUser(id);
    }

    onSubmitClick = (result) => {
        const dataLength = this.props.data.result.length ? this.props.data.result[this.props.data.result.length - 1].id + 1 : 1;
        const newUserData = {...result, id: dataLength};
        this.props.addUsers(newUserData);
        this.hideModal();
    }

    render() {
        return (
            <div>
                <h1>
                    Students
                    <button className="btn btn-primary float-right" onClick={this.onAddClick}>Add Student</button>
                </h1>
                {this.props.data.result && this.props.data.result.length ?
                    <StudentList list={this.props.data.result} onDeleteClick={this.onDeleteClick} /> : 
                    <p>No data found</p>
                }

                <StudentsAdd show={this.state.showModal} onSubmitClick={this.onSubmitClick} hideModal={this.hideModal} />
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        data: state.studentsReducer
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        addUsers: (data) => {
            dispatch(addUsers(data))
        },
        deleteUser: (id) => {
            dispatch(deleteUser(id))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(StudentsContainer);