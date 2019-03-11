import { combineReducers } from 'redux';

import homeReducer from './home.reducer';
import usersReducer from './users.reducer';
import userReducer from './user.reducer';

const rootReducer = combineReducers({
    homeReducer: homeReducer,
    usersReducer: usersReducer,
    userReducer: userReducer
});

export default rootReducer;
