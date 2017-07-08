import Mixer from '../components/mixer'
import { connect } from 'react-redux'
import { updateWetMix,
          muteWetMix,
          updateDryMix,
          muteDryMix,
          updateMasterVolume } from '../actions'

function mapStateToProps({ mixer }){
  return { mixer }
}

export default connect(mapStateToProps,
  { updateWetMix,
    muteWetMix,
    updateDryMix,
    muteDryMix,
    updateMasterVolume })(Mixer)
