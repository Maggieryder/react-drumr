import React, { Component } from 'react'
import PropTypes  from 'prop-types'
import Options from './options'
import Switch from './switch'

const Reverb = ({
  toggleReverb,
  assignReverbId,
  reverb,
  drumr
}) => {

  const updateReverb = (value) => {
    assignReverbId(value);
    drumr.updateReverbPreset('assets/audio/' + reverbData[reverbId].smpl)
  }

  const handleInteraction = (action, value) => {
    // let {
    //   updateDelayTime,
    //   updateDelayFeedback,
    //   updateDelayFrequency,
    //   toggleReverb,
    //   drumr } = props

    console.log('handleInteraction: ', action)

    switch ( action ) {
      case 'updateReverb':
      assignReverbId(value)
      drumr.updateReverbPreset('assets/audio/' + reverbData[value].smpl)
      break;
      case 'toggleReverb':
      toggleReverb()
      drumr.toggleReverb()
      break;
      default:
      //
    }
  }

  let { active, reverbData, reverbId } = reverb
  console.log('reverbData[reverbId]',reverbData[reverbId])
  return (
    <div className='track' id='reverb'>
      <div className='name'>reverb</div>
      <div className='params'>
        <Options id='verbs' options={reverbData} value={reverbId} onChange={ e => handleInteraction('updateReverb', parseInt(e.target.value)) }/>
        <Switch label='on/off' cname={active ? 'on' : ''} onClick={() => handleInteraction('toggleReverb')}/>
      </div>
    </div>
  )
}

Reverb.propTypes = {
  reverb: PropTypes.object.isRequired,
  assignReverbId: PropTypes.func.isRequired,
  toggleReverb: PropTypes.func.isRequired
}

export default Reverb
