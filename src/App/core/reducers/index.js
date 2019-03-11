import { combineReducers } from 'redux';

import homeReducer from './home.reducer';
import usersReducer from './users.reducer';

const rootReducer = combineReducers({
    homeReducer: homeReducer,
    usersReducer: usersReducer
});

export default rootReducer;
