import Delay from '../components/delay'
import { connect } from 'react-redux'
import { updateDelayTime,
          updateDelayFeedback,
          updateDelayFrequency,
          toggleDelay } from '../actions'

function mapStateToProps({ delay }){
  return { delay }
}

export default connect(
  mapStateToProps,
  { updateDelayTime, 
    updateDelayFeedback,
    updateDelayFrequency,
    toggleDelay
  })(Delay)
