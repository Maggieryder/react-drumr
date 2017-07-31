import { UPDATE_SEQUENCE,
  UPDATE_BARS,
  UPDATE_RESOLTION,
  UPDATE_SIGNATURE } from '../actions'

import sequence from './sequence'

const INITIAL_STATE = []

export default function(state = INITIAL_STATE, action) {
  switch(action.type){
    case UPDATE_SEQUENCE:
      // console.log('action received', action)
      return [ ...state, state[action.id] === 0 ? 1 : 0 ]
    default:
      return state
  }
}
