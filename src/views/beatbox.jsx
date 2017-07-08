import React, { Component } from 'react'
import PropTypes  from 'prop-types'

import Controller from '../containers/controller'
import Tracks from '../containers/tracks'
import Reverb from '../containers/reverb'
import Delay from '../containers/delay'
import Compressor from '../containers/compressor'
import Mixer from '../containers/mixer'


const BeatBox = () => {
  return (
    <div className="beat-box">
      <Controller />
      <Tracks />
      <Reverb />
      <Delay />
      <Compressor />
      <Mixer />
    </div>
  )
}

BeatBox.propTypes = {

}

export default BeatBox


// export default withRouter(connect(mapStateToProps)(Something))
