import { combineReducers } from 'redux'
import userReducer from './userReducer'
import victimsReducer from './victimsReducer';

const rootReducer = combineReducers({
    victims: victimsReducer,
    user: userReducer
})

export default rootReducer;
