import React, { Component } from 'react';
import { connect } from 'react-redux';

import {addUsers, deleteUser} from '../../core/actions'
import StudentList from '../../components/students/Student-list';
import StudentsAdd from '../../components/students/Student-add';

class StudentsContainer extends Component {
    state = {
        showModal: false,
        selectedId: -1,
    }

    onAddClick = () => {
        this.setState({
            showModal: true,
            selectedId: -1
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

    onSubmitClick = (list) => {
        this.props.addUsers({list, id: list.selectedId});
        this.hideModal();
    }

    onEditClick = (id) => {
        this.setState({
            showModal: true,
            selectedId: id
        })
    }

    render() {
        return (
            <div>
                <h1>
                    Students
                    <button className="btn btn-primary float-right" onClick={this.onAddClick}>Add Student</button>
                </h1>
                {this.props.data.result && this.props.data.result.length ?
                    <StudentList list={this.props.data.result} onEditClick={this.onEditClick} onDeleteClick={this.onDeleteClick} /> : 
                    <p>No data found</p>
                }

                <StudentsAdd show={this.state.showModal} list={this.props.data.result} selectedId={this.state.selectedId} onSubmitClick={this.onSubmitClick} hideModal={this.hideModal} />
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