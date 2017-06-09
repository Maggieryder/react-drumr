import React, { PropTypes, Component } from 'react'
import styles from '../scss/params.scss'
import Knob from './knob'
import { connect } from 'react-redux'
import { updateDelayTime, updateDelayFeedback, updateDelayFrequency, toggleDelay } from '../actions/index'


class Delay extends Component {
  constructor(props) {
    super(props);
    console.log('>>> Delay PROPS', this.props)
  }
  render(){
    let { active, time, feedback, frequency } = this.props.delay
    return (
      <div className='delay'>
        <div className='name'>delay</div>
        <div className='params'>
          <Knob label='time' min='0' max='1' value={time} step='.01' onChange={updateDelayTime}/>
          <Knob label='feedback' min='0' max='.95' value={feedback} step='.01' onChange={updateDelayFeedback}/>
          <Knob label='frequency' min='0' max='4000' value={frequency} step='40' onChange={updateDelayFrequency}/>
          <Switch label='on/off' cname={active ? 'on' : null} function={toggleDelay}/>
        </div>
      </div>
    )
  }
}

function mapStateToProps({ delay }){
  return { delay }
}

export default connect(mapStateToProps, { updateDelayTime, updateDelayFeedback, updateDelayFrequency, toggleDelay })(Delay)
