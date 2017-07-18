import { ASSIGN_KIT_ID,
        ASSIGN_KIT_DATA,
        ASSIGN_BUFFERS } from '../actions'

const INITIAL_STATE = {
  kitData: [],
  buffers: [],
  kitId: 0
}

export default function(state = INITIAL_STATE, action) {
  switch(action.type){
    case ASSIGN_KIT_DATA:
      // console.log('action received', action)
      return {...state, kitData: action.data}
    case ASSIGN_BUFFERS:
      // console.log('action received', action)
      return {...state, buffers: action.buffers}
    case ASSIGN_KIT_ID:
      // console.log('action received', action)
      return {...state, kitId: action.id}
    default:
      return state
  }
}
