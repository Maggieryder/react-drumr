import React, {PropTypes, Component} from 'react'
import styles from '../css/params.scss'

class Knob extends Component {
  constructor(props) {
    super(props);
    //console.log('>>> bar PROPS', this.props)
  }

  render(){
    let {label, name, args} = this.props
    return (
      <div className={`param param-knob`}>
        <input className={`input-knob ${name}`} type="range" min={args.min} max={args.max} value={args.default}  data-width={args.size} data-height={args.size} data-angleOffset={args.angleOffset} data-angleRange={args.angleRange} />
        <label>{label}</label>
        <div className={`meter ${name}meter`}>0</div>
      </div>
    )
  }
}

export default Knob
