import React, {PropTypes, Component} from 'react'
import styles from '../css/params.scss'

class Fader extends Component {
  constructor(props) {
    super(props);
    console.log('>>> Fader PROPS', this.props)
  }

  render(){
    let {label, min, max, value, step, units, onChange} = this.props
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
        <div className='meter'>{`${value} ${units}`}</div>
      </div>
    )
  }
}

export default Fader
