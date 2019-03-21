import { combineReducers } from 'redux';

import homeReducer from './home.reducer';
import usersReducer from './users.reducer';
import userReducer from './user.reducer';
import heroesReducer from './heroes.reducer';
import loginReducer from './login.reducer';

const rootReducer = combineReducers({
    homeReducer: homeReducer,
    usersReducer: usersReducer,
    userReducer: userReducer,
    heroesReducer: heroesReducer,
    loginReducer: loginReducer
});

export default rootReducer;
