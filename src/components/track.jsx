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
      clipTrack,
      muteTrack,
      soloTrack } from '../actions'

class Track extends Component {
  constructor(props) {
    super(props);
    console.log('>>> Track PROPS', this.props)
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

    //let{ mute, solo } = track
    //let{ id, name, buffer } = this.props.t
    return (
      <div className="track" id={id}>
        <div className="name">{name}</div>
        <div className="params">
          <Knob label='gain' min={0} max={10} value={volume} step={.5} onChange={(e)=>{updateTrackVolume(e.target.value)}}/>
          <Knob label='pan' min={-5} max={5} value={pan} step={1} onChange={(e)=>{updateTrackPan(e.target.value)}}/>
          <Knob label='reverb' min={0} max={10} value={reverbSend} step={1} onChange={(e)=>{updateTrackReverbSend(e.target.value)}}/>
          <Knob label='delay' min={0} max={10} value={delaySend} step={1} onChange={(e)=>{updateTrackDelaySend(e.target.value)}}/>
          <Switch label='mute' cname={mute ? 'on' : clip ? 'clip' : null} onClick={() => { muteTrack(id) }}/>
          <Switch label='solo' cname={solo ? 'on' : null} onClick={() => { soloTrack(id) }}/>
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
    soloTrack })(Track)
