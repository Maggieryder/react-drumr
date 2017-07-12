import React, { Component }  from 'react'
import PropTypes  from 'prop-types'
import Sequence from './sequence'
import Options from './options'
import Knob from './knob'
import Switch from './switch'

class Track extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount(){

  }

  componentWillReceiveProps(props){
    let { drumr, buffers, trackId, track } = props
    // let{ id, name, bufferId, sequence, volume, pan, clip, mute, solo, reverbSend, delaySend } = track
    console.log('>>> TRACK componentWillReceiveProps PROPS', track.bufferId)
    if (this.props.buffers !== props.buffers) drumr.assignSample(trackId, buffers[track.bufferId]);
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
      buffers,
      drumr } = this.props

      console.log('handleInteraction: ', action)
    switch( action ){
      case 'removeTrack':
      removeTrack(id)
      drumr.removeTrackWithId(id);
      break;
      case 'updateVoice':
      assignBufferId({id:id, value: value})
      drumr.assignSample(id, buffers[value]);
      break;
      case 'updateVolume':
      updateTrackVolume({id:id, value: value})
      drumr.updateTrackVolume(id, value/10)
      break;
      case 'updatePan':
      updateTrackPan({id:id, value: value})
      drumr.updateTrackPan(id, value*.2)
      break;
      case 'updateDelay':
      updateTrackDelaySend({id:id, value: value})
      drumr.updateDelaySend(id, value/10)
      break;
      case 'updateReverb':
      updateTrackReverbSend({id:id, value: value})
      drumr.updateReverbSend(id, value/10)
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
    let { track, voices, buffers, drumr } = this.props
    let{ id, name, bufferId, sequence, volume, pan, clip, mute, solo, reverbSend, delaySend } = track
    return(
      <li className="track" id={id}>
        <div>
          <a className='removeTrackBtn' href='#' onClick={ () => handleInteraction('removeTrack', id) }>x</a>
        </div>
        <div className="name">
          <Options cname='voices' options={voices} value={bufferId} onChange={ e => handleInteraction('updateVoice', id, parseInt(e.target.value)) }/>
        </div>
        <div className="params">
          <Knob label='gain' min={0} max={10} value={volume} step={1} width={50} onChange={ e => handleInteraction('updateVolume', id, e ) } />
          <Knob label='pan' min={-5} max={5} value={pan} step={1} width={50} onChange={ e => handleInteraction('updatePan', id, e ) } />
          <Knob label='delay' min={0} max={10} value={delaySend} step={1} width={50} onChange={ e => handleInteraction('updateDelay', id, e ) } />
          <Knob label='reverb' min={0} max={10} value={reverbSend} step={1} width={50} onChange={ e => handleInteraction('updateReverb', id, e ) } />
          <Switch label='mute' cname={mute ? 'mute on' : clip ? 'mute clip' : 'mute'} onClick={() => handleInteraction('mute', id ) }/>
          <Switch label='solo' cname={solo ? 'on' : ''} onClick={() => handleInteraction('solo', id) } />
        </div>
        <Sequence id={`seq_${id}`} trackId={id} drumr={drumr} sequence={sequence}/>
      </li>
    )
  }
}

export default Track
