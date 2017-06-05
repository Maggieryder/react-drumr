import React, {PropTypes, Component} from 'react'
import styles from '../css/params.scss'
import Controls from './controls'
import Tracks from './tracks'
import Effects from './effects'
import Mixer from './mixer'

class BeatBox extends Component {
  constructor(props) {
    super(props);
    //console.log('>>> beat PROPS', this.props)
  }
  render(){
    return (
      <div className="beat-box">
        <Controls />
        <Tracks />
        <Effects />
        <Mixer />
      </div>
    )
  }
}

export default BeatBox
