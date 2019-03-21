import { INIT_LOGIN_SUCCESS, INIT_LOGIN_ERROR, INIT_LOGOUT_SUCCESS, INIT_LOGOUT_ERROR } from "../constants";

const initLoginSuccess = (response) => ({
    type: INIT_LOGIN_SUCCESS,
    response
});

const initLoginFailed = (err) => ({
    type: INIT_LOGIN_ERROR,
    error: err
});

const initLogoutSuccess = (response) => ({
    type: INIT_LOGOUT_SUCCESS,
    response
});

const initLogoutFailed = (err) => ({
    type: INIT_LOGOUT_ERROR,
    error: err
});

export { initLoginSuccess, initLoginFailed, initLogoutSuccess, initLogoutFailed };