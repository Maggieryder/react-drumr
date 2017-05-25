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

  render(){
    let options = this.props
    return (
      <div class="controls">
        <div>
          <a class="toggle-mixer" href="#">
            <MixerIcon />
          </a>
        </div>
        <div>
          <a id="playBtn" href="#">
            <PlayIcon/>
            <PauseIcon/>
          </a>
        </div>
        <Fader name="Tempo" label="TEMPO" args={{min:30, max:160, default:120, units:'bpm'}}/>
        <Fader name="Swing" label="SWING" args={{min:0, max:100, default:0, units:'%'}}/>
        <Options id="kits" options={options}/>
        <div>
          <a class="toggle-bar" href="#">
            <BarIcon id="bar1"/>
          </a>
          <a class="toggle-bar" href="#">
            <BarIcon id="bar2"/>
          </a>
        </div>
      </div>
    )
  }
}

export default Controls
