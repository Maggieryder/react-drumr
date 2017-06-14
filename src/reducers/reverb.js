import { ASSIGN_REVERB_ID,
        ASSIGN_REVERB_OPTIONS,
        TOGGLE_REVERB } from '../actions'

const INITIAL_STATE = {
  reverbOptions: [
    {
      name:'Loading...',
      smpl:''
    }
  ],
  reverbId: 0,
  active: false
}

export default function(state = INITIAL_STATE, action) {
  switch(action.type){
    case ASSIGN_REVERB_OPTIONS:
      console.log('action recieved for ASSIGN BUFFER OPTIONS', action.options)
      return {...state, reverbOptions: action.options}
    case ASSIGN_REVERB_ID:
      console.log('action recieved for ASSIGN REVERB BUFFER', action.id)
      return {...state, reverbId: action.id}
    case TOGGLE_REVERB:
      console.log('action recieved for TOGGLE REVERB', !state.active)
      return {...state, active: !state.active }
    default:
      return state
  }
}
