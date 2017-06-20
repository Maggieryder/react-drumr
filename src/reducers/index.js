import { combineReducers } from 'redux'
import controller from './controller'
import kitLib from './kits'
import tracks from './tracks'
// import track from './track'
import mixer from './mixer'
import reverb from './reverb'
import delay from './delay'
import compressor from './compressor'

const rootReducer = combineReducers({
  controller,
  kitLib,
  tracks,
  //track,
  mixer,
  reverb,
  delay,
  compressor
})

export default rootReducer
