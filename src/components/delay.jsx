import React from 'react'
import PropTypes  from 'prop-types'
import Knob from './knob'
import Switch from './switch'

const Delay = ({
  updateDelayTime,
  updateDelayFeedback,
  updateDelayFrequency,
  toggleDelay,
  delay,
  drumr
}) => {

  const handleInteraction = (action, value) => {

    console.log('handleInteraction: ', action)

    switch ( action ) {
      case 'updateTime':
      updateDelayTime(value)
      drumr.updateDelayTime(value)
      break;
      case 'updateFeedback':
      updateDelayFeedback(value)
      drumr.updateFeedbackGain(value)
      break;
      case 'updateFrequency':
      updateDelayFrequency(value)
      drumr.updateFrequency(value)
      break;
      case 'toggleDelay':
      toggleDelay()
      drumr.toggleDelay()
      break;
      default:
      //
    }
  }

  let { active, time, feedback, frequency } = delay

  return (
    <div className='track' id='delay'>
      <div className='name'>delay</div>
      <div className='params'>
        <Knob label='time' min={0} max={1} value={time} step={.01} onChange={ e => handleInteraction('updateTime', e)}/>
        <Knob label='feedback' min={0} max={.95} value={feedback} step={.01} onChange={ e => handleInteraction('updateFeedback', e)}/>
        <Knob label='frequency' min={0} max={4000} value={frequency} step={40} onChange={ e => handleInteraction('updateFrequency', e)}/>
        <Switch label='on/off' cname={active ? 'on' : ''} onClick={() => handleInteraction('toggleDelay')}/>
      </div>
    </div>
  )
}

Delay.propTypes = {
  drumr: PropTypes.object.isRequired,
  delay: PropTypes.object.isRequired,
  updateDelayTime: PropTypes.func.isRequired,
  updateDelayFeedback: PropTypes.func.isRequired,
  updateDelayFrequency: PropTypes.func.isRequired,
  toggleDelay: PropTypes.func.isRequired
}

export default Delay
