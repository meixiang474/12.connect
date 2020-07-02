import {LOACTION_CHANGE} from './types'
export default function connectRouter(history){
  let initialState = {
    action: history.action,
    location: history.location
  }
  return function (state = initialState, action) {
    switch(action.type){
      case LOACTION_CHANGE:
        return {
          ...action.payload
        }
      default:
        return state
    }
  }
}