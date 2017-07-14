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
  updateMasterVolume,
  drumr
}) => {

  const handleInteraction = (action, value) => {

    console.log('handleInteraction: ', action)

    switch ( action ) {
      case 'updateMasterVolume':
      updateMasterVolume(value)
      drumr.updateGlobalVolume(value/10)
      break;
      case 'updateDryMix':
      updateDryMix(value)
      drumr.updateDryVolume(value/10)
      break;
      case 'updateWetMix':
      updateWetMix(value)
      drumr.updateWetVolume(value/10)
      break;
      case 'muteDryMix':
      muteDryMix()
      drumr.toggleDryMute()
      break;
      case 'muteWetMix':
      muteWetMix()
      drumr.toggleWetMute()
      break;
      default:
      //
    }
  }

  let { wetMix, wetMute, dryMix, dryMute, masterGain } = mixer
  return (
    <div className='mixer'>
      <div className='track' id='wetmix'>
        <div className='name'>wet mix</div>
        <div className='params'>
          <Fader label='' min={0} max={10}  value={wetMix} step={.5} onChange={ e => handleInteraction('updateWetMix', Number(e.target.value)) }/>
          <Switch label='mute' cname={wetMute ? 'mute on' : 'mute'} onClick={ () => handleInteraction('muteWetMix') }/>
        </div>
      </div>
      <div className='track' id='drymix'>
        <div className='name'>dry mix</div>
        <div className='params'>
          <Fader label='' min={0} max={10} value={dryMix} step={.5} onChange={ e => handleInteraction('updateDryMix', Number(e.target.value)) }/>
          <Switch label='mute' cname={dryMute ? 'mute on' : 'mute'} onClick={ () => handleInteraction('muteDryMix') }/>
        </div>
      </div>
      <div className='track' id='global'>
        <div className='name'>master</div>
        <div className='params'>
          <Fader label='' min={0} max={10} value={masterGain} step={.5} onChange={ e => handleInteraction('updateMasterVolume', Number(e.target.value)) }/>
        </div>
      </div>
    </div>
  )
}

Mixer.propTypes = {

}

export default Mixer
