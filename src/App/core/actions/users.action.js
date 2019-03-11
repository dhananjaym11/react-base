import { LOAD_USERS, LOAD_USERS_SUCCESS, LOAD_USERS_ERROR } from "../constants";

const loadUsers = () => ({
    type: LOAD_USERS,
    payload: null
});

const loadUsersSuccess = (response) => ({
    type: LOAD_USERS_SUCCESS,
    response
});

const loadUsersFailed = (err) => ({
    type: LOAD_USERS_ERROR,
    error: err
});

export { loadUsers, loadUsersSuccess, loadUsersFailed };