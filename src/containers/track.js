import Track from '../components/track'
import { connect } from 'react-redux'
import {
      removeTrack,
      assignVoiceId,
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
    assignVoiceId,
    updateTrackVolume,
    updateTrackPan,
    updateTrackReverbSend,
    updateTrackDelaySend,
    muteTrack,
    soloTrack
  })(Track)
