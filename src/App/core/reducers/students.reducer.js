import { ADD_STUDENTS, DELETE_STUDENT } from "../constants";

const INITIAL_STATE = {
    result: [
        {
            "name": "test",
            "email": "test@gmail.com",
            "address": "Satara",
            "standard": "11",
            "stream": "Arts",
            "id": 0
          }
    ]
}

const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ADD_STUDENTS: 
            const {id, list} = action.payload;
            delete list['selectedId'];
            let result = [];
            if(id === -1) {
                const results = [...state.result];
                const latestId = results.length ? results[results.length - 1].id + 1 : 0;
                const updatedList = {...list, id: latestId};
                result = [...state.result, updatedList];
            } else {                
                result = [...state.result.slice(0,id), list,...state.result.slice(id+1)];
            }
            return { ...state, result };
        case DELETE_STUDENT:
            const index = state.result.findIndex(result => result.id === action.payload);
            const updatedResult = [...state.result.slice(0,index), ...state.result.slice(index+1)];
            return { ...state, result: updatedResult };
        default:
            return state;
    }
}

export default reducer;