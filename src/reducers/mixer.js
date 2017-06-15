import {
        UPDATE_WETMIX,
        UPDATE_DRYMIX,
        MUTE_WETMIX,
        MUTE_DRYMIX,
        UPDATE_MASTER_GAIN } from '../actions'

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
      console.log('action received', action)
      return {...state, wetMix: action.value }
    case MUTE_WETMIX:
      console.log('action received for MUTE WETMIX', !state.wetMute)
      return {...state, wetMute: !state.wetMute }
    case UPDATE_DRYMIX:
      console.log('action received', action)
      return {...state, dryMix: action.value }
    case MUTE_DRYMIX:
      console.log('action received for MUTE DRYMIX', !state.dryMute)
      return {...state, dryMute: !state.dryMute }
    case UPDATE_MASTER_GAIN:
      console.log('action received', action)
      return {...state, masterGain: action.value }
    default:
      return state
  }
}
