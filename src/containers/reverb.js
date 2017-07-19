import Reverb from '../components/reverb'
import PropTypes  from 'prop-types'
import { connect } from 'react-redux'
import { assignReverbId, toggleReverb } from '../actions'

function mapStateToProps({ reverb }){
  return { reverb }
}

export default connect(mapStateToProps, { assignReverbId, toggleReverb })(Reverb)
