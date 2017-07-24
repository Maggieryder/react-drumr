import { LOAD_DATA_START, LOAD_DATA_FAIL, LOAD_DATA_SUCCESS } from '../actions'

const INITIAL_STATE = []

export default function(state = INITIAL_STATE, action) {
  switch(action.type){
    case LOAD_DATA_START:
      // console.log('action received', action)
      return []
    case LOAD_DATA_FAIL:
      // console.log('action received', action)
      return action.error
    case LOAD_DATA_SUCCESS:
      // console.log('action received LOAD_DATA_SUCCESS', action.data.data)
      return action.data.data
    default:
      return state
  }
}
