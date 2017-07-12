import Track from '../components/track2'
import { connect } from 'react-redux'
import {
      removeTrack,
      assignBufferId,
      updateTrackVolume,
      updateTrackPan,
      updateTrackReverbSend,
      updateTrackDelaySend,
      muteTrack,
      soloTrack
    } from '../actions'

/*
function mapStateToProps({ track }){
  return { track }
}
*/

export default connect(null,
  { removeTrack,
    assignBufferId,
    updateTrackVolume,
    updateTrackPan,
    updateTrackReverbSend,
    updateTrackDelaySend,
    muteTrack,
    soloTrack
  })(Track)
