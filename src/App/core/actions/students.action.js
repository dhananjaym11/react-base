import { ADD_STUDENTS, DELETE_STUDENT } from "../constants";

const addUsers = (data) => ({
    type: ADD_STUDENTS,
    payload: data
});

const deleteUser = (id) => ({
    type: DELETE_STUDENT,
    payload: id
})

export { addUsers, deleteUser };