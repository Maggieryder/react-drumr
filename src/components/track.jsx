import React  from 'react'
import PropTypes  from 'prop-types'
import Sequence from './sequence'
import Knob from './knob'
import Switch from './switch'

const Track = ({
  updateTrackVolume,
  updateTrackPan,
  updateTrackReverbSend,
  updateTrackDelaySend,
  muteTrack,
  soloTrack,
  track
}) => {
  let{ id, name, buffer, sequence, volume, pan, clip, mute, solo, reverbSend, delaySend } = track
  console.log('this is soooooo complicated!!!')
  return (
    <li className="track" id={id}>
      <div className="name">{name}</div>
      <div className="params">
        <Knob label='gain' min={0} max={10} value={volume} step={1} width={50} onChange={ e =>{updateTrackVolume({id:id, value: e})}}/>
        <Knob label='pan' min={-5} max={5} value={pan} step={1} width={50} onChange={ e =>{updateTrackPan({id:id, value: e})}}/>
        <Knob label='delay' min={0} max={10} value={delaySend} step={1} width={50} onChange={ e =>{updateTrackDelaySend({id:id, value: e})}}/>
        <Knob label='reverb' min={0} max={10} value={reverbSend} step={1} width={50} onChange={ e =>{updateTrackReverbSend({id:id, value: e})}}/>
        <Switch label='mute' cname={mute ? 'mute on' : clip ? 'mute clip' : 'mute'} onClick={() => { muteTrack(id) }}/>
        <Switch label='solo' cname={solo ? 'on' : ''} onClick={() => { soloTrack(id) }}/>
      </div>
      <Sequence id={`seq_${id}`} trackId={id} sequence={sequence}/>
    </li>
  )
}

Track.propTypes = {
  updateTrackVolume: PropTypes.func.isRequired,
  updateTrackPan: PropTypes.func.isRequired,
  updateTrackReverbSend: PropTypes.func.isRequired,
  updateTrackDelaySend: PropTypes.func.isRequired,
  muteTrack: PropTypes.func.isRequired,
  soloTrack: PropTypes.func.isRequired,
  track: PropTypes.object.isRequired
}

export default Track
