import { UPDATE_SEQUENCE, ADD_SEQUENCE } from '../actions'

const INITIAL_STATE = {
  id: 0,
  sequence:[]
}

export default function(state = INITIAL_STATE, action) {
  switch(action.type){
    case ADD_SEQUENCE:
      console.log('action received for ADD_SEQUENCE', action.track)
      return {...state,
        id: action.track.id,
        sequence: action.track.sequence
      }
    case UPDATE_SEQUENCE:
      if (state.id !== action.track.id) { return state }
      // console.log('action received', action)
      return {...state, sequence: state.sequence.map((arr, b) => b === action.track.barId ? arr.map((value, i) => i === action.track.seqId ? value === 0 ? 1 : 0 : value) : arr )}
    default:
      return state
  }
}
