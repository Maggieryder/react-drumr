import { ADD_TRACK,
      REMOVE_TRACK,
      ASSIGN_NAME,
      ASSIGN_BUFFER,
      UPDATE_SEQUENCE,
      UPDATE_VOLUME,
      UPDATE_PAN,
      UPDATE_REVERB_SEND,
      UPDATE_DELAY_SEND,
      MUTE_TRACK,
      SOLO_TRACK } from '../actions/index'
      
import track from './track'

const INITIAL_STATE = []

export default function(state = INITIAL_STATE, action) {
  switch(action.type){
    case ADD_TRACK:
      console.log('action recieved for ADD TRACK', action.id)
      return [...state, track(undefined, action)]]
    case REMOVE_TRACK:
      console.log('action recieved for REMOVE TRACK', action.index)
      return [ ...state.slice(0, action.index), ...state.slice(action.index + 1)]
    case ASSIGN_NAME:
    case ASSIGN_BUFFER:
    case UPDATE_SEQUENCE:
    case UPDATE_VOLUME:
    case UPDATE_PAN:
    case UPDATE_REVERB_SEND:
    case UPDATE_DELAY_SEND:
    case MUTE_TRACK:
    case SOLO_TRACK:
      return state.map(t => track(t, action))
    default:
      return state
  }
}
