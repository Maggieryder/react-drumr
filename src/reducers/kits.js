import { ASSIGN_KIT_ID,
        ASSIGN_KIT_OPTIONS } from '../actions'

const INITIAL_STATE = {
  kitData: [],
  kitId: 0
}

export default function(state = INITIAL_STATE, action) {
  switch(action.type){
    case ASSIGN_KIT_OPTIONS:
      console.log('action received', action)
      return {...state, kitData: action.data}
    case ASSIGN_KIT_ID:
      console.log('action received', action)
      return {...state, kitId: action.id}
    default:
      return state
  }
}
