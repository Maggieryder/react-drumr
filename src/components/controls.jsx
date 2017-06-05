import React, {PropTypes, Component} from 'react'
import styles from '../css/beat-box.scss'
import Fader from './fader'
import Options from './options'
import BarIcon from '../../assets/images/icons/icon-bar.svg'
import MixerIcon from '../../assets/images/icons/icon-mixer.svg'
import PlayIcon from '../../assets/images/icons/icon-play.svg'
import PauseIcon from '../../assets/images/icons/icon-pause.svg'



class Controls extends Component {
  constructor(props) {
    super(props);
    //console.log('>>> beat PROPS', this.props)
  }
  togglePlay(){
    console.log('toggle PLAY')
  }
  toggleMixer(){
    console.log('toggle MIXER')
  }
  onKitChange(){

  }

  render(){
    let { tempo, swing, playing, options, onKitChange } = this.props
    return (
      <div className="controls">
        <div>
          <a className="toggle-mixer" href="#" onClick={this.toggleMixer}>
            <MixerIcon />
          </a>
        </div>
        <div>
          <a id="playBtn" href="#" onClick={this.togglePlay}>
            {playing ? <PauseIcon/> : <PlayIcon/>}
          </a>
        </div>
        <Fader name="tempo" label="TEMPO" args={{min:30, max:160, default:120, units:'bpm'}} onChange={this.onTempoChange}/>
        <Fader name="swing" label="SWING" args={{min:0, max:100, default:0, units:'%'}} onChange={this.onSwingChange}/>
        <Options id="kits" options={options} onChange={this.onKitChange}/>
        <div>
          <a className="toggle-bar" href="#">
            <BarIcon id="bar1"/>
          </a>
          <a className="toggle-bar" href="#">
            <BarIcon id="bar2"/>
          </a>
        </div>
      </div>
    )
  }
}

export default Controls
