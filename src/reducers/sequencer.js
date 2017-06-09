import {
        UPDATE_TEMPO,
        UPDATE_SWING,
        TOGGLE_PLAY } from '../actions/index'

//import tracks from './tracks'

const INITIAL_STATE = {
  tempo: 120,
  swing: 0,
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
    case TOGGLE_PLAY:
      console.log('action recieved for TOGGLE PLAY', !state.isPlaying )
      return {...state, isPlaying: !state.isPlaying }
    default:
      return state
  }
}
