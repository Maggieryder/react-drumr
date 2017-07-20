import React from 'react'
import PropTypes  from 'prop-types'
import Beat from './beat'
import { connect } from 'react-redux'

const Bar = ({ trackId, sequence, cname, controller, drumr  }) => {

  let { barId, signature, resolution } = controller

  const renderBeats = () => {

    let numBeats = signature[0]
    let beats = []
    for (let i=0;i<numBeats;i++){
      //console.log('>>> beat ID', 'beat_'+(barId*numBeats)+i)
      beats.push(<Beat key={'beat_'+(barId*numBeats)+i}
        step={(barId*numBeats)+i}
        trackId={trackId}
        resolution={resolution}
        sequence={sequence}
        drumr={drumr} />)
    }
    return beats
  }

  return (
    <li className={`bar ${cname}`}>
      <ul>
        {renderBeats()}
      </ul>
    </li>
  )
}

function mapStateToProps({ controller }){
  return { controller }
}

export default connect(mapStateToProps)(Bar)
