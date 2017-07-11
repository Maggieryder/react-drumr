import Controller from '../components/controller'
import { connect } from 'react-redux'
import { updateTempo,
      updateSwing,
      updateResolution,
      updateBars,
      assignBuffers,
      assignKitId,
      togglePlay,
      toggleMixer,
      toggleBar } from '../actions'

function mapStateToProps({ controller, kits }){
  return { controller, kits }
}

export default connect(mapStateToProps,
  { updateTempo,
      updateSwing,
      updateResolution,
      updateBars,
      assignBuffers,
      assignKitId,
      togglePlay,
      toggleMixer,
      toggleBar })(Controller)
