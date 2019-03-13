import { combineReducers } from 'redux';

import homeReducer from './home.reducer';
import usersReducer from './users.reducer';
import userReducer from './user.reducer';
import heroesReducer from './heroes.reducer';

const rootReducer = combineReducers({
    homeReducer: homeReducer,
    usersReducer: usersReducer,
    userReducer: userReducer,
    heroesReducer: heroesReducer
});

export default rootReducer;
