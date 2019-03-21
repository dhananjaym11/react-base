import { INIT_LOGIN_SUCCESS, INIT_LOGIN_ERROR, INIT_LOGOUT_SUCCESS, INIT_LOGOUT_ERROR } from "../constants";

const INITIAL_STATE = {
    error: null,
    isAuthenticated: false
}

const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case INIT_LOGIN_SUCCESS:
            return { ...state, isAuthenticated: action.response };
        case INIT_LOGIN_ERROR:
            return { ...state, error: action.error };
        case INIT_LOGOUT_SUCCESS:
            return { ...state, isAuthenticated: action.response };
        case INIT_LOGOUT_ERROR:
            return { ...state, error: action.error };
        default:
            return state;
    }
}

export default reducer;