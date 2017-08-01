import {
  ADD_SEQUENCE,
  UPDATE_SEQUENCE,
  UPDATE_BARS} from '../actions'

import sequence from './sequence'

const INITIAL_STATE = []

export default function(state = INITIAL_STATE, action) {
  switch(action.type){
    case ADD_SEQUENCE:
      // console.log('action received', action)
      return [...state, sequence(undefined, action)]
    case UPDATE_BARS:
    case UPDATE_SEQUENCE:
      return state.map(s => sequence(s, action))
    default:
      return state
  }
}
