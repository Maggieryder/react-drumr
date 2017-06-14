import React, { Component } from 'react'
import PropTypes  from 'prop-types'
import '../vendor/knob'
//import styles from '../scss/params.scss'

const Knob = (props) => {
  console.log('>>> Knob props', props)
  let display = {
    size: 50,
    angleOffset: 220,
    angleRange: 280
  }
  let { label, min, max, value, step, onChange  } = props
  return (
    <div className='param param-knob'>
      <input className='input-knob'
          type='range'
          min={min}
          max={max}
          value={value}
          step={step}
          data-width={display.size}
          data-height={display.size}
          data-angleOffset={display.angleOffset}
          data-angleRange={display.angleRange}
          onChange={onChange} />
      <label>{label}</label>
      <div className='meter'>{value}</div>
    </div>
  )
}

Knob.propTypes = {
  label: PropTypes.string,
  min: PropTypes.number,
  max: PropTypes.number,
  value: PropTypes.number,
  step: PropTypes.number,
  units: PropTypes.string,
  onChange: PropTypes.func
}

export default Knob
