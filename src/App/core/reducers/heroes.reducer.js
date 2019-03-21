import { LOAD_HEROES_SUCCESS, LOAD_HEROES_ERROR, UPDATE_HEROES } from "../constants";

const INITIAL_STATE = {
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
        case LOAD_HEROES_SUCCESS:
            return { ...state, result: action.response };
        case LOAD_HEROES_ERROR:
            return { ...state, error: action.error };
        case UPDATE_HEROES:
            return { ...state, result: action.response };
        default:
            return state;
    }
}

export default reducer;