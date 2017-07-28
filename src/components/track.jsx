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
    let { drumr, kits, track } = this.props
    let { buffers } = kits
    drumr.assignSample(track.id, buffers[track.bufferId]);
  }

  componentWillReceiveProps(nextProps){
    let { drumr, kits, track } = nextProps
    let { buffers } = kits
    // console.log('>>> TRACK componentWillReceiveProps PROPS', track.id, buffers[track.bufferId])
    if (this.props.kits !== nextProps.kits) drumr.assignSample(track.id, buffers[track.bufferId]);
  }

  handleInteraction = ( action , id, value ) => {
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
      drumr } = this.props

    // console.log('handleInteraction: ', action, id, value)

    switch( action ){
      case 'removeTrack':
      removeTrack(id)
      drumr.removeTrackWithId(id);
      break;
      case 'updateVoice':
      assignBufferId({id:id, value: value})
      drumr.assignSample(id, kits.buffers[value]);
      break;
      case 'updateVolume':
      updateTrackVolume({id:id, value: value})
      // drumr.updateTrackVolume(id, value/10)
      break;
      case 'updatePan':
      updateTrackPan({id:id, value: value})
      // drumr.updateTrackPan(id, value/5)
      break;
      case 'updateDelay':
      updateTrackDelaySend({id:id, value: value})
      // drumr.updateDelaySend(id, value/10)
      break;
      case 'updateReverb':
      updateTrackReverbSend({id:id, value: value})
      // drumr.updateReverbSend(id, value/10)
      break;
      case 'mute':
      muteTrack(id)
      drumr.toggleTrackMute(id)
      break;
      case 'solo':
      soloTrack(id)
      drumr.toggleTrackSolo(id)
      break;
      default:
      //
    }
  }

  render(){
    let handleInteraction = this.handleInteraction
    let { drumr, kits, track, soloActive } = this.props

    let bufferNames = kits.kitData[kits.kitId].voices;
    console.log('track',track)
    let{ id, bufferId, sequence, volume, pan, clip, mute, solo, reverbSend, delaySend } = track
    // console.log('clip', clip)
    return(
      <li className="track" id={id}>
        <div>
          <a className='removeTrackBtn' href='#' onClick={ () => handleInteraction('removeTrack', id) }>x</a>
        </div>
        <div className="name">
          <Options cname='voices' options={bufferNames} value={bufferId} onChange={ e => handleInteraction('updateVoice', id, parseInt(e.target.value)) }/>
        </div>
        <div className="params">
          <Knob label='gain' min={0} max={10} value={volume} step={1} width={50} onChange={ e => handleInteraction('updateVolume', id, e ) } />
          <Knob label='pan' min={-5} max={5} value={pan} step={1} width={50} onChange={ e => handleInteraction('updatePan', id, e ) } />
          <Knob label='delay' min={0} max={10} value={delaySend} step={1} width={50} onChange={ e => handleInteraction('updateDelay', id, e ) } />
          <Knob label='reverb' min={0} max={10} value={reverbSend} step={1} width={50} onChange={ e => handleInteraction('updateReverb', id, e ) } />
          <Switch label='mute' cname={(soloActive && !solo) || (mute && !solo) ? 'mute on' : clip ? 'mute clip' : 'mute'} onClick={() => handleInteraction('mute', id ) }/>
          <Switch label='solo' cname={solo ? 'on' : ''} onClick={() => handleInteraction('solo', id) } />
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
