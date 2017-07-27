import React from 'react'
import PropTypes  from 'prop-types'
import Fader from './fader'
import Switch from './switch'

const Mixer = ({
  mixer,
  updateWetMix,
  muteWetMix,
  updateDryMix,
  muteDryMix,
  updateMasterVolume
}) => {

  let { wetMix, wetMute, dryMix, dryMute, masterGain } = mixer
  
  return (
    <div className='mixer'>
      <div className='track' id='wetmix'>
        <div className='name'>wet mix</div>
        <div className='params'>
          <Fader label='' min={0} max={10}  value={wetMix} step={.5} onChange={ e => updateWetMix(Number(e.target.value)) }/>
          <Switch label='mute' cname={wetMute ? 'mute on' : 'mute'} onClick={ () => muteWetMix() }/>
        </div>
      </div>
      <div className='track' id='drymix'>
        <div className='name'>dry mix</div>
        <div className='params'>
          <Fader label='' min={0} max={10} value={dryMix} step={.5} onChange={ e => updateDryMix(Number(e.target.value)) }/>
          <Switch label='mute' cname={dryMute ? 'mute on' : 'mute'} onClick={ () => muteDryMix() }/>
        </div>
      </div>
      <div className='track' id='global'>
        <div className='name'>master</div>
        <div className='params'>
          <Fader label='' min={0} max={10} value={masterGain} step={.5} onChange={ e => updateMasterVolume(Number(e.target.value)) }/>
        </div>
      </div>
    </div>
  )
}

Mixer.propTypes = {

}

export default Mixer
