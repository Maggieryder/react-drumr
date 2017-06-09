import {
        UPDATE_TEMPO,
        UPDATE_SWING,
        UPDATE_BEAT_ID,
        UPDATE_BARS,
        UPDATE_RESOLTION,
        UPDATE_SIGNATURE,
        TOGGLE_BAR,
        TOGGLE_PLAY } from '../actions/index'

const INITIAL_STATE = {
  tempo: 120,
  swing: 0,
  bars: 1,
  barId: 0,
  beatId: 0,
  resolution: 16,
  signature: [4,4],
  isPlaying: false
}

export default function(state = INITIAL_STATE, action) {
  switch(action.type){
    case UPDATE_TEMPO:
      console.log('action recieved for UPDATE TEMPO', action.value)
      return {...state, tempo: action.value }
    case UPDATE_SWING:
      console.log('action recieved for UPDATE SWING', action.value)
      return {...state, swing: action.value }
    case UPDATE_BEAT_ID:
      console.log('action recieved for UPDATE BEAT ID', action.value )
      return {...state, beatId: action.value }
    case UPDATE_BARS:
      console.log('action recieved for UPDATE BARS', action.value )
      return {...state, bars: action.value }
    case UPDATE_RESOLTION:
      console.log('action recieved for UPDATE RESOLTION', action.value )
      return {...state, resolution: action.value }
    case UPDATE_SIGNATURE:
      console.log('action recieved for UPDATE RESOLTION', action.value )
      return {...state, signature: action.value }
    case TOGGLE_BAR:
      console.log('action recieved for TOGGLE BAR', action.id )
      return {...state, barId: action.id }
    case TOGGLE_PLAY:
      console.log('action recieved for TOGGLE PLAY', !state.isPlaying )
      return {...state, isPlaying: !state.isPlaying }
    default:
      return state
  }
}
