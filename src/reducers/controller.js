import {
        UPDATE_TEMPO,
        UPDATE_SWING,
        UPDATE_BEAT_ID,
        UPDATE_BARS,
        UPDATE_RESOLTION,
        UPDATE_SIGNATURE,
        TOGGLE_BAR,
        TOGGLE_PLAY } from '../actions'

const INITIAL_STATE = {
  tempo: 96,
  swing: 0,
  bars: 4,
  barId: 0,
  beatId: 0,
  resolution: 16,
  signature: [4,4],
  isPlaying: false
}

export default function(state = INITIAL_STATE, action) {
  switch(action.type){
    case UPDATE_TEMPO:
      console.log('action received', action)
      return {...state, tempo: action.value }
    case UPDATE_SWING:
      console.log('action received', action)
      return {...state, swing: action.value }
    case UPDATE_BEAT_ID:
      console.log('action received', action)
      return {...state, beatId: action.value }
    case UPDATE_BARS:
      console.log('action received', action)
      return {...state, bars: action.value }
    case UPDATE_RESOLTION:
      console.log('action received', action)
      return {...state, resolution: action.value }
    case UPDATE_SIGNATURE:
      console.log('action received', action)
      return {...state, signature: action.value }
    case TOGGLE_BAR:
      console.log('action received for TOGGLE BAR', action.id )
      return {...state, barId: action.id }
    case TOGGLE_PLAY:
      console.log('action received for TOGGLE PLAY', !state.isPlaying )
      return {...state, isPlaying: !state.isPlaying }
    default:
      return state
  }
}
