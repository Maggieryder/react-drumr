import { UPDATE_DELAY_TIME,
        UPDATE_DELAY_FEEDBACK,
        UPDATE_DELAY_FREQUENCY,
        TOGGLE_DELAY } from '../actions'

const INITIAL_STATE = {
  time: .5,
  frequency: 1000,
  feedback: .5,
  active: false
}

export default function(state = INITIAL_STATE, action) {
  switch(action.type){
    case UPDATE_DELAY_TIME:
      // console.log('action received', action)
      return {...state, time: action.value }
    case UPDATE_DELAY_FEEDBACK:
      // console.log('action received', action)
      return {...state, feedback: action.value }
    case UPDATE_DELAY_FREQUENCY:
      // console.log('action received', action)
      return {...state, frequency: action.value }
    case TOGGLE_DELAY:
      // console.log('action received for TOGGLE DELAY', !state.active)
      return {...state, active: !state.active }
    default:
      return state
  }
}
