import { ADD_TRACK,
        ASSIGN_NAME,
        ASSIGN_BUFFER,
        UPDATE_SEQUENCE,
        UPDATE_VOLUME,
        UPDATE_PAN,
        UPDATE_REVERB_SEND,
        UPDATE_DELAY_SEND,
        MUTE_TRACK,
        SOLO_TRACK } from '../actions/index'

const INITIAL_STATE = {
    id: 0,
    name: 'unassigned',
    buffer: {},
    sequence: [1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0],
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
      console.log('action recieved for ADD_TRACK', action.id)
      return {...state,
        id: action.id,
        name: action.name,
        buffer: action.buffer
      }
    case ASSIGN_NAME:
      console.log('action recieved for ASSIGN NAME', action.id)
      if (state.id !== action.id) { return state }
      return {...state, name: action.name }
    case ASSIGN_BUFFER:
      console.log('action recieved for ASSIGN BUFFER', action.buffer)
      if (state.id !== action.id) { return state }
      return {...state, buffer: action.buffer }
    case UPDATE_SEQUENCE:
      console.log('action recieved for ASSIGN SEQUENCE', action.sequence)
      if (state.id !== action.id) { return state }
      return {...state, sequence: action.sequence }
    case UPDATE_VOLUME:
      console.log('action recieved for UPDATE VOLUME', action.value)
      if (state.id !== action.id) { return state }
      return {...state, volume: action.value }
    case UPDATE_PAN:
      console.log('action recieved for UPDATE PAN', action.value)
      if (state.id !== action.id) { return state }
      return {...state, pan: action.value }
    case UPDATE_REVERB_SEND:
      console.log('action recieved for UPDATE REVERB SEND', action.value)
      if (state.id !== action.id) { return state }
      return {...state, reverbSend: action.value }
    case UPDATE_DELAY_SEND:
      console.log('action recieved for UPDATE DELAY SEND', action.value)
      if (state.id !== action.id) { return state }
      return {...state, delaySend: action.value }
    case CLIP_TRACK:
      console.log('action recieved for CLIP TRACK', action.clip)
      if (state.id !== action.id) { return state }
      return {...state, clip: action.clip }
    case MUTE_TRACK:
      console.log('action recieved for MUTE TRACK', !state.mute)
      if (state.id !== action.id) { return state }
      return {...state, mute: !state.mute }
    case SOLO_TRACK:
      console.log('action recieved for SOLO TRACK', !state.solo )
      if (state.id !== action.id) { return state }
      return {...state, solo: !state.solo  }
    default:
      return state
  }
}
