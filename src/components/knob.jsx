import React, { Component } from 'react'
import PropTypes  from 'prop-types'
import Knob from 'react-canvas-knob'
//import styles from '../scss/params.scss'
//<div className='meter'>{value}</div>

const KnobFader = (props) => {
  //type='range'

  let { label, min, max, value, step, onChange  } = props
  let display = {
    size: 50,
    angleOffset: 220,
    angleArc: 280,
    thickness: .18,
    bgColor:'#333',
    fgColor:'#CBE86B'
  }
  let inputColor = display.fgColor
  let onChangeStart = (e) => {
    inputColor = display.fgColor
    onChange(e)
  }
  let onChangeEnd = () => {
    inputColor = display.bgColor
  }
  return (
    <div className='param param-knob'>
      <Knob className='input-knob'
          min={min}
          max={max}
          value={value}
          step={step}
          width={display.size}
          height={display.size}
          thickness={display.thickness}
          bgColor={display.bgColor}
          fgColor={display.fgColor}
          inputColor={inputColor}
          fontWeight='normal'
          disableTextInput={true}
          angleOffset={display.angleOffset}
          angleArc={display.angleArc}
          onChange={onChangeStart}
          onChangeEnd={onChangeEnd} />
      <label>{label}</label>
    </div>
  )
}

KnobFader.propTypes = {
  label: PropTypes.string,
  min: PropTypes.number,
  max: PropTypes.number,
  value: PropTypes.number,
  step: PropTypes.number,
  units: PropTypes.string,
  onChange: PropTypes.func
}

export default KnobFader
