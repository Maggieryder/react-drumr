import { ADD_TRACK,
        ASSIGN_NAME,
        ASSIGN_BUFFER_ID,
        UPDATE_SEQUENCE,
        UPDATE_VOLUME,
        UPDATE_PAN,
        UPDATE_REVERB_SEND,
        UPDATE_DELAY_SEND,
        CLIP_TRACK,
        MUTE_TRACK,
        SOLO_TRACK } from '../actions'

import sequence from './sequence'

const INITIAL_STATE = {
    id: 0,
    bufferId: 0,
    sequence: [[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]],
    volume: 7,
    pan: 0,
    clip: false,
    mute: false,
    solo: false,
    reverbSend: 0,
    delaySend: 0
}

export default function(state = INITIAL_STATE, action) {
  switch(action.type){
    case ADD_TRACK:
      // console.log('action received for ADD_TRACK', action.track)
      return {...state,
        id: action.track.id,
        buffer: action.track.buffer || {}
      }
    case ASSIGN_BUFFER_ID:
      // console.log('action received for ASSIGN_BUFFER_ID', action.track)
      if (state.id !== action.track.id) { return state }
      return {...state, bufferId: action.track.value }
    // case UPDATE_SEQUENCE:
      console.log('action received', action.track)
      if (state.id !== action.track.id) { return state }
      //return [...state, sequence(undefined, action)]
      return {...state, sequence: state.sequence.map((arr, b) => b === action.track.barId ? arr.map((value, i) => i === action.track.seqId ? value === 0 ? 1 : 0 : value) : arr )}
    case UPDATE_VOLUME:
      // console.log('action received', action)
      if (state.id !== action.track.id) { return state }
      return {...state, volume: action.track.value }
    case UPDATE_PAN:
      // console.log('action received', action)
      if (state.id !== action.track.id) { return state }
      return {...state, pan: action.track.value }
    case UPDATE_REVERB_SEND:
      // console.log('action received', action)
      if (state.id !== action.track.id) { return state }
      return {...state, reverbSend: action.track.value }
    case UPDATE_DELAY_SEND:
      // console.log('action received', action)
      if (state.id !== action.track.id) { return state }
      return {...state, delaySend: action.track.value }
    case CLIP_TRACK:
      // console.log('action received', action)
      if (state.id !== action.track.id) { return state }
      return {...state, clip: action.track.clip }
    case MUTE_TRACK:
      // console.log('action received for MUTE TRACK', action.id, !state.mute)
      if (state.id !== action.id) { return state }
      return {...state, mute: !state.mute }
    case SOLO_TRACK:
      // console.log('action received for SOLO TRACK', action.id, !state.solo )
      if (state.id !== action.id) { return state }
      return {...state, solo: !state.solo  }
    default:
      return state
  }
}
