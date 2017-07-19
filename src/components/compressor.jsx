import React from 'react'
import PropTypes  from 'prop-types'
import Knob from './knob'
import Switch from './switch'

const Compressor = ({
  compressor,
  updateThreshold,
  updateKnee,
  updateRatio,
  updateAttack,
  updateRelease,
  toggleCompressor,
  drumr
}) => {

  const handleInteraction = (action, value) => {

    // console.log('handleInteraction: ', action)

    switch ( action ) {
      case 'updateThreshold':
      updateThreshold(value)
      drumr.updateThreshold(value)
      break;
      case 'updateKnee':
      updateKnee(value)
      drumr.updateKnee(value)
      break;
      case 'updateRatio':
      updateRatio(value)
      drumr.updateRatio(value)
      break;
      case 'updateAttack':
      updateAttack(value)
      drumr.updateAttack(value)
      break;
      case 'updateRelease':
      updateRelease(value)
      drumr.updateRelease(value)
      break;
      case 'toggleCompressor':
      toggleCompressor()
      drumr.toggleCompressor()
      break;
      default:
      //
    }
  }

  let { active, threshold, knee, ratio, attack, release } = compressor

  return (
    <div className='track' id='compressor'>
      <div className='name'>compressor</div>
      <div className='params'>
        <Knob label='threshold' min={-100} max={0} value={threshold} step={1} onChange={ e => handleInteraction('updateThreshold', e )} />
        <Knob label='knee' min={0} max={40} value={knee} step={1} onChange={ e => handleInteraction('updateKnee', e )} />
        <Knob label='ratio' min={1} max={20} value={ratio} step={1} onChange={ e => handleInteraction('updateRatio', e )} />
        <Knob label='attack' min={0} max={1} value={attack} step={.01} onChange={ e => handleInteraction('updateAttack', e )} />
        <Knob label='release' min={0} max={1} value={release} step={.01} onChange={ e => handleInteraction('updateRelease', e )} />
        <Switch label='on/off' cname={active ? 'on' : ''} onClick={() => handleInteraction('toggleCompressor')}/>
      </div>
    </div>
  )
}

Compressor.propTypes = {
  updateThreshold:  PropTypes.func.isRequired,
  updateKnee:       PropTypes.func.isRequired,
  updateRatio:      PropTypes.func.isRequired,
  updateAttack:     PropTypes.func.isRequired,
  updateRelease:    PropTypes.func.isRequired,
  toggleCompressor: PropTypes.func.isRequired,
  compressor:       PropTypes.object.isRequired,
  drumr:            PropTypes.object.isRequired
}

export default Compressor
