import { UPDATE_THRESHOLD,
        UPDATE_KNEE,
        UPDATE_RATIO,
        UPDATE_ATTACK,
        UPDATE_RELEASE,
        TOGGLE_COMPRESSOR } from '../actions/index'

const INITIAL_STATE = {
  threshold: -24,
  knee: 30,
  ratio: 12,
  attack: .01,
  release: .25,
  active: false
}

export default function(state = INITIAL_STATE, action) {
  switch(action.type){
    case UPDATE_THRESHOLD:
      console.log('action recieved for UPDATE THRESHOLD', action.value)
      return {...state, threshold: action.value }
    case UPDATE_KNEE:
      console.log('action recieved for UPDATE KNEE', action.value)
      return {...state, knee: action.value }
    case UPDATE_RATIO:
      console.log('action recieved for UPDATE RATIO', action.value)
      return {...state, ratio: action.value }
    case UPDATE_ATTACK:
      console.log('action recieved for UPDATE ATTACK', action.value)
      return {...state, attack: action.value }
    case UPDATE_RELEASE:
      console.log('action recieved for UPDATE RELEASE', action.value)
      return {...state, release: action.value }
    case TOGGLE_COMPRESSOR:
      console.log('action recieved for TOGGLE COMPRESSOR', !state.active)
      return {...state, active: !state.active }
    default:
      return state
  }
}
