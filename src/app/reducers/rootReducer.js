import { combineReducers } from 'redux'
import userReducer from './userReducer'
import videoReducer from './videoReducer';

const rootReducer = combineReducers({
    videos: videoReducer,
    user: userReducer
})

export default rootReducer;