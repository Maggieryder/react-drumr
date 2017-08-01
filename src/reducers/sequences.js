import {
  ADD_SEQUENCE,
  CLEAR_SEQUENCE,
  UPDATE_SEQUENCE
  // UPDATE_BARS
} from '../actions'

// import sequence from './sequence'

const INITIAL_STATE = {
  byId: [],
  byHash: {}
}

export default function(state = INITIAL_STATE, action) {
  switch(action.type){
    case ADD_SEQUENCE:
      console.log('ADD SEQ REDUCER', action.track.sequence)
      // return [...state, sequence(undefined, action)]
      return {
        byId: [ ...state.byId, action.track.id],
        byHash: {
          ...state.byHash,
          [action.track.id]: action.track.sequence
        }
      }
    case CLEAR_SEQUENCE:
      delete state.byHash[action.id] // delete the hash associated with the action.id

      return {
        byId: state.byId.filter(item => item.id !== action.id),
        byHash: state.byHash
      }
    // case UPDATE_BARS:
    case UPDATE_SEQUENCE:
    let seqs = state.byHash
    console.log('UPDATE SEQ REDUCER', seqs[action.track.id])
      // return state.map(s => sequence(s, action))
      return {...state, ...state.byHash, [action.track.id]:
        seqs[action.track.id].map((arr, b) => b === action.track.barId
        ? arr.map((value, i) => i === action.track.seqId
          ? value === 0
            ? 1 : 0
          : value )
        : arr )
      }
    default:
      return state
  }
}
