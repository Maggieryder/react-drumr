import { combineReducers } from 'redux'
import loader from './loader'
import controller from './controller'
import kits from './kits'
import tracks from './tracks'
import sequences from './sequences'
import mixer from './mixer'
import reverb from './reverb'
import delay from './delay'
import compressor from './compressor'

const rootReducer = combineReducers({
  loader,
  controller,
  kits,
  tracks,
  sequences,
  mixer,
  reverb,
  delay,
  compressor
})

export default rootReducer
