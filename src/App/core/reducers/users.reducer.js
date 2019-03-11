import { LOAD_USERS, LOAD_USERS_SUCCESS, LOAD_USERS_ERROR } from "../constants";

const INITIAL_STATE = {
    loading: false,
    error: null,
    result: null
}

const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case LOAD_USERS:
            return { ...state, loading: true };
        case LOAD_USERS_SUCCESS:
            return { ...state, loading: false, result: action.response };
        case LOAD_USERS_ERROR:
            return { ...state, loading: false, error: action.error };
        default:
            return state;
    }
}

export default reducer;