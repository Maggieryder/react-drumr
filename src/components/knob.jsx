import React, {PropTypes, Component} from 'react'
import styles from '../scss/params.scss'

class Knob extends Component {
  constructor(props) {
    super(props);
    console.log('>>> Knob PROPS', this.props)
  }

  render(){
    let display = {
      size: 50,
      angleOffset: 220,
      angleRange: 280
    }

    let { label, min, max, value, step, onChange } = this.props
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
}

export default Knob
