import { ASSIGN_REVERB_ID,
        ASSIGN_REVERB_DATA,
        TOGGLE_REVERB } from '../actions'

const INITIAL_STATE = {
  reverbData: [],
  reverbId: 0,
  active: false
}

export default function(state = INITIAL_STATE, action) {
  switch(action.type){
    case ASSIGN_REVERB_DATA:
      // console.log('action received', action)
      return {...state, reverbData: action.options}
    case ASSIGN_REVERB_ID:
      // console.log('action received', action)
      return {...state, reverbId: action.id}
    case TOGGLE_REVERB:
      // console.log('action received for TOGGLE REVERB', !state.active)
      return {...state, active: !state.active }
    default:
      return state
  }
}
