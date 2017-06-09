import { combineReducers } from 'redux'
import controller from './controller'
import kits from './kits'
import tracks from './tracks'
import mixer from './mixer'
import reverb from './reverb'
import delay from './delay'
import compressor from './compressor'

const rootReducer = combineReducers({
  controller,
  kits,
  tracks,
  mixer,
  reverb,
  delay,
  compressor
})

export default rootReducer
