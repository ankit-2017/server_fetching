import { combineReducers } from 'redux'
import userReducer from './userReducers'
import titleReducer from './titleReducer'

export default combineReducers({
    users: userReducer,
    titles: titleReducer
})