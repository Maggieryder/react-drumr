import Sequence from '../components/sequence'
import { connect } from 'react-redux'

function mapStateToProps({ controller }){
  return { controller }
}

export default connect(mapStateToProps)(Sequence)
