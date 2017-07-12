import React, { Component } from 'react'
import PropTypes  from 'prop-types'
import Knob from './knob'
import Switch from './switch'

class Delay extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount(){

  }
  componentWillReceiveProps(props){
    let { delay } = props
    console.log('>>> DELAY componentWillReceiveProps PROPS', delay)
    // if (this.props.buffers !== props.buffers) drumr.assignSample(trackId, buffers[track.bufferId]);
  }
  handleInteraction = (action, value) => {
    let {
      updateDelayTime,
      updateDelayFeedback,
      updateDelayFrequency,
      toggleDelay,
      drumr } = this.props

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
  render(){
    let handleInteraction = this.handleInteraction
    let { active, time, feedback, frequency } = this.props.delay

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
}

Delay.propTypes = {

}

export default Delay
