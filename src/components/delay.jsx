import React, { Component } from 'react'
import PropTypes  from 'prop-types'
//import styles from '../scss/params.scss'
import Knob from './knob'
import Switch from './switch'
import { connect } from 'react-redux'
import { updateDelayTime, updateDelayFeedback, updateDelayFrequency, toggleDelay } from '../actions'


class Delay extends Component {
  constructor(props) {
    super(props);
    // console.log('>>> Delay PROPS', this.props)
  }
  render(){
    let { delay, updateDelayTime, updateDelayFeedback, updateDelayFrequency, toggleDelay } = this.props
    let { active, time, feedback, frequency } = delay
    return (
      <div className='track' id='delay'>
        <div className='name'>delay</div>
        <div className='params'>
          <Knob label='time' min={0} max={1} value={time} step={.01} onChange={ e => updateDelayTime(e)}/>
          <Knob label='feedback' min={0} max={.95} value={feedback} step={.01} onChange={ e => updateDelayFeedback(e)}/>
          <Knob label='frequency' min={0} max={4000} value={frequency} step={40} onChange={ e => updateDelayFrequency(e)}/>
          <Switch label='on/off' cname={active ? 'on' : ''} onClick={toggleDelay}/>
        </div>
      </div>
    )
  }
}

function mapStateToProps({ delay }){
  return { delay }
}

export default connect(mapStateToProps, { updateDelayTime, updateDelayFeedback, updateDelayFrequency, toggleDelay })(Delay)
