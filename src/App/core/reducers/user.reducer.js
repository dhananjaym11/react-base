import { LOAD_USER, LOAD_USER_SUCCESS, LOAD_USER_ERROR } from "../constants";

const INITIAL_STATE = {
    loading: false,
    error: null,
    result: null
}

const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case LOAD_USER:
            return { ...state, loading: true };
        case LOAD_USER_SUCCESS:
            return { ...state, loading: false, result: action.response };
        case LOAD_USER_ERROR:
            return { ...state, loading: false, error: action.error };
        default:
            return state;
    }
}

export default reducer;