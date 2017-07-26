import React, { Component } from 'react'
import PropTypes  from 'prop-types'
import Options from './options'
import Switch from './switch'

class Reverb extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount(){
    //
  }
  componentWillReceiveProps(props){
    let { reverb, drumr } = props
    let { reverbData, reverbId } = reverb
    // console.log('>>> REVERB componentWillReceiveProps PROPS', reverb)
    // if (reverbId !== this.props.reverb.reverbId)
    drumr.updateReverbPreset('assets/audio/' + reverbData[reverbId].smpl)
  }
  handleInteraction = (action, value) => {
    let { toggleReverb, assignReverbId, drumr } = this.props

    // console.log('handleInteraction: ', action)

    switch ( action ) {
      case 'updateReverb':
      assignReverbId(value)
      // drumr.updateReverbPreset('assets/audio/' + reverbData[value].smpl)
      break;
      case 'toggleReverb':
      // toggleReverb()
      // drumr.toggleReverb()
      break;
      default:
      //
    }
  }
  render(){
    let handleInteraction = this.handleInteraction
    let { toggleReverb, assignReverbId, drumr, reverb } = this.props
    let { active, reverbData, reverbId } = reverb

    return (
      <div className='track' id='reverb'>
        <div className='name'>reverb</div>
        <div className='params'>
          <Options id='verbs' options={reverbData} value={reverbId} onChange={ e => handleInteraction('updateReverb', parseInt(e.target.value)) }/>
          <Switch label='on/off' cname={active ? 'on' : ''} onClick={ () => toggleReverb() }/>
        </div>
      </div>
    )
  }
}

Reverb.propTypes = {
  assignReverbId: PropTypes.func.isRequired,
  toggleReverb:   PropTypes.func.isRequired,
  reverb:         PropTypes.object.isRequired,
  drumr:          PropTypes.object.isRequired
}

export default Reverb
