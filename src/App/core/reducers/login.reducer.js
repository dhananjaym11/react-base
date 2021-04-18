import { INIT_LOGIN_SUCCESS, INIT_LOGIN_ERROR, INIT_LOGOUT_SUCCESS, INIT_LOGOUT_ERROR } from "../constants";

const INITIAL_STATE = {
    error: null,
    isAuthenticated: localStorage.getItem("isAuthenticated") === 'true'
}

const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case INIT_LOGIN_SUCCESS:
            localStorage.setItem("isAuthenticated", true);
            return { ...state, isAuthenticated: action.response };
        case INIT_LOGIN_ERROR:
            return { ...state, error: action.error };
        case INIT_LOGOUT_SUCCESS:
            localStorage.setItem("isAuthenticated", false);
            return { ...state, isAuthenticated: action.response };
        case INIT_LOGOUT_ERROR:
            return { ...state, error: action.error };
        default:
            return state;
    }
}

export default reducer;