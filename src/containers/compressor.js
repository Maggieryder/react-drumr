import Compressor from '../components/compressor'
import { connect } from 'react-redux'
import { updateThreshold,
          updateKnee,
          updateRatio,
          updateAttack,
          updateRelease,
          toggleCompressor } from '../actions'


function mapStateToProps({ compressor }){
  return { compressor }
}

export default connect(
  mapStateToProps,
  { updateThreshold,
    updateKnee,
    updateRatio,
    updateAttack,
    updateRelease,
    toggleCompressor
  })(Compressor)
