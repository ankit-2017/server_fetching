import {FETCH_TITLE} from '../actions'

export default (state=[], action)=>{
    switch (action.type) {
        case FETCH_TITLE:
            return action.payload.data
    
        default:
            return state
    }
}