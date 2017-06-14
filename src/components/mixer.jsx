import React, { Component } from 'react'
import PropTypes  from 'prop-types'
//import styles from '../scss/main.scss'
import Fader from './fader'
import Switch from './switch'
import { connect } from 'react-redux'
import { updateWetMix, muteWetMix, updateDryMix, muteDryMix, updateMasterVolume } from '../actions'

class Mixer extends Component {
  constructor(props) {
    super(props);
    console.log('>>> Mixer PROPS', this.props)
  }

  render(){
    let { mixer, updateWetMix, muteWetMix, updateDryMix, muteDryMix, updateMasterVolume } = this.props
    let { wetMix, wetMute, dryMix, dryMute, masterGain } = mixer
    return (
      <div className='mixer'>
        <div className='track' id='wetmix'>
          <div className='name'>wet mix</div>
          <div className='params'>
            <Fader label='' min={0} max={10}  value={wetMix} step={.5} onChange={(e)=>{updateWetMix(Number(e.target.value))}}/>
            <Switch label='mute' cname={wetMute ? 'on' : null} onClick={muteWetMix}/>
          </div>
        </div>
        <div className='track' id='drymix'>
          <div className='name'>dry mix</div>
          <div className='params'>
            <Fader label='' min={0} max={10} value={dryMix} step={.5} onChange={(e)=>{updateDryMix(Number(e.target.value))}}/>
            <Switch label='mute' cname={dryMute ? ' on' : ''} onClick={muteDryMix}/>
          </div>
        </div>
        <div className='track' id='global'>
          <div className='name'>master</div>
          <div className='params'>
            <Fader label='' min={0} max={10} value={masterGain} step={.5} onChange={(e)=>{updateMasterVolume(Number(e.target.value))}}/>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps({ mixer }){
  return { mixer }
}

export default connect(mapStateToProps, { updateWetMix, muteWetMix, updateDryMix, muteDryMix, updateMasterVolume })(Mixer)
