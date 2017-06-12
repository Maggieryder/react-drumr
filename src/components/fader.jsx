import React, { Component } from 'react'
import PropTypes  from 'prop-types'
import styles from '../scss/params.scss'

class Fader extends Component {
  constructor(props) {
    super(props);
    console.log('>>> Fader PROPS', this.props)
  }

  render(){
    let {label, min, max, value, step, units, onChange} = this.props
    //console.log('onChange', onChange)
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
        <div className='meter'>{`${value}${units}`}</div>
      </div>
    )
  }
}

export default Fader
