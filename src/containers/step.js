import Step from '../components/step'
import { connect } from 'react-redux'
import { updateTrackSequence } from '../actions'

function mapStateToProps({ controller, tracks, sequences }){
  return { controller, tracks, sequences }
}

export default connect(mapStateToProps, { updateTrackSequence })(Step)
