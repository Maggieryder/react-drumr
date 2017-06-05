import React, {PropTypes, Component} from 'react'
import styles from '../css/params.scss'
import Knob from './knob'


class Delay extends Component {
  constructor(props) {
    super(props);
    //console.log('>>> beat PROPS', this.props)
  }
  renderParams(){

  }
  renderSequence(){

  }
  render(){
    return (
      <div className="reverb">
        <div className="name">{name}</div>
        <div className="params">
          {renderParams()}
        </div>
        <Switch name="mute"/>
      </div>
    )
  }
}

export default Delay
