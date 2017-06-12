import React from 'react'
import PropTypes  from 'prop-types'

import BarIcon from '../../assets/images/icons/icon-bar.svg'
import MixerIcon from '../../assets/images/icons/icon-mixer.svg'
import PlayIcon from '../../assets/images/icons/icon-play.svg'
import PauseIcon from '../../assets/images/icons/icon-pause.svg'

const Icon = (props) => {
  //console.log('ICON props', props)
    switch(props.type){
      case 'bar':
      return <img src={BarIcon} />
      case 'mixer':
      return <img src={MixerIcon} />
      case 'play':
      return <img src={PlayIcon} />
      case 'pause':
      return <img src={PauseIcon} />
      default:
      return<div>No type defined!</div>
    }
}
/*
Icon.propTypes = {
  type: PropTypes.string;
}
*/
export default Icon
