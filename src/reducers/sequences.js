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
      console.log('REDUCER ADD SEQ', action.track)
      // return [...state, sequence(undefined, action)]
      return {
        // byId: [ ...state.byId, action.track.id],
        byId: [...new Set([ ...state.byId, action.track.id])],
        byHash: {
          ...state.byHash,
          [action.track.id]: action.track.sequence
        }
      }
    case CLEAR_SEQUENCE:
      delete state.byHash[action.track.id] // delete the hash associated with the action.id

      return {
        byId: state.byId.filter(item => item !== action.id),
        byHash: state.byHash
      }
    case UPDATE_SEQUENCE:
    // let sequence = state.byHash[action.track.id]
    // let newSeq = sequence.map((arr, b) => {
    //   // console.log('arr[b]', b)
    //   if (b === action.track.barId ) {
    //     arr.map((value, i) => {
    //       // console.log('i === action.track.seqId', i === action.track.seqId)
    //       if (i === action.track.seqId) {
    //         value = value === 0 ? 1 : 0
    //         // console.log('value',value)
    //       }
    //       // console.log('arr',arr)
    //     })
    //   }
    // })
      // console.log('REDUCER UPDATE HASH', action.track.sequence)
      // return state.map(s => sequence(s, action))
      return {
        ...state,
        byHash: {
          ...state.byHash,
          [action.track.id]: action.track.sequence
        }
      }
    default:
      return state
  }
}
