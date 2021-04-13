import React, { Component } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

class StudentsAdd extends Component {

    state = {
        name: '',
        email: '',
        address: '',
        standard: '',
        stream: '',
    }

    changeHandler = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    onSubmitClick = () => {
        this.props.onSubmitClick(this.state);
        this.setState({
            name: '',
            email: '',
            address: '',
            standard: '',
            stream: '',
        });
    }

    render() {
        const {name, email, address, standard, stream} = this.state;
        return (
            <div>
            <Modal show={this.props.show} onHide={this.props.hideModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <form>
                    <div>
                        <label>Name:</label>
                        <input type="text" name="name" value={name} onChange={this.changeHandler} />
                    </div>
                    <div>
                        <label>Email:</label>
                        <input type="text" name="email" value={email} onChange={this.changeHandler} />
                    </div>
                    <div>
                        <label>Address:</label>
                        <input type="text" name="address" value={address} onChange={this.changeHandler} />
                    </div>
                    <div>
                        <label>Standard:</label>
                        <select name="standard" value={standard} onChange={this.changeHandler}>
                            <option>Select</option>
                            <option value="11">11</option>
                            <option value="12">12</option>
                        </select>
                    </div>
                    <div>
                        <label>Stream:</label>
                        <select name="stream" value={stream} onChange={this.changeHandler}>
                            <option>Select</option>
                            <option value="Arts">Arts</option>
                            <option value="Commerce">Commerce</option>
                            <option value="Science">Science</option>
                        </select>
                    </div>
                </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={this.props.hideModal}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={this.onSubmitClick}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
            </div>
        )
    }
}

export default StudentsAdd;