import React, {PropTypes, Component} from 'react'
import styles from '../css/beat-box.scss'
import Fader from './fader'
import Options from './options'
import BarIcon from '../../assets/images/icons/icon-bar.svg'
import MixerIcon from '../../assets/images/icons/icon-mixer.svg'
import PlayIcon from '../../assets/images/icons/icon-play.svg'
import PauseIcon from '../../assets/images/icons/icon-pause.svg'
import { connect } from 'react-redux'
import { updateWetMix, muteWetMix, updateDryMix, muteDryMix, assignKitId} from '../actions/index'



class Controls extends Component {
  constructor(props) {
    super(props);
    console.log('>>> Controls PROPS', this.props)
  }

  toggleMixer(){
    console.log('toggle MIXER')
  }
  toggleBar(){
    console.log('toggle BAR')
  }
  onKitChange(e){
    console.log('KIT CHANGE', e.target.value)
    //assignKitId()
  }

  render(){
    let { kitLib, sequencer } = this.props
    let { kitOptions, kitId } = kitLib
    let { tempo, swing, isPlaying, togglePlay } = sequencer
    return (
      <div className='controls'>
        <div>
          <a className='toggle-mixer' href='#' onClick={this.toggleMixer}>
            <MixerIcon />
          </a>
        </div>
        <div>
          <a id='playBtn' href='#' onClick={togglePlay}>
            {isPlaying ? <PauseIcon/> : <PlayIcon/>}
          </a>
        </div>
        <Fader label='tempo' min='30' max='160' value={tempo} step='1' units='bpm' onChange={updateTempo}/>
        <Fader label='swing' min='0' max='100' value={swing} step='1' units='%' onChange={updateSwing}/>
        <Options id='kits' options={kitOptions} isSelected={kitId} onChange={(e) => {onKitChange}}/>
        <div>
          <a className='toggle-bar' href='#' onClick={this.toggleBar}>
            <BarIcon id='bar1'/>
          </a>
          <a className='toggle-bar' href='#' onClick={this.toggleBar}>
            <BarIcon id='bar2'/>
          </a>
        </div>
      </div>
    )
  }
}

function mapStateToProps({ sequencer, kitLib }){
  return { sequencer, kitLib }
}

export default connect(mapStateToProps, { updateTempo, updateSwing, updateKit, togglePlay, assignKitId })(Controls)
