import { ASSIGN_KIT_ID,
        ASSIGN_KIT_OPTIONS } from '../actions/index'

const INITIAL_STATE = {
  kitOptions: [
    {
      name:'Loading...',
      smpl:''
    }
  ]
  kitId: 0
}

export default function(state = INITIAL_STATE, action) {
  switch(action.type){
    case ASSIGN_KIT_OPTIONS:
      console.log('action recieved for ASSIGN KIT OPTIONS', action.options)
      return {...state, kitOptions: action.options}
    case ASSIGN_KIT_ID:
      console.log('action recieved for ASSIGN KIT ID', action.id)
      return {...state, kitId: action.id}
    default:
      return state
  }
}
