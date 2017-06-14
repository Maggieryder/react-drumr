import React, { Component } from 'react'
import PropTypes  from 'prop-types'
//import styles from '../scss/params.scss'
import Options from './options'
import Knob from './knob'
import Switch from './switch'
import { loadImpulse } from '../api/reverb'
import { connect } from 'react-redux'
import { assignReverbId, toggleReverb } from '../actions'


class Reverb extends Component {
  constructor(props) {
    super(props);
    console.log('>>> Reverb PROPS', this.props)
  }
  componentWillReceiveProps(props){
    let { reverbOptions, active, reverbId } = props.reverb
    //console.log('componentWillReceiveProps', props)
  }
  onChange(e) {
    let { reverb, assignReverbId } = this.props
    let { reverbOptions } = reverb
    console.log('Reverb onChange value',e.target.value)
    loadImpulse('assets/'+reverbOptions[e.target.value].smpl)
    assignReverbId(e.target.value);
  }
  render(){
    let { reverb, toggleReverb } = this.props
    let { active, reverbOptions, reverbId } = reverb
    return (
      <div className='track' id='reverb'>
        <div className='name'>reverb</div>
        <div className='params'>
          <Options id='verbs' options={reverbOptions} value={reverbId} onChange={(e) => {onChange()}}/>
          <Switch label='on/off' cname={active ? 'on' : null} onClick={toggleReverb}/>
        </div>
      </div>
    )
  }
}

Reverb.propTypes = {
  reverb: PropTypes.object.isRequired,
  assignReverbId: PropTypes.func.isRequired,
  toggleReverb: PropTypes.func.isRequired
}
/* picked up from reducer defaults
Reverb.defaultProps = {
  reverb: {
    reverbOptions: {},
    reverbId: 0,
    active: false
  }
}
*/
function mapStateToProps({ reverb }){
  return { reverb }
}

export default connect(mapStateToProps, { assignReverbId, toggleReverb })(Reverb)
