import React, {PropTypes, Component} from 'react'
import styles from '../scss/params.scss'
import Sequence from './sequence'
import Knob from './knob'
import Switch from './switch'
import { connect } from 'react-redux'
import { assignTrackName,
      assignTrackBuffer,
      updateTrackSequence,
      updateTrackVolume,
      updateTrackPan,
      updateTrackReverbSend,
      updateTrackDelaySend,
      clipTrack,
      muteTrack,
      soloTrack } from '../actions/index'

class Track extends Component {
  constructor(props) {
    super(props);
    console.log('>>> Track PROPS', this.props)
  }

  render(){
    let{ id, name, buffer, sequence, volume, pan, clip, mute, solo, reverbSend, delaySend } = this.props.track
    return (
      <div className="track" id={id}>
        <div className="name">{name}</div>
        <div className="params">
          <Knob label='gain' min={0} max={10} value={volume} step={.5} onChange={updateTrackVolume}/>
          <Knob label='pan' min={-5} max={5}value={pan} step={1} onChange={updateTrackPan}/>
          <Knob label='reverb' min={0} max={10} value={reverbSend} step={1} onChange={updateTrackReverbSend}/>
          <Knob label='delay' min={0} max={10} value={delaySend} step={1} onChange={updateTrackDelaySend}/>
          <Switch label='mute' cname={mute ? 'on' : clip ? 'clip' : null} onClick={muteTrack}/>
          <Switch label='solo' cname={solo ? 'on' : null} onClick={soloTrack}/>
        </div>
        <Sequence id={`seq_${id}`}/>
      </div>
    )
  }
}

function mapStateToProps({ track }){
  return { track }
}

export default connect(mapStateToProps,
  { assignTrackName,
    assignTrackBuffer,
    updateTrackSequence,
    updateTrackVolume,
    updateTrackPan,
    updateTrackReverbSend,
    updateTrackDelaySend,
    clipTrack,
    muteTrack,
    soloTrack })(Tracks)
