import { LOAD_USER, LOAD_USER_SUCCESS, LOAD_USER_ERROR } from "../constants";

const loadUser = () => ({
    type: LOAD_USER,
    payload: null
});

const loadUserSuccess = (response) => ({
    type: LOAD_USER_SUCCESS,
    response
});

const loadUserFailed = (err) => ({
    type: LOAD_USER_ERROR,
    error: err
});

export { loadUser, loadUserSuccess, loadUserFailed };