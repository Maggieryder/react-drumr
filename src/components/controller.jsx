import React, {PropTypes, Component} from 'react'
import styles from '../scss/main.scss'
import Fader from './fader'
import Options from './options'
import BarIcon from '../../assets/images/icons/icon-bar.svg'
import MixerIcon from '../../assets/images/icons/icon-mixer.svg'
import PlayIcon from '../../assets/images/icons/icon-play.svg'
import PauseIcon from '../../assets/images/icons/icon-pause.svg'
import { connect } from 'react-redux'
import { updateTempo,
      updateSwing,
      updateResolution,
      updateBars,
      //updateKit,
      assignKitId,
      togglePlay,
      toggleBar} from '../actions/index'



class Controller extends Component {
  constructor(props) {
    super(props);
    console.log('>>> Controls PROPS', this.props)
  }
  renderBars(bars){
    bars.map((bar) => {
      return (
        <a key={`bar${i}`} className='toggle-bar' href='#' id={`bar${i}`} onClick={(i)=>{toggleBar}}>
          <BarIcon />
        </a>
      )
    })
  }
  toggleMixer(){
    console.log('toggle MIXER')
  }
  toggleBar(){
    console.log('toggle BAR')
  }
  onKitChange(e){
    console.log('KIT CHANGE', e.target.value)
    //assignKitId(e.target.value)
  }

  render(){
    let { kitLib, controller } = this.props
    let { kitOptions, kitId } = kitLib
    let { tempo, swing, isPlaying, bars, barId, resolution } = controller
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
        <Fader label='tempo' min={30} max={160} value={tempo} step={1} units='bpm' onChange={updateTempo}/>
        <Fader label='swing' min={0} max={100} value={swing} step={1} units='%' onChange={updateSwing}/>
        <Options id='kits' options={kitOptions} isSelected={kitId} onChange={(e) => {onKitChange}}/>
        <div>
          {renderBars(bars)}
        </div>
      </div>
    )
  }
}

function mapStateToProps({ controller, kitLib }){
  return { controller, kitLib }
}

export default connect(mapStateToProps,
  { updateTempo,
      updateSwing,
      updateResolution,
      updateBars,
      updateKit,
      assignKitId,
      togglePlay,
      toggleBar })(Controller)
