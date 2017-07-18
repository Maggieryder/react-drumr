import React, { Component } from 'react'
import PropTypes  from 'prop-types'

import Controller from '../containers/controller'
import Tracks from '../containers/tracks'
import Reverb from '../containers/reverb'
import Delay from '../containers/delay'
import Compressor from '../containers/compressor'
import Mixer from '../containers/mixer'

import Drumr from '../api/drumr'

const BeatBox = (props, {store}) => {

  const drumr = new Drumr(store);

  return (
    <div className="beat-box">
      <Controller drumr={drumr} />
      <Tracks drumr={drumr} />
      <Reverb drumr={drumr} />
      <Delay drumr={drumr} />
      <Compressor drumr={drumr} />
      <Mixer drumr={drumr} />
    </div>
  )
}

BeatBox.contextTypes = {
  store: PropTypes.object
}

BeatBox.propTypes = {

}

export default BeatBox
