import React from 'react'
import PropTypes  from 'prop-types'

import BarIcon from '../icons/icon-bar'
import MixerIcon from '../icons/icon-mixer'
import PlayIcon from '../icons/icon-play'
import PauseIcon from '../icons/icon-pause'

const Icon = (props) => {
    switch(props.type){
      case 'bar':
      return <BarIcon />
      case 'mixer':
      return <MixerIcon />
      case 'play':
      return <PlayIcon />
      case 'pause':
      return <PauseIcon />
      default:
      return<div>No type defined!</div>
    }
}

Icon.propTypes = {
  type: PropTypes.string
}

export default Icon
