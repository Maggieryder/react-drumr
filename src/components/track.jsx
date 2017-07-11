import React  from 'react'
import PropTypes  from 'prop-types'
import Sequence from './sequence'
import Options from './options'
import Knob from './knob'
import Switch from './switch'

const Track = ({
  removeTrack,
  assignBufferId,
  updateTrackVolume,
  updateTrackPan,
  updateTrackReverbSend,
  updateTrackDelaySend,
  muteTrack,
  soloTrack,
  track,
  voices,
  buffers,
  drumr
}) => {



  let{ id, name, bufferId, sequence, volume, pan, clip, mute, solo, reverbSend, delaySend } = track
  console.log('TRACK ID '+id)
  const updateVoice = (value) => {
    //let{ id } = track
    assignBufferId({id:id, value: value})
    drumr.assignSample(id, buffers[value]);
  }
  //console.log('buffers', buffers)
  //console.log('bufferId', bufferId)
  const removeTrackWithId = (id) => {
    removeTrack(id)
    drumr.removeTrackWithId(id);
  }

  return (
    <li className="track" id={id}>
      <div>
        <a className='removeTrackBtn' href='#' onClick={ () => removeTrackWithId(id) }>
          x
        </a>
      </div>
      <div className="name">
        <Options cname='voices' options={voices} value={bufferId} onChange={ e => updateVoice(parseInt(e.target.value)) }/>
      </div>

      <div className="params">
        <Knob label='gain' min={0} max={10} value={volume} step={1} width={50} onChange={ e => updateTrackVolume({id:id, value: e}) } />
        <Knob label='pan' min={-5} max={5} value={pan} step={1} width={50} onChange={ e => updateTrackPan({id:id, value: e}) } />
        <Knob label='delay' min={0} max={10} value={delaySend} step={1} width={50} onChange={ e => updateTrackDelaySend({id:id, value: e}) } />
        <Knob label='reverb' min={0} max={10} value={reverbSend} step={1} width={50} onChange={ e => updateTrackReverbSend({id:id, value: e}) } />
        <Switch label='mute' cname={mute ? 'mute on' : clip ? 'mute clip' : 'mute'} onClick={() => muteTrack(id) }/>
        <Switch label='solo' cname={solo ? 'on' : ''} onClick={() => soloTrack(id) } />
      </div>
      <Sequence id={`seq_${id}`} trackId={id} drumr={drumr} sequence={sequence}/>
    </li>
  )
}

Track.propTypes = {
  removeTrack: PropTypes.func.isRequired,
  updateTrackVolume: PropTypes.func.isRequired,
  updateTrackPan: PropTypes.func.isRequired,
  updateTrackReverbSend: PropTypes.func.isRequired,
  updateTrackDelaySend: PropTypes.func.isRequired,
  muteTrack: PropTypes.func.isRequired,
  soloTrack: PropTypes.func.isRequired,
  track: PropTypes.object.isRequired
}

export default Track
