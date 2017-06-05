import React, {PropTypes, Component} from 'react'
import styles from '../css/params.scss'

class Fader extends Component {
  constructor(props) {
    super(props);
    //console.log('>>> bar PROPS', this.props)
  }

  render(){
    let {label, name, args} = this.props
    return (
      <div className="param param-fader">
        <label>{label}</label>
        <input className="input-slider" name={name} type="range" min={args.min} max={args.max} value={args.default} />
        <div id={`${name}Meter`} className="meter">{`${args.default} ${args.units}`}</div>
      </div>
    )
  }
}

export default Fader
