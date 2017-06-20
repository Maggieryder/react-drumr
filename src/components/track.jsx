import React, { Component } from 'react'
import PropTypes  from 'prop-types'
//import styles from '../scss/params.scss'
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
      //clipTrack,
      muteTrack,
      soloTrack } from '../actions'

class Track extends Component {
  constructor(props) {
    super(props);
    //console.log('>>> Track PROPS', this.props.track)
  }

  render(){
    let { track,
      updateTrackVolume,
      updateTrackPan,
      updateTrackReverbSend,
      updateTrackDelaySend,
      muteTrack,
      soloTrack  } = this.props
    let{ id, name, buffer, sequence, volume, pan, clip, mute, solo, reverbSend, delaySend } = track

    return (
      <li className="track" id={id}>
        <div className="name">{name}</div>
        <div className="params">
          <Knob label='gain' min={0} max={10} value={volume} step={1} width={50} onChange={(e)=>{updateTrackVolume({id:id, value: e})}}/>
          <Knob label='pan' min={-5} max={5} value={pan} step={1} width={50} onChange={(e)=>{updateTrackPan({id:id, value: e})}}/>
          <Knob label='delay' min={0} max={10} value={delaySend} step={1} width={50} onChange={(e)=>{updateTrackDelaySend({id:id, value: e})}}/>
          <Knob label='reverb' min={0} max={10} value={reverbSend} step={1} width={50} onChange={(e)=>{updateTrackReverbSend({id:id, value: e})}}/>
          <Switch label='mute' cname={mute ? 'mute on' : clip ? 'mute clip' : 'mute'} onClick={() => { muteTrack(id) }}/>
          <Switch label='solo' cname={solo ? 'on' : ''} onClick={() => { soloTrack(id) }}/>
        </div>
        <Sequence id={`seq_${id}`} trackId={id} sequence={sequence}/>
      </li>
    )
  }
}
/*
function mapStateToProps({ track }){
  return { track }
}
*/
export default connect(null,
  { assignTrackName,
    assignTrackBuffer,
    updateTrackSequence,
    updateTrackVolume,
    updateTrackPan,
    updateTrackReverbSend,
    updateTrackDelaySend,
    //clipTrack,
    muteTrack,
    soloTrack })(Track)
