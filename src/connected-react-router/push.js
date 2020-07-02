import {CALL_HISTORY_METHOD} from './types'
export default function push(...args){
  return {
    type: CALL_HISTORY_METHOD,
    payload: {
      method: 'push',
      args
    }
  }
}