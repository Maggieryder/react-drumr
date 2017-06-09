import {
        UPDATE_WETMIX,
        UPDATE_DRYMIX,
        MUTE_WETMIX,
        MUTE_DRYMIX,
        UPDATE_MASTER_GAIN } from '../actions/index'

//import tracks from './tracks'

const INITIAL_STATE = {
  tracks: [],
  mutedTracks: [],
  wetMix: 7,
  wetMute: false,
  dryMix: 7,
  dryMute: false,
  masterGain: 7
}

export default function(state = INITIAL_STATE, action) {
  switch(action.type){
    case UPDATE_WETMIX:
      console.log('action recieved for UPDATE WETMIX', action.value)
      return {...state, wetMix: action.value }
    case MUTE_WETMIX:
      console.log('action recieved for MUTE WETMIX', !state.wetMute)
      return {...state, wetMute: !state.wetMute }
    case UPDATE_DRYMIX:
      console.log('action recieved for UPDATE DRYMIX', action.value)
      return {...state, dryMix: action.value }
    case MUTE_DRYMIX:
      console.log('action recieved for MUTE DRYMIX', !state.dryMute)
      return {...state, dryMute: !state.dryMute }
    case UPDATE_MASTER_GAIN:
      console.log('action recieved for UPDATE MASTER GAIN', action.value )
      return {...state, masterGain: action.value }
    default:
      return state
  }
}
