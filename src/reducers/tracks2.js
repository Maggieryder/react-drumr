import { ADD_TRACK,
      REMOVE_TRACK,
      ASSIGN_BUFFER_ID,
      ASSIGN_BUFFER,
      UPDATE_SEQUENCE,
      UPDATE_VOLUME,
      UPDATE_PAN,
      UPDATE_REVERB_SEND,
      UPDATE_DELAY_SEND,
      MUTE_TRACK,
      SOLO_TRACK,
      CLIP_TRACK } from '../actions'

import track from './track'

const INITIAL_STATE = {
  byId: [],
  byHash: {}
}

export default function(state = INITIAL_STATE, action) {
  switch(action.type){
    case ADD_TRACK:
      // console.log('action received for ADD TRACK', action)
      return {
        byId: [...new Set([ ...state.byId, action.track.id])],
        byHash: {
          ...state.byHash,
          [action.track.id]: action.track
        }
      }
    case REMOVE_TRACK:
      // console.log('action received for REMOVE TRACK', action.id)
      //return [ ...state.slice(0, action.index), ...state.slice(action.index + 1)]
      // return state.filter(t => t.id !== action.id)
      delete state.byHash[action.id] // delete the hash associated with the action.id

      return {
        byId: state.byId.filter(item => item !== action.id),
        byHash: state.byHash
      }
    case ASSIGN_BUFFER_ID:
    // case UPDATE_SEQUENCE:
    case UPDATE_VOLUME:
    case UPDATE_PAN:
    case UPDATE_REVERB_SEND:
    case UPDATE_DELAY_SEND:
    case MUTE_TRACK:
    case SOLO_TRACK:
    case CLIP_TRACK:
      // state.byHash[action.id] = {
      //   ...state.byHash[action.id],
      //   ...action.payload
      // }
      // return state
      return {
        ...state,
        byHash: {
          ...state.byHash,
          // [action.track.id]: action // 
          track([action.track.id], action)
        }
      }
    default:
      return state
  }
}
