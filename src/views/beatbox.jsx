import React, { Component } from 'react'
import PropTypes  from 'prop-types'
import styles from '../scss/params.scss'
import Controller from '../components/controller'
import Tracks from '../components/tracks'
import Reverb from '../components/reverb'
import Delay from '../components/delay'
import Compressor from '../components/compressor'
import Mixer from '../components/mixer'
// import { connect } from 'react-redux'
// import { withRouter } from 'react-router-dom'

class BeatBox extends Component {
  constructor(props) {
    super(props);
    // console.log('>>> BeatBox PROPS', this.props)
  }
  render(){
    return (
      <div className="beat-box">
        <Controller />
        <Tracks />
        <Reverb/>
        <Delay/>
        <Compressor/>
        <Mixer />
      </div>
    )
  }
}

BeatBox.propTypes = {

}

export default BeatBox

// function mapStateToProps({ drumr }){
  //return { drumr }
//}
// export default withRouter(connect(mapStateToProps)(Something))