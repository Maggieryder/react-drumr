import React, { Component } from 'react'
import PropTypes  from 'prop-types'
//import styles from '../scss/params.scss'

const Fader = (props) => {
  // console.log('>>> Fader props', props)
  let { label, min, max, value, step, units, onChange } = props
  return (
    <div className='param param-fader'>
      <label>{label}</label>
      <input className='input-slider'
          type='range'
          min={min}
          max={max}
          value={value}
          step={step}
          onChange={onChange}/>
      <div className='meter'>{`${value}${units || ''}`}</div>
    </div>
  )
}

Fader.propTypes = {
  label: PropTypes.string,
  min: PropTypes.number,
  max: PropTypes.number,
  value: PropTypes.number,
  step: PropTypes.number,
  units: PropTypes.string,
  onChange: PropTypes.func
}

export default Fader
