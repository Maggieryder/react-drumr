import Step from '../components/step'
import { connect } from 'react-redux'
import { updateTrackSequence } from '../actions'

function mapStateToProps({ controller }){
  return { controller }
}

export default connect(mapStateToProps, { updateTrackSequence })(Step)
