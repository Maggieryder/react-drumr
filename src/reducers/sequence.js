import { UPDATE_SEQUENCE } from '../actions'

const INITIAL_STATE = [ 1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0 ]

export default function(state = INITIAL_STATE, action) {
  switch(action.type){
    case UPDATE_SEQUENCE:
      // console.log('action received', action)
      return [ ...state, state[action.id] === 0 ? 1 : 0 ]
    default:
      return state
  }
}
