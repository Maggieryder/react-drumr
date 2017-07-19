import Tracks from '../components/tracks'
import { connect } from 'react-redux'
import { addTrack, removeTrack } from '../actions'

function mapStateToProps({ tracks }){
  return { tracks }
}

export default connect(mapStateToProps, { addTrack, removeTrack })(Tracks)
