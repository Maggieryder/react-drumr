import React, { Component } from 'react'
import PropTypes  from 'prop-types'

const Fader = ({ label, min, max, value, step, units, onChange }) => {
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
