import { ADD_STUDENTS, DELETE_STUDENT } from "../constants";

const INITIAL_STATE = {
    result: [
        {
            "name": "test",
            "email": "test@gmail.com",
            "address": "Satara",
            "standard": "11",
            "stream": "Arts",
            "id": 1
          }
    ]
}

const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ADD_STUDENTS: 
            const result = [...state.result, action.payload];
            return { ...state, result };
        case DELETE_STUDENT:
            const index = state.result.findIndex(result => result.id = action.payload);
            const updatedResult = [...state.result.slice(0,index), ...state.result.slice(index+1)];
            return { ...state, result: updatedResult };
        default:
            return state;
    }
}

export default reducer;