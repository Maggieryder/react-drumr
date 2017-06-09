import React, {PropTypes, Component} from 'react'
import styles from '../css/beat-box.scss'
import Fader from './fader'
import Switch from './switch'
import { connect } from 'react-redux'
import { updateWetMix, muteWetMix, updateDryMix, muteDryMix, updateMasterVolume } from '../actions/index'

class Mixer extends Component {
  constructor(props) {
    super(props);
    console.log('>>> Mixer PROPS', this.props)
  }

  render(){
    let { wetMix, wetMute, dryMix, dryMute, masterGain } = this.props,mixer
    return (
      <div className='mixer'>
        <div className='track' id='wetmix'>
          <div className='name'>wet mix</div>
          <div className='params'>
            <Fader label='' min='0' max='10' value={wetMix} step='.5' onChange={updateWetMix}/>
            <Switch label='mute' cname={wetMute ? 'on' : null} function={muteWetMix}/>
          </div>
        </div>
        <div className='track' id='drymix'>
          <div className='name'>dry mix</div>
          <div className='params'>
            <Fader label='' min='0' max='10' value={dryMix} step='.5' onChange={updateDryMix}/>
            <Switch label='mute' cname={dryMute ? 'on' : null} function={muteDryMix}/>
          </div>
        </div>
        <div className='track' id='global'>
          <div className='name'>master</div>
          <div className='params'>
            <Fader label='' min='0' max='10' value={masterGain} step='.5' onChange={updateMasterVolume}/>
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
