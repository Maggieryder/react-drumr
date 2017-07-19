import Track from '../components/track'
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


function mapStateToProps({ kits }){
  return { kits }
}

export default connect(mapStateToProps,
  { removeTrack,
    assignBufferId,
    updateTrackVolume,
    updateTrackPan,
    updateTrackReverbSend,
    updateTrackDelaySend,
    muteTrack,
    soloTrack
  })(Track)
