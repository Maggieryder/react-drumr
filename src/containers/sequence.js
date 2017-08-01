import Sequence from '../components/sequence'
import { connect } from 'react-redux'

function mapStateToProps({ controller, sequences }){
  return { controller, sequences }
}

export default connect(mapStateToProps)(Sequence)
