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

  let { active, reverbData, reverbId } = reverb
  console.log('reverbData[reverbId]',reverbData[reverbId])
  return (
    <div className='track' id='reverb'>
      <div className='name'>reverb</div>
      <div className='params'>
        <Options id='verbs' options={reverbData} value={reverbId} onChange={ e => updateReverb(parseInt(e.target.value)) }/>
        <Switch label='on/off' cname={active ? 'on' : ''} onClick={toggleReverb}/>
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
