import { LOAD_DASHBOARD, LOAD_DASHBOARD_SUCCESS, LOAD_DASHBOARD_ERROR } from "../constants";

const INITIAL_STATE = {
    loading: false,
    error: null,
    result: null
}

const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case LOAD_DASHBOARD:
            return { ...state, loading: true };
        case LOAD_DASHBOARD_SUCCESS:
            return { ...state, loading: false, result: action.response };
        case LOAD_DASHBOARD_ERROR:
            return { ...state, loading: false, error: action.error };
        default:
            return state;
    }
}

export default reducer;