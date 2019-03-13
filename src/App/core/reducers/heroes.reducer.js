import { LOAD_HEROES, LOAD_HEROES_SUCCESS, LOAD_HEROES_ERROR } from "../constants";

const INITIAL_STATE = {
    loading: false,
    error: null,
    result: [
        { id: 1, name: 'Iron Man' },
        { id: 2, name: 'Hulk' },
        { id: 3, name: 'Bat Man' },
        { id: 4, name: 'Thor' },
        { id: 5, name: 'Super Man' },
    ]
}

const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case LOAD_HEROES:
            return { ...state, loading: true };
        case LOAD_HEROES_SUCCESS:
            return { ...state, loading: false, result: action.response };
        case LOAD_HEROES_ERROR:
            return { ...state, loading: false, error: action.error };
        default:
            return state;
    }
}

export default reducer;