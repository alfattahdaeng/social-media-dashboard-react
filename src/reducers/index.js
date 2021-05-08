import { combineReducers } from 'redux';
import UsersReducer from './UsersReducer'

const rootReducer = combineReducers({
    users: UsersReducer,
});

export default rootReducer;