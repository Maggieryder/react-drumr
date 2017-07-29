import React, { Component }  from 'react'
import PropTypes  from 'prop-types'
import Sequence from '../containers/sequence'
import Options from './options'
import Knob from './knob'
import Switch from './switch'

class Track extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount(){
    // let { drumr, kits, track } = this.props
    // let { buffers } = kits
    // drumr.assignSample(track.id, buffers[track.bufferId]);
  }

  componentWillReceiveProps(nextProps){
    // let { drumr, kits, track } = nextProps
    // let { buffers } = kits
    // console.log('>>> TRACK componentWillReceiveProps PROPS', track.id, buffers[track.bufferId])
    // if (this.props.kits !== nextProps.kits) drumr.assignSample(track.id, buffers[track.bufferId]);
  }

  render(){

    let {
      removeTrack,
      assignBufferId,
      updateTrackVolume,
      updateTrackPan,
      updateTrackReverbSend,
      updateTrackDelaySend,
      muteTrack,
      soloTrack,
      kits,
      track,
      soloActive,
      drumr } = this.props

    let bufferNames = kits.kitData[kits.kitId].voices;
    // console.log('track',track)
    let{ id, bufferId, sequence, volume, pan, clip, mute, solo, reverbSend, delaySend } = track
    // console.log('clip', clip)
    return(
      <li className="track" id={id}>
        <div>
          <a className='removeTrackBtn' href='#' onClick={ () => removeTrack( id ) }>x</a>
        </div>
        <div className="name">
          <Options cname='voices' options={bufferNames} value={bufferId} onChange={ e => assignBufferId({ id: id, value: parseInt(e.target.value) }) }/>
        </div>
        <div className="params">
          <Knob label='gain' min={0} max={10} value={volume} step={1} width={50} onChange={ e => updateTrackVolume({ id: id, value: e }) } />
          <Knob label='pan' min={-5} max={5} value={pan} step={1} width={50} onChange={ e => updateTrackPan({ id: id, value: e }) } />
          <Knob label='delay' min={0} max={10} value={delaySend} step={1} width={50} onChange={ e => updateTrackDelaySend({ id: id, value: e }) } />
          <Knob label='reverb' min={0} max={10} value={reverbSend} step={1} width={50} onChange={ e => updateTrackReverbSend({id: id, value: e }) } />
          <Switch label='mute' cname={(soloActive && !solo) || (mute && !solo) ? 'mute on' : clip ? 'mute clip' : 'mute'} onClick={() => muteTrack( id ) }/>
          <Switch label='solo' cname={solo ? 'on' : ''} onClick={() => soloTrack( id ) } />
        </div>
        <Sequence id={`seq_${id}`} trackId={id} drumr={drumr} sequence={sequence}/>
      </li>
    )
  }
}

Track.propTypes = {
  removeTrack:            PropTypes.func.isRequired,
  assignBufferId:         PropTypes.func.isRequired,
  updateTrackVolume:      PropTypes.func.isRequired,
  updateTrackPan:         PropTypes.func.isRequired,
  updateTrackReverbSend:  PropTypes.func.isRequired,
  updateTrackDelaySend:   PropTypes.func.isRequired,
  muteTrack:              PropTypes.func.isRequired,
  soloTrack:              PropTypes.func.isRequired,
  track:                  PropTypes.object.isRequired,
  drumr:                  PropTypes.object.isRequired,
  kits:                   PropTypes.object.isRequired,
  soloActive:             PropTypes.bool
}

export default Track
