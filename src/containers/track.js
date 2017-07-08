import Track from '../components/track'
import { connect } from 'react-redux'
import { updateTrackVolume,
      updateTrackPan,
      updateTrackReverbSend,
      updateTrackDelaySend,
      muteTrack,
      soloTrack } from '../actions'

/*
function mapStateToProps({ track }){
  return { track }
}
*/
export default connect(null,
  { updateTrackVolume,
    updateTrackPan,
    updateTrackReverbSend,
    updateTrackDelaySend,
    muteTrack,
    soloTrack })(Track)
