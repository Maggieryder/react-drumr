import React, { PropTypes, Component } from 'react'
import styles from '../scss/params.scss'
import Controls from '../components/controls'
import Tracks from '../components/tracks'
//import Effects from '../components/effects'
import Mixer from '../components/mixer'

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
        <Mixer />
      </div>
    )
  }
}

BeatBox.propTypes = {
  
}

export default BeatBox
