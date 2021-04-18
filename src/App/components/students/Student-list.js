import React from 'react';
import Button from 'react-bootstrap/Button';

const StudentList = (props) => {
    return (
        <table border="1" cellPadding="5" cellSpacing="5">
            <thead>
            <tr>
                <td>Name</td>
                <td>Email</td>
                <td>Address</td>
                <td>Standard</td>
                <td>Stream</td>
                <td></td>
            </tr>
            </thead>
            <tbody>
            {props.list.map((student) => (
                <tr key={student.id}>
                <td>{student.name}</td>
                <td>{student.email}</td>
                <td>{student.address}</td>
                <td>{student.standard}</td>
                <td>{student.stream}</td>
                <td>
                    <Button variant="primary" onClick={()=>props.onEditClick(student.id)}>Edit</Button>
                    <Button variant="danger" onClick={()=>props.onDeleteClick(student.id)}>Delete</Button>
                </td>
                </tr>
            ))}
            </tbody>
        </table>
    )
};

export default StudentList;