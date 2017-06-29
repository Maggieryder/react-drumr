import { LOAD_ASSET_SUCCESS } from '../actions'

const INITIAL_STATE = []

export default function(state = INITIAL_STATE, action) {
  switch(action.type){
    case LOAD_ASSET_SUCCESS:
      console.log('action received', action)
      return action.assets
    default:
      return state
  }
}
