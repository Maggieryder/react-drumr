import React, { Component } from 'react'
import PropTypes  from 'prop-types'
import Options from './options'
import Switch from './switch'
import { loadImpulse } from '../api/reverb'

const Reverb = ({
  toggleReverb,
  assignReverbId,
  reverb
}) => {

  const onChange = (e) => {
    let { reverbData } = reverb
    console.log('Reverb onChange value',e.target.value)
    loadImpulse('assets/'+reverbData[e.target.value].smpl)
    assignReverbId(e.target.value);
  }

  let { active, reverbData, reverbId } = reverb
  console.log('reverbData[reverbId]',reverbData[reverbId])
  return (
    <div className='track' id='reverb'>
      <div className='name'>reverb</div>
      <div className='params'>
        <Options id='verbs' options={reverbData} value={reverbId} onChange={ e => assignReverbId(parseInt(e.target.value)) }/>
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
