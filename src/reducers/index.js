import { combineReducers } from 'redux'
import { tracks } from './tracks'
import { kits } from './kits'
import { sequencer} from './sequencer'
import { mixer} from './mixer'
import { reverb } from './reverb'
import { delay } from './delay'
import { compressor } from './compressor'

const rootReducer = combineReducers({
  kits,
  tracks,
  sequencer,
  mixer,
  reverb,
  delay,
  compressor
})

export default rootReducer
