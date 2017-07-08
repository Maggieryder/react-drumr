import Tracks from '../components/tracks'
import { connect } from 'react-redux'
import { addTrack, removeTrack } from '../actions'

function mapStateToProps({ tracks, kits }){
  return { tracks, kits }
}

export default connect(mapStateToProps, { addTrack, removeTrack })(Tracks)
